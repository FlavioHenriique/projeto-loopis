import { Component } from '@angular/core';
import { IonicPage, ModalController, AlertController, NavController, NavParams } from 'ionic-angular';
import { Funcionario } from '../../model/Funcionario';
import { CadastroFuncionariosPage } from '../cadastro-funcionarios/cadastro-funcionarios';
import { HttpClient } from '@angular/common/http';
import {md5} from '../../assets/ts/md5';


@IonicPage()
@Component({
  selector: 'page-funcionarios',
  templateUrl: 'funcionarios.html',
})
export class FuncionariosPage {

  root: boolean;
  funcionario: Funcionario;
  funcionarios: any;

  constructor(public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    navParams: NavParams,
    public http: HttpClient) {

    this.funcionario = navParams.get('funcionario');
    this.buscarFuncionarios();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuncionariosPage');
  }
  presentModal(func) {
    const modal = this.modalCtrl.create('ModalPage', { funcionario: func });
    modal.present();
  }

  showConfirm(email: String) {
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
          handler: data => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Excluir',
          handler: data => {
            if(md5(data.senha) == this.funcionario.senha){
              let url = "http://localhost:8081/funcionarios/"+email;
              this.http.delete(url, { observe: 'response' }).subscribe(res => {
                if(res.status != 200){
                  this.presentAlert("Erro","Aconteceu algo!");
                }else{
                  this.presentAlert("OK","UsuarioDeletado com sucesso");
                }
              });
            }else{
              this.presentAlert("Erro","Senha incorreta!");
            }
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

  ehRoot() {
    return this.funcionario.tipo == 'ROOT';
  }

  buscarFuncionarios() {
    let url = "http://localhost:8081/funcionarios/";
    this.http.get(url, { observe: 'response' }).subscribe(res => {
      this.funcionarios = res.body;
    });
  }

  toHash(s){
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
  }
}
