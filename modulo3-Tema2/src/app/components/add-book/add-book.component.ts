import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    type: '', // Nueva propiedad
    price: 0,
    imageUrl: '' // Nueva propiedad
  };

  constructor(private booksService: BooksService) {}

  // Método para añadir un libro al servicio
  addBook(): void {
    if (this.book.title && this.book.author && this.book.type && this.book.price && this.book.imageUrl) {
      this.book.id = Math.floor(Math.random() * 1000); // Generar un ID aleatorio
      this.booksService.add(this.book);
      this.book = { id: 0, title: '', author: '', type: '', price: 0, imageUrl: '' }; // Resetear formulario
    }
  }
}


