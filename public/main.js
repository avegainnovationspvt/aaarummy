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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _gamemid_gamemid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gamemid/gamemid.component */ "./src/app/gamemid/gamemid.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _forpas_forpas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forpas/forpas.component */ "./src/app/forpas/forpas.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _middlepart_middlepart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./middlepart/middlepart.component */ "./src/app/middlepart/middlepart.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");












var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'game', component: _gamemid_gamemid_component__WEBPACK_IMPORTED_MODULE_5__["GamemidComponent"] },
    { path: 'forgot-password', component: _forpas_forpas_component__WEBPACK_IMPORTED_MODULE_7__["ForpasComponent"] },
    { path: 'lobby', component: _middlepart_middlepart_component__WEBPACK_IMPORTED_MODULE_9__["MiddlepartComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__["FlashMessagesModule"].forRoot()
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <router-outlet></router-outlet>\n  <flash-messages></flash-messages>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng7-aaarummy';
    }
    AppComponent.prototype.showAlert = function () {
        UIkit.modal.alert('UIkit alert!');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _leftbtn_leftbtn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leftbtn/leftbtn.component */ "./src/app/leftbtn/leftbtn.component.ts");
/* harmony import */ var _btndownbanner_btndownbanner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./btndownbanner/btndownbanner.component */ "./src/app/btndownbanner/btndownbanner.component.ts");
/* harmony import */ var _middlepart_middlepart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./middlepart/middlepart.component */ "./src/app/middlepart/middlepart.component.ts");
/* harmony import */ var _gamemid_gamemid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gamemid/gamemid.component */ "./src/app/gamemid/gamemid.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _forpas_forpas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forpas/forpas.component */ "./src/app/forpas/forpas.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _leftbtn_leftbtn_component__WEBPACK_IMPORTED_MODULE_8__["LeftbtnComponent"],
                _btndownbanner_btndownbanner_component__WEBPACK_IMPORTED_MODULE_9__["BtndownbannerComponent"],
                _middlepart_middlepart_component__WEBPACK_IMPORTED_MODULE_10__["MiddlepartComponent"],
                _gamemid_gamemid_component__WEBPACK_IMPORTED_MODULE_11__["GamemidComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _forpas_forpas_component__WEBPACK_IMPORTED_MODULE_13__["ForpasComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__["FlashMessagesModule"].forRoot()
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_15__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/btndownbanner/btndownbanner.component.html":
/*!************************************************************!*\
  !*** ./src/app/btndownbanner/btndownbanner.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-grid backcard1\">\n    <div class=\"uk-width-1-5\">\n      <div uk-switcher=\"animation: uk-animation-fade; toggle: > *\">\n        <button class=\"yourbtn uk-button uk-button-default uk-button-large uk-margin-left  uk-margin-bottom\" style=\"width:93%;\">Your games</button>\n      </div>  \n    </div>\n    <div class=\"banner uk-width-1-2\">\n      <div class=\"uk-flex uk-flex-center\">\n        <p>Banner</p>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/btndownbanner/btndownbanner.component.scss":
/*!************************************************************!*\
  !*** ./src/app/btndownbanner/btndownbanner.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".yourbtn {\n  color: white;\n  border-radius: 5px;\n  height: 15vh;\n  font-size: 20px;\n  margin-top: 29%; }\n\n.yourbtn:hover {\n  color: white;\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnRuZG93bmJhbm5lci9DOlxcUHJvamVjdHNcXFJ1bW15XFxhYWFydW1teS1mcm9udGxpdmUvc3JjXFxhcHBcXGJ0bmRvd25iYW5uZXJcXGJ0bmRvd25iYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBYyxFQUFBOztBQUVoQjtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9idG5kb3duYmFubmVyL2J0bmRvd25iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueW91cmJ0biB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDE1dmg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDoyOSU7XG59XG4ueW91cmJ0bjpob3ZlcntcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/btndownbanner/btndownbanner.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/btndownbanner/btndownbanner.component.ts ***!
  \**********************************************************/
/*! exports provided: BtndownbannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtndownbannerComponent", function() { return BtndownbannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BtndownbannerComponent = /** @class */ (function () {
    function BtndownbannerComponent() {
    }
    BtndownbannerComponent.prototype.ngOnInit = function () {
    };
    BtndownbannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-btndownbanner',
            template: __webpack_require__(/*! ./btndownbanner.component.html */ "./src/app/btndownbanner/btndownbanner.component.html"),
            styles: [__webpack_require__(/*! ./btndownbanner.component.scss */ "./src/app/btndownbanner/btndownbanner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BtndownbannerComponent);
    return BtndownbannerComponent;
}());



/***/ }),

/***/ "./src/app/forpas/forpas.component.html":
/*!**********************************************!*\
  !*** ./src/app/forpas/forpas.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"forgotpass\">\n<div class=\"uk-card uk-card-default uk-width-1-2@m uk-width-1-1@s forpass\">\n    <div class=\"uk-card-header\">\n        <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n            <div class=\"uk-width-auto\">\n                <h3 class=\"uk-card-title titl\">Forgot Password</h3>\n            </div>\n        </div>\n    </div>\n    <div class=\"uk-card-body\">\n      <form>\n        <fieldset class=\"uk-fieldset\">\n            <div class=\"uk-margin inp4\">\n              <br>\n              <input class=\"uk-input ip4\" type=\"text\" placeholder=\"Registered mobile or email\">\n            </div>\n        </fieldset>\n      </form>\n    </div>\n    <div class=\"uk-card-footer\">\n        <span>we will send u a link</span>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/forpas/forpas.component.scss":
/*!**********************************************!*\
  !*** ./src/app/forpas/forpas.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgotpass {\n  background-color: #3b5999;\n  padding-right: 5px;\n  padding-top: 5px;\n  padding-bottom: 359px; }\n\n.line {\n  position: relative;\n  bottom: 18px; }\n\n.titl {\n  position: relative;\n  bottom: 12px; }\n\n.inp4 {\n  border-radius: 5px;\n  width: 300px; }\n\n.ip4 {\n  border-radius: 4px;\n  position: relative;\n  bottom: 20px; }\n\n.butt {\n  width: 320px;\n  border-radius: 5px;\n  position: relative;\n  bottom: 22px; }\n\n@media screen and (min-width: 320px) and (max-width: 2950px) {\n  .forpass {\n    border-radius: 10px;\n    margin-top: 100px;\n    width: 360px;\n    left: 35%;\n    height: 40vh; } }\n\n@media screen and (min-width: 320px) and (max-width: 515px) {\n  .forpass {\n    border-radius: 10px;\n    margin-top: 100px;\n    right: 30%;\n    width: 340px;\n    left: 5%; }\n  .forgotpass {\n    padding-right: 5px;\n    padding-top: 5px;\n    padding-bottom: 279px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ycGFzL0M6XFxQcm9qZWN0c1xcUnVtbXlcXGFhYXJ1bW15LWZyb250bGl2ZS9zcmNcXGFwcFxcZm9ycGFzXFxmb3JwYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBd0I7RUFDeEIsa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YscUJBQW9CLEVBQUE7O0FBSXRCO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFpQjtFQUNqQixZQUFXLEVBQUE7O0FBRWY7RUFDRSxrQkFBaUI7RUFDakIsWUFBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixZQUFXLEVBQUE7O0FBRWI7RUFDRSxZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixZQUFXLEVBQUE7O0FBSWI7RUFDRTtJQUNJLG1CQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBVztJQUNYLFNBQVM7SUFDVCxZQUFXLEVBQUEsRUFDZDs7QUFFSDtFQUNFO0lBQ0ksbUJBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFFBQVEsRUFBQTtFQUdaO0lBQ0Usa0JBQWlCO0lBQ2pCLGdCQUFlO0lBQ2YscUJBQW9CLEVBQUEsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9mb3JwYXMvZm9ycGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmdvdHBhc3N7XG4gIGJhY2tncm91bmQtY29sb3I6IzNiNTk5OTtcbiAgcGFkZGluZy1yaWdodDo1cHg7XG4gIHBhZGRpbmctdG9wOjVweDtcbiAgcGFkZGluZy1ib3R0b206MzU5cHg7XG59XG5cblxuLmxpbmV7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgYm90dG9tOjE4cHg7XG59XG4udGl0bHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBib3R0b206MTJweDtcbn1cbi5pbnA0e1xuICBib3JkZXItcmFkaXVzOjVweDtcbiAgd2lkdGg6MzAwcHg7XG59XG4uaXA0e1xuICBib3JkZXItcmFkaXVzOjRweDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGJvdHRvbToyMHB4O1xufVxuLmJ1dHR7XG4gIHdpZHRoOjMyMHB4O1xuICBib3JkZXItcmFkaXVzOjVweDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGJvdHRvbToyMnB4O1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMjk1MHB4KSB7XG4gIC5mb3JwYXNze1xuICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICB3aWR0aDozNjBweDtcbiAgICAgIGxlZnQ6IDM1JTtcbiAgICAgIGhlaWdodDo0MHZoO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDUxNXB4KSB7XG4gIC5mb3JwYXNze1xuICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICByaWdodDogMzAlO1xuICAgICAgd2lkdGg6IDM0MHB4O1xuICAgICAgbGVmdDogNSU7XG5cbiAgfVxuICAuZm9yZ290cGFzc3tcbiAgICBwYWRkaW5nLXJpZ2h0OjVweDtcbiAgICBwYWRkaW5nLXRvcDo1cHg7XG4gICAgcGFkZGluZy1ib3R0b206Mjc5cHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/forpas/forpas.component.ts":
/*!********************************************!*\
  !*** ./src/app/forpas/forpas.component.ts ***!
  \********************************************/
/*! exports provided: ForpasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForpasComponent", function() { return ForpasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForpasComponent = /** @class */ (function () {
    function ForpasComponent() {
    }
    ForpasComponent.prototype.ngOnInit = function () {
    };
    ForpasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forpas',
            template: __webpack_require__(/*! ./forpas.component.html */ "./src/app/forpas/forpas.component.html"),
            styles: [__webpack_require__(/*! ./forpas.component.scss */ "./src/app/forpas/forpas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForpasComponent);
    return ForpasComponent;
}());



/***/ }),

/***/ "./src/app/gamemid/gamemid.component.html":
/*!************************************************!*\
  !*** ./src/app/gamemid/gamemid.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <app-nav></app-nav>\n  <app-leftbtn></app-leftbtn>\n  <app-btndownbanner></app-btndownbanner>\n</section>\n<div class=\"backcard2\">\n          <img src=\"assets/img/avatar5.png\" alt=\"avatar\" class=\"avatar1\"/>\n          <img src=\"assets/img/avatar5.png\" alt=\"avatar\" class=\"avatar2\"/>\n          <img src=\"assets/img/avatar5.png\" alt=\"avatar\" class=\"avatar3\"/>\n          <img src=\"assets/img/avatar5.png\" alt=\"avatar\" class=\"avatar4\" />\n          <img src=\"assets/img/avatar5.png\" alt=\"avatar\" class=\"avatar5\" />\n          <img src=\"assets/img/avatar5.png\" alt=\"avatar\" class=\"avatar6\" />\n</div>\n"

/***/ }),

