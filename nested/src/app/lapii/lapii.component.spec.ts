import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapiiComponent } from './lapii.component';

describe('LapiiComponent', () => {
  let component: LapiiComponent;
  let fixture: ComponentFixture<LapiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LapiiComponent]
    });
    fixture = TestBed.createComponent(LapiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
