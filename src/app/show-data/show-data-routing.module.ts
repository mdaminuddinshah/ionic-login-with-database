import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowDataPage } from './show-data.page';

const routes: Routes = [
  {
    path: '',
    component: ShowDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowDataPageRoutingModule {}
