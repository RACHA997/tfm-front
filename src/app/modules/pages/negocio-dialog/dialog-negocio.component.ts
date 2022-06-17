import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';


import { NegocioService } from '../../../services/negocio.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-negocio',
  templateUrl: './dialog-negocio.component.html',
  styleUrls: ['./dialog-negocio.component.sass']
})
export class DialogNegocioComponent implements OnInit {

  tipoList=["Cafetería","Restaurante","Bar"]

  negocioForm ! : FormGroup;

  actionBtn : string ="Guardar";

  constructor(private formBuilder : FormBuilder ,
    private emp : NegocioService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogNegocioComponent>) { }

  ngOnInit(): void {

    this.negocioForm = this.formBuilder.group({

      nombrerest: ['',Validators.required],
      direccionrest: ['',Validators.required],
      telefonorest: ['',Validators.required],
       tipo: ['',Validators.required],

    });

    //console.log(this.editData);
    if(this.editData){
      this.actionBtn = "Update";
      this.negocioForm.controls['nombrerest'].setValue(this.editData.nombrerest);
      this.negocioForm.controls['direccionrest'].setValue(this.editData.direccionrest);
      this.negocioForm.controls['telefono'].setValue(this.editData.telefonorest);
      this.negocioForm.controls['tipo'].setValue(this.editData.tipo);
    }
  }

  addNegocio(){
    //console.log(this.empleadoForm.value);

    if(!this.editData){
      if(this.negocioForm.valid){
      this.emp.postNegocio(this.negocioForm.value)
      .subscribe({
        next :(res)=>{
          alert("Negocio anadido con exito");
          this.negocioForm.reset();
          this.dialogRef.close('Guardar');
        },
        error:()=>{
          alert("No se ha podido anadir el negocio")
        }
      })
    }

    } else {
      this.updateEmpleado()
    }

  }

  updateEmpleado(){
    this.emp.putNegocio(this.negocioForm.value,this.editData.id)

    .subscribe({
      next : (res)=>{
        alert("Negocio modificado con éxito");
      this.negocioForm.reset
      this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error de modificaciones");
      }
    })
  }

}
