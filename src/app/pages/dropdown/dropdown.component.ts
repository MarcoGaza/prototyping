import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownItemComponent } from '../../components/dropdown-item/dropdown-item.component';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, DropdownItemComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {}
