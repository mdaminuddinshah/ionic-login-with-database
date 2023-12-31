import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor( private storage:Storage) { }


  // create/ update
  async set(key: string, value: any) {
    await this.storage.set(key, value);
  }

  // read
  async get(key: string){
    return await this.storage.get(key);
  }

  // delete
  async remove(key:string){
    await this.storage.remove(key);
  }
}
