import { Component } from '@angular/core';
import { IonicPage, ModalController,AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-funcionarios',
  templateUrl: 'funcionarios.html',
})
export class FuncionariosPage {

  constructor(public modalCtrl: ModalController,public alertCtrl: AlertController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuncionariosPage');
  }
  presentModal(nome) {
    console.log(nome);
    const modal = this.modalCtrl.create('ModalPage',{nome: nome});
    modal.present();
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Excluir Funcionário',
      message: 'Tem certeza de que deseja excluir este funcionário?',
      inputs: [
        {
          type: 'password',
          name: 'senha',
          placeholder: 'Senha root',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Excluir',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
