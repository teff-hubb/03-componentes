import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { PopoverInfoComponent } from './popover-info/popover-info.component';

// La diferencia entre un componente y una page es que no viene nada relacionado con lazy load y tampoco con un archivo de route//

@NgModule({
  declarations: [
    HeaderComponent,
    PopoverInfoComponent
  ],
  exports: [
    HeaderComponent,
    PopoverInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
