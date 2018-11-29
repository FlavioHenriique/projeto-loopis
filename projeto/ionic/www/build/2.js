webpackJsonp([2],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncionariosPageModule", function() { return FuncionariosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__funcionarios__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FuncionariosPageModule = /** @class */ (function () {
    function FuncionariosPageModule() {
    }
    FuncionariosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__funcionarios__["a" /* FuncionariosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__funcionarios__["a" /* FuncionariosPage */]),
            ],
        })
    ], FuncionariosPageModule);
    return FuncionariosPageModule;
}());

//# sourceMappingURL=funcionarios.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncionariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuncionariosPage = /** @class */ (function () {
    function FuncionariosPage(modalCtrl, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
    }
    FuncionariosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FuncionariosPage');
    };
    FuncionariosPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create('ModalPage');
        modal.present();
    };
    FuncionariosPage.prototype.showConfirm = function () {
        var confirm = this.alertCtrl.create({
            title: 'Excluir Funcionário',
            message: 'Tem certeza de que deseja excluir este funcionário?',
            inputs: [
                {
                    type: 'password',
                    name: 'senha',
                    placeholder: 'Senha root',
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    FuncionariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-funcionarios',template:/*ion-inline-start:"/home/loopis/Documents/Mailson/Ionic/projeto-loopis/projeto/ionic/src/pages/funcionarios/funcionarios.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>LOOPIS</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding class="action-sheets-basic-page">\n      <ion-grid>\n         <ion-row justify-content-center align-items-center>\n           <h1 id="title">Funcionarios</h1>\n         </ion-row>\n      </ion-grid>\n      \n      <ion-card>\n\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="/../assets/imgs/teste.jpeg">\n            </ion-avatar>\n            <h2>Glaymar</h2>\n            <p>Estagiario</p>\n          </ion-item>       \n          <ion-card-content>\n            <p>Habilidades ..... do funcionario</p>\n          </ion-card-content>\n        \n          <ion-row>\n            <ion-col>\n              <button ion-button icon-start primary small>\n               Editar\n              </button>\n            </ion-col>\n            <ion-col center text-center>\n                <button ion-button icon-start (click)="presentModal()" primary small >\n                  Detalhes\n                </button>\n            </ion-col>\n            <ion-col center text-right>\n                <button ion-button icon-start (click)="showConfirm()" color = "danger" small>\n                Excluir    \n                </button>\n            </ion-col>\n          </ion-row>\n        \n        </ion-card>\n\n\n\n        <ion-card>\n\n            <ion-item>\n              <ion-avatar item-start>\n                <img src="/../assets/imgs/teste.jpeg">\n              </ion-avatar>\n              <h2>Mailson</h2>\n              <p>Estagiario</p>\n            </ion-item>       \n            <ion-card-content>\n              <p>Habilidades ..... do funcionario</p>\n            </ion-card-content>\n          \n            <ion-row>\n              <ion-col>\n                <button ion-button icon-start primary small>\n                 Editar\n                </button>\n              </ion-col>\n              <ion-col center text-center>\n                  <button ion-button icon-start (click)="presentModal()" primary small >\n                    Detalhes\n                  </button>\n              </ion-col>\n              <ion-col center text-right>\n                  <button ion-button icon-start (click)="showConfirm()" color = "danger" small>\n                  Excluir    \n                  </button>\n              </ion-col>\n            </ion-row>\n          \n          </ion-card>\n\n\n\n          <ion-card>\n\n              <ion-item>\n                <ion-avatar item-start>\n                  <img src="/../assets/imgs/teste.jpeg">\n                </ion-avatar>\n                <h2>Flávio</h2>\n                <p>Estagiario</p>\n              </ion-item>       \n              <ion-card-content>\n                <p>Habilidades ..... do funcionario</p>\n              </ion-card-content>\n            \n              <ion-row>\n                <ion-col>\n                <button class="btn" ion-button icon-start primary small >\n                    Editar\n                </button>\n                  \n                </ion-col>\n                <ion-col center text-center>\n                    <button ion-button icon-start (click)="presentModal()"  primary small >\n                      Detalhes\n                    </button>\n                </ion-col>\n                <ion-col center text-right>\n                    <button ion-button icon-start (click)="showConfirm()" color = "danger" small>\n                    Excluir    \n                    </button>\n                </ion-col>\n              </ion-row>\n            \n            </ion-card>\n  </ion-content>\n  '/*ion-inline-end:"/home/loopis/Documents/Mailson/Ionic/projeto-loopis/projeto/ionic/src/pages/funcionarios/funcionarios.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _b || Object])
    ], FuncionariosPage);
    return FuncionariosPage;
    var _a, _b;
}());

//# sourceMappingURL=funcionarios.js.map

/***/ })

});
//# sourceMappingURL=2.js.map