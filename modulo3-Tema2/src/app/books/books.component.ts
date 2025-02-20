import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service'; // ✅ Corrección de ruta
import { Book } from 'src/app/models/book.model'; // ✅ Corrección de ruta

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  newBook: Book = {
    id: 0,
    title: '',
    author: '',
    type: '',
    price: 0,
    imageUrl: ''
  };

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books = this.booksService.getAll();
  }

  addBook(): void {
    if (this.newBook.title.trim() && this.newBook.author.trim()) {
      this.newBook.id = this.books.length + 1;
      this.booksService.add({ ...this.newBook });
      this.books = this.booksService.getAll(); // Refrescar la lista
      this.newBook = { id: 0, title: '', author: '', type: '', price: 0, imageUrl: '' }; // Resetear formulario
    }
  }

  removeBook(id: number): void {
    this.booksService.delete(id);
    this.books = this.booksService.getAll(); // Refrescar la lista
  }
}
