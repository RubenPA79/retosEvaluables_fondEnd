import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({ providedIn: 'root' })
export class BooksService {
  private books: Book[] = [];

  getAll(): Book[] {
    return [...this.books]; // ✅ Devolver una copia para evitar referencias directas
  }

  addBook(book: Book): void {
    book.id = this.books.length + 1;
    this.books.push(book);
  }

  delete(id: number): boolean {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    }
    return false;
  }
}
