import { Component } from '@angular/core';
import { InfoPaginaService } from './Services/info-pagina.service';
import { ProductosService } from './Services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portafolio';
  constructor(private _InfoPaginaService : InfoPaginaService,
             public _InfoProductosService:ProductosService)
  {
    
  }
}
