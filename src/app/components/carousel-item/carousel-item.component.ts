import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'carousel-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-item.component.html',
  styleUrl: './carousel-item.component.css',
})
export class CarouselItemComponent {}
