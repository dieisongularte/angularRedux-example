import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CepComponent } from './cep/cep.component';

const routes: Routes = [
  {
    path: 'cep/:id',
    component: CepComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CepRoutingModule { }
