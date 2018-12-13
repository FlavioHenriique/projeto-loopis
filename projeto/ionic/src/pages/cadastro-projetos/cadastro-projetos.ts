import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Projeto } from '../../model/Projeto';


@IonicPage()
@Component({
  selector: 'page-cadastro-projetos',
  templateUrl: 'cadastro-projetos.html',
})
export class CadastroProjetosPage {

  projeto: Projeto;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.projeto = new Projeto();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroProjetosPage');
  }

  goBack() {
    this.navCtrl.pop();
  }
}
