import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Egg1Component } from './egg1.component';

describe('Egg1Component', () => {
  let component: Egg1Component;
  let fixture: ComponentFixture<Egg1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Egg1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Egg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
