import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina9 } from './pagina9';

describe('Pagina9', () => {
  let component: Pagina9;
  let fixture: ComponentFixture<Pagina9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagina9],
    }).compileComponents();

    fixture = TestBed.createComponent(Pagina9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
