import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../Interfaces/InfoPagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina={};
  cargada=false;

  constructor(private http:HttpClient) 
  { 
    //leer el archivo json
  this.http.get('assets/Data/dat-pagina.json').subscribe((data:InfoPagina) => 
    {
      this.cargada=true;
      console.log(data);
      console.log(data.titulo);
      console.log(data['twitter']);
    });
  };

  
}
