import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NegocioService } from '../../../services/negocio.service';

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.sass']
})
export class NegocioComponent implements OnInit {
  public negocio : any ;

  constructor(
    protected route: ActivatedRoute,
protected negociosService: NegocioService) {

  }

  ngOnInit(): void {
  }

}
