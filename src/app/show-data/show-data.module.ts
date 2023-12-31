import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowDataPageRoutingModule } from './show-data-routing.module';

import { ShowDataPage } from './show-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowDataPageRoutingModule
  ],
  declarations: [ShowDataPage]
})
export class ShowDataPageModule {}
