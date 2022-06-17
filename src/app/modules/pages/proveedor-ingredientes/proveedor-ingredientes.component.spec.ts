import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorIngredientesComponent } from './proveedor-ingredientes.component';

describe('ProveedorIngredientesComponent', () => {
  let component: ProveedorIngredientesComponent;
  let fixture: ComponentFixture<ProveedorIngredientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorIngredientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorIngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
