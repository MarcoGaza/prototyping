import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayItemComponent } from '../../components/overlay-item/overlay-item.component';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule, OverlayItemComponent],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.css',
})
export class OverlayComponent {}
