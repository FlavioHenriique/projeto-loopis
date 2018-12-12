import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Funcionario } from '../../model/Funcionario';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

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
  validations_form: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder) {
    this.funcionario = new Funcionario();

  }

  cadastrar() {
    this.funcionario.tipo = (this.root) ? 'ROOT' : 'NORMAL';
    let url = "http://localhost:8081/funcionarios/";
    this.http.post(url, this.funcionario, { observe: 'response' }).subscribe(res => {
      if (res.status == 202) {
        this.presentAlert("Erro","Email já cadastrado!");
      } else {
        this.presentAlert("OK!","Funcionário cadastrado com sucesso!");
      }
    });
  }

  goBack() {
    this.navCtrl.pop();
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
