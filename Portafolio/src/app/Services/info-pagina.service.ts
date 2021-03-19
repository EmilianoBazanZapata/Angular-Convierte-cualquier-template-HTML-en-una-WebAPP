import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:any={};
  cargada=false;

  constructor(private http:HttpClient) 
  { 
    //leer el archivo json
  this.http.get('assets/Data/dat-pagina.json').subscribe(data => 
    {
      this.cargada=true;
      console.log(data);
      console.log(data['twitter']);
    });
  };

  
}
