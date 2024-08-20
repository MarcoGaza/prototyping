import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberItemComponent } from '../../components/input-number-item/input-number-item.component';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [CommonModule, InputNumberItemComponent],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.css',
})
export class InputNumberComponent {}
