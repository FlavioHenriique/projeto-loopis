import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjetosPage } from './projetos';
import { CadastroProjetosPageModule } from '../cadastro-projetos/cadastro-projetos.module';

@NgModule({
  declarations: [
    ProjetosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjetosPage),
    CadastroProjetosPageModule
  ],
})
export class ProjetosPageModule {}
