import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import { catchError, finalize, map, switchMap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';
import { HelperService } from '../services/helper.service';
import { AppConfig } from '../configs/app.config';
import { ApiBaseResponse } from './http-response';
import { StorageKeys } from '../models/app.constant';
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor(private helper: HelperService
    ) { }
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let onStart = this.isApiRequest(request)
            ? this.onStart()
            : this.helper.sleep(10);
        return from(onStart).pipe(
            switchMap(() => {
                if (localStorage.getItem(StorageKeys.ACCESS_KEY)) {
                    request = request.clone({
                        setHeaders: {
                            'AuthorizationKey': localStorage.getItem(StorageKeys.ACCESS_KEY)
                        }
                    });
                }
                return next.handle(request).pipe(
                    finalize(async () => {
                        if (this.isApiRequest(request)) {
                            await this.onEnd();
                        }
                    })
                );
            })
        );
    }

    private async onStart() {
        return this.helper.sleep(10);
    }
    private async onEnd() {
        await this.helper.sleep(AppConfig.SLEEP_TIMEOUT);
    }

    private isApiRequest(request: HttpRequest<any>): boolean {
        return request.url.indexOf(AppConfig.apiEndpoint) > -1;
    }
}
@Injectable()
export abstract class JsonParser {
    abstract parse(body: any): object;
}
@Injectable()
export class CustomJsonInterceptor implements HttpInterceptor {
    constructor(private jsonParser: JsonParser) { }

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler) {
        if (httpRequest.responseType === 'json') {
            // If the expected response type is JSON then handle it here.
            return this.handleJsonResponse(httpRequest, next);
        } else {
            return next.handle(httpRequest);
        }
    }

    private handleJsonResponse(httpRequest: HttpRequest<any>, next: HttpHandler) {
        // Override the responseType to disable the default JSON parsing.
        httpRequest = httpRequest.clone({ responseType: 'text' });
        // Handle the response using the custom parser.
        return next.handle(httpRequest).pipe(
            map((event) => this.parseJsonResponse(event)),
            catchError((event) => {
                return of(this.parseJsonResponse(event));
            })
        );
    }

    private parseJsonResponse(event: HttpEvent<any>) {
        if (event instanceof HttpResponse && typeof event.body === 'string') {
            return event.clone({ body: this.jsonParser.parse(event.body) });
        }
        if (event instanceof HttpErrorResponse) {
            const res = new HttpResponse({
                body: this.jsonParser.parse({
                    message: {
                        code: event.status || -1,
                        description: event.message,
                    },
                }),
                ...event,
            });
            return res;
        } else {
            return event;
        }
    }
}
class CustomJsonParser implements JsonParser {
    parse(obj?: any) {
        if (obj) {
            return new ApiBaseResponse(obj);
        }
        return null;
    }
}

export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HeaderInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: CustomJsonInterceptor,
        multi: true,
    },
    { provide: JsonParser, useClass: CustomJsonParser },
];