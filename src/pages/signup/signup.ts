import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


 //Services
 import { AuthenticationProvider } from '../../providers/authentication/authentication';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {name:"", email:"", confirmEmail:"", password:"", confirmPassword:""};
  

  constructor(public navCtrl: NavController, private api: AuthenticationProvider) {
  }


  onSubmit(){
    this.api.signup(this.user).then(data => {
      this.navCtrl.pop();
    })
    .catch(error => {
      console.log('Error: ', error);
    })
  }

  back(){
    this.navCtrl.pop()
  }

  saveUser(){

  }
}
