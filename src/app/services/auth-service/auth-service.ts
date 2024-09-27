import { ApiRestService } from '../api-rest.service';
import {
  ApiBooleanResponse,
  ApiUserResponse,
  User,
} from 'src/app/models/app.model';
import { BehaviorSubject, of } from 'rxjs';
import { AppConfig } from 'src/app/configs/app.config';
import { Injectable } from '@angular/core';
import { catchError, map, timeout } from 'rxjs/operators';
import { StorageKeys } from 'src/app/models/app.constant';
import { UserState } from '../state/user.state';
const invalidTokenKeyCode = 401;
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

const API_LOGIN = '/shops/login';
const API_GET_USER_INFO = '/shops/getUserInformation';
const API_RESET_PASSWORD = '/shops/{USER_ID}/resetpassword';

@Injectable()
export class AuthServiceProvider {
  authState: BehaviorSubject<boolean> = new BehaviorSubject(null);
  currentUser: User;
  constructor(private apiRestService: ApiRestService) {}

  async init() {
    await this.#loadFromStorage();
  }

  async #importUserResponseToStorage(resp: ApiUserResponse) {
    if (resp.success && resp.data) {
      localStorage.setItem(
        StorageKeys.LAST_LOGIN_TIME,
        new Date().getTime().toString()
      );
      localStorage.setItem(StorageKeys.ACCESS_KEY, resp.data.authorizationKey);
      localStorage.setItem(StorageKeys.USER_INFO, JSON.stringify(resp.data));
      //this.userProfile = resp.user;
      this.#setAuthData(resp.data, resp.data.authorizationKey);
    }
  }

  async #loadFromStorage() {
    const token = localStorage.getItem(StorageKeys.ACCESS_KEY);
    const userProfile = localStorage.getItem(StorageKeys.USER_INFO);
    if (token && userProfile) {
      UserState.setAuthenticatedUser(JSON.parse(userProfile), token);
    } else {
      UserState.setAuthenticatedUser(null, null);
    }
  }

  async checkToken() {
    try {
      const resp = await this.loginByToken();
      await this.#importUserResponseToStorage(resp);
    } catch (error: any) {
      if (error?.status === invalidTokenKeyCode) {
        return Promise.resolve(false);
      }
    }
    return Promise.resolve(true);
  }

  async loginByToken(): Promise<ApiUserResponse> {
    const resp = await this.apiRestService
      .get(API_GET_USER_INFO)
      .pipe(
        timeout(AppConfig.shortHttpRequestTimeoutInMs),
        map((res) => new ApiUserResponse(res)),
        catchError((error: any) => of(new ApiUserResponse(error)))
      )
      .toPromise();
    if (resp.success) {
      await this.#importUserResponseToStorage(resp);
      return resp;
    }
  }

  async login(username, password): Promise<ApiUserResponse> {
    if (username && password) {
      let credentials = {
        u: username,
        p: password,
        isFitCar: true,
      };
      const resp = await this.apiRestService
        .post(API_LOGIN, credentials)
        .pipe(
          timeout(AppConfig.shortHttpRequestTimeoutInMs),
          map((res) => new ApiUserResponse(res)),
          catchError((error: any) => of(new ApiUserResponse(error)))
        )
        .toPromise();
      if (resp.success) {
        await this.#importUserResponseToStorage(resp);
      }
      return resp;
    }
    return null;
  }

  async reset(email: string): Promise<ApiBooleanResponse> {
    return this.apiRestService
      .post(API_RESET_PASSWORD.replace('{USER_ID}', email), {})
      .pipe(
        timeout(AppConfig.shortHttpRequestTimeoutInMs),
        map((res) => new ApiBooleanResponse(res)),
        catchError((error: any) => of(new ApiBooleanResponse(error)))
      )
      .toPromise();
  }

  setUserInfo(user: User) {
    this.currentUser = user;
    localStorage.setItem(StorageKeys.ACCESS_KEY, user.authorizationKey);
    localStorage.setItem(StorageKeys.USER_ID, user.id);
    localStorage.setItem(
      StorageKeys.USER_INFO,
      JSON.stringify(this.currentUser)
    );
  }

  #setAuthData(user: User, token: string) {
    if (user && token) {
      this.authState.next(true);
      UserState.setAuthenticatedUser(user, token);
    } else {
      this.authState.next(false);
      UserState.setAuthenticatedUser();
    }
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem(StorageKeys.USER_ID);
    localStorage.removeItem(StorageKeys.ACCESS_KEY);
    localStorage.removeItem(StorageKeys.USER_INFO);
    localStorage.removeItem(StorageKeys.USER_SETTINGS);
    localStorage.removeItem(StorageKeys.REPORT_SESSION);
    this.clearCacheReports();
    UserState.resetAll();
  }

  clearCacheReports() {
    let arr = [];
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf(StorageKeys.REPORT_DETAILS) > -1) {
        arr.push(localStorage.key(i));
      }
    }

    for (let i = 0; i < arr.length; i++) {
      localStorage.removeItem(arr[i]);
    }
  }
}
