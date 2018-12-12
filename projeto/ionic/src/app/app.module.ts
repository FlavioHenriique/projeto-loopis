import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { FuncionariosPageModule } from '../pages/funcionarios/funcionarios.module';
import { CadastroFuncionariosPageModule } from '../pages/cadastro-funcionarios/cadastro-funcionarios.module';
import { ProjetosPage } from '../pages/projetos/projetos';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ProjetosPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    FuncionariosPageModule,
    CadastroFuncionariosPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ProjetosPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
