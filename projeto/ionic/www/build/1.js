webpackJsonp([1],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicialPageModule", function() { return InicialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicial__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InicialPageModule = /** @class */ (function () {
    function InicialPageModule() {
    }
    InicialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inicial__["a" /* InicialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inicial__["a" /* InicialPage */]),
            ],
        })
    ], InicialPageModule);
    return InicialPageModule;
}());

//# sourceMappingURL=inicial.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Funcionario__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__funcionarios_funcionarios__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projetos_projetos__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InicialPage = /** @class */ (function () {
    function InicialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pagFuncionarios = __WEBPACK_IMPORTED_MODULE_3__funcionarios_funcionarios__["a" /* FuncionariosPage */];
        this.pagProjetos = __WEBPACK_IMPORTED_MODULE_4__projetos_projetos__["a" /* ProjetosPage */];
        this.funcionario = new __WEBPACK_IMPORTED_MODULE_2__model_Funcionario__["a" /* Funcionario */]();
        this.funcionario = navParams.data.funcionario;
        this.params = { funcionario: this.funcionario };
    }
    InicialPage.prototype.ionViewDidLoad = function () {
    };
    InicialPage.prototype.sair = function () {
        this.funcionario = null;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */], {});
    };
    InicialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicial',template:/*ion-inline-start:"/home/flavio/ADS/Loopis/projeto-loopis/projeto/ionic/src/pages/inicial/inicial.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>LOOPIS - Tela Inicial</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="sair()">\n        <ion-icon name="exit"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-tabs>\n\n    <ion-tab [root]="pagFuncionarios" tabTitle="Funcionários" tabIcon="contact" [rootParams]="params"></ion-tab>\n    <ion-tab [root]="pagProjetos" tabTitle="Projetos" tabIcon="code-working" [rootParams]="params"></ion-tab>\n  </ion-tabs>\n</ion-content>'/*ion-inline-end:"/home/flavio/ADS/Loopis/projeto-loopis/projeto/ionic/src/pages/inicial/inicial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], InicialPage);
    return InicialPage;
}());

//# sourceMappingURL=inicial.js.map

/***/ })

});
//# sourceMappingURL=1.js.map