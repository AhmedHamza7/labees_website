import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]',
})
export class LazyLoadDirective {
  constructor(private host: ElementRef<HTMLElement>) {}
}

