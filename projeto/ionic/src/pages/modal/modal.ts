import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import * as $ from 'jquery';
import { Funcionario } from '../../model/Funcionario';

@IonicPage(
  {
    name:'ModalPage'
  }
)
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  private funcionario : Funcionario;

  constructor(private navParams: NavParams, private view: ViewController) {
    this.funcionario = navParams.get('funcionario');
  }

  ionViewDidLoad() {
    
  }

  closeModal(){
    this.view.dismiss();

  }

}
