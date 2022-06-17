import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PlatoDialogComponent } from '../plato-dialog/plato-dialog.component';
import { PlatoService } from 'src/app/services/plato.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.sass']
})
export class PlatoComponent implements OnInit {


  dataSource!: MatTableDataSource<any>;
  displayedColumns_plato: string[] = ['nombre_plato', 'precio_plato','id_linea_plato', 'cantidad'];



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router:Router, private dialog :MatDialog, private platoService: PlatoService) { }

  ngOnInit(): void {
    this.getAllPlatos()
    console.log(this.getAllPlatos()
)
  }

  openPlatos() {
    this.dialog.open(PlatoDialogComponent, {
      width : '30%'
    }).afterClosed().subscribe(val=>{
      if(val == 'Guardar'){
        this.getAllPlatos();
      }
    })
  }

  getAllPlatos(){

    this.platoService.getPlatos()
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
