import { Component, OnInit , ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MsService } from 'src/app/services/ms.service';
import { DialogMComponent } from '../mesa-dialog/dialog-m.component';


@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.sass']
})
export class MesasComponent implements OnInit {



  displayedColumns: string[] = ['numeroMesa', 'cantidadPersonas', 'estado', 'acciones'];
  dataSource!: MatTableDataSource<any>;



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private dialogm : MatDialog, private ms : MsService) { }

  ngOnInit(): void {

    this.getAllMesas();
  }



  deleteMesa(id:number){

    this.ms.deleteMesa(id)
    .subscribe({
      next:(res)=>{
        alert("Mesa eliminada")
      },error:()=>{

        alert("error")

      }
    })

  }

  openDialogm() {
    this.dialogm.open(DialogMComponent, {
      width : '30%'
    }).afterClosed().subscribe(val=>{
      if(val == 'Guardar'){
        this.getAllMesas();
      }
    })

  }

  getAllMesas(){

    this.ms.getMesa()
    .subscribe({
      next : (res)=>{
          //console.log(res);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this. paginator;
          this.dataSource.sort = this.sort;
      },
      error:()=>{
        alert("error!")
      }

    })

  }


  editMesa(row : any){
    this.dialogm.open(DialogMComponent,{
      width : '30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val ==='update'){
        this.getAllMesas();
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
