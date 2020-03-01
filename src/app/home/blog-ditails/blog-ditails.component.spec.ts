import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDitailsComponent } from './blog-ditails.component';

describe('BlogDitailsComponent', () => {
  let component: BlogDitailsComponent;
  let fixture: ComponentFixture<BlogDitailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDitailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
