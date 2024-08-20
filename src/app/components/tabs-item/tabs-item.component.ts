import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tabs-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs-item.component.html',
  styleUrl: './tabs-item.component.css',
})
export class TabsItemComponent {
  @Input() groupId: string = '';
}