/***/ "./src/app/gamemid/gamemid.component.scss":
/*!************************************************!*\
  !*** ./src/app/gamemid/gamemid.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgtable {\n  height: 520px;\n  margin-left: -40px; }\n\n.avatar1 {\n  width: 8vw;\n  height: 15vh;\n  border-radius: 50%;\n  position: absolute;\n  top: 20%;\n  left: 8%; }\n\n.avatar2 {\n  width: 8vw;\n  height: 15vh;\n  border-radius: 50%;\n  position: absolute;\n  top: 0%;\n  left: 25%; }\n\n.avatar3 {\n  width: 8vw;\n  height: 15vh;\n  border-radius: 50%;\n  position: absolute;\n  top: 0%;\n  left: 45%; }\n\n.avatar4 {\n  width: 8vw;\n  height: 15vh;\n  border-radius: 80%;\n  position: absolute;\n  top: 20%;\n  left: 85%; }\n\n.avatar5 {\n  width: 8vw;\n  height: 15vh;\n  border-radius: 50%;\n  position: absolute;\n  top: 77%;\n  left: 45%; }\n\n.avatar6 {\n  width: 8vw;\n  height: 15vh;\n  border-radius: 50%;\n  position: absolute;\n  top: 0%;\n  left: 65%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZW1pZC9DOlxcUHJvamVjdHNcXFJ1bW15XFxhYWFydW1teS1mcm9udGxpdmUvc3JjXFxhcHBcXGdhbWVtaWRcXGdhbWVtaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0MsVUFBUztFQUNULFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLFFBQU87RUFDUCxRQUFPLEVBQUE7O0FBRVI7RUFDQyxVQUFTO0VBQ1QsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsT0FBTTtFQUNOLFNBQVEsRUFBQTs7QUFFVDtFQUNDLFVBQVM7RUFDVCxZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixPQUFNO0VBQ04sU0FBUSxFQUFBOztBQUVUO0VBQ0MsVUFBUztFQUNULFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLFFBQU87RUFDUCxTQUFRLEVBQUE7O0FBRVQ7RUFDQyxVQUFTO0VBQ1QsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsUUFBTztFQUNQLFNBQVEsRUFBQTs7QUFFVDtFQUNDLFVBQVM7RUFDVCxZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixPQUFNO0VBQ04sU0FBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ2FtZW1pZC9nYW1lbWlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ3RhYmxle1xuICBoZWlnaHQ6IDUyMHB4O1xuICBtYXJnaW4tbGVmdDogLTQwcHg7XG59XG4uYXZhdGFyMXtcblx0d2lkdGg6OHZ3O1xuXHRoZWlnaHQ6MTV2aDtcblx0Ym9yZGVyLXJhZGl1czo1MCU7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHR0b3A6MjAlO1xuXHRsZWZ0OjglO1xufVxuLmF2YXRhcjJ7XG5cdHdpZHRoOjh2dztcblx0aGVpZ2h0OjE1dmg7XG5cdGJvcmRlci1yYWRpdXM6NTAlO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0dG9wOjAlO1xuXHRsZWZ0OjI1JTtcbn1cbi5hdmF0YXIze1xuXHR3aWR0aDo4dnc7XG5cdGhlaWdodDoxNXZoO1xuXHRib3JkZXItcmFkaXVzOjUwJTtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdHRvcDowJTtcblx0bGVmdDo0NSU7XG59XG4uYXZhdGFyNHtcblx0d2lkdGg6OHZ3O1xuXHRoZWlnaHQ6MTV2aDtcblx0Ym9yZGVyLXJhZGl1czo4MCU7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHR0b3A6MjAlO1xuXHRsZWZ0Ojg1JTtcbn1cbi5hdmF0YXI1e1xuXHR3aWR0aDo4dnc7XG5cdGhlaWdodDoxNXZoO1xuXHRib3JkZXItcmFkaXVzOjUwJTtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdHRvcDo3NyU7XG5cdGxlZnQ6NDUlO1xufVxuLmF2YXRhcjZ7XG5cdHdpZHRoOjh2dztcblx0aGVpZ2h0OjE1dmg7XG5cdGJvcmRlci1yYWRpdXM6NTAlO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0dG9wOjAlO1xuXHRsZWZ0OjY1JTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/gamemid/gamemid.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gamemid/gamemid.component.ts ***!
  \**********************************************/
