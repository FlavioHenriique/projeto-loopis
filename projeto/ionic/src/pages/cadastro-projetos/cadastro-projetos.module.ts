import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroProjetosPage } from './cadastro-projetos';

@NgModule({
  declarations: [
    CadastroProjetosPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroProjetosPage),
  ],
})
export class CadastroProjetosPageModule {}
