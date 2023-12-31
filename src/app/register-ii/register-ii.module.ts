import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterIIPageRoutingModule } from './register-ii-routing.module';

import { RegisterIIPage } from './register-ii.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterIIPageRoutingModule
  ],
  declarations: [RegisterIIPage]
})
export class RegisterIIPageModule {}
