import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lapii2Component } from './lapii2.component';

describe('Lapii2Component', () => {
  let component: Lapii2Component;
  let fixture: ComponentFixture<Lapii2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lapii2Component]
    });
    fixture = TestBed.createComponent(Lapii2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
