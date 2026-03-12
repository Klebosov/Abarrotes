import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina7 } from './pagina7';

describe('Pagina7', () => {
  let component: Pagina7;
  let fixture: ComponentFixture<Pagina7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagina7],
    }).compileComponents();

    fixture = TestBed.createComponent(Pagina7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
