import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProveedorService } from 'src/app/services/proveedor.service';


@Component({
  selector: 'app-proveedor-ingredientes',
  templateUrl: './proveedor-ingredientes.component.html',
  styleUrls: ['./proveedor-ingredientes.component.sass']
})
export class ProveedorIngredientesComponent implements OnInit {

  provIngredienteForm ! : FormGroup;
  actionBtn : string ="Guardar";

  constructor(private formBuilder : FormBuilder ,
    private provServicio : ProveedorService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private proveedorIngredienteRef : MatDialogRef<ProveedorIngredientesComponent>) { }

  ngOnInit(): void {
    this.provIngredienteForm = this.formBuilder.group({

      nombre: ['',Validators.required],
      cantidad: ['', Validators.required],
      monto: ['',Validators.required],
      fecha_entrega: ['',Validators.required],

    });

    //console.log(this.editData);
    if(this.editData){
      this.actionBtn = "Update";
      this.provIngredienteForm.controls['tipo'].setValue(this.editData.nombre);
      this.provIngredienteForm.controls['nombre'].setValue(this.editData.cantidad);
      this.provIngredienteForm.controls['monto'].setValue(this.editData.monto);
      this.provIngredienteForm.controls['fecha_inicio'].setValue(this.editData.fecha_entrega);

    }
  }
  addProveedorIngrediente(){
    //console.log(this.empleadoForm.value);

    if(!this.editData){
      if(this.provIngredienteForm.valid){
      this.provServicio.postProveedorServicio(this.provIngredienteForm.value)
      .subscribe({
        next :(res)=>{
          alert("Empleado anadido con exito");
          this.provIngredienteForm.reset();
          this.proveedorIngredienteRef.close('Guardar');
        },
        error:()=>{
          alert("Error para anadir un proveedor de servicios")
        }
      })
    }

    } else {
      this.updateProveedorIngrediente()
    }

  }

  updateProveedorIngrediente(){
    this.provServicio.putProveedorServicio(this.provIngredienteForm.value,this.editData.id)

    .subscribe({
      next : (res)=>{
        alert("Empleado modificado con éxito");
      this.provIngredienteForm.reset
      this.proveedorIngredienteRef.close('update');
      },
      error:()=>{
        alert("Error de modificaciones");
      }
    })
  }
}
