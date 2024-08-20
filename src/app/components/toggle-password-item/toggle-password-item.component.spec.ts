import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglePasswordItemComponent } from './toggle-password-item.component';

describe('TogglePasswordItemComponent', () => {
  let component: TogglePasswordItemComponent;
  let fixture: ComponentFixture<TogglePasswordItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TogglePasswordItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TogglePasswordItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
