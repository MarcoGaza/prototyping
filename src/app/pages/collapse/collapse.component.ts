import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseItemComponent } from '../../components/collapse-item/collapse-item.component';

@Component({
  selector: 'app-collapse',
  standalone: true,
  imports: [CommonModule, CollapseItemComponent],
  templateUrl: './collapse.component.html',
  styleUrl: './collapse.component.css',
})
export class CollapseComponent {}
