import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Funcionario } from '../../model/Funcionario';


@IonicPage()
@Component({
  selector: 'page-inicial',
  templateUrl: 'inicial.html',
})
export class InicialPage {

  private funcionario: Funcionario;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.funcionario = new Funcionario();
    this.funcionario = navParams.data.funcionario;
  }

  ionViewDidLoad() {
    
  }

}
