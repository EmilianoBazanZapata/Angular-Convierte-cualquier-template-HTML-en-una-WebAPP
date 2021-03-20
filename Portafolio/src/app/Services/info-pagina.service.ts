import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoPagina } from '../Interfaces/InfoPagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};

  constructor(private http: HttpClient) {
    this.GetInformacion();
  };

  GetInformacion() {
    //leer el archivo json
    this.http.get('assets/Data/dat-pagina.json')
        .subscribe( (resp: InfoPagina) => {

          this.info = resp;
        });
  }


}
