import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http : HttpClient) { }

  getProveedorServicio(){
    return this.http.get<any>("http://localhost:3000/proveedorservicio/");
  }
  getProveedorIngrediente(){
    return this.http.get<any>("http://localhost:3000/proveedoringrediente/");
  }
  deleteProveedorServicio(id:number){
    return this.http.delete<any>("http://localhost:3000/proveedorservicio/"+id);
  }

  deleteProveedorIngrediente(id:number){
    return this.http.delete<any>("http://localhost:3000/proveedoringrediente/"+id);
  }

  postProveedorServicio(data : any){
    return this.http.post<any>("http://localhost:3000/proveedorservicio/",data);
  }
  postProveedorIngrediente(data : any){
    return this.http.post<any>("http://localhost:3000/proveedoringrediente/",data);
  }
  putProveedorServicio(data:any, id : number){
    return this.http.put<any>("http://localhost:3000/proveedorservicio/"+id,data);
  }
  putProveedorIngrediente(data:any, id : number){
    return this.http.put<any>("http://localhost:3000/proveedoringrediente/"+id,data);
  }
}
