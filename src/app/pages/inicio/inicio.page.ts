import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';


interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
// Este componente es un observable que va a emitir valores de componentes pero con un arreglo
  componentes: Observable<Componente[]>;
  // Hay que inyectar nuestros servicios en el constructor
  constructor(private menuCtrl: MenuController,
              private dataService: DataService) { }

  ngOnInit() {
    // Este componente ahora es un observador
    this.componentes = this.dataService.getMenuOpts();
  }
  mostarMenu() {
    this.menuCtrl.open('first');
  }
}
