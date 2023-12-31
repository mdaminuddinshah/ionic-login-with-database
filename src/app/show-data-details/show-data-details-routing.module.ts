import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowDataDetailsPage } from './show-data-details.page';

const routes: Routes = [
  {
    path: '',
    component: ShowDataDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowDataDetailsPageRoutingModule {}
