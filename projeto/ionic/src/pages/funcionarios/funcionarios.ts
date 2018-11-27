import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-funcionarios',
  templateUrl: 'funcionarios.html',
})
export class FuncionariosPage {

  constructor(public modalCtrl: ModalController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuncionariosPage');
  }
  presentModal() {
    const modal = this.modalCtrl.create('ModalPage');
    modal.present();
  }

}
