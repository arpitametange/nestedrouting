import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateProgramatacallyComponent } from './navigate-programatacally.component';

describe('NavigateProgramatacallyComponent', () => {
  let component: NavigateProgramatacallyComponent;
  let fixture: ComponentFixture<NavigateProgramatacallyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigateProgramatacallyComponent]
    });
    fixture = TestBed.createComponent(NavigateProgramatacallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
