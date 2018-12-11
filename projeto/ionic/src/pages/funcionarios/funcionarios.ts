import { Component } from '@angular/core';
import { IonicPage, ModalController, AlertController, NavController, NavParams } from 'ionic-angular';
import { Funcionario } from '../../model/Funcionario';
import { CadastroFuncionariosPage } from '../cadastro-funcionarios/cadastro-funcionarios';


@IonicPage()
@Component({
  selector: 'page-funcionarios',
  templateUrl: 'funcionarios.html',
})
export class FuncionariosPage {

  root: boolean;
  funcionario: Funcionario;
  
  constructor(public modalCtrl: ModalController, public alertCtrl: AlertController,public navCtrl: NavController, navParams: NavParams) { 
    
    this.funcionario = navParams.get('funcionario');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuncionariosPage');
  }
  presentModal(nome) {
    console.log(nome);
    const modal = this.modalCtrl.create('ModalPage', { nome: nome });
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

  cadastrarFuncionario() {
    this.navCtrl.push(CadastroFuncionariosPage, {});
  }

  presentAlert(titulo, msg) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: msg,
      buttons: ['Ok']
    });
    alert.present();
  }

  ehRoot(){
    console.log(this.funcionario.nome);
    return this.funcionario.tipo == 'ROOT';
  }
}
