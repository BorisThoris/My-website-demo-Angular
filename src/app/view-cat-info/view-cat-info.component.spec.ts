import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCatInfoComponent } from './view-cat-info.component';

describe('ViewCatInfoComponent', () => {
  let component: ViewCatInfoComponent;
  let fixture: ComponentFixture<ViewCatInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCatInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCatInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
