import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Egg3Component } from './egg3.component';

describe('Egg3Component', () => {
  let component: Egg3Component;
  let fixture: ComponentFixture<Egg3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Egg3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Egg3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
