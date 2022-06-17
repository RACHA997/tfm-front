import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  constructor(private http : HttpClient) { }

  postNegocio(data : any){
    return this.http.post<any>("http://localhost:3000/negocioList/",data);
  }

  getNegocio(){
    return this.http.get<any>("http://localhost:3000/negocioList/");
  }

  putNegocio(data:any, id : number){
    return this.http.put<any>("http://localhost:3000/negocioList/"+id,data);
  }

  deleteNegocio(id:number){
    return this.http.delete<any>("http://localhost:3000/negocioList/"+id);

  }

}
