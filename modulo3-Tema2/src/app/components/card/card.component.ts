import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-card', // ✅ Asegurar que el selector es correcto
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book!: Book;
  @Output() deleteBook = new EventEmitter<number>();

  removeCard(): void {
    this.deleteBook.emit(this.book.id);
  }
}
