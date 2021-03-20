import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../Interfaces/InfoPagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo:any[]=[];

  constructor(private http: HttpClient) {
    this.GetInformacion();
    this.CargarEquipo();
  };

  GetInformacion() {
    //leer el archivo json
    this.http.get('assets/Data/dat-pagina.json')
        .subscribe( (resp: InfoPagina) => {

          this.info = resp;
        });
  }

  private CargarEquipo()
  {
    this.http.get('https://angular-html-7f06f-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((data:any[]) =>{
      this.equipo = data;
      console.log(this.equipo);
    })

  }
}
