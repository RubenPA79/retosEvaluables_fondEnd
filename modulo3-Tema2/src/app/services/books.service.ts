import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books: Book[] = [];

  constructor() {}

  getAll(): Book[] {
    return this.books;
  }

  add(book: Book): void {
    this.books.push(book);
  }

  delete(id: number): boolean {
    const index = this.books.findIndex((b) => b.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    }
    return false;
  }
}