/*! exports provided: GamemidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamemidComponent", function() { return GamemidComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GamemidComponent = /** @class */ (function () {
    function GamemidComponent() {
    }
    GamemidComponent.prototype.ngOnInit = function () {
    };
    GamemidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gamemid',
            template: __webpack_require__(/*! ./gamemid.component.html */ "./src/app/gamemid/gamemid.component.html"),
            styles: [__webpack_require__(/*! ./gamemid.component.scss */ "./src/app/gamemid/gamemid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GamemidComponent);
    return GamemidComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"uk-navbar-container uk-margin nbar\" uk-navbar>\n    <div class=\"uk-navbar-left\">\n        <a class=\"uk-navbar-item uk-logo log\" href=\"#\"><img src=\"assets/img/logo.png\" alt=\"image\" /></a>\n    </div>\n\n    <div class=\"uk-navbar-right\">\n       <ul class=\"uk-navbar-nav\">\n           <li>\n              <a class=\"uk-button uk-button-default fstbtn\" href=\"#\">Download Android App</a>\n              <a class=\"uk-button uk-button-default sndbtn\" href=\"#modal-sections\" uk-toggle><span class=\"lck\" uk-icon=\"icon: lock;\"></span>Login\n                  <div id=\"modal-sections\" uk-modal>\n                     <div class=\"uk-modal-dialog\">\n                        <!--<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>-->\n                        <ul class=\"uk-modal-header\" uk-switcher=\"animation: uk-animation-fade; toggle: > *\">\n                            <button class=\"uk-button uk-button-default btn1\" type=\"button\">Register</button>\n                        </ul>\n                        <ul class=\"uk-modal-body uk-switcher uk-margin\">\n                          <li>\n                            <form (submit)=\"onRegisterSubmit()\">\n                              <fieldset class=\"uk-fieldset\">\n                                <div class=\"uk-margin\">\n                                  <input class=\"uk-input ipt1\" type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Enter username\">\n                                  <input class=\"uk-input ipt2\" type=\"text\" [(ngModel)]=\"contact\" name=\"contact\" placeholder=\"Your mobile number\">\n                                  <input class=\"uk-input ipt3\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Secure password\">\n                                  <p class=\"p1\">By registering you are agreeing to our Terms & Conditions</p>\n                                  <button class=\"uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom btn3\" type=\"submit\"><span class=\"lck2\" uk-icon=\"lock\"></span>Register and Play</button>\n                                  <p class=\"p2\">Or login in one click</p>\n                                  <p uk-margin>\n                                    <a class=\"uk-button uk-button-default lnk1\" href=\"#\"><span class=\"fb\" uk-icon=\"facebook\"></span>Facebook</a>\n                                    <a class=\"uk-button uk-button-default lnk2\" href=\"#\"><span class=\"gl\" uk-icon=\"google\"></span>Google</a>\n                                  </p>\n                                </div>\n                              </fieldset>\n                            </form>\n                          </li>\n                        </ul>\n                      </div>\n                 </div>\n              </a>\n           </li>\n       </ul>\n   </div>\n</nav>\n\n<div uk-grid>\n  <div class=\"uk-width-auto\">\n    <div class=\"imgh\" uk-switcher=\"animation: uk-animation-fade; toggle: > *\">\n      <button class=\"uk-button uk-button-danger\">Welcome Bonous</button>\n      <button class=\"uk-button uk-button-danger\">Booster Bonous</button>\n      <button class=\"uk-button uk-button-danger\">Mobikwik Cashback</button>\n    </div>\n    <ul class=\"uk-switcher imghml\">\n      <li><img class=\"uk-border-rounded imgs1\" src=\"assets/img/sliderh1.webp\" uk-img></li>\n      <li><img class=\"uk-border-rounded\" src=\"assets/img/sliderh2.webp\" uk-img></li>\n      <li><img class=\"uk-border-rounded\" src=\"assets/img/sliderh3.webp\" uk-img></li>\n    </ul>\n  </div>\n  <div class=\"uk-width-expand cardr cardrl\">\n    <div class=\"uk-card uk-card-default uk-width-1-1@m\">\n\n      <div class=\"uk-card-body\">\n        <p class=\"lohp\">Login in One Click</p>\n        <div class=\"uk-flex uk-flex-center\"><button class=\"uk-button uk-button-danger uk-border-rounded\"><i class=\"fab fa-google-plus\"></i> Google Plus</button></div>\n        <p class=\"lohp1\">Or Enter Your Details</p>\n        <form>\n          <div class=\"uk-margin\">\n            <div class=\"uk-inline uk-margin-medium-left\">\n              <span class=\"uk-form-icon\" uk-icon=\"icon: user\"></span>\n              <input name=\"username\" class=\"uk-input uk-form-large uk-border-rounded\" type=\"text\" placeholder=\"Username\">\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <div class=\"uk-inline uk-margin-medium-left\">\n              <span class=\"uk-form-icon\" uk-icon=\"icon: user\"></span>\n              <input name=\"phone\" class=\"uk-input uk-form-large uk-border-rounded\" type=\"text\" placeholder=\"Phone\">\n            </div>\n          </div>\n\n          <div class=\"uk-margin\">\n            <div class=\"uk-inline uk-margin-medium-left\">\n              <span class=\"uk-form-icon\" uk-icon=\"icon: lock\"></span>\n              <input name=\"Password\" class=\"uk-input uk-form-large uk-border-rounded\" type=\"text\" placeholder=\"Password\">\n            </div>\n          </div>\n        </form>\n        <br>\n        <button class=\"uk-button uk-button-primary uk-width-1-1 uk-border-rounded\"><i class=\"fas fa-lock\"></i> Register & Play</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-container-large wucush\">\n  <br>\n  <br>\n  <div class=\"uk-text-center\">\n    <h2 class=\"wucush1\">Why U Choose US</h2>\n    <span class=\"uk-flex uk-flex-center\">\n      <hr class=\"deep-purple accent-2\" style=\"width: 195px;\"></span>\n\n    <div class=\"uk-child-width-expand@s uk-text-center\" uk-grid>\n      <div>\n        <div class=\"uk-card uk-card-body fc_fr\">\n          <img data-src=\"assets/img/design.jpg\" width=\"60\" height=\"60\" alt=\"image\" uk-img>\n          <h4 class=\"inner_head1\">Best-in-class experience</h4>\n          <ul class=\"uk-list\">\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Lightweight & high speed app</li>\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Cash games & Free Tournaments</li>\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Best offers & Unlimited Bonuses</li>\n          </ul>\n        </div>\n      </div>\n      <div>\n        <div class=\"uk-card uk-card-body sc_fr\">\n          <img data-src=\"assets/img/launch.jpg\" width=\"60\" height=\"60\" alt=\"image\" uk-img>\n          <h4 class=\"inner_head2\">Lifetime Same Day cash withdrawal</h4>\n          <ul class=\"uk-list\">\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Withdraw your winnings instantly</li>\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Payments can be made 24*7</li>\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Valid on bank holidays</li>\n          </ul>\n        </div>\n      </div>\n      <div>\n        <div class=\"uk-card uk-card-body tc_fr\">\n          <img data-src=\"assets/img/design.jpg\" width=\"60\" height=\"60\" alt=\"image\" uk-img>\n          <h4 class=\"inner_head3\">Best Customer Support</h4>\n          <ul class=\"uk-list\">\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Withdraw your winnings instantly</li>\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Payments can be made 24*7</li>\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Valid on bank holidays</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"uk-container-large\">\n  <ul class=\"mtsb\" uk-tab>\n    <li class=\"swc1\"><a href=\"#\">Cash Games</a></li>\n    <li class=\"swc1\"><a href=\"#\">Tournaments</a></li>\n    <li class=\"swc1 uk-visible@l\"><a href=\"#\">Practice</a></li>\n  </ul>\n\n  <ul class=\"uk-switcher uk-margin\">\n    <li>\n      <div class=\"uk-text-center \" uk-grid>\n        <div uk-slider>\n\n          <div class=\"uk-position-relative uk-visible-toggle uk-light\" tabindex=\"-1\">\n\n            <ul class=\"uk-slider-items uk-slider-items uk-child-width-1-4@m uk-grid\">\n              <li>\n                <div class=\"uk-width-1-1@s\">\n                  <div class=\"uk-card uk-card-default uk-card-body uk-border-rounded\">\n                    <img class=\"uk-border-rounded\" src=\"assets/img/card1.jpg\" alt=\"image of game\">\n                    <div class=\"uk-margin-top cards1\">\n                      <span class=\"uk-float-left\">Point Value</span>\n                      <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n                      <span class=\"uk-float-right\">0.1 to 40</span>\n                    </div>\n                    <div class=\"ptmt\">\n                      <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n                      <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n                    </div>\n                    <br>\n                    <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n                  </div>\n                </div>\n              </li>\n              <li>\n                <div class=\"uk-width-1-1@s\">\n                  <div class=\"uk-card uk-card-default uk-card-body uk-border-rounded\">\n                    <img class=\"uk-border-rounded\" src=\"assets/img/card2.jpg\" alt=\"image of game\">\n                    <div class=\"uk-margin-top cards1\">\n                      <span class=\"uk-float-left\">Point Value</span>\n                      <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n                      <span class=\"uk-float-right\">0.1 to 40</span>\n                    </div>\n                    <div class=\"ptmt\">\n                      <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n                      <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n                    </div>\n                    <br>\n                    <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n                  </div>\n                </div>\n                <br>\n                <br>\n              </li>\n              <li>\n                <div class=\"uk-width-1-1@s\">\n                  <div class=\"uk-card uk-card-default uk-card-body  uk-border-rounded\">\n                    <img class=\"uk-border-rounded\" src=\"assets/img/deal.jpg\" alt=\"image of game\">\n                    <div class=\"uk-margin-top cards1\">\n                      <span class=\"uk-float-left\">Point Value</span>\n                      <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n                      <span class=\"uk-float-right\">0.1 to 40</span>\n                    </div>\n                    <div class=\"ptmt\">\n                      <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n                      <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n                    </div>\n                    <br>\n                    <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n                  </div>\n                </div>\n              </li>\n              <li>\n                <div class=\"uk-width-1-1@s\">\n                  <div class=\"uk-card uk-card-default uk-card-body uk-border-rounded\">\n                    <img class=\"uk-border-rounded\" src=\"assets/img/point.jpg\" alt=\"image of game\">\n                    <div class=\"uk-margin-top cards1\">\n                      <span class=\"uk-float-left\">Point Value</span>\n                      <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n                      <span class=\"uk-float-right\">0.1 to 40</span>\n                    </div>\n                    <div class=\"ptmt\">\n                      <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n                      <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n                    </div>\n                    <br>\n                    <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n                  </div>\n                </div>\n              </li>\n\n            </ul>\n\n            <a class=\"uk-position-center-left uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-previous uk-slider-item=\"previous\"></a>\n            <a class=\"uk-position-center-right uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-next uk-slider-item=\"next\"></a>\n\n          </div>\n\n\n\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"uk-width-1-1@s uk-width-1-4@l uk-width-1-4@m\">\n        <div class=\"uk-card uk-card-default uk-card-body uk-border-rounded\">\n          <div class=\"uk-flex uk-flex-center\">\n            <div><img class=\"uk-border-rounded tourisi1\" src=\"assets/img/point.jpg\" alt=\"image of game\"></div>\n          </div>\n\n          <div class=\"uk-margin-top cards1\">\n            <span class=\"uk-float-left\">Point Value</span>\n            <span class=\"tourbsi1\"><i class=\"fas fa-rupee-sign ics1\"></i></span>\n            <span class=\"uk-float-right\">0.1 to 40</span>\n          </div>\n          <div class=\"ptmt\">\n            <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n            <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n          </div>\n          <br>\n          <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"uk-child-width-1-4 uk-grid-small uk-text-center\" uk-grid>\n        <div>\n          <div class=\"uk-card uk-card-default uk-card-body\">\n            <img src=\"assets/img/card1.jpg\" alt=\"image of game\">\n            <div class=\"uk-margin-top cards1\">\n              <span class=\"uk-float-left\">Point Value</span>\n              <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n              <span class=\"uk-float-right\">0.1 to 40</span>\n            </div>\n            <div class=\"ptmt\">\n              <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n              <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n            </div>\n            <br>\n            <a class=\"uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\">Play & Win</a>\n          </div>\n        </div>\n        <div>\n          <div class=\"uk-card uk-card-default uk-card-body\">\n            <img src=\"assets/img/card2.jpg\" alt=\"image of game\">\n            <div class=\"uk-margin-top cards1\">\n              <span class=\"uk-float-left\">Point Value</span>\n              <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n              <span class=\"uk-float-right\">0.1 to 40</span>\n            </div>\n            <div class=\"ptmt\">\n              <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n              <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n            </div>\n            <br>\n            <a class=\"uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"> Play & Win</a>\n          </div>\n        </div>\n        <div>\n          <div class=\"uk-card uk-card-default uk-card-body\">\n            <img src=\"assets/img/deal.jpg\" alt=\"image of game\">\n            <div class=\"uk-margin-top cards1\">\n              <span class=\"uk-float-left\">Point Value</span>\n              <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n              <span class=\"uk-float-right\">0.1 to 40</span>\n            </div>\n            <div class=\"ptmt\">\n              <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n              <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n            </div>\n            <br>\n            <a class=\"uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"> Play & Win</a>\n          </div>\n        </div>\n        <div>\n          <div class=\"uk-card uk-card-default uk-card-body\">\n            <img src=\"assets/img/point.jpg\" alt=\"image of game\">\n            <div class=\"uk-margin-top cards1\">\n              <span class=\"uk-float-left\">Point Value</span>\n              <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n              <span class=\"uk-float-right\">0.1 to 40</span>\n            </div>\n            <div class=\"ptmt\">\n              <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n              <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n            </div>\n            <br>\n            <a class=\"uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"> Play & Win</a>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ul>\n  <br>\n</div>\n\n\n\n\n\n\n<div class=\"uk-text-center\">\n  <h2 class=\"wucush1\">Client Testimonials</h2>\n  <span class=\"uk-flex uk-flex-center\">\n    <hr class=\"deep-purple accent-2\" style=\"width: 195px;\"></span>\n</div>\n<div class=\"uk-grid\">\n  <div class=\"uk-width-1-3@l uk-width-1-1@s comh1\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-large uk-card-body uk-box-shadow-large\">\n        <h3 class=\"uk-card-title uk-flex uk-flex-center\"><i class=\"fas fa-quote-right\"></i></h3>\n        <p class=\"cm1\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n        <div class=\"uk-flex uk-flex-center\"><img src=\"assets/img/1.png\" alt=\"image of game\"></div>\n        <p class=\"uk-card-title uk-flex uk-flex-center\">Fouad Badawy</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"uk-width-1-3@l uk-width-1-1@s comh2\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-large uk-card-body uk-box-shadow-large\">\n        <h3 class=\"uk-card-title uk-flex uk-flex-center\"><i class=\"fas fa-quote-right\"></i></h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n        <div class=\"uk-flex uk-flex-center\"><img src=\"assets/img/1.png\" alt=\"image of game\"></div>\n        <p class=\"uk-card-title uk-flex uk-flex-center\">Fouad Badawy</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"uk-width-1-3@l uk-width-1-1@s comh3\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-large uk-card-body uk-box-shadow-large \">\n        <h3 class=\"uk-card-title uk-flex uk-flex-center\"><i class=\"fas fa-quote-right\"></i></h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n        <div class=\"uk-flex uk-flex-center\"><img src=\"assets/img/1.png\" alt=\"image of game\"></div>\n        <p class=\"uk-card-title uk-flex uk-flex-center\">Fouad Badawy</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<p>s</p>\n<p>s</p>\n\n\n<!---------------------------------------Footer------------------------------------------------------>\n\n<div class=\"uk-card uk-width-1-1\">\n  <div class=\"uk-card-header foothead\">\n    <nav class=\"\" uk-navbar>\n      <div class=\"uk-navbar-left\">\n      <ul class=\"uk-navbar-nav\">\n          <li>Get Connected to the Social Media</li>\n        </ul>\n      </div>\n      <div class=\"uk-navbar-right\">\n        <ul class=\"uk-navbar-nav\">\n          <li><a href=\"\"><i class=\"fab fa-facebook-f footheadi\"></i></a></li>\n          <li><a href=\"\"><i class=\"fab fa-twitter footheadi\"></i></a></li>\n          <li><a href=\"\"><i class=\"fab fa-google-plus-g footheadi\"></i></a></li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n  <div class=\"uk-card-body footbody\">\n    <div class=\"uk-grid\">\n      <div class=\"uk-width-1-3@l uk-width-1-1@s comh1\">\n        <div>\n          <div class=\"uk-card\">\n            <p class=\"uk-margin-top uk-margin-large-top footstarth\">AAARummyculture.com offers is your go to app for Cash rummy games online. If offers best-in-class playing experience, highest welcome bonus, free and multilingual customer support and complete digital safety. Play on the website or\n              the Android App.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"uk-width-1-3@l uk-width-1-1@s comh1\">\n        <div>\n          <div class=\"uk-card\">\n            <h3 class=\"uk-card-title uk-flex uk-flex-center footerheadings\">Comapany</h3>\n            <div class=\"uk-flex uk-flex-center\"><hr class=\"deep-purple accent-2 ftll\" style=\"width: 115px;\"></div>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">About</span></a></p>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">Blog</span></a></p>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">Contact Us</span></a></p>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">About Us</span></a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"uk-width-1-3@l uk-width-1-1@s comh1\">\n        <div>\n          <div class=\"uk-card\">\n            <h3 class=\"uk-card-title uk-flex uk-flex-center footerheadings\">Links</h3>\n            <div class=\"uk-flex uk-flex-center\"><hr class=\"deep-purple accent-2 ftll\" style=\"width: 85px;\"></div>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">Offers</span></a></p>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">Referrals</span></a></p>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">How to Play</span></a></p>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">Terms of Service</span></a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"uk-card-footer footend\">\n    <h3 class=\"uk-card-title uk-flex uk-flex-center footendh\">&copy; AAARummyculture.All Right Reserved</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgh {\n  position: absolute;\n  margin-top: 482px;\n  margin-left: 6%; }\n\n.imghml {\n  margin-left: 40px;\n  margin-top: 5%; }\n\n.cardrl {\n  margin-top: 22px;\n  margin-right: 25px; }\n\n.dot {\n  height: 30px;\n  width: 30px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block; }\n\n.text {\n  margin-top: 2px;\n  font-size: 30px;\n  color: Green;\n  margin-left: 13px; }\n\n.hwct {\n  text-align: left; }\n\n.hwct2 {\n  text-align: center; }\n\n.hwct2 {\n  text-align: right; }\n\n.cm1 {\n  text-align: justify;\n  text-align-last: center; }\n\n.imgs {\n  height: 900px; }\n\n.lohh3 {\n  font-size: 40px; }\n\n.lohp {\n  font-size: 25px; }\n\n.lohp1 {\n  font-size: 15px; }\n\n.in1 {\n  width: 100%; }\n\n.imgs1 {\n  height: 420px; }\n\n.uk-list {\n  text-align: justify; }\n\n.uk-margin-small-right {\n  color: green; }\n\n.fc_fr, .sc_fr, .tc_fr {\n  width: 345px;\n  height: 320px; }\n\n.fc_sr, .sc_sr, .tc_sr {\n  width: 345px;\n  height: 320px; }\n\n.sec_head {\n  margin-top: 50px; }\n\n.thrd_head {\n  margin-top: 50px; }\n\n.inner_head1 {\n  font-weight: bold; }\n\n.inner_head2 {\n  font-weight: bold; }\n\n.inner_head3 {\n  font-weight: bold; }\n\n.inner_head4 {\n  font-weight: bold; }\n\n.inner_head5 {\n  font-weight: bold; }\n\n.inner_head6 {\n  font-weight: bold; }\n\n.cards1 {\n  background-color: yellow;\n  border: 2px solid yellow;\n  border-radius: 12px; }\n\n.ics1 {\n  font-size: 20px; }\n\n.ncs {\n  font-size: 25px; }\n\n.ptmt {\n  margin-top: 6px; }\n\n.ptmtb {\n  margin-top: 30px; }\n\n.swc1 a {\n  font-size: 30px; }\n\n.bsc {\n  margin-top: 30px; }\n\n.wucush {\n  margin-top: 30px; }\n\n.wucush1 {\n  font-size: 50px; }\n\n.btns1 {\n  background-color: green; }\n\n.btnsp1 {\n  color: white;\n  font-size: 20px; }\n\n.tourbsi1 {\n  margin-left: 20%; }\n\n@media screen and (min-device-width: 281px) and (max-device-width: 768px) {\n  .comh2 {\n    margin-top: 20px;\n    margin-left: 10px;\n    margin-right: 10px; }\n  .comh1 {\n    margin-top: 20px;\n    margin-left: 10px;\n    margin-right: 10px; }\n  .comh3 {\n    margin-top: 20px;\n    margin-left: 10px;\n    margin-right: 10px; } }\n\n.foothead {\n  background-color: #6351CE;\n  color: white; }\n\n.footheadi {\n  color: white; }\n\n.footbody {\n  background-color: #1C2331;\n  color: white; }\n\n.nj {\n  color: red; }\n\n.footbodycon {\n  text-decoration: none;\n  color: white; }\n\n.textunder:hover {\n  text-decoration: none; }\n\n.footerheadings {\n  color: white;\n  font-size: 25px; }\n\n.footend {\n  background-color: #161C27; }\n\n.footendh {\n  color: white; }\n\n.footstarth {\n  text-align: justify;\n  text-align-last: center; }\n\n/* styles for the nav */\n\n.nbar {\n  background-color: #3CB371;\n  position: relative;\n  bottom: 20px; }\n\n.log img {\n  position: relative;\n  top: 10px;\n  margin-left: 25px;\n  height: 85px; }\n\n.fstbtn {\n  min-height: 50px;\n  margin: 10px;\n  position: relative;\n  top: 35px;\n  left: -180px;\n  border-radius: 5px;\n  font-weight: bold;\n  background: #ffffff;\n  border: 1px solid #000000;\n  color: #000000; }\n\n.fstbtn:hover {\n  color: #000000; }\n\n.sndbtn {\n  min-height: 50px;\n  max-width: 115px;\n  position: relative;\n  top: -25px;\n  left: 70px;\n  margin-right: 45px;\n  border-radius: 5px;\n  font-weight: bold;\n  background: #ffffff;\n  border: 2px solid #000000;\n  color: #000000; }\n\n.sndbtn:hover {\n  color: #000000; }\n\n.lck {\n  padding-right: 5px;\n  position: relative;\n  bottom: 0px;\n  color: darkgreen; }\n\n/* styles for the modal */\n\n#modal-sections {\n  background-color: #3b5999; }\n\n.uk-modal-header {\n  height: 60px;\n  padding-top: 20px;\n  padding-bottom: 12px;\n  border-radius: 10px; }\n\n.uk-modal-dialog {\n  height: 420px;\n  width: 420px;\n  border-radius: 10px; }\n\n.btn1 {\n  padding-left: 20px;\n  font-size: 30px;\n  font-weight: bold;\n  border-radius: 5px;\n  position: relative;\n  bottom: 4px;\n  width: 360px;\n  height: 60px; }\n\n.btn3 {\n  position: relative;\n  top: 5px;\n  left: 20px;\n  width: 380px;\n  border-radius: 5px; }\n\n.ipt1 {\n  position: relative;\n  left: 20px;\n  top: -5px;\n  width: 380px;\n  border-radius: 5px; }\n\n.ipt2 {\n  position: relative;\n  left: 20px;\n  top: 12px;\n  width: 380px;\n  border-radius: 5px; }\n\n.ipt3 {\n  position: relative;\n  left: 20px;\n  top: 28px;\n  width: 380px;\n  border-radius: 5px; }\n\n.p1 {\n  font-size: 12px;\n  position: relative;\n  left: 20px;\n  top: 15px;\n  width: 380px; }\n\n.p2 {\n  font-size: 12px;\n  position: relative;\n  left: 20px;\n  bottom: 18px;\n  width: 380px; }\n\n.lnk1 {\n  width: 180px;\n  margin-top: 8px;\n  margin-right: 30px;\n  position: relative;\n  bottom: 40px;\n  left: 20px;\n  border-radius: 5px;\n  background-color: #3b5999;\n  color: white; }\n\n.lnk2 {\n  width: 188px;\n  margin-top: 8px;\n  position: relative;\n  bottom: 40px;\n  border-radius: 5px;\n  background-color: #dd4b39;\n  color: white; }\n\n.fb {\n  position: relative;\n  right: 16px;\n  bottom: 2px;\n  color: #3b5999;\n  background-color: white; }\n\n.gl {\n  position: relative;\n  right: 12px;\n  bottom: 2px; }\n\n.forgot {\n  font-size: 14px;\n  position: relative;\n  top: 25px;\n  left: 290px; }\n\n.lck2 {\n  position: relative;\n  right: 5px;\n  bottom: 3px; }\n\n.uk-margin {\n  margin-bottom: 0px; }\n\n.uk-close {\n  position: absolute;\n  top: -22px;\n  left: 390px;\n  color: black;\n  background-color: white; }\n\n/* Media Queries for the modal part */\n\n@media screen and (max-width: 640px) {\n  .uk-modal-dialog {\n    height: 450px; }\n  .btn1 {\n    font-size: 20px;\n    max-width: 135px; }\n  .btn2 {\n    font-size: 20px;\n    max-width: 135px; }\n  .ipt1, .ipt2, .ipt3, .ipt4, .ipt5 {\n    max-width: 290px; }\n  .p1 {\n    max-width: 250px; }\n  .p3 {\n    max-width: 250px; }\n  .btn3 {\n    max-width: 290px; }\n  .btn4 {\n    max-width: 290px; }\n  .lnk1 {\n    position: relative;\n    left: 18px;\n    max-width: 150px; }\n  .lnk2 {\n    max-width: 136px;\n    position: relative;\n    right: 5px; }\n  .lnk3 {\n    position: relative;\n    left: 18px;\n    max-width: 150px; }\n  .lnk4 {\n    max-width: 136px;\n    position: relative;\n    right: 5px; }\n  .fb {\n    position: relative;\n    right: 8px;\n    bottom: 2px;\n    color: #3b5999;\n    background-color: white; }\n  .gl {\n    position: relative;\n    right: 5px;\n    bottom: 2px; }\n  .forgot {\n    position: absolute;\n    top: 205px;\n    left: 200px; } }\n\n@media screen and (max-width: 320px) {\n  .uk-modal-dialog {\n    height: 450px; }\n  .btn1 {\n    font-size: 20px;\n    max-width: 135px; }\n  .btn2 {\n    font-size: 20px;\n    max-width: 135px; }\n  .ipt1, .ipt2, .ipt3, .ipt4, .ipt5 {\n    max-width: 290px; }\n  .p1 {\n    max-width: 250px; }\n  .p3 {\n    max-width: 250px; }\n  .btn3 {\n    max-width: 290px; }\n  .btn4 {\n    max-width: 290px; }\n  .lnk1 {\n    position: relative;\n    left: 18px;\n    max-width: 150px; }\n  .lnk2 {\n    max-width: 136px;\n    position: relative;\n    right: 5px; }\n  .lnk3 {\n    position: relative;\n    left: 18px;\n    max-width: 150px; }\n  .lnk4 {\n    max-width: 136px;\n    position: relative;\n    right: 5px; }\n  .fb {\n    position: relative;\n    right: 8px;\n    bottom: 2px;\n    color: #3b5999;\n    background-color: white; }\n  .gl {\n    position: relative;\n    right: 5px;\n    bottom: 2px; }\n  .forgot {\n    position: absolute;\n    top: 205px;\n    left: 200px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcUHJvamVjdHNcXFJ1bW15XFxhYWFydW1teS1mcm9udGxpdmUvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsZ0JBQWUsRUFBQTs7QUFFakI7RUFDRSxrQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBRXpCO0VBRUUsYUFBYSxFQUFBOztBQUVmO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsYUFBYSxFQUFBOztBQUtmO0VBQ0UsbUJBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsWUFBVyxFQUFBOztBQUViO0VBQ0UsWUFBVztFQUNYLGFBQVksRUFBQTs7QUFFZDtFQUNFLFlBQVc7RUFDWCxhQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZSxFQUFBOztBQUVqQjtFQUNFLGdCQUFlLEVBQUE7O0FBR2pCO0VBQ0UsaUJBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQWdCLEVBQUE7O0FBSWxCO0VBQ0Usd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxnQkFBZSxFQUFBOztBQUVqQjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRztJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7RUFFcEI7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0VBRXBCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQSxFQUNuQjs7QUFFSjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsVUFBVSxFQUFBOztBQUVaO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTs7QUFFZDtFQUVFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUFzQixFQUFBOztBQUl4Qix1QkFBQTs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBaUI7RUFDakIsWUFBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWlCO0VBQ2pCLFNBQVE7RUFDUixpQkFBZ0I7RUFDaEIsWUFBVyxFQUFBOztBQUViO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLFNBQVE7RUFDUixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLGNBQWEsRUFBQTs7QUFFZjtFQUNFLGNBQWEsRUFBQTs7QUFFZjtFQUNFLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsVUFBUztFQUNULFVBQVM7RUFDVCxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLGNBQWEsRUFBQTs7QUFFZjtFQUNFLGNBQWEsRUFBQTs7QUFFZjtFQUNFLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsV0FBVTtFQUNWLGdCQUFlLEVBQUE7O0FBR2pCLHlCQUFBOztBQUNBO0VBQ0UseUJBQXdCLEVBQUE7O0FBRTFCO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsbUJBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsYUFBWTtFQUNaLFlBQVc7RUFDWCxtQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxrQkFBaUI7RUFDakIsZUFBYztFQUNkLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLFdBQVU7RUFDVixZQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWlCO0VBQ2pCLFFBQU87RUFDUCxVQUFTO0VBQ1QsWUFBVztFQUNYLGtCQUFpQixFQUFBOztBQUduQjtFQUNFLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1QsU0FBUTtFQUNSLFlBQVc7RUFDWCxrQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxrQkFBaUI7RUFDakIsVUFBUztFQUNULFNBQVE7RUFDUixZQUFXO0VBQ1gsa0JBQWlCLEVBQUE7O0FBRW5CO0VBQ0Usa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxTQUFRO0VBQ1IsWUFBVztFQUNYLGtCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsVUFBUztFQUNULFNBQVE7RUFDUixZQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxZQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUdiO0VBQ0UsWUFBVztFQUNYLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxVQUFTO0VBQ1Qsa0JBQWlCO0VBQ2pCLHlCQUF3QjtFQUN4QixZQUFXLEVBQUE7O0FBRWI7RUFDRSxZQUFXO0VBQ1gsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLHlCQUF3QjtFQUN4QixZQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBaUI7RUFDakIsV0FBVTtFQUNWLFdBQVU7RUFDVixjQUFhO0VBQ2IsdUJBQXNCLEVBQUE7O0FBRXhCO0VBQ0Usa0JBQWlCO0VBQ2pCLFdBQVU7RUFDVixXQUFVLEVBQUE7O0FBRVo7RUFDRSxlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLFNBQVE7RUFDUixXQUFVLEVBQUE7O0FBRVo7RUFDRSxrQkFBaUI7RUFDakIsVUFBUztFQUNULFdBQVUsRUFBQTs7QUFFWjtFQUNFLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1QsV0FBVTtFQUNWLFlBQVc7RUFDWCx1QkFBc0IsRUFBQTs7QUFHeEIscUNBQUE7O0FBQ0E7RUFDRTtJQUNFLGFBQVksRUFBQTtFQUVkO0lBQ0UsZUFBYztJQUNkLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxlQUFjO0lBQ2QsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZSxFQUFBO0VBRWpCO0lBQ0Usa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWU7SUFDZixrQkFBaUI7SUFDakIsVUFBUyxFQUFBO0VBRVg7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZTtJQUNmLGtCQUFpQjtJQUNqQixVQUFTLEVBQUE7RUFFWDtJQUNFLGtCQUFpQjtJQUNqQixVQUFTO0lBQ1QsV0FBVTtJQUNWLGNBQWE7SUFDYix1QkFBc0IsRUFBQTtFQUV4QjtJQUNFLGtCQUFpQjtJQUNqQixVQUFTO0lBQ1QsV0FBVSxFQUFBO0VBRVo7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULFdBQVUsRUFBQSxFQUNYOztBQUVIO0VBQ0U7SUFDRSxhQUFZLEVBQUE7RUFFZDtJQUNFLGVBQWM7SUFDZCxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZUFBYztJQUNkLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGtCQUFpQjtJQUNqQixVQUFTO0lBQ1QsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlO0lBQ2Ysa0JBQWlCO0lBQ2pCLFVBQVMsRUFBQTtFQUVYO0lBQ0Usa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWU7SUFDZixrQkFBaUI7SUFDakIsVUFBUyxFQUFBO0VBRVg7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULFdBQVU7SUFDVixjQUFhO0lBQ2IsdUJBQXNCLEVBQUE7RUFFeEI7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULFdBQVUsRUFBQTtFQUVaO0lBQ0Usa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxXQUFVLEVBQUEsRUFDWCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdoXG57XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogNDgycHg7XG4gIG1hcmdpbi1sZWZ0OiA2JTtcbn1cbi5pbWdobWx7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5jYXJkcmx7XG4gIG1hcmdpbi10b3A6IDIycHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cbi5kb3Qge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi50ZXh0IHtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiBHcmVlbjtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG59XG4uaHdjdHtcbiAgdGV4dC1hbGlnbjpsZWZ0O1xufVxuLmh3Y3Qye1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi5od2N0MntcbiAgdGV4dC1hbGlnbjpyaWdodDtcbn1cbi5jbTF7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xufVxuLmltZ3NcbntcbiAgaGVpZ2h0OiA5MDBweDtcbn1cbi5sb2hoM3tcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuLmxvaHB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5sb2hwMXtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmluMXtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW1nczF7XG4gIGhlaWdodDogNDIwcHg7XG59XG5cblxuXG4udWstbGlzdHtcbiAgdGV4dC1hbGlnbjpqdXN0aWZ5O1xufVxuLnVrLW1hcmdpbi1zbWFsbC1yaWdodHtcbiAgY29sb3I6Z3JlZW47XG59XG4uZmNfZnIsIC5zY19mciwgLnRjX2ZyLHtcbiAgd2lkdGg6MzQ1cHg7XG4gIGhlaWdodDozMjBweDtcbn1cbi5mY19zciwgLnNjX3NyLCAudGNfc3Ige1xuICB3aWR0aDozNDVweDtcbiAgaGVpZ2h0OjMyMHB4O1xufVxuXG4uc2VjX2hlYWR7XG4gIG1hcmdpbi10b3A6NTBweDtcbn1cbi50aHJkX2hlYWR7XG4gIG1hcmdpbi10b3A6NTBweDtcbn1cblxuLmlubmVyX2hlYWQxe1xuICBmb250LXdlaWdodDpib2xkO1xufVxuLmlubmVyX2hlYWQye1xuICBmb250LXdlaWdodDpib2xkO1xufVxuLmlubmVyX2hlYWQze1xuICBmb250LXdlaWdodDpib2xkO1xufVxuLmlubmVyX2hlYWQ0e1xuICBmb250LXdlaWdodDpib2xkO1xufVxuLmlubmVyX2hlYWQ1e1xuICBmb250LXdlaWdodDpib2xkO1xufVxuLmlubmVyX2hlYWQ2e1xuICBmb250LXdlaWdodDpib2xkO1xufVxuXG5cbi5jYXJkczF7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLmljczF7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5uY3N7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5wdG10e1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4ucHRtdGJ7XG4gIG1hcmdpbi10b3A6MzBweDtcbn1cbi5zd2MxIGF7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5ic2N7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4ud3VjdXNoe1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuXG59XG4ud3VjdXNoMXtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuLmJ0bnMxe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi5idG5zcDF7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnRvdXJic2kxe1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDI4MXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDc2OHB4KSB7XG4gICAuY29taDJ7XG4gICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICB9XG4gICAuY29taDF7XG4gICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICB9XG4gICAuY29taDN7XG4gICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICB9XG59XG4uZm9vdGhlYWR7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzUxQ0U7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5mb290aGVhZGl7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5mb290Ym9keXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDMjMzMTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm5qe1xuICBjb2xvcjogcmVkO1xufVxuLmZvb3Rib2R5Y29ue1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi50ZXh0dW5kZXI6aG92ZXJcbntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZvb3RlcmhlYWRpbmdze1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5mb290ZW5ke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxQzI3O1xufVxuLmZvb3RlbmRoe1xuICBjb2xvcjogd2hpdGU7XG59XG4uZm9vdHN0YXJ0aHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC1hbGlnbi1sYXN0OmNlbnRlcjtcbn1cblxuXG4vKiBzdHlsZXMgZm9yIHRoZSBuYXYgKi9cbi5uYmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOlx0IzNDQjM3MTtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGJvdHRvbToyMHB4O1xufVxuLmxvZyBpbWd7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0b3A6MTBweDtcbiAgbWFyZ2luLWxlZnQ6MjVweDtcbiAgaGVpZ2h0Ojg1cHg7XG59XG4uZnN0YnRue1xuICBtaW4taGVpZ2h0OjUwcHg7XG4gIG1hcmdpbjoxMHB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgdG9wOjM1cHg7XG4gIGxlZnQ6LTE4MHB4O1xuICBib3JkZXItcmFkaXVzOjVweDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgYmFja2dyb3VuZDojZmZmZmZmO1xuICBib3JkZXI6MXB4IHNvbGlkICMwMDAwMDA7XG4gIGNvbG9yOiMwMDAwMDA7XG59XG4uZnN0YnRuOmhvdmVye1xuICBjb2xvcjojMDAwMDAwO1xufVxuLnNuZGJ0bntcbiAgbWluLWhlaWdodDo1MHB4O1xuICBtYXgtd2lkdGg6MTE1cHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0b3A6LTI1cHg7XG4gIGxlZnQ6NzBweDtcbiAgbWFyZ2luLXJpZ2h0OjQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xuICBmb250LXdlaWdodDpib2xkO1xuICBiYWNrZ3JvdW5kOiNmZmZmZmY7XG4gIGJvcmRlcjoycHggc29saWQgIzAwMDAwMDtcbiAgY29sb3I6IzAwMDAwMDtcbn1cbi5zbmRidG46aG92ZXJ7XG4gIGNvbG9yOiMwMDAwMDA7XG59XG4ubGNre1xuICBwYWRkaW5nLXJpZ2h0OjVweDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGJvdHRvbTowcHg7XG4gIGNvbG9yOmRhcmtncmVlbjtcbn1cblxuLyogc3R5bGVzIGZvciB0aGUgbW9kYWwgKi9cbiNtb2RhbC1zZWN0aW9uc3tcbiAgYmFja2dyb3VuZC1jb2xvcjojM2I1OTk5O1xufVxuLnVrLW1vZGFsLWhlYWRlcntcbiAgaGVpZ2h0OjYwcHg7XG4gIHBhZGRpbmctdG9wOjIwcHg7XG4gIHBhZGRpbmctYm90dG9tOjEycHg7XG4gIGJvcmRlci1yYWRpdXM6MTBweDtcbn1cblxuLnVrLW1vZGFsLWRpYWxvZ3tcbiAgaGVpZ2h0OjQyMHB4O1xuICB3aWR0aDo0MjBweDtcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xufVxuLmJ0bjF7XG4gIHBhZGRpbmctbGVmdDoyMHB4O1xuICBmb250LXNpemU6MzBweDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgYm9yZGVyLXJhZGl1czo1cHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBib3R0b206NHB4O1xuICB3aWR0aDozNjBweDtcbiAgaGVpZ2h0OjYwcHg7XG59XG4uYnRuM3tcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHRvcDo1cHg7XG4gIGxlZnQ6MjBweDtcbiAgd2lkdGg6MzgwcHg7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xufVxuXG4uaXB0MXtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGxlZnQ6MjBweDtcbiAgdG9wOi01cHg7XG4gIHdpZHRoOjM4MHB4O1xuICBib3JkZXItcmFkaXVzOjVweDtcbn1cbi5pcHQye1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgbGVmdDoyMHB4O1xuICB0b3A6MTJweDtcbiAgd2lkdGg6MzgwcHg7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xufVxuLmlwdDN7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBsZWZ0OjIwcHg7XG4gIHRvcDoyOHB4O1xuICB3aWR0aDozODBweDtcbiAgYm9yZGVyLXJhZGl1czo1cHg7XG59XG5cbi5wMXtcbiAgZm9udC1zaXplOjEycHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBsZWZ0OjIwcHg7XG4gIHRvcDoxNXB4O1xuICB3aWR0aDozODBweDtcbn1cbi5wMntcbiAgZm9udC1zaXplOjEycHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBsZWZ0OjIwcHg7XG4gIGJvdHRvbToxOHB4O1xuICB3aWR0aDozODBweDtcbn1cblxuLmxuazF7XG4gIHdpZHRoOjE4MHB4O1xuICBtYXJnaW4tdG9wOjhweDtcbiAgbWFyZ2luLXJpZ2h0OjMwcHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBib3R0b206NDBweDtcbiAgbGVmdDoyMHB4O1xuICBib3JkZXItcmFkaXVzOjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjojM2I1OTk5O1xuICBjb2xvcjp3aGl0ZTtcbn1cbi5sbmsye1xuICB3aWR0aDoxODhweDtcbiAgbWFyZ2luLXRvcDo4cHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBib3R0b206NDBweDtcbiAgYm9yZGVyLXJhZGl1czo1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6I2RkNGIzOTtcbiAgY29sb3I6d2hpdGU7XG59XG5cbi5mYntcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHJpZ2h0OjE2cHg7XG4gIGJvdHRvbToycHg7XG4gIGNvbG9yOiMzYjU5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG59XG4uZ2x7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICByaWdodDoxMnB4O1xuICBib3R0b206MnB4O1xufVxuLmZvcmdvdHtcbiAgZm9udC1zaXplOjE0cHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0b3A6MjVweDtcbiAgbGVmdDoyOTBweDtcbn1cbi5sY2sye1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgcmlnaHQ6NXB4O1xuICBib3R0b206M3B4O1xufVxuLnVrLW1hcmdpbntcbiAgbWFyZ2luLWJvdHRvbTowcHg7XG59XG4udWstY2xvc2V7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6LTIycHg7XG4gIGxlZnQ6MzkwcHg7XG4gIGNvbG9yOmJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xufVxuXG4vKiBNZWRpYSBRdWVyaWVzIGZvciB0aGUgbW9kYWwgcGFydCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NDBweCl7XG4gIC51ay1tb2RhbC1kaWFsb2d7XG4gICAgaGVpZ2h0OjQ1MHB4O1xuICB9XG4gIC5idG4xe1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIG1heC13aWR0aDoxMzVweDtcbiAgfVxuICAuYnRuMntcbiAgICBmb250LXNpemU6MjBweDtcbiAgICBtYXgtd2lkdGg6MTM1cHg7XG4gIH1cbiAgLmlwdDEsIC5pcHQyLCAuaXB0MywgLmlwdDQsIC5pcHQ1e1xuICAgIG1heC13aWR0aDoyOTBweDtcbiAgfVxuICAucDF7XG4gICAgbWF4LXdpZHRoOjI1MHB4O1xuICB9XG4gIC5wM3tcbiAgICBtYXgtd2lkdGg6MjUwcHg7XG4gIH1cbiAgLmJ0bjN7XG4gICAgbWF4LXdpZHRoOjI5MHB4O1xuICB9XG4gIC5idG40e1xuICAgIG1heC13aWR0aDoyOTBweDtcbiAgfVxuICAubG5rMXtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBsZWZ0OjE4cHg7XG4gICAgbWF4LXdpZHRoOjE1MHB4O1xuICB9XG4gIC5sbmsye1xuICAgIG1heC13aWR0aDoxMzZweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICByaWdodDo1cHg7XG4gIH1cbiAgLmxuazN7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgbGVmdDoxOHB4O1xuICAgIG1heC13aWR0aDoxNTBweDtcbiAgfVxuICAubG5rNHtcbiAgICBtYXgtd2lkdGg6MTM2cHg7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgcmlnaHQ6NXB4O1xuICB9XG4gIC5mYntcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICByaWdodDo4cHg7XG4gICAgYm90dG9tOjJweDtcbiAgICBjb2xvcjojM2I1OTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIH1cbiAgLmdse1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHJpZ2h0OjVweDtcbiAgICBib3R0b206MnB4O1xuICB9XG4gIC5mb3Jnb3R7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjIwNXB4O1xuICAgIGxlZnQ6MjAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpe1xuICAudWstbW9kYWwtZGlhbG9ne1xuICAgIGhlaWdodDo0NTBweDtcbiAgfVxuICAuYnRuMXtcbiAgICBmb250LXNpemU6MjBweDtcbiAgICBtYXgtd2lkdGg6MTM1cHg7XG4gIH1cbiAgLmJ0bjJ7XG4gICAgZm9udC1zaXplOjIwcHg7XG4gICAgbWF4LXdpZHRoOjEzNXB4O1xuICB9XG4gIC5pcHQxLCAuaXB0MiwgLmlwdDMsIC5pcHQ0LCAuaXB0NXtcbiAgICBtYXgtd2lkdGg6MjkwcHg7XG4gIH1cbiAgLnAxe1xuICAgIG1heC13aWR0aDoyNTBweDtcbiAgfVxuICAucDN7XG4gICAgbWF4LXdpZHRoOjI1MHB4O1xuICB9XG4gIC5idG4ze1xuICAgIG1heC13aWR0aDoyOTBweDtcbiAgfVxuICAuYnRuNHtcbiAgICBtYXgtd2lkdGg6MjkwcHg7XG4gIH1cbiAgLmxuazF7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgbGVmdDoxOHB4O1xuICAgIG1heC13aWR0aDoxNTBweDtcbiAgfVxuICAubG5rMntcbiAgICBtYXgtd2lkdGg6MTM2cHg7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgcmlnaHQ6NXB4O1xuICB9XG4gIC5sbmsze1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGxlZnQ6MThweDtcbiAgICBtYXgtd2lkdGg6MTUwcHg7XG4gIH1cbiAgLmxuazR7XG4gICAgbWF4LXdpZHRoOjEzNnB4O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHJpZ2h0OjVweDtcbiAgfVxuICAuZmJ7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgcmlnaHQ6OHB4O1xuICAgIGJvdHRvbToycHg7XG4gICAgY29sb3I6IzNiNTk5OTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICB9XG4gIC5nbHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICByaWdodDo1cHg7XG4gICAgYm90dG9tOjJweDtcbiAgfVxuICAuZm9yZ290e1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDoyMDVweDtcbiAgICBsZWZ0OjIwMHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(validateService, authService, flashMessage, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            contact: this.contact,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show(UIkit.notification({ message: 'Please fill in all fields', status: 'danger', pos: 'top-right', timeout: 4000 }));
            return false;
        }
        //Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(UIkit.notification({ message: 'You are now registered and can now login', status: 'success', pos: 'top-right', timeout: 4000 }));
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(UIkit.notification({ message: 'Something went wrong', status: 'danger', pos: 'top-right', timeout: 4000 }));
                _this.router.navigate(['/']);
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/leftbtn/leftbtn.component.html":
/*!************************************************!*\
  !*** ./src/app/leftbtn/leftbtn.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-grid backcard1\">\n    <div class=\"uk-width-1-5 buttonleft\">\n      <div uk-switcher=\"animation: uk-animation-fade; toggle: > *\">\n        <button class=\"uk-button uk-button-default  uk-margin-left uk-margin-top\" style=\"width:92%;\">Cash games</button><br>\n        <button class=\"uk-button uk-button-default  uk-margin-left uk-margin-top\" style=\"width:92%;\">Tournaments</button><br>\n        <button class=\"uk-button uk-button-default  uk-margin-left uk-margin-top\" style=\"width:92%;\">Practice</button><br>\n        <button class=\"uk-button uk-button-default  btng uk-margin-top\" style=\"width:72%;\">Game 1</button><br>\n        <button class=\"uk-button uk-button-default  btng uk-margin-top\" style=\"width:72%;\">Game 2</button><br>\n        <button class=\"uk-button uk-button-default  btng uk-margin-top\" style=\"width:72%;\">Game 3</button><br>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/leftbtn/leftbtn.component.scss":
/*!************************************************!*\
  !*** ./src/app/leftbtn/leftbtn.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonleft button {\n  color: white;\n  font-size: 20px;\n  border-radius: 5px;\n  color: white;\n  font-size: 20px;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVmdGJ0bi9DOlxcUHJvamVjdHNcXFJ1bW15XFxhYWFydW1teS1mcm9udGxpdmUvc3JjXFxhcHBcXGxlZnRidG5cXGxlZnRidG4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGVmdGJ0bi9sZWZ0YnRuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbmxlZnQgYnV0dG9ue1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/leftbtn/leftbtn.component.ts":
/*!**********************************************!*\
  !*** ./src/app/leftbtn/leftbtn.component.ts ***!
  \**********************************************/
/*! exports provided: LeftbtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftbtnComponent", function() { return LeftbtnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeftbtnComponent = /** @class */ (function () {
    function LeftbtnComponent() {
    }
    LeftbtnComponent.prototype.ngOnInit = function () {
    };
    LeftbtnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leftbtn',
            template: __webpack_require__(/*! ./leftbtn.component.html */ "./src/app/leftbtn/leftbtn.component.html"),
            styles: [__webpack_require__(/*! ./leftbtn.component.scss */ "./src/app/leftbtn/leftbtn.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeftbtnComponent);
    return LeftbtnComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n<div class=\"uk-card uk-card-default uk-width-1-2@m uk-width-1-1@s log\">\n  <ul class=\"uk-modal-header\" uk-switcher=\"animation: uk-animation-fade; toggle: > *\">\n    <button class=\"uk-button uk-button-default btn2\" type=\"button\">Login</button>\n  </ul>\n  <ul class=\"uk-modal-body uk-switcher uk-margin\">\n    <li>\n      <form (submit)=\"onLoginSubmit()\">\n        <fieldset class=\"uk-fieldset\">\n          <div class=\"uk-margin\">\n            <input class=\"uk-input ipt4\" type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Your username/mobile\">\n            <input class=\"uk-input ipt5\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Secure password\">\n            <a class=\"forgot\" routerLink=\"/forgot-password\">Forgot Password</a>\n            <p class=\"p3\">By registering you are agreeing to our Terms & Conditions</p>\n            <button class=\"uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom btn4\" type=\"submit\"><span class=\"lck1\" uk-icon=\"lock\"></span>Login</button>\n            <p class=\"p4\">Or login in one click</p>\n            <p uk-margin>\n              <a class=\"uk-button uk-button-default lnk3\" href=\"#\"><span class=\"fb\" uk-icon=\"facebook\"></span>Facebook</a>\n              <a class=\"uk-button uk-button-default lnk4\" href=\"#\"><span class=\"gl\" uk-icon=\"google\"></span>Google</a>\n            </p>\n          </div>\n        </fieldset>\n      </form>\n    </li>\n  </ul>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn2 {\n  font-size: 30px;\n  font-weight: bold;\n  border-radius: 5px;\n  position: relative;\n  bottom: 4px;\n  width: 360px;\n  height: 60px; }\n\n.btn4 {\n  position: relative;\n  top: 5px;\n  left: 20px;\n  width: 380px;\n  border-radius: 5px; }\n\n.ipt4 {\n  position: relative;\n  left: 20px;\n  top: -4px;\n  width: 380px;\n  border-radius: 5px; }\n\n.ipt5 {\n  position: relative;\n  left: 20px;\n  top: 12px;\n  width: 380px;\n  border-radius: 5px; }\n\n.p3 {\n  font-size: 12px;\n  position: relative;\n  left: 20px;\n  top: 10px;\n  width: 380px; }\n\n.p4 {\n  font-size: 12px;\n  position: relative;\n  left: 20px;\n  bottom: 12px;\n  width: 380px; }\n\n.lnk3 {\n  width: 180px;\n  margin-top: 25px;\n  margin-right: 30px;\n  position: relative;\n  bottom: 40px;\n  left: 20px;\n  border-radius: 5px;\n  background-color: #3b5999;\n  color: white; }\n\n.lnk4 {\n  width: 188px;\n  margin-top: 25px;\n  position: relative;\n  bottom: 40px;\n  border-radius: 5px;\n  background-color: #dd4b39;\n  color: white; }\n\n.fb {\n  position: relative;\n  right: 16px;\n  bottom: 2px;\n  color: #3b5999;\n  background-color: white; }\n\n.gl {\n  position: relative;\n  right: 12px;\n  bottom: 2px; }\n\n.forgot {\n  font-size: 14px;\n  position: relative;\n  top: 25px;\n  left: 290px; }\n\n.lck1 {\n  position: relative;\n  right: 5px;\n  bottom: 3px; }\n\n.uk-margin {\n  margin-bottom: 0px; }\n\n.login {\n  background-color: #3b5999;\n  padding-right: 5px;\n  padding-top: 5px;\n  padding-bottom: 80px; }\n\n.log {\n  border-radius: 10px;\n  position: relative;\n  width: 420px;\n  height: 440px;\n  top: 40px;\n  left: 360px; }\n\n.uk-modal-header {\n  height: 60px;\n  padding-top: 20px;\n  padding-bottom: 12px;\n  border-radius: 10px; }\n\n/* Media Queries for the modal part */\n\n@media screen and (max-width: 640px) {\n  .btn2 {\n    font-size: 20px;\n    max-width: 135px; }\n  .ipt4, .ipt5 {\n    max-width: 290px; }\n  .p3 {\n    max-width: 250px; }\n  .btn4 {\n    max-width: 290px; }\n  .lnk3 {\n    position: relative;\n    left: 18px;\n    max-width: 150px; }\n  .lnk4 {\n    max-width: 136px;\n    position: relative;\n    right: 5px; }\n  .fb {\n    position: relative;\n    right: 8px;\n    bottom: 2px;\n    color: #3b5999;\n    background-color: white; }\n  .gl {\n    position: relative;\n    right: 5px;\n    bottom: 2px; }\n  .forgot {\n    position: absolute;\n    top: 205px;\n    left: 200px; }\n  .login {\n    background-color: #3b5999;\n    padding-right: 5px;\n    padding-top: 5px;\n    padding-bottom: 80px; }\n  .log {\n    position: relative;\n    width: 420px;\n    height: 440px;\n    top: 40px;\n    left: 360px; } }\n\n@media screen and (max-width: 320px) {\n  .btn2 {\n    font-size: 20px;\n    max-width: 135px; }\n  .ipt4, .ipt5 {\n    max-width: 290px; }\n  .p3 {\n    max-width: 250px; }\n  .btn4 {\n    max-width: 290px; }\n  .lnk3 {\n    position: relative;\n    left: 18px;\n    max-width: 150px; }\n  .lnk4 {\n    max-width: 136px;\n    position: relative;\n    right: 5px; }\n  .fb {\n    position: relative;\n    right: 8px;\n    bottom: 2px;\n    color: #3b5999;\n    background-color: white; }\n  .gl {\n    position: relative;\n    right: 5px;\n    bottom: 2px; }\n  .forgot {\n    position: absolute;\n    top: 205px;\n    left: 200px; }\n  .login {\n    background-color: #3b5999;\n    padding-right: 5px;\n    padding-top: 5px;\n    padding-bottom: 80px; }\n  .log {\n    position: relative;\n    width: 420px;\n    height: 440px;\n    top: 40px;\n    left: 300px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFByb2plY3RzXFxSdW1teVxcYWFhcnVtbXktZnJvbnRsaXZlL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsV0FBVTtFQUNWLFlBQVc7RUFDWCxZQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBaUI7RUFDakIsUUFBTztFQUNQLFVBQVM7RUFDVCxZQUFXO0VBQ1gsa0JBQWlCLEVBQUE7O0FBRW5CO0VBQ0Usa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxTQUFRO0VBQ1IsWUFBVztFQUNYLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1QsU0FBUTtFQUNSLFlBQVc7RUFDWCxrQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxTQUFRO0VBQ1IsWUFBVyxFQUFBOztBQUViO0VBQ0UsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1QsWUFBVztFQUNYLFlBQVcsRUFBQTs7QUFFYjtFQUNFLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsWUFBVztFQUNYLFVBQVM7RUFDVCxrQkFBaUI7RUFDakIseUJBQXdCO0VBQ3hCLFlBQVcsRUFBQTs7QUFFYjtFQUNFLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLHlCQUF3QjtFQUN4QixZQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBaUI7RUFDakIsV0FBVTtFQUNWLFdBQVU7RUFDVixjQUFhO0VBQ2IsdUJBQXNCLEVBQUE7O0FBRXhCO0VBQ0Usa0JBQWlCO0VBQ2pCLFdBQVU7RUFDVixXQUFVLEVBQUE7O0FBRVo7RUFDRSxlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLFNBQVE7RUFDUixXQUFVLEVBQUE7O0FBRVo7RUFDRSxrQkFBaUI7RUFDakIsVUFBUztFQUNULFdBQVUsRUFBQTs7QUFFWjtFQUNFLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLHlCQUF3QjtFQUN4QixrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixvQkFDRixFQUFBOztBQUNBO0VBQ0UsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsYUFBWTtFQUNaLFNBQVE7RUFDUixXQUFVLEVBQUE7O0FBRVo7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQixtQkFBa0IsRUFBQTs7QUFHcEIscUNBQUE7O0FBQ0E7RUFDRTtJQUNFLGVBQWM7SUFDZCxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZSxFQUFBO0VBRWpCO0lBQ0Usa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWU7SUFDZixrQkFBaUI7SUFDakIsVUFBUyxFQUFBO0VBRVg7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULFdBQVU7SUFDVixjQUFhO0lBQ2IsdUJBQXNCLEVBQUE7RUFFeEI7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULFdBQVUsRUFBQTtFQUVaO0lBQ0Usa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxXQUFVLEVBQUE7RUFFWjtJQUNFLHlCQUF3QjtJQUN4QixrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZixvQkFDRixFQUFBO0VBQ0E7SUFDRSxrQkFBaUI7SUFDakIsWUFBVztJQUNYLGFBQVk7SUFDWixTQUFRO0lBQ1IsV0FBVSxFQUFBLEVBQ1g7O0FBRUg7RUFDRTtJQUNFLGVBQWM7SUFDZCxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZSxFQUFBO0VBRWpCO0lBQ0Usa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWU7SUFDZixrQkFBaUI7SUFDakIsVUFBUyxFQUFBO0VBRVg7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULFdBQVU7SUFDVixjQUFhO0lBQ2IsdUJBQXNCLEVBQUE7RUFFeEI7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULFdBQVUsRUFBQTtFQUVaO0lBQ0Usa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxXQUFVLEVBQUE7RUFFWjtJQUNFLHlCQUF3QjtJQUN4QixrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZixvQkFDRixFQUFBO0VBQ0E7SUFDRSxrQkFBaUI7SUFDakIsWUFBVztJQUNYLGFBQVk7SUFDWixTQUFRO0lBQ1IsV0FBVSxFQUFBLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ye1xyXG4gIGZvbnQtc2l6ZTozMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgYm90dG9tOjRweDtcclxuICB3aWR0aDozNjBweDtcclxuICBoZWlnaHQ6NjBweDtcclxufVxyXG4uYnRuNHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB0b3A6NXB4O1xyXG4gIGxlZnQ6MjBweDtcclxuICB3aWR0aDozODBweDtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxufVxyXG4uaXB0NHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBsZWZ0OjIwcHg7XHJcbiAgdG9wOi00cHg7XHJcbiAgd2lkdGg6MzgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbn1cclxuLmlwdDV7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgbGVmdDoyMHB4O1xyXG4gIHRvcDoxMnB4O1xyXG4gIHdpZHRoOjM4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xyXG59XHJcbi5wM3tcclxuICBmb250LXNpemU6MTJweDtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBsZWZ0OjIwcHg7XHJcbiAgdG9wOjEwcHg7XHJcbiAgd2lkdGg6MzgwcHg7XHJcbn1cclxuLnA0e1xyXG4gIGZvbnQtc2l6ZToxMnB4O1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGxlZnQ6MjBweDtcclxuICBib3R0b206MTJweDtcclxuICB3aWR0aDozODBweDtcclxufVxyXG4ubG5rM3tcclxuICB3aWR0aDoxODBweDtcclxuICBtYXJnaW4tdG9wOjI1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OjMwcHg7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgYm90dG9tOjQwcHg7XHJcbiAgbGVmdDoyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzNiNTk5OTtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG4ubG5rNHtcclxuICB3aWR0aDoxODhweDtcclxuICBtYXJnaW4tdG9wOjI1cHg7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgYm90dG9tOjQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZGQ0YjM5O1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbi5mYntcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICByaWdodDoxNnB4O1xyXG4gIGJvdHRvbToycHg7XHJcbiAgY29sb3I6IzNiNTk5OTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG59XHJcbi5nbHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICByaWdodDoxMnB4O1xyXG4gIGJvdHRvbToycHg7XHJcbn1cclxuLmZvcmdvdHtcclxuICBmb250LXNpemU6MTRweDtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB0b3A6MjVweDtcclxuICBsZWZ0OjI5MHB4O1xyXG59XHJcbi5sY2sxe1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHJpZ2h0OjVweDtcclxuICBib3R0b206M3B4O1xyXG59XHJcbi51ay1tYXJnaW57XHJcbiAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbn1cclxuLmxvZ2lue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzNiNTk5OTtcclxuICBwYWRkaW5nLXJpZ2h0OjVweDtcclxuICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206ODBweFxyXG59XHJcbi5sb2d7XHJcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHdpZHRoOjQyMHB4O1xyXG4gIGhlaWdodDo0NDBweDtcclxuICB0b3A6NDBweDtcclxuICBsZWZ0OjM2MHB4O1xyXG59XHJcbi51ay1tb2RhbC1oZWFkZXJ7XHJcbiAgaGVpZ2h0OjYwcHg7XHJcbiAgcGFkZGluZy10b3A6MjBweDtcclxuICBwYWRkaW5nLWJvdHRvbToxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxufVxyXG5cclxuLyogTWVkaWEgUXVlcmllcyBmb3IgdGhlIG1vZGFsIHBhcnQgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NDBweCl7XHJcbiAgLmJ0bjJ7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIG1heC13aWR0aDoxMzVweDtcclxuICB9XHJcbiAgLmlwdDQsIC5pcHQ1e1xyXG4gICAgbWF4LXdpZHRoOjI5MHB4O1xyXG4gIH1cclxuICAucDN7XHJcbiAgICBtYXgtd2lkdGg6MjUwcHg7XHJcbiAgfVxyXG4gIC5idG40e1xyXG4gICAgbWF4LXdpZHRoOjI5MHB4O1xyXG4gIH1cclxuICAubG5rM3tcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgbGVmdDoxOHB4O1xyXG4gICAgbWF4LXdpZHRoOjE1MHB4O1xyXG4gIH1cclxuICAubG5rNHtcclxuICAgIG1heC13aWR0aDoxMzZweDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6NXB4O1xyXG4gIH1cclxuICAuZmJ7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHJpZ2h0OjhweDtcclxuICAgIGJvdHRvbToycHg7XHJcbiAgICBjb2xvcjojM2I1OTk5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgLmdse1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICByaWdodDo1cHg7XHJcbiAgICBib3R0b206MnB4O1xyXG4gIH1cclxuICAuZm9yZ290e1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6MjA1cHg7XHJcbiAgICBsZWZ0OjIwMHB4O1xyXG4gIH1cclxuICAubG9naW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjU5OTk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjVweDtcclxuICAgIHBhZGRpbmctdG9wOjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjgwcHhcclxuICB9XHJcbiAgLmxvZ3tcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgd2lkdGg6NDIwcHg7XHJcbiAgICBoZWlnaHQ6NDQwcHg7XHJcbiAgICB0b3A6NDBweDtcclxuICAgIGxlZnQ6MzYwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpe1xyXG4gIC5idG4ye1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICBtYXgtd2lkdGg6MTM1cHg7XHJcbiAgfVxyXG4gIC5pcHQ0LCAuaXB0NXtcclxuICAgIG1heC13aWR0aDoyOTBweDtcclxuICB9XHJcbiAgLnAze1xyXG4gICAgbWF4LXdpZHRoOjI1MHB4O1xyXG4gIH1cclxuICAuYnRuNHtcclxuICAgIG1heC13aWR0aDoyOTBweDtcclxuICB9XHJcbiAgLmxuazN7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGxlZnQ6MThweDtcclxuICAgIG1heC13aWR0aDoxNTBweDtcclxuICB9XHJcbiAgLmxuazR7XHJcbiAgICBtYXgtd2lkdGg6MTM2cHg7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHJpZ2h0OjVweDtcclxuICB9XHJcbiAgLmZie1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICByaWdodDo4cHg7XHJcbiAgICBib3R0b206MnB4O1xyXG4gICAgY29sb3I6IzNiNTk5OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIC5nbHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6NXB4O1xyXG4gICAgYm90dG9tOjJweDtcclxuICB9XHJcbiAgLmZvcmdvdHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjIwNXB4O1xyXG4gICAgbGVmdDoyMDBweDtcclxuICB9XHJcbiAgLmxvZ2lue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojM2I1OTk5O1xyXG4gICAgcGFkZGluZy1yaWdodDo1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTo4MHB4XHJcbiAgfVxyXG4gIC5sb2d7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHdpZHRoOjQyMHB4O1xyXG4gICAgaGVpZ2h0OjQ0MHB4O1xyXG4gICAgdG9wOjQwcHg7XHJcbiAgICBsZWZ0OjMwMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show(UIkit.notification({ message: 'You are now logged in', status: 'success', pos: 'top-right', timeout: 4000 }));
                _this.router.navigate(['/lobby']);
            }
            else {
                _this.flashMessage.show(UIkit.notification({ message: data.msg, status: 'danger', pos: 'top-right', timeout: 4000 }));
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/middlepart/middlepart.component.html":
/*!******************************************************!*\
  !*** ./src/app/middlepart/middlepart.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <app-nav></app-nav>\n  <app-leftbtn></app-leftbtn>\n  <app-btndownbanner></app-btndownbanner>\n</section>\n<div class=\"backcard1\">\n   <div class=\"uk-grid\" style=\"margin-left:15px;\">\n     <div class=\"uk-card uk-card-default uk-card-hover uk-card-body uk-width-1-6 card1mid\" style=\"width:22%; margin:30px 10px 10px 25px; height:360px; border-radius:15px;\">\n       <div class=\"uk-card-media-top\">\n         <img src=\"assets/img/card1.jpg\" alt=\"image of game\">\n       </div>\n       <div class=\"uk-card-body\">\n         <div class=\"uk-flex uk-flex-center buttonselect\"><a class=\"uk-button uk-button-primary\" routerLink=\"/game\" style=\"border-radius:10px;\">Select</a></div>\n       </div>\n     </div>\n     <div class=\"uk-card uk-card-default uk-card-hover uk-card-body uk-width-1-6 card1mid\" style=\"width:22%; margin:30px 10px 10px 9px; height:360px; border-radius:15px;\">\n       <div class=\"uk-card-media-top\">\n         <img src=\"assets/img/card2.jpg\" alt=\"image of game\">\n       </div>\n       <div class=\"uk-card-body\">\n         <div class=\"uk-flex uk-flex-center buttonselect\"><a class=\"uk-button uk-button-primary\" routerLink=\"/game\" style=\"border-radius:10px;\">Select</a></div>\n       </div>\n     </div>\n     <div class=\"uk-card uk-card-default uk-card-hover uk-card-body uk-width-1-6 card1mid\" style=\"width:22%; margin:30px 10px 10px 9px; height:360px; border-radius:15px\">\n       <div class=\"uk-card-media-top\">\n         <img src=\"assets/img/deal.jpg\" alt=\"image of game\">\n       </div>\n       <div class=\"uk-card-body\">\n         <div class=\"uk-flex uk-flex-center buttonselect\"><a class=\"uk-button uk-button-primary\" routerLink=\"/game\" style=\"border-radius:10px;\">Select</a></div>\n       </div>\n     </div>\n     <div class=\"uk-card uk-card-default uk-card-hover uk-card-body uk-width-1-6 card1mid\" style=\"width:22%; margin:30px 10px 10px 9px; height:360px; border-radius:15px;\">\n       <div class=\"uk-card-media-top\">\n         <img src=\"assets/img/point.jpg\" alt=\"image of game\">\n       </div>\n       <div class=\"uk-card-body\">\n         <div class=\"uk-flex uk-flex-center buttonselect\"><a class=\"uk-button uk-button-primary\" routerLink=\"/game\" style=\"border-radius:10px;\">Select</a></div>\n       </div>\n     </div>\n   </div>\n </div>\n"

/***/ }),

/***/ "./src/app/middlepart/middlepart.component.scss":
/*!******************************************************!*\
  !*** ./src/app/middlepart/middlepart.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backcard1 {\n  background-size: cover;\n  margin-left: 19.5%;\n  border: 1px solid lime;\n  position: absolute;\n  top: 15%;\n  width: 78vw;\n  height: 68vh; }\n\n.buttonselect a {\n  background-color: green; }\n\n.buttonselect a:hover {\n  background-color: green; }\n\n.card1mid {\n  background-color: #FFF1D6; }\n\n.card1mid:hover {\n  background-color: #FFF1D6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlkZGxlcGFydC9DOlxcUHJvamVjdHNcXFJ1bW15XFxhYWFydW1teS1mcm9udGxpdmUvc3JjXFxhcHBcXG1pZGRsZXBhcnRcXG1pZGRsZXBhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBaUI7RUFDakIsUUFBTztFQUNQLFdBQVU7RUFDVixZQUFXLEVBQUE7O0FBR2I7RUFDRSx1QkFBc0IsRUFBQTs7QUFFeEI7RUFDRSx1QkFBc0IsRUFBQTs7QUFFeEI7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21pZGRsZXBhcnQvbWlkZGxlcGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrY2FyZDF7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1hcmdpbi1sZWZ0OjE5LjUlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaW1lO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOjE1JTtcbiAgd2lkdGg6Nzh2dztcbiAgaGVpZ2h0OjY4dmg7XG59XG5cbi5idXR0b25zZWxlY3QgYXtcbiAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcbn1cbi5idXR0b25zZWxlY3QgYTpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcbn1cbi5jYXJkMW1pZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjFENjtcbn1cblxuLmNhcmQxbWlkOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGMUQ2O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/middlepart/middlepart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/middlepart/middlepart.component.ts ***!
  \****************************************************/
/*! exports provided: MiddlepartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddlepartComponent", function() { return MiddlepartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MiddlepartComponent = /** @class */ (function () {
    function MiddlepartComponent() {
    }
    MiddlepartComponent.prototype.ngOnInit = function () {
    };
    MiddlepartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-middlepart',
            template: __webpack_require__(/*! ./middlepart.component.html */ "./src/app/middlepart/middlepart.component.html"),
            styles: [__webpack_require__(/*! ./middlepart.component.scss */ "./src/app/middlepart/middlepart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MiddlepartComponent);
    return MiddlepartComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n<div class=\"navbarcard\">\n    <nav class=\"uk-navbar-container uk-navbar navh\" style=\"background-color:#3B5902;\">\n      <div class=\"uk-navbar-left\">\n        <li><a routerLink=\"/home\" class=\"uk-navbar-item uk-logo navlogo\" style=\"margin-left:555px;\"><img src=\"assets/img/logo.png\" uk-img></a></li>\n      </div>\n      <div class=\"uk-navbar-right\">\n\n        <ul class=\"uk-navbar-nav\">\n          <li class=\"profilenav\">\n            <div>\n              <div class=\"profile\" uk-toggle=\"target: #offcanvas-overlay\">\n                <span class=\"headnav  uk-position-left uk-margin-left\" style=\"color:white;\">Profile Name</span>\n                <div class=\"uk-navbar-subtitle uk-position-left uk-margin-left\" style=\"color:white; top:40px;\">Welcome {{user.username}}</div>\n              </div>\n            </div>\n          </li>\n          <li class=\"cashnav\">\n            <div>\n              <span class=\"headnav\" style=\"color:white;\">Cash</span>\n              <div class=\"uk-navbar-subtitle\" style=\"color:white;\">0</div>\n            </div>\n          </li>\n          <li class=\"addnav\">\n            <button class=\"uk-button uk-button-default\" href=\"#modal-sections\" uk-toggle><i class=\"fas fa-plus-circle\"></i><span class=\"headnav add\" style=\"color:white;\">ADD CASH</span></button>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n\n  <div id=\"modal-sections\" uk-modal>\n    <div class=\"uk-modal-dialog ug  modaladd\">\n      <button class=\"uk-modal-close-default closebtn\" type=\"button\" uk-close></button>\n      <div class=\"uk-modal-header ug\">\n        <h2 class=\"uk-modal-title\">Cash Account</h2>\n      </div>\n      <div class=\"uk-modal-body\" uk-overflow-auto>\n          <ul uk-accordion>\n            <li>\n              <a class=\"uk-accordion-title\" href=\"#\">Balance</a>\n              <div class=\"uk-accordion-content\">\n                <span class=\"uk-float-left\">Deposit</span>\n                <span class=\"ulc\">Withdrawable</span>\n                <span class=\"uk-float-right\">Total</span><br>\n                <span class=\"uk-float-left\">&#x20b9;0</span>\n                <span class=\"ulcs\">&#x20b9;0</span>\n                <span class=\"uk-float-right\">&#x20b9;0</span>\n                <p><button class=\"uk-button uk-button-danger uk-border-rounded uk-align-center\">Log Out</button></p>\n                <span>Your Money is always safe with us. Refer your account statement anytime to track your transactions.</span>\n              </div>\n            </li>\n            <li>\n              <a class=\"uk-accordion-title\" href=\"#\">Account Statement</a>\n              <div class=\"uk-accordion-content\">\n                <div class=\"uk-overflow-auto uk-height-small\">\n                  <table class=\"uk-table\">\n                    <thead>\n                      <tr>\n                        <th>Date Description</th>\n                        <th>Amount</th>\n                        <th>Balance</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>Table Data</td>\n                        <td>Table Data</td>\n                        <td>Table Data</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </li>\n            <li>\n              <a class=\"uk-accordion-title\" href=\"#\">Withdrawals</a>\n              <div class=\"uk-accordion-content\">\n                <div class=\"uk-overflow-auto uk-height-small\">\n                  <table class=\"uk-table uk-text-nowrap\">\n                    <thead>\n                      <tr>\n                        <th>Id Date</th>\n                        <th>Amount Details</th>\n                        <th>Amount Status</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>Table Data</td>\n                        <td>Table Data</td>\n                        <td>Table Data</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </li>\n            <li>\n              <a class=\"uk-accordion-title\" href=\"#\">TDS</a>\n              <div class=\"uk-accordion-content\">\n                <div class=\"uk-overflow-auto uk-height-small\">\n                  <table class=\"uk-table\">\n                    <thead>\n                      <tr>\n                        <th>Date</th>\n                        <th>Description</th>\n                        <th>TDS Amount</th>\n                        <th>Status</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>Table Data</td>\n                        <td>Table Data</td>\n                        <td>Table Data</td>\n                        <td>Table Data</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </li>\n            <li>\n              <a class=\"uk-accordion-title\" href=\"#\">Contact Us</a>\n              <div class=\"uk-accordion-content\">\n                <p>For any concern, please connect to us at 18001202188 between 11am and 10pm.</p>\n                <p>write to us at support@rummyculture.com</p>\n              </div>\n            </li>\n          </ul>\n        </div>\n    </div>\n  </div>\n\n  <div id=\"offcanvas-overlay\" uk-offcanvas=\"overlay: true\">\n    <div class=\"uk-offcanvas-bar\">\n\n      <button class=\"uk-offcanvas-close\" type=\"button\" uk-close></button>\n      <h3 class=\"modalprof\">Profile</h3>\n      <ul uk-accordion>\n        <li>\n          <a class=\"uk-accordion-title\" href=\"#\">Personal Details</a>\n          <div class=\"uk-accordion-content\">\n            <a href=\"#offcanvas-usages\" uk-toggle>Mobile</a>\n\n            <div id=\"offcanvas-usages\" uk-offcanvas>\n              <div class=\"uk-offcanvas-bar navp\">\n\n                <button class=\"uk-offcanvas-close\" type=\"button\" uk-close></button>\n\n                <h3>Title</h3>\n\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                  consequat.</p>\n\n              </div>\n            </div>\n            <p>Email</p>\n            <p>Display Name</p>\n            <p>Full Name</p>\n          </div>\n        </li>\n        <li>\n          <a class=\"uk-accordion-title\" href=\"#\">KYC Documents</a>\n          <div class=\"uk-accordion-content\">\n            <p>PAN</p>\n            <p>Bank</p>\n            <p>NOTE: Do NOT send any documents over email. Upload them here only.</p>\n            <p>Term & conditions</p>\n          </div>\n        </li>\n        <li>\n          <a class=\"uk-accordion-title\" href=\"#\">Security</a>\n          <div class=\"uk-accordion-content\">\n            <p>Great! You are currently logged in.</p>\n            <p><a class=\"uk-button uk-button-danger uk-border-rounded uk-align-center\" (click)=\"onLogoutClick()\" href=\"#\">Log Out</a></p>\n          </div>\n        </li>\n        <li>\n          <a class=\"uk-accordion-title\" href=\"#\">Contact us</a>\n          <div class=\"uk-accordion-content\">\n            <p>For any concern, please connect to us at 18001202188 between 11am and 10pm.</p>\n            <p>write to us at support@rummyculture.com</p>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cashnav {\n  padding-right: 40px; }\n\n.profilenav {\n  padding-right: 40px; }\n\n.addnav a {\n  padding-right: 30px; }\n\n.add {\n  padding-left: 10px; }\n\n.headnav {\n  font-size: 20px; }\n\n.uk-margin a {\n  text-align: center; }\n\n.navlogo {\n  margin-top: -22px;\n  width: 9vw;\n  height: 9vh; }\n\n.profile:hover {\n  cursor: pointer; }\n\n.navh {\n  height: 13vh; }\n\n.ulc {\n  padding-left: 30%; }\n\n.ulcs {\n  padding-left: 40%; }\n\n.ug {\n  background-color: #2ecc72; }\n\n.modaladd h2 {\n  color: white; }\n\n.modaladd a {\n  color: white; }\n\n.ug th {\n  color: black; }\n\n.closebtn {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxQcm9qZWN0c1xcUnVtbXlcXGFhYXJ1bW15LWZyb250bGl2ZS9zcmNcXGFwcFxcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0csa0JBQWlCLEVBQUE7O0FBRXBCO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVM7RUFDVCxXQUFVLEVBQUE7O0FBRVo7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsWUFBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsWUFBVyxFQUFBOztBQUViO0VBQ0UsWUFBVyxFQUFBOztBQUViO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXNobmF2e1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuLnByb2ZpbGVuYXZ7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG4uYWRkbmF2IGF7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4uYWRke1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uaGVhZG5hdntcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udWstbWFyZ2luIGF7XG4gICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi5uYXZsb2dve1xuICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgd2lkdGg6OXZ3O1xuICBoZWlnaHQ6OXZoO1xufVxuLnByb2ZpbGU6aG92ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXZoe1xuICBoZWlnaHQ6MTN2aDtcbn1cbi51bGN7XG4gIHBhZGRpbmctbGVmdDogMzAlO1xufVxuLnVsY3N7XG4gIHBhZGRpbmctbGVmdDogNDAlO1xufVxuLnVne1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjYzcyO1xufVxuLm1vZGFsYWRkIGgye1xuICBjb2xvcjp3aGl0ZTtcbn1cbi5tb2RhbGFkZCBhe1xuICBjb2xvcjp3aGl0ZTtcbn1cbi51ZyB0aHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmNsb3NlYnRue1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NavComponent = /** @class */ (function () {
    function NavComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    NavComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show(UIkit.notification({ message: 'You are now logged out', status: 'success', pos: 'top-right', timeout: 3000 }));
        this.router.navigate(['login']);
        return false;
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    //Backend API where we can make that post request to register
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers });
    };
    // Backend API where we can make that post request to authenticate
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers });
    };
    // get the profile of the user with the appropriate token
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.loadToken();
        headers = headers.append('Authorization', this.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers });
    };
    // Store the user data in the local storage along with the JWT-token
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    // Loading the token by fetching it from the local storage
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // To check if the user is logged in then some options gets hidden and only the required will be shown
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('id_token');
    };
    // logout where everything gets clear in the local storage along with the user data
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    // To validate the feilds for the register form
    ValidateService.prototype.validateRegister = function (user) {
        if (user.username == undefined || user.contact == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\Rummy\aaarummy-frontlive\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map