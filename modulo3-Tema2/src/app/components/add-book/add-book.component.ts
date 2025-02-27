import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  newBook: Book = { id: 0, title: '', author: '', type: '', price: 0, imageUrl: '' };

  constructor(private booksService: BooksService) {}

  addBook(): void {
    if (this.newBook.title && this.newBook.author) {
      this.booksService.addBook(this.newBook);
      this.newBook = { id: 0, title: '', author: '', type: '', price: 0, imageUrl: '' };
    }
  }
}
