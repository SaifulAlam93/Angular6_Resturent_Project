import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksloginComponent } from './drinkslogin.component';

describe('DrinksloginComponent', () => {
  let component: DrinksloginComponent;
  let fixture: ComponentFixture<DrinksloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
