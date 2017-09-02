import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { ForgotPasswordPage } from "../forgot-password/forgot-password";
import { SignupPage } from "../signup/signup";
import { AuthenticationProvider } from '../../providers/authentication/authentication';



/**
 * Generated class for the SigninPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  email:string = "";
  password:string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private api: AuthenticationProvider) {
  }

   signin(){
    this.api.login(this.email.trim().toLowerCase(), this.password).then(data => {
      this.navCtrl.setRoot(HomePage, {}, {animate:true, direction:'forward'});
    });
  }

  signup(){
    this.navCtrl.push(SignupPage);
  }

  forgotPassword(){
    this.navCtrl.push(ForgotPasswordPage);
  }
}
