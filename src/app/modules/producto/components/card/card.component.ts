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
  // Definimos colección de productos locales
  coleccionProductos: Producto[] = [];
  coleccionJuegos: Producto[] = [];

  // Variable local para manejar estado de un modal
  productoSeleccionado!: Producto;

  // Variable local para manejar estado de un modal
  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService) {}

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
      this.mostrarProductosJuegos();
    });
  }

  // Función para filtrar y ordenar los productos de tipo "juegos"
  mostrarProductosJuegos() {
    this.coleccionJuegos = []; // Reiniciar la colección

    this.coleccionProductos.forEach(producto => {
      // Si no es de tipo "Dlc" o "Soundtracks", se añade a la colección de juegos
      if (producto.categoria !== "Dlc" && producto.categoria !== "Soundtracks") {
        this.coleccionJuegos.push(producto);
      }
    });

    // Ordenar la colección de juegos por nombre
    this.coleccionJuegos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  mostrarVer(info: Producto) {
    this.modalVisible = true;
    this.productoSeleccionado = info;
  }

  productoAnadido(producto: Producto) {
    try {
      Swal.fire({
        title: 'Perfecto!',
        text: `Ha añadido ${producto.nombre} al carrito`,
        icon: 'info'
      });
    } catch (error) {
      Swal.fire({
        title: '¡Oh no!',
        text: 'Ha ocurrido un error\n' + error,
        icon: 'error'
      });
    }
  }
}
