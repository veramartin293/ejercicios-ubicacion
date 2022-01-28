import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';

const routes: Routes = [
  {
    path: 'ejercicio-2',
    component: Ejercicio2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
