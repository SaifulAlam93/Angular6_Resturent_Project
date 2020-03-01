import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaloginComponent } from './pizzalogin.component';

describe('PizzaloginComponent', () => {
  let component: PizzaloginComponent;
  let fixture: ComponentFixture<PizzaloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
