import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-proveedor-servicios',
  templateUrl: './proveedor-servicios.component.html',
  styleUrls: ['./proveedor-servicios.component.sass']
})
export class ProveedorServiciosComponent implements OnInit {

 // rolList=["Encargado","Cajero","Cocinero","Camarero"]

  provServicioForm ! : FormGroup;
  actionBtn : string ="Guardar";

  constructor(private formBuilder : FormBuilder ,
    private provServicio : ProveedorService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private proveedorServiciosRef : MatDialogRef<ProveedorServiciosComponent>) { }

  ngOnInit(): void {
    this.provServicioForm = this.formBuilder.group({

      tipo: ['',Validators.required],
      nombre: ['',Validators.required],
      monto: ['',Validators.required],
      fecha_inicio: ['',Validators.required],
      fecha_final: ['',Validators.required],
      codigo_contrato: ['',Validators.required],

    });

    //console.log(this.editData);
    if(this.editData){
      this.actionBtn = "Update";
      this.provServicioForm.controls['tipo'].setValue(this.editData.tipo);
      this.provServicioForm.controls['nombre'].setValue(this.editData.nombre);
      this.provServicioForm.controls['monto'].setValue(this.editData.monto);
      this.provServicioForm.controls['fecha_inicio'].setValue(this.editData.hecha_inicio);
      this.provServicioForm.controls['fecha_final'].setValue(this.editData.hecha_final);
      this.provServicioForm.controls['codigo_contrato'].setValue(this.editData.codigo_contrato);
    }
  }
    addProveedorServicio(){
      //console.log(this.empleadoForm.value);

      if(!this.editData){
        if(this.provServicioForm.valid){
        this.provServicio.postProveedorServicio(this.provServicioForm.value)
        .subscribe({
          next :(res)=>{
            alert("Empleado anadido con exito");
            this.provServicioForm.reset();
            this.proveedorServiciosRef.close('Guardar');
          },
          error:()=>{
            alert("Error para anadir un proveedor de servicios")
          }
        })
      }

      } else {
        this.updateProveedorServicio()
      }

    }

    updateProveedorServicio(){
      this.provServicio.putProveedorServicio(this.provServicioForm.value,this.editData.id)

      .subscribe({
        next : (res)=>{
          alert("Empleado modificado con éxito");
        this.provServicioForm.reset
        this.proveedorServiciosRef.close('update');
        },
        error:()=>{
          alert("Error de modificaciones");
        }
      })
    }

  }
