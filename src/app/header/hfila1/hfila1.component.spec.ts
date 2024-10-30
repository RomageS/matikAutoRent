import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hfila1Component } from './hfila1.component';

describe('Hfila1Component', () => {
  let component: Hfila1Component;
  let fixture: ComponentFixture<Hfila1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hfila1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hfila1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
