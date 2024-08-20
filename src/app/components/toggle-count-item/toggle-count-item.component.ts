import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'toggle-count-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-count-item.component.html',
  styleUrl: './toggle-count-item.component.css',
})
export class ToggleCountItemComponent {
  @Input() groupId: string = '';
  plans: {
    name: string;
    minPrice: number;
    maxPrice: number;
    hsToggleCount: any;
  }[] = [];

  ngOnInit() {
    this.plans = [
      {
        name: 'Startup',
        minPrice: 19,
        maxPrice: 29,
        hsToggleCount: this.getToggleData(19, 29),
      },
      {
        name: 'Team',
        minPrice: 89,
        maxPrice: 99,
        hsToggleCount: this.getToggleData(89, 99),
      },
      {
        name: 'Enterprise',
        minPrice: 129,
        maxPrice: 149,
        hsToggleCount: this.getToggleData(129, 149),
      },
    ];
  }

  getToggleData(min: number, max: number) {
    return {
      target: '#' + this.groupId,
      min: min,
      max: max,
    };
  }
}
