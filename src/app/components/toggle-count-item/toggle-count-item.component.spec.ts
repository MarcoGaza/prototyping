import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleCountItemComponent } from './toggle-count-item.component';

describe('ToggleCountItemComponent', () => {
  let component: ToggleCountItemComponent;
  let fixture: ComponentFixture<ToggleCountItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleCountItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleCountItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
