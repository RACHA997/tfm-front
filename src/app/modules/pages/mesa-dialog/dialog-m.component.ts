import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup , FormBuilder,Validators} from '@angular/forms';
import { MsService } from '../../../services/ms.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-m',
  templateUrl: './dialog-m.component.html',
  styleUrls: ['./dialog-m.component.sass']
})
export class DialogMComponent implements OnInit {

  mesaForm !: FormGroup;

  actionBtn : string ="Guardar";

  constructor( private formBuilder : FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData : any,

    private ms : MsService, private dialogRef : MatDialogRef<DialogMComponent>) { }

  ngOnInit(): void {

    this.mesaForm = this.formBuilder.group({
      numeroMesa : ['',Validators.required],
      cantidadPersonas : ['',Validators.required],
      estado : ['',Validators.required],
    });


    if(this.editData){

      this.actionBtn= "Update"
      this.mesaForm.controls["numeroMesa"].setValue(this.editData.numeroMesa);
      this.mesaForm.controls["cantidadPersonas"].setValue(this.editData.cantidadPersonas);
      this.mesaForm.controls["estado"].setValue(this.editData.estado);
    }

    console.log(this.editData);
  }

  addMesa(){

    //console.log(this.mesaForm.value);
    if(!this.editData){
      if(this.mesaForm.valid){

        this.ms.postMesa(this.mesaForm.value)
        .subscribe({
          next :(res) => {
            alert("Mesa añadida con exito ")
            this.mesaForm.reset();
            this.dialogRef.close('Guardar');
          },
          error:()=>{
            alert("Error para anadir mesa")
          }


        })

      }
    }else{
      this.updateMesa()
    }

  }

  updateMesa(){

    this.ms.putMesa(this.mesaForm.value,this.editData.id)
    .subscribe({
      next : (res)=>{
        alert("Mesa modificado con exito");
      this.mesaForm.reset
      this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error de modificaciones");
      }
    })

  }

}
