import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreadorProductosComponent } from "./components/creador-productos/creador-productos.component";
import { ListadoProductosComponent } from "./components/listado-productos/listado-productos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreadorProductosComponent, ListadoProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SANBLAS_202412_demo_service';
}
