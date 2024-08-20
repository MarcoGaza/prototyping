import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'overlay-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overlay-item.component.html',
  styleUrl: './overlay-item.component.css',
})
export class OverlayItemComponent {
  @Input() contentId: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
}
