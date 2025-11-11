import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: number, currency = 'USD'): string {
    return `${value} ${currency}`;
  }
}

