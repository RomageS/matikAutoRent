import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hfila2Component } from './hfila2.component';

describe('Hfila2Component', () => {
  let component: Hfila2Component;
  let fixture: ComponentFixture<Hfila2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hfila2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hfila2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
