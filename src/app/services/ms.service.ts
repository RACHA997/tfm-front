import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsService {

  constructor(private http: HttpClient) { }

  postMesa(data : any){
    return this.http.post<any>("http://localhost:3000/mesaList/",data)
  }


  getMesa(){
    return this.http.get<any>("http://localhost:3000/mesaList/");
  }


  putMesa(data:any, id : number){

    return this.http.put<any>("http://localhost:3000/mesaList/"+id,data);

  }

  deleteMesa(id:number){
    return this.http.delete<any>("http://localhost:3000/mesaList/"+id);

  }


}
