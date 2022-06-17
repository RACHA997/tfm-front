import { Component, OnInit , ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EmplService } from 'src/app/services/empl.service';
import { DialogComponent } from '../empleado-dialog/dialog.component';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.sass']
})
export class EmpleadosComponent implements OnInit {


  displayedColumns: string[] = ['nombre', 'apellido', 'telefono', 'rol','acciones'];
  dataSource!: MatTableDataSource<any>;



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private dialog :MatDialog, private emp : EmplService) { }

  ngOnInit(): void {

    this.getAllEmpleados();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width : '30%'
    }).afterClosed().subscribe(val=>{
      if(val == 'Guardar'){
        this.getAllEmpleados();
      }
    })
  }

  getAllEmpleados(){

    this.emp.getEmpleado()
    .subscribe({
      next :(res)=>{
       // console.log(res);
       this.dataSource = new MatTableDataSource(res);
       this.dataSource.paginator = this. paginator;
       this.dataSource.sort = this.sort;
      },
      error:(err) =>{
        alert("error!")

      }
    })

  }

  editEmpleado(row : any){
    this.dialog.open(DialogComponent,{
      width : '30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val ==='update'){
        this.getAllEmpleados();
      }
    })
  }

  deleteEmpleado(id:number){

    this.emp.deleteEmpleado(id)
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



}
