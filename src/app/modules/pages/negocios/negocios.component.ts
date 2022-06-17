import { Component, OnInit , ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';


import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { NegocioService } from 'src/app/services/negocio.service';
import { DialogNegocioComponent } from '../negocio-dialog/dialog-negocio.component';

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.sass']
})
export class NegociosComponent implements OnInit {

  displayedColumns: string[] = ['nombrerest', 'direccionrest', 'telefonorest', 'tipo','acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog :MatDialog, private neg : NegocioService, private router : Router) { }

  ngOnInit(): void {
    this.getAllNegocios();
  }

  openDialog() {
    this.dialog.open(DialogNegocioComponent, {
      width : '30%'
    }).afterClosed().subscribe(val=>{
      if(val == 'Guardar'){
        this.getAllNegocios();
      }
    })
  }

  getAllNegocios(){

    this.neg.getNegocio()
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

  editNegocio(row : any){
    this.dialog.open(DialogNegocioComponent,{
      width : '30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val ==='update'){
        this.getAllNegocios();
      }
    })
  }

  deleteNegocio(id:number){

    this.neg.deleteNegocio(id)
    .subscribe({
      next:(res)=>{
        alert("Negocio eliminado")
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

  verNegocio (idx:number)
  {
    this.router.navigate(['/negocio',idx]);
    console.log(idx)
  }

}
