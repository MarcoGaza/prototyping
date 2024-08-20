import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleCountItemComponent } from '../../components/toggle-count-item/toggle-count-item.component';

@Component({
  selector: 'app-toggle-count',
  standalone: true,
  imports: [CommonModule, ToggleCountItemComponent],
  templateUrl: './toggle-count.component.html',
  styleUrl: './toggle-count.component.css',
})
export class ToggleCountComponent {}
