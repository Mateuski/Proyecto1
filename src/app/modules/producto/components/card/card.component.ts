import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/service/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // Definimos coleccion de productos locales
  coleccionProductos: Producto[] = [];

  coleccionJuegos: Producto[] = []

  // Variable local para manejar estado de un modal
  productoSeleccionado!: Producto;

  // Variable local para manejar estado de un modal
  modalVisible: boolean = false;

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


  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;

      this.mostrarProductosJuegos();
    })


  }
  // Funcion para filtrar los productos de tipo "juegos"
  mostrarProductosJuegos() {
    this.coleccionProductos.forEach(producto => {
      // Si es de un tipo de "juego" -> condicional
      if (producto.categoria !== "Dlc" && producto.categoria !== "Soundtracks") {

        // Lo sube/ guarda en la coleccion de productos de tipo "juegos"  
        this.coleccionJuegos.push(producto)
      }
    })
  }

  mostrarVer(info: Producto) {
    this.modalVisible = true;

    this.productoSeleccionado = info;
  }
}
