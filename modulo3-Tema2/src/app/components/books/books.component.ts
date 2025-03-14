import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.books = this.booksService.getAll();
  }

  deleteBook(id: number): void {
    if (this.booksService.delete(id)) {
      this.loadBooks(); // Recargar la lista desde localStorage
    }
  }
}


