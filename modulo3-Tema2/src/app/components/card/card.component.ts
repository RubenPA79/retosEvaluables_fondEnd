import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book!: Book;
  @Input() index!: number;  // ✅ Ahora recibimos el índice desde books.component.html

  @Output() deleteBook = new EventEmitter<number>();
}

