import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipItemComponent } from './tooltip-item.component';

describe('TooltipItemComponent', () => {
  let component: TooltipItemComponent;
  let fixture: ComponentFixture<TooltipItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TooltipItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
