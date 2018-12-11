webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroFuncionariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Funcionario__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(77);
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
            nome: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(3)
            ]),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ]))
        });
    };
    CadastroFuncionariosPage.prototype.cadastrar = function () {
        var _this = this;
        this.funcionario.tipo = (this.root) ? 'ROOT' : 'NORMAL';
        var url = "http://localhost:8081/funcionarios/";
        this.http.post(url, this.funcionario, { observe: 'response' }).subscribe(function (res) {
            if (res.status == 202) {
                _this.presentAlert("Erro", "Email já cadastrado!");
            }
            else {
                _this.presentAlert("OK!", "Funcionário cadastrado com sucesso!");
            }
        });
    };
    CadastroFuncionariosPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    CadastroFuncionariosPage.prototype.presentAlert = function (titulo, msg) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: msg,
            buttons: ['Ok']
        });
        alert.present();
    };
    CadastroFuncionariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-funcionarios',template:/*ion-inline-start:"/home/flavio/ADS/Loopis/projeto-loopis/projeto/ionic/src/pages/cadastro-funcionarios/cadastro-funcionarios.html"*/'<ion-header class="header">\n  <ion-navbar color="primary">\n    <ion-title>LOOPIS</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="action-sheets-basic-page body">\n  <ion-grid>\n    <ion-row justify-content-center align-items-center>\n      <h1 id="title">Cadastro de Funcionários</h1>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card>\n    <ion-row align-items-center>\n      <form  class="form" (ngSubmit)="cadastrar()" #loginForm="ngForm">\n        <ion-list >\n          <ion-item>\n            <ion-label floating>Nome</ion-label>\n            <ion-input type="text" name="nome" [(ngModel)]="funcionario.nome" required minlength = \'2\' maxlength="50"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email" name="email" [(ngModel)]="funcionario.email" \n            pattern="^[a-zA-Z0-9.!#$%&\'*+/=?^_`~-]+@[a-z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$" \n            required></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label floating>Senha</ion-label>\n            <ion-input type="password" name="senha" [(ngModel)]="funcionario.senha" required minlength= \'8\'></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label floating>Cargo</ion-label>\n            <ion-input type="text" name="cargo" [(ngModel)]="funcionario.cargo" required minlength= \'7\'></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label floating>Perfil do Github</ion-label>\n            <ion-input type="text" name="perfilGithub" [(ngModel)]="funcionario.perfilGithub" required minlength= \'2\' maxlength = \'100\' ></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label floating>Habilidades</ion-label>\n            <ion-input type="text" name="habilidades" [(ngModel)]="funcionario.habilidades" required></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label>ROOT</ion-label>\n            <ion-checkbox color="blue" name="root" checked="true" [(ngModel)]="root" ></ion-checkbox>\n          </ion-item>\n  \n          <ion-item>\n            <br>\n            <br>\n            <ion-row justify-content-center align-items-center>\n              <button type="submit" [disabled]="loginForm.invalid" ion-button color="primary" >CADASTRAR</button>\n              <button ion-button color="danger" (click)="goBack()">CANCELAR</button>\n            </ion-row>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-row>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/flavio/ADS/Loopis/projeto-loopis/projeto/ionic/src/pages/cadastro-funcionarios/cadastro-funcionarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], CadastroFuncionariosPage);
    return CadastroFuncionariosPage;
}());

//# sourceMappingURL=cadastro-funcionarios.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Funcionario; });
var Funcionario = /** @class */ (function () {
    function Funcionario(email, senha, nome, cargo, perfilGithub, tipo, habilidades) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
        this.cargo = cargo;
        this.perfilGithub = perfilGithub;
        this.tipo = tipo;
        this.habilidades = habilidades;
    }
    return Funcionario;
}());

