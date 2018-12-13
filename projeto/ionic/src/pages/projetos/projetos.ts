import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Funcionario } from '../../model/Funcionario';
import { HttpClient } from '@angular/common/http';
import { CadastroProjetosPage } from '../cadastro-projetos/cadastro-projetos';


@IonicPage()
@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
})
export class ProjetosPage {

  funcionario: Funcionario;
  projetos: any;
  url: string = "http://localhost:8081/projetos/";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public alertCtrl: AlertController) {
    console.log(navParams.data);
    this.funcionario = navParams.get('funcionario');
    this.buscarProjetos();
  }

  ionViewDidLoad() {

  }

  buscarProjetos() {

    this.http.get(this.url, { observe: 'response' }).subscribe(res => {
      this.projetos = res.body;
    });
  }

  ehRoot() {
    return this.funcionario.tipo == 'ROOT';
  }

  cadastrarProjeto() {
    this.navCtrl.push(CadastroProjetosPage, {});
  }

  excluir(id) {
    this.http.delete(this.url + id, { observe: 'response' }).subscribe(res => {
        if(res.status == 200){
          this.presentAlert('OK','Projeto deletado!');
          this.buscarProjetos();
        }else{
          this.presentAlert('Erro','erro');
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
}
