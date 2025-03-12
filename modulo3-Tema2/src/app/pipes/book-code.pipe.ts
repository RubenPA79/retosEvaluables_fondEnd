import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookCode'
})
export class BookCodePipe implements PipeTransform {
  transform(value: number): string {
    return `Ref-${value.toString().padStart(5, '0')}`; // Formato Ref-XXXXX
  }
}

