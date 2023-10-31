import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avatarsample3Component } from './avatarsample3.component';

describe('Avatarsample3Component', () => {
  let component: Avatarsample3Component;
  let fixture: ComponentFixture<Avatarsample3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Avatarsample3Component]
    });
    fixture = TestBed.createComponent(Avatarsample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
