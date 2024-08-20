import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveElementItemComponent } from './remove-element-item.component';

describe('RemoveElementItemComponent', () => {
  let component: RemoveElementItemComponent;
  let fixture: ComponentFixture<RemoveElementItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveElementItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoveElementItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
