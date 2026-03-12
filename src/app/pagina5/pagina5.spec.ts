import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina5 } from './pagina5';

describe('Pagina5', () => {
  let component: Pagina5;
  let fixture: ComponentFixture<Pagina5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagina5],
    }).compileComponents();

    fixture = TestBed.createComponent(Pagina5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
