import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitotableComponent } from './litotable.component';

describe('LitotableComponent', () => {
  let component: LitotableComponent;
  let fixture: ComponentFixture<LitotableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitotableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
