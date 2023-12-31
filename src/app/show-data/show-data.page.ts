import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../services/network.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.page.html',
  styleUrls: ['./show-data.page.scss'],
})
export class ShowDataPage implements OnInit {
  theData:any;

  constructor(
    private networkservice: NetworkService,
    private nav:NavController
    ) { }

  async ionViewWillEnter(){
    this.networkservice.getData().then((res:any)=>{
      // console.log("RES: ", res.data);
      this.theData = res.data;
    })
  }

  gotodetails(id:number){
    this.nav.navigateForward('show-data-details/' +id);
  }

  ngOnInit() {}
}
