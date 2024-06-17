import { Component, OnInit } from '@angular/core';
import { Book, CategoryBooks } from '../Models/models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent implements OnInit {

  availableBooks: Book[] = [];
  booksToDisplay: CategoryBooks[] = [];
  displayedColumns: string[] = [
    'id',
    'title',
    'author',
    'price',
    'available',
    'order',
  ];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllBooks().subscribe({
      next: (res: Book[]) => {
        this.availableBooks = [];
        console.log(res);
        for (var book of res) this.availableBooks.push(book);
        this.updateList();
      },
      error: (err: any) => console.log(err),
    });

  }

  updateList() {
    this.booksToDisplay = [];
    for (let book of this.availableBooks) {
      let exist = false;
      for (let categoryBooks of this.booksToDisplay) {
        if (
          book.category === categoryBooks.category &&
          book.subCategory === categoryBooks.subCategory
        )
          exist = true;
      }


      if (exist) {
        for (let categoryBooks of this.booksToDisplay) {
          if (
            book.category === categoryBooks.category &&
            book.subCategory === categoryBooks.subCategory
          )
            categoryBooks.books.push(book);
        }
      } else {
        this.booksToDisplay.push({
          category: book.category,
          subCategory: book.subCategory,
          books: [book],
        });
      }
    }
  }

  getBookCount(){
    return this.booksToDisplay.reduce((pv,cv)=> cv.books.length + pv, 0);
  }

  search(value: string) {
    value=value.toLocaleLowerCase();
    this.updateList();
    if(value.length >0){
      this.booksToDisplay=this.booksToDisplay.filter((categoryBooks) =>{
        categoryBooks.books=categoryBooks.books.filter(
          (book) =>
            book.title.toLocaleLowerCase().includes(value) ||
          book.author.toLocaleLowerCase().includes(value)
        );
        return categoryBooks.books.length >0;
      });
    }
  }

  orderBook(book: Book) {
    let userid=this.api.getTokenUserInfo()?.id ?? 0;
    this.api.orderBook(userid, book.id).subscribe({
      next: (res: any) => {
        book.available=false;
      },
      error: (err:any) => console.log(err),
    });
  }

  isBlocked() {
    let blocked = this.api.getTokenUserInfo()?.blocked ?? true;
    return blocked;
  }

}

