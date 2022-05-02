import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrainCreatorComponent } from './constrain-creator.component';

describe('ConstrainCreatorComponent', () => {
  let component: ConstrainCreatorComponent;
  let fixture: ComponentFixture<ConstrainCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstrainCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstrainCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
