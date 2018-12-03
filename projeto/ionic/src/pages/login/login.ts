import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email: string;
  senha: string;

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public toast: ToastController,
    public http: HttpClient
  ) { }

  login(){
    let json = {email:this.email, senha: this.senha, tipo:'NORMAL'};
    let url = "http://localhost:8081/funcionarios/login";
    this.http.post(url, json, {observe: 'response'}).subscribe(res=>{
      if(res.status != 200){
        this.criarToast("Usuário não encontrado!");
      }else{
        console.log(res.body);
      }
    });
  }
  
  proxima(){
    this.navCtrl.push('CadastroFuncionariosPage',{});
  }
  proximas(){
    this.navCtrl.push('FuncionariosPage',{});
  }

  criarToast(msg:string){
    this.toast.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    }).present();
  }
}
