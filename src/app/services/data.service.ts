import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';
// los archivos rxjs son de programación reactiva

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  // Utilizamos servicios para crear  observables
  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbumes() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getMenuOpts() {
    // Vamos a retornar un arreglo de componentes
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }
  getHeroes() {
    return this.http.get('/assets/data/superheroes.json')
      .pipe(
        delay(1500)
      );
  }

}
