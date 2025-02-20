import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books: Book[] = [
    {
      id: 1,
      title: 'El Principito',
      author: 'Antoine de Saint-Exupéry',
      type: 'Tapa blanda',
      price: 12.99,
      imageUrl: 'https://m.media-amazon.com/images/I/71eOaFCT6PL.jpg'
    },
    {
      id: 2,
      title: 'El Poder',
      author: 'Pedro Baños',
      type: 'Tapa blanda',
      price: 9.99,
      imageUrl: 'https://m.media-amazon.com/images/I/71Zgz3z3JhL.jpg'
    },
    {
      id: 3,
      title: 'Diario de Ana Frank',
      author: 'Ana Frank',
      type: 'Tapa blanda',
      price: 15.99,
      imageUrl: 'https://m.media-amazon.com/images/I/81aA7hEEykL.jpg'
    }
  ];

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

