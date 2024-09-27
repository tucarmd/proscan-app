import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../configs/app.config';

@Injectable()
export class ApiRestService {
  constructor(private http: HttpClient) {}

  public get(path: string, opts?: any): Observable<any> {
    return this.http.get(`${AppConfig.apiEndpoint}${path}`, { ...opts });
  }
  public post(path: string, body: any): Observable<any> {
    return this.http.post(`${AppConfig.apiEndpoint}${path}`, body);
  }
  public put(path: string, body: any): Observable<any> {
    return this.http.put(`${AppConfig.apiEndpoint}${path}`, body);
  }
  public patch(path: string, body: any): Observable<any> {
    return this.http.patch(`${AppConfig.apiEndpoint}${path}`, body);
  }
  public delete(path: string): Observable<any> {
    return this.http.delete(`${AppConfig.apiEndpoint}${path}`);
  }
}
