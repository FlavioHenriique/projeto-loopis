import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Projeto } from '../../model/Projeto';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-cadastro-projetos',
  templateUrl: 'cadastro-projetos.html',
})
export class CadastroProjetosPage {

  projeto: Projeto;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public http: HttpClient) {
    this.projeto = new Projeto();
  }

  cadastrar() {
    let url = "http://localhost:8081/projetos/";
    this.http.post(url, this.projeto, { observe: 'response' }).subscribe(res => {
      if (res.status != 200) {
        this.presentAlert("Erro","Algo deu errado!");
      } else {
        this.presentAlert("OK!","Projeto cadastrado com sucesso!");
      }
    });
  }

  presentAlert(titulo, msg) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: msg,
      buttons: ['Ok']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroProjetosPage');
  }

  goBack() {
    this.navCtrl.pop();
  }
}
