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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4{\r\nfont-weight:900;\r\n} \r\n\r\n#welcomeDiv{\r\n    \r\n    background-color:white;\r\n    width: 600px;\r\n    height:auto;\r\n    margin:50px auto;\r\n    display:inline-block;\r\n} \r\n\r\n#text{\r\n    font-size:35px;\r\n} \r\n\r\n#title{\r\n    font-weight:900;\r\n    font-size: 2em;\r\n} \r\n\r\n#pictures{\r\n    display:inline-block;\r\n    margin: 50px 10px;\r\n    float:right;\r\n    text-align:center;\r\n    position:relative;\r\n    size:80px;\r\n    \r\n} \r\n\r\n#all{\r\n    width: 97%;\r\n    margin: 0 auto;\r\n} \r\n\r\n#catTitle{\r\n    font-size:50px;\r\n    position:relative;\r\n    left:160px; \r\n    width:400px;\r\n} \r\n\r\n#picture1{\r\n    border-radius:5%;\r\n    border-width:5px;\r\n    border-style:ridge;\r\n    border-color:black;\r\n    display:inline-block;\r\n    position:relative;\r\n    size:200px;\r\n} \r\n\r\n#websites{\r\n    float:left;\r\n} \r\n\r\n.container {\r\n  position: relative;\r\n  width: 50%;\r\n} \r\n\r\n.image {\r\n  display: block;\r\n  border-radius:5%;\r\n    border-width:5px;\r\n    border-style:ridge;\r\n    border-color:black;\r\n    display:inline-block;\r\n    position:relative;\r\n    size:200px;\r\n} \r\n\r\n.overlay {\r\n  position: relative;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 620px;\r\n  width: 740px;\r\n  opacity: 1;\r\n  transition: .9s ease;\r\n} \r\n\r\n.overlay .text{\r\n    opacity:0;\r\n} \r\n\r\n.overlay:hover .text{\r\n  opacity: 1;\r\n  transition: .9s ease;\r\n} \r\n\r\n.text {\r\n  color: green;\r\n  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;\r\n  font-size: 100px;\r\n  position: absolute;\r\n  top: 43%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n} \r\n\r\n#image1:hover {\r\n    -webkit-transform: scale(1.5);\r\n            transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */\r\n} \r\n\r\n#entireDiv{\r\n    text-align:center;\r\n} \r\n\r\n#everythingDiv{\r\n    width: 97%;\r\n    margin: 0 auto;\r\n}\r\n\r\n    \r\n\r\n    \r\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"all\">\r\n<div id=\"pageInfo\">\r\n\r\n    <!--INFORMATION-->\r\n  <div id=\"everythingDiv\">\r\n    \r\n    <div class=\"jumbotron\" id=\"welcomeDiv\">\r\n      <legend id=\"text\">Hello, and welcome to Cat World BG!</legend>\r\n      <p class=\"lead\" id=\"text\">The place that let's you adopt cute kittens AND find nice homes for others at the same time! You can also connect with your fellow cat owners! </p>\r\n      <hr class=\"my-4\">\r\n      <p>Non-profit</p>\r\n      <p>Email: borisbostandzhiev@gmail.com</p>\r\n      <p id=\"websites\">\r\n        <!--FACEBOOK-->\r\n        <a id=\"Facebook\" href=\"https://www.facebook.com/Gorilla.Gainzzz/?fb_dtsg_ag=Adwp8rfCWb6PgZMg4FzqyyFFlw0i6kfUOokNkEMUiyvKQg%3AAdx46QeJpjDWu7e1Ej9NY5TDSpvzP2g9ztlWbS1yK6Zz1Q\" target=\"_blank\">\r\n        <i class=\"fa fa-facebook-square\" style=\"font-size:48px;color: #3B5998\"></i>\r\n        </a>\r\n      </p>\r\n    </div>\r\n\r\n      <!--PICTURES-->\r\n    <div class = \"container\" id=\"pictures\">\r\n      <!-- pic 1 -->\r\n      <legend id=\"catTitle\">Най-новото коте!</legend>\r\n      <a href=\"/view-cat/{{pic1Adress}}\">  \r\n      <div class=\"overlay\">\r\n      <img id=\"picture1\" src= {{pic1}} height=\"550\" width=\"700\" alt=\"Paris\">\r\n      <div class=\"text\">Информация</div>\r\n      </div>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n</div>\r\n\r\n  \r\n    \r\n  \r\n\r\n    \r\n\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/kinvey-remote-service.service.js */ "./src/app/services/kinvey-remote-service.service.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(remote) {
        this.remote = remote;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("loldsds");
        if (localStorage.length === 0) {
            console.log("lol, inside if");
            this.remote.login("Guest2", "Guest2").subscribe(function (data) {
                _this.remote.saveSession(data);
                _this.getCats();
            });
        }
        else {
            this.getCats();
        }
    };
    AboutComponent.prototype.getCats = function () {
        var _this = this;
        this.remote.GetAllCats().subscribe(function (data) {
            var stuff2 = data;
            var length = Object.keys(stuff2).length;
            //PIC1
            _this.pic1 = stuff2[length - 1].imgUrl;
            _this.pic1Adress = stuff2[length - 1]._id;
            //PIC2
            _this.pic2 = stuff2[length - 2].imgUrl;
            _this.pic2Adress = stuff2[length - 2]._id;
            //PIC3
            _this.pic3 = stuff2[length - 3].imgUrl;
            _this.pic3Adress = stuff2[length - 3]._id;
            //PIC4
            _this.pic4 = stuff2[length - 4].imgUrl;
            _this.pic4Adress = stuff2[length - 4]._id;
            console.log(_this.pic1Adress);
        });
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-about",
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_1__["KinveyRemoteServiceService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#usersBoard{\r\n    background-color:white;\r\n    margin:auto;\r\n    height:auto;\r\n    width:1200px;\r\n}\r\n\r\nlegend{\r\n    text-align:center;\r\n}"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pageInfo\">\r\n  <div id=\"usersBoard\" class=\"jumbotron\">\r\n    <legend>All Users</legend>\r\n    \r\n    <app-user-profile-card *ngFor=\"let u of users\" [user]=\"u\" (changedUsers)=\"getUsersAgain($event)\"></app-user-profile-card>\r\n      \r\n      \r\n  </div>\r\n<div>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/kinvey-remote-service.service.js */ "./src/app/services/kinvey-remote-service.service.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(remote) {
        this.remote = remote;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem("isAdmin") !== "Yes") {
            console.log("not admin");
        }
        this.remote.GetAllUsers().subscribe(function (data) {
            _this.users = data;
        });
    };
    AdminComponent.prototype.getUsersAgain = function () {
        var _this = this;
        this.remote.GetAllUsers().subscribe(function (data) {
            _this.users = data;
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-admin",
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_1__["KinveyRemoteServiceService"]])
    ], AdminComponent);
    return AdminComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_cat_create_cat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-cat/create-cat.component */ "./src/app/create-cat/create-cat.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/log-in/log-in.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-all/view-all.component */ "./src/app/view-all/view-all.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _view_cat_info_view_cat_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-cat-info/view-cat-info.component */ "./src/app/view-cat-info/view-cat-info.component.ts");
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inbox/inbox.component */ "./src/app/inbox/inbox.component.ts");
/* harmony import */ var _incorrect_page_incorrect_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./incorrect-page/incorrect-page.component */ "./src/app/incorrect-page/incorrect-page.component.ts");
/* harmony import */ var _pm_view_pm_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pm-view/pm-view.component */ "./src/app/pm-view/pm-view.component.ts");
/* harmony import */ var _pm_writer_pm_writer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pm-writer/pm-writer.component */ "./src/app/pm-writer/pm-writer.component.ts");
/* harmony import */ var _rockets_page_rockets_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rockets-page/rockets-page.component */ "./src/app/rockets-page/rockets-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Components
















//Routes
var routes = [
    { path: '', pathMatch: "full", redirectTo: 'about' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'signin', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"] },
    { path: 'login', component: _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_4__["LogInComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'create', component: _create_cat_create_cat_component__WEBPACK_IMPORTED_MODULE_2__["CreateCatComponent"] },
    { path: 'viewAll', component: _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_7__["ViewAllComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"] },
    { path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"] },
    { path: 'view-cat/:id', component: _view_cat_info_view_cat_info_component__WEBPACK_IMPORTED_MODULE_12__["ViewCatInfoComponent"] },
    { path: 'Inbox', component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_13__["InboxComponent"] },
    { path: 'pm-view/:id', component: _pm_view_pm_view_component__WEBPACK_IMPORTED_MODULE_15__["PmViewComponent"] },
    { path: 'pm-create/:id', component: _pm_writer_pm_writer_component__WEBPACK_IMPORTED_MODULE_16__["PmWriterComponent"] },
    { path: 'rockets_page', component: _rockets_page_rockets_page_component__WEBPACK_IMPORTED_MODULE_17__["RocketsPageComponent"] },
    { path: '**', component: _incorrect_page_incorrect_page_component__WEBPACK_IMPORTED_MODULE_14__["IncorrectPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "\r\n\r\n\r\n\r\n  <app-naivagtion-bar></app-naivagtion-bar>\r\n  <router-outlet id=\"main\"></router-outlet>\r\n  \r\n\r\n\r\n<app-footer-bar></app-footer-bar>\r\n\r\n  \r\n\r\n  \r\n \r\n\r\n  \r\n\r\n\r\n\r\n"

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
        this.title = 'HomePage';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _naivagtion_bar_naivagtion_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./naivagtion-bar/naivagtion-bar.component */ "./src/app/naivagtion-bar/naivagtion-bar.component.ts");
/* harmony import */ var _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer-bar/footer-bar.component */ "./src/app/footer-bar/footer-bar.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/log-in/log-in.component.ts");
/* harmony import */ var _create_cat_create_cat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-cat/create-cat.component */ "./src/app/create-cat/create-cat.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view-all/view-all.component */ "./src/app/view-all/view-all.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _picture_slider_picture_slider_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./picture-slider/picture-slider.component */ "./src/app/picture-slider/picture-slider.component.ts");
/* harmony import */ var _search_options_search_options_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./search-options/search-options.component */ "./src/app/search-options/search-options.component.ts");
/* harmony import */ var _user_profile_card_user_profile_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-profile-card/user-profile-card.component */ "./src/app/user-profile-card/user-profile-card.component.ts");
/* harmony import */ var _message_template_message_template_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./message-template/message-template.component */ "./src/app/message-template/message-template.component.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _cat_card_cat_card_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cat-card/cat-card.component */ "./src/app/cat-card/cat-card.component.ts");
/* harmony import */ var _view_cat_info_view_cat_info_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./view-cat-info/view-cat-info.component */ "./src/app/view-cat-info/view-cat-info.component.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./inbox/inbox.component */ "./src/app/inbox/inbox.component.ts");
/* harmony import */ var _pm_template_pm_template_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pm-template/pm-template.component */ "./src/app/pm-template/pm-template.component.ts");
/* harmony import */ var _incorrect_page_incorrect_page_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./incorrect-page/incorrect-page.component */ "./src/app/incorrect-page/incorrect-page.component.ts");
/* harmony import */ var _pm_view_pm_view_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pm-view/pm-view.component */ "./src/app/pm-view/pm-view.component.ts");
/* harmony import */ var _pm_template2_pm_template2_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pm-template2/pm-template2.component */ "./src/app/pm-template2/pm-template2.component.ts");
/* harmony import */ var _pm_writer_pm_writer_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pm-writer/pm-writer.component */ "./src/app/pm-writer/pm-writer.component.ts");
/* harmony import */ var _rockets_page_rockets_page_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./rockets-page/rockets-page.component */ "./src/app/rockets-page/rockets-page.component.ts");
/* harmony import */ var _rocket_rocket_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./rocket/rocket.component */ "./src/app/rocket/rocket.component.ts");
/* harmony import */ var _services_kinvey_remote_service_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/kinvey-remote-service.service */ "./src/app/services/kinvey-remote-service.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _naivagtion_bar_naivagtion_bar_component__WEBPACK_IMPORTED_MODULE_4__["NaivagtionBarComponent"],
                _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_5__["FooterBarComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"],
                _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_8__["LogInComponent"],
                _create_cat_create_cat_component__WEBPACK_IMPORTED_MODULE_9__["CreateCatComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_14__["ViewAllComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_17__["MessagesComponent"],
                _picture_slider_picture_slider_component__WEBPACK_IMPORTED_MODULE_18__["PictureSliderComponent"],
                _search_options_search_options_component__WEBPACK_IMPORTED_MODULE_19__["SearchOptionsComponent"],
                _user_profile_card_user_profile_card_component__WEBPACK_IMPORTED_MODULE_20__["UserProfileCardComponent"],
                _message_template_message_template_component__WEBPACK_IMPORTED_MODULE_21__["MessageTemplateComponent"],
                _cat_card_cat_card_component__WEBPACK_IMPORTED_MODULE_23__["CatCardComponent"],
                _view_cat_info_view_cat_info_component__WEBPACK_IMPORTED_MODULE_24__["ViewCatInfoComponent"],
                _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_29__["InboxComponent"],
                _pm_template_pm_template_component__WEBPACK_IMPORTED_MODULE_30__["PmTemplateComponent"],
                _incorrect_page_incorrect_page_component__WEBPACK_IMPORTED_MODULE_31__["IncorrectPageComponent"],
                _pm_view_pm_view_component__WEBPACK_IMPORTED_MODULE_32__["PmViewComponent"],
                _pm_template2_pm_template2_component__WEBPACK_IMPORTED_MODULE_33__["PmTemplate2Component"],
                _pm_writer_pm_writer_component__WEBPACK_IMPORTED_MODULE_34__["PmWriterComponent"],
                _rockets_page_rockets_page_component__WEBPACK_IMPORTED_MODULE_35__["RocketsPageComponent"],
                _rocket_rocket_component__WEBPACK_IMPORTED_MODULE_36__["RocketComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_25__["NotifierModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_26__["ToastrModule"].forRoot({
                    timeOut: 3500,
                    positionClass: "toast-top-right"
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_28__["SlideshowModule"]
            ],
            providers: [_services_kinvey_remote_service_service__WEBPACK_IMPORTED_MODULE_37__["KinveyRemoteServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cat-card/cat-card.component.css":
/*!*************************************************!*\
  !*** ./src/app/cat-card/cat-card.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#listView{\r\n    background-color:white;\r\n    width:auto;\r\n    max-width:1100px;\r\n    height:auto;\r\n    float:right;\r\n    margin:20px; \r\n    position:relative;\r\n}\r\n\r\n.card{    \r\n    width:300px;\r\n    height:400px;\r\n    padding:10px;\r\n}\r\n\r\n#searchOptions{\r\n    height:auto;\r\n}\r\n\r\n#catCard{\r\n    width:490px;\r\n    border-width: 4px;\r\n    height: auto;\r\n    display:inline-block;\r\n    margin:10px 10px;\r\n    -webkit-animation: cardAppear 0.4s linear;\r\n            animation: cardAppear 0.4s linear;\r\n}\r\n\r\n#catPic{\r\n    display:flex;\r\n    width:300px;\r\n    flex-direction:column;\r\n}\r\n\r\n/* Overlay Left */\r\n\r\n#overlayLeft{\r\n    height:200px;\r\n    width:130px;\r\n    top:70px;\r\n    position:absolute;\r\n    opacity:0;\r\n    border-radius:4%;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    line-height: 200px;\r\n    font-size:125px;\r\n}\r\n\r\n#overlayLeft:hover{\r\n    opacity:1;\r\n    transition:0.3s;\r\n    -webkit-animation: colorChange 2.0s linear infinite;\r\n            animation: colorChange 2.0s linear infinite;\r\n    cursor: pointer;\r\n\r\n    -webkit-text-fill-color: white; /* Will override color (regardless of order) */\r\n    -webkit-text-stroke-width: 3px;\r\n    -webkit-text-stroke-color: black;\r\n}\r\n\r\n/* Overlay Right */\r\n\r\n#overlayRight{\r\n    height:200px;\r\n    width:130px;\r\n    right: 213px;\r\n    top:70px;\r\n    position:absolute;\r\n    opacity:0;\r\n    border-radius:4%;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    line-height: 200px;\r\n    font-size:125px;\r\n}\r\n\r\n#overlayRight:hover{\r\n    opacity:1;\r\n    transition:0.3s;\r\n    -webkit-animation: colorChange 2.0s linear infinite;\r\n            animation: colorChange 2.0s linear infinite;\r\n    cursor: pointer;\r\n\r\n    -webkit-text-fill-color: white; /* Will override color (regardless of order) */\r\n    -webkit-text-stroke-width: 3px;\r\n    -webkit-text-stroke-color: black;\r\n}\r\n\r\n#picture{\r\n    margin:10px auto;\r\n    border-style:solid;\r\n    border-radius:4%;\r\n    -webkit-animation: popIn2 0.5s linear;\r\n            animation: popIn2 0.5s linear;\r\n}\r\n\r\n#buttonCardCat{\r\n    margin:15px;\r\n    -webkit-transform: scale(1.01);\r\n            transform: scale(1.01);\r\n    position:relative;\r\n    right:-190px;\r\n    width:600px;\r\n    bottom: -20px;\r\n    background-color:green;\r\n    \r\n}\r\n\r\n#buttonCardCat:hover{\r\n-webkit-transform: scale(1.05);\r\n        transform: scale(1.05);\r\n}\r\n\r\n/* Information */\r\n\r\n#name{\r\n    font-weight:900;\r\n    width:auto;\r\n    margin:5px;   \r\n    height:40px;\r\n}\r\n\r\n#cas{\r\n    position:relative;\r\n    font-weight:900;\r\n    left: -60px;\r\n    width:auto;\r\n    margin:10px;   \r\n    height:40px;\r\n    font-size:20px;\r\n}\r\n\r\n#vac{\r\n    position:relative;\r\n    right:-50px;\r\n    font-weight:900;\r\n    width:auto;\r\n    margin:10px;   \r\n    height:40px;\r\n    font-size:20px;\r\n}\r\n\r\n#castrated{\r\n    width:auto;\r\n}\r\n\r\n#vaccinated{\r\n    width:auto;\r\n    \r\n}\r\n\r\n#location{\r\n    margin:5px;\r\n    width: 240px;\r\n    font-size:20px;\r\n    height:60px;\r\n}\r\n\r\n#breed{\r\n    position:relative;\r\n    right:-20px;\r\n    margin:5px;\r\n    width:460px;\r\n    font-size:20px;\r\n    height:60px;\r\n}\r\n\r\n#age{\r\n    margin:5px;\r\n    font-size:20px;\r\n    width:110px;\r\n    height:60px;\r\n}\r\n\r\n#information{\r\n    width:200px;\r\n    border-width:3px;\r\n    max-height:205px;\r\n    font-size:25px;\r\n    color:black;\r\n    resize:none;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden; \r\n}\r\n\r\n#wrapperInfo{\r\n    position:relative;\r\n    top:-10px;\r\n    right: -5px;\r\n    display:flex;\r\n    overflow: auto;\r\n    flex-direction:column;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    width:800px;\r\n}\r\n\r\n#etcWrapper{\r\n    display:flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n#etc2Wrapper{\r\n    display:flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n\r\n}\r\n\r\n#generalWrapper{\r\n    display:flex;\r\n    align-items: flex-end;\r\n}\r\n\r\n#titleWrapper{\r\n    display:flex;\r\n    justify-content: center;\r\n}\r\n\r\n#infoButton{\r\n    position:relative;\r\n    bottom: -3px;\r\n    right: 13px;;\r\n    border-width:2px;\r\n    border-style:solid;\r\n    border-color:black;\r\n    height:50px;\r\n    background-color:green;\r\n}\r\n\r\n#infoButton:hover{\r\n    -webkit-transform: scale(1.10);\r\n            transform: scale(1.10);\r\n}\r\n\r\n.legend{\r\n    \r\n}\r\n\r\n@-webkit-keyframes cardAppear{ 0%{opacity:0} 100%{opacity:100}}\r\n\r\n@keyframes cardAppear{ 0%{opacity:0} 100%{opacity:100}}\r\n\r\n@-webkit-keyframes colorChange{ 0%{color:white} 50%{color:green; } 100%{color: white}}\r\n\r\n@keyframes colorChange{ 0%{color:white} 50%{color:green; } 100%{color: white}}\r\n\r\n@-webkit-keyframes popIn2{ 0%{opacity:0; -webkit-transform: translate(0px, 5px); transform: translate(0px, 5px);} 100%{opacity:100;}}\r\n\r\n@keyframes popIn2{ 0%{opacity:0; -webkit-transform: translate(0px, 5px); transform: translate(0px, 5px);} 100%{opacity:100;}}"

/***/ }),

/***/ "./src/app/cat-card/cat-card.component.html":
/*!**************************************************!*\
  !*** ./src/app/cat-card/cat-card.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=isSorted() class=\"card\" id=\"catCard\">\r\n\r\n  <div id=\"titleWrapper\">\r\n    <h3 id=\"name\">{{cat.name}}<a *ngIf=\"isCreator()\">✔</a></h3>\r\n  </div>\r\n\r\n  <div id=\"generalWrapper\">\r\n    <!--Picture-->\r\n    <div id=\"catPic\">\r\n        <div id=\"overlayLeft\" (click)=\"funcMove('left')\">←</div>\r\n\r\n        <img *ngIf=\"is1()\" id=\"picture\" src= {{cat.imgUrl}}  alt=\"Smiley face\" height=\"200\" width=\"260\">\r\n        <img *ngIf=\"is2()\" id=\"picture\" src= {{cat.imgUrl2}}  alt=\"Smiley face \" height=\"200 \" width=\"260 \">\r\n        <img *ngIf=\"is3()\" id=\"picture\" src= {{cat.imgUrl3}}  alt=\"Smiley face \" height=\"200 \" width=\"260 \">\r\n        <img *ngIf=\"is4()\" id=\"picture\" src= {{cat.imgUrl4}}  alt=\"Smiley face \" height=\"200 \" width=\"260 \">\r\n\r\n        <div id=\"overlayRight\" (click)=\"funcMove('right')\">→</div>\r\n    </div>\r\n\r\n    <!--Information-->\r\n    <div id=\"wrapperInfo\">\r\n      <textarea id=\"information\" class=\"form-control\" rows=\"6\" >{{cat.information}}</textarea>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"etcWrapper\">\r\n    <div id=\"age\">Години:<br/>{{cat.age}}</div>\r\n    <div id=\"breed\">Порода:<br/>{{cat.breed}}</div>\r\n    <div id=\"location\">Област:<br/>{{cat.city}}</div>\r\n  </div>\r\n  \r\n  <div id=\"etc2Wrapper\">\r\n    <div *ngIf=\"isCastrated()\" id=\"cas\">Кастрирана</div>\r\n    <!--Button-->\r\n    <button type=\"button\" id=\"infoButton\" (click)=\"loadInfo()\" class=\"btn btn-success\">Информация</button>\r\n    <div *ngIf=\"isVaccinated()\" id=\"vac\">Ваксинирана</div>\r\n  </div>\r\n\r\n</div> \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/cat-card/cat-card.component.ts":
/*!************************************************!*\
  !*** ./src/app/cat-card/cat-card.component.ts ***!
  \************************************************/
/*! exports provided: CatCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatCardComponent", function() { return CatCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cat */ "./src/app/cat.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CatCardComponent = /** @class */ (function () {
    function CatCardComponent(router) {
        this.router = router;
        this.numberOfCats = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CatCardComponent.prototype.ngOnInit = function () {
        this.index = 1;
        this.picUrl = this.cat.imgUrl;
        console.log(this.searchOptions2);
    };
    CatCardComponent.prototype.loadInfo = function () {
        this.information = this.cat.information;
        var id = this.cat._id;
        this.router.navigate(["/view-cat/" + id]);
    };
    //VALIDATION TESTS
    CatCardComponent.prototype.isCastrated = function () {
        if (this.cat.castrated) {
            return true;
        }
    };
    CatCardComponent.prototype.isVaccinated = function () {
        if (this.cat.vaccinated) {
            return true;
        }
    };
    CatCardComponent.prototype.isCreator = function () {
        var user = localStorage.getItem("userId");
        var catCreator = this.cat._acl.creator;
        if (user === catCreator) {
            return true;
        }
    };
    //SORTING OPTIONS
    CatCardComponent.prototype.isSorted = function () {
        var searchAge = this.searchOptions2["age"];
        var castrated = this.searchOptions2["castrated"];
        var vaccinated = this.searchOptions2["vaccinated"];
        var breed = this.searchOptions2["breed"];
        var city = this.searchOptions2["city"];
        if (city === "Всички" && breed === "Всички") {
            if (this.cat.age >= searchAge &&
                this.cat.castrated === castrated &&
                this.cat.vaccinated === vaccinated) {
                return true;
            }
        }
        else if (city === "Всички") {
            if (this.cat.age >= searchAge &&
                this.cat.castrated === castrated &&
                this.cat.vaccinated === vaccinated &&
                this.cat.breed === breed) {
                return true;
            }
        }
        //if (this.cat.age >= searchAge && this.cat.castrated === castrated && this.cat.vaccinated === vaccinated && this.cat.breed === breed && this.cat.city===city){return true}
    };
    //SLIDER FUNC
    CatCardComponent.prototype.funcMove = function (input) {
        var index = this.index;
        if (input === "left") {
            func: {
                var index_1 = this.index;
                if (index_1 === 1) {
                    this.index = 4;
                    break func;
                }
                this.index--;
            }
        }
        else if (input === "right") {
            func: {
                var index_2 = this.index;
                if (index_2 === 4) {
                    this.index = 1;
                    break func;
                }
                this.index++;
            }
        }
    };
    //SLIDER CONDITIONS
    CatCardComponent.prototype.is1 = function () {
        var index = this.index;
        if (index === 1) {
            return true;
        }
    };
    CatCardComponent.prototype.is2 = function () {
        var index = this.index;
        if (index === 2) {
            return true;
        }
    };
    CatCardComponent.prototype.is3 = function () {
        var index = this.index;
        if (index === 3) {
            return true;
        }
    };
    CatCardComponent.prototype.is4 = function () {
        var index = this.index;
        if (index === 4) {
            return true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _cat__WEBPACK_IMPORTED_MODULE_1__["Cat"])
    ], CatCardComponent.prototype, "cat", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CatCardComponent.prototype, "searchOptions2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CatCardComponent.prototype, "numberOfCats", void 0);
    CatCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-cat-card",
            template: __webpack_require__(/*! ./cat-card.component.html */ "./src/app/cat-card/cat-card.component.html"),
            styles: [__webpack_require__(/*! ./cat-card.component.css */ "./src/app/cat-card/cat-card.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CatCardComponent);
    return CatCardComponent;
}());



/***/ }),

/***/ "./src/app/cat.ts":
/*!************************!*\
  !*** ./src/app/cat.ts ***!
  \************************/
/*! exports provided: Cat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cat", function() { return Cat; });
var Cat = /** @class */ (function () {
    function Cat(name, breed, age, contactNumber, information, imgUrl, vaccinated, castrated, city, imgUrl2, imgUrl3, imgUrl4, imgUrlTemp, _id, _acl) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.contactNumber = contactNumber;
        this.information = information;
        this.imgUrl = imgUrl;
        this.vaccinated = vaccinated;
        this.castrated = castrated;
        this.city = city;
        this.imgUrl2 = imgUrl2;
        this.imgUrl3 = imgUrl3;
        this.imgUrl4 = imgUrl4;
        this.imgUrlTemp = imgUrlTemp;
        this._id = _id;
        this._acl = _acl;
    }
    return Cat;
}());



/***/ }),

/***/ "./src/app/create-cat/create-cat.component.css":
/*!*****************************************************!*\
  !*** ./src/app/create-cat/create-cat.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#name{\r\n    width:200px;\r\n}\r\n\r\n#postKate{\r\n    font-size:35px;\r\n    color:green;\r\n    text-shadow: 2px 2px black;\r\n}\r\n\r\n#optionsDiv{\r\n    display:inline-block;\r\n    width:430px;\r\n    margin: 15px 150px;\r\n    text-align: center;\r\n}\r\n\r\n#optionsDiv2{\r\nwidth:430px;\r\n}\r\n\r\n#pageInfo{\r\n    width: 94%;\r\n    margin: 0 auto;\r\n}\r\n\r\n#flex{\r\n    display:flex;\r\n    justify-content: center;\r\n    flex-wrap:wrap;\r\n}\r\n\r\n/* Picture */\r\n\r\n#catPiture{\r\n    height:500px;\r\n    width:580px;\r\n    display:relative;\r\n    margin: 30px 150px;\r\n    border-radius:5%;\r\n    text-align:center;\r\n}\r\n\r\n#imagePreview2{\r\n    border-style:solid;\r\n    border-radius:5%;\r\n    background-color:white;\r\n    padding: 10px;\r\n    display:inline-block;\r\n    -webkit-animation: popIn 0.6s linear;\r\n            animation: popIn 0.6s linear;\r\n}\r\n\r\n/* Age */\r\n\r\n#age{\r\n    position:relative;\r\n    width:160px;\r\n    margin:10px 10px;\r\n    right:-11px;\r\n    top:-30px;\r\n}\r\n\r\nlabel{\r\n    font-size:25px;\r\n}\r\n\r\n/* Number */\r\n\r\n#number{\r\n    width:160px;\r\n    position:relative;\r\n    margin:10px 10px;\r\n    right: -11px;\r\n    top:-30px;\r\n}\r\n\r\n/* Desc */\r\n\r\n#desciption2{\r\n    width: 160px;\r\n    resize: none;\r\n    border-width:2px;\r\n    height:288px;\r\n}\r\n\r\n#informationDesc{\r\n    width:160px;\r\n    margin:10px 10px;\r\n    position: absolute;\r\n    left:212px;\r\n    top:70px;\r\n}\r\n\r\n#wrapperForDescAndNumb{\r\n    display: flex;\r\n    align-items: center;\r\n    height:70px;\r\n}\r\n\r\n/* Button */\r\n\r\n#buttonCreatePost{\r\n    background-color:green;\r\n    position:absolute;\r\n    bottom:10px;\r\n    width:350px;\r\n    left:+37px;\r\n    \r\n}\r\n\r\n/* Url */\r\n\r\n#imgUrl{\r\n   margin:auto;\r\n   text-align:center;\r\n   width:320px;\r\n}\r\n\r\n#imgUrl2{\r\n    width:320px;\r\n}\r\n\r\n#urlField{\r\n    margin: 5px 2px;\r\n    width:320px;\r\n    display:inline-block;\r\n}\r\n\r\n/* Name */\r\n\r\n#nameField{  \r\n    display:inline-block;\r\n    width:160px;\r\n    margin:10px 10px;\r\n}\r\n\r\n/* OptinsDiv */\r\n\r\n#optionsDiv{\r\n    width:430px;\r\n    height:900px;\r\n    display:flex;\r\n}\r\n\r\n#wrapper{\r\n    margin: 0 auto;\r\n}\r\n\r\n/* Breed */\r\n\r\n#breedSelector{\r\n    width:100%;\r\n    border-width:2px;\r\n    border-color:black;\r\n    \r\n}\r\n\r\n#breedField{\r\n    width:170px;\r\n    display:inline-block;\r\n}\r\n\r\n#breedLabel{\r\n    width:160px;\r\n}\r\n\r\n/* location */\r\n\r\n#cityField{\r\n    margin:auto; \r\n    width:160px;\r\n}\r\n\r\n#locationField{\r\n    width:160px;\r\n    display:inline-block;\r\n    margin:10px 10px;\r\n}\r\n\r\n#CitySelector{\r\n    border-width:2px;\r\n    border-color:black;\r\n    width:100%;\r\n    display: block;\r\n    margin: 0 auto;\r\n    text-align:center;\r\n}\r\n\r\nselect { width: 400px; text-align-last:center; }\r\n\r\n/* Vaccinated */\r\n\r\n#Vaccinated{\r\n   float:left;\r\n}\r\n\r\n/* Castrated */\r\n\r\n#Castrated{\r\n  float:right;\r\n  left:-30px;\r\n}\r\n\r\n/* Arrow Left */\r\n\r\n#arrowLeft{\r\n    display:inline-block;\r\n    position:relative;\r\n    left:-380px;\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n    margin: 10px 10px;\r\n    cursor: pointer;\r\n    min-height:110px;\r\n    min-width:200px;\r\n}\r\n\r\n#arrowLeft:hover{\r\n    -webkit-transform:scale(1.18) rotate(180deg);\r\n            transform:scale(1.18) rotate(180deg);\r\n    transition: 0.7s;\r\n}\r\n\r\n/* Arrow Rigth */\r\n\r\n#arrowRigth{\r\n    display:inline-block;\r\n    position:relative;\r\n    right:-380px;\r\n    margin: 10px 10px;\r\n    cursor: pointer;\r\n    min-height:110px;\r\n    min-width:200px;\r\n}\r\n\r\n#arrowRigth:hover{\r\n    -webkit-transform:scale(1.18);\r\n            transform:scale(1.18);\r\n    transition: 0.7s;\r\n}\r\n\r\n/*arrowWrapper */\r\n\r\n#arrowWrapper{\r\n    display:flex;\r\n}\r\n\r\n#indexNumber{\r\n    font-size:100px;\r\n}\r\n\r\n#buttonCreatePost:hover{\r\n-webkit-transform: scale(1.12);\r\n        transform: scale(1.12);\r\n\r\n  outline: 0;\r\n  box-shadow: inset 5px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\r\n}\r\n\r\n/* Animations */\r\n\r\n@-webkit-keyframes popIn\r\n{ \r\n    0%{\r\n        opacity:0;\r\n        -webkit-transform: translate(0px, 10px);\r\n                transform: translate(0px, 10px);\r\n    } \r\n    100%{\r\n        opacity:100;\r\n        \r\n    }\r\n\r\n}\r\n\r\n@keyframes popIn\r\n{ \r\n    0%{\r\n        opacity:0;\r\n        -webkit-transform: translate(0px, 10px);\r\n                transform: translate(0px, 10px);\r\n    } \r\n    100%{\r\n        opacity:100;\r\n        \r\n    }\r\n\r\n}\r\n\r\n    \r\n\r\n\r\n\r\n\r\n    "

/***/ }),

/***/ "./src/app/create-cat/create-cat.component.html":
/*!******************************************************!*\
  !*** ./src/app/create-cat/create-cat.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pageInfo\">\r\n    <form id=\"flex\" #form=\"ngForm\">\r\n      <div class=\"card\" id=\"optionsDiv\">\r\n        <div id=\"optionsDiv2\" class=\"card-body\">\r\n          <!--Title-->\r\n          <legend id=\"postKate\">Информация За Котката</legend>\r\n          \r\n          <!--Name-->\r\n          <div class=\"form-group\" id=\"name\">\r\n            <label for=\"exampleInputPassword1\">Заглавие\r\n              <br/>\r\n              <input type=\"String\" class=\"form-control\" id=\"nameField\" placeholder=\"Title\" required [(ngModel)]=\"model.name\" name=\"name\">\r\n            </label>\r\n          </div>\r\n          <!--Age-->\r\n          <div class=\"form-group\" id=\"age\">\r\n              <label for=\"exampleInputPassword1\">Възраст години \r\n                <input type=\"Number\" class=\"form-control\" id=\"ageField\" placeholder=\"Age\" required [(ngModel)]=\"model.age\" name=\"age\">\r\n              </label>\r\n          </div>\r\n          \r\n          <div id=\"wrapperForDescAndNumb\">\r\n            <!--Number-->\r\n            <label for=\"exampleInputPassword1\" id=\"number\"> Номер за връзка <br />\r\n              <input type=\"Number\" class=\"form-control\" id=\"numberField\" placeholder=\"Number\" required [(ngModel)]=\"model.contactNumber\" name=\"contactNumber\">\r\n            </label>\r\n            \r\n            <!--Description-->\r\n            <label for=\"exampleTextarea\" id=\"informationDesc\">Информация \r\n              <textarea class=\"form-control\" id=\"desciption2\" placeholder=\"Може да се промени след като е публикувана\" rows=\"8\" required [(ngModel)]=\"model.information\" name=\"information\"></textarea>\r\n            </label>\r\n          </div>\r\n          \r\n          <!--Location-->\r\n          <div class=\"form-group\" id=\"locationField\">\r\n            <label for=\"exampleInputPassword1\" id=\"cityField\">Регион:\r\n              <br />\r\n              <select id=\"CitySelector\" placeholder=\"улична\" required [(ngModel)]=\"model.city\" name=\"city\">\r\n                <option *ngFor=\"let c of cities\" [value]=\"c\">{{c}}</option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          \r\n          <!--Breed-->\r\n          <div class=\"form-group\" id=\"breedField\" >\r\n            <label for=\"exampleInputPassword1\" id=\"breedLabel\">Порода: <br />\r\n              <select id=\"breedSelector\" placeholder=\"улична\" required [(ngModel)]=\"model.breed\" name=\"breed\">\r\n                <option *ngFor=\"let b of breeds\" [value]=\"b\">{{b}}</option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n          \r\n          <!--ImgUrl-->\r\n          <div class=\"form-group\" id=\"imgUrl\">\r\n            <label for=\"exampleInputPassword1\" id=\"imgUrl2\">Линк за снимка<br />\r\n              <input type=\"text\" class=\"form-control\" id=\"urlField\" placeholder=\"Линк 1\" required [(ngModel)]=\"model.imgUrl\" #imgUrl=\"ngModel\" name=\"imgUrl\">\r\n              <input type=\"text\" class=\"form-control\" id=\"urlField\" placeholder=\"Линк 2 незадължителен\" required [(ngModel)]=\"model.imgUrl2\" #imgUrl=\"ngModel\" name=\"imgUrl2\">\r\n              <input type=\"text\" class=\"form-control\" id=\"urlField\" placeholder=\"Линк 3 незадължителен\" required [(ngModel)]=\"model.imgUrl3\" #imgUrl=\"ngModel\" name=\"imgUrl3\">\r\n              <input type=\"text\" class=\"form-control\" id=\"urlField\" placeholder=\"Линк 4 незадължителен\" required [(ngModel)]=\"model.imgUrl4\" #imgUrl=\"ngModel\" name=\"imgUrl4\">\r\n            </label>\r\n          </div>\r\n\r\n          <!--Vacinated-->\r\n          <div class=\"form-check\" id=\"Vaccinated\">\r\n            <label class=\"form-check-label\" >\r\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\" required [(ngModel)]=\"model.vaccinated\" #imgUrl=\"ngModel\" name=\"vaccinated\"> Ваксинирана\r\n            </label>\r\n          </div>\r\n\r\n          <!--Castrated-->\r\n          <div class=\"form-check\" id=\"Castrated\">\r\n            <label class=\"form-check-label\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\" required [(ngModel)]=\"model.castrated\" #imgUrl=\"ngModel\" name=\"castrated\"> Кастрирана\r\n            </label>\r\n          </div>  \r\n          \r\n          <!--Button-->\r\n          <button type=\"submit\" id=\"buttonCreatePost\" (click)=\"createCat()\" class=\"btn btn-primary\">Създай</button>\r\n        </div>\r\n      </div>\r\n      \r\n      <!--Picture Preview-->\r\n      <div id=\"catPiture\">\r\n        <legend>Преглед На Снимки</legend>\r\n        <a *ngIf=\"is1()\"><img src = {{model.imgUrl}}  id=\"imagePreview2\" height=\"500\" width=\"580\" alt=\"Неправилен link\"></a>\r\n        <a *ngIf=\"is2()\"><img src = {{model.imgUrl2}} id=\"imagePreview2\" height=\"500\" width=\"580\" alt=\"Неправилен link\"></a>\r\n        <a *ngIf=\"is3()\"><img src = {{model.imgUrl3}} id=\"imagePreview2\" height=\"500\" width=\"580\" alt=\"Неправилен link\"></a>\r\n        <a *ngIf=\"is4()\"><img src = {{model.imgUrl4}} id=\"imagePreview2\" height=\"500\" width=\"580\" alt=\"Неправилен link\"></a>\r\n        <div id=\"arrowWrapper\">\r\n        <img (click)=\"right()\" src=\"http://oi68.tinypic.com/1q1seo.jpg\" id=\"arrowRigth\" height=\"110\" width=\"200\" alt=\"catProfilePic\">\r\n        <legend id=\"indexNumber\">{{imgIndex}}</legend>\r\n        <img (click)=\"left()\" src=\"http://oi68.tinypic.com/1q1seo.jpg\" id=\"arrowLeft\" height=\"110\" width=\"200\" alt=\"catProfilePic\">\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </form>\r\n</div>\r\n          \r\n          \r\n\r\n\r\n\r\n\r\n  \r\n  \r\n"

/***/ }),

/***/ "./src/app/create-cat/create-cat.component.ts":
/*!****************************************************!*\
  !*** ./src/app/create-cat/create-cat.component.ts ***!
  \****************************************************/
/*! exports provided: CreateCatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCatComponent", function() { return CreateCatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cat */ "./src/app/cat.ts");
/* harmony import */ var _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/kinvey-remote-service.service.js */ "./src/app/services/kinvey-remote-service.service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//public name: string,
//public breed: string,
//public age: number,
//public contactNumber: number,
//public information: string,
//public imgUrl: string,
var CreateCatComponent = /** @class */ (function () {
    function CreateCatComponent(remote, router, toastr) {
        this.remote = remote;
        this.router = router;
        this.toastr = toastr;
        this.model = new _cat__WEBPACK_IMPORTED_MODULE_1__["Cat"]("", "", 0, 359, "", "https://cdn.pixabay.com/photo/2016/08/10/14/39/cat-1583459__340.png", "", "", "", "https://cdn.pixabay.com/photo/2016/08/10/14/39/cat-1583459__340.png", "https://cdn.pixabay.com/photo/2016/08/10/14/39/cat-1583459__340.png", "https://cdn.pixabay.com/photo/2016/08/10/14/39/cat-1583459__340.png");
        this.url = this.model.imgUrl;
    }
    CreateCatComponent.prototype.createCat = function () {
        var _this = this;
        //VARIABLES
        var name = this.model.name;
        var age = this.model.age;
        var contactNumber = this.model.contactNumber;
        var imgUrl = this.model.imgUrl;
        var imgUrl2 = this.model.imgUrl2;
        var imgUrl3 = this.model.imgUrl3;
        var imgUrl4 = this.model.imgUrl4;
        var breed = this.model.breed;
        var information = this.model.information;
        var vaccinated = this.model.vaccinated;
        var castrated = this.model.castrated;
        var city = this.model.city;
        //VALIDATION
        if (name === "" ||
            breed === "" ||
            age <= 0 ||
            contactNumber < 0 ||
            information === "" ||
            imgUrl === "" ||
            imgUrl2 === "" ||
            imgUrl3 === "" ||
            imgUrl4 === "") {
            this.toastr.error("Fields Should Not Be Empty!");
        }
        else if (information.length > 380) {
            this.toastr.error("Information Should Be Less!");
        }
        else if (age > 17) {
            this.toastr.error("Cat Should Be Alive!");
        }
        else if (contactNumber.toString().length < 8) {
            this.toastr.error("Provide a valid number!");
        }
        else {
            this.toastr.info("Creating Cat");
            this.remote
                .CreateCat(name, breed, age, contactNumber, information, imgUrl, imgUrl2, imgUrl3, imgUrl4, vaccinated, castrated, city)
                .subscribe(function (data) {
                _this.router.navigate(["viewAll"]);
                _this.toastr.success("Cat Created Succesfully!");
            }, function (error) {
                console.log(error);
                _this.toastr.error(error.statusText);
            });
        }
    };
    CreateCatComponent.prototype.test2 = function () { };
    //SLIDER
    //ON ERROR
    CreateCatComponent.prototype.standby = function () {
        this.toastr.info("Incorrect image link!");
    };
    //INDEX LOGIC
    CreateCatComponent.prototype.right = function () {
        func: {
            var index = this.imgIndex;
            if (index === 4) {
                this.imgIndex = 1;
                break func;
            }
            this.imgIndex++;
        }
    };
    CreateCatComponent.prototype.left = function () {
        func: {
            var index = this.imgIndex;
            if (index === 1) {
                this.imgIndex = 4;
                break func;
            }
            this.imgIndex--;
        }
    };
    //CONDITIONS
    CreateCatComponent.prototype.is1 = function () {
        var index = this.imgIndex;
        if (index === 1) {
            return true;
        }
    };
    CreateCatComponent.prototype.is2 = function () {
        var index = this.imgIndex;
        if (index === 2) {
            return true;
        }
    };
    CreateCatComponent.prototype.is3 = function () {
        var index = this.imgIndex;
        if (index === 3) {
            return true;
        }
    };
    CreateCatComponent.prototype.is4 = function () {
        var index = this.imgIndex;
        if (index === 4) {
            return true;
        }
    };
    CreateCatComponent.prototype.ngOnInit = function () {
        this.breeds = [
            "Улична",
            "Девон рекс",
            "Герман Рекс",
            "Манкс",
            "Шотландска клепоуха котка",
            "Японски бобтейл",
            "Ориенталска котка",
            "Норвежска горска котка",
            "Персийска котка",
            "Европейска късокосместа котка",
            "Мейн Куун",
            "Сиамска котка",
            "Кимрик",
            "Регдол",
            "Турска ангорска котка",
            "Сибирска котка",
            "Сомалийска котка",
            "Руска синя котка",
            "Бурманска котка",
            "Британска късокосместа котка",
            "Бирманска котка",
            "Абисинска котка",
            "Персийска котка"
        ];
        this.cities = [
            "Благоевград",
            "Бургас",
            "Варна",
            "Велико Търново",
            "Видин",
            "Враца",
            "Габрово",
            "Добрич",
            "Кърджали",
            "Кюстендил",
            "Ловеч",
            "Монтана",
            "Пазарджик",
            "Перник",
            "Плевен",
            "Пловдив",
            "Разград",
            "Русе",
            "Силистра",
            "Сливен",
            "Смолян",
            "София",
            "Стара Загора",
            "Търговище",
            "Хасково",
            "Шумен",
            "Ямбол"
        ];
        this.model.city = "София";
        this.model.breed = "Улична";
        this.imgIndex = 1;
    };
    CreateCatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-create-cat",
            template: __webpack_require__(/*! ./create-cat.component.html */ "./src/app/create-cat/create-cat.component.html"),
            styles: [__webpack_require__(/*! ./create-cat.component.css */ "./src/app/create-cat/create-cat.component.css")]
        }),
        __metadata("design:paramtypes", [_services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__["KinveyRemoteServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], CreateCatComponent);
    return CreateCatComponent;
}());



/***/ }),

/***/ "./src/app/footer-bar/footer-bar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/footer-bar/footer-bar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#p{\r\n    color:black;\r\n    font-weight: 900;\r\n   \r\n}\r\n"

/***/ }),

/***/ "./src/app/footer-bar/footer-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/footer-bar/footer-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"fixed-bottom\" id =\"footer\">\r\n  \r\n    Cat WorldBG 2018\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/footer-bar/footer-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/footer-bar/footer-bar.component.ts ***!
  \****************************************************/
/*! exports provided: FooterBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBarComponent", function() { return FooterBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterBarComponent = /** @class */ (function () {
    function FooterBarComponent() {
    }
    FooterBarComponent.prototype.ngOnInit = function () {
    };
    FooterBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-bar',
            template: __webpack_require__(/*! ./footer-bar.component.html */ "./src/app/footer-bar/footer-bar.component.html"),
            styles: [__webpack_require__(/*! ./footer-bar.component.css */ "./src/app/footer-bar/footer-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterBarComponent);
    return FooterBarComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#p{\r\n\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pageInfo\">\r\n  home works!\r\n<div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/inbox/inbox.component.css":
/*!*******************************************!*\
  !*** ./src/app/inbox/inbox.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#inboxHolder{\r\n    width:1400px;\r\n    height: 1000px;\r\n    background-color:white;\r\n    margin:auto;\r\n    border-radius:2%;\r\n    border-width:4px;\r\n    border-color:black;\r\n    border-style:solid;\r\n    overflow: auto;\r\n}\r\n\r\n/* Scroll */\r\n\r\n/* allMessages */\r\n\r\n#allMessages{\r\n    \r\n    height:800px;\r\n    width:1300px;\r\n    margin:40px auto;\r\n}\r\n\r\n/*Message Template URL*/\r\n\r\n#message{\r\n    width:1300px;\r\n    margin: 10px auto;\r\n    display: flex;\r\n    background-color:white;\r\n}\r\n\r\n/* Divs */\r\n\r\n#Title{\r\n    display:inline-block;\r\n    color:black;\r\n    font-weight: 900;\r\n    margin: 0px 5px;\r\n    text-align:center;\r\n    white-space: pre;\r\n    max-width:200px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n#Info{\r\n    display:inline-block;\r\n    font-weight:900;\r\n    margin: 0px 5px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    max-width: 760px;\r\n    text-align:center;\r\n\r\n}\r\n\r\n#Date{\r\n    display: inline-block;\r\n    font-weight:900;\r\n    margin: 0px 5px;\r\n    max-width:400px;\r\n    width:300px;\r\n    text-align:center;\r\n}\r\n\r\n/* Delete Button */\r\n\r\n#Delete{\r\n    display:none;\r\n    position:relative;\r\n    right:5px;\r\n    width:auto;\r\n    height:30px;\r\n    bottom:-7px;\r\n    font-weight:900;\r\n    margin: 0px 5px;\r\n    color:red;\r\n    background-color:transparent;\r\n    border-style:none;\r\n}\r\n\r\n@-webkit-keyframes ants { 0%{-webkit-transform: scale(1);transform: scale(1);} 50%{-webkit-transform: scale(2);transform: scale(2); color:blue;} 100%{-webkit-transform: scale(1);transform: scale(1);} }\r\n\r\n@keyframes ants { 0%{-webkit-transform: scale(1);transform: scale(1);} 50%{-webkit-transform: scale(2);transform: scale(2); color:blue;} 100%{-webkit-transform: scale(1);transform: scale(1);} }"

/***/ }),

/***/ "./src/app/inbox/inbox.component.html":
/*!********************************************!*\
  !*** ./src/app/inbox/inbox.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"inboxHolder\">\r\n  \r\n  \r\n  <div id=\"message\">\r\n    <legend id=\"Title\">Потребител</legend>\r\n    <legend id=\"Info\">Обява</legend>\r\n    <legend id=\"Date\">Дата</legend>\r\n  </div>\r\n  \r\n  <div id=\"allMessages\">\r\n    <app-pm-template  *ngFor=\"let m of messages\"  [message]=\"m\" (deletedMessage)=\"getMessegesAgain($event)\"></app-pm-template>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/inbox/inbox.component.ts":
/*!******************************************!*\
  !*** ./src/app/inbox/inbox.component.ts ***!
  \******************************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return InboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/kinvey-remote-service.service.js */ "./src/app/services/kinvey-remote-service.service.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InboxComponent = /** @class */ (function () {
    function InboxComponent(remote) {
        this.remote = remote;
    }
    InboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.remote.GetAllMessages().subscribe(function (data) {
            var tempArr = [];
            var length = Object.keys(data).length;
            for (var i = length - 1; i >= 0; i--) {
                console.log(data[i]);
                if (localStorage.getItem("userId") === data[i].receiver) {
                    tempArr.push(data[i]);
                }
                _this.messages = tempArr;
            }
        });
    };
    InboxComponent.prototype.getMessegesAgain = function () {
        this.ngOnInit();
    };
    InboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-inbox",
            template: __webpack_require__(/*! ./inbox.component.html */ "./src/app/inbox/inbox.component.html"),
            styles: [__webpack_require__(/*! ./inbox.component.css */ "./src/app/inbox/inbox.component.css")]
        }),
        __metadata("design:paramtypes", [_services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_1__["KinveyRemoteServiceService"]])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "./src/app/incorrect-page/incorrect-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/incorrect-page/incorrect-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Wrapper{\r\n    width:auto;\r\n    height:auto;\r\n    margin:auto 60px;\r\n    display:inline-block;\r\n}\r\n\r\n#image{\r\n    display:inline-block;\r\n}\r\n\r\n#Woah{\r\n    width:300px;\r\n    position:absolute;\r\n    display:inline-block;\r\n    font-size:40px;\r\n}\r\n\r\n#textDiv{\r\n    width:300;\r\n    background-color:blue;\r\n    margin: 190px 30px;\r\n}\r\n\r\n#realWrapper{\r\n    width: 70%;\r\n    margin: 30px auto;\r\n    display:flex;\r\n    background-color:white;\r\n    padding:20px;\r\n    border-radius:3%;\r\n    border-style:solid;\r\n}"

/***/ }),

/***/ "./src/app/incorrect-page/incorrect-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/incorrect-page/incorrect-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"realWrapper\">\r\n  \r\n  <div id=\"Wrapper\">\r\n    <img id=\"image\" src=\"https://novacatclinic.com/wp-content/uploads/2016/12/AdobeStock_103344931.jpeg\" alt=\"Smiley face\" height=\"700\" width=\"520\">\r\n  </div>\r\n\r\n  <div id=\"textDiv\">\r\n    <legend id=\"Woah\">Wooah, where are you going? The page you want to access doesn't exist.</legend>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/incorrect-page/incorrect-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/incorrect-page/incorrect-page.component.ts ***!
  \************************************************************/
/*! exports provided: IncorrectPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncorrectPageComponent", function() { return IncorrectPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IncorrectPageComponent = /** @class */ (function () {
    function IncorrectPageComponent() {
    }
    IncorrectPageComponent.prototype.ngOnInit = function () {
    };
    IncorrectPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incorrect-page',
            template: __webpack_require__(/*! ./incorrect-page.component.html */ "./src/app/incorrect-page/incorrect-page.component.html"),
            styles: [__webpack_require__(/*! ./incorrect-page.component.css */ "./src/app/incorrect-page/incorrect-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IncorrectPageComponent);
    return IncorrectPageComponent;
}());



/***/ }),

/***/ "./src/app/log-in/log-in.component.css":
/*!*********************************************!*\
  !*** ./src/app/log-in/log-in.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#logInForm{\r\n    width:450px;\r\n    margin: auto;\r\n    \r\n   \r\n    padding: 10px;\r\n}\r\n\r\n#buttonLogIn:hover{\r\n-webkit-transform: scale(1.12);\r\n        transform: scale(1.12);\r\n\r\n  outline: 0;\r\n  box-shadow: inset 5px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\r\n}\r\n\r\n#buttonLogIn{\r\n    background-color:green;\r\n    width:100px;\r\n    margin: auto;\r\n}\r\n\r\n#loginCard{\r\n    height:350px;\r\n    width:auto;\r\n    padding:10px;\r\n    text-align:center;\r\n    width:350px;\r\n\r\n}"

/***/ }),

/***/ "./src/app/log-in/log-in.component.html":
/*!**********************************************!*\
  !*** ./src/app/log-in/log-in.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\r\n<div id=\"pageInfo\">\r\n  <div id=\"logInForm\">\r\n    <form>\r\n      <fieldset>\r\n      <form #form=\"ngForm\">\r\n        <div class=\"card\" id=\"loginCard\">\r\n              <div class=\"form-group row\">\r\n\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Username</label>\r\n                <input type=\"text\"  class=\"form-control\" id=\"exampleInputUserName\"   placeholder=\"Enter Username\" id=\"userName\" required [(ngModel)]=\"model.username\" name=\"username\">\r\n              \r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Enter Password\" [(ngModel)]=\"model.password\" name=\"password\">\r\n              </div>\r\n              \r\n              <button type=\"submit\" id=\"buttonLogIn\" (click)=\"testFunc()\" class=\"btn btn-primary\">Log In</button>\r\n        </div>\r\n        </form>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</div>\r\n</form>\r\n\r\n\r\n            \r\n        \r\n       \r\n        \r\n"

/***/ }),

/***/ "./src/app/log-in/log-in.component.ts":
/*!********************************************!*\
  !*** ./src/app/log-in/log-in.component.ts ***!
  \********************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/kinvey-remote-service.service.js */ "./src/app/services/kinvey-remote-service.service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// public id:
// public userName:
// public password:
// public picUrl:
var LogInComponent = /** @class */ (function () {
    function LogInComponent(remote, router, toastr) {
        this.remote = remote;
        this.router = router;
        this.toastr = toastr;
        this.model = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]("", "", null, null);
    }
    //FUNCTIONS
    LogInComponent.prototype.testFunc = function () {
        var _this = this;
        //VALIDATION
        if (this.model.username === "" || this.model.password === "") {
            this.toastr.error("Fields should not be empty");
        }
        else if (sessionStorage.length != 0 &&
            sessionStorage.getItem("username") != "Guest2") {
            this.toastr.error("Already Logged In!");
            this.router.navigate(["/viewAll"]);
        }
        else {
            this.toastr.info("Logging in!");
            this.remote.login(this.model.username, this.model.password).subscribe(function (userData) {
                _this.remote.saveSession(userData);
                _this.toastr.success("Logged in!");
                location.reload();
                _this.router.navigate(["/about"]);
            }, function (error) {
                _this.toastr.error("LogIn Error");
            });
        }
    };
    LogInComponent.prototype.submit = function () { };
    LogInComponent.prototype.ngOnInit = function () { };
    LogInComponent.prototype.ngOnChange = function () { };
    LogInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-log-in",
            template: __webpack_require__(/*! ./log-in.component.html */ "./src/app/log-in/log-in.component.html"),
            styles: [__webpack_require__(/*! ./log-in.component.css */ "./src/app/log-in/log-in.component.css")],
            providers: [_services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__["KinveyRemoteServiceService"]]
        }),
        __metadata("design:paramtypes", [_services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__["KinveyRemoteServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ "./src/app/message-template/message-template.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/message-template/message-template.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tempalteMessage{\r\n    width:1050px;\r\n    height:auto;\r\n    margin:10px auto;\r\n\r\n}\r\n\r\n#buttonDelete{\r\n    border-radius:5px;\r\n    border-style:solid;\r\n    border-color:black;\r\n    background-color:darkred;\r\n    margin:auto;\r\n    width:300px;\r\n}\r\n\r\n#buttonDelete:hover{\r\n-webkit-transform: scale(1.20);\r\n        transform: scale(1.20);\r\n  background-color:rgb(110, 3, 3);\r\n\r\n  outline: 0;\r\n  box-shadow: inset 5px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\r\n  \r\n}"

/***/ }),

/***/ "./src/app/message-template/message-template.component.html":
/*!******************************************************************!*\
  !*** ./src/app/message-template/message-template.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"tempalteMessage\" class=\"card\">\r\n  <div class=\"card-body\">\r\n    <legend>By Cat World</legend>\r\n    <p class=\"card-text\">{{message.message}}</p>\r\n    <a *ngIf=\"isAuth()\" class=\"navbar-nav mr-auto\"><button type=\"submit\" id=\"buttonDelete\" (click)=\"deleteFunc()\" class=\"btn btn-primary\">Delete</button></a>\r\n  </div>\r\n</div>\r\n    \r\n    "

/***/ }),

/***/ "./src/app/message-template/message-template.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/message-template/message-template.component.ts ***!
  \****************************************************************/
/*! exports provided: MessageTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageTemplateComponent", function() { return MessageTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message */ "./src/app/message.ts");
/* harmony import */ var _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/kinvey-remote-service.service.js */ "./src/app/services/kinvey-remote-service.service.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageTemplateComponent = /** @class */ (function () {
    function MessageTemplateComponent(remote, toastr) {
        this.remote = remote;
        this.toastr = toastr;
        this.changedMessages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MessageTemplateComponent.prototype.deleteFunc = function () {
        var _this = this;
        console.log("delete");
        var id = this.message._id;
        this.remote.DeleteMessageById(id).subscribe(function (data) {
            _this.toastr.success("Message Deleted");
            _this.changedMessages.emit(_this.message);
        }, function (error) {
            _this.toastr.error("Failed");
        });
    };
    MessageTemplateComponent.prototype.isAuth = function () {
        if (sessionStorage.getItem("isAdmin") === "Yes") {
            return true;
        }
    };
    MessageTemplateComponent.prototype.ngOnInit = function () {
        console.log(this.message._id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _message__WEBPACK_IMPORTED_MODULE_1__["Message"])
    ], MessageTemplateComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MessageTemplateComponent.prototype, "changedMessages", void 0);
    MessageTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-message-template",
            template: __webpack_require__(/*! ./message-template.component.html */ "./src/app/message-template/message-template.component.html"),
            styles: [__webpack_require__(/*! ./message-template.component.css */ "./src/app/message-template/message-template.component.css")]
        }),
        __metadata("design:paramtypes", [_services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__["KinveyRemoteServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], MessageTemplateComponent);
    return MessageTemplateComponent;
}());



/***/ }),

/***/ "./src/app/message.ts":
/*!****************************!*\
  !*** ./src/app/message.ts ***!
  \****************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(message, open, catId, catName, madeDate, senderName, receiver, sender, _kmd, _acl, _id) {
        this.message = message;
        this.open = open;
        this.catId = catId;
        this.catName = catName;
        this.madeDate = madeDate;
        this.senderName = senderName;
        this.receiver = receiver;
        this.sender = sender;
        this._kmd = _kmd;
        this._acl = _acl;
        this._id = _id;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#messages{\r\n\r\n   width:1100px;\r\n   min-height:300px;\r\n   height: auto;\r\n   background-color:white;\r\n   margin:10px auto;\r\n\r\n}\r\n\r\n#title{\r\n    text-align:center;\r\n    font-weight:900;\r\n}"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pageInfo\">\r\n  <div class=\"card\" id=\"messages\">\r\n  <h3 id=\"title\">Message Board</h3>\r\n  <app-message-template *ngFor=\"let m of messages\" (changedMessages)=\"getMessagesAgain($event)\" [message]=\"m\"></app-message-template>\r\n  \r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/kinvey-remote-service.service.js */ "./src/app/services/kinvey-remote-service.service.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(remote) {
        this.remote = remote;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.remote.GetAllMessages().subscribe(function (data) {
            _this.messages = data;
        });
    };
    MessagesComponent.prototype.getMessagesAgain = function () {
        var _this = this;
        this.remote.GetAllMessages().subscribe(function (data) {
            _this.messages = data;
        });
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-messages",
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_1__["KinveyRemoteServiceService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/naivagtion-bar/naivagtion-bar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/naivagtion-bar/naivagtion-bar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbarColor01{\r\n    background-color:green;\r\n}   \r\n\r\n/* Messages */   \r\n\r\n#privateMessages{\r\n    float:left;\r\n}   \r\n\r\n#messagesLabel{\r\n   font-size:30px;\r\n}   \r\n\r\n#pmImage:hover{\r\n-webkit-transform: scale(1.10);\r\n        transform: scale(1.10);\r\n}   \r\n\r\n#pmImage{\r\n    border-radius: 30%;\r\n    border-style:solid;\r\n    background-color:green;\r\n}   \r\n\r\n#numberOfMessages{\r\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\r\n    font-size:35px;\r\n    text-align: center;\r\n    text-align: 0px auto;\r\n    -webkit-animation: newMsg 2.5s linear infinite;\r\n            animation: newMsg 2.5s linear infinite;\r\n}   \r\n\r\n#numberOfMessages:hover{\r\n   color:black;\r\n}   \r\n\r\n/* ProfilePic */   \r\n\r\n#profilePic{\r\n    display:inline-block;\r\n    font-size:30px;\r\n    height:auto;\r\n}   \r\n\r\n#profilePic:hover{\r\n    \r\n}   \r\n\r\n#ProfilePicImage{\r\n    border-radius: 30%;\r\n    border-style:solid;\r\n}   \r\n\r\n#ProfilePicImage:hover{\r\n-webkit-transform: scale(1.10);\r\n        transform: scale(1.10);\r\n}   \r\n\r\n/* All Items Hover */   \r\n\r\n.nav-item:hover a{\r\n    -webkit-transform: scale(1.10);\r\n            transform: scale(1.10);\r\n    border-style:solid;\r\n    border-color:lightgray;\r\n    border-width:2px;\r\n}   \r\n\r\n/* All Items */   \r\n\r\n.nav-item{\r\n    font-size: 30px;\r\n}   \r\n\r\n/* Logout */   \r\n\r\n#logout{\r\n     cursor: pointer; \r\n}   \r\n\r\n/* Brand */   \r\n\r\n#brand{\r\n    font-size: 50px;\r\n    color:green;\r\n    font-weight:900;\r\n    text-shadow: 2px 2px black;\r\n    -webkit-animation: logoAnimation 4s linear infinite;\r\n            animation: logoAnimation 4s linear infinite;\r\n}   \r\n\r\n/* Seperator */   \r\n\r\n#seperator{\r\n    font-size:40px;\r\n    float:right;\r\n}   \r\n\r\n/* NavBar */   \r\n\r\n#navBar{\r\n    margin: 10px 20px;\r\n    border-width:4px;\r\n    white-space: nowrap;\r\n}   \r\n\r\n/* Animations */   \r\n\r\n@-webkit-keyframes sad { 0%{-webkit-transform: scale(1);transform: scale(1);} 50%{-webkit-transform: scale(1.15);transform: scale(1.15);} 100%{-webkit-transform: scale(1);transform: scale(1);} }   \r\n\r\n@keyframes sad { 0%{-webkit-transform: scale(1);transform: scale(1);} 50%{-webkit-transform: scale(1.15);transform: scale(1.15);} 100%{-webkit-transform: scale(1);transform: scale(1);} }   \r\n\r\n@-webkit-keyframes logoAnimation { 0%{-webkit-transform: scale(1);transform: scale(1);} 50%{-webkit-transform: scale(1.15);transform: scale(1.15);} 100%{-webkit-transform: scale(1);transform: scale(1);} }   \r\n\r\n@keyframes logoAnimation { 0%{-webkit-transform: scale(1);transform: scale(1);} 50%{-webkit-transform: scale(1.15);transform: scale(1.15);} 100%{-webkit-transform: scale(1);transform: scale(1);} }   \r\n\r\n@-webkit-keyframes newMsg { 0% {color:yellow;} 50% { color:rgb(206, 34, 34) } 100% { color:yellow;} }   \r\n\r\n@keyframes newMsg { 0% {color:yellow;} 50% { color:rgb(206, 34, 34) } 100% { color:yellow;} }   \r\n\r\n@-webkit-keyframes ants2 { to { background-position: 100% 100% } }   \r\n\r\n@keyframes ants2 { to { background-position: 100% 100% } }"

/***/ }),

/***/ "./src/app/naivagtion-bar/naivagtion-bar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/naivagtion-bar/naivagtion-bar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\r\n  <nav id=\"navBar\" class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" href=\"about\" id=\"brand\">Cat World</a>\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      data-toggle=\"collapse\"\r\n      data-target=\"#navbarColor03\"\r\n      aria-controls=\"navbarColor03\"\r\n      aria-expanded=\"false\"\r\n      aria-label=\"Toggle navigation\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor03\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <!---FOR LOGGED IN USERS -->\r\n        <a *ngIf=\"isAuth()\" class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"about\">За Нас</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"create\">Качи Котка</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"viewAll\">Всички Котки</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"profile\">Профил</a>\r\n          </li>\r\n\r\n          <a *ngIf=\"isAdmin()\" class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"admin\">Админ</a>\r\n            </li>\r\n          </a>\r\n\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"messages\">Новини</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"Inbox\">Съобщения</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\">\r\n            <a id=\"logout\" class=\"nav-link\" (click)=\"Logout()\">Изход</a>\r\n          </li>\r\n        </a>\r\n\r\n        <!---FOR GUESTS -->\r\n        <a *ngIf=\"isGuest()\" class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"about\">About</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"login\">Login</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"register\">Register</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"viewAll\">All Cats</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"messages\">News</a>\r\n          </li>\r\n        </a>\r\n\r\n        <!---FOR LOGGED OUT USERS -->\r\n        <a *ngIf=\"isNotAuth()\" class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"about\">About</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"login\">Login</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"register\">Register</a>\r\n          </li>\r\n        </a>\r\n      </ul>\r\n\r\n      <!---Profile Section-->\r\n      <a *ngIf=\"isAuth()\">\r\n        <!--Messaging-->\r\n        <div class=\"nav-profilePic\" id=\"privateMessages\">\r\n          <a class=\"nav-link\" href=\"Inbox\" id=\"messagesLabel\">\r\n            <img\r\n              id=\"pmImage\"\r\n              src=\"http://www.clker.com/cliparts/1/M/H/m/B/Z/envelope-with-white-letter-hi.png\"\r\n              width=\"100\"\r\n              height=\"80\"\r\n            />\r\n            <a *ngIf=\"messagesNew()\"\r\n              ><b id=\"numberOfMessages\"> {{ newMessages }} Непрочетено!</b></a\r\n            >\r\n          </a>\r\n        </div>\r\n\r\n        <!--Profile-->\r\n        <div class=\"nav-profilePic\" id=\"profilePic\">\r\n          <a class=\"nav-link\" href=\"profile\"\r\n            >{{ username }}:\r\n            <img\r\n              id=\"ProfilePicImage\"\r\n              src=\"{{ imgUrl }}\"\r\n              alt=\"Italian Trulli\"\r\n              width=\"100\"\r\n              height=\"80\"\r\n          /></a>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </nav>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/naivagtion-bar/naivagtion-bar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/naivagtion-bar/naivagtion-bar.component.ts ***!
  \************************************************************/
/*! exports provided: NaivagtionBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaivagtionBarComponent", function() { return NaivagtionBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/kinvey-remote-service.service.js */ "./src/app/services/kinvey-remote-service.service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NaivagtionBarComponent = /** @class */ (function () {
    function NaivagtionBarComponent(remote, router, toastr) {
        this.remote = remote;
        this.router = router;
        this.toastr = toastr;
        this.model = new _user__WEBPACK_IMPORTED_MODULE_1__["User"](localStorage.getItem("username"), null, localStorage.getItem("picUrl"), null);
        this.username = this.model.username;
        this.imgUrl = this.model.picUrl;
        this.newMessages;
    }
    NaivagtionBarComponent.prototype.Logout = function () {
        var _this = this;
        this.remote.logout().subscribe(function (dataBase) {
            console.log("logged out");
            _this.toastr.info("Logged out!");
            localStorage.clear();
            _this.router.navigate(["/about"]);
            if (localStorage.length === 0) {
                console.log("lol, inside if");
                _this.remote.login("Guest2", "Guest2").subscribe(function (data) {
                    _this.remote.saveSession(data);
                    _this.toastr.success("Guest");
                });
            }
        });
    };
    NaivagtionBarComponent.prototype.isAuth = function () {
        if (localStorage.getItem("authtoken") !== null &&
            localStorage.getItem("username") !== "Guest2") {
            this.model = new _user__WEBPACK_IMPORTED_MODULE_1__["User"](localStorage.getItem("username"), null, localStorage.getItem("picUrl"), null);
            this.username = this.model.username;
            this.imgUrl = this.model.picUrl;
            return true;
        }
    };
    NaivagtionBarComponent.prototype.isGuest = function () {
        if (localStorage.getItem("username") === "Guest2") {
            return true;
        }
        else
            return false;
    };
    NaivagtionBarComponent.prototype.isNotGuest = function () {
        if (localStorage.getItem("username") === "Guest2") {
            return false;
        }
    };
    NaivagtionBarComponent.prototype.isAdmin = function () {
        if (localStorage.getItem("isAdmin") === "Yes") {
            return true;
        }
    };
    NaivagtionBarComponent.prototype.isNotAuth = function () {
        return localStorage.getItem("authtoken") === null;
    };
    NaivagtionBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = localStorage.getItem("userId");
        this.newMessages = 0;
        this.remote.GetAllMessages().subscribe(function (messages) {
            for (var index in messages) {
                //VARIABLES
                var receiver = messages[index]["receiver"];
                var open_1 = messages[index]["open"];
                //CODE FOR NewMessages
                if (id === receiver && open_1 === "false") {
                    console.log("receiver");
                    _this.newMessages++;
                }
            }
            _this.messages = messages;
        });
    };
    NaivagtionBarComponent.prototype.messagesNew = function () {
        if (this.newMessages === 0) {
            return false;
        }
        else
            return true;
    };
    NaivagtionBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-naivagtion-bar",
            template: __webpack_require__(/*! ./naivagtion-bar.component.html */ "./src/app/naivagtion-bar/naivagtion-bar.component.html"),
            styles: [__webpack_require__(/*! ./naivagtion-bar.component.css */ "./src/app/naivagtion-bar/naivagtion-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__["KinveyRemoteServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], NaivagtionBarComponent);
    return NaivagtionBarComponent;
}());



/***/ }),

/***/ "./src/app/picture-slider/picture-slider.component.css":
/*!*************************************************************!*\
  !*** ./src/app/picture-slider/picture-slider.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/picture-slider/picture-slider.component.html":
/*!**************************************************************!*\
  !*** ./src/app/picture-slider/picture-slider.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <title>Bootstrap Example</title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n</head>\r\n\r\n<body>\r\n\r\n  <div class=\"container\">\r\n    <h2>Carousel Example</h2>\r\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n      <!-- Indicators -->\r\n      <ol class=\"carousel-indicators\">\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n      </ol>\r\n\r\n      <!-- Wrapper for slides -->\r\n      <div class=\"carousel-inner\">\r\n        <div class=\"item active\">\r\n          <img src=\"https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg\" alt=\"Los Angeles\" style=\"width:100%;\">\r\n        </div>\r\n\r\n        <div class=\"item\">\r\n          <img src=\"https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg\" alt=\"Chicago\" style=\"width:100%;\">\r\n        </div>\r\n\r\n        <div class=\"item\">\r\n          <img src=\"https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg\" alt=\"New york\" style=\"width:100%;\">\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Left and right controls -->\r\n      <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n      <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n        <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/picture-slider/picture-slider.component.ts":
/*!************************************************************!*\
  !*** ./src/app/picture-slider/picture-slider.component.ts ***!
  \************************************************************/
/*! exports provided: PictureSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureSliderComponent", function() { return PictureSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PictureSliderComponent = /** @class */ (function () {
    function PictureSliderComponent() {
    }
    PictureSliderComponent.prototype.ngOnInit = function () {
    };
    PictureSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-picture-slider',
            template: __webpack_require__(/*! ./picture-slider.component.html */ "./src/app/picture-slider/picture-slider.component.html"),
            styles: [__webpack_require__(/*! ./picture-slider.component.css */ "./src/app/picture-slider/picture-slider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PictureSliderComponent);
    return PictureSliderComponent;
}());



/***/ }),

/***/ "./src/app/pm-template/pm-template.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pm-template/pm-template.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#message{\r\n    width:1300px;\r\n    border-style:solid;\r\n    border-color:black;\r\n    border-radius:3%;\r\n    margin: 10px auto;\r\n    display: flex;\r\n    background-color:white;\r\n    cursor: pointer;\r\n}\r\n\r\n#message:hover { \r\n    -webkit-transform: scale(1.05); \r\n            transform: scale(1.05);\r\n    box-shadow: 6px 3px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n/* Divs */\r\n\r\n#Title{\r\n    display:inline-block;\r\n    color:black;\r\n    font-weight: 900;\r\n    margin: 0px 5px;\r\n    border-right: 3px solid black;\r\n    border-right-width:3px;\r\n    text-align:center;\r\n    white-space: pre;\r\n    max-width:200px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n#Info{\r\n    display:inline-block;\r\n    font-weight:900;\r\n    margin: 0px 5px;\r\n    border-right: 3px solid black;\r\n    border-right-width:3px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    max-width: 760px;\r\n    text-align:center;\r\n\r\n}\r\n\r\n#Date{\r\n    display: inline-block;\r\n    font-weight:900;\r\n    margin: 0px 5px;\r\n    max-width:400px;\r\n    width:300px;\r\n    text-align:center;\r\n}\r\n\r\n/* Delete Button */\r\n\r\n#message:hover #Delete{\r\n    display:block;\r\n    position:relative;\r\n    -webkit-transform: scale(1.5);\r\n            transform: scale(1.5);\r\n    cursor: pointer;\r\n    -webkit-animation: ants 3s linear infinite;\r\n            animation: ants 3s linear infinite;\r\n    text-shadow: 2px 1.5px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n#Delete{\r\n    display:none;\r\n    position:relative;\r\n    right:5px;\r\n    width:auto;\r\n    height:30px;\r\n    bottom:-7px;\r\n    font-weight:900;\r\n    margin: 0px 5px;\r\n    color:red;\r\n    background-color:transparent;\r\n    border-style:none;\r\n}\r\n\r\n@-webkit-keyframes ants { 0%{-webkit-transform: scale(1);transform: scale(1);} 50%{-webkit-transform: scale(2);transform: scale(2); color:blue;} 100%{-webkit-transform: scale(1);transform: scale(1);} }\r\n\r\n@keyframes ants { 0%{-webkit-transform: scale(1);transform: scale(1);} 50%{-webkit-transform: scale(2);transform: scale(2); color:blue;} 100%{-webkit-transform: scale(1);transform: scale(1);} }"

/***/ }),

/***/ "./src/app/pm-template/pm-template.component.html":
/*!********************************************************!*\
  !*** ./src/app/pm-template/pm-template.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"message\" >\r\n  <legend id=\"Title\" (click)=\"navigate()\"> {{message.senderName}} </legend>\r\n  <legend id=\"Info\" (click)=\"navigate()\">{{message.catName}}</legend>\r\n  <legend id=\"Date\" >{{message.madeDate}}</legend>\r\n  <button type=\"button\" id=\"Delete\" (click)=\"deleteFunc()\">X</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pm-template/pm-template.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pm-template/pm-template.component.ts ***!
  \******************************************************/
/*! exports provided: PmTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PmTemplateComponent", function() { return PmTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message */ "./src/app/message.ts");
/* harmony import */ var _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/kinvey-remote-service.service.js */ "./src/app/services/kinvey-remote-service.service.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PmTemplateComponent = /** @class */ (function () {
    function PmTemplateComponent(router, remote, toastr) {
        this.router = router;
        this.remote = remote;
        this.toastr = toastr;
        this.deletedMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.model = new _message__WEBPACK_IMPORTED_MODULE_2__["Message"]("", "false");
    }
    PmTemplateComponent.prototype.ngOnInit = function () {
        this.model = this.message;
    };
    PmTemplateComponent.prototype.deleteFunc = function () {
        var _this = this;
        this.remote.DeleteMessage(this.model._id).subscribe(function (data) {
            _this.deletedMessage.emit(_this.model);
            _this.toastr.info("Съобщение Изтрито!");
        });
    };
    PmTemplateComponent.prototype.navigate = function () {
        var id = this.message._id;
        this.router.navigate(["/pm-view/" + id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _message__WEBPACK_IMPORTED_MODULE_2__["Message"])
    ], PmTemplateComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PmTemplateComponent.prototype, "deletedMessage", void 0);
    PmTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-pm-template",
            template: __webpack_require__(/*! ./pm-template.component.html */ "./src/app/pm-template/pm-template.component.html"),
            styles: [__webpack_require__(/*! ./pm-template.component.css */ "./src/app/pm-template/pm-template.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_3__["KinveyRemoteServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], PmTemplateComponent);
    return PmTemplateComponent;
}());



/***/ }),

/***/ "./src/app/pm-template2/pm-template2.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pm-template2/pm-template2.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#properMessageTemplate{\r\n    width:1330px;\r\n    margin: 20px auto;\r\n    height:380px;\r\n    background-color:white;\r\n    display:flex;\r\n    border: 2px solid #000;\r\n    border-radius:      px/100px;\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n/* User Info */\r\n\r\n#userPic{\r\n    right:-15px;\r\n    position:relative;\r\n    margin:20px 20px;\r\n    width:auto;\r\n    border-radius:5%;\r\n    border-color:black;\r\n    border-style:solid;\r\n    border-width:3px;\r\n}\r\n\r\n#username{\r\n    position:relative;\r\n    height:50px;\r\n    width:210px;\r\n    text-align:center;\r\n    bottom:-170px;\r\n    left:-190px;\r\n}\r\n\r\n/* Message Content */\r\n\r\n#message{\r\n    position:relative;\r\n    left:-185px;\r\n    background-color:white;\r\n    margin: 20px 2px;\r\n    border-radius: 1%;\r\n    border-color:black;\r\n    border-style: groove;\r\n    width:1085px;\r\n    height:320px;\r\n}\r\n\r\n#date{\r\n    position:relative;\r\n    bottom:-335px;\r\n    top:335px;\r\n    left:-418px;\r\n    height:50px;\r\n    text-align:center;\r\n}\r\n\r\n#dateLegend{\r\n    width:230px;\r\n}\r\n\r\n#messageContent{\r\n    word-wrap: break-word; \r\n}"

/***/ }),

/***/ "./src/app/pm-template2/pm-template2.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pm-template2/pm-template2.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"properMessageTemplate\">\r\n  <!-- UserPicture -->\r\n  <img id=\"userPic\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg\" width=\"190px\" height=\"150px\" alt=\"Italian Trulli\">\r\n  \r\n  <!-- Username -->\r\n  <div id=\"username\">\r\n    <legend id=\"usernameLegend\">\r\n      usernameUsername\r\n    </legend>\r\n  </div>\r\n  \r\n  <!-- Message Content -->\r\n  <div id=\"message\">\r\n    <legend id=\"messageContent\">\r\n           ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\r\n    </legend>\r\n  </div>\r\n\r\n  <!-- Date -->\r\n  <div id=\"date\">\r\n    <legend id=\"dateLegend\">\r\n       2018-09-07 15:23:54\r\n    </legend>\r\n  </div>\r\n  \r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pm-template2/pm-template2.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pm-template2/pm-template2.component.ts ***!
  \********************************************************/
/*! exports provided: PmTemplate2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PmTemplate2Component", function() { return PmTemplate2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/kinvey-remote-service.service.js */ "./src/app/services/kinvey-remote-service.service.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message */ "./src/app/message.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PmTemplate2Component = /** @class */ (function () {
    function PmTemplate2Component(route, remote, router, toastr) {
        this.route = route;
        this.remote = remote;
        this.router = router;
        this.toastr = toastr;
        this.model = new _message__WEBPACK_IMPORTED_MODULE_4__["Message"]("", "false");
    }
    PmTemplate2Component.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get("id");
        console.log(id);
        this.remote.GetMessageById(id).subscribe(function (data) { });
    };
    PmTemplate2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-pm-template2",
            template: __webpack_require__(/*! ./pm-template2.component.html */ "./src/app/pm-template2/pm-template2.component.html"),
            styles: [__webpack_require__(/*! ./pm-template2.component.css */ "./src/app/pm-template2/pm-template2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__["KinveyRemoteServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], PmTemplate2Component);
    return PmTemplate2Component;
}());



/***/ }),

/***/ "./src/app/pm-view/pm-view.component.css":
/*!***********************************************!*\
  !*** ./src/app/pm-view/pm-view.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pmViewHolder{\r\n    width:1500px;\r\n    height:800px;\r\n    \r\n    margin:30px auto;\r\n    \r\n    padding:20px;\r\n}"

/***/ }),

/***/ "./src/app/pm-view/pm-view.component.html":
/*!************************************************!*\
  !*** ./src/app/pm-view/pm-view.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pmViewHolder\">\r\n\r\n  <app-pm-template2></app-pm-template2>\r\n  \r\n</div>  \r\n\r\n"

/***/ }),

/***/ "./src/app/pm-view/pm-view.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pm-view/pm-view.component.ts ***!
  \**********************************************/
/*! exports provided: PmViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PmViewComponent", function() { return PmViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/kinvey-remote-service.service.js */ "./src/app/services/kinvey-remote-service.service.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message */ "./src/app/message.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PmViewComponent = /** @class */ (function () {
    function PmViewComponent(route, remote, router, toastr) {
        this.route = route;
        this.remote = remote;
        this.router = router;
        this.toastr = toastr;
        this.model = new _message__WEBPACK_IMPORTED_MODULE_4__["Message"]("", "false", "", "");
    }
    PmViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        this.remote.GetMessageById(id).subscribe(function (data) {
            //catName, senderName, open, sender, receiver, message, madeDate
            //VARIABLES
            var open = data["open"];
            var catName = data["catName"];
            var senderName = data["senderName"];
            var sender = data["sender"];
            var receiver = data["receiver"];
            var message = data["message"];
            var madeDate = data["madeDate"];
            var id = (_this.model._id = data["_id"]);
            //UPDATING MESSAGE
            if (open === "false") {
                open = "true";
                _this.remote
                    .UpdateMessage(catName, senderName, "true", sender, receiver, message, madeDate, id)
                    .subscribe(function (data) {
                    _this.toastr.info("Съобщение Отворено!");
                });
            }
        });
    };
    PmViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-pm-view",
            template: __webpack_require__(/*! ./pm-view.component.html */ "./src/app/pm-view/pm-view.component.html"),
            styles: [__webpack_require__(/*! ./pm-view.component.css */ "./src/app/pm-view/pm-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__["KinveyRemoteServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], PmViewComponent);
    return PmViewComponent;
}());



/***/ }),

/***/ "./src/app/pm-writer/pm-writer.component.css":
/*!***************************************************!*\
  !*** ./src/app/pm-writer/pm-writer.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pmWriter{\r\n    margin:auto;\r\n    height:550px;\r\n    width:1300px;\r\n    border-style:solid;\r\n    border-width:4px;\r\n    border-color:black;\r\n    border-radius:2%;\r\n    background-color:white;\r\n}\r\n\r\n#exampleTextarea{\r\n    width:1200px;\r\n    margin:10px auto;\r\n    resize:none;\r\n\r\n    border-width:3px;\r\n    font-size:30px;\r\n    color:black;\r\n}\r\n\r\n#title{\r\n    margin:10px auto;\r\n    width:230px;\r\n    -webkit-animation: logoAnimation 2s linear infinite;\r\n            animation: logoAnimation 2s linear infinite;\r\n}\r\n\r\n#sendMessage{\r\n    width:300px;\r\n    height:50px;\r\n    border-style:solid;\r\n    border-color:black;\r\n    border-width:2px;\r\n}\r\n\r\n#buttonSendMessage{\r\n    position:relative;\r\n    right:-500px;\r\n    bottom: -30px;\r\n    \r\n    background-color:red;\r\n    width:70px;\r\n}\r\n\r\n@-webkit-keyframes titleAnimationPm{0%{color:black;} 50%{color: blue} 100%{color:black}}\r\n\r\n@keyframes titleAnimationPm{0%{color:black;} 50%{color: blue} 100%{color:black}}"

/***/ }),

/***/ "./src/app/pm-writer/pm-writer.component.html":
/*!****************************************************!*\
  !*** ./src/app/pm-writer/pm-writer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pmWriter\">\r\n\r\n  <legend id=\"title\">Write Your Message!</legend>\r\n  <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"7\" required [(ngModel)]=\"model.message\" name=\"message\">ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\r\n  </textarea>\r\n  <!-- Button -->\r\n  <div id=\"buttonSendMessage\">\r\n  <button id=\"sendMessage\" (click)=\"sendMessage()\" type=\"button\" class=\"btn btn-success\">Send</button>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pm-writer/pm-writer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pm-writer/pm-writer.component.ts ***!
  \**************************************************/
/*! exports provided: PmWriterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PmWriterComponent", function() { return PmWriterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/kinvey-remote-service.service.js */ "./src/app/services/kinvey-remote-service.service.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message */ "./src/app/message.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PmWriterComponent = /** @class */ (function () {
    function PmWriterComponent(route, remote, router, toastr) {
        this.route = route;
        this.remote = remote;
        this.router = router;
        this.toastr = toastr;
        this.model = new _message__WEBPACK_IMPORTED_MODULE_4__["Message"]("", "false", "", "");
    }
    PmWriterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        this.remote.GetCatById(id).subscribe(function (data) {
            _this.model.catName = data["name"];
            _this.model.receiver = data["_acl"].creator;
            _this.model.sender = localStorage.getItem("userId");
            console.log(_this.model);
        });
    };
    PmWriterComponent.prototype.sendMessage = function () {
        var _this = this;
        //Variables
        var message = this.model.message;
        var receiver = this.model.receiver;
        var catName = this.model.catName;
        var sender = this.model.sender;
        var open = this.model.open;
        var senderName = localStorage.getItem("username");
        if (receiver === sender) {
            this.toastr.info("Messaging Yourself?");
        }
        else if (message.length <= 0) {
            this.toastr.error("Message is required!");
        }
        else if (message.length > 1069) {
            this.toastr.error("Message should be shorter!");
        }
        else {
            var madeDate = new Date().toLocaleString(); // 11/16/2015, 11:18:48 PM
            this.remote
                .CreateMessage(message, receiver, sender, open, senderName, madeDate, catName)
                .subscribe(function (data) {
                _this.toastr.success("Message Sent!");
            }, function (error) {
                _this.toastr.error(error);
            });
        }
    };
    PmWriterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-pm-writer",
            template: __webpack_require__(/*! ./pm-writer.component.html */ "./src/app/pm-writer/pm-writer.component.html"),
            styles: [__webpack_require__(/*! ./pm-writer.component.css */ "./src/app/pm-writer/pm-writer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__["KinveyRemoteServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], PmWriterComponent);
    return PmWriterComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profileDiv{\r\n    height:auto;\r\n    width:450px;\r\n    background-color:white;\r\n    margin:20px auto;\r\n    border-width:4px;\r\n}\r\n\r\n#profilePic{\r\n    text-align: left;\r\n    background-color: #eee;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 20px;\r\n    border-style:solid;\r\n    border-color:black;\r\n    border-radius:30%;\r\n}\r\n\r\n#username{\r\n    text-align:center;\r\n    font-weight: 900;\r\n}\r\n\r\n#picUrl{\r\n    text-align:center; \r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#IsAdmin{\r\n    font-weight:900;\r\n    font-size:25px;\r\n}\r\n\r\n#inputField{\r\n    display:block;\r\n}\r\n\r\n#changeButton{\r\n    border-width: 2px;\r\n    border-style:solid;\r\n    border-color:black;\r\n}\r\n\r\n#changeButton:hover{\r\n-webkit-transform: scale(1.20);\r\n        transform: scale(1.20);\r\n\r\n  outline: 0;\r\n  box-shadow: inset 5px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\r\n  \r\n}\r\n\r\n#usernameField{\r\n    width:210px;\r\n    margin:auto;\r\n    text-align:center;\r\n}\r\n\r\n#urlField{\r\n    text-align:center;\r\n    width:300px;\r\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\r\n<div id=\"pageInfo\">\r\n  <div id=\"profileDiv\" class=\"card\">\r\n  \r\n    <img id=\"profilePic\" src= {{this.model.picUrl}} alt=\"Smiley face\" height=\"250\" width=\"300\">\r\n    <h3 id=\"username\">{{username}}: <input type=\"text\" id=\"usernameField\" class=\"form-control\" placeholder=\"Username Goes Here\" id=\"usernameField\" [(ngModel)]=\"model.username\" name=\"username\"></h3>\r\n    <div id=\"picUrl\" class=\"form-group\">\r\n      <legend id=\"IsAdmin\"><a *ngIf=\"isAdmin()\">Админ: Да</a></legend>\r\n      <label id=\"inputField\" class=\"col-form-label\" for=\"inputDefault\">Линк За Снимка: <input type=\"text\"  class=\"form-control\" placeholder=\"Url Goes Here\" id=\"urlField\" [(ngModel)]=\"model.picUrl\" name=\"picUrl\"></label>\r\n      <button (click)=\"testfunc()\" type=\"button\" id=\"changeButton\" class=\"btn btn-success\">Промени</button>\r\n    </div>\r\n  \r\n  </div>\r\n</div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/kinvey-remote-service.service.js */ "./src/app/services/kinvey-remote-service.service.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(remote, toastr) {
        this.remote = remote;
        this.toastr = toastr;
        this.model = new _user__WEBPACK_IMPORTED_MODULE_1__["User"](localStorage.getItem("username"), null, localStorage.getItem("picUrl"), null);
        this.username = localStorage.getItem("username");
        this.picurl = localStorage.getItem("profilePic");
    }
    //UPDATE FUNC
    ProfileComponent.prototype.testfunc = function () {
        var _this = this;
        console.log(this.model.username);
        this.remote
            .updateUser(this.model.username, null, localStorage.getItem("userId"), this.model.picUrl)
            .subscribe(function (UserData) {
            _this.remote.saveSession(UserData);
            _this.model = new _user__WEBPACK_IMPORTED_MODULE_1__["User"](localStorage.getItem("username"), null, localStorage.getItem("picUrl"), null);
            _this.username = localStorage.getItem("username");
            _this.picurl = localStorage.getItem("profilePic");
            _this.toastr.info("User Information Changed!");
        });
    };
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent.prototype.isAdmin = function () {
        if (localStorage.getItem("isAdmin") !== "undefined") {
            return true;
        }
        else {
            return false;
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__["KinveyRemoteServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#registerForm{\r\n    width:350px;\r\n    margin: auto;\r\n    background-color:transparent;\r\n    text-align:center;\r\n    padding: 10px;\r\n}\r\n\r\n#buttonRegister:hover{\r\n-webkit-transform: scale(1.12);\r\n        transform: scale(1.12);\r\n\r\n  outline: 0;\r\n  box-shadow: inset 5px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\r\n}\r\n\r\n#buttonRegister{\r\n    background-color:green;\r\n    width:100px;\r\n    margin: auto;\r\n}\r\n\r\n#registerCard{\r\n    height:auto;\r\n    width:auto;\r\n    padding:10px;\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\r\n<div id=\"pageInfo\">\r\n  <div id=\"registerForm\">\r\n    <form>\r\n      <fieldset>\r\n       \r\n        <div class=\"card\" id=\"registerCard\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">Username</label>\r\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter Username\" required [(ngModel)]=\"model.username\" name=\"username\">\r\n            \r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">Password</label>\r\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Enter Password\" [(ngModel)]=\"model.password\" name=\"password\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputPassword1\">Password Repeat</label>\r\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Repeat Password\" [(ngModel)]=\"model.repeatPassword\" name=\"repeatPassword\">\r\n            </div>\r\n            <button type=\"submit\" id=\"buttonRegister\" (click)=\"testFunc()\" class=\"btn btn-primary\">Register</button>\r\n        </div>\r\n          \r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</div>\r\n</form>\r\n\r\n\r\n\r\n        "

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/kinvey-remote-service.service.js */ "./src/app/services/kinvey-remote-service.service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(remote, router, toastr) {
        this.remote = remote;
        this.router = router;
        this.toastr = toastr;
        this.model = new _user__WEBPACK_IMPORTED_MODULE_1__["User"]("", "", null, "");
    }
    //FUNCTIONS
    RegisterComponent.prototype.testFunc = function () {
        var _this = this;
        console.log(this.model.password);
        //CHECK1
        if (this.model.username == "" ||
            this.model.password == "" ||
            this.model.repeatPassword == "") {
            this.toastr.error("Fields Should Not Be Empty!");
        }
        else if (this.model.repeatPassword != this.model.password) {
            this.toastr.error("Passwords Should Match!");
        }
        else {
            this.toastr.info("Registering!");
            this.remote
                .register(this.model.username, this.model.password, null)
                .subscribe(function (Data) {
                _this.toastr.success("Registered!");
                _this.router.navigate(["/login"]);
            }, function (error) {
                _this.toastr.error("Registration Error");
            });
        }
    };
    RegisterComponent.prototype.onSubmit = function () { };
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__["KinveyRemoteServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/rocket-class.ts":
/*!*********************************!*\
  !*** ./src/app/rocket-class.ts ***!
  \*********************************/
/*! exports provided: RocketClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RocketClass", function() { return RocketClass; });
var RocketClass = /** @class */ (function () {
    function RocketClass() {
    }
    return RocketClass;
}());



/***/ }),

/***/ "./src/app/rocket/rocket.component.css":
/*!*********************************************!*\
  !*** ./src/app/rocket/rocket.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#Fuel{\r\n    text-align:center;\r\n    color:red;\r\n    -webkit-animation: fontbulger 4s linear infinite;\r\n            animation: fontbulger 4s linear infinite;\r\n    transition: 1s;\r\n}\r\n\r\n#topHalf{\r\n  \r\n    position:relative;\r\n    width:65px;\r\n    height:66px;\r\n    background-image: url('data:image/png;base64,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');\r\n}\r\n\r\n#BottomHalf{\r\n    position:relative;\r\n     margin: auto;\r\n    width:65px;\r\n    height:30px;\r\n    background-image: url('data:image/png;base64,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');\r\n    transition: 1;\r\n}\r\n\r\n#EngineFlame{\r\n    position:relative;\r\n    width:45px;\r\n    margin:auto;\r\n    height:90px;\r\n    background-image: url('data:image/png;base64,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');\r\n    -webkit-animation: fontbulger 1s linear infinite;\r\n            animation: fontbulger 1s linear infinite;\r\n    transition:0.6s;\r\n}\r\n\r\n#EngineFlame.stage2{\r\n        \r\n    width:45px;\r\n    margin:auto;\r\n    height:90px;\r\n    background-image: url('data:image/png;base64,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');\r\n    -webkit-animation: fontbulger 1s linear infinite;\r\n            animation: fontbulger 1s linear infinite;\r\n    transition:0.6s;\r\n    -webkit-transform:translateY(-30px);\r\n            transform:translateY(-30px);\r\n}\r\n\r\n#Rocket{\r\n   \r\n    position:relative;\r\n    display:flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    width:66px;\r\n    -webkit-animation: move 1.5s linear infinite;\r\n            animation: move 1.5s linear infinite;\r\n    \r\n    display: inline-block;\r\n    transition:3s linear;\r\n    margin:5px 60px;\r\n \r\n}\r\n\r\n#Rocket.destroyed{\r\n    -webkit-animation: destroyed 1.5s linear;\r\n            animation: destroyed 1.5s linear;\r\n    opacity: 0;\r\n    transition: 2.5s;\r\n}\r\n\r\n#BottomHalf.destroyed{\r\n    opacity:0; \r\n    transition: 1.5s;\r\n    \r\n}\r\n\r\n@-webkit-keyframes fontbulger { 0%{opacity:1;} 25%{opacity:0.5} 50%{opacity:1} 75%{opacity:0.5} 100%{ opacity:1 } }\r\n\r\n@keyframes fontbulger { 0%{opacity:1;} 25%{opacity:0.5} 50%{opacity:1} 75%{opacity:0.5} 100%{ opacity:1 } }\r\n\r\n@-webkit-keyframes move { 0% {-webkit-transform:rotate(2deg);transform:rotate(2deg)} 50% { -webkit-transform:rotate(-2deg); transform:rotate(-2deg)} 100% { -webkit-transform:rotate(2deg); transform:rotate(2deg)} }\r\n\r\n@keyframes move { 0% {-webkit-transform:rotate(2deg);transform:rotate(2deg)} 50% { -webkit-transform:rotate(-2deg); transform:rotate(-2deg)} 100% { -webkit-transform:rotate(2deg); transform:rotate(2deg)} }\r\n\r\n@-webkit-keyframes destroyed { 0% {-webkit-transform:rotate(10deg);transform:rotate(10deg)} 50% { -webkit-transform:rotate(-10deg); transform:rotate(-10deg)} 100% { -webkit-transform:rotate(10deg); transform:rotate(10deg)} }\r\n\r\n@keyframes destroyed { 0% {-webkit-transform:rotate(10deg);transform:rotate(10deg)} 50% { -webkit-transform:rotate(-10deg); transform:rotate(-10deg)} 100% { -webkit-transform:rotate(10deg); transform:rotate(10deg)} } "

/***/ }),

/***/ "./src/app/rocket/rocket.component.html":
/*!**********************************************!*\
  !*** ./src/app/rocket/rocket.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div #Rocket id=\"Rocket\">\r\n  <div #TopHalf id=\"topHalf\">\r\n\r\n  </div>\r\n  <div #BottomHalf id=\"BottomHalf\">\r\n\r\n  </div>\r\n  <div #EngineFlame id=\"EngineFlame\">\r\n\r\n  </div>\r\n  <div *ngIf=\"firstStage()\" id=Fuel>Stage One Fuel: {{this.fuelStageOne}}</div>\r\n  <div *ngIf=\"secondStage()\" id=Fuel>Stage Two Fuel: {{this.fuelStageTwo}}</div>\r\n  <div *ngIf=\"thirdStage()\" id=Fuel>No Fuel Left</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rocket/rocket.component.ts":
/*!********************************************!*\
  !*** ./src/app/rocket/rocket.component.ts ***!
  \********************************************/
/*! exports provided: RocketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RocketComponent", function() { return RocketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rocket_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rocket-class */ "./src/app/rocket-class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RocketComponent = /** @class */ (function () {
    function RocketComponent() {
        this.rockets = [];
    }
    RocketComponent.prototype.startRocketflying = function (rocket) {
        var _this = this;
        var fuelOne = parseInt(rocket.first_stage.fuel_amount_tons);
        var fuelTwo = parseInt(rocket.second_stage.fuel_amount_tons);
        this.thick = this.maxFuel + 99900;
        this.fuelStageOne = fuelOne;
        this.fuelStageTwo = fuelTwo;
        this.maxFuel = this.maxFuel - 1000;
        // ADJUST THE LAST VALUE FOR SPEED/ 1000 = 1 SECOND //
        var t = setInterval(function () { _this.buringFuel(_this.fuelStageOne, _this.fuelStageTwo, _this.thick, _this.maxFuel, t); }, 1000);
        window.scrollTo(0, 120000);
    };
    RocketComponent.prototype.buringFuel = function (c, b, thick, maxFuel, t) {
        this.fuel = Math.floor(this.fuelStageOne + this.fuelStageTwo);
        this.maxFuel--;
        console.log(this.maxFuel);
        if (this.maxFuel = 0) {
            window.alert("complete");
        }
        if (this.fuelStageOne > 0) {
            console.log(this.fuelStageOne);
            this.fuelStageOne--;
            /* MOVING ROCKET */
            this.Rocket6.nativeElement.style.top = this.thick.toString() + "px";
            var randomSad = (Math.random() * 20);
            this.thick = this.thick - randomSad;
        }
        else if (this.fuelStageOne <= 0 && this.fuelStageTwo > 0) {
            this.BottomHalf.nativeElement.setAttribute("class", "destroyed");
            this.EngineFlame.nativeElement.setAttribute("class", "stage2");
            this.fuelStageTwo--;
            /* MOVING ROCKET */
            this.Rocket6.nativeElement.style.top = this.thick.toString() + "px";
            var randomSad = (Math.random() * 4);
            this.thick = this.thick - randomSad;
            console.log(this.fuelStageTwo);
        }
        else {
            this.Rocket6.nativeElement.setAttribute("class", "destroyed");
            clearInterval(t);
            /* MOVING ROCKET */
            this.Rocket6.nativeElement.style.top = this.thick.toString() + "px";
            var randomSad = (Math.random() * 4);
            this.thick = this.thick - randomSad;
        }
    };
    RocketComponent.prototype.firstStage = function () {
        if (this.fuelStageOne > 0) {
            return true;
        }
    };
    RocketComponent.prototype.secondStage = function () {
        if (this.fuelStageTwo > 0 && this.fuelStageOne <= 0) {
            return true;
        }
    };
    RocketComponent.prototype.thirdStage = function () {
        if (this.fuelStageTwo <= 0) {
            return true;
        }
    };
    RocketComponent.prototype.ngOnInit = function () {
        this.startRocketflying(this.rocket);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Rocket'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RocketComponent.prototype, "Rocket6", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('TopHalf'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RocketComponent.prototype, "TopHalf", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('BottomHalf'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RocketComponent.prototype, "BottomHalf", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('EngineFlame'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RocketComponent.prototype, "EngineFlame", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _rocket_class__WEBPACK_IMPORTED_MODULE_1__["RocketClass"])
    ], RocketComponent.prototype, "rocket", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RocketComponent.prototype, "maxFuel", void 0);
    RocketComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rocket',
            template: __webpack_require__(/*! ./rocket.component.html */ "./src/app/rocket/rocket.component.html"),
            styles: [__webpack_require__(/*! ./rocket.component.css */ "./src/app/rocket/rocket.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RocketComponent);
    return RocketComponent;
}());



/***/ }),

/***/ "./src/app/rockets-page/rockets-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/rockets-page/rockets-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#RocketsPage{\r\n    position:relative;\r\n    display:flex;\r\n    flex-grow: initial;\r\n    overflow:auto;\r\n    width:auto;\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n    margin:auto;\r\n    border-radius:5%;\r\n    border-width:3px;\r\n    padding:10px;\r\n    justify-content: center;\r\n    border-style:solid;\r\n    background-image: url('bg.jpg');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n\r\n\r\n#rocketsWrapper{\r\n    background-color:white;\r\n    height:auto;\r\n}"

/***/ }),

/***/ "./src/app/rockets-page/rockets-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/rockets-page/rockets-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div #RocketsPage id=\"RocketsPage\">\r\n\r\n  <app-rocket [maxFuel]=\"maxFuel\"  *ngFor=\"let r of rockets\"  [rocket]=\"r\" ></app-rocket>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/rockets-page/rockets-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/rockets-page/rockets-page.component.ts ***!
  \********************************************************/
/*! exports provided: RocketsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RocketsPageComponent", function() { return RocketsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RocketsPageComponent = /** @class */ (function () {
    function RocketsPageComponent() {
        this.highestFuelAmmountEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RocketsPageComponent.prototype.ngOnInit = function () {
        var imput = [{ "rocketid": 1, "id": "falcon1", "name": "Falcon 1", "type": "rocket", "active": false, "stages": 2, "boosters": 0, "cost_per_launch": 6700000, "success_rate_pct": 40, "first_flight": "2006-03-24", "country": "Republic of the Marshall Islands", "company": "SpaceX", "height": { "meters": 22.25, "feet": 73 }, "diameter": { "meters": 1.68, "feet": 5.5 }, "mass": { "kg": 30146, "lb": 66460 }, "payload_weights": [{ "id": "leo", "name": "Low Earth Orbit", "kg": 450, "lb": 992 }], "first_stage": { "reusable": false, "engines": 1, "fuel_amount_tons": 44.3, "burn_time_sec": 169, "thrust_sea_level": { "kN": 420, "lbf": 94000 }, "thrust_vacuum": { "kN": 480, "lbf": 110000 } }, "second_stage": { "reusable": false, "engines": 1, "fuel_amount_tons": 3.38, "burn_time_sec": 378, "thrust": { "kN": 31, "lbf": 7000 }, "payloads": { "option_1": "composite fairing", "composite_fairing": { "height": { "meters": 3.5, "feet": 11.5 }, "diameter": { "meters": 1.5, "feet": 4.9 } } } }, "engines": { "number": 1, "type": "merlin", "version": "1C", "layout": "single", "engine_loss_max": 0, "propellant_1": "liquid oxygen", "propellant_2": "RP-1 kerosene", "thrust_sea_level": { "kN": 420, "lbf": 94000 }, "thrust_vacuum": { "kN": 480, "lbf": 110000 }, "thrust_to_weight": 96 }, "landing_legs": { "number": 0, "material": null }, "flickr_images": ["https://www.spacex.com/sites/spacex/files/styles/media_gallery_large/public/2009_-_01_liftoff_south_full_wide_ro8a1280_edit.jpg?itok=8loiSGt1", "https://www.spacex.com/sites/spacex/files/styles/media_gallery_large/public/2009_-_02_default_liftoff_west_full_wide_nn6p2062_xl.jpg?itok=p776nHsM"], "wikipedia": "https://en.wikipedia.org/wiki/Falcon_1", "description": "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth." }, { "rocketid": 2, "id": "falcon9", "name": "Falcon 9", "type": "rocket", "active": true, "stages": 2, "boosters": 0, "cost_per_launch": 50000000, "success_rate_pct": 97, "first_flight": "2010-06-04", "country": "United States", "company": "SpaceX", "height": { "meters": 70, "feet": 229.6 }, "diameter": { "meters": 3.7, "feet": 12 }, "mass": { "kg": 549054, "lb": 1207920 }, "payload_weights": [{ "id": "leo", "name": "Low Earth Orbit", "kg": 22800, "lb": 50265 }, { "id": "gto", "name": "Geosynchronous Transfer Orbit", "kg": 8300, "lb": 18300 }, { "id": "mars", "name": "Mars Orbit", "kg": 4020, "lb": 8860 }], "first_stage": { "reusable": true, "engines": 9, "fuel_amount_tons": 385, "burn_time_sec": 162, "thrust_sea_level": { "kN": 7607, "lbf": 1710000 }, "thrust_vacuum": { "kN": 8227, "lbf": 1849500 } }, "second_stage": { "reusable": false, "engines": 1, "fuel_amount_tons": 90, "burn_time_sec": 397, "thrust": { "kN": 934, "lbf": 210000 }, "payloads": { "option_1": "dragon", "option_2": "composite fairing", "composite_fairing": { "height": { "meters": 13.1, "feet": 43 }, "diameter": { "meters": 5.2, "feet": 17.1 } } } }, "engines": { "number": 9, "type": "merlin", "version": "1D+", "layout": "octaweb", "engine_loss_max": 2, "propellant_1": "liquid oxygen", "propellant_2": "RP-1 kerosene", "thrust_sea_level": { "kN": 845, "lbf": 190000 }, "thrust_vacuum": { "kN": 914, "lbf": 205500 }, "thrust_to_weight": 180.1 }, "landing_legs": { "number": 4, "material": "carbon fiber" }, "flickr_images": ["https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg", "https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg", "https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg", "https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg", "https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg", "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg"], "wikipedia": "https://en.wikipedia.org/wiki/Falcon_9", "description": "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit." }, { "rocketid": 3, "id": "falconheavy", "name": "Falcon Heavy", "type": "rocket", "active": true, "stages": 2, "boosters": 2, "cost_per_launch": 90000000, "success_rate_pct": 100, "first_flight": "2018-02-06", "country": "United States", "company": "SpaceX", "height": { "meters": 70, "feet": 229.6 }, "diameter": { "meters": 12.2, "feet": 39.9 }, "mass": { "kg": 1420788, "lb": 3125735 }, "payload_weights": [{ "id": "leo", "name": "Low Earth Orbit", "kg": 63800, "lb": 140660 }, { "id": "gto", "name": "Geosynchronous Transfer Orbit", "kg": 26700, "lb": 58860 }, { "id": "mars", "name": "Mars Orbit", "kg": 16800, "lb": 37040 }, { "id": "pluto", "name": "Pluto Orbit", "kg": 3500, "lb": 7720 }], "first_stage": { "reusable": true, "engines": 27, "fuel_amount_tons": 1155, "cores": 3, "burn_time_sec": 162, "thrust_sea_level": { "kN": 22819, "lbf": 5130000 }, "thrust_vacuum": { "kN": 24681, "lbf": 5548500 } }, "second_stage": { "reusable": false, "engines": 1, "fuel_amount_tons": 90, "burn_time_sec": 397, "thrust": { "kN": 934, "lbf": 210000 }, "payloads": { "option_1": "dragon", "option_2": "composite fairing", "composite_fairing": { "height": { "meters": 13.1, "feet": 43 }, "diameter": { "meters": 5.2, "feet": 17.1 } } } }, "engines": { "number": 27, "type": "merlin", "version": "1D+", "layout": "octaweb", "engine_loss_max": 6, "propellant_1": "liquid oxygen", "propellant_2": "RP-1 kerosene", "thrust_sea_level": { "kN": 845, "lbf": 190000 }, "thrust_vacuum": { "kN": 914, "lbf": 205500 }, "thrust_to_weight": 180.1 }, "landing_legs": { "number": 12, "material": "carbon fiber" }, "flickr_images": ["https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg", "https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg", "https://farm5.staticflickr.com/4696/40126460511_b15bf84c85_b.jpg", "https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg"], "wikipedia": "https://en.wikipedia.org/wiki/Falcon_Heavy", "description": "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost." }, { "rocketid": 4, "id": "bfr", "name": "Big Falcon Rocket", "type": "rocket", "active": false, "stages": 2, "boosters": 0, "cost_per_launch": 7000000, "success_rate_pct": 0, "first_flight": "2019-12-01", "country": "United States", "company": "SpaceX", "height": { "meters": 118, "feet": 387 }, "diameter": { "meters": 9, "feet": 30 }, "mass": { "kg": 4400000, "lb": 9700000 }, "payload_weights": [{ "id": "leo", "name": "Low Earth Orbit", "kg": 150000, "lb": 330000 }, { "id": "mars", "name": "Mars Orbit", "kg": 100000, "lb": 220000 }], "first_stage": { "reusable": true, "engines": 31, "fuel_amount_tons": 6700, "burn_time_sec": null, "thrust_sea_level": { "kN": 128000, "lbf": 28775544 }, "thrust_vacuum": { "kN": 138000, "lbf": 31023634 } }, "second_stage": { "reusable": true, "engines": 6, "fuel_amount_tons": 1100, "burn_time_sec": null, "thrust": { "kN": 1900, "lbf": 427136 }, "payloads": { "option_1": "Spaceship", "option_2": "composite fairing", "composite_fairing": { "height": { "meters": null, "feet": null }, "diameter": { "meters": null, "feet": null } } } }, "engines": { "number": 31, "type": "raptor", "version": "", "layout": null, "engine_loss_max": null, "propellant_1": "liquid oxygen", "propellant_2": "liquid methane", "thrust_sea_level": { "kN": 1700, "lbf": 382175 }, "thrust_vacuum": { "kN": 1900, "lbf": 427136 }, "thrust_to_weight": null }, "landing_legs": { "number": 4, "material": "carbon fiber" }, "flickr_images": ["https://farm2.staticflickr.com/1861/30934146988_f3de261bb4_b.jpg", "https://farm2.staticflickr.com/1854/30934146778_765ea9f486_b.jpg", "https://farm2.staticflickr.com/1898/30934147078_31b54027b0_b.jpg", "https://farm2.staticflickr.com/1845/43895099105_7329ee6bba_b.jpg"], "wikipedia": "https://en.wikipedia.org/wiki/BFR_(rocket)", "description": "BFR is a privately funded next-generation reusable launch vehicle and spacecraft system developed by SpaceX. It was announced by Elon Musk in September 2017; the first spacecraft prototype was being manufactured as of March 2018 and will begin testing in early 2019. The overall space vehicle architecture includes both launch vehicles and spacecraft that are intended to completely replace all of SpaceX's existing space hardware by the early 2020s as well as ground infrastructure for rapid launch and relaunch, and zero-gravity propellant transfer technology to be deployed in low Earth orbit (LEO). The large payload to Earth orbit of up to 150,000 kg (330,000 lb) makes BFR a super heavy-lift launch vehicle." }];
        var tempArr = [];
        var MaxFuel = 0;
        for (var i = 0; i < imput.length; i++) {
            var tempRocket = (imput[i]);
            tempArr.push(tempRocket);
            if (MaxFuel < tempRocket.first_stage.fuel_amount_tons + tempRocket.second_stage.fuel_amount_tons) {
                MaxFuel = tempRocket.first_stage.fuel_amount_tons + tempRocket.second_stage.fuel_amount_tons + 1000;
            }
        }
        this.maxFuel = MaxFuel;
        MaxFuel = MaxFuel + 230 + 100000;
        this.RocketsPage5.nativeElement.style.height = MaxFuel.toString() + "px";
        this.rockets = tempArr;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('RocketsPage'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RocketsPageComponent.prototype, "RocketsPage5", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RocketsPageComponent.prototype, "highestFuelAmmountEvent", void 0);
    RocketsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rockets-page',
            template: __webpack_require__(/*! ./rockets-page.component.html */ "./src/app/rockets-page/rockets-page.component.html"),
            styles: [__webpack_require__(/*! ./rockets-page.component.css */ "./src/app/rockets-page/rockets-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RocketsPageComponent);
    return RocketsPageComponent;
}());



/***/ }),

/***/ "./src/app/search-options/search-options.component.css":
/*!*************************************************************!*\
  !*** ./src/app/search-options/search-options.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    width:380px;\r\n    margin: 43px 20px;\r\n    float:left;\r\n    height: 500px;\r\n    display:block;\r\n    border-width:4px;\r\n    top:-22px;\r\n}\r\n\r\n/* Button */\r\n\r\n#searchButton{\r\n    background-color:green;\r\n    border-color:black;\r\n    position:absolute;\r\n    width:200px;\r\n    margin:auto;\r\n    bottom:30px;\r\n    right:85px;\r\n    }\r\n\r\n#searchButton:hover{\r\n-webkit-transform: scale(1.15);\r\n        transform: scale(1.15);\r\n}\r\n\r\n/*---------- Name ----------*/\r\n\r\n#nameField{\r\n    border-width:2px;\r\n    width:160px;\r\n    display:inline-block;\r\n    margin:5px 10px;\r\n}\r\n\r\n/*---------- Age ----------*/\r\n\r\n#ageField{\r\n    border-width:2px;\r\n    width:70px;\r\n    text-align:center;\r\n    \r\n}\r\n\r\n#age{\r\n    margin:5px 10px;\r\n    flex-direction: column;\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n/*---------- Breed ----------*/\r\n\r\n#breedSelector{\r\n    width:100%;\r\n    border-width:2px;\r\n    border-color:black;\r\n}\r\n\r\n#breedField{\r\n    width:220px;\r\n    display:inline-block;\r\n    margin:10px 10px;\r\n}\r\n\r\nselect{\r\n    text-align-last:center; \r\n}\r\n\r\n#breedLabel{\r\n    width:130px;\r\n    font-weight: 900px;\r\n    display:inline-block;\r\n}\r\n\r\n/*---------- Location ----------*/\r\n\r\n#cityField{\r\n    width:130px;\r\n}\r\n\r\n#locationField{\r\n    width:130px;\r\n    display:inline-block;\r\n    margin:10px 10px;\r\n}\r\n\r\n#CitySelector{\r\n    border-width:2px;\r\n    border-color:black;\r\n    width:100%;\r\n    display: block;\r\n    margin: 0 auto;\r\n    text-align:center;\r\n}\r\n\r\n/*---------- Vaccinated ----------*/\r\n\r\n#Vaccinated{\r\n    margin:10px 10px;\r\n    display:inline-block;\r\n    float:left;\r\n}\r\n\r\n#VaccinatedField{\r\n    width:auto;\r\n}\r\n\r\n/* Castated */\r\n\r\n#Castrated{\r\n    margin:10px 10px;\r\n    display:inline-block;\r\n    float:right;\r\n    top:-50px;\r\n}"

/***/ }),

/***/ "./src/app/search-options/search-options.component.html":
/*!**************************************************************!*\
  !*** ./src/app/search-options/search-options.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <form #form=\"ngForm\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <legend>Търсачка за котета</legend>\r\n      \r\n      <!--Breed-->\r\n      <div class=\"form-group\" id=\"breedField\">\r\n        <label for=\"exampleInputPassword1\" id=\"breedLabel\">Порода:<br />\r\n          <select id=\"breedSelector\" required [(ngModel)]=\"model.breed\" name=\"breed\">\r\n            <option *ngFor=\"let b of breeds\" [value]=\"b\">{{b}}</option>\r\n          </select>\r\n        </label>\r\n      </div>\r\n      \r\n      <!--Location-->\r\n      <div class=\"form-group\" id=\"locationField\">\r\n        <label for=\"exampleInputPassword1\" id=\"cityField\">Област:<br />\r\n          <select id=\"CitySelector\" required [(ngModel)]=\"model.city\" name=\"city\">\r\n            <option *ngFor=\"let c of cities\" [value]=\"c\">{{c}}</option>\r\n          </select>\r\n        </label>\r\n      </div>\r\n\r\n      <!--Age-->\r\n      <div id=\"age\">\r\n        <label for=\"exampleInputPassword1\">Възраст >=</label>\r\n        <input type=\"Number\" class=\"form-control\" #ageField id=\"ageField\" placeholder=\"0\" required  name=\"age\">\r\n      </div>\r\n      \r\n      <!--Vacinated-->  \r\n      <div class=\"form-check\" id=\"Vaccinated\">\r\n        <label class=\"form-check-label\" id=\"VaccinatedField\">\r\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\" #vaccinatedCheck  name=\"vaccinated\"> Ваксинирана\r\n        </label>\r\n      </div>\r\n\r\n      <!--Castrated-->\r\n      <div class=\"form-check\" id=\"Castrated\">\r\n        <label class=\"form-check-label\" id=\"CastratedField\">\r\n          <input class=\"form-check-input\"  type=\"checkbox\" value=\"\" checked=\"\" #castratedCheck name=\"castrated\" > Кастрирана\r\n        </label>\r\n      </div>\r\n      \r\n      <!--Button-->\r\n      <button  (click)=\"test()\" type=\"submit\" id=\"searchButton\" class=\"btn btn-primary\">Търси</button>\r\n    </div>\r\n  </div>\r\n  </form>\r\n\r\n     \r\n      \r\n\r\n      \r\n\r\n"

/***/ }),

/***/ "./src/app/search-options/search-options.component.ts":
/*!************************************************************!*\
  !*** ./src/app/search-options/search-options.component.ts ***!
  \************************************************************/
/*! exports provided: SearchOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchOptionsComponent", function() { return SearchOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cat */ "./src/app/cat.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchOptionsComponent = /** @class */ (function () {
    //vaccinatedCheck
    //CONSTRUCTOR
    function SearchOptionsComponent() {
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.model = new _cat__WEBPACK_IMPORTED_MODULE_1__["Cat"]("", "Всички", 0, null, null, null, null, null, "Всички");
    }
    //FUNCTIONS
    SearchOptionsComponent.prototype.test = function () {
        //VARIABLES
        var ageValue = parseInt(this.ageField.nativeElement.value);
        var vaccinated = this.vaccinatedCheck.nativeElement.checked;
        var castrated = this.castratedCheck.nativeElement.checked;
        //TESTING
        console.log(this.model.age + " vaccinated: " + vaccinated, castrated);
        //SETTING DATA
        this.model.castrated = castrated;
        this.model.vaccinated = vaccinated;
        this.model.age = ageValue;
        //EMITTING
        this.options = this.model;
        this.searchEvent.emit(this.options);
    };
    SearchOptionsComponent.prototype.ngOnInit = function () {
        //VALUES FROM MODEL
        this.ageField.nativeElement.value = 0;
        var vaccinated = this.vaccinatedCheck.nativeElement.checked;
        var castrated = this.castratedCheck.nativeElement.checked;
        this.model.castrated = castrated;
        this.model.vaccinated = vaccinated;
        //BREEDS AND CITIES
        this.breeds = [
            "Всички",
            "Улична",
            "Девон рекс",
            "Герман Рекс",
            "Манкс",
            "Шотландска клепоуха котка",
            "Японски бобтейл",
            "Ориенталска котка",
            "Норвежска горска котка",
            "Персийска котка",
            "Европейска късокосместа котка",
            "Мейн Куун",
            "Сиамска котка",
            "Кимрик",
            "Регдол",
            "Турска ангорска котка",
            "Сибирска котка",
            "Сомалийска котка",
            "Руска синя котка",
            "Бурманска котка",
            "Британска късокосместа котка",
            "Бирманска котка",
            "Абисинска котка",
            "Персийска котка",
        ];
        this.cities = [
            "Всички", "Благоевград", "Бургас", "Варна", "Велико Търново", "Видин", "Враца", "Габрово", "Добрич", "Кърджали", "Кюстендил", "Ловеч", "Монтана", "Пазарджик", "Перник", "Плевен", "Пловдив", "Разград", "Русе", "Силистра", "Сливен", "Смолян", "София", "Стара Загора", "Търговище", "Хасково", "Шумен", "Ямбол"
        ];
        //EMITTING MODEL
        this.model.age = parseInt(this.ageField.nativeElement.value);
        this.model.city = "Всички";
        this.model.breed = "Всички";
        console.log(this.model);
        this.options = this.model;
        this.searchEvent.emit(this.options);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchOptionsComponent.prototype, "searchEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ageField'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchOptionsComponent.prototype, "ageField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('vaccinatedCheck'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchOptionsComponent.prototype, "vaccinatedCheck", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('castratedCheck'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchOptionsComponent.prototype, "castratedCheck", void 0);
    SearchOptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-options',
            template: __webpack_require__(/*! ./search-options.component.html */ "./src/app/search-options/search-options.component.html"),
            styles: [__webpack_require__(/*! ./search-options.component.css */ "./src/app/search-options/search-options.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchOptionsComponent);
    return SearchOptionsComponent;
}());



/***/ }),

/***/ "./src/app/services/kinvey-remote-service.service.js":
/*!***********************************************************!*\
  !*** ./src/app/services/kinvey-remote-service.service.js ***!
  \***********************************************************/
/*! exports provided: KinveyRemoteServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KinveyRemoteServiceService", function() { return KinveyRemoteServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var appKey = "kid_rkMvaFdSX";
var appSecret = "a6ebc734c55d4407b0442a0b17d0a91e";
var kinveyBaseUrl = "https://baas.kinvey.com/";
var getAllUrl = kinveyBaseUrl + "appdata" + "/" + appKey + "/flats";
//POST /user/:appKey/ HTTP/1.1
var KinveyRemoteServiceService = /** @class */ (function () {
    function KinveyRemoteServiceService(http) {
        this.http = http;
    }
    //MAKE AUTH
    KinveyRemoteServiceService.prototype.makeAuth = function (type) {
        return type === "basic"
            ? "Basic " + btoa(appKey + ":" + appSecret)
            : "Kinvey " + localStorage.getItem("authtoken");
    };
    //IS AUTH
    KinveyRemoteServiceService.prototype.isAuth = function () {
        return localStorage.getItem("authtoken") !== null;
    };
    //SAVE SESSION
    KinveyRemoteServiceService.prototype.saveSession = function (userData) {
        localStorage.setItem("authtoken", userData._kmd.authtoken);
        localStorage.setItem("username", userData.username);
        localStorage.setItem("userId", userData._id);
        localStorage.setItem("picUrl", userData.profilePic);
        localStorage.setItem("isAdmin", userData.isAdmin);
    };
    //POST
    KinveyRemoteServiceService.prototype.post = function (url, data, auth) {
        return this.http.post(url, data, {
            headers: { authorization: this.makeAuth(auth) }
        });
    };
    //PUT
    KinveyRemoteServiceService.prototype.put = function (url, data, auth) {
        return this.http.put(url, data, {
            headers: { authorization: this.makeAuth(auth) }
        });
    };
    //GET
    KinveyRemoteServiceService.prototype.get = function (url, auth) {
        return this.http.get(url, {
            headers: { authorization: this.makeAuth(auth) }
        });
    };
    //DELETE
    KinveyRemoteServiceService.prototype.delete = function (url, id, auth) {
        return this.http.delete(url, {
            headers: { authorization: this.makeAuth(auth) }
        });
    };
    //REGISTER
    KinveyRemoteServiceService.prototype.register = function (username, password, profilePic) {
        //POST /user/:appKey/ HTTP/1.1
        var obj = {
            username: username,
            password: password,
            profilePic: "https://boygeniusreport.files.wordpress.com/2016/05/scared-surprised-cat-face.jpg?quality=98&strip=all&w=782"
        };
        var url = kinveyBaseUrl + "user" + "/" + appKey + "/";
        var data = obj;
        return this.post(url, data, "basic");
    };
    //LOGIN
    KinveyRemoteServiceService.prototype.login = function (username, password) {
        //POST /user/:appKey/login HTTP/1.1
        var obj = { username: username, password: password };
        var url = kinveyBaseUrl + "user" + "/" + appKey + "/login";
        var data = obj;
        return this.post(url, data, "basic");
    };
    //LOGOUT
    KinveyRemoteServiceService.prototype.logout = function () {
        //POST /user/:appKey/_logout HTTP/1.1
        var url = kinveyBaseUrl + "user" + "/" + appKey + "/_logout";
        var data = null;
        return this.post(url, data, "kinvey");
    };
    //UPDATE USER
    KinveyRemoteServiceService.prototype.updateUser = function (username, password, id, profilePic) {
        // PUT/user/:appKey/:id HTTP / 1.1
        var obj = { username: username, profilePic: profilePic };
        var url = kinveyBaseUrl + "user" + "/" + appKey + "/" + id;
        var data = obj;
        return this.put(url, data, "kinvey");
    };
    //CREATE CAT
    KinveyRemoteServiceService.prototype.CreateCat = function (name, breed, age, contactNumber, information, imgUrl, imgUrl2, imgUrl3, imgUrl4, vaccinated, castrated, city) {
        // /appdata/:appKey/:collectionName HTTP/1.1
        var obj = {
            name: name,
            breed: breed,
            age: age,
            contactNumber: contactNumber,
            information: information,
            imgUrl: imgUrl,
            imgUrl2: imgUrl2,
            imgUrl3: imgUrl3,
            imgUrl4: imgUrl4,
            vaccinated: vaccinated,
            castrated: castrated,
            city: city
        };
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Cats";
        var data = obj;
        return this.post(url, data, "kinvey");
    };
    //CREATE MESSAGE
    KinveyRemoteServiceService.prototype.CreateMessage = function (message, receiver, sender, open, senderName, madeDate, catName) {
        // /appdata/:appKey/:collectionName HTTP/1.1
        var obj = {
            message: message,
            receiver: receiver,
            sender: sender,
            open: open,
            senderName: senderName,
            madeDate: madeDate,
            catName: catName
        };
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Messages";
        var data = obj;
        return this.post(url, data, "kinvey");
    };
    //UPDATE MESSAGE
    KinveyRemoteServiceService.prototype.UpdateMessage = function (catName, senderName, open, sender, receiver, message, madeDate, id) {
        ///appdata/:appKey/:collectionName/:id HTTP/1.1
        var obj = {
            catName: catName,
            senderName: senderName,
            open: open,
            sender: sender,
            receiver: receiver,
            message: message,
            madeDate: madeDate
        };
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Messages" + "/" + id;
        var data = obj;
        return this.put(url, data, "kinvey ");
    };
    //DELETE MESSAGE
    KinveyRemoteServiceService.prototype.DeleteMessage = function (id) {
        //DELETE /appdata/:appKey/:collectionName/:id?query=... HTTP/1.1
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Messages" + "/" + id;
        return this.delete(url, id, "kinvey ");
    };
    //GET ALL CATS
    KinveyRemoteServiceService.prototype.GetAllCats = function () {
        // /appdata/:appKey/:collectionName HTTP/1.1
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Cats";
        return this.get(url, "kinvey");
    };
    //GET ALL USERS
    KinveyRemoteServiceService.prototype.GetAllUsers = function () {
        // GET /user/:appKey/:id HTTP/1.1
        // return remote.get('appdata', "Products", 'kinvey');
        var url = kinveyBaseUrl + "user" + "/" + appKey + "/";
        return this.get(url, "kinvey");
    };
    //DELETE USER
    KinveyRemoteServiceService.prototype.DeleteUser = function (id) {
        //DELETE /user/:appKey/:id HTTP/1.1
        var url = kinveyBaseUrl + "user" + "/" + appKey + "/" + id;
        return this.delete(url, null, "kinvey");
    };
    //GET CAT BY ID
    KinveyRemoteServiceService.prototype.GetCatById = function (id) {
        //GET /appdata/:appKey/:collectionName/:id
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Cats" + "/" + id;
        return this.get(url, "kinvey");
    };
    //UPDATE CAT BY ID
    KinveyRemoteServiceService.prototype.UpdateCat = function (name, breed, age, contactNumber, information, imgUrl, id) {
        ///appdata/:appKey/:collectionName/:id HTTP/1.1
        var obj = { name: name, breed: breed, age: age, contactNumber: contactNumber, information: information, imgUrl: imgUrl };
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Cats" + "/" + id;
        var data = obj;
        return this.put(url, data, "kinvey ");
    };
    //DELETE CAT
    KinveyRemoteServiceService.prototype.deleteCat = function (id) {
        //DELETE /appdata/:appKey/:collectionName/:id?query=... HTTP/1.1
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Cats" + "/" + id;
        return this.delete(url, id, "kinvey");
    };
    //GET MESSAGES
    KinveyRemoteServiceService.prototype.GetAllMessages = function () {
        // /appdata/:appKey/:collectionName HTTP/1.1
        // return remote.get('appdata', "Products", 'kinvey');
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Messages";
        return this.get(url, "kinvey");
    };
    //GET MESSAGES
    KinveyRemoteServiceService.prototype.GetAllMessagesById = function (id) {
        // /appdata/:appKey/:collectionName HTTP/1.1
        // return remote.get('appdata', "Products", 'kinvey');
        var url = kinveyBaseUrl + "Messages" + "/" + appKey + "/" + id;
        return this.get(url, "kinvey");
    };
    //GET MESSAGE BY ID
    KinveyRemoteServiceService.prototype.GetMessageById = function (id) {
        //GET /appdata/:appKey/:collectionName/:id
        //let url = kinveyBaseUrl + 'appdata' + "/" + appKey + "/" + "Cats" + "/" + id
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Messages" + "/" + id;
        return this.get(url, "kinvey");
    };
    //GET USER BY ID
    KinveyRemoteServiceService.prototype.GetUserById = function (id) {
        //GET /user/:appKey/:id HTTP/1.1
        var url = kinveyBaseUrl + "user" + "/" + appKey + "/" + id;
        return this.get(url, "kinvey");
    };
    //DELETE MESSAGE BY ID
    KinveyRemoteServiceService.prototype.DeleteMessageById = function (id) {
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Messages" + "/" + id;
        return this.delete(url, id, "kinvey");
    };
    KinveyRemoteServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], KinveyRemoteServiceService);
    return KinveyRemoteServiceService;
}());

//# sourceMappingURL=kinvey-remote-service.service.js.map

/***/ }),

/***/ "./src/app/services/kinvey-remote-service.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/kinvey-remote-service.service.ts ***!
  \***********************************************************/
/*! exports provided: KinveyRemoteServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KinveyRemoteServiceService", function() { return KinveyRemoteServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var appKey = "kid_rkMvaFdSX";
var appSecret = "a6ebc734c55d4407b0442a0b17d0a91e";
var kinveyBaseUrl = "https://baas.kinvey.com/";
var getAllUrl = kinveyBaseUrl + "appdata" + "/" + appKey + "/flats";
//POST /user/:appKey/ HTTP/1.1
var KinveyRemoteServiceService = /** @class */ (function () {
    function KinveyRemoteServiceService(http) {
        this.http = http;
    }
    //MAKE AUTH
    KinveyRemoteServiceService.prototype.makeAuth = function (type) {
        return type === "basic"
            ? "Basic " + btoa(appKey + ":" + appSecret)
            : "Kinvey " + localStorage.getItem("authtoken");
    };
    //IS AUTH
    KinveyRemoteServiceService.prototype.isAuth = function () {
        return localStorage.getItem("authtoken") !== null;
    };
    //SAVE SESSION
    KinveyRemoteServiceService.prototype.saveSession = function (userData) {
        localStorage.setItem("authtoken", userData._kmd.authtoken);
        localStorage.setItem("username", userData.username);
        localStorage.setItem("userId", userData._id);
        localStorage.setItem("picUrl", userData.profilePic);
        localStorage.setItem("isAdmin", userData.isAdmin);
    };
    //POST
    KinveyRemoteServiceService.prototype.post = function (url, data, auth) {
        return this.http.post(url, data, {
            headers: { authorization: this.makeAuth(auth) }
        });
    };
    //PUT
    KinveyRemoteServiceService.prototype.put = function (url, data, auth) {
        return this.http.put(url, data, {
            headers: { authorization: this.makeAuth(auth) }
        });
    };
    //GET
    KinveyRemoteServiceService.prototype.get = function (url, auth) {
        return this.http.get(url, {
            headers: { authorization: this.makeAuth(auth) }
        });
    };
    //DELETE
    KinveyRemoteServiceService.prototype.delete = function (url, id, auth) {
        return this.http.delete(url, {
            headers: { authorization: this.makeAuth(auth) }
        });
    };
    //REGISTER
    KinveyRemoteServiceService.prototype.register = function (username, password, profilePic) {
        //POST /user/:appKey/ HTTP/1.1
        var obj = {
            username: username,
            password: password,
            profilePic: "https://boygeniusreport.files.wordpress.com/2016/05/scared-surprised-cat-face.jpg?quality=98&strip=all&w=782"
        };
        var url = kinveyBaseUrl + "user" + "/" + appKey + "/";
        var data = obj;
        return this.post(url, data, "basic");
    };
    //LOGIN
    KinveyRemoteServiceService.prototype.login = function (username, password) {
        //POST /user/:appKey/login HTTP/1.1
        var obj = { username: username, password: password };
        var url = kinveyBaseUrl + "user" + "/" + appKey + "/login";
        var data = obj;
        return this.post(url, data, "basic");
    };
    //LOGOUT
    KinveyRemoteServiceService.prototype.logout = function () {
        //POST /user/:appKey/_logout HTTP/1.1
        var url = kinveyBaseUrl + "user" + "/" + appKey + "/_logout";
        var data = null;
        return this.post(url, data, "kinvey");
    };
    //UPDATE USER
    KinveyRemoteServiceService.prototype.updateUser = function (username, password, id, profilePic) {
        // PUT/user/:appKey/:id HTTP / 1.1
        var obj = { username: username, profilePic: profilePic };
        var url = kinveyBaseUrl + "user" + "/" + appKey + "/" + id;
        var data = obj;
        return this.put(url, data, "kinvey");
    };
    //CREATE CAT
    KinveyRemoteServiceService.prototype.CreateCat = function (name, breed, age, contactNumber, information, imgUrl, imgUrl2, imgUrl3, imgUrl4, vaccinated, castrated, city) {
        // /appdata/:appKey/:collectionName HTTP/1.1
        var obj = {
            name: name,
            breed: breed,
            age: age,
            contactNumber: contactNumber,
            information: information,
            imgUrl: imgUrl,
            imgUrl2: imgUrl2,
            imgUrl3: imgUrl3,
            imgUrl4: imgUrl4,
            vaccinated: vaccinated,
            castrated: castrated,
            city: city
        };
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Cats";
        var data = obj;
        return this.post(url, data, "kinvey");
    };
    //CREATE MESSAGE
    KinveyRemoteServiceService.prototype.CreateMessage = function (message, receiver, sender, open, senderName, madeDate, catName) {
        // /appdata/:appKey/:collectionName HTTP/1.1
        var obj = {
            message: message,
            receiver: receiver,
            sender: sender,
            open: open,
            senderName: senderName,
            madeDate: madeDate,
            catName: catName
        };
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Messages";
        var data = obj;
        return this.post(url, data, "kinvey");
    };
    //UPDATE MESSAGE
    KinveyRemoteServiceService.prototype.UpdateMessage = function (catName, senderName, open, sender, receiver, message, madeDate, id) {
        ///appdata/:appKey/:collectionName/:id HTTP/1.1
        var obj = {
            catName: catName,
            senderName: senderName,
            open: open,
            sender: sender,
            receiver: receiver,
            message: message,
            madeDate: madeDate
        };
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Messages" + "/" + id;
        var data = obj;
        return this.put(url, data, "kinvey ");
    };
    //DELETE MESSAGE
    KinveyRemoteServiceService.prototype.DeleteMessage = function (id) {
        //DELETE /appdata/:appKey/:collectionName/:id?query=... HTTP/1.1
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Messages" + "/" + id;
        return this.delete(url, id, "kinvey ");
    };
    //GET ALL CATS
    KinveyRemoteServiceService.prototype.GetAllCats = function () {
        // /appdata/:appKey/:collectionName HTTP/1.1
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Cats";
        return this.get(url, "kinvey");
    };
    //GET ALL USERS
    KinveyRemoteServiceService.prototype.GetAllUsers = function () {
        // GET /user/:appKey/:id HTTP/1.1
        // return remote.get('appdata', "Products", 'kinvey');
        var url = kinveyBaseUrl + "user" + "/" + appKey + "/";
        return this.get(url, "kinvey");
    };
    //DELETE USER
    KinveyRemoteServiceService.prototype.DeleteUser = function (id) {
        //DELETE /user/:appKey/:id HTTP/1.1
        var url = kinveyBaseUrl + "user" + "/" + appKey + "/" + id;
        return this.delete(url, null, "kinvey");
    };
    //GET CAT BY ID
    KinveyRemoteServiceService.prototype.GetCatById = function (id) {
        //GET /appdata/:appKey/:collectionName/:id
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Cats" + "/" + id;
        return this.get(url, "kinvey");
    };
    //UPDATE CAT BY ID
    KinveyRemoteServiceService.prototype.UpdateCat = function (name, breed, age, contactNumber, information, imgUrl, id) {
        ///appdata/:appKey/:collectionName/:id HTTP/1.1
        var obj = { name: name, breed: breed, age: age, contactNumber: contactNumber, information: information, imgUrl: imgUrl };
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Cats" + "/" + id;
        var data = obj;
        return this.put(url, data, "kinvey ");
    };
    //DELETE CAT
    KinveyRemoteServiceService.prototype.deleteCat = function (id) {
        //DELETE /appdata/:appKey/:collectionName/:id?query=... HTTP/1.1
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Cats" + "/" + id;
        return this.delete(url, id, "kinvey");
    };
    //GET MESSAGES
    KinveyRemoteServiceService.prototype.GetAllMessages = function () {
        // /appdata/:appKey/:collectionName HTTP/1.1
        // return remote.get('appdata', "Products", 'kinvey');
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Messages";
        return this.get(url, "kinvey");
    };
    //GET MESSAGES
    KinveyRemoteServiceService.prototype.GetAllMessagesById = function (id) {
        // /appdata/:appKey/:collectionName HTTP/1.1
        // return remote.get('appdata', "Products", 'kinvey');
        var url = kinveyBaseUrl + "Messages" + "/" + appKey + "/" + id;
        return this.get(url, "kinvey");
    };
    //GET MESSAGE BY ID
    KinveyRemoteServiceService.prototype.GetMessageById = function (id) {
        //GET /appdata/:appKey/:collectionName/:id
        //let url = kinveyBaseUrl + 'appdata' + "/" + appKey + "/" + "Cats" + "/" + id
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Messages" + "/" + id;
        return this.get(url, "kinvey");
    };
    //GET USER BY ID
    KinveyRemoteServiceService.prototype.GetUserById = function (id) {
        //GET /user/:appKey/:id HTTP/1.1
        var url = kinveyBaseUrl + "user" + "/" + appKey + "/" + id;
        return this.get(url, "kinvey");
    };
    //DELETE MESSAGE BY ID
    KinveyRemoteServiceService.prototype.DeleteMessageById = function (id) {
        var url = kinveyBaseUrl + "appdata" + "/" + appKey + "/" + "Messages" + "/" + id;
        return this.delete(url, id, "kinvey");
    };
    KinveyRemoteServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], KinveyRemoteServiceService);
    return KinveyRemoteServiceService;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  sign-in works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignInComponent = /** @class */ (function () {
    function SignInComponent() {
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/user-profile-card/user-profile-card.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/user-profile-card/user-profile-card.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#UserCard{\r\n   \r\n    height:auto;\r\n    width:300px;\r\n    background-color:white;\r\n    margin:20px 36px;\r\n    display:inline-block;\r\n    \r\n\r\n}\r\n\r\n#profilePic{\r\n  text-align: left;\r\n  background-color: #eee;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 20px;\r\n  border-style:solid;\r\n  border-color:black;\r\n  border-radius:30%;\r\n  \r\n}\r\n\r\n#username{\r\n    text-align:center;\r\n    font-weight: 900;\r\n    \r\n}\r\n\r\n#picUrl{\r\n    text-align:center;\r\n    \r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#IsAdmin{\r\n    font-weight:900;\r\n    font-size:25px;\r\n}\r\n\r\n#inputField{\r\n    display:block;\r\n}\r\n\r\n#changeButton{\r\n    border-radius:5px;\r\n    border-style:solid;\r\n    border-color:black;\r\n    background-color:darkred;\r\n}\r\n\r\n#changeButton:hover{\r\n-webkit-transform: scale(1.20);\r\n        transform: scale(1.20);\r\n  background-color:rgb(110, 3, 3);\r\n\r\n  outline: 0;\r\n  box-shadow: inset 5px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\r\n  \r\n}\r\n\r\n#usernameField{\r\n    width:210px;\r\n    margin:auto;\r\n    text-align:center;\r\n}\r\n\r\n#urlField{\r\n    text-align:center;\r\n    width:140px;\r\n    margin:auto;\r\n}"

/***/ }),

/***/ "./src/app/user-profile-card/user-profile-card.component.html":
/*!********************************************************************!*\
  !*** ./src/app/user-profile-card/user-profile-card.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n<a *ngIf=\"IsDisabled()\">\r\n  <div id=\"UserCard\" class=\"card\">\r\n    <img id=\"profilePic\" src= {{user.profilePic}} alt=\"Smiley face\" height=\"160\" width=\"200\">\r\n    <h3 id=\"username\">{{user.username}}</h3>\r\n    <div id=\"picUrl\" class=\"form-group\">\r\n      <button type=\"button\" id=\"changeButton\" class=\"btn btn-success\" (click)=\"testFunc()\" >Delete</button>\r\n    </div>\r\n  </div>\r\n</a>\r\n    \r\n    \r\n      \r\n      \r\n"

/***/ }),

/***/ "./src/app/user-profile-card/user-profile-card.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/user-profile-card/user-profile-card.component.ts ***!
  \******************************************************************/
/*! exports provided: UserProfileCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileCardComponent", function() { return UserProfileCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/kinvey-remote-service.service.js */ "./src/app/services/kinvey-remote-service.service.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfileCardComponent = /** @class */ (function () {
    function UserProfileCardComponent(remote, toastr) {
        this.remote = remote;
        this.toastr = toastr;
        this.changedUsers = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserProfileCardComponent.prototype.testFunc = function () {
        var _this = this;
        if (localStorage.getItem("isAdmin") === "Yes") {
            this.remote.DeleteUser(this.user._id).subscribe(function (data) {
                _this.changedUsers.emit(_this.user);
                _this.toastr.info("User Deleted");
            });
        }
        else {
            this.toastr.error("Not Admin");
        }
    };
    UserProfileCardComponent.prototype.IsDisabled = function () {
        if (this.user._kmd.status) {
            return false;
        }
        else
            return true;
    };
    UserProfileCardComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _user__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], UserProfileCardComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserProfileCardComponent.prototype, "changedUsers", void 0);
    UserProfileCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-user-profile-card",
            template: __webpack_require__(/*! ./user-profile-card.component.html */ "./src/app/user-profile-card/user-profile-card.component.html"),
            styles: [__webpack_require__(/*! ./user-profile-card.component.css */ "./src/app/user-profile-card/user-profile-card.component.css")]
        }),
        __metadata("design:paramtypes", [_services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__["KinveyRemoteServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], UserProfileCardComponent);
    return UserProfileCardComponent;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(username, password, picUrl, repeatPassword, isAdmin, _id, _kmd) {
        this.username = username;
        this.password = password;
        this.picUrl = picUrl;
        this.repeatPassword = repeatPassword;
        this.isAdmin = isAdmin;
        this._id = _id;
        this._kmd = _kmd;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/view-all/view-all.component.css":
/*!*************************************************!*\
  !*** ./src/app/view-all/view-all.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#listView{  \r\n    width:auto;\r\n    max-width:1150px;\r\n    background-color:white;\r\n    height:auto;\r\n    margin:20px 30px;\r\n    position:relative;\r\n    border-width:4px;\r\n    margin:auto;\r\n    display:inline-block;   \r\n}\r\n\r\n#allTitle{\r\n    font-weight: 900;\r\n    font-size:80px;\r\n}\r\n\r\n.card{\r\n    margin:45px 20px;\r\n    float:left;\r\n    width:330px;\r\n    height:400px;\r\n}\r\n\r\n#searchOptions{\r\n    height:auto;\r\n}\r\n\r\n#viewAllForm{\r\n    margin:auto;\r\n}\r\n\r\n#catCard{\r\n    width:315px;\r\n    height: auto;\r\n    display:inline-block;\r\n    margin:10px 10px;\r\n}\r\n\r\n#catPic{\r\n    border-style:solid;\r\n    border-radius:5%;\r\n}\r\n\r\n#buttonCardCat{\r\n    margin:10px;\r\n    width:180px;\r\n    background-color:green;\r\n    border-color:black;\r\n}\r\n\r\n#buttonCardCat:hover{\r\n-webkit-transform: scale(1.13);\r\n        transform: scale(1.13);\r\n    outline: 0;\r\n    box-shadow: inset 5px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\r\n}\r\n\r\n#name{\r\n    font-weight:900;\r\n}\r\n\r\n#pageInfo{\r\n    color:black;\r\n    background-color:none;\r\n    font-weight:900;\r\n    text-align: center;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n#breed{\r\n    font-weight:700;  \r\n}\r\n\r\n#age{\r\n    font-weight:650;\r\n}\r\n\r\n\r\n    \r\n\r\n"

/***/ }),

/***/ "./src/app/view-all/view-all.component.html":
/*!**************************************************!*\
  !*** ./src/app/view-all/view-all.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pageInfo\">\r\n  <div id=\"viewAllForm\">\r\n    <app-search-options (searchEvent)=\"receiveSearch($event)\"></app-search-options>\r\n    <div class=\"jumbotron\" id=\"listView\">\r\n      <app-cat-card [searchOptions2]=\"searchOptions\" (numberOfCats)=\"numberCats($event)\" *ngFor=\"let c of cats\" [cat]=\"c\"></app-cat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/view-all/view-all.component.ts":
/*!************************************************!*\
  !*** ./src/app/view-all/view-all.component.ts ***!
  \************************************************/
/*! exports provided: ViewAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllComponent", function() { return ViewAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/kinvey-remote-service.service.js */ "./src/app/services/kinvey-remote-service.service.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewAllComponent = /** @class */ (function () {
    function ViewAllComponent(remote) {
        this.remote = remote;
    }
    ViewAllComponent.prototype.receiveSearch = function ($event) {
        this.searchOptions = $event;
        console.log(this.searchOptions);
    };
    ViewAllComponent.prototype.numberCats = function ($event) {
        console.log($event);
    };
    ViewAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.remote.GetAllCats().subscribe(function (data) {
            _this.cats = data;
            console.log(_this.cats);
            console.log(_this.cats);
        });
    };
    ViewAllComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-view-all",
            template: __webpack_require__(/*! ./view-all.component.html */ "./src/app/view-all/view-all.component.html"),
            styles: [__webpack_require__(/*! ./view-all.component.css */ "./src/app/view-all/view-all.component.css")]
        }),
        __metadata("design:paramtypes", [_services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_1__["KinveyRemoteServiceService"]])
    ], ViewAllComponent);
    return ViewAllComponent;
}());



/***/ }),

/***/ "./src/app/view-cat-info/view-cat-info.component.css":
/*!***********************************************************!*\
  !*** ./src/app/view-cat-info/view-cat-info.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ENTIRE WRAPPER */\r\n#wrapper{\r\n    margin: auto;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap:wrap;\r\n    justify-content: center;\r\n    width: 100%;\r\n    padding: 10px;\r\n\r\n}\r\n/* INFORMATION DIV */\r\n#sadBox2{\r\nwidth:570px;\r\nheight:auto;\r\npadding:10px;\r\nborder-width:4px;\r\nmargin:40px 0px;\r\n}\r\n#textsArea{\r\n    resize: none;\r\n}\r\n/* TITLE AND OTHERS WRAPPER */\r\n#divsWrapperLeft{\r\n    width:180px;\r\n}\r\n#infoUpperHalf{\r\n    display:flex;\r\n    margin:auto;\r\n}\r\n/* WRAPPER VACINATED CASTRATED */\r\n#wrapCasAndVac{\r\n    display:flex;\r\n    flex-direction: column;\r\n    margin:3px auto;\r\n}\r\n/* CASTRATED */\r\n#Castrated{\r\n    text-align:center;\r\n    display:flex;\r\n    flex-direction:column;\r\n    justify-content: center;\r\n    width:180px;\r\n    font-size:23px;\r\n}\r\n#castrated2{\r\n    margin:auto;\r\n}\r\n/* VACCINATED */\r\n#Vaccinated{\r\n    text-align:center;\r\n    display:flex;\r\n    flex-direction:column;\r\n    justify-content: center;\r\n    width:180px;\r\n    font-size:23px;\r\n}\r\n#vaccinated2{\r\n    margin:auto;\r\n}\r\n/* TITLE - ignore wrong name for css selector */\r\n#titleMain{\r\n    width: 180px;\r\n    font-size:25px;\r\n    float:left;\r\n    text-align:center;\r\n}\r\n#NameArea{\r\n   width:180px;\r\n   resize:none;\r\n   color:black;\r\n   font-size:25px;\r\n   text-align:center;\r\n}\r\n/* BREED AND CITY WRAPPER */\r\n#breedAndCity{\r\n    display:flex;\r\n    flex-direction:row;\r\n    margin:auto;\r\n    justify-content:space-between;\r\n}\r\n/* BREED */\r\n#breedMain{\r\n    width:180px;\r\n    text-align:center;\r\n}\r\n#BreedArea{\r\n    width:180px;\r\n    border-color:black;\r\n    border-width:2px;\r\n    text-align-last:center;\r\n}\r\n/* CITY */\r\n#cityMain{\r\n    width:180px;\r\n    text-align:center;\r\n}\r\n#cityArea{\r\n    width:180px;\r\n    border-color:black;\r\n    border-width:2px;\r\n    text-align-last:center;\r\n}\r\n/* NUMBER */\r\n#NumberArea{\r\n    border-color:black;\r\n    border-width:2px;\r\n    width:180px;\r\n    font-size:30px;\r\n    text-align:center;\r\n}\r\n/* AGE */\r\n#age{\r\n    text-align: center;\r\n    width:180px;\r\n    font-size:25px;\r\n}\r\n#AgeArea{\r\n    font-size:25px;\r\n    text-align: center;\r\n    resize: none;\r\n    width:180px;\r\n    border-color:black;\r\n    border-width:2px;\r\n}\r\n/* DESCRIPTION / INFORMATION */\r\n#info{\r\n    text-align: center;\r\n    float:right;\r\n    margin: 0px 10px;\r\n    width:280px;\r\n    height:380px;\r\n    font-size:25px;\r\n}\r\n#infoArea{\r\n    resize: none;\r\n    height:440px;\r\n    font-size:25px;\r\n}\r\n/* IMG WRAPPER */\r\n#imgTitles{\r\n    text-align:center;\r\n}\r\n#imgMain{\r\n    resize:none;\r\n    text-align:center;\r\n    width:460px;\r\n    margin:10px auto;\r\n    background-color:red;\r\n}\r\n#holder{\r\n    transition: 0.6s;\r\n}\r\n#holder:hover{\r\n    -webkit-transform:scale(1.15);\r\n            transform:scale(1.15);\r\n    transition: 0.6s;\r\n    display:inline-block;\r\n}\r\n#img{\r\n    resize:none;\r\n    height:45px;\r\n}\r\n/* BUTTON WRAPPER */\r\n#buttonWrapper{\r\n    display:flex;\r\n    justify-content: space-between;\r\n    margin:15px auto;\r\n}\r\n/* DELETE BUTTON */\r\n#dangerButton{\r\n    border-width:2px;\r\n    border-color:black;\r\n    margin: 0px 50px;\r\n}\r\n#dangerButton:hover{\r\n-webkit-transform: scale(1.20);\r\n        transform: scale(1.20);\r\n  background-color:rgb(110, 3, 3);\r\n  outline: 0;\r\n  box-shadow: inset 5px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6); \r\n}\r\n/* CHANGE BUTTON */\r\n#changeButton{\r\n    border-width:2px;\r\n    border-color:black;\r\n    margin: 0px 50px;\r\n}\r\n#changeButton:hover{\r\n-webkit-transform: scale(1.20);\r\n        transform: scale(1.20);\r\n  outline: 0;\r\n  box-shadow: inset 5px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6); \r\n}\r\n/* PM BUTTON */\r\n#sendPmButton{\r\n    margin: 15px 20px;\r\n    width:250px;\r\n    margin:auto;\r\n    border-width:2px;\r\n    border-color:black;\r\n}\r\n#sendPmButton:hover{\r\n-webkit-transform: scale(1.20);\r\n        transform: scale(1.20);\r\n  outline: 0;\r\n  box-shadow: inset 5px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\r\n}\r\n/*SLIDER*/\r\n/* Picture */\r\n#catPiture{\r\n    float:left;\r\n    height:670px;\r\n    width:580px;\r\n    display:relative;\r\n    margin: 30px 50px;\r\n    border-radius:5%;\r\n    text-align:center;\r\n    margin:0px 150px;\r\n}\r\n#imagePreview2{\r\n    border-style:solid;\r\n    border-radius:5%;\r\n    background-color:white;\r\n    display:inline-block;\r\n    -webkit-animation: popIn 0.6s linear;\r\n            animation: popIn 0.6s linear;\r\n}\r\n/* Arrow Left */\r\n#arrowLeft{\r\n    display:inline-block;\r\n    position:relative;\r\n    left:-380px;\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n    margin: 10px 10px;\r\n    cursor: pointer;\r\n    min-height:110px;\r\n    min-width:200px;\r\n}\r\n#arrowLeft:hover{\r\n    -webkit-transform:scale(1.18) rotate(180deg);\r\n            transform:scale(1.18) rotate(180deg);\r\n    transition: 0.7s;\r\n}\r\n/* Arrow Rigth */\r\n#arrowRigth{\r\n    display:inline-block;\r\n    position:relative;\r\n    right:-380px;\r\n    margin: 10px 10px;\r\n    cursor: pointer;\r\n    min-height:110px;\r\n    min-width:200px;\r\n}\r\n#arrowRigth:hover{\r\n    -webkit-transform:scale(1.18);\r\n            transform:scale(1.18);\r\n    transition: 0.7s;\r\n}\r\n/*arrowWrapper */\r\n#arrowWrapper{\r\n    display:flex;\r\n}\r\n#indexNumber{\r\n    font-size:100px;\r\n}\r\n#buttonCreatePost:hover{\r\n-webkit-transform: scale(1.12);\r\n        transform: scale(1.12);\r\n  outline: 0;\r\n  box-shadow: inset 5px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\r\n}\r\n/* Animations */\r\n@-webkit-keyframes popIn\r\n{ \r\n    0%{\r\n        opacity:0;\r\n        -webkit-transform: translate(0px, 10px);\r\n                transform: translate(0px, 10px);\r\n    } \r\n    100%{\r\n        opacity:100;\r\n        \r\n    }\r\n\r\n}\r\n@keyframes popIn\r\n{ \r\n    0%{\r\n        opacity:0;\r\n        -webkit-transform: translate(0px, 10px);\r\n                transform: translate(0px, 10px);\r\n    } \r\n    100%{\r\n        opacity:100;\r\n        \r\n    }\r\n\r\n}\r\n\r\n    \r\n\r\n\r\n\r\n\r\n    "

/***/ }),

/***/ "./src/app/view-cat-info/view-cat-info.component.html":
/*!************************************************************!*\
  !*** ./src/app/view-cat-info/view-cat-info.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form #form=\"ngForm\">\r\n<div id=\"wrapper\">\r\n  <!--Picture-->\r\n  \r\n  <!--Picture Preview-->\r\n  <div id=\"catPiture\">\r\n    <legend>Преглед На Снимки</legend>\r\n    <div id=\"holder\">\r\n      <a *ngIf=\"is1()\"><img src= {{model.imgUrl}} id=\"imagePreview2\" height=\"500\" width=\"580\" alt=\"Неправилен link\"></a>\r\n      <a *ngIf=\"is2()\"><img src= {{model.imgUrl2}} id=\"imagePreview2\" height=\"500\" width=\"580\" alt=\"Неправилен link\"></a>\r\n      <a *ngIf=\"is3()\"><img src= {{model.imgUrl3}} id=\"imagePreview2\" height=\"500\" width=\"580\" alt=\"Неправилен link\"></a>\r\n      <a *ngIf=\"is4()\"><img src= {{model.imgUrl4}} id=\"imagePreview2\" height=\"500\" width=\"580\" alt=\"Неправилен link\"></a>\r\n      <div id=\"arrowWrapper\">\r\n        <img (click)=\"right()\" src=\"http://oi68.tinypic.com/1q1seo.jpg\" id=\"arrowRigth\" height=\"110\" width=\"200\" alt=\"catProfilePic\">\r\n        <legend id=\"indexNumber\">{{imgIndex}}</legend>\r\n        <img (click)=\"left()\" src=\"http://oi68.tinypic.com/1q1seo.jpg\" id=\"arrowLeft\" height=\"110\" width=\"200\" alt=\"catProfilePic\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--Options-->\r\n  <div class=\"card\" id=\"sadBox2\">\r\n    \r\n    <div id=\"infoUpperHalf\">\r\n      \r\n      <div id=\"divsWrapperLeft\">\r\n        <!--Title-->\r\n        <legend id=\"titleMain\">Заглавие\r\n          <textarea #name class=\"form-control\" id=\"NameArea\" rows=\"1\" required [(ngModel)]=\"model.name\" name=\"name\"></textarea>\r\n        </legend>\r\n\r\n        <!--Age-->\r\n        <legend id=\"age\">Възраст години\r\n          <input #age type=\"Number\" id=\"AgeArea\" required [(ngModel)]=\"model.age\" name=\"age\">\r\n        </legend>\r\n\r\n        <!--Number-->\r\n        <legend id=\"age\">Номер За Връзка\r\n          <input #number  type=\"Number\" id=\"NumberArea\" required [(ngModel)]=\"model.contactNumber\" name=\"contactNumber\">\r\n        </legend>\r\n        \r\n        <legend id=\"breedMain\">Порода\r\n          <select #breed id=\"BreedArea\" rows=\"1\" required [(ngModel)]=\"model.breed\" name=\"breed\">\r\n            <option *ngFor=\"let b of breeds\" [value]=\"b\">{{b}}</option>\r\n          </select>\r\n        </legend>\r\n\r\n        <!--City-->\r\n        <legend id=\"cityMain\">Регион\r\n          <select #city id=\"cityArea\" rows=\"1\" required [(ngModel)]=\"model.city\" name=\"city\">\r\n            <option *ngFor=\"let c of cities\" [value]=\"c\">{{c}}</option>\r\n          </select>\r\n        </legend>\r\n      </div>\r\n\r\n      <!--Information-->\r\n      <legend id=\"info\">info\r\n        <textarea #info class=\"form-control\" id=\"infoArea\" required [(ngModel)]=\"model.information\" name=\"information\"></textarea>\r\n      </legend>\r\n    </div>\r\n\r\n\r\n    <div id= \"breedAndCity\">\r\n\r\n        <!--Castrated-->\r\n        <div id=\"Castrated\">Кастрирана\r\n          <div class=\"form-check\">\r\n            <input #castrated class=\"form-check-input\" id=\"castrated2\" type=\"checkbox\" value=\"\" checked=\"\" required [(ngModel)]=\"model.castrated\" #imgUrl=\"ngModel\" name=\"castrated\">\r\n          </div>\r\n        </div>\r\n        \r\n        <!--Vaccinated-->\r\n        <div id=\"Vaccinated\">Ваксинирана\r\n          <div class=\"form-check\">\r\n            <input #vaccinated class=\"form-check-input\" id=\"vaccinated2\" type=\"checkbox\" value=\"\" checked=\"\" required [(ngModel)]=\"model.vaccinated\" #imgUrl=\"ngModel\" name=\"vaccinated\">\r\n          </div>\r\n        </div>\r\n\r\n    </div>\r\n        \r\n      <!--IMG Links-->\r\n      <legend id=\"imgTitles\">Линкове За Снимки</legend>\r\n      <legend id=\"imgMain\"><textarea #link class=\"form-control\" id=\"img\" rows=\"1\" required [(ngModel)]=\"model.imgUrl\" name=\"imgUrl\"></textarea></legend>\r\n      <legend id=\"imgMain\"><textarea #link2 class=\"form-control\" id=\"img\" rows=\"1\" required [(ngModel)]=\"model.imgUrl2\" name=\"imgUrl2\"></textarea></legend>\r\n      <legend id=\"imgMain\"><textarea #link3 class=\"form-control\" id=\"img\" rows=\"1\" required [(ngModel)]=\"model.imgUrl3\" name=\"imgUrl3\"></textarea></legend>\r\n      <legend id=\"imgMain\"><textarea #link4 class=\"form-control\" id=\"img\" rows=\"1\" required [(ngModel)]=\"model.imgUrl4\" name=\"imgUrl4\"></textarea></legend>\r\n\r\n      <!--Buttons-->\r\n      <div *ngIf=\"isAuth(); else elseBlock\" id=\"buttonWrapper\">\r\n        <button  type=\"button\" (click)=\"testFunc()\" class=\"btn btn-success\" id=\"changeButton\">Change</button>\r\n        <button  type=\"button\" (click)=\"deleteFunc()\" class=\"btn btn-danger\" id=\"dangerButton\">Delete</button>\r\n      </div>\r\n\r\n      <ng-template #elseBlock id=\"buttonWrapper\"> \r\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"sendMessageFunc()\" id=\"sendPmButton\">Send Message</button>\r\n      </ng-template>\r\n\r\n  </div>\r\n</div>\r\n</form>\r\n    "

/***/ }),

/***/ "./src/app/view-cat-info/view-cat-info.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/view-cat-info/view-cat-info.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewCatInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCatInfoComponent", function() { return ViewCatInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/kinvey-remote-service.service.js */ "./src/app/services/kinvey-remote-service.service.js");
/* harmony import */ var _cat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cat */ "./src/app/cat.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewCatInfoComponent = /** @class */ (function () {
    function ViewCatInfoComponent(route, remote, router, toastr) {
        this.route = route;
        this.remote = remote;
        this.router = router;
        this.toastr = toastr;
        this.model = new _cat__WEBPACK_IMPORTED_MODULE_3__["Cat"]("", "", 0, 0, "", "", "", "", "");
    }
    ViewCatInfoComponent.prototype.isAdmin = function () {
        if (localStorage.getItem("isAdmin") === "Yes") {
            return true;
        }
    };
    ViewCatInfoComponent.prototype.isAuth = function () {
        var acl = this.model._acl.creator;
        var userId = localStorage.getItem("userId");
        if (localStorage.getItem("isAdmin") === "Yes" || acl === userId) {
            return true;
        }
        else {
            this.name.nativeElement.setAttribute("disabled", "");
            this.age.nativeElement.setAttribute("disabled", "");
            this.number.nativeElement.setAttribute("disabled", "");
            this.breed.nativeElement.setAttribute("disabled", "");
            this.city.nativeElement.setAttribute("disabled", "");
            this.info.nativeElement.setAttribute("disabled", "");
            this.castrated.nativeElement.disabled = true;
            this.vaccinated.nativeElement.disabled = true;
            this.link.nativeElement.setAttribute("disabled", "");
            this.link2.nativeElement.setAttribute("disabled", "");
            this.link3.nativeElement.setAttribute("disabled", "");
            this.link4.nativeElement.setAttribute("disabled", "");
            return false;
        }
    };
    //DELETING CAT
    ViewCatInfoComponent.prototype.deleteFunc = function () {
        var _this = this;
        //VALIDATION
        var acl = this.model._acl.creator;
        var userId = localStorage.getItem("userId");
        //DELETE REQUEST
        if (this.isAdmin() || acl === userId) {
            this.toastr.info("Deleting Cat!");
            var id = this.route.snapshot.paramMap.get("id");
            this.remote.deleteCat(id).subscribe(function (data) {
                _this.toastr.success("Cat Deleted!");
                _this.router.navigate(["/viewAll"]);
            }, function (error) {
                _this.toastr.error("Creation Error");
            });
        }
        else
            this.toastr.error("Not Admin or Creator");
    };
    //UPDATING CAT
    ViewCatInfoComponent.prototype.testFunc = function () {
        //VALIDATION
        var _this = this;
        //VARIABLES
        var acl = this.model._acl.creator;
        var userId = sessionStorage.getItem("userId");
        var id = this.route.snapshot.paramMap.get("id");
        var name = this.model.name;
        var breed = this.model.breed;
        var contactNumber = this.model.contactNumber;
        var age = this.model.age;
        var information = this.model.information;
        var imgUrl = this.model.imgUrl;
        //LOGIC
        if (name === "" ||
            breed === "" ||
            age <= 0 ||
            contactNumber < 0 ||
            information === "" ||
            imgUrl === "") {
            this.toastr.error("Fields Should Not Be Empty!");
        }
        else if (name.length > 16) {
            this.toastr.error("Name Should Be Shorter!");
        }
        else if (information.length > 380) {
            this.toastr.error("Information Should Be Less!");
        }
        else if (breed.length > 16) {
            this.toastr.error("Breed Length should be shorter!");
        }
        else if (age > 17) {
            this.toastr.error("Cat Should Be Alive!");
        }
        else if (this.isAdmin() || acl === userId) {
            //UPDATE REQUEST
            this.toastr.info("Updating   Cat!");
            this.remote
                .UpdateCat(name, breed, age, contactNumber, information, imgUrl, id)
                .subscribe(function (data) {
                _this.toastr.info("Cat Updated!");
            }, function (error) {
                _this.toastr.error("Creation Error");
            });
        }
        else {
            this.toastr.error("Not Admin or Creator");
        }
    };
    //SLIDER
    //INDEX LOGIC
    ViewCatInfoComponent.prototype.right = function () {
        func: {
            var index = this.imgIndex;
            if (index === 4) {
                this.imgIndex = 1;
                break func;
            }
            this.imgIndex++;
        }
    };
    ViewCatInfoComponent.prototype.left = function () {
        func: {
            var index = this.imgIndex;
            if (index === 1) {
                this.imgIndex = 4;
                break func;
            }
            this.imgIndex--;
        }
    };
    //CONDITIONS
    ViewCatInfoComponent.prototype.is1 = function () {
        var index = this.imgIndex;
        if (index === 1) {
            return true;
        }
    };
    ViewCatInfoComponent.prototype.is2 = function () {
        var index = this.imgIndex;
        if (index === 2) {
            return true;
        }
    };
    ViewCatInfoComponent.prototype.is3 = function () {
        var index = this.imgIndex;
        if (index === 3) {
            return true;
        }
    };
    ViewCatInfoComponent.prototype.is4 = function () {
        var index = this.imgIndex;
        if (index === 4) {
            return true;
        }
    };
    ViewCatInfoComponent.prototype.sendMessageFunc = function () {
        var id = this.route.snapshot.paramMap.get("id");
        this.router.navigate(["/pm-create/" + id]);
    };
    ViewCatInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breeds = [
            "Улична",
            "Девон рекс",
            "Герман Рекс",
            "Манкс",
            "Шотландска клепоуха котка",
            "Японски бобтейл",
            "Ориенталска котка",
            "Норвежска горска котка",
            "Персийска котка",
            "Европейска късокосместа котка",
            "Мейн Куун",
            "Сиамска котка",
            "Кимрик",
            "Регдол",
            "Турска ангорска котка",
            "Сибирска котка",
            "Сомалийска котка",
            "Руска синя котка",
            "Бурманска котка",
            "Британска късокосместа котка",
            "Бирманска котка",
            "Абисинска котка",
            "Персийска котка"
        ];
        this.cities = [
            "Благоевград",
            "Бургас",
            "Варна",
            "Велико Търново",
            "Видин",
            "Враца",
            "Габрово",
            "Добрич",
            "Кърджали",
            "Кюстендил",
            "Ловеч",
            "Монтана",
            "Пазарджик",
            "Перник",
            "Плевен",
            "Пловдив",
            "Разград",
            "Русе",
            "Силистра",
            "Сливен",
            "Смолян",
            "София",
            "Стара Загора",
            "Търговище",
            "Хасково",
            "Шумен",
            "Ямбол"
        ];
        var id = this.route.snapshot.paramMap.get("id");
        //UGLY PASSING DATA FROM DB
        this.remote.GetCatById(id).subscribe(function (data) {
            _this.Cat = data;
            _this.model.city = _this.Cat.city;
            _this.model.breed = _this.Cat.breed;
            _this.model.name = _this.Cat.name;
            _this.model.contactNumber = _this.Cat.contactNumber;
            _this.model.age = _this.Cat.age;
            _this.model.information = _this.Cat.information;
            _this.model.imgUrl = _this.Cat.imgUrl;
            _this.model.imgUrl2 = _this.Cat.imgUrl2;
            _this.model.imgUrl3 = _this.Cat.imgUrl3;
            _this.model.imgUrl4 = _this.Cat.imgUrl4;
            _this.model._acl = _this.Cat._acl;
            _this.model.castrated = _this.Cat.castrated;
            _this.model.vaccinated = _this.Cat.vaccinated;
            _this.imgIndex = 1;
            _this.remote
                .GetUserById(_this.model._acl.creator.username)
                .subscribe(function (data) {
                console.log(data);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("name"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewCatInfoComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("age"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewCatInfoComponent.prototype, "age", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("number"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewCatInfoComponent.prototype, "number", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("breed"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewCatInfoComponent.prototype, "breed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("city"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewCatInfoComponent.prototype, "city", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("info"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewCatInfoComponent.prototype, "info", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("castrated"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewCatInfoComponent.prototype, "castrated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("vaccinated"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewCatInfoComponent.prototype, "vaccinated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("link"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewCatInfoComponent.prototype, "link", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("link"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewCatInfoComponent.prototype, "link2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("link"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewCatInfoComponent.prototype, "link3", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("link"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewCatInfoComponent.prototype, "link4", void 0);
    ViewCatInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-view-cat-info",
            template: __webpack_require__(/*! ./view-cat-info.component.html */ "./src/app/view-cat-info/view-cat-info.component.html"),
            styles: [__webpack_require__(/*! ./view-cat-info.component.css */ "./src/app/view-cat-info/view-cat-info.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_kinvey_remote_service_service_js__WEBPACK_IMPORTED_MODULE_2__["KinveyRemoteServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ViewCatInfoComponent);
    return ViewCatInfoComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! D:\ProjectsNew\My-website-demo-Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map