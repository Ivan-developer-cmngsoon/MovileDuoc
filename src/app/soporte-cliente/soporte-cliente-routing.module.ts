import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoporteClientePage } from './soporte-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: SoporteClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoporteClientePageRoutingModule {}
