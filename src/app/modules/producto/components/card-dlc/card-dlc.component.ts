import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/service/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-dlc',
  templateUrl: './card-dlc.component.html',
  styleUrls: ['./card-dlc.component.css']
})
export class CardJuegosComponent {

  // Colección de todos los productos de forma local
  coleccionProductos: Producto[] = [];

  // Colección de productos de una sola categoría
  coleccionDlc: Producto[] = [];

  // Variable para seleccionar productos específicos
  productoSeleccionado!: Producto;

  // Variable para manejar estado del modal
  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService) {}

  ngOnInit(): void {
    // Accedemos al método 'obtenerProducto' y nos suscribimos a los cambios
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
      this.mostrarProductosDlc();
    });
  }

  // Función para filtrar y ordenar los productos de tipo "Dlc"
  mostrarProductosDlc() {
    this.coleccionDlc = []; // Asegúrate de reiniciar la colección

    this.coleccionProductos.forEach(producto => {
      if (producto.categoria === "Dlc" || producto.categoria === "Soundtracks") {
        this.coleccionDlc.push(producto);
      }
    });

    // Ordenar la colección Dlc por nombre
    this.coleccionDlc.sort((a, b) => a.nombre.localeCompare(b.nombre));
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

  isExpanded = false; // Estado inicial

  toggleText() {
    this.isExpanded = !this.isExpanded; // Cambia el estado
  }
}
  