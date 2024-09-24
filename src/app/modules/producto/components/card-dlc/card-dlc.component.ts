import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/service/crud.service';

@Component({
  selector: 'app-card-dlc',
  templateUrl: './card-dlc.component.html',
  styleUrls: ['./card-dlc.component.css']
})
export class CardJuegosComponent {

  // Colleccion de todos los productos de forma local
  coleccionProductos: Producto[] = []

  // Coleccion de productos de una sola categoria
  coleccionDlc: Producto[] = []

  // Variable para seleccionar productos especificos
  productoSeleccionado!: Producto;

  // Variable para manejar estado del modal
  modalVisible: boolean = false;

  // Patentamos de forma local el servicio para acceder en el
  constructor(public servicioCrud: CrudService){}

  // Inicializa al momento que renderiza el componente
  ngOnInit(): void{
    // Accedemos a metodo 'obtenerProducto' y nos suscribimos a los cambios
    // recibimos notificacion ante modificaciones
    this.servicioCrud.obtenerProducto().subscribe(producto => {

    // Mostrara la coleccion de esa categoria hasta el momento
    this.coleccionProductos = producto;

    this.mostrarProductosDlc();
    })

   
  }

  // Funcion para filtrar los productos de tipo "juegos"
  mostrarProductosDlc(){
    this.coleccionProductos.forEach(producto => {
      // Si es de un tipo de "juego" -> condicional
      if(producto.categoria === "Dlc" || producto.categoria === "Soundtracks"){

      // Lo sube/ guarda en la coleccion de productos de tipo "juegos"  
      this.coleccionDlc.push(producto)
      }
    })
  }
  
   mostrarVer(info: Producto){
    this.modalVisible = true;

    this.productoSeleccionado = info;
 }
 isExpanded = false; // Estado inicial

 toggleText() {
   this.isExpanded = !this.isExpanded; // Cambia el estado
 }
}