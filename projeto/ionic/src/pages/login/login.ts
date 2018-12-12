import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Funcionario } from '../../model/Funcionario';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  root: boolean;
  funcionario: any;

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public toast: ToastController,
    public http: HttpClient
  ) {
    this.funcionario = new Funcionario();
  }

  login() {
    this.funcionario.tipo = (this.root) ? 'ROOT' : 'NORMAL';
    let url = "http://localhost:8081/funcionarios/login";
    this.http.post(url, this.funcionario, { observe: 'response' }).subscribe(res => {
      if (res.status != 200) {
        this.criarToast("Usuário não encontrado!");
      } else {
        this.funcionario = res.body;
        this.navCtrl.push('InicialPage', {funcionario: this.funcionario});
      }
    });
  }

  cadastrarFuncionario() {
    this.navCtrl.push('CadastroFuncionariosPage', {});
  }

  proximas() {
    this.navCtrl.push('FuncionariosPage', {});
  }

  criarToast(msg: string) {
    this.toast.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    }).present();
  }
}
