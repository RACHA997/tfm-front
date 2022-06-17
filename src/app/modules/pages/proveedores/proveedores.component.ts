import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import { Label } from 'ng2-charts';
//import { FormGroup , FormBuilder,FormControl, Validators} from '@angular/forms';
//import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProveedorServiciosComponent } from '../proveedor-servicios/proveedor-servicios.component';
import { ProveedorIngredientesComponent } from '../proveedor-ingredientes/proveedor-ingredientes.component';
import { ProveedorService } from 'src/app/services/proveedor.service';


@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.sass']
})
export class ProveedoresComponent implements OnInit {


  displayedColumns: string[] = ['tipo', 'nombre', 'monto', 'fecha_inicio','fecha_final', 'codigo_contrato','acciones'];
  displayedColumns_ing: string[] = ['nombre_ing', 'cantidad_ing','monto_ing', 'fecha_entrega','acciones_ing'];
  dataSource!: MatTableDataSource<any>;
  dataSource_ing!: MatTableDataSource<any>;



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  servicioVisible=false;
  ingredienteVisible=false;
  /*tipoProveedor=["Proveedores de Servicios","Proveedores de Alimentos"];
  tipo:any;

  proveedorForm ! : FormGroup;*/

  constructor( private router:Router, private dialog :MatDialog, private proveedor: ProveedorService) { }

  ngOnInit() {
   /* this.proveedorForm = new FormGroup({

      'TipoRb': new FormControl('',[Validators.required])

    });*/

    this.getAllProveedorServicios();
    this.getAllProveedorIngredientes();
  }

  showProveedorServicios()
  {
    /*this.tipo= this.proveedorForm.controls[ 'TipoRb'].value;
    if(this.tipo == "Proveedores de Alimentos")
    console.log( this.tipo)
    else*/
    console.log("1")
    //this.router.navigate(['/proveedor-servicios']);
    this.servicioVisible=true;
    this.ingredienteVisible=false;
    // class="div_class_name" id="servicios"

  }
  showProveedorIngredientes()
  {
   /* this.tipo= this.proveedorForm.controls[ 'TipoRb'].value;
    if(this.tipo == "Proveedores de Alimentos")
    console.log( this.tipo)
    else*/
    console.log("2")
    //this.router.navigate(['/proveedor-ingredientes']);
    this.servicioVisible=false;
    this.ingredienteVisible=true;

  }
  openProveedorServicio() {
    this.dialog.open(ProveedorServiciosComponent, {
      width : '30%'
    }).afterClosed().subscribe(val=>{
      if(val == 'Guardar'){
        this.getAllProveedorServicios();
      }
    })
  }

  openProveedorIngrediente() {
    this.dialog.open(ProveedorIngredientesComponent, {
      width : '30%'
    }).afterClosed().subscribe(val=>{
      if(val == 'Guardar'){
        this.getAllProveedorIngredientes();
      }
    })
  }


  getAllProveedorServicios(){

    this.proveedor.getProveedorServicio()
    .subscribe({
      next :(res)=>{
       // console.log(res);
       this.dataSource = new MatTableDataSource(res);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
      },
      error:(err) =>{
        alert("error!")

      }
    })

  }
  getAllProveedorIngredientes(){

    this.proveedor.getProveedorIngrediente()
    .subscribe({
      next :(res)=>{
       // console.log(res);
       this.dataSource_ing = new MatTableDataSource(res);
       this.dataSource_ing.paginator = this. paginator;
       this.dataSource_ing.sort = this.sort;
      },
      error:(err) =>{
        alert("error!")

      }
    })

  }

  editProveedorServicios(row : any){
    this.dialog.open(ProveedorServiciosComponent,{
      width : '30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val ==='update'){
        this.getAllProveedorServicios();
      }
    })
  }

  editProveedorIngredientes(row : any){
    this.dialog.open(ProveedorIngredientesComponent,{
      width : '30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val ==='update'){
        this.getAllProveedorIngredientes();
      }
    })
  }

  deleteProveedorServicios(id:number){

    this.proveedor.deleteProveedorServicio(id)
    .subscribe({
      next:(res)=>{
        alert("Empleado eliminado")
      },error:()=>{

        alert("error")

      }
    })

  }
  deleteProveedorIngredientes(id:number){

    this.proveedor.deleteProveedorIngrediente(id)
    .subscribe({
      next:(res)=>{
        alert("Empleado eliminado")
      },error:()=>{

        alert("error")

      }
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilterIngredientes(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource_ing.filter = filterValue.trim().toLowerCase();

    if (this.dataSource_ing.paginator) {
      this.dataSource_ing.paginator.firstPage();
    }
  }
}
