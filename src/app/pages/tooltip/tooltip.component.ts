import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipItemComponent } from '../../components/tooltip-item/tooltip-item.component';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule, TooltipItemComponent],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css',
})
export class TooltipComponent {}
