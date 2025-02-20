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
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1676417220i/119063266.jpg'
    },
    {
      id: 2,
      title: 'El Poder',
      author: 'Pedro Baños',
      type: 'Tapa blanda',
      price: 9.99,
      imageUrl: 'https://m.media-amazon.com/images/I/5145f7WNjgL._SX342_SY445_.jpg'
    },
    {
      id: 3,
      title: 'Diario de Ana Frank',
      author: 'Ana Frank',
      type: 'Tapa blanda',
      price: 15.99,
      imageUrl: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202210/17/00106517185432____11__1200x1200.jpg?impolicy=Resize&width=1200'
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

