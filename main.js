(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chatbot></app-chatbot>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatbot/chatbot.component */ "./src/app/chatbot/chatbot.component.ts");
/* harmony import */ var _dialogflow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogflow.service */ "./src/app/dialogflow.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_5__["ChatbotComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [_dialogflow_service__WEBPACK_IMPORTED_MODULE_6__["DialogflowService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chatbot/chatbot.component.css":
/*!***********************************************!*\
  !*** ./src/app/chatbot/chatbot.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat {\r\n    float: left;\r\n    margin: 20px;\r\n    border: 1px solid black;\r\n    width: 600px;\r\n    height: 100%;\r\n    padding-bottom: 40px;\r\n}\r\n.chat form {\r\n    padding:20px; \r\n}\r\n.conversation {\r\n    float: left;\r\n    width: 100%;\r\n    height: 300px;\r\n}\r\n.response {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.bot-message {\r\n    float: left;\r\n    padding: 20px;\r\n    width: 100px;\r\n    text-align: center;\r\n    background-color: lightblue;\r\n    border: 1px solid lightblue;\r\n    border-radius: 10%;\r\n}\r\n.user-message {\r\n    float: right;\r\n    padding: 20px;\r\n    width: 100px;\r\n    background-color: darkseagreen;\r\n    border: 1px solid darkseagreen;\r\n    border-radius: 10%;\r\n}\r\n.showText {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.msg {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.header{\r\n    background-color: cadetblue;\r\n    color:white;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\ninput {\r\n    width: 280px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/chatbot/chatbot.component.html":
/*!************************************************!*\
  !*** ./src/app/chatbot/chatbot.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat\">\r\n  <div class=\"header\">Chatbot</div>\r\n  <form #questions=\"ngForm\">\r\n    <div class=\"conversation\" #conversation style=\"overflow-y: scroll\">\r\n      <div class=\"bot-message\">\r\n        {{\"Hi there\"}}\r\n      </div>\r\n      <div *ngFor=\"let question of listOfQuestions; let k = index; let l = last\" class=\"section\">\r\n        <div class=\"msg\">\r\n          <div *ngIf=\"question\" class=\"user-message\">{{question}}</div>\r\n        </div>\r\n\r\n        <div class=\"bot-message\">\r\n          <div *ngIf='listOfResults[k]' class=\"showText\">\r\n            <div *ngIf='listOfResults[k]' class=\"msg\">\r\n              {{listOfResults[k]}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"response\">\r\n      <input autocomplete=\"off\" [(ngModel)]=\"newQuestion\" name=\"newQuestion\" placeholder=\"Question\" autofocus>\r\n      <button class=\"ask\" type=\"submit\" (click)=\"askQuestion(questions.value)\">Ask me</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/chatbot/chatbot.component.ts":
/*!**********************************************!*\
  !*** ./src/app/chatbot/chatbot.component.ts ***!
  \**********************************************/
/*! exports provided: ChatbotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotComponent", function() { return ChatbotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialogflow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialogflow.service */ "./src/app/dialogflow.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatbotComponent = /** @class */ (function () {
    function ChatbotComponent(chat) {
        this.chat = chat;
        this.listOfQuestions = [];
        this.listOfResults = [];
    }
    ;
    ChatbotComponent.prototype.ngOnInit = function () {
        this.welcomeText = "Hi there";
    };
    ChatbotComponent.prototype.askQuestion = function (value) {
        var _this = this;
        value.newQuestion = value.newQuestion.trim();
        if (value.newQuestion) {
            this.listOfQuestions.push(this.newQuestion);
            this.newQuestion = '';
            this.chat.getResponse(value.newQuestion).subscribe(function (res) {
                _this.result = res;
                _this.result = res.result.fulfillment.speech;
                _this.listOfResults.push(res.result.fulfillment.speech);
            });
        }
    };
    ChatbotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chatbot',
            template: __webpack_require__(/*! ./chatbot.component.html */ "./src/app/chatbot/chatbot.component.html"),
            styles: [__webpack_require__(/*! ./chatbot.component.css */ "./src/app/chatbot/chatbot.component.css")]
        }),
        __metadata("design:paramtypes", [_dialogflow_service__WEBPACK_IMPORTED_MODULE_1__["DialogflowService"]])
    ], ChatbotComponent);
    return ChatbotComponent;
}());



/***/ }),

/***/ "./src/app/dialogflow.service.ts":
/*!***************************************!*\
  !*** ./src/app/dialogflow.service.ts ***!
  \***************************************/
/*! exports provided: DialogflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogflowService", function() { return DialogflowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogflowService = /** @class */ (function () {
    function DialogflowService(http) {
        this.http = http;
        this.baseURL = "https://api.dialogflow.com/v1/query?v=20150910";
        this.token = "a68f2e4a88ff4d8abba02ae8b88624bd";
    }
    DialogflowService.prototype.getResponse = function (query) {
        var data = {
            query: query,
            lang: 'en',
            sessionId: '12345'
        };
        return this.http
            .post("" + this.baseURL, data, { headers: this.getHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DialogflowService.prototype.getHeaders = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', "Bearer " + this.token);
        return headers;
    };
    DialogflowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DialogflowService);
    return DialogflowService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Marco\talkingbot\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map