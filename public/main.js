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

module.exports = ".yourbtn {\n  color: white;\n  border-radius: 5px;\n  height: 15vh;\n  font-size: 20px;\n  margin-top: 29%; }\n\n.yourbtn:hover {\n  color: white;\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnRuZG93bmJhbm5lci9DOlxcVXNlcnNcXG5FVyB1XFxwcm9qZWN0c1xcYWFhcnVtbXktcnVtbXluZXdcXGFhYXJ1bW15LWZyb250bGl2ZS9zcmNcXGFwcFxcYnRuZG93bmJhbm5lclxcYnRuZG93bmJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFjLEVBQUE7O0FBRWhCO0VBQ0UsWUFBWTtFQUNaLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2J0bmRvd25iYW5uZXIvYnRuZG93bmJhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi55b3VyYnRuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogMTV2aDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOjI5JTtcbn1cbi55b3VyYnRuOmhvdmVye1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiJdfQ== */"

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

module.exports = ".forgotpass {\n  background-color: #3b5999;\n  padding-right: 5px;\n  padding-top: 5px;\n  padding-bottom: 359px; }\n\n.line {\n  position: relative;\n  bottom: 18px; }\n\n.titl {\n  position: relative;\n  bottom: 12px; }\n\n.inp4 {\n  border-radius: 5px;\n  width: 300px; }\n\n.ip4 {\n  border-radius: 4px;\n  position: relative;\n  bottom: 20px; }\n\n.butt {\n  width: 320px;\n  border-radius: 5px;\n  position: relative;\n  bottom: 22px; }\n\n@media screen and (min-width: 320px) and (max-width: 2950px) {\n  .forpass {\n    border-radius: 10px;\n    margin-top: 100px;\n    width: 360px;\n    left: 35%;\n    height: 40vh; } }\n\n@media screen and (min-width: 320px) and (max-width: 515px) {\n  .forpass {\n    border-radius: 10px;\n    margin-top: 100px;\n    right: 30%;\n    width: 340px;\n    left: 5%; }\n  .forgotpass {\n    padding-right: 5px;\n    padding-top: 5px;\n    padding-bottom: 279px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ycGFzL0M6XFxVc2Vyc1xcbkVXIHVcXHByb2plY3RzXFxhYWFydW1teS1ydW1teW5ld1xcYWFhcnVtbXktZnJvbnRsaXZlL3NyY1xcYXBwXFxmb3JwYXNcXGZvcnBhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF3QjtFQUN4QixrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixxQkFBb0IsRUFBQTs7QUFJdEI7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUFBOztBQUVmO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFBQTs7QUFFZjtFQUNFLGtCQUFpQjtFQUNqQixZQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLFlBQVcsRUFBQTs7QUFFYjtFQUNFLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLFlBQVcsRUFBQTs7QUFJYjtFQUNFO0lBQ0ksbUJBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFXO0lBQ1gsU0FBUztJQUNULFlBQVcsRUFBQSxFQUNkOztBQUVIO0VBQ0U7SUFDSSxtQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osUUFBUSxFQUFBO0VBR1o7SUFDRSxrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZixxQkFBb0IsRUFBQSxFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2ZvcnBhcy9mb3JwYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yZ290cGFzc3tcbiAgYmFja2dyb3VuZC1jb2xvcjojM2I1OTk5O1xuICBwYWRkaW5nLXJpZ2h0OjVweDtcbiAgcGFkZGluZy10b3A6NXB4O1xuICBwYWRkaW5nLWJvdHRvbTozNTlweDtcbn1cblxuXG4ubGluZXtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBib3R0b206MThweDtcbn1cbi50aXRse1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGJvdHRvbToxMnB4O1xufVxuLmlucDR7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xuICB3aWR0aDozMDBweDtcbn1cbi5pcDR7XG4gIGJvcmRlci1yYWRpdXM6NHB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYm90dG9tOjIwcHg7XG59XG4uYnV0dHtcbiAgd2lkdGg6MzIwcHg7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYm90dG9tOjIycHg7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAyOTUwcHgpIHtcbiAgLmZvcnBhc3N7XG4gICAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgIHdpZHRoOjM2MHB4O1xuICAgICAgbGVmdDogMzUlO1xuICAgICAgaGVpZ2h0OjQwdmg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTE1cHgpIHtcbiAgLmZvcnBhc3N7XG4gICAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgIHJpZ2h0OiAzMCU7XG4gICAgICB3aWR0aDogMzQwcHg7XG4gICAgICBsZWZ0OiA1JTtcblxuICB9XG4gIC5mb3Jnb3RwYXNze1xuICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xuICAgIHBhZGRpbmctdG9wOjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbToyNzlweDtcbiAgfVxufVxuIl19 */"

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

module.exports = ".imgtable {\n  height: 520px;\n  margin-left: -40px; }\n\n.avatar1 {\n  width: 8vw;\n  height: 15vh;\n  border-radius: 50%;\n  position: absolute;\n  top: 20%;\n  left: 8%; }\n\n.avatar2 {\n  width: 8vw;\n  height: 15vh;\n  border-radius: 50%;\n  position: absolute;\n  top: 0%;\n  left: 25%; }\n\n.avatar3 {\n  width: 8vw;\n  height: 15vh;\n  border-radius: 50%;\n  position: absolute;\n  top: 0%;\n  left: 45%; }\n\n.avatar4 {\n  width: 8vw;\n  height: 15vh;\n  border-radius: 80%;\n  position: absolute;\n  top: 20%;\n  left: 85%; }\n\n.avatar5 {\n  width: 8vw;\n  height: 15vh;\n  border-radius: 50%;\n  position: absolute;\n  top: 77%;\n  left: 45%; }\n\n.avatar6 {\n  width: 8vw;\n  height: 15vh;\n  border-radius: 50%;\n  position: absolute;\n  top: 0%;\n  left: 65%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZW1pZC9DOlxcVXNlcnNcXG5FVyB1XFxwcm9qZWN0c1xcYWFhcnVtbXktcnVtbXluZXdcXGFhYXJ1bW15LWZyb250bGl2ZS9zcmNcXGFwcFxcZ2FtZW1pZFxcZ2FtZW1pZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDQyxVQUFTO0VBQ1QsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsUUFBTztFQUNQLFFBQU8sRUFBQTs7QUFFUjtFQUNDLFVBQVM7RUFDVCxZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixPQUFNO0VBQ04sU0FBUSxFQUFBOztBQUVUO0VBQ0MsVUFBUztFQUNULFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLE9BQU07RUFDTixTQUFRLEVBQUE7O0FBRVQ7RUFDQyxVQUFTO0VBQ1QsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsUUFBTztFQUNQLFNBQVEsRUFBQTs7QUFFVDtFQUNDLFVBQVM7RUFDVCxZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixRQUFPO0VBQ1AsU0FBUSxFQUFBOztBQUVUO0VBQ0MsVUFBUztFQUNULFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLE9BQU07RUFDTixTQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9nYW1lbWlkL2dhbWVtaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1ndGFibGV7XG4gIGhlaWdodDogNTIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbn1cbi5hdmF0YXIxe1xuXHR3aWR0aDo4dnc7XG5cdGhlaWdodDoxNXZoO1xuXHRib3JkZXItcmFkaXVzOjUwJTtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdHRvcDoyMCU7XG5cdGxlZnQ6OCU7XG59XG4uYXZhdGFyMntcblx0d2lkdGg6OHZ3O1xuXHRoZWlnaHQ6MTV2aDtcblx0Ym9yZGVyLXJhZGl1czo1MCU7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHR0b3A6MCU7XG5cdGxlZnQ6MjUlO1xufVxuLmF2YXRhcjN7XG5cdHdpZHRoOjh2dztcblx0aGVpZ2h0OjE1dmg7XG5cdGJvcmRlci1yYWRpdXM6NTAlO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0dG9wOjAlO1xuXHRsZWZ0OjQ1JTtcbn1cbi5hdmF0YXI0e1xuXHR3aWR0aDo4dnc7XG5cdGhlaWdodDoxNXZoO1xuXHRib3JkZXItcmFkaXVzOjgwJTtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdHRvcDoyMCU7XG5cdGxlZnQ6ODUlO1xufVxuLmF2YXRhcjV7XG5cdHdpZHRoOjh2dztcblx0aGVpZ2h0OjE1dmg7XG5cdGJvcmRlci1yYWRpdXM6NTAlO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0dG9wOjc3JTtcblx0bGVmdDo0NSU7XG59XG4uYXZhdGFyNntcblx0d2lkdGg6OHZ3O1xuXHRoZWlnaHQ6MTV2aDtcblx0Ym9yZGVyLXJhZGl1czo1MCU7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHR0b3A6MCU7XG5cdGxlZnQ6NjUlO1xufVxuIl19 */"

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

module.exports = "<nav class=\"uk-navbar-container uk-margin nbar navcol\" uk-navbar>\n    <div class=\"uk-navbar-left\">\n        <a class=\"uk-navbar-item uk-logo log\" href=\"#\"><img src=\"assets/img/logo.png\" alt=\"image\" /></a>\n    </div>\n\n    <div class=\"uk-navbar-right\">\n       <ul class=\"uk-navbar-nav\">\n           <li>\n              <a class=\"uk-button uk-button-default fstbtn\" href=\"/login\">Login</a>\n              <a class=\"uk-button uk-button-default sndbtn\" href=\"#modal-sections\" uk-toggle><span class=\"lck\" uk-icon=\"icon: lock;\"></span>Register\n                  <div id=\"modal-sections\" uk-modal>\n                     <div class=\"uk-modal-dialog\">\n                        <!--<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>-->\n                        <ul class=\"uk-modal-header\" uk-switcher=\"animation: uk-animation-fade; toggle: > *\">\n                            <button class=\"uk-button uk-button-default btn1\" type=\"button\">Register</button>\n                        </ul>\n                        <ul class=\"uk-modal-body uk-switcher uk-margin\">\n                          <li>\n                            <form (submit)=\"onRegisterSubmit()\">\n                              <fieldset class=\"uk-fieldset\">\n                                <div class=\"uk-margin\">\n                                  <input class=\"uk-input ipt1\" type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Enter username\">\n                                  <input class=\"uk-input ipt2\" type=\"text\" [(ngModel)]=\"contact\" name=\"contact\" placeholder=\"Your mobile number\">\n                                  <input class=\"uk-input ipt3\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Secure password\">\n                                  <p class=\"p1\">By registering you are agreeing to our Terms & Conditions</p>\n                                  <button class=\"uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom btn3\" type=\"submit\"><span class=\"lck2\" uk-icon=\"lock\"></span>Register and Play</button>\n                                  <p class=\"p2\">Or login in one click</p>\n                                  <p uk-margin>\n                                    <a class=\"uk-button uk-button-default lnk1\" href=\"#\"><span class=\"fb\" uk-icon=\"facebook\"></span>Facebook</a>\n                                    <a class=\"uk-button uk-button-default lnk2\" href=\"#\"><span class=\"gl\" uk-icon=\"google\"></span>Google</a>\n                                  </p>\n                                </div>\n                              </fieldset>\n                            </form>\n                          </li>\n                        </ul>\n                      </div>\n                 </div>\n              </a>\n           </li>\n       </ul>\n   </div>\n</nav>\n\n<div uk-grid>\n  <div class=\"uk-width-auto uk-width-2-3@m\">\n    <div class=\"imgh\" uk-switcher=\"animation: uk-animation-fade; toggle: > *\">\n      <button class=\"uk-button uk-button-danger\">Welcome Bonous</button>\n      <button class=\"uk-button uk-button-danger\">Booster Bonous</button>\n      <button class=\"uk-button uk-button-danger\">Happy Hour Bonous</button>\n    </div>\n    <ul class=\"uk-switcher imghml\">\n      <li><img class=\"uk-border-rounded imgs1\" src=\"assets/img/slider1.jpeg\" uk-img></li>\n      <li><img class=\"uk-border-rounded imgs1\" src=\"assets/img/slider2.jpeg\" uk-img></li>\n      <li><img class=\"uk-border-rounded imgs1\" src=\"assets/img/slider3.jpeg\" uk-img></li>\n    </ul>\n  </div>\n  <div class=\"uk-width-expand cardr cardrl\">\n    <div class=\"uk-card uk-card-default uk-width-1-1@m\">\n\n      <div class=\"uk-card-body\">\n        <p class=\"lohp\">Login in One Click</p>\n        <div class=\"uk-flex uk-flex-center\"><button class=\"uk-button uk-button-danger uk-border-rounded\"><i class=\"fab fa-google-plus\"></i> Google Plus</button></div>\n        <p class=\"lohp1\">Or Enter Your Details</p>\n        <form>\n          <div class=\"uk-margin\">\n            <div class=\"uk-inline uk-margin-medium-left\">\n              <span class=\"uk-form-icon\" uk-icon=\"icon: user\"></span>\n              <input name=\"username\" class=\"uk-input uk-form-large uk-border-rounded\" type=\"text\" placeholder=\"Username\">\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <div class=\"uk-inline uk-margin-medium-left\">\n              <span class=\"uk-form-icon\" uk-icon=\"icon: user\"></span>\n              <input name=\"phone\" class=\"uk-input uk-form-large uk-border-rounded\" type=\"text\" placeholder=\"Phone\">\n            </div>\n          </div>\n\n          <div class=\"uk-margin\">\n            <div class=\"uk-inline uk-margin-medium-left\">\n              <span class=\"uk-form-icon\" uk-icon=\"icon: lock\"></span>\n              <input name=\"Password\" class=\"uk-input uk-form-large uk-border-rounded\" type=\"text\" placeholder=\"Password\">\n            </div>\n          </div>\n        </form>\n        <br>\n        <button class=\"uk-button uk-button-primary uk-width-1-1 uk-border-rounded\"><i class=\"fas fa-lock\"></i> Register & Play</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-container-large wucush\">\n  <br>\n  <br>\n  <div class=\"uk-text-center\">\n    <h2 class=\"wucush1\">Why U Choose US</h2>\n    <span class=\"uk-flex uk-flex-center\">\n      <hr class=\"deep-purple accent-2\" style=\"width: 195px;\"></span>\n\n    <div class=\"uk-child-width-expand@s uk-text-center\" uk-grid>\n      <div>\n        <div class=\"uk-card uk-card-body fc_fr\">\n          <img data-src=\"assets/img/design.jpg\" width=\"60\" height=\"60\" alt=\"image\" uk-img>\n          <h4 class=\"inner_head1\">Best-in-class experience</h4>\n          <ul class=\"uk-list\">\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Lightweight & high speed app</li>\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Cash games & Free Tournaments</li>\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Best offers & Unlimited Bonuses</li>\n          </ul>\n        </div>\n      </div>\n      <div>\n        <div class=\"uk-card uk-card-body sc_fr\">\n          <img data-src=\"assets/img/launch.jpg\" width=\"60\" height=\"60\" alt=\"image\" uk-img>\n          <h4 class=\"inner_head2\">Lifetime Same Day cash withdrawal</h4>\n          <ul class=\"uk-list\">\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Withdraw your winnings instantly</li>\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Payments can be made 24*7</li>\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Valid on bank holidays</li>\n          </ul>\n        </div>\n      </div>\n      <div>\n        <div class=\"uk-card uk-card-body tc_fr\">\n          <img data-src=\"assets/img/design.jpg\" width=\"60\" height=\"60\" alt=\"image\" uk-img>\n          <h4 class=\"inner_head3\">Best Customer Support</h4>\n          <ul class=\"uk-list\">\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Withdraw your winnings instantly</li>\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Payments can be made 24*7</li>\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Valid on bank holidays</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"uk-container-large\">\n  <ul class=\"mtsb\" uk-tab>\n    <li class=\"swc1\"><a href=\"#\">Cash Games</a></li>\n    <li class=\"swc1\"><a href=\"#\">Tournaments</a></li>\n    <li class=\"swc1 uk-visible@l\"><a href=\"#\">Practice</a></li>\n  </ul>\n\n  <ul class=\"uk-switcher uk-margin\">\n    <li>\n      <div class=\"uk-text-center \" uk-grid>\n        <div uk-slider>\n\n          <div class=\"uk-position-relative uk-visible-toggle\" tabindex=\"-1\">\n            <ul class=\"uk-slider-items uk-slider-items uk-child-width-1-4@m uk-grid\">\n              <li class=\"mrtcard1\">\n                <div class=\"uk-width-1-1@s\">\n                  <div class=\"uk-card uk-card-default uk-card-body uk-border-rounded\">\n                    <img class=\"uk-border-rounded img101\" src=\"assets/img/card1.jpg\" alt=\"image of game\">\n                    <div class=\"uk-margin-top cards1\">\n                      <span class=\"uk-float-left\">Point Values</span>\n                      <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n                      <span class=\"uk-float-right\">0.1 to 40</span>\n                    </div>\n                    <div class=\"ptmt\">\n                      <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n                      <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n                    </div>\n                    <br>\n                    <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n                  </div>\n                </div>\n              </li>\n              <li class=\"mrtcard2\">\n                <div class=\"uk-width-1-1@s\">\n                  <div class=\"uk-card uk-card-default uk-card-body uk-border-rounded\">\n                    <img class=\"img101\" src=\"assets/img/card2.jpg\" alt=\"image of game\">\n                    <div class=\"uk-margin-top cards1\">\n                      <span class=\"uk-float-left\">Point Value</span>\n                      <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n                      <span class=\"uk-float-right\">0.1 to 40</span>\n                    </div>\n                    <div class=\"ptmt\">\n                      <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n                      <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n                    </div>\n                    <br>\n                    <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n                  </div>\n                </div>\n                <br>\n                <br>\n              </li>\n              <li class=\"mrtcard2\">\n                <div class=\"uk-width-1-1@s\">\n                  <div class=\"uk-card uk-card-default uk-card-body  uk-border-rounded\">\n                    <img class=\"uk-border-rounded img101\" src=\"assets/img/deal.jpg\" alt=\"image of game\">\n                    <div class=\"uk-margin-top cards1\">\n                      <span class=\"uk-float-left\">Point Value</span>\n                      <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n                      <span class=\"uk-float-right\">0.1 to 40</span>\n                    </div>\n                    <div class=\"ptmt\">\n                      <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n                      <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n                    </div>\n                    <br>\n                    <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n                  </div>\n                </div>\n              </li>\n              <li class=\"mrtcard3\">\n                <div class=\"uk-width-1-1@s\">\n                  <div class=\"uk-card uk-card-default uk-card-body uk-border-rounded\">\n                    <img class=\"img102\" src=\"assets/img/point.jpg\" alt=\"image of game\">\n                    <div class=\"uk-margin-top cards1\">\n                      <span class=\"uk-float-left\">Point Value</span>\n                      <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n                      <span class=\"uk-float-right\">0.1 to 40</span>\n                    </div>\n                    <div class=\"ptmt\">\n                      <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n                      <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n                    </div>\n                    <br>\n                    <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n                  </div>\n                </div>\n              </li>\n\n            </ul>\n\n            <a class=\"uk-position-center-left uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-previous uk-slider-item=\"previous\"></a>\n            <a class=\"uk-position-center-right uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-next uk-slider-item=\"next\"></a>\n\n          </div>\n\n\n\n        </div>\n      </div>\n    </li>\n    <li class=\"mrtcard1\">\n      <div class=\"uk-width-1-1@s uk-width-1-4@l uk-width-1-4@m\">\n        <div class=\"uk-card uk-card-default uk-card-body uk-border-rounded\">\n          <div class=\"uk-flex uk-flex-center\">\n            <div><img class=\"uk-border-rounded img102\" src=\"assets/img/point.jpg\" alt=\"image of game\"></div>\n          </div>\n\n          <div class=\"uk-margin-top cards1\">\n            <span class=\"uk-float-left\">Point Value</span>\n            <span class=\"tourbsi1\"><i class=\"fas fa-rupee-sign ics1\"></i></span>\n            <span class=\"uk-float-right\">0.1 to 40</span>\n          </div>\n          <div class=\"ptmt\">\n            <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n            <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n          </div>\n          <br>\n          <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"uk-child-width-1-4 uk-grid-small uk-text-center\" uk-grid>\n        <div class=\"mrtcard1\">\n          <div class=\"uk-card uk-card-default uk-card-body\">\n            <img class=\"img101\" src=\"assets/img/card1.jpg\" alt=\"image of game\">\n            <div class=\"uk-margin-top cards1\">\n              <span class=\"uk-float-left\">Point Value</span>\n              <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n              <span class=\"uk-float-right\">0.1 to 40</span>\n            </div>\n            <div class=\"ptmt\">\n              <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n              <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n            </div>\n            <br>\n            <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n          </div>\n        </div>\n        <div class=\"mrtcard2\">\n          <div class=\"uk-card uk-card-default uk-card-body\">\n            <img class=\"img101\" src=\"assets/img/card2.jpg\" alt=\"image of game\">\n            <div class=\"uk-margin-top cards1\">\n              <span class=\"uk-float-left\">Point Value</span>\n              <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n              <span class=\"uk-float-right\">0.1 to 40</span>\n            </div>\n            <div class=\"ptmt\">\n              <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n              <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n            </div>\n            <br>\n              <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n          </div>\n        </div>\n        <div class=\"mrtcard2\">\n          <div class=\"uk-card uk-card-default uk-card-body\">\n            <img class=\"img101\" src=\"assets/img/deal.jpg\" alt=\"image of game\">\n            <div class=\"uk-margin-top cards1\">\n              <span class=\"uk-float-left\">Point Value</span>\n              <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n              <span class=\"uk-float-right\">0.1 to 40</span>\n            </div>\n            <div class=\"ptmt\">\n              <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n              <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n            </div>\n            <br>\n              <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n          </div>\n        </div>\n        <div class=\"mrtcard3\">\n          <div class=\"uk-card uk-card-default uk-card-body\">\n            <img class=\"img102\" src=\"assets/img/point.jpg\" alt=\"image of game\">\n            <div class=\"uk-margin-top cards1\">\n              <span class=\"uk-float-left\">Point Value</span>\n              <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n              <span class=\"uk-float-right\">0.1 to 40</span>\n            </div>\n            <div class=\"ptmt\">\n              <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n              <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n            </div>\n            <br>\n              <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ul>\n  <br>\n</div>\n\n\n\n\n\n\n<div class=\"uk-text-center\">\n  <h2 class=\"wucush1\">Client Testimonials</h2>\n  <span class=\"uk-flex uk-flex-center\">\n    <hr class=\"deep-purple accent-2\" style=\"width: 195px;\"></span>\n</div>\n<div class=\"uk-grid\">\n  <div class=\"uk-width-1-3@l uk-width-1-1@s comh1\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-large uk-card-body uk-box-shadow-large\">\n        <h3 class=\"uk-card-title uk-flex uk-flex-center\"><i class=\"fas fa-quote-right\"></i></h3>\n        <p class=\"cm1\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n        <div class=\"uk-flex uk-flex-center\"><img src=\"assets/img/1.png\" alt=\"image of game\"></div>\n        <p class=\"uk-card-title uk-flex uk-flex-center\">Fouad Badawy</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"uk-width-1-3@l uk-width-1-1@s comh2\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-large uk-card-body uk-box-shadow-large\">\n        <h3 class=\"uk-card-title uk-flex uk-flex-center\"><i class=\"fas fa-quote-right\"></i></h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n        <div class=\"uk-flex uk-flex-center\"><img src=\"assets/img/1.png\" alt=\"image of game\"></div>\n        <p class=\"uk-card-title uk-flex uk-flex-center\">Fouad Badawy</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"uk-width-1-3@l uk-width-1-1@s comh3\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-large uk-card-body uk-box-shadow-large \">\n        <h3 class=\"uk-card-title uk-flex uk-flex-center\"><i class=\"fas fa-quote-right\"></i></h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n        <div class=\"uk-flex uk-flex-center\"><img src=\"assets/img/1.png\" alt=\"image of game\"></div>\n        <p class=\"uk-card-title uk-flex uk-flex-center\">Fouad Badawy</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<br>\n\n<!---------------------------------------Footer------------------------------------------------------>\n\n<div class=\"uk-card uk-width-1-1\">\n  <div class=\"uk-card-header foothead\">\n    <nav class=\"\" uk-navbar>\n      <div class=\"uk-navbar-left\">\n      <ul class=\"uk-navbar-nav\">\n          <li>Get Connected to the Social Media</li>\n        </ul>\n      </div>\n      <div class=\"uk-navbar-right\">\n        <ul class=\"uk-navbar-nav\">\n          <li><a href=\"\"><i class=\"fab fa-facebook-f footheadi\"></i></a></li>\n          <li><a href=\"\"><i class=\"fab fa-twitter footheadi\"></i></a></li>\n          <li><a href=\"\"><i class=\"fab fa-google-plus-g footheadi\"></i></a></li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n  <div class=\"uk-card-body footbody\">\n    <div class=\"uk-grid\">\n      <div class=\"uk-width-1-3@l uk-width-1-1@s comh1\">\n        <div>\n          <div class=\"uk-card\">\n            <h3 class=\"uk-card-title uk-flex uk-flex-center footerheadings\">Company</h3>\n            <div class=\"uk-flex uk-flex-center\"><hr class=\"deep-purple accent-2 ftll\" style=\"width: 115px;\"></div>\n            <p class=\"uk-margin-top  footstarth\">AAARummyculture.com offers is your go to app for Cash rummy games online. If offers best-in-class playing experience, highest welcome bonus, free and multilingual customer support and complete digital safety. Play on the website or\n              the Android App.</p>\n              <p class=\"footstarth\"><i class=\"fas fa-envelope\"></i> aaarummy@gmail.com</p>\n              <p class=\"footstarth\"><i class=\"fas fa-phone\"></i> 1900-000-9999</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"uk-width-1-3@l uk-width-1-1@s comh1\">\n        <div>\n          <div class=\"uk-card\">\n            <h3 class=\"uk-card-title uk-flex uk-flex-center footerheadings\">Quick Links</h3>\n            <div class=\"uk-flex uk-flex-center\"><hr class=\"deep-purple accent-2 ftll\" style=\"width: 115px;\"></div>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">About</span></a></p>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">Blog</span></a></p>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">Contact Us</span></a></p>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">About Us</span></a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"uk-width-1-3@l uk-width-1-1@s comh1\">\n        <div>\n          <div class=\"uk-card\">\n            <h3 class=\"uk-card-title uk-flex uk-flex-center footerheadings\">Links</h3>\n            <div class=\"uk-flex uk-flex-center\"><hr class=\"deep-purple accent-2 ftll\" style=\"width: 85px;\"></div>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">Offers</span></a></p>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">Referrals</span></a></p>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">How to Play</span></a></p>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">Terms of Service</span></a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"uk-card-footer footend\">\n    <h3 class=\"uk-card-title uk-flex uk-flex-center footendh\">&copy; AAARummyculture.All Right Reserved</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgh {\n  position: absolute;\n  margin-top: 482px;\n  margin-left: 6%; }\n\n.imghml {\n  margin-left: 40px;\n  margin-top: 5%; }\n\n.cardrl {\n  margin-top: 22px;\n  margin-right: 25px; }\n\n.dot {\n  height: 30px;\n  width: 30px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block; }\n\n.text {\n  margin-top: 2px;\n  font-size: 30px;\n  color: Green;\n  margin-left: 13px; }\n\n.hwct {\n  text-align: left; }\n\n.hwct2 {\n  text-align: center; }\n\n.hwct2 {\n  text-align: right; }\n\n.cm1 {\n  text-align: justify;\n  -moz-text-align-last: center;\n       text-align-last: center; }\n\n.imgs {\n  height: 900px; }\n\n.lohh3 {\n  font-size: 40px; }\n\n.lohp {\n  font-size: 25px; }\n\n.lohp1 {\n  font-size: 15px; }\n\n.in1 {\n  width: 100%; }\n\n.imgs1 {\n  height: 420px; }\n\n.uk-list {\n  text-align: justify; }\n\n.uk-margin-small-right {\n  color: green; }\n\n.fc_fr, .sc_fr, .tc_fr {\n  width: 345px;\n  height: 320px; }\n\n.fc_sr, .sc_sr, .tc_sr {\n  width: 345px;\n  height: 320px; }\n\n.sec_head {\n  margin-top: 50px; }\n\n.thrd_head {\n  margin-top: 50px; }\n\n.inner_head1 {\n  font-weight: bold; }\n\n.inner_head2 {\n  font-weight: bold; }\n\n.inner_head3 {\n  font-weight: bold; }\n\n.inner_head4 {\n  font-weight: bold; }\n\n.inner_head5 {\n  font-weight: bold; }\n\n.inner_head6 {\n  font-weight: bold; }\n\n.cards1 {\n  background-color: yellow;\n  border: 2px solid yellow;\n  border-radius: 12px; }\n\n.ics1 {\n  font-size: 20px; }\n\n.ncs {\n  font-size: 25px; }\n\n.ptmt {\n  margin-top: 6px; }\n\n.ptmtb {\n  margin-top: 30px; }\n\n.swc1 a {\n  font-size: 30px; }\n\n.bsc {\n  margin-top: 30px; }\n\n.wucush {\n  margin-top: 30px; }\n\n.wucush1 {\n  font-size: 50px; }\n\n.btns1 {\n  background-color: green; }\n\n.btns1:hover {\n  background-color: #26ae60; }\n\n.btnsp1 {\n  color: white;\n  font-size: 20px; }\n\n.tourbsi1 {\n  margin-left: 20%; }\n\n.img101 {\n  height: 270px;\n  width: 300px;\n  border-radius: 12%; }\n\n.img102 {\n  height: 270px;\n  width: 300px;\n  border-radius: 15%; }\n\n.mrtcard1 {\n  margin-top: 30px;\n  margin-left: 0px; }\n\n.mrtcard2 {\n  margin-top: 30px; }\n\n.uk-icon {\n  color: #019031;\n  visibility: visible; }\n\n.uk-slidenav-position .uk-slidenav {\n  display: block; }\n\n.mrtcard3 {\n  margin-top: 30px; }\n\n@media screen and (min-device-width: 281px) and (max-device-width: 768px) {\n  .comh2 {\n    margin-top: 20px;\n    margin-left: 10px;\n    margin-right: 10px; }\n  .comh1 {\n    margin-top: 20px;\n    margin-left: 10px;\n    margin-right: 10px; }\n  .comh3 {\n    margin-top: 20px;\n    margin-left: 10px;\n    margin-right: 10px; } }\n\n.foothead {\n  background-color: #6351CE;\n  color: white; }\n\n.footheadi {\n  color: white; }\n\n.footbody {\n  background-color: #1C2331;\n  color: white; }\n\n.nj {\n  color: red; }\n\n.footbodycon {\n  text-decoration: none;\n  color: white; }\n\n.textunder:hover {\n  text-decoration: none; }\n\n.footerheadings {\n  color: white;\n  font-size: 25px; }\n\n.footend {\n  background-color: #161C27; }\n\n.footendh {\n  color: white; }\n\n.footstarth {\n  text-align: justify;\n  -moz-text-align-last: left;\n       text-align-last: left; }\n\n/* styles for the nav */\n\n.nbar {\n  background-color: #3CB371;\n  position: relative;\n  bottom: 20px; }\n\n.log img {\n  position: relative;\n  top: 10px;\n  margin-left: 25px;\n  height: 85px; }\n\n.fstbtn {\n  min-height: 50px;\n  margin: 10px;\n  position: relative;\n  top: 35px;\n  left: -180px;\n  border-radius: 5px;\n  font-weight: bold;\n  background: #ffffff;\n  border: 1px solid #000000;\n  color: #000000; }\n\n.fstbtn:hover {\n  color: #000000; }\n\n.sndbtn {\n  min-height: 50px;\n  max-width: 115px;\n  position: relative;\n  top: -25px;\n  left: 5px;\n  margin-right: 45px;\n  border-radius: 5px;\n  font-weight: bold;\n  background: #ffffff;\n  border: 2px solid #000000;\n  color: #000000; }\n\n.sndbtn:hover {\n  color: #000000; }\n\n.lck {\n  padding-right: 5px;\n  position: relative;\n  bottom: 0px;\n  color: darkgreen; }\n\n/* styles for the modal */\n\n#modal-sections {\n  background-color: #3b5999; }\n\n.uk-modal-header {\n  height: 60px;\n  padding-top: 20px;\n  padding-bottom: 12px;\n  border-radius: 10px; }\n\n.uk-modal-dialog {\n  height: 420px;\n  width: 420px;\n  border-radius: 10px; }\n\n.btn1 {\n  padding-left: 20px;\n  font-size: 30px;\n  font-weight: bold;\n  border-radius: 5px;\n  position: relative;\n  bottom: 4px;\n  width: 360px;\n  height: 60px; }\n\n.btn3 {\n  position: relative;\n  top: 5px;\n  left: 20px;\n  width: 380px;\n  border-radius: 5px; }\n\n.ipt1 {\n  position: relative;\n  left: 20px;\n  top: -5px;\n  width: 380px;\n  border-radius: 5px; }\n\n.ipt2 {\n  position: relative;\n  left: 20px;\n  top: 12px;\n  width: 380px;\n  border-radius: 5px; }\n\n.ipt3 {\n  position: relative;\n  left: 20px;\n  top: 28px;\n  width: 380px;\n  border-radius: 5px; }\n\n.p1 {\n  font-size: 12px;\n  position: relative;\n  left: 20px;\n  top: 15px;\n  width: 380px; }\n\n.p2 {\n  font-size: 12px;\n  position: relative;\n  left: 20px;\n  bottom: 18px;\n  width: 380px; }\n\n.lnk1 {\n  width: 180px;\n  margin-top: 8px;\n  margin-right: 30px;\n  position: relative;\n  bottom: 40px;\n  left: 20px;\n  border-radius: 5px;\n  background-color: #3b5999;\n  color: white; }\n\n.lnk2 {\n  width: 188px;\n  margin-top: 8px;\n  position: relative;\n  bottom: 40px;\n  border-radius: 5px;\n  background-color: #dd4b39;\n  color: white; }\n\n.fb {\n  position: relative;\n  right: 16px;\n  bottom: 2px;\n  color: #3b5999;\n  background-color: white; }\n\n.gl {\n  position: relative;\n  right: 12px;\n  bottom: 2px; }\n\n.forgot {\n  font-size: 14px;\n  position: relative;\n  top: 25px;\n  left: 290px; }\n\n.lck2 {\n  position: relative;\n  right: 5px;\n  bottom: 3px; }\n\n.uk-margin {\n  margin-bottom: 0px; }\n\n.uk-close {\n  position: absolute;\n  top: -22px;\n  left: 390px;\n  color: black;\n  background-color: white; }\n\n.mtsb {\n  margin-top: 60px; }\n\n.navcol {\n  background-color: #019031; }\n\n/* Media Queries for the modal part */\n\n@media screen and (max-width: 640px) {\n  .uk-modal-dialog {\n    height: 450px; }\n  .btn1 {\n    font-size: 20px;\n    max-width: 135px; }\n  .btn2 {\n    font-size: 20px;\n    max-width: 135px; }\n  .ipt1, .ipt2, .ipt3, .ipt4, .ipt5 {\n    max-width: 290px; }\n  .p1 {\n    max-width: 250px; }\n  .p3 {\n    max-width: 250px; }\n  .btn3 {\n    max-width: 290px; }\n  .btn4 {\n    max-width: 290px; }\n  .lnk1 {\n    position: relative;\n    left: 18px;\n    max-width: 150px; }\n  .lnk2 {\n    max-width: 136px;\n    position: relative;\n    right: 5px; }\n  .lnk3 {\n    position: relative;\n    left: 18px;\n    max-width: 150px; }\n  .lnk4 {\n    max-width: 136px;\n    position: relative;\n    right: 5px; }\n  .fb {\n    position: relative;\n    right: 8px;\n    bottom: 2px;\n    color: #3b5999;\n    background-color: white; }\n  .gl {\n    position: relative;\n    right: 5px;\n    bottom: 2px; }\n  .forgot {\n    position: absolute;\n    top: 205px;\n    left: 200px; }\n  .footstarth {\n    text-align: justify;\n    -moz-text-align-last: center;\n         text-align-last: center; } }\n\n@media screen and (max-width: 320px) {\n  .uk-modal-dialog {\n    height: 450px; }\n  .btn1 {\n    font-size: 20px;\n    max-width: 135px; }\n  .btn2 {\n    font-size: 20px;\n    max-width: 135px; }\n  .ipt1, .ipt2, .ipt3, .ipt4, .ipt5 {\n    max-width: 290px; }\n  .p1 {\n    max-width: 250px; }\n  .p3 {\n    max-width: 250px; }\n  .btn3 {\n    max-width: 290px; }\n  .btn4 {\n    max-width: 290px; }\n  .lnk1 {\n    position: relative;\n    left: 18px;\n    max-width: 150px; }\n  .lnk2 {\n    max-width: 136px;\n    position: relative;\n    right: 5px; }\n  .lnk3 {\n    position: relative;\n    left: 18px;\n    max-width: 150px; }\n  .lnk4 {\n    max-width: 136px;\n    position: relative;\n    right: 5px; }\n  .fb {\n    position: relative;\n    right: 8px;\n    bottom: 2px;\n    color: #3b5999;\n    background-color: white; }\n  .gl {\n    position: relative;\n    right: 5px;\n    bottom: 2px; }\n  .forgot {\n    position: absolute;\n    top: 205px;\n    left: 200px; }\n  .footstarth {\n    text-align: justify;\n    -moz-text-align-last: center;\n         text-align-last: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXG5FVyB1XFxwcm9qZWN0c1xcYWFhcnVtbXktcnVtbXluZXdcXGFhYXJ1bW15LWZyb250bGl2ZS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxnQkFBZSxFQUFBOztBQUVqQjtFQUNFLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGlCQUFnQixFQUFBOztBQUVsQjtFQUNFLG1CQUFtQjtFQUNuQiw0QkFBdUI7T0FBdkIsdUJBQXVCLEVBQUE7O0FBRXpCO0VBRUUsYUFBYSxFQUFBOztBQUVmO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsYUFBYSxFQUFBOztBQUtmO0VBQ0UsbUJBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsWUFBVyxFQUFBOztBQUViO0VBQ0UsWUFBVztFQUNYLGFBQVksRUFBQTs7QUFFZDtFQUNFLFlBQVc7RUFDWCxhQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZSxFQUFBOztBQUVqQjtFQUNFLGdCQUFlLEVBQUE7O0FBR2pCO0VBQ0UsaUJBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQWdCLEVBQUE7O0FBSWxCO0VBQ0Usd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxnQkFBZSxFQUFBOztBQUVqQjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0c7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0VBRXBCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtFQUVwQjtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUEsRUFDbkI7O0FBRUo7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFFZDtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBRWQ7RUFFRSxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUVqQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBb0I7T0FBcEIscUJBQW9CLEVBQUE7O0FBSXRCLHVCQUFBOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFpQjtFQUNqQixZQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBaUI7RUFDakIsU0FBUTtFQUNSLGlCQUFnQjtFQUNoQixZQUFXLEVBQUE7O0FBRWI7RUFDRSxnQkFBZTtFQUNmLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsU0FBUTtFQUNSLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQix5QkFBd0I7RUFDeEIsY0FBYSxFQUFBOztBQUVmO0VBQ0UsY0FBYSxFQUFBOztBQUVmO0VBQ0UsZ0JBQWU7RUFDZixnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1QsU0FBUTtFQUNSLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQix5QkFBd0I7RUFDeEIsY0FBYSxFQUFBOztBQUVmO0VBQ0UsY0FBYSxFQUFBOztBQUVmO0VBQ0Usa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsZ0JBQWUsRUFBQTs7QUFHakIseUJBQUE7O0FBQ0E7RUFDRSx5QkFBd0IsRUFBQTs7QUFFMUI7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQixtQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxhQUFZO0VBQ1osWUFBVztFQUNYLG1CQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsV0FBVTtFQUNWLFlBQVc7RUFDWCxZQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBaUI7RUFDakIsUUFBTztFQUNQLFVBQVM7RUFDVCxZQUFXO0VBQ1gsa0JBQWlCLEVBQUE7O0FBR25CO0VBQ0Usa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxTQUFRO0VBQ1IsWUFBVztFQUNYLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1QsU0FBUTtFQUNSLFlBQVc7RUFDWCxrQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxrQkFBaUI7RUFDakIsVUFBUztFQUNULFNBQVE7RUFDUixZQUFXO0VBQ1gsa0JBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1QsU0FBUTtFQUNSLFlBQVcsRUFBQTs7QUFFYjtFQUNFLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsVUFBUztFQUNULFlBQVc7RUFDWCxZQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFXO0VBQ1gsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsWUFBVztFQUNYLFVBQVM7RUFDVCxrQkFBaUI7RUFDakIseUJBQXdCO0VBQ3hCLFlBQVcsRUFBQTs7QUFFYjtFQUNFLFlBQVc7RUFDWCxlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIseUJBQXdCO0VBQ3hCLFlBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsV0FBVTtFQUNWLGNBQWE7RUFDYix1QkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxrQkFBaUI7RUFDakIsV0FBVTtFQUNWLFdBQVUsRUFBQTs7QUFFWjtFQUNFLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsU0FBUTtFQUNSLFdBQVUsRUFBQTs7QUFFWjtFQUNFLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1QsV0FBVSxFQUFBOztBQUVaO0VBQ0Usa0JBQWlCLEVBQUE7O0FBRW5CO0VBQ0Usa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsWUFBVztFQUNYLHVCQUFzQixFQUFBOztBQUd4QjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQixxQ0FBQTs7QUFDQTtFQUNFO0lBQ0UsYUFBWSxFQUFBO0VBRWQ7SUFDRSxlQUFjO0lBQ2QsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGVBQWM7SUFDZCxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZTtJQUNmLGtCQUFpQjtJQUNqQixVQUFTLEVBQUE7RUFFWDtJQUNFLGtCQUFpQjtJQUNqQixVQUFTO0lBQ1QsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlO0lBQ2Ysa0JBQWlCO0lBQ2pCLFVBQVMsRUFBQTtFQUVYO0lBQ0Usa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxXQUFVO0lBQ1YsY0FBYTtJQUNiLHVCQUFzQixFQUFBO0VBRXhCO0lBQ0Usa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxXQUFVLEVBQUE7RUFFWjtJQUNFLGtCQUFpQjtJQUNqQixVQUFTO0lBQ1QsV0FBVSxFQUFBO0VBRVo7SUFDRSxtQkFBbUI7SUFDbkIsNEJBQXNCO1NBQXRCLHVCQUFzQixFQUFBLEVBQ3ZCOztBQUlIO0VBQ0U7SUFDRSxhQUFZLEVBQUE7RUFFZDtJQUNFLGVBQWM7SUFDZCxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZUFBYztJQUNkLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGtCQUFpQjtJQUNqQixVQUFTO0lBQ1QsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlO0lBQ2Ysa0JBQWlCO0lBQ2pCLFVBQVMsRUFBQTtFQUVYO0lBQ0Usa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWU7SUFDZixrQkFBaUI7SUFDakIsVUFBUyxFQUFBO0VBRVg7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULFdBQVU7SUFDVixjQUFhO0lBQ2IsdUJBQXNCLEVBQUE7RUFFeEI7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULFdBQVUsRUFBQTtFQUVaO0lBQ0Usa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxXQUFVLEVBQUE7RUFFWjtJQUNFLG1CQUFtQjtJQUNuQiw0QkFBc0I7U0FBdEIsdUJBQXNCLEVBQUEsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1naFxue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDQ4MnB4O1xuICBtYXJnaW4tbGVmdDogNiU7XG59XG4uaW1naG1se1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG4uY2FyZHJse1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG4uZG90IHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4udGV4dCB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogR3JlZW47XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xufVxuLmh3Y3R7XG4gIHRleHQtYWxpZ246bGVmdDtcbn1cbi5od2N0MntcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG4uaHdjdDJ7XG4gIHRleHQtYWxpZ246cmlnaHQ7XG59XG4uY20xe1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcbn1cbi5pbWdzXG57XG4gIGhlaWdodDogOTAwcHg7XG59XG4ubG9oaDN7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5sb2hwe1xuICBmb250LXNpemU6IDI1cHg7XG59XG4ubG9ocDF7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5pbjF7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmltZ3Mxe1xuICBoZWlnaHQ6IDQyMHB4O1xufVxuXG5cblxuLnVrLWxpc3R7XG4gIHRleHQtYWxpZ246anVzdGlmeTtcbn1cbi51ay1tYXJnaW4tc21hbGwtcmlnaHR7XG4gIGNvbG9yOmdyZWVuO1xufVxuLmZjX2ZyLCAuc2NfZnIsIC50Y19mcix7XG4gIHdpZHRoOjM0NXB4O1xuICBoZWlnaHQ6MzIwcHg7XG59XG4uZmNfc3IsIC5zY19zciwgLnRjX3NyIHtcbiAgd2lkdGg6MzQ1cHg7XG4gIGhlaWdodDozMjBweDtcbn1cblxuLnNlY19oZWFke1xuICBtYXJnaW4tdG9wOjUwcHg7XG59XG4udGhyZF9oZWFke1xuICBtYXJnaW4tdG9wOjUwcHg7XG59XG5cbi5pbm5lcl9oZWFkMXtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cbi5pbm5lcl9oZWFkMntcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cbi5pbm5lcl9oZWFkM3tcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cbi5pbm5lcl9oZWFkNHtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cbi5pbm5lcl9oZWFkNXtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cbi5pbm5lcl9oZWFkNntcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cblxuXG4uY2FyZHMxe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5pY3Mxe1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ubmNze1xuICBmb250LXNpemU6IDI1cHg7XG59XG4ucHRtdHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnB0bXRie1xuICBtYXJnaW4tdG9wOjMwcHg7XG59XG4uc3djMSBhe1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uYnNje1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLnd1Y3VzaHtcbiAgbWFyZ2luLXRvcDogMzBweDtcblxufVxuLnd1Y3VzaDF7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cbi5idG5zMXtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4uYnRuczE6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmFlNjA7XG59XG4uYnRuc3Axe1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi50b3VyYnNpMXtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cbi5pbWcxMDF7XG4gIGhlaWdodDogMjcwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTIlO1xufVxuLmltZzEwMntcbiAgaGVpZ2h0OiAyNzBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNSU7XG59XG4ubXJ0Y2FyZDF7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4ubXJ0Y2FyZDJ7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi51ay1pY29ue1xuICBjb2xvcjogIzAxOTAzMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnVrLXNsaWRlbmF2LXBvc2l0aW9uIC51ay1zbGlkZW5hdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tcnRjYXJkM3tcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAyODFweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3NjhweCkge1xuICAgLmNvbWgye1xuICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgfVxuICAgLmNvbWgxe1xuICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgfVxuICAgLmNvbWgze1xuICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgfVxufVxuLmZvb3RoZWFke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM1MUNFO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZm9vdGhlYWRpe1xuICBjb2xvcjogd2hpdGU7XG59XG4uZm9vdGJvZHl7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQzIzMzE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5uantcbiAgY29sb3I6IHJlZDtcbn1cbi5mb290Ym9keWNvbntcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG4udGV4dHVuZGVyOmhvdmVyXG57XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5mb290ZXJoZWFkaW5nc3tcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4uZm9vdGVuZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MUMyNztcbn1cbi5mb290ZW5kaHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZvb3RzdGFydGh7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHRleHQtYWxpZ24tbGFzdDpsZWZ0O1xufVxuXG5cbi8qIHN0eWxlcyBmb3IgdGhlIG5hdiAqL1xuLm5iYXJ7XG4gIGJhY2tncm91bmQtY29sb3I6XHQjM0NCMzcxO1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYm90dG9tOjIwcHg7XG59XG4ubG9nIGltZ3tcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHRvcDoxMHB4O1xuICBtYXJnaW4tbGVmdDoyNXB4O1xuICBoZWlnaHQ6ODVweDtcbn1cbi5mc3RidG57XG4gIG1pbi1oZWlnaHQ6NTBweDtcbiAgbWFyZ2luOjEwcHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0b3A6MzVweDtcbiAgbGVmdDotMTgwcHg7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xuICBmb250LXdlaWdodDpib2xkO1xuICBiYWNrZ3JvdW5kOiNmZmZmZmY7XG4gIGJvcmRlcjoxcHggc29saWQgIzAwMDAwMDtcbiAgY29sb3I6IzAwMDAwMDtcbn1cbi5mc3RidG46aG92ZXJ7XG4gIGNvbG9yOiMwMDAwMDA7XG59XG4uc25kYnRue1xuICBtaW4taGVpZ2h0OjUwcHg7XG4gIG1heC13aWR0aDoxMTVweDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHRvcDotMjVweDtcbiAgbGVmdDo1cHg7XG4gIG1hcmdpbi1yaWdodDo0NXB4O1xuICBib3JkZXItcmFkaXVzOjVweDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgYmFja2dyb3VuZDojZmZmZmZmO1xuICBib3JkZXI6MnB4IHNvbGlkICMwMDAwMDA7XG4gIGNvbG9yOiMwMDAwMDA7XG59XG4uc25kYnRuOmhvdmVye1xuICBjb2xvcjojMDAwMDAwO1xufVxuLmxja3tcbiAgcGFkZGluZy1yaWdodDo1cHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBib3R0b206MHB4O1xuICBjb2xvcjpkYXJrZ3JlZW47XG59XG5cbi8qIHN0eWxlcyBmb3IgdGhlIG1vZGFsICovXG4jbW9kYWwtc2VjdGlvbnN7XG4gIGJhY2tncm91bmQtY29sb3I6IzNiNTk5OTtcbn1cbi51ay1tb2RhbC1oZWFkZXJ7XG4gIGhlaWdodDo2MHB4O1xuICBwYWRkaW5nLXRvcDoyMHB4O1xuICBwYWRkaW5nLWJvdHRvbToxMnB4O1xuICBib3JkZXItcmFkaXVzOjEwcHg7XG59XG5cbi51ay1tb2RhbC1kaWFsb2d7XG4gIGhlaWdodDo0MjBweDtcbiAgd2lkdGg6NDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6MTBweDtcbn1cbi5idG4xe1xuICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgZm9udC1zaXplOjMwcHg7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYm90dG9tOjRweDtcbiAgd2lkdGg6MzYwcHg7XG4gIGhlaWdodDo2MHB4O1xufVxuLmJ0bjN7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0b3A6NXB4O1xuICBsZWZ0OjIwcHg7XG4gIHdpZHRoOjM4MHB4O1xuICBib3JkZXItcmFkaXVzOjVweDtcbn1cblxuLmlwdDF7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBsZWZ0OjIwcHg7XG4gIHRvcDotNXB4O1xuICB3aWR0aDozODBweDtcbiAgYm9yZGVyLXJhZGl1czo1cHg7XG59XG4uaXB0MntcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGxlZnQ6MjBweDtcbiAgdG9wOjEycHg7XG4gIHdpZHRoOjM4MHB4O1xuICBib3JkZXItcmFkaXVzOjVweDtcbn1cbi5pcHQze1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgbGVmdDoyMHB4O1xuICB0b3A6MjhweDtcbiAgd2lkdGg6MzgwcHg7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xufVxuXG4ucDF7XG4gIGZvbnQtc2l6ZToxMnB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgbGVmdDoyMHB4O1xuICB0b3A6MTVweDtcbiAgd2lkdGg6MzgwcHg7XG59XG4ucDJ7XG4gIGZvbnQtc2l6ZToxMnB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgbGVmdDoyMHB4O1xuICBib3R0b206MThweDtcbiAgd2lkdGg6MzgwcHg7XG59XG5cbi5sbmsxe1xuICB3aWR0aDoxODBweDtcbiAgbWFyZ2luLXRvcDo4cHg7XG4gIG1hcmdpbi1yaWdodDozMHB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYm90dG9tOjQwcHg7XG4gIGxlZnQ6MjBweDtcbiAgYm9yZGVyLXJhZGl1czo1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IzNiNTk5OTtcbiAgY29sb3I6d2hpdGU7XG59XG4ubG5rMntcbiAgd2lkdGg6MTg4cHg7XG4gIG1hcmdpbi10b3A6OHB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYm90dG9tOjQwcHg7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNkZDRiMzk7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4uZmJ7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICByaWdodDoxNnB4O1xuICBib3R0b206MnB4O1xuICBjb2xvcjojM2I1OTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xufVxuLmdse1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgcmlnaHQ6MTJweDtcbiAgYm90dG9tOjJweDtcbn1cbi5mb3Jnb3R7XG4gIGZvbnQtc2l6ZToxNHB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgdG9wOjI1cHg7XG4gIGxlZnQ6MjkwcHg7XG59XG4ubGNrMntcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHJpZ2h0OjVweDtcbiAgYm90dG9tOjNweDtcbn1cbi51ay1tYXJnaW57XG4gIG1hcmdpbi1ib3R0b206MHB4O1xufVxuLnVrLWNsb3Nle1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOi0yMnB4O1xuICBsZWZ0OjM5MHB4O1xuICBjb2xvcjpibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbn1cblxuLm10c2J7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi5uYXZjb2x7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTkwMzE7XG59XG4vKiBNZWRpYSBRdWVyaWVzIGZvciB0aGUgbW9kYWwgcGFydCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NDBweCl7XG4gIC51ay1tb2RhbC1kaWFsb2d7XG4gICAgaGVpZ2h0OjQ1MHB4O1xuICB9XG4gIC5idG4xe1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIG1heC13aWR0aDoxMzVweDtcbiAgfVxuICAuYnRuMntcbiAgICBmb250LXNpemU6MjBweDtcbiAgICBtYXgtd2lkdGg6MTM1cHg7XG4gIH1cbiAgLmlwdDEsIC5pcHQyLCAuaXB0MywgLmlwdDQsIC5pcHQ1e1xuICAgIG1heC13aWR0aDoyOTBweDtcbiAgfVxuICAucDF7XG4gICAgbWF4LXdpZHRoOjI1MHB4O1xuICB9XG4gIC5wM3tcbiAgICBtYXgtd2lkdGg6MjUwcHg7XG4gIH1cbiAgLmJ0bjN7XG4gICAgbWF4LXdpZHRoOjI5MHB4O1xuICB9XG4gIC5idG40e1xuICAgIG1heC13aWR0aDoyOTBweDtcbiAgfVxuICAubG5rMXtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBsZWZ0OjE4cHg7XG4gICAgbWF4LXdpZHRoOjE1MHB4O1xuICB9XG4gIC5sbmsye1xuICAgIG1heC13aWR0aDoxMzZweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICByaWdodDo1cHg7XG4gIH1cbiAgLmxuazN7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgbGVmdDoxOHB4O1xuICAgIG1heC13aWR0aDoxNTBweDtcbiAgfVxuICAubG5rNHtcbiAgICBtYXgtd2lkdGg6MTM2cHg7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgcmlnaHQ6NXB4O1xuICB9XG4gIC5mYntcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICByaWdodDo4cHg7XG4gICAgYm90dG9tOjJweDtcbiAgICBjb2xvcjojM2I1OTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIH1cbiAgLmdse1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHJpZ2h0OjVweDtcbiAgICBib3R0b206MnB4O1xuICB9XG4gIC5mb3Jnb3R7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjIwNXB4O1xuICAgIGxlZnQ6MjAwcHg7XG4gIH1cbiAgLmZvb3RzdGFydGh7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB0ZXh0LWFsaWduLWxhc3Q6Y2VudGVyO1xuICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjBweCl7XG4gIC51ay1tb2RhbC1kaWFsb2d7XG4gICAgaGVpZ2h0OjQ1MHB4O1xuICB9XG4gIC5idG4xe1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIG1heC13aWR0aDoxMzVweDtcbiAgfVxuICAuYnRuMntcbiAgICBmb250LXNpemU6MjBweDtcbiAgICBtYXgtd2lkdGg6MTM1cHg7XG4gIH1cbiAgLmlwdDEsIC5pcHQyLCAuaXB0MywgLmlwdDQsIC5pcHQ1e1xuICAgIG1heC13aWR0aDoyOTBweDtcbiAgfVxuICAucDF7XG4gICAgbWF4LXdpZHRoOjI1MHB4O1xuICB9XG4gIC5wM3tcbiAgICBtYXgtd2lkdGg6MjUwcHg7XG4gIH1cbiAgLmJ0bjN7XG4gICAgbWF4LXdpZHRoOjI5MHB4O1xuICB9XG4gIC5idG40e1xuICAgIG1heC13aWR0aDoyOTBweDtcbiAgfVxuICAubG5rMXtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBsZWZ0OjE4cHg7XG4gICAgbWF4LXdpZHRoOjE1MHB4O1xuICB9XG4gIC5sbmsye1xuICAgIG1heC13aWR0aDoxMzZweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICByaWdodDo1cHg7XG4gIH1cbiAgLmxuazN7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgbGVmdDoxOHB4O1xuICAgIG1heC13aWR0aDoxNTBweDtcbiAgfVxuICAubG5rNHtcbiAgICBtYXgtd2lkdGg6MTM2cHg7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgcmlnaHQ6NXB4O1xuICB9XG4gIC5mYntcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICByaWdodDo4cHg7XG4gICAgYm90dG9tOjJweDtcbiAgICBjb2xvcjojM2I1OTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIH1cbiAgLmdse1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHJpZ2h0OjVweDtcbiAgICBib3R0b206MnB4O1xuICB9XG4gIC5mb3Jnb3R7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjIwNXB4O1xuICAgIGxlZnQ6MjAwcHg7XG4gIH1cbiAgLmZvb3RzdGFydGh7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB0ZXh0LWFsaWduLWxhc3Q6Y2VudGVyO1xuICB9XG59XG4iXX0= */"

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

module.exports = ".buttonleft button {\n  color: white;\n  font-size: 20px;\n  border-radius: 5px;\n  color: white;\n  font-size: 20px;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVmdGJ0bi9DOlxcVXNlcnNcXG5FVyB1XFxwcm9qZWN0c1xcYWFhcnVtbXktcnVtbXluZXdcXGFhYXJ1bW15LWZyb250bGl2ZS9zcmNcXGFwcFxcbGVmdGJ0blxcbGVmdGJ0bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sZWZ0YnRuL2xlZnRidG4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ubGVmdCBidXR0b257XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4iXX0= */"

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

module.exports = ".btn2 {\n  font-size: 30px;\n  font-weight: bold;\n  border-radius: 5px;\n  position: relative;\n  bottom: 4px;\n  width: 360px;\n  height: 60px; }\n\n.btn4 {\n  position: relative;\n  top: 5px;\n  left: 20px;\n  width: 380px;\n  border-radius: 5px; }\n\n.ipt4 {\n  position: relative;\n  left: 20px;\n  top: -4px;\n  width: 380px;\n  border-radius: 5px; }\n\n.ipt5 {\n  position: relative;\n  left: 20px;\n  top: 12px;\n  width: 380px;\n  border-radius: 5px; }\n\n.p3 {\n  font-size: 12px;\n  position: relative;\n  left: 20px;\n  top: 10px;\n  width: 380px; }\n\n.p4 {\n  font-size: 12px;\n  position: relative;\n  left: 20px;\n  bottom: 12px;\n  width: 380px; }\n\n.lnk3 {\n  width: 180px;\n  margin-top: 25px;\n  margin-right: 30px;\n  position: relative;\n  bottom: 40px;\n  left: 20px;\n  border-radius: 5px;\n  background-color: #3b5999;\n  color: white; }\n\n.lnk4 {\n  width: 188px;\n  margin-top: 25px;\n  position: relative;\n  bottom: 40px;\n  border-radius: 5px;\n  background-color: #dd4b39;\n  color: white; }\n\n.fb {\n  position: relative;\n  right: 16px;\n  bottom: 2px;\n  color: #3b5999;\n  background-color: white; }\n\n.gl {\n  position: relative;\n  right: 12px;\n  bottom: 2px; }\n\n.forgot {\n  font-size: 14px;\n  position: relative;\n  top: 25px;\n  left: 290px; }\n\n.lck1 {\n  position: relative;\n  right: 5px;\n  bottom: 3px; }\n\n.uk-margin {\n  margin-bottom: 0px; }\n\n.login {\n  background-color: #3b5999;\n  padding-top: 99px;\n  padding-bottom: 80px; }\n\n.log {\n  border-radius: 10px;\n  position: relative;\n  width: 420px;\n  height: 440px;\n  top: 40px;\n  left: 360px; }\n\n.uk-modal-header {\n  height: 60px;\n  padding-top: 20px;\n  padding-bottom: 12px;\n  border-radius: 10px; }\n\n/* Media Queries for the modal part */\n\n@media screen and (max-width: 640px) {\n  .btn2 {\n    font-size: 20px;\n    max-width: 135px; }\n  .ipt4, .ipt5 {\n    max-width: 290px; }\n  .p3 {\n    max-width: 250px; }\n  .btn4 {\n    max-width: 290px; }\n  .lnk3 {\n    position: relative;\n    left: 18px;\n    max-width: 150px; }\n  .lnk4 {\n    max-width: 136px;\n    position: relative;\n    right: 5px; }\n  .fb {\n    position: relative;\n    right: 8px;\n    bottom: 2px;\n    color: #3b5999;\n    background-color: white; }\n  .gl {\n    position: relative;\n    right: 5px;\n    bottom: 2px; }\n  .forgot {\n    position: absolute;\n    top: 205px;\n    left: 200px; }\n  .login {\n    background-color: #3b5999;\n    padding-right: 5px;\n    padding-top: 5px;\n    padding-bottom: 80px; }\n  .log {\n    position: relative;\n    width: 420px;\n    height: 440px;\n    top: 40px;\n    left: 360px; } }\n\n@media screen and (max-width: 320px) {\n  .btn2 {\n    font-size: 20px;\n    max-width: 135px; }\n  .ipt4, .ipt5 {\n    max-width: 290px; }\n  .p3 {\n    max-width: 250px; }\n  .btn4 {\n    max-width: 290px; }\n  .lnk3 {\n    position: relative;\n    left: 18px;\n    max-width: 150px; }\n  .lnk4 {\n    max-width: 136px;\n    position: relative;\n    right: 5px; }\n  .fb {\n    position: relative;\n    right: 8px;\n    bottom: 2px;\n    color: #3b5999;\n    background-color: white; }\n  .gl {\n    position: relative;\n    right: 5px;\n    bottom: 2px; }\n  .forgot {\n    position: absolute;\n    top: 205px;\n    left: 200px; }\n  .login {\n    background-color: #3b5999;\n    padding-right: 5px;\n    padding-top: 5px;\n    padding-bottom: 80px; }\n  .log {\n    position: relative;\n    width: 420px;\n    height: 440px;\n    top: 40px;\n    left: 300px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxuRVcgdVxccHJvamVjdHNcXGFhYXJ1bW15LXJ1bW15bmV3XFxhYWFydW1teS1mcm9udGxpdmUvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsWUFBVztFQUNYLFlBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFpQjtFQUNqQixRQUFPO0VBQ1AsVUFBUztFQUNULFlBQVc7RUFDWCxrQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxrQkFBaUI7RUFDakIsVUFBUztFQUNULFNBQVE7RUFDUixZQUFXO0VBQ1gsa0JBQWlCLEVBQUE7O0FBRW5CO0VBQ0Usa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxTQUFRO0VBQ1IsWUFBVztFQUNYLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsVUFBUztFQUNULFNBQVE7RUFDUixZQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxZQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUViO0VBQ0UsWUFBVztFQUNYLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsVUFBUztFQUNULGtCQUFpQjtFQUNqQix5QkFBd0I7RUFDeEIsWUFBVyxFQUFBOztBQUViO0VBQ0UsWUFBVztFQUNYLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIseUJBQXdCO0VBQ3hCLFlBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsV0FBVTtFQUNWLGNBQWE7RUFDYix1QkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxrQkFBaUI7RUFDakIsV0FBVTtFQUNWLFdBQVUsRUFBQTs7QUFFWjtFQUNFLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsU0FBUTtFQUNSLFdBQVUsRUFBQTs7QUFFWjtFQUNFLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1QsV0FBVSxFQUFBOztBQUVaO0VBQ0Usa0JBQWlCLEVBQUE7O0FBRW5CO0VBQ0UseUJBQXdCO0VBQ3hCLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxhQUFZO0VBQ1osU0FBUTtFQUNSLFdBQVUsRUFBQTs7QUFFWjtFQUNFLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsb0JBQW1CO0VBQ25CLG1CQUFrQixFQUFBOztBQUdwQixxQ0FBQTs7QUFDQTtFQUNFO0lBQ0UsZUFBYztJQUNkLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZTtJQUNmLGtCQUFpQjtJQUNqQixVQUFTLEVBQUE7RUFFWDtJQUNFLGtCQUFpQjtJQUNqQixVQUFTO0lBQ1QsV0FBVTtJQUNWLGNBQWE7SUFDYix1QkFBc0IsRUFBQTtFQUV4QjtJQUNFLGtCQUFpQjtJQUNqQixVQUFTO0lBQ1QsV0FBVSxFQUFBO0VBRVo7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULFdBQVUsRUFBQTtFQUVaO0lBQ0UseUJBQXdCO0lBQ3hCLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLG9CQUNGLEVBQUE7RUFDQTtJQUNFLGtCQUFpQjtJQUNqQixZQUFXO0lBQ1gsYUFBWTtJQUNaLFNBQVE7SUFDUixXQUFVLEVBQUEsRUFDWDs7QUFFSDtFQUNFO0lBQ0UsZUFBYztJQUNkLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZTtJQUNmLGtCQUFpQjtJQUNqQixVQUFTLEVBQUE7RUFFWDtJQUNFLGtCQUFpQjtJQUNqQixVQUFTO0lBQ1QsV0FBVTtJQUNWLGNBQWE7SUFDYix1QkFBc0IsRUFBQTtFQUV4QjtJQUNFLGtCQUFpQjtJQUNqQixVQUFTO0lBQ1QsV0FBVSxFQUFBO0VBRVo7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULFdBQVUsRUFBQTtFQUVaO0lBQ0UseUJBQXdCO0lBQ3hCLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLG9CQUNGLEVBQUE7RUFDQTtJQUNFLGtCQUFpQjtJQUNqQixZQUFXO0lBQ1gsYUFBWTtJQUNaLFNBQVE7SUFDUixXQUFVLEVBQUEsRUFDWCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bjJ7XG4gIGZvbnQtc2l6ZTozMHB4O1xuICBmb250LXdlaWdodDpib2xkO1xuICBib3JkZXItcmFkaXVzOjVweDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGJvdHRvbTo0cHg7XG4gIHdpZHRoOjM2MHB4O1xuICBoZWlnaHQ6NjBweDtcbn1cbi5idG40e1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgdG9wOjVweDtcbiAgbGVmdDoyMHB4O1xuICB3aWR0aDozODBweDtcbiAgYm9yZGVyLXJhZGl1czo1cHg7XG59XG4uaXB0NHtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGxlZnQ6MjBweDtcbiAgdG9wOi00cHg7XG4gIHdpZHRoOjM4MHB4O1xuICBib3JkZXItcmFkaXVzOjVweDtcbn1cbi5pcHQ1e1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgbGVmdDoyMHB4O1xuICB0b3A6MTJweDtcbiAgd2lkdGg6MzgwcHg7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xufVxuLnAze1xuICBmb250LXNpemU6MTJweDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGxlZnQ6MjBweDtcbiAgdG9wOjEwcHg7XG4gIHdpZHRoOjM4MHB4O1xufVxuLnA0e1xuICBmb250LXNpemU6MTJweDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGxlZnQ6MjBweDtcbiAgYm90dG9tOjEycHg7XG4gIHdpZHRoOjM4MHB4O1xufVxuLmxuazN7XG4gIHdpZHRoOjE4MHB4O1xuICBtYXJnaW4tdG9wOjI1cHg7XG4gIG1hcmdpbi1yaWdodDozMHB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYm90dG9tOjQwcHg7XG4gIGxlZnQ6MjBweDtcbiAgYm9yZGVyLXJhZGl1czo1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IzNiNTk5OTtcbiAgY29sb3I6d2hpdGU7XG59XG4ubG5rNHtcbiAgd2lkdGg6MTg4cHg7XG4gIG1hcmdpbi10b3A6MjVweDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGJvdHRvbTo0MHB4O1xuICBib3JkZXItcmFkaXVzOjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjojZGQ0YjM5O1xuICBjb2xvcjp3aGl0ZTtcbn1cbi5mYntcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHJpZ2h0OjE2cHg7XG4gIGJvdHRvbToycHg7XG4gIGNvbG9yOiMzYjU5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG59XG4uZ2x7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICByaWdodDoxMnB4O1xuICBib3R0b206MnB4O1xufVxuLmZvcmdvdHtcbiAgZm9udC1zaXplOjE0cHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0b3A6MjVweDtcbiAgbGVmdDoyOTBweDtcbn1cbi5sY2sxe1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgcmlnaHQ6NXB4O1xuICBib3R0b206M3B4O1xufVxuLnVrLW1hcmdpbntcbiAgbWFyZ2luLWJvdHRvbTowcHg7XG59XG4ubG9naW57XG4gIGJhY2tncm91bmQtY29sb3I6IzNiNTk5OTtcbiAgcGFkZGluZy10b3A6OTlweDtcbiAgcGFkZGluZy1ib3R0b206ODBweDtcbn1cbi5sb2d7XG4gIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHdpZHRoOjQyMHB4O1xuICBoZWlnaHQ6NDQwcHg7XG4gIHRvcDo0MHB4O1xuICBsZWZ0OjM2MHB4O1xufVxuLnVrLW1vZGFsLWhlYWRlcntcbiAgaGVpZ2h0OjYwcHg7XG4gIHBhZGRpbmctdG9wOjIwcHg7XG4gIHBhZGRpbmctYm90dG9tOjEycHg7XG4gIGJvcmRlci1yYWRpdXM6MTBweDtcbn1cblxuLyogTWVkaWEgUXVlcmllcyBmb3IgdGhlIG1vZGFsIHBhcnQgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpe1xuICAuYnRuMntcbiAgICBmb250LXNpemU6MjBweDtcbiAgICBtYXgtd2lkdGg6MTM1cHg7XG4gIH1cbiAgLmlwdDQsIC5pcHQ1e1xuICAgIG1heC13aWR0aDoyOTBweDtcbiAgfVxuICAucDN7XG4gICAgbWF4LXdpZHRoOjI1MHB4O1xuICB9XG4gIC5idG40e1xuICAgIG1heC13aWR0aDoyOTBweDtcbiAgfVxuICAubG5rM3tcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBsZWZ0OjE4cHg7XG4gICAgbWF4LXdpZHRoOjE1MHB4O1xuICB9XG4gIC5sbms0e1xuICAgIG1heC13aWR0aDoxMzZweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICByaWdodDo1cHg7XG4gIH1cbiAgLmZie1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHJpZ2h0OjhweDtcbiAgICBib3R0b206MnB4O1xuICAgIGNvbG9yOiMzYjU5OTk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgfVxuICAuZ2x7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgcmlnaHQ6NXB4O1xuICAgIGJvdHRvbToycHg7XG4gIH1cbiAgLmZvcmdvdHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MjA1cHg7XG4gICAgbGVmdDoyMDBweDtcbiAgfVxuICAubG9naW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjojM2I1OTk5O1xuICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xuICAgIHBhZGRpbmctdG9wOjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTo4MHB4XG4gIH1cbiAgLmxvZ3tcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB3aWR0aDo0MjBweDtcbiAgICBoZWlnaHQ6NDQwcHg7XG4gICAgdG9wOjQwcHg7XG4gICAgbGVmdDozNjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjBweCl7XG4gIC5idG4ye1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIG1heC13aWR0aDoxMzVweDtcbiAgfVxuICAuaXB0NCwgLmlwdDV7XG4gICAgbWF4LXdpZHRoOjI5MHB4O1xuICB9XG4gIC5wM3tcbiAgICBtYXgtd2lkdGg6MjUwcHg7XG4gIH1cbiAgLmJ0bjR7XG4gICAgbWF4LXdpZHRoOjI5MHB4O1xuICB9XG4gIC5sbmsze1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGxlZnQ6MThweDtcbiAgICBtYXgtd2lkdGg6MTUwcHg7XG4gIH1cbiAgLmxuazR7XG4gICAgbWF4LXdpZHRoOjEzNnB4O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHJpZ2h0OjVweDtcbiAgfVxuICAuZmJ7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgcmlnaHQ6OHB4O1xuICAgIGJvdHRvbToycHg7XG4gICAgY29sb3I6IzNiNTk5OTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICB9XG4gIC5nbHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICByaWdodDo1cHg7XG4gICAgYm90dG9tOjJweDtcbiAgfVxuICAuZm9yZ290e1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDoyMDVweDtcbiAgICBsZWZ0OjIwMHB4O1xuICB9XG4gIC5sb2dpbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjU5OTk7XG4gICAgcGFkZGluZy1yaWdodDo1cHg7XG4gICAgcGFkZGluZy10b3A6NXB4O1xuICAgIHBhZGRpbmctYm90dG9tOjgwcHhcbiAgfVxuICAubG9ne1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHdpZHRoOjQyMHB4O1xuICAgIGhlaWdodDo0NDBweDtcbiAgICB0b3A6NDBweDtcbiAgICBsZWZ0OjMwMHB4O1xuICB9XG59XG4iXX0= */"

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

module.exports = ".backcard1 {\n  background-size: cover;\n  margin-left: 19.5%;\n  border: 1px solid lime;\n  position: absolute;\n  top: 15%;\n  width: 78vw;\n  height: 68vh; }\n\n.buttonselect a {\n  background-color: green; }\n\n.buttonselect a:hover {\n  background-color: green; }\n\n.card1mid {\n  background-color: #FFF1D6; }\n\n.card1mid:hover {\n  background-color: #FFF1D6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlkZGxlcGFydC9DOlxcVXNlcnNcXG5FVyB1XFxwcm9qZWN0c1xcYWFhcnVtbXktcnVtbXluZXdcXGFhYXJ1bW15LWZyb250bGl2ZS9zcmNcXGFwcFxcbWlkZGxlcGFydFxcbWlkZGxlcGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFpQjtFQUNqQixRQUFPO0VBQ1AsV0FBVTtFQUNWLFlBQVcsRUFBQTs7QUFHYjtFQUNFLHVCQUFzQixFQUFBOztBQUV4QjtFQUNFLHVCQUFzQixFQUFBOztBQUV4QjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWlkZGxlcGFydC9taWRkbGVwYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tjYXJkMXtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luLWxlZnQ6MTkuNSU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpbWU7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MTUlO1xuICB3aWR0aDo3OHZ3O1xuICBoZWlnaHQ6Njh2aDtcbn1cblxuLmJ1dHRvbnNlbGVjdCBhe1xuICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xufVxuLmJ1dHRvbnNlbGVjdCBhOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xufVxuLmNhcmQxbWlke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGMUQ2O1xufVxuXG4uY2FyZDFtaWQ6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkYxRDY7XG59XG4iXX0= */"

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

module.exports = ".cashnav {\n  padding-right: 40px; }\n\n.profilenav {\n  padding-right: 40px; }\n\n.addnav a {\n  padding-right: 30px; }\n\n.add {\n  padding-left: 10px; }\n\n.headnav {\n  font-size: 20px; }\n\n.uk-margin a {\n  text-align: center; }\n\n.navlogo {\n  margin-top: -22px;\n  width: 9vw;\n  height: 9vh; }\n\n.profile:hover {\n  cursor: pointer; }\n\n.navh {\n  height: 13vh; }\n\n.ulc {\n  padding-left: 30%; }\n\n.ulcs {\n  padding-left: 40%; }\n\n.ug {\n  background-color: #2ecc72; }\n\n.modaladd h2 {\n  color: white; }\n\n.modaladd a {\n  color: white; }\n\n.ug th {\n  color: black; }\n\n.closebtn {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcbkVXIHVcXHByb2plY3RzXFxhYWFydW1teS1ydW1teW5ld1xcYWFhcnVtbXktZnJvbnRsaXZlL3NyY1xcYXBwXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRyxrQkFBaUIsRUFBQTs7QUFFcEI7RUFDRSxpQkFBaUI7RUFDakIsVUFBUztFQUNULFdBQVUsRUFBQTs7QUFFWjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxZQUFXLEVBQUE7O0FBRWI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxZQUFXLEVBQUE7O0FBRWI7RUFDRSxZQUFXLEVBQUE7O0FBRWI7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhc2huYXZ7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG4ucHJvZmlsZW5hdntcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cbi5hZGRuYXYgYXtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cbi5hZGR7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5oZWFkbmF2e1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi51ay1tYXJnaW4gYXtcbiAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuLm5hdmxvZ297XG4gIG1hcmdpbi10b3A6IC0yMnB4O1xuICB3aWR0aDo5dnc7XG4gIGhlaWdodDo5dmg7XG59XG4ucHJvZmlsZTpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdmh7XG4gIGhlaWdodDoxM3ZoO1xufVxuLnVsY3tcbiAgcGFkZGluZy1sZWZ0OiAzMCU7XG59XG4udWxjc3tcbiAgcGFkZGluZy1sZWZ0OiA0MCU7XG59XG4udWd7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWNjNzI7XG59XG4ubW9kYWxhZGQgaDJ7XG4gIGNvbG9yOndoaXRlO1xufVxuLm1vZGFsYWRkIGF7XG4gIGNvbG9yOndoaXRlO1xufVxuLnVnIHRoe1xuICBjb2xvcjogYmxhY2s7XG59XG4uY2xvc2VidG57XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

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

module.exports = __webpack_require__(/*! C:\Users\nEW u\projects\aaarummy-rummynew\aaarummy-frontlive\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map