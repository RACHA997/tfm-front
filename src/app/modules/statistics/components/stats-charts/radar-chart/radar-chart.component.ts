import { Component } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.sass']
})

export class RadarChartComponent {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Puntualidad', 'Communicación', 'Resolución de problemas',
    'Colaboración con el equipo', 'Trabajo diario', 'Conocimientos', 'Cumple tareas'];

  public radarChartData: ChartDataSets[] = [
    { data: [0, 1, 2, 3, 4, 5, 6], label: 'Análisis de destrezas de empleados' }
  ];
  public radarChartType: ChartType = 'radar';

}
