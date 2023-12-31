import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowDataDetailsPageRoutingModule } from './show-data-details-routing.module';

import { ShowDataDetailsPage } from './show-data-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowDataDetailsPageRoutingModule
  ],
  declarations: [ShowDataDetailsPage]
})
export class ShowDataDetailsPageModule {}
