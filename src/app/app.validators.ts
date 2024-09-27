import { AbstractControl } from '@angular/forms';
import { MAX_MILEAGE_VALUE, MAX_MILEAGE_VALUE_KM } from './configs/app.config';

export function ValidateVin(control: AbstractControl) {
  // let re = new RegExp('^[A-HJ-NPR-Z\\d]{8}[\\dX][A-HJ-NPR-Z\\d]{2}\\d{6}$');
  let re = new RegExp('^[a-zA-Z0-9]{17}$');
  if (control.value.length && !(control.value.match(re))) {
    return { invalidVin: true };
  }
  return null;
}

export function ValidateMileage(control: AbstractControl) {
  if (isNaN(control.value) || control.value <= 0 || control.value > MAX_MILEAGE_VALUE) {
    return { invalidMileage: true };
  }
  return null;
}

export function ValidateMileageKm(control: AbstractControl) {
  if (isNaN(control.value) || control.value <= 0 || control.value > MAX_MILEAGE_VALUE_KM) {
    return { invalidMileage: true };
  }
  return null;
}
