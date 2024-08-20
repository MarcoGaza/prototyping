import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollspyItemComponent } from './scrollspy-item.component';

describe('ScrollspyItemComponent', () => {
  let component: ScrollspyItemComponent;
  let fixture: ComponentFixture<ScrollspyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollspyItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollspyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
