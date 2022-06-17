import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';
import { EmplService } from '../../../services/empl.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {

  rolList=["Encargado","Cajero","Cocinero","Camarero"]

  empleadoForm !: FormGroup;

  actionBtn : string ="Guardar";

  constructor(private formBuilder : FormBuilder ,
    private emp : EmplService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {

    this.empleadoForm = this.formBuilder.group({

      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      telefono: ['',Validators.required],
       rol: ['',Validators.required],


    });

    //console.log(this.editData);
    if(this.editData){
      this.actionBtn = "Update";
      this.empleadoForm.controls['nombre'].setValue(this.editData.nombre);
      this.empleadoForm.controls['apellido'].setValue(this.editData.apellido);
      this.empleadoForm.controls['telefono'].setValue(this.editData.telefono);
      this.empleadoForm.controls['rol'].setValue(this.editData.rol);
    }
  }

  addEmpleado(){
    console.log(this.empleadoForm.value);

    if(!this.editData){
      if(this.empleadoForm.valid){
      this.emp.postEmpleado(this.empleadoForm.value)
      .subscribe({
        next :(res)=>{
          alert("Empleado anadido con exito");
          this.empleadoForm.reset();
          this.dialogRef.close('Guardar');
        },
        error:()=>{
          alert("Error para anadir empleado")
        }
      })
    }

    } else {
      this.updateEmpleado()
    }

  }

  updateEmpleado(){
    this.emp.putEmpleado(this.empleadoForm.value,this.editData.id)

    .subscribe({
      next : (res)=>{
        alert("Empleado modificado con éxito");
      this.empleadoForm.reset
      this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error de modificaciones");
      }
    })
  }


}
