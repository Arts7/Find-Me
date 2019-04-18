import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Egg2Component } from './egg2.component';

describe('Egg2Component', () => {
  let component: Egg2Component;
  let fixture: ComponentFixture<Egg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Egg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Egg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
