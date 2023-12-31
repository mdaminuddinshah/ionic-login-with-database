import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../services/network.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-data-details',
  templateUrl: './show-data-details.page.html',
  styleUrls: ['./show-data-details.page.scss'],
})
export class ShowDataDetailsPage implements OnInit {

  receivedData:any;
  isloaded:boolean = false;

  constructor(
    private network:NetworkService,
    private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.isloaded = false;
    const id = this.activeRoute.snapshot.paramMap.get('id');
    console.log('ID:', id);
    this.network.getDataById(Number(id)).then((res:any)=>{
      this.receivedData = res.data;
      console.log("data", this.receivedData);
      this.isloaded = true;
    });
  }

  ionViewWillEnter(){
    
  }

}
