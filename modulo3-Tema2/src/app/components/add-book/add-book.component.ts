import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model';
import { Router } from '@angular/router';

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
    type: '',
    price: 0,
    imageUrl: ''
  };

  constructor(private booksService: BooksService, private router: Router) {}

  addBook(): void {
    if (this.book.title && this.book.author && this.book.type && this.book.price && this.book.imageUrl) {
      this.book.id = Math.floor(Math.random() * 1000);
      this.booksService.add(this.book);
      this.book = { id: 0, title: '', author: '', type: '', price: 0, imageUrl: '' }; // Resetear formulario
      this.router.navigate(['/books']); // Redirigir a la lista de libros después de añadir
    }
  }
}

