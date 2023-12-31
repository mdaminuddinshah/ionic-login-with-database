import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../services/network.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.page.html',
  styleUrls: ['./register3.page.scss'],
})
export class Register3Page implements OnInit {

  public name: string = '';
  public email: string = '';
  public password1: string = '';
  public password2: string = '';

  constructor(
    private network:NetworkService, 
    private toast:ToastController,
    private navctrl:NavController) { }

  ngOnInit() {
  }

  async submit(){
    if(this.password1 == this.password2){
      this.network.register3(this.name, this.email, this.password1)
      .then( async (res:any)=>{
        if(res.status == 200){
          const berjaya = await this.toast.create({
            message: res.data.message,
            duration: 3000,
            position: 'middle',
            color: 'success'
          })
          berjaya.present();

          const navDelay = 2000;

          setTimeout(()=>{
            this.navctrl.navigateBack('/login')
          }, navDelay)

        } else {
          const failed = await this.toast.create({
            message: res.data.message,
            duration: 4000,
            position: 'middle',
            color: 'warning'
          })
          failed.present();
        }
      })

    } else{
      const gagal = await this.toast.create({
        message: 'passwords do not match',
        duration: 3000,
        position: 'middle',
        color: 'danger'
      })
      gagal.present();
    }
  }

}
