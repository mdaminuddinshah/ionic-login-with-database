import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Storage} from "@ionic/storage-angular"

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
 
  constructor( private storage:Storage, public navctrl:NavController) {}

  async ngOnInit() {
    await this.storage.create();
  }

  logout(){
    this.storage.remove('token');
    this.navctrl.navigateBack('login');
  }
}
