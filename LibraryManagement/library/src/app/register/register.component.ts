import { Component } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User, UserType } from '../Models/models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Corrected typo
})
export class RegisterComponent {
  hide = true;
  responseMsg: string = '';
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.registerForm = fb.group(
      {
        firstName: fb.control('', [Validators.required, validNameFormat, Validators.maxLength(15)]),
        lastName: fb.control('', [Validators.required, validNameFormat, Validators.maxLength(15)]),
        email: fb.control('', [Validators.required, Validators.email, emailNoSpecialStartValidator()]),
        password: fb.control('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
          passwordComplexityValidator()
        ]),
        rpassword: fb.control(''),
        userType: fb.control('student'),
      },
      {
        validators: [repeatPasswordValidator],
      } as AbstractControlOptions
    );
  }

  register() {
    let user: User = {
      id: 0,
      firstName: this.registerForm.get('firstName')?.value,
      lastName: this.registerForm.get('lastName')?.value,
      email: this.registerForm.get('email')?.value,
      userType: UserType.USER,
      mobile: '',
      password: this.registerForm.get('password')?.value,
      blocked: false,
      active: false,
      createdOn: '',
      fine: 0,
    };

    this.api.createAccount(user).subscribe({
      next: (res: any) => {
        console.log(res);
        this.responseMsg = res.toString();
      },
      error: (err: any) => {
        console.log('Error: ');
        console.log(err);
      },
    });
  }

  getFirstNameErrors() {
    if (this.FirstName.hasError('required')) return 'Field is required!';
    if (this.FirstName.hasError('invalidNameFormat')) return 'Name must be in the format "string-string" or "string string"!';
    if (this.FirstName.hasError('maxlength')) return 'Maximum 15 characters!';
    return '';
  }

  getLastNameErrors() {
    if (this.LastName.hasError('required')) return 'Field is required!';
    if (this.LastName.hasError('invalidNameFormat')) return 'Name must be in the format "string-string" or "string string"!';
    if (this.LastName.hasError('maxlength')) return 'Maximum 15 characters!';
    return '';
  }

  getEmailErrors() {
    if (this.Email.hasError('required')) return 'Email is required!';
    if (this.Email.hasError('email')) return 'Email is invalid.';
    if (this.Email.hasError('invalidStart')) return 'Email cannot start with a digit or special character.';
    if (this.Email.hasError('invalidDomain')) return 'Email domain must contain exactly one dot (".") after "@" but not immediately after.';
    return '';
  }

  getPasswordErrors() {
    if (this.Password.hasError('required')) return 'Password is required!';
    if (this.Password.hasError('minlength')) return 'Minimum 8 characters are required!';
    if (this.Password.hasError('maxlength')) return 'Maximum 15 characters are required!';
    if (this.Password.hasError('passwordComplexity')) return 'Password must contain at least one uppercase letter, one special character, one digit, and no spaces.';
    return '';
  }

  get FirstName(): FormControl {
    return this.registerForm.get('firstName') as FormControl;
  }

  get LastName(): FormControl {
    return this.registerForm.get('lastName') as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get Password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get RPassword(): FormControl {
    return this.registerForm.get('rpassword') as FormControl;
  }
}

export function validNameFormat(control: AbstractControl): ValidationErrors | null {
  const value = control.value || '';
  const validFormat = /^([a-zA-Z]+[- ]?[a-zA-Z]+)$/.test(value);
  return validFormat ? null : { 'invalidNameFormat': true };
}

export function emailNoSpecialStartValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';
    const invalidStart = /^[^a-zA-Z]/.test(value);
    const atIndex = value.indexOf('@');
    const domainPart = value.substring(atIndex + 1);
    const invalidDomain = !/^([^.]+[.][^.]+)$/.test(domainPart);

    return invalidStart || invalidDomain ? { 'invalidStart': invalidStart, 'invalidDomain': invalidDomain } : null;
  };
}

export function passwordComplexityValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';
    const hasUpperCase = /[A-Z]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasDigit = /\d/.test(value);
    const hasNoSpaces = !/\s/.test(value);

    const isValid = hasUpperCase && hasSpecialCharacter && hasDigit && hasNoSpaces;
    return isValid ? null : { 'passwordComplexity': true };
  };
}

export const repeatPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const pwd = control.get('password')?.value;
  const rpwd = control.get('rpassword')?.value;

  if (pwd === rpwd) {
    control.get('rpassword')?.setErrors(null);
    return null;
  } else {
    control.get('rpassword')?.setErrors({ rpassword: true });
    return { rpassword: true };
  }
};
