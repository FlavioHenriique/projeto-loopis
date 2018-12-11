import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Funcionario } from '../../model/Funcionario';
import { FuncionariosPage } from '../funcionarios/funcionarios';
import { CadastroFuncionariosPage } from '../cadastro-funcionarios/cadastro-funcionarios';



@IonicPage()
@Component({
  selector: 'page-inicial',
  templateUrl: 'inicial.html',
})
export class InicialPage {

  public funcionario: Funcionario;
  private pagFuncionarios = FuncionariosPage;
  private pagProjetos = CadastroFuncionariosPage;
  params : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.funcionario = new Funcionario();
    this.funcionario = navParams.data.funcionario; 
    this.params = {funcionario: this.funcionario}; 
  }

  ionViewDidLoad() {
    
  }

}
