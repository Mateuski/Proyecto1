import { Component } from '@angular/core';
import { Juegos } from 'src/app/models/juegos';
import Swal from 'sweetalert2';

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
  nombre: "EA SPORTS FC™ 25",
  precio: 70,
  descripcion: "EA SPORTS FC™ 25 te ofrece más formas de ganar por el club. Forma equipo con tus colegas en tus modos favoritos con el nuevo Rush de 5 contra 5 y lleva a tu club a la victoria gracias a un control táctico más realista que nunca con FC IQ.",
  genero: "Deporte",
  lanzamiento:"ꜰᴇᴄʜᴀ ᴅᴇ ʟᴀɴᴢᴀᴍɪᴇɴᴛᴏ: 27 SEP 2024" ,
  imagen: "https://sm.ign.com/t/ign_latam/screenshot/default/bellingham2_d627.1920.jpg",
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
    ]
  }
}

