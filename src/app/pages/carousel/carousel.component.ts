import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselItemComponent } from '../../components/carousel-item/carousel-item.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselItemComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {}
