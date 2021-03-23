import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Producto} from '../Interfaces/Producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos : Producto[]=[];

  cargando =true;
  constructor(private http:HttpClient) 
  {
   this.cargarProductos();
  }
  private cargarProductos()
  {
    this.http.get('https://angular-html-7f06f-default-rtdb.firebaseio.com/productos_idx.json').subscribe((data: Producto [])=>
    {
      setTimeout(() => {
        this.cargando=false;
      this.productos = data; 
      }, 3000);
      
    });
  }
  GetProducto(id:string)
  {
    return this.http.get('https://angular-html-7f06f-default-rtdb.firebaseio.com/productos/'+ id +'.json');
  }
}

