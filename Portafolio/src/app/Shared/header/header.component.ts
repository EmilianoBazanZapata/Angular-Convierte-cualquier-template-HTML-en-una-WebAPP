import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from '../../Services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titulo:string;
  constructor( public _servicio: InfoPaginaService ,
               private router:Router) { }

  ngOnInit(): void {
  }
  BuscarProducto(termino:string)
  {
    if(termino.length < 1)
    {
      return;
    }
    this.router.navigate(['/search',termino]);

  }
}
