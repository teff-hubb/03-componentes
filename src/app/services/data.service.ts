import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  // Utilizamos servicios para crear 2 observables
  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getMenuOpts() {
    // Vamos a retornar un arreglo de componentes
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }
}
