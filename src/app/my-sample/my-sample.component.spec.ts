import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySampleComponent } from './my-sample.component';

describe('MySampleComponent', () => {
  let component: MySampleComponent;
  let fixture: ComponentFixture<MySampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
