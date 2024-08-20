import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'remove-element-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './remove-element-item.component.html',
  styleUrl: './remove-element-item.component.css',
})
export class RemoveElementItemComponent {
  @Input() contentId: string = '';
}
