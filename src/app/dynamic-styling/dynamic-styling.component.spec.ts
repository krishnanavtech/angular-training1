import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicStylingComponent } from './dynamic-styling.component';

describe('DynamicStylingComponent', () => {
  let component: DynamicStylingComponent;
  let fixture: ComponentFixture<DynamicStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicStylingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
