import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../Services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route : ActivatedRoute,
              public _productoservice:ProductosService) { }

  ngOnInit(): void 
  {
    this.route.params.subscribe(data=>
      {
        console.log(data['termino']);
        
        this._productoservice.BuscarProducto(data['termino']);
      })
  }

}