//# sourceMappingURL=Funcionario.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro-funcionarios/cadastro-funcionarios.module": [
		156
	],
	"../pages/funcionarios/funcionarios.module": [
		157
	],
	"../pages/inicial/inicial.module": [
		279,
		1
	],
	"../pages/modal/modal.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroFuncionariosPageModule", function() { return CadastroFuncionariosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_funcionarios__ = __webpack_require__(100);
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

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncionariosPageModule", function() { return FuncionariosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__funcionarios__ = __webpack_require__(202);
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

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Funcionario__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, platform, actionsheetCtrl, toast, http) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.toast = toast;
        this.http = http;
        this.funcionario = new __WEBPACK_IMPORTED_MODULE_3__model_Funcionario__["a" /* Funcionario */]();
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.funcionario.tipo = (this.root) ? 'ROOT' : 'NORMAL';
        var url = "http://localhost:8081/funcionarios/login";
        this.http.post(url, this.funcionario, { observe: 'response' }).subscribe(function (res) {
            if (res.status != 200) {
                _this.criarToast("Usuário não encontrado!");
            }
            else {
                _this.funcionario = res.body;
                _this.navCtrl.push('InicialPage', { funcionario: _this.funcionario });
            }
        });
    };
    LoginPage.prototype.cadastrarFuncionario = function () {
        this.navCtrl.push('CadastroFuncionariosPage', {});
    };
    LoginPage.prototype.proximas = function () {
        this.navCtrl.push('FuncionariosPage', {});
    };
    LoginPage.prototype.criarToast = function (msg) {
        this.toast.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        }).present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/flavio/ADS/Loopis/projeto-loopis/projeto/ionic/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>LOOPIS</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="action-sheets-basic-page">\n    <ion-grid>\n       <ion-row justify-content-center align-items-center>\n         <h1 id="title">Nome do App</h1>\n       </ion-row>\n    </ion-grid>\n    \n    <div class="form-box">\n      <ion-row  align-items-center justify-content-center>\n          \n        <ion-list class="form">\n\n            <!-- <ion-img width="30" height="30" src="../assets/icon/user.png" ></ion-img> -->\n            <ion-item>\n              \n              <ion-label floating> <ion-icon name="person"></ion-icon>  Email</ion-label>\n              <ion-input type="text" [(ngModel)]="funcionario.email"></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-label floating><ion-icon name="lock"></ion-icon>  Senha</ion-label>\n              <ion-input type="password" [(ngModel)]="funcionario.senha"></ion-input>\n            </ion-item>\n            \n            <br/><br/>\n            <ion-item>\n                <ion-label>ROOT</ion-label>\n                <ion-checkbox color="blue" checked="true" [(ngModel)]="root"></ion-checkbox>\n              </ion-item>\n          </ion-list>  \n      </ion-row>\n      \n      <br/><br/><br/>\n      <ion-row justify-content-center align-items-center>\n          <button class="btn" (click)="login()" ion-button>ENTRAR</button>\n          <button class="btn" ion-button (click)="cadastrarFuncionario()">Cadastro</button>\n          <button class="btn" ion-button (click)="proximas()">Funcionarios</button>\n      </ion-row>\n    </div>  \n</ion-content>\n'/*ion-inline-end:"/home/flavio/ADS/Loopis/projeto-loopis/projeto/ionic/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _e || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncionariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_funcionarios_cadastro_funcionarios__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(77);
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
    function FuncionariosPage(modalCtrl, alertCtrl, navCtrl, navParams, http) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.http = http;
        this.funcionario = navParams.get('funcionario');
        this.buscarFuncionarios();
    }
    FuncionariosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FuncionariosPage');
    };
    FuncionariosPage.prototype.presentModal = function (func) {
        var modal = this.modalCtrl.create('ModalPage', { funcionario: func });
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
    FuncionariosPage.prototype.cadastrarFuncionario = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_funcionarios_cadastro_funcionarios__["a" /* CadastroFuncionariosPage */], {});
    };
    FuncionariosPage.prototype.presentAlert = function (titulo, msg) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: msg,
            buttons: ['Ok']
        });
        alert.present();
    };
    FuncionariosPage.prototype.ehRoot = function () {
        return this.funcionario.tipo == 'ROOT';
    };
    FuncionariosPage.prototype.buscarFuncionarios = function () {
        var _this = this;
        var url = "http://localhost:8081/funcionarios/";
        this.http.get(url, { observe: 'response' }).subscribe(function (res) {
            _this.funcionarios = res.body;
        });
    };
    FuncionariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-funcionarios',template:/*ion-inline-start:"/home/flavio/ADS/Loopis/projeto-loopis/projeto/ionic/src/pages/funcionarios/funcionarios.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>LOOPIS</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="action-sheets-basic-page">\n  <ion-grid>\n    <ion-row justify-content-center align-items-center>\n      <h1 id="title">Funcionarios</h1>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card *ngFor="let func of funcionarios">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="/../assets/imgs/teste.jpeg">\n      </ion-avatar>\n      <h2>{{func.nome}}</h2>\n      <p>{{func.cargo}}</p>\n    </ion-item>\n    <ion-card-content>\n      <p>{{func.habilidades}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button class="btn" ion-button icon-start primary small>\n          Editar\n        </button>\n\n      </ion-col>\n      <ion-col center text-center>\n        <button ion-button icon-start (click)="presentModal(func)" primary small>\n          Detalhes\n        </button>\n      </ion-col>\n      <ion-col center text-right>\n        <button ion-button icon-start (click)="showConfirm()" color="danger" small [hidden]="!ehRoot()">\n          Excluir\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-fab bottom right>\n    <button ion-fab fab-fixed (click)="cadastrarFuncionario()" [hidden]="!ehRoot()">\n      <ion-icon name="add" is-active="false"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/home/flavio/ADS/Loopis/projeto-loopis/projeto/ionic/src/pages/funcionarios/funcionarios.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _e || Object])
    ], FuncionariosPage);
    return FuncionariosPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=funcionarios.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_funcionarios_funcionarios_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cadastro_funcionarios_cadastro_funcionarios_module__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro-funcionarios/cadastro-funcionarios.module#CadastroFuncionariosPageModule', name: 'CadastroFuncionariosPage', segment: 'cadastro-funcionarios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/funcionarios/funcionarios.module#FuncionariosPageModule', name: 'FuncionariosPage', segment: 'funcionarios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicial/inicial.module#InicialPageModule', name: 'InicialPage', segment: 'inicial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__pages_funcionarios_funcionarios_module__["FuncionariosPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_cadastro_funcionarios_cadastro_funcionarios_module__["CadastroFuncionariosPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/flavio/ADS/Loopis/projeto-loopis/projeto/ionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/flavio/ADS/Loopis/projeto-loopis/projeto/ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map