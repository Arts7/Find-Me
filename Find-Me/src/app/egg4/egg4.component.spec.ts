import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Egg4Component } from './egg4.component';

describe('Egg4Component', () => {
  let component: Egg4Component;
  let fixture: ComponentFixture<Egg4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Egg4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Egg4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
