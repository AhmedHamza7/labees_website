import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  template: `<div class="empty-state">{{ message }}</div>`,
})
export class EmptyStateComponent {
  @Input() message = 'No data available.';
}

