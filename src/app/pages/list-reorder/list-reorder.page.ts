import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla'];
  // Crear propiedad booleana
   reorderDisabled: boolean = true;


  constructor() { }

  ngOnInit() {
  }
  doReOrder(event: any): void {
    console.log(event);
    event.detail.complete();
    console.log(this.personajes);
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);
    //Quiero cortar un elemento en la posicion 0 y lo guarda en una variable
    // this.personajes = event.detail.complete( this.personajes);
  }

}
