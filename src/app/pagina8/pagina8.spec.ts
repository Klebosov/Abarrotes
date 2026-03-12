import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina8 } from './pagina8';

describe('Pagina8', () => {
  let component: Pagina8;
  let fixture: ComponentFixture<Pagina8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagina8],
    }).compileComponents();

    fixture = TestBed.createComponent(Pagina8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
