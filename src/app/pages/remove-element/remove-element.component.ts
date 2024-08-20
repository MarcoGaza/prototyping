import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveElementItemComponent } from '../../components/remove-element-item/remove-element-item.component';

@Component({
  selector: 'app-remove-element',
  standalone: true,
  imports: [CommonModule, RemoveElementItemComponent],
  templateUrl: './remove-element.component.html',
  styleUrl: './remove-element.component.css',
})
export class RemoveElementComponent {}
