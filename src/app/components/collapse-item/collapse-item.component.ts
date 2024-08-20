import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'collapse-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collapse-item.component.html',
  styleUrl: './collapse-item.component.css',
})
export class CollapseItemComponent {
  @Input() contentId: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
}
