import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor( private storage:StorageService) { }

  login(email:string, password:string){

    return new Promise( async (resolve, reject)=>{
      try{
        const options = {
          url: "https://namdosan.online/api/auth/login",
          headers: {"Content-Type":  "application/json"},
          data: {
            email:email,
            password: password
    
          }
        };
        const response: HttpResponse = await CapacitorHttp.post(options);
        resolve(response.data);
      }
      
      catch(err){
        reject(err);
      }
    })  
  }

  public getData(){
    return new Promise( async (resolve, reject)=>{
      const token = await this.storage.get('token');

      try{
        const options = {
          url: "https://namdosan.online/api/ticket",
          headers: {
            "Content-Type":  "application/json",
            Authorization: "Bearer " + token, 
          
          },
        };
        const response: HttpResponse = await CapacitorHttp.get(options);
        resolve(response.data);
      }
      
      catch(err){
        reject(err);
      }
    })
  }

  public register(name: string, email: string, password:string ){

    return new Promise((resolve, reject)=>{
      try{
        const options = {
          url: "https://namdosan.online/api/auth/register",
          headers: {"Content-Type":  "application/json"},
          data: {
            name:name,
            email: email,
            password: password,
    
          }
        };
        
        CapacitorHttp.post(options).then(
          (res)=>{
          resolve(res);
        // }, 
        // (err)=>{
        //   reject(err);
       }
        );
        
      } catch(err){
        reject(err);
      }
    })  ;
  }

  // public register(name:string, email:string, password: string){
  //   return new Promise((resolve, reject)=>{
  //       const details = {
  //           url: "https://namdosan.online/api/auth/registe",
  //           headers: {"Content-Type" : "application/json"},
  //           data: {
  //               name: name,
  //               email: email,
  //               password: password, 
  //           } 
  //       };

  //       CapacitorHttp.post(details).then((success)=>{
  //           resolve(success);
  //       }).catch((err)=>reject(err));
  //   })
  // }

  public getDataById(id:number){
    return new Promise( async (resolve, reject)=>{
      const token = await this.storage.get('token');
      const options = {
        url: 'https://namdosan.online/api/ticket/'+id,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token, 
        },
      };
      console.log(options.url);


      CapacitorHttp.get(options).then((res)=>{
        resolve(res.data);
      }, (err)=>{
        reject(err);
      })
    })
  }

  
}
