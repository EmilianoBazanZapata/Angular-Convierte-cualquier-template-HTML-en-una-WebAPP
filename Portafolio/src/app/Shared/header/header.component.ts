import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../Services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titulo:string;
  constructor( public _servicio: InfoPaginaService ) { }

  ngOnInit(): void {
  }

}
