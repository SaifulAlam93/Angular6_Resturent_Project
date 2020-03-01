import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginhComponent } from './loginh.component';

describe('LoginhComponent', () => {
  let component: LoginhComponent;
  let fixture: ComponentFixture<LoginhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
