import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CestaService {

  private productos = new Array<Producto>();

  constructor() { }

  addProducto(producto : Producto) {
    this.productos.push({...producto});//Operador de desestructuración
    console.debug(this.productos);
  }

  removeProducto(producto : Producto) {
    let index = this.productos.indexOf(producto);
    this.productos.splice(index, 1);
  }

  getProductos() : Producto[] {
    return this.productos;
  }


}
