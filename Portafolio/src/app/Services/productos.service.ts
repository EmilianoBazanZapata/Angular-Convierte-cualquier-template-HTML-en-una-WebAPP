import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../Interfaces/Producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];
  cargando = true;
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }
  private cargarProductos() {



    return new Promise<void>((resolve, reject) => {

      this.http.get('https://angular-html-7f06f-default-rtdb.firebaseio.com/productos_idx.json').subscribe((data: Producto[]) => {
        setTimeout(() => {
          this.cargando = false;
          this.productos = data;

        }, 3000);
        resolve();
      });

    });
  }

  GetProducto(id: string) {
    return this.http.get('https://angular-html-7f06f-default-rtdb.firebaseio.com/productos/' + id + '.json');
  }

  buscarProducto(termino: string) {


    if (this.productos.length === 0) {
      // cargar productos
      this.cargarProductos().then(() => {
        // ejecutar después de tener los productos
        // Aplicar filtro
        this.filtrarProductos(termino);
      });

    } else {
      // aplicar el filtro
      this.filtrarProductos(termino);
    }
  }



  private filtrarProductos(termino: string) {

    // console.log(this.productos);
    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod => {
     
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productoFiltrado.push(prod);
      }
    });
  }
}

