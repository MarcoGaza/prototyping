import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongPasswordItemComponent } from './strong-password-item.component';

describe('StrongPasswordItemComponent', () => {
  let component: StrongPasswordItemComponent;
  let fixture: ComponentFixture<StrongPasswordItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrongPasswordItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StrongPasswordItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
