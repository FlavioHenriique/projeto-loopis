import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Funcionario } from '../../model/Funcionario';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

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
  validations_form : FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder) 
    {
    this.funcionario = new Funcionario();
    
  }

  ngOnInit(): any {
    this.validations_form = this.formBuilder.group({
      nome: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
   });
  }

  cadastrar(){
    this.funcionario.tipo = (this.root) ? 'ROOT' : 'NORMAL';
    let url = "http://localhost:8081/funcionarios/cadastrar";
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
