import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmTemplate2Component } from './pm-template2.component';

describe('PmTemplate2Component', () => {
  let component: PmTemplate2Component;
  let fixture: ComponentFixture<PmTemplate2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmTemplate2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmTemplate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
