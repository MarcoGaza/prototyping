import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayItemComponent } from './overlay-item.component';

describe('OverlayItemComponent', () => {
  let component: OverlayItemComponent;
  let fixture: ComponentFixture<OverlayItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OverlayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
