import { Injectable } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { map, catchError, timeout } from 'rxjs/operators';

import { of } from 'rxjs';
import { ApiDlcLocationResponse, ApiMakesResponse, ApiModelsResponse, ApiVehicleResponse, ApiYearsResponse } from 'src/app/models/app.model';
import { AppConfig } from 'src/app/configs/app.config';

const API_DECODE_VIN = '/vehicles/decode/${vin}';
const API_GET_MAKES = '/makes';
const API_GET_YEARS = '/years/${make}';
const API_GET_MODELS = '/models/${make}/${year}';
const API_GET_DLC_LOCATION = '/dlc/${make}/${year}/${model}';
const API_GET_DLC_LOCATION_BY_VIN = '/dlc/${vin}';

@Injectable()
export class VehicleServiceProvider {
  constructor(private apiRestService: ApiRestService) { }

  async decodeVin(vin: string): Promise<ApiVehicleResponse> {
    return this.apiRestService
      .get(API_DECODE_VIN.replace('${vin}', vin))
      .pipe(
        timeout(AppConfig.shortHttpRequestTimeoutInMs),
        map(res => new ApiVehicleResponse(res)),
        catchError((error: any) =>
          of(new ApiVehicleResponse(error))
        )
      )
      .toPromise();
  }

  async getMakes(): Promise<ApiMakesResponse> {
    return this.apiRestService
      .get(API_GET_MAKES)
      .pipe(
        timeout(AppConfig.shortHttpRequestTimeoutInMs),
        map(res => new ApiMakesResponse(res)),
        catchError((error: any) =>
          of(new ApiMakesResponse(error))
        )
      )
      .toPromise();
  }

  async getYears(make): Promise<ApiYearsResponse> {
    return this.apiRestService
      .get(API_GET_YEARS.replace('${make}', make))
      .pipe(
        timeout(AppConfig.shortHttpRequestTimeoutInMs),
        map(res => new ApiYearsResponse(res)),
        catchError((error: any) =>
          of(new ApiYearsResponse(error))
        )
      )
      .toPromise();
  }

  async getModels(make, year): Promise<ApiModelsResponse> {
    return this.apiRestService
      .get(API_GET_MODELS.replace('${make}', make).replace('${year}', year))
      .pipe(
        timeout(AppConfig.shortHttpRequestTimeoutInMs),
        map(res => new ApiModelsResponse(res)),
        catchError((error: any) =>
          of(new ApiModelsResponse(error))
        )
      )
      .toPromise();
  }

  async getDlcLocation(make, year, model) {
    return this.apiRestService
      .get(API_GET_DLC_LOCATION.replace('${make}', make).replace('${year}', year).replace('${model}', model))
      .pipe(
        timeout(AppConfig.shortHttpRequestTimeoutInMs),
        map(res => new ApiDlcLocationResponse(res)),
        catchError((error: any) =>
          of(new ApiDlcLocationResponse(error))
        )
      )
      .toPromise();
  }

  async getDlcLocationByVin(vin) {
    return this.apiRestService
      .get(API_GET_DLC_LOCATION_BY_VIN.replace('${vin}', vin))
      .pipe(
        timeout(AppConfig.shortHttpRequestTimeoutInMs),
        map(res => new ApiDlcLocationResponse(res)),
        catchError((error: any) =>
          of(new ApiDlcLocationResponse(error))
        )
      )
      .toPromise();
  }
}
