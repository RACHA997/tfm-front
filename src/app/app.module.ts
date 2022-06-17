

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { EmpleadoComponent } from './modules/pages/empleado/empleado.component';
import { CajasComponent } from './cajas/cajas.component';
import { CajaComponent } from './caja/caja.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { ChartsModule } from 'ng2-charts';
import { StatisticsModule } from './modules/statistics/statistics.module';
import { EmpleadosComponent } from './modules/pages/empleados/empleados.component';
import { DialogComponent } from './modules/pages/empleado-dialog/dialog.component';
import { NegociosComponent } from './modules/pages/negocios/negocios.component';
import { NegocioComponent } from './modules/pages/negocio/negocio.component';
import { MesasComponent } from './modules/pages/mesas/mesas.component';
import { MesaComponent } from './modules/pages/mesa/mesa.component';
import { PedidosComponent } from './modules/pages/pedidos/pedidos.component';
import { PedidoComponent } from './modules/pages/pedido/pedido.component';
import { ProveedoresComponent } from './modules/pages/proveedores/proveedores.component';
import { ProveedorComponent } from './modules/pages/proveedor/proveedor.component';
import { InventariosComponent } from './modules/pages/inventarios/inventarios.component';
import { InventarioComponent } from './modules/pages/inventario/inventario.component';
import { ProveedorServiciosComponent } from './modules/pages/proveedor-servicios/proveedor-servicios.component';
import { ProveedorIngredientesComponent } from './modules/pages/proveedor-ingredientes/proveedor-ingredientes.component';
import { DialogNegocioComponent } from './modules/pages/negocio-dialog/dialog-negocio.component';
import { DialogMComponent } from './modules/pages/mesa-dialog/dialog-m.component';
import { PlatoComponent } from './modules/pages/plato/plato.component';
import { PlatoDialogComponent } from './modules/pages/plato-dialog/plato-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    DialogComponent,
    HeaderComponent,
    FooterComponent,
    NegociosComponent,
    NegocioComponent,
    EmpleadoComponent,
    MesasComponent,
    MesaComponent,
    PedidosComponent,
    PedidoComponent,
    CajasComponent,
    CajaComponent,
    ProveedoresComponent,
    ProveedorComponent,
    InventariosComponent,
    InventarioComponent,
    ProveedorServiciosComponent,
    ProveedorIngredientesComponent,
    DialogNegocioComponent,
    DialogMComponent,
    PlatoComponent,
    PlatoDialogComponent,


  ],
  imports: [
    FlexLayoutModule,
    MatDividerModule,
    MatSidenavModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule,
    MatTableModule,
    //MatTableDataSource,
    MatPaginatorModule,
    MatSortModule,

    StatisticsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
