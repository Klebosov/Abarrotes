import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina6 } from './pagina6';

describe('Pagina6', () => {
  let component: Pagina6;
  let fixture: ComponentFixture<Pagina6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagina6],
    }).compileComponents();

    fixture = TestBed.createComponent(Pagina6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
