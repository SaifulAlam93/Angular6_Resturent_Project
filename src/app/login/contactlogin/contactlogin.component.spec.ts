import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactloginComponent } from './contactlogin.component';

describe('ContactloginComponent', () => {
  let component: ContactloginComponent;
  let fixture: ComponentFixture<ContactloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
