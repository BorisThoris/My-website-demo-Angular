import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmWriterComponent } from './pm-writer.component';

describe('PmWriterComponent', () => {
  let component: PmWriterComponent;
  let fixture: ComponentFixture<PmWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
