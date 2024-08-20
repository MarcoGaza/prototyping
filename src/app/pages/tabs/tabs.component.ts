import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsItemComponent } from '../../components/tabs-item/tabs-item.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, TabsItemComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent {}
