import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirplanesComponent } from './airplanes/airplanes.component';
import { AirplanesDetalheComponent } from './airplanes-detalhe/airplanes-detalhe.component';
import { AirplanesNovoComponent } from './airplanes-novo/airplanes-novo.component';
import { AirplanesEditarComponent } from './airplanes-editar/airplanes-editar.component';

const routes: Routes = [
  
  {
    path: 'airplanes',
    component: AirplanesComponent,
    data: { title: 'Lista de Airplanes' }
  },
  {
    path: 'airplanes-detalhe/:Guid',
    component: AirplanesDetalheComponent,
    data: { title: 'Detalhe do Airplane' }
  },
  {
    path: 'airplanes-novo',
    component: AirplanesNovoComponent,
    data: { title: 'Adicionar Airplane' }
  },
  {
    path: 'airplanes-editar/:Guid', 
    component: AirplanesEditarComponent,
     data: { title: 'Editar o Airplane' }
  },
  { path: '',
    redirectTo: '/airplanes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
