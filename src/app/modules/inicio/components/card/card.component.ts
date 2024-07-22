import { Component } from '@angular/core';
import { Juegos } from 'src/app/models/juegos';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: Juegos[];

  constructor(){
    this.info = [
{
      id: "",
      nombre: "DARKWOOD",
      precio: 15,
      descripcion: "Darkwood - una nueva perspectiva en el género survival horror. Explora libremente durante el día un vasto mundo siempre cambiante, y luego atrinchérate en tu escondite al llegar la noche rezando para que llegue la luz de la mañana.",
      genero: "Supervivencia/Terror",
      lanzamiento:"Fecha de lanzamiento: 17 AGO 2017" ,
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202206/2011/eHzGsp9IkpvI8Z4Crx3AuG9o.jpg",
      desarrollador: "Acid Wizard Studio",
      editor:"Acid Wizard Studio", 
},
{
  id: "",
  nombre: "EA SPORTS FC™ 24",
  precio: 70,
  descripcion: "EA SPORTS FC™ 24 te da la bienvenida a The World's Game: la experiencia futbolística más fiel hasta la fecha con HyperMotionV, PlayStyles optimizado por Opta y el motor mejorado de Frostbite™.",
  genero: "Deporte",
  lanzamiento:"Fecha de lanzamiento: 29 SEP 2023" ,
  imagen: " ",
  desarrollador: "EA Sports Canada & EA Romania",
  editor: "Electronic Arts  ",
},
    ]
  }
}
