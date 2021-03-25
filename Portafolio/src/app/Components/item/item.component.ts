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

  producto:ProductoDescripcion;
  id:string;
  cargando = true;
  ngOnInit(): void 
  {
    this.route.params.subscribe(parametros =>
      {
        this._ProductoService.GetProducto(parametros['id']).subscribe((data:ProductoDescripcion)=>
          {
            setTimeout(() => {
              this.cargando = false;
              this.id = parametros['id'];
              this.producto = data;
            }, 3000);
          });
      });
  }

}
