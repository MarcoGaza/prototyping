import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectItemComponent } from '../../components/select-item/select-item.component';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, SelectItemComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {}
