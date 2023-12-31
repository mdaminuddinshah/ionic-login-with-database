import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { NetworkService } from '../services/network.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})


export class RegisterPage implements OnInit {

  constructor(
    private network: NetworkService, 
    private navctrl: NavController,
    private toast: ToastController
    ) { }

  public name: string = '';
  public password1: string = '';
  public password2: string = '';
  public email: string = '';

  ngOnInit() {
  }

  
  async submit(){
    if (this.password1 == this.password2){
      this.network.register(this.name, this.email, this.password1).then(
        async (res:any) => {
          // console.log(res);
          if(res.status== 200){
            const berjaya = await this.toast.create({
              message: res.data.message,
              duration: 3000,
              position: 'middle',
              color: 'success'
            })
            berjaya.present();

              const navDelay = 2000;

              setTimeout(() => {
                this.navctrl.navigateBack('/login');
              }, navDelay);  

          } else {
            // console.log("err: ", res);
            const toasts = await this.toast.create({
              message: res.data.message,
              duration: 5000,
              position: 'middle',
              color: 'danger'
            });
            toasts.present();
            
          }
          
        }
      );
    } else {
      console.log('passwords do not match');
      const gagal = await this.toast.create({
        message: 'password do not match',
        duration: 2000,
        position: 'middle',
        color: 'warning'
      });
      gagal.present();
    }
  }
  

}
