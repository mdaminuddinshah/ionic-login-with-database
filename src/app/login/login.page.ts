import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../services/network.service';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public email:string = "";
  public password:string = "";

  constructor(
    private network:NetworkService, 
    private menuCtrl:MenuController,
    private storage:StorageService,
    public navCtrl:NavController,
    private toastcontroller:ToastController
    ) { }


  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }
  
  ionViewWillLeave(){
    this.menuCtrl.enable(true);
    this.email = '';
    this.password = '';
    
  }

  ngOnInit() {
  }
  
  signIn() {
    this.network.login(this.email, this.password)
      .then( async (res:any) => {
        if(res.Token){
        // .then((res) => {
        console.log(res.Token);
        // console.log(res);
          this.storage.set('token', res.Token);
          this.navCtrl.navigateForward('folder');
        }

        else {
          const toast = await this.toastcontroller.create({
            message: res.message,
            duration: 3000,
            position: 'middle',
            color: 'danger',
          });
          toast.present();

        }

        
      })
      .catch( async (err) => {
        console.log(err);

        const toast = await this.toastcontroller.create({
          message: JSON.stringify(err),
          duration: 3000,
          position: 'middle',
          color: 'danger',
        });
        toast.present();

      });
  }

  register(){
    this.navCtrl.navigateForward('register');
  }

  

}
