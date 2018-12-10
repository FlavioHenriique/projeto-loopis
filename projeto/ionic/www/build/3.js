webpackJsonp([3],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroFuncionariosPageModule", function() { return CadastroFuncionariosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_funcionarios__ = __webpack_require__(279);
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

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroFuncionariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Funcionario__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
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
    function CadastroFuncionariosPage(navCtrl, navParams, http, alertCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.funcionario = new __WEBPACK_IMPORTED_MODULE_2__model_Funcionario__["a" /* Funcionario */]();
    }
    CadastroFuncionariosPage.prototype.ngOnInit = function () {
        this.validations_form = this.formBuilder.group({
            nome: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(3), this.nameValidator.bind(this)]),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ]))
        });
    };
    CadastroFuncionariosPage.prototype.isValid = function (field) {
        var formField = this.validations_form.get(field);
        return formField.valid || formField.pristine;
    };
    CadastroFuncionariosPage.prototype.nameValidator = function (control) {
        if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
            return { invalidName: true };
        }
    };
    CadastroFuncionariosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroFuncionariosPage');
    };
    CadastroFuncionariosPage.prototype.cadastrar = function () {
        var _this = this;
        this.funcionario.tipo = (this.root) ? 'ROOT' : 'NORMAL';
        var url = "http://localhost:8081/funcionarios/cadastrar";
        this.http.post(url, this.funcionario, { observe: 'response' }).subscribe(function (res) {
            if (res.status != 200) {
                _this.presentAlert();
            }
            else {
                console.log("foi");
            }
        });
    };
    CadastroFuncionariosPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Low battery',
            subTitle: '10% of battery remaining',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    CadastroFuncionariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-funcionarios',template:/*ion-inline-start:"/home/loopis/Documents/Mailson/Ionic/projeto-loopis/projeto/ionic/src/pages/cadastro-funcionarios/cadastro-funcionarios.html"*/'<ion-header class="header">\n  <ion-navbar color="primary">\n    <ion-title>LOOPIS</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="action-sheets-basic-page body">\n  <ion-grid>\n    <ion-row justify-content-center align-items-center>\n      <h1 id="title">Cadastro de Funcionários</h1>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card>\n    <ion-row align-items-center>\n      <form (ngSubmit)="cadastrar()" [formGroup]="validations_form">\n        <ion-list class="form">\n          <ion-item>\n            <ion-label floating>Nome</ion-label>\n            <ion-input type="text" name="nome" formControlName="nome" [(ngModel)]="funcionario.nome" aria-required="true"></ion-input>\n          </ion-item>\n          <p *ngIf="!isValid(\'nome\')" danger padding-left>Invalid nome</p>\n          <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email" name="email" [(ngModel)]="funcionario.email" [ngModelOptions]="{standalone: true}" aria-required="true"></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label floating>Senha</ion-label>\n            <ion-input type="password" name="senha" [(ngModel)]="funcionario.senha" [ngModelOptions]="{standalone: true}"></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label floating>Cargo</ion-label>\n            <ion-input type="text" name="cargo" [(ngModel)]="funcionario.cargo" [ngModelOptions]="{standalone: true}"></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label floating>Perfil do Github</ion-label>\n            <ion-input type="text" name="perfilGithub" [(ngModel)]="funcionario.perfilGithub" [ngModelOptions]="{standalone: true}"></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label floating>Habilidades</ion-label>\n            <ion-input type="text" name="habilidades" [(ngModel)]="funcionario.habilidades" [ngModelOptions]="{standalone: true}"></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label>ROOT</ion-label>\n            <ion-checkbox color="blue" name="root" checked="true" [(ngModel)]="root" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n          </ion-item>\n  \n          <ion-item>\n            <br>\n            <br>\n            <ion-row justify-content-center align-items-center>\n              <button type="submit" ion-button color="primary" >CADASTRAR</button>\n              <button ion-button color="danger">CANCELAR</button>\n            </ion-row>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-row>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/loopis/Documents/Mailson/Ionic/projeto-loopis/projeto/ionic/src/pages/cadastro-funcionarios/cadastro-funcionarios.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object])
    ], CadastroFuncionariosPage);
    return CadastroFuncionariosPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=cadastro-funcionarios.js.map

/***/ })

});
//# sourceMappingURL=3.js.map