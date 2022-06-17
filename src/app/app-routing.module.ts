import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CajaComponent } from './caja/caja.component';
import { CajasComponent } from './cajas/cajas.component';
import { StatsComponent } from './modules/statistics/components/panel/stats.component';
import { BarChartComponent } from './modules/statistics/components/stats-charts/bar-chart/bar-chart.component';
import { BubbleChartComponent } from './modules/statistics/components/stats-charts/bubble-chart/bubble-chart.component';
import { DoughnutChartComponent } from './modules/statistics/components/stats-charts/doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './modules/statistics/components/stats-charts/line-chart/line-chart.component';
import { RadarChartComponent } from './modules/statistics/components/stats-charts/radar-chart/radar-chart.component';
import { EmpleadoComponent } from './modules/pages/empleado/empleado.component';
import { NegociosComponent } from './modules/pages/negocios/negocios.component';
import { NegocioComponent } from './modules/pages/negocio/negocio.component';
import { EmpleadosComponent } from './modules/pages/empleados/empleados.component';
import { MesasComponent } from './modules/pages/mesas/mesas.component';
import { MesaComponent } from './modules/pages/mesa/mesa.component';
import { PedidosComponent } from './modules/pages/pedidos/pedidos.component';
import { PedidoComponent } from './modules/pages/pedido/pedido.component';
import { ProveedoresComponent } from './modules/pages/proveedores/proveedores.component';
import { ProveedorComponent } from './modules/pages/proveedor/proveedor.component';
import { InventariosComponent } from './modules/pages/inventarios/inventarios.component';
import { InventarioComponent } from './modules/pages/inventario/inventario.component';
import { DialogComponent } from './modules/pages/empleado-dialog/dialog.component';
import { ProveedorIngredientesComponent } from './modules/pages/proveedor-ingredientes/proveedor-ingredientes.component';
import { ProveedorServiciosComponent } from './modules/pages/proveedor-servicios/proveedor-servicios.component';
import { PlatoComponent } from './modules/pages/plato/plato.component';
const routes: Routes = [
{path:'',redirectTo: 'estadisticas', pathMatch: 'full'},
{path:'estadisticas',component:StatsComponent},
{
  path: 'estadisticas', component: StatsComponent,
  children: [
    {path:'', redirectTo: 'line-chart', pathMatch: 'full'},
    {path:'line-chart',component:LineChartComponent},
    {path:'bar-chart',component:BarChartComponent},
    {path:'doughnut-chart',component:DoughnutChartComponent},
    {path:'radar-chart',component:RadarChartComponent},
    {path:'bubble-chart',component:BubbleChartComponent},

  ]
},

{path:'negocios',component:NegociosComponent},
{path:'negocio',component:NegocioComponent},
{path:'empleados',component:EmpleadosComponent},
{path:'empleado',component:EmpleadoComponent},
{path:'mesas',component:MesasComponent},
{path:'mesa',component:MesaComponent},
{path:'pedidos',component:PedidosComponent},
{path:'pedido',component:PedidoComponent},
{path:'cajas',component:CajasComponent},
{path:'caja',component:CajaComponent},
{path:'proveedores',component:ProveedoresComponent},
{path:'proveedor',component:ProveedorComponent},
{path:'inventarios',component:InventariosComponent},
{path:'inventario',component:InventarioComponent},
{path:'dialog',component:DialogComponent},
{path:'proveedor-ingredientes',component:ProveedorIngredientesComponent},
{path:'proveedor-servicios',component:ProveedorServiciosComponent},
{path: 'negocio/:id',component: NegocioComponent},
{path: 'plato',component:PlatoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
