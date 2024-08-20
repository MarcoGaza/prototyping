import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollspyItemComponent } from '../../components/scrollspy-item/scrollspy-item.component';

@Component({
  selector: 'app-scrollspy',
  standalone: true,
  imports: [CommonModule, ScrollspyItemComponent],
  templateUrl: './scrollspy.component.html',
  styleUrl: './scrollspy.component.css',
})
export class ScrollspyComponent {}
