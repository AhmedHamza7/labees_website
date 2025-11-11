import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button type="button">{{ label }}</button>`,
})
export class ButtonComponent {
  @Input() label = 'Button';
}

