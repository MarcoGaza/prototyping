import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';

@Component({
  selector: 'accordion-group',
  standalone: true,
  imports: [CommonModule, AccordionItemComponent],
  templateUrl: './accordion-group.component.html',
  styleUrl: './accordion-group.component.css',
})
export class AccordionGroupComponent {}
