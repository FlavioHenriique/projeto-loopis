import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    console.log(navParams.data);
    this.funcionario = navParams.get('funcionario');
    this.buscarProjetos();
  }

  ionViewDidLoad() {
    
  }

  buscarProjetos(){
    let url = "http://localhost:8081/projetos/";
    this.http.get(url,{observe:'response'}).subscribe(res=>{
      this.projetos = res.body;
    });
  }

  ehRoot() {
    return this.funcionario.tipo == 'ROOT';
  }

  cadastrarProjeto(){
    this.navCtrl.push(CadastroProjetosPage, {});    
  }
}
