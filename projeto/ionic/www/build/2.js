webpackJsonp([2],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroFuncionariosPageModule", function() { return CadastroFuncionariosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_funcionarios__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroFuncionariosPageModule = /** @class */ (function () {
    function CadastroFuncionariosPageModule() {
    }
    CadastroFuncionariosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_funcionarios__["a" /* CadastroFuncionariosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_funcionarios__["a" /* CadastroFuncionariosPage */]),
            ],
        })
    ], CadastroFuncionariosPageModule);
    return CadastroFuncionariosPageModule;
}());

//# sourceMappingURL=cadastro-funcionarios.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroFuncionariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CadastroFuncionariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroFuncionariosPage = /** @class */ (function () {
    function CadastroFuncionariosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastroFuncionariosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroFuncionariosPage');
    };
    CadastroFuncionariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-funcionarios',template:/*ion-inline-start:"/home/flavio/ADS/Loopis/projeto-loopis/projeto/ionic/src/pages/cadastro-funcionarios/cadastro-funcionarios.html"*/'<ion-header class="header">\n  <ion-navbar color="primary">\n    <ion-title>LOOPIS</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="action-sheets-basic-page body">\n  <ion-grid>\n    <ion-row justify-content-center align-items-center>\n      <h1 id="title">Cadastro de Funcionários</h1>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card>\n    <ion-row align-items-center>\n\n      <ion-list class="form">\n        <ion-item>\n          <ion-label floating>Nome</ion-label>\n          <ion-input type="text" value="" id="Nome"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Email</ion-label>\n          <ion-input type="email" id="Email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Senha</ion-label>\n          <ion-input type="password" value="" id="Nome"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Cargo</ion-label>\n          <ion-input type="text" id="Cargo"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Perfil do Github</ion-label>\n          <ion-input type="text" id="perfil"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Habilidades</ion-label>\n          <ion-input type="text" id="Habilidades"></ion-input>\n        </ion-item>\n\n\n\n        <ion-item>\n          <br>\n          <br>\n          <ion-row justify-content-center align-items-center>\n            <button class="btn" ion-button color="primary">CADASTRAR</button>\n            <button class="btn" ion-button color="danger">CANCELAR</button>\n          </ion-row>\n        </ion-item>\n\n\n      </ion-list>\n\n\n    </ion-row>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/flavio/ADS/Loopis/projeto-loopis/projeto/ionic/src/pages/cadastro-funcionarios/cadastro-funcionarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CadastroFuncionariosPage);
    return CadastroFuncionariosPage;
}());

//# sourceMappingURL=cadastro-funcionarios.js.map

/***/ })

});
//# sourceMappingURL=2.js.map