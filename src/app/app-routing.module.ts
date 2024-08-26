import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./catalogo/catalogo.module').then( m => m.CatalogoPageModule)
  },
  {
    path: 'realizar-pedido',
    loadChildren: () => import('./realizar-pedido/realizar-pedido.module').then( m => m.RealizarPedidoPageModule)
  },
  {
    path: 'historial-pedidos',
    loadChildren: () => import('./historial-pedidos/historial-pedidos.module').then( m => m.HistorialPedidosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'referidos',
    loadChildren: () => import('./referidos/referidos.module').then( m => m.ReferidosPageModule)
  },
  {
    path: 'seguimiento-entregas',
    loadChildren: () => import('./seguimiento-entregas/seguimiento-entregas.module').then( m => m.SeguimientoEntregasPageModule)
  },
  {
    path: 'soporte-cliente',
    loadChildren: () => import('./soporte-cliente/soporte-cliente.module').then( m => m.SoporteClientePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
