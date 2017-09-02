import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the UserInfoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserInfoProvider {
  name:string;
  email:string;
  accessToken:string;
  client:string;

  constructor(private storage: Storage) { 
    this.storage.get('accessToken').then(accessToken =>{
      if(this.accessToken != null && accessToken != ''){
        this.accessToken = accessToken;
      }
    });
    this.storage.get('email').then(email =>{
      if(this.email != null && email != ''){
        this.email = email;
      }
    });

    this.storage.get('client').then(client =>{
      if(this.client != null && client != ''){
        this.client = client;
      }
    });
  }
}
