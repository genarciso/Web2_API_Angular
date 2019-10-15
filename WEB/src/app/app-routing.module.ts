import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsuarioInicialComponent} from './modulos/usuario-inicial/usuario-inicial.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicial',
        pathMatch: 'full'
    },
    {
        path: 'inicial',
        component: UsuarioInicialComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
