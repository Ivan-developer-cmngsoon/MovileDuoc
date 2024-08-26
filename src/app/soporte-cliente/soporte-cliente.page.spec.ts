import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoporteClientePage } from './soporte-cliente.page';

describe('SoporteClientePage', () => {
  let component: SoporteClientePage;
  let fixture: ComponentFixture<SoporteClientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SoporteClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
