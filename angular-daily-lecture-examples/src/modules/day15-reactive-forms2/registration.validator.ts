import {AbstractControl, ValidationErrors} from "@angular/forms";

export class RegistrationValidator {

  static passwordComplexity(control: AbstractControl): ValidationErrors | null {
    const regexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])");

    const valid = regexp.test(control.value);

    return valid ? null : {
      passwordComplexity: true
    };
  }

  static passwordMatch(control: AbstractControl): ValidationErrors | null {
    const control1 = control.get('password');
    const control2 = control.get('passwordAgain');

    if (!control1 || !control2) {
      return null;
    }

    const valid = control1.value === control2.value;

    return valid ? null : {
      passwordsNotMatching: true
    };

  }

}
