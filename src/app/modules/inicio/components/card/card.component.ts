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
      genero: "Supervivencia, Terror",
      lanzamiento:"ꜰᴇᴄʜᴀ ᴅᴇ ʟᴀɴᴢᴀᴍɪᴇɴᴛᴏ: 17 AGO 2017" ,
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
  lanzamiento:"ꜰᴇᴄʜᴀ ᴅᴇ ʟᴀɴᴢᴀᴍɪᴇɴᴛᴏ: 29 SEP 2023" ,
  imagen: "https://a.allegroimg.com/s720/119154/653bd495442da399e30fb1596d38/EA-SPORTS-FC-24-PC-KLUCZ-EA-APP-PL",
  desarrollador: "EA Sports Canada & EA Romania",
  editor: "Electronic Arts  ",
},
{
  id: "",
  nombre: "Detroit: Become Human",
  precio: 32,
  descripcion: "Detroit: Become Human pone el destino de la humanidad y los androides en tus manos. Cada decisión que tomes afectará al resultado del juego, en una de las tramas narrativas con ramificaciones más intrincadas que jamás se ha visto.",
  genero: "Acción, Aventura",
  lanzamiento:"ꜰᴇᴄʜᴀ ᴅᴇ ʟᴀɴᴢᴀᴍɪᴇɴᴛᴏ: 18 JUN 2020" ,
  imagen: "https://m.media-amazon.com/images/M/MV5BMjQ0M2JlMjQtMTYxYS00NWRjLTk2MGEtN2I5YTQ2ZjU4MmIxXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg",
  desarrollador: "Quantic Dream",
  editor:"Quantic Dream", 
},
/*
{
  id: "",
  nombre: "Ready or Not",
  precio: 32,
  descripcion: "Los Sueños. El LSPD informa de un gran aumento de los delitos en toda el área metropolitana de Los Sueños. Los SWAT tratan de solventar situaciones de alto riesgo como tomas de rehenes, amenazas de bomba y sospechosos atrincherados, entre otros.",
  genero: "Acción, Aventura, Indie",
  lanzamiento:"ꜰᴇᴄʜᴀ ᴅᴇ ʟᴀɴᴢᴀᴍɪᴇɴᴛᴏ: 13 DIC 2023" ,
  imagen: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23D79Q/75010fbaec4849f6b9e9896eed23e806.jpg/f/ready-or-not.jpg",
  desarrollador: "VOID Interactive",
  editor:"VOID Interactive", 
},
{
  id: "",
  nombre: "",
  precio: 0,
  descripcion: "",
  genero: "",
  lanzamiento:"ꜰᴇᴄʜᴀ ᴅᴇ ʟᴀɴᴢᴀᴍɪᴇɴᴛᴏ:" ,
  imagen: "",
  desarrollador: "",
  editor:"", 
},
*/
    ]
  }
}
