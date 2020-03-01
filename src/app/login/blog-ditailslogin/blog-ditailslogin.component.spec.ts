import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDitailsloginComponent } from './blog-ditailslogin.component';

describe('BlogDitailsloginComponent', () => {
  let component: BlogDitailsloginComponent;
  let fixture: ComponentFixture<BlogDitailsloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDitailsloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDitailsloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
