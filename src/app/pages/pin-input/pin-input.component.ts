import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinInputItemComponent } from '../../components/pin-input-item/pin-input-item.component';

@Component({
  selector: 'app-pin-input',
  standalone: true,
  imports: [CommonModule, PinInputItemComponent],
  templateUrl: './pin-input.component.html',
  styleUrl: './pin-input.component.css',
})
export class PinInputComponent {}
