import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {
  public folder!: string;

  public yesOrNo:any;

  private activatedRoute = inject(ActivatedRoute);
  constructor(private loading:LoadingController) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }



  // 
  async getYesNo(){
    const loader = await this.loading.create({
      message: "sebenter",
      spinner: "dots"
    });

    loader.present();

    const options = {
      url: 'https://yesno.wtf/api'
    };
  
    const response: HttpResponse = await CapacitorHttp.get(options);
    this.yesOrNo = response.data;
    loader.dismiss();
}
}
