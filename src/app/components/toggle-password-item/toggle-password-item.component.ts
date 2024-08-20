import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'toggle-password-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-password-item.component.html',
  styleUrl: './toggle-password-item.component.css',
})
export class TogglePasswordItemComponent {
  @Input() groupId: string = '';
  config: {
    target: string[];
  } | null = null;

  ngOnInit() {
    this.config = {
      target: [
        `#hs-toggle-password-${this.groupId}`,
        `#hs-toggle-password-${this.groupId}-np`,
      ],
    };
  }
}
