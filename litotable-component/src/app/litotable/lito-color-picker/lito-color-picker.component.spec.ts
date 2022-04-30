import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitoColorPickerComponent } from './lito-color-picker.component';

describe('LitoColorPickerComponent', () => {
  let component: LitoColorPickerComponent;
  let fixture: ComponentFixture<LitoColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitoColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitoColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
