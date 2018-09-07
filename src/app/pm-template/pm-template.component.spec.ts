import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmTemplateComponent } from './pm-template.component';

describe('PmTemplateComponent', () => {
  let component: PmTemplateComponent;
  let fixture: ComponentFixture<PmTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
