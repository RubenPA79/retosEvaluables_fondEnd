import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({ providedIn: 'root' })
export class BooksService {
  private books: Book[] = [];

  constructor() {
    this.loadBooks(); // Cargar libros desde localStorage al iniciar
  }

  private saveBooks(): void {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  private loadBooks(): void {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
    }
  }

  getAll(): Book[] {
    return [...this.books]; // Devolver una copia para evitar referencias directas
  }

  addBook(book: Book): void {
    book.id = this.books.length > 0 ? this.books[this.books.length - 1].id + 1 : 1;
    this.books.push(book);
    this.saveBooks(); // Guardar en localStorage
  }

  delete(id: number): boolean {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
      this.saveBooks(); // Guardar cambios en localStorage
      return true;
    }
    return false;
  }
}


