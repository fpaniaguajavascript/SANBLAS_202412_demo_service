import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../interfaces/producto';
import { CestaService } from '../../services/cesta.service';

@Component({
  selector: 'app-creador-productos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './creador-productos.component.html',
  styleUrl: './creador-productos.component.css'
})
export class CreadorProductosComponent {
  producto : Producto = {};//Es posible porque los atributos de producto son opcionales
  cestaService = inject(CestaService);  
  addProducto(){
    this.cestaService.addProducto(this.producto);
    this.producto = {};//Es posible porque los atributos de producto son opcionales
  }
}
