import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroFuncionariosPage } from './cadastro-funcionarios';

@NgModule({
  declarations: [
    CadastroFuncionariosPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroFuncionariosPage),
  ],
})
export class CadastroFuncionariosPageModule {}
