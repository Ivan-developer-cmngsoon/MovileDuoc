import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguimientoEntregasPageRoutingModule } from './seguimiento-entregas-routing.module';

import { SeguimientoEntregasPage } from './seguimiento-entregas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguimientoEntregasPageRoutingModule
  ],
  declarations: [SeguimientoEntregasPage]
})
export class SeguimientoEntregasPageModule {}
