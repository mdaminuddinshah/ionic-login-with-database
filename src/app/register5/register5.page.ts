import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../services/network.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register5',
  templateUrl: './register5.page.html',
  styleUrls: ['./register5.page.scss'],
})
export class Register5Page implements OnInit {

  public name: string = '';
  public email: string = '';
  public password1: string = '';
  public password2: string = '';

  constructor(
    private network:NetworkService,
    private toast:ToastController,
    private nav:NavController
    ) { }

  ngOnInit() {
  }

 async submit(){
    if(this.password1 == this.password2){
      this.network.register5(this.name, this.email, this.password1).then( async (res:any)=>{
        if(res.status == 200){
          const toasts = await this.toast.create({
            'message': res.data.message,
            'duration': 3000,
            'position': 'middle',
            'color': 'success'
          })
          toasts.present();

          const navDelay = 2000;

          setTimeout(()=>{
            this.nav.navigateBack('/login')
          }, navDelay);
          
        } else{
          const wrongEmail = await this.toast.create({
            'message' : res.data.message,
            'duration' : 4000,
            'position': 'middle',
            'color': 'danger'
          });
          wrongEmail.present();
        }
      })
    } else {
      const wrongPassword = await this.toast.create({
        'message': 'wrong password/ password mismatch',
        'duration': 2000,
        'position': 'middle',
        'color': 'danger'
      });
      wrongPassword.present();
    }
  }

}
