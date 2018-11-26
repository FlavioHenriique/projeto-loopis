import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TmailsonPage } from './tmailson';

@NgModule({
  declarations: [
    TmailsonPage,
  ],
  imports: [
    IonicPageModule.forChild(TmailsonPage),
  ],
})
export class TmailsonPageModule {}
