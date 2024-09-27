import {Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';

@Injectable()
export class GlobalValidator {

  static PHONE_REGEXP = /^[0-9]{10,12}$/;
  static EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

  static mailFormat(control: FormControl): ValidationResult {
    if (control.value && (control.value.length <= 5 || !GlobalValidator.EMAIL_REGEXP.test(control.value))) {
      return {"email": true};
    }

    return null;
  }

  static phoneNumberFormat(control: FormControl): ValidationResult {
    if (control.value && (control.value.length <= 5 || !GlobalValidator.PHONE_REGEXP.test(control.value))) {
      return {"phoneNumber": true};
    }
    return null;
  }

}

interface ValidationResult {
  [key: string]: boolean;
}
