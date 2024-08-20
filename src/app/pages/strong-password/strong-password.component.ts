import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrongPasswordItemComponent } from '../../components/strong-password-item/strong-password-item.component';

@Component({
  selector: 'app-strong-password',
  standalone: true,
  imports: [CommonModule, StrongPasswordItemComponent],
  templateUrl: './strong-password.component.html',
  styleUrl: './strong-password.component.css',
})
export class StrongPasswordComponent {}
