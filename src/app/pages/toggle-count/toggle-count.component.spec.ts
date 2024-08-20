import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleCountComponent } from './toggle-count.component';

describe('ToggleCountComponent', () => {
  let component: ToggleCountComponent;
  let fixture: ComponentFixture<ToggleCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleCountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
