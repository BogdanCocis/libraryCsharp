import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss'],
})
export class ManageCategoriesComponent {
  categoryForm: FormGroup;
  msg: string = '';

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.categoryForm = this.fb.group({
      category: this.fb.control('', [
        Validators.required,
        this.noWhitespace,
        this.noNumbersOnly,
        this.noSpecialCharactersOnly,
        this.noSpecialCharacterOrSpaceAtStart,
        this.validStringFormat
      ]),
      subcategory: this.fb.control('', [
        Validators.required,
        this.noWhitespace,
        this.noNumbersOnly,
        this.noSpecialCharactersOnly,
        this.noSpecialCharacterOrSpaceAtStart,
        this.validStringFormat
      ]),
    });
  }

  addNewCategory() {
    if (this.categoryForm.invalid) {
      this.msg = 'Please fill all required fields correctly';
      setTimeout(() => (this.msg = ''), 5000);
      return;
    }

    let c = this.Category.value;
    let s = this.Subcategory.value;

    this.api.insertCategory(c, s).subscribe({
      next: (res: any) => {
        this.msg = res.toString();
        setTimeout(() => (this.msg = ''), 5000);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  noWhitespace(control: AbstractControl): ValidationErrors | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    return isWhitespace ? { whitespace: true } : null;
  }

  noNumbersOnly(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const startsWithNumber = /^\d/.test(value);
    const numbersOnly = /^\d+$/.test(value);
    return startsWithNumber || numbersOnly ? { numbersOnly: true } : null;
  }

  noSpecialCharactersOnly(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const specialCharactersOnly = /^[!@#\$%\^\&*\)\(+=._-]+$/.test(value);
    return specialCharactersOnly ? { specialCharactersOnly: true } : null;
  }

  noSpecialCharacterOrSpaceAtStart(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const startsWithSpecialCharacterOrSpace = /^[~`!@#\$%\^\&*\)\(+=._\-\[\]{}|\\:;"'<>,.?/\s]/.test(value);
    return startsWithSpecialCharacterOrSpace ? { specialCharacterOrSpaceAtStart: true } : null;
  }

  validStringFormat(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const validFormat = /^([a-zA-Z]+[- ]?)+[a-zA-Z]+$/.test(value) && !/[- ]{2,}/.test(value) && !/[- ]$/.test(value);
    return validFormat ? null : { invalidFormat: true };
  }

  get Category(): FormControl {
    return this.categoryForm.get('category') as FormControl;
  }
  get Subcategory(): FormControl {
    return this.categoryForm.get('subcategory') as FormControl;
  }
}
