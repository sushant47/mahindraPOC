import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridApplicationComponent } from './grid-application.component';

describe('GridApplicationComponent', () => {
  let component: GridApplicationComponent;
  let fixture: ComponentFixture<GridApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
