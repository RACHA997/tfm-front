import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  url: string='http://apitfm.ddns.net:8066/';



  constructor(private http : HttpClient) { }


  getPlatos(){
    return this.http.get<any>(this.url+"api/Plato/ReadAll");
  }
}
