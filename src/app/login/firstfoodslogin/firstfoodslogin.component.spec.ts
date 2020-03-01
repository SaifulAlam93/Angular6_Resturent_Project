import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstfoodsloginComponent } from './firstfoodslogin.component';

describe('FirstfoodsloginComponent', () => {
  let component: FirstfoodsloginComponent;
  let fixture: ComponentFixture<FirstfoodsloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstfoodsloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstfoodsloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
