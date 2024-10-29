import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../service/crud.service';

@Component({
  
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  coleccionProductos: Producto[] = [];
  modalVisibleproducto: boolean = false;
  productoSeleccionado!: Producto;

  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    desarrollador: new FormControl('', Validators.required),
    editor: new FormControl('', Validators.required),
    lanzamiento: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
    requisitosminimos: new FormControl('',Validators.required),
    requisitosrecomendados: new FormControl('',Validators.required)
  });

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
      // Llama a ordenar aquí si deseas que se ordene al cargar
      this.ordenarProductos();
    });
  }

  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        desarrollador: this.producto.value.desarrollador!,
        editor: this.producto.value.editor!,
        lanzamiento: this.producto.value.lanzamiento!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!,
        requisitosminimos: this.producto.value.requisitosminimos!,
        requisitosrecomendados: this.producto.value.requisitosrecomendados!
      };

      await this.servicioCrud.crearProducto(nuevoProducto)
        .then(producto => {
          alert("Ha agregado un nuevo producto con éxito.");
        })
        .catch(error => {
          alert("Ha ocurrido un error al cargar un producto.");
        });
    }
  }

  mostrarBorrar(productoSeleccionado: Producto) {
    this.modalVisibleproducto = true;
    this.productoSeleccionado = productoSeleccionado;
  }

  borrarProducto() {
    this.servicioCrud.eliminarproducto(this.productoSeleccionado.idProducto)
      .then(respuesta => {
        alert("Se ha podido eliminar con éxito");
      })
      .catch(error => {
        alert("Ha ocurrido un error al eliminar un producto: \n" + error);
      });
  }

  mostrarEditar(productoSeleccionado: Producto) {
    this.productoSeleccionado = productoSeleccionado;
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      descripcion: productoSeleccionado.descripcion,
      desarrollador: productoSeleccionado.desarrollador,
      editor: productoSeleccionado.editor,
      lanzamiento: productoSeleccionado.lanzamiento,
      categoria: productoSeleccionado.categoria,
      imagen: productoSeleccionado.imagen,
      alt: productoSeleccionado.alt,
      requisitosminimos: productoSeleccionado.requisitosminimos,
      requisitosrecomendados: productoSeleccionado.requisitosrecomendados
    });
  }

  editarProducto() {
    let datos: Producto = {
      idProducto: this.productoSeleccionado.idProducto,
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      descripcion: this.producto.value.descripcion!,
      desarrollador: this.producto.value.desarrollador!,
      editor: this.producto.value.editor!,
      lanzamiento: this.producto.value.lanzamiento!,
      categoria: this.producto.value.categoria!,
      imagen: this.producto.value.imagen!,
      alt: this.producto.value.alt!,
      requisitosminimos: this.producto.value.requisitosminimos!,
      requisitosrecomendados: this.producto.value.requisitosrecomendados!
    };

    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
      .then(producto => {
        alert("El producto se ha modificado con éxito");
        this.producto.reset();
      })
      .catch(error => {
        alert("Hubo un problema al modificar el producto \n" + error);
      });
  }

  ordenarProductos() {
    this.coleccionProductos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }
}
