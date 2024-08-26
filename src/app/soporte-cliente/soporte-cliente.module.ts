import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoporteClientePageRoutingModule } from './soporte-cliente-routing.module';

import { SoporteClientePage } from './soporte-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoporteClientePageRoutingModule
  ],
  declarations: [SoporteClientePage]
})
export class SoporteClientePageModule {}
