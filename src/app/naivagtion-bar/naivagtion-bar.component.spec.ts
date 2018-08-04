import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaivagtionBarComponent } from './naivagtion-bar.component';

describe('NaivagtionBarComponent', () => {
  let component: NaivagtionBarComponent;
  let fixture: ComponentFixture<NaivagtionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaivagtionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaivagtionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
