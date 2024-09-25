import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  productoAnadido(producto: Producto) {

    try {

      Swal.fire({
        title: 'Perfecto!',
        text: `Ha añadido ${producto.nombre} al carrito`,
        icon: 'info'
      })
    }
    catch (error) {
      Swal.fire({
        title: '¡Oh no!',
        text: 'Ha ocurrido un error\n' + error,
        icon: 'error'
      })
    }
  }
}
