import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Egg5Component } from './egg5.component';

describe('Egg5Component', () => {
  let component: Egg5Component;
  let fixture: ComponentFixture<Egg5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Egg5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Egg5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
