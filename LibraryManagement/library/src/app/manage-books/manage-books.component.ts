import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.scss'],
})
export class ManageBooksComponent {
  addBookForm: FormGroup;
  deleteBookForm: FormControl;

  addMsg: string = '';
  delMsg: string = '';

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.addBookForm = fb.group({
      title: fb.control('', [Validators.required, this.noWhitespaceValidator, this.bookTitleValidator]),
      author: fb.control('', [Validators.required, this.noWhitespaceValidator, this.realNameValidator]),
      category: fb.control('', [Validators.required, this.noWhitespaceValidator]),
      subcategory: fb.control('', [Validators.required, this.noWhitespaceValidator]),
      price: fb.control('', [
        Validators.required,
        Validators.min(0),
        Validators.max(50)
      ]),
    });

    this.deleteBookForm = fb.control('', [Validators.required]);
  }

  insertBook() {
    if (this.addBookForm.invalid) {
      if (this.Price.hasError('min') || this.Price.hasError('max')) {
        this.addMsg = 'Price must be between 0 and 50';
      } else {
        this.addMsg = 'Please fill all required fields correctly';
      }
      setTimeout(() => (this.addMsg = ''), 5000);
      return;
    }

    let book = {
      id: 0,
      title: this.Title.value,
      category: {
        category: this.Category.value,
        subCategory: this.Subcategory.value,
      },
      price: this.Price.value,
      available: true,
      author: this.Author.value,
    };
    this.api.insertBook(book).subscribe({
      next: (res: any) => {
        this.addMsg = 'Book Inserted';
        setTimeout(() => (this.addMsg = ''), 5000);
        this.addBookForm.reset();
      },
      error: (err: any) => console.log(err),
    });
  }

  deleteBook() {
    let id: number = parseInt(this.deleteBookForm.value);

    this.api.deleteBook(id).subscribe({
      next: (res: any) => {
        if (res === 'success') {
          this.delMsg = 'Book Deleted';
        } else {
          this.delMsg = 'Book not found!';
        }
        setTimeout(() => (this.delMsg = ''), 5000);
      },
      error: (err: any) => console.log(err),
    });
  }

  noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  bookTitleValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const invalidStartChar = /^[~`:"\][{}?/|><)(*&^%$#@!.,'\\-]/.test(value);
    const startsWithWhitespace = /^\s/.test(value);
    const onlyWhitespace = /^\s+$/.test(value);
    const hasMoreThanOneSpace = /\s{2,}/.test(value);
    const hasMoreThanTwoDashes = (value.match(/-/g) || []).length > 2;
    const invalidDashUsage = /(^-)|(-$)|(\s-\s)|(--)/.test(value) || /([^-]\s-[^-])|(-[^a-zA-Z])/g.test(value);
    const isValid = !invalidStartChar && !startsWithWhitespace && !onlyWhitespace && !hasMoreThanOneSpace && !hasMoreThanTwoDashes && !invalidDashUsage;
    return isValid ? null : { invalidTitle: true };
  }

  realNameValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const startsWithInvalidChar = /^[\s\d!@#\$%\^\&*\)\(+=._-]/.test(value);
    const hasInvalidPattern = /[^a-zA-Z\s-]/.test(value);
    const hasConsecutiveSpecials = /[-]{2,}/.test(value);
    const hasConsecutiveSpaces = /\s{2,}/.test(value);
    const isValid = !startsWithInvalidChar && !hasInvalidPattern && !hasConsecutiveSpecials && !hasConsecutiveSpaces;

    return isValid ? null : { invalidName: true };
  }

  get Title(): FormControl {
    return this.addBookForm.get('title') as FormControl;
  }
  get Author(): FormControl {
    return this.addBookForm.get('author') as FormControl;
  }
  get Category(): FormControl {
    return this.addBookForm.get('category') as FormControl;
  }
  get Subcategory(): FormControl {
    return this.addBookForm.get('subcategory') as FormControl;
  }
  get Price(): FormControl {
    return this.addBookForm.get('price') as FormControl;
  }
}
