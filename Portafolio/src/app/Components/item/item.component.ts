import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../Services/productos.service';
import { ProductoDescripcion } from '../../Interfaces/ProductoDescripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private route:ActivatedRoute , 
              private _ProductoService:ProductosService) { }

  cargando = true;
  ngOnInit(): void 
  {
    this.route.params.subscribe(parametros =>
      {
        this._ProductoService.GetProducto(parametros['id']).subscribe((data:ProductoDescripcion)=>
          {
            setTimeout(() => {
              this.cargando = false;
              console.log(data);
            }, 3000);
          });
      });
  }

}
