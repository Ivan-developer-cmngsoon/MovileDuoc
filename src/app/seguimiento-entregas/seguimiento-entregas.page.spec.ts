import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeguimientoEntregasPage } from './seguimiento-entregas.page';

describe('SeguimientoEntregasPage', () => {
  let component: SeguimientoEntregasPage;
  let fixture: ComponentFixture<SeguimientoEntregasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoEntregasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
