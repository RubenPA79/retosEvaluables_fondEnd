import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book!: Book;
  @Input() index!: number;
  @Output() deleteBook = new EventEmitter<number>();

  getCardClass(): string {
    return this.index % 2 === 0 ? 'card even' : 'card odd';
  }
}

