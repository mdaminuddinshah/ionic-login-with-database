import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../services/network.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register4',
  templateUrl: './register4.page.html',
  styleUrls: ['./register4.page.scss'],
})
export class Register4Page implements OnInit {

  public name: string = '';
  public email: string = '';
  public password1: string = '';
  public password2: string = '';

  constructor(
    private network:NetworkService,
    private toast2:ToastController,
    private nav:NavController
    ) { }

  ngOnInit() {
  }

  async submit(){
    if(this.password1 == this.password2){
      this.network.register4(this.name, this.email, this.password1).then( async (res:any)=>{
        if(res.status == 200){
          const toast = await this.toast2.create({
            message: res.data.message,
            duration: 3000,
            position: 'middle',
            color: 'success'
          })
          toast.present();

          const navDelay = 2000;

          setTimeout(()=>{
            this.nav.navigateBack('/login')
          }, navDelay);

        }
        else{
          const failed = await this.toast2.create({
            message : res.data.message,
            duration: 3000,
            position: 'middle',
            color: 'danger'
          })
          failed.present();
        }
        
      })
    } else{
      const gagal = await this.toast2.create({
        message: 'password do not match',
        duration: 3000,
        position: 'middle',
        color: 'danger'

      });
      gagal.present();

    }
  }

}
