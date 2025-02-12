import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book: any; // Recibe el libro desde el padre
  @Output() deleteBook = new EventEmitter<number>(); // Enviar ID del libro al padre

  removeCard() {
    console.log("Se hizo clic en eliminar", this.book.id_book);
    this.deleteBook.emit(this.book.id_book); // Enviar ID del libro al padre
  }
}
