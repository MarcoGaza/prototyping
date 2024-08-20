import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberItemComponent } from './input-number-item.component';

describe('InputNumberItemComponent', () => {
  let component: InputNumberItemComponent;
  let fixture: ComponentFixture<InputNumberItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputNumberItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputNumberItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
