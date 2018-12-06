import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Funcionario } from '../../model/Funcionario';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CadastroFuncionariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-funcionarios',
  templateUrl: 'cadastro-funcionarios.html',
})
export class CadastroFuncionariosPage {

  root: boolean;
  funcionario: Funcionario;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private alertCtrl: AlertController) 
    {
    this.funcionario = new Funcionario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroFuncionariosPage');
  }

  cadastrar(){
    this.funcionario.tipo = (this.root) ? 'ROOT' : 'NORMAL';
    let url = "http://localhost:8081/funcionarios/salvar";
    this.http.post(url, this.funcionario, { observe: 'response' }).subscribe(res => {
      if (res.status != 200) {
        this.presentAlert();
      } else {
        console.log("foi");
      }
    });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
