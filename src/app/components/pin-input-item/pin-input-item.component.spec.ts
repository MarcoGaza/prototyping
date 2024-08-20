import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinInputItemComponent } from './pin-input-item.component';

describe('PinInputItemComponent', () => {
  let component: PinInputItemComponent;
  let fixture: ComponentFixture<PinInputItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinInputItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PinInputItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
