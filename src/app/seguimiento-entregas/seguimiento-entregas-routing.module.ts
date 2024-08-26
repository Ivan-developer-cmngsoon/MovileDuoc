import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguimientoEntregasPage } from './seguimiento-entregas.page';

const routes: Routes = [
  {
    path: '',
    component: SeguimientoEntregasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguimientoEntregasPageRoutingModule {}
