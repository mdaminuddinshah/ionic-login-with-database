import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../services/network.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register-ii',
  templateUrl: './register-ii.page.html',
  styleUrls: ['./register-ii.page.scss'],
})
export class RegisterIIPage implements OnInit {

  constructor(private network:NetworkService, 
    private toast:ToastController,
    private navctrl:NavController) { }

  public name: string = '';
  public email: string = '';
  public password1: string = '';
  public password2: string = '';

  ngOnInit() {
  }

  async submit(){
    if(this.password1 == this.password2){

      // making asynchronous request
      this.network.registerII(this.name, this.email, this.password1)

      // handling the result with .then()
      // then(result:any)
      .then( async (rest:any)=>{

        // if(result.status == 200)
        if(rest.status == 200){
          const berjaya = await this.toast.create({
            message: rest.data.message,
            duration: 3000,
            position: 'middle',
            color: 'success'
          })
          berjaya.present();

          const navDelay = 2000;

              setTimeout(() => {
                this.navctrl.navigateBack('/login');
              }, navDelay);  
        }else {
          const toasts = await this.toast.create({
            message: rest.data.message,
            duration: 5000,
            position: 'middle',
            color: 'danger'
          });
          toasts.present();
        }
      })
    } 
    else {
      const gagal = await this.toast.create({
        message: 'password do not match',
        duration: 2000,
        position: 'middle',
        color: 'warning'
      })
      gagal.present();
    }
  }

}
