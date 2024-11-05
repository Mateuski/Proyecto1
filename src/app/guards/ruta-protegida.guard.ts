
import { CanActivateFn } from '@angular/router';
  
// Inject -> inyeccion de servicios
import { inject} from '@angular/core';

import { AuthService } from '../modules/autentificacion/page/services/auth.service';

import { Router } from '@angular/router';

// Operadores tipo "observable"
import { map, switchMap, of, from } from 'rxjs';



export const rutaProtegidaGuard: CanActivateFn = (route, state) => {
  // Inyectamos / instaciamos servicio de autentificacion en el guardian (forma local)
const servicioAuth = inject (AuthService)

// Inyectamos / instanciamos servicio de rutas de forma local
const servicioRutas = inject (Router)

// Especificamos cual es el rol que va a esperar el guardian para activarse
const rolEsperado = "admin"

return from(servicioAuth.obtenerUid()).pipe(
  switchMap(uid => {
    // Si el UID existe, lo envia por parámetro y busca el rol de usuario
    if (uid){
      return servicioAuth.obtenerRol(uid).pipe(
        map(rol => {
          if (rol === rolEsperado){
            // Si coincide el rol esperado, damos acceso al usuario
            console.log("Usuario verificado como administrador.")

            return true;
          } else {
            //Denegamos acceso al usuario
            return false;
          }
        })
      )
    } else {
      console.log("Usuario no valido. Permisos insuficientes.");

      //Redireccionamos acceso a inicio para usuarios no validos
      // Usuario sin permiso: Visitante o NO registrado
      return of(servicioRutas.createUrlTree(['/inicio']))
    }
  })
)
};