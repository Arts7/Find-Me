import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Egg6Component } from './egg6.component';

describe('Egg6Component', () => {
  let component: Egg6Component;
  let fixture: ComponentFixture<Egg6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Egg6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Egg6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
