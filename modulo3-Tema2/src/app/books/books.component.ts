import { Component } from '@angular/core';

interface Book {
  id_book: number;
  id_user: number;
  title: string;
  type: string;
  author: string;
  price: number;
  photo: string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Book[] = [
    { id_book: 1, id_user: 1, title: 'El Principito', type: 'Tapa blanda', author: 'Antoine de Saint-Exupéry', price: 12.99, photo: 'assets/principito.jpg' },
    { id_book: 2, id_user: 1, title: 'El poder', type: 'Tapa blanda', author: 'Pedro Baños', price: 9.99, photo: 'assets/poder.jpg' },
    { id_book: 3, id_user: 1, title: 'Diario de Ana Frank', type: 'Tapa blanda', author: 'Ana Frank', price: 15.99, photo: 'assets/anna.jpg' }
  ];

  newBook: Book = { id_book: 0, id_user: 1, title: '', type: '', author: '', price: 0, photo: '' };

  addBook() {
    if (this.newBook.title && this.newBook.author && this.newBook.photo) {
      this.newBook.id_book = this.books.length > 0 ? this.books[this.books.length - 1].id_book + 1 : 1;
      this.books.push({ ...this.newBook });
      this.newBook = { id_book: 0, id_user: 1, title: '', type: '', author: '', price: 0, photo: '' };
    }
  }

  // ✅ Corrección: Asegurar que esta función existe
  removeBook(id_book: number) {
    console.log("Eliminando libro con id:", id_book);
    this.books = this.books.filter(book => book.id_book !== id_book);
  }
}

