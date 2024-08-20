import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperItemComponent } from '../../components/stepper-item/stepper-item.component';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule, StepperItemComponent],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
})
export class StepperComponent {}
