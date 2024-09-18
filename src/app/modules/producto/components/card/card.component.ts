import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/service/crud.service';

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

constructor(public servicioCrud: CrudService){}

ngOnInit(): void{
  this.servicioCrud.obtenerProducto().subscribe(producto => {
    this.coleccionProductos = producto;

    this.mostrarProductosJuegos();
  })

  
}
 // Funcion para filtrar los productos de tipo "juegos"
 mostrarProductosJuegos(){
  this.coleccionJuegos.forEach(Producto => {
    // Si es de un tipo de "juego" -> condicional
    if(Producto.categoria !== "Dlc" && Producto.categoria !== "SoundTracks"){

    // Lo sube/ guarda en la coleccion de productos de tipo "juegos"  
    this.coleccionJuegos.push(Producto)
    }
  })
}

 mostrarVer(info: Producto){
  this.modalVisible = true;

  this.productoSeleccionado = info;
}
}