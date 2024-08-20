import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TogglePasswordItemComponent } from '../../components/toggle-password-item/toggle-password-item.component';

@Component({
  selector: 'app-toggle-password',
  standalone: true,
  imports: [CommonModule, TogglePasswordItemComponent],
  templateUrl: './toggle-password.component.html',
  styleUrl: './toggle-password.component.css',
})
export class TogglePasswordComponent {}
