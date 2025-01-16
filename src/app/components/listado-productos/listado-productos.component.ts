import { Component, inject } from '@angular/core';
import { CestaService } from '../../services/cesta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  cestaService = inject(CestaService);
}