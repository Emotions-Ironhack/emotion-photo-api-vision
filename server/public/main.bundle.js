webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/add-photo-emotion/add-photo-emotion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-photo-emotion/add-photo-emotion.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> Sense To Music Converter </h1>\n\n<form>\n  <div>\n    <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n  </div>\n  <br>\n  <button type=\"button\" (click)=\"submit()\" [disabled]=\"!uploader.getNotUploadedItems().length\">Upload all</button>\n  <br>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/add-photo-emotion/add-photo-emotion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPhotoEmotionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + "/api/emotion/new";
var AddPhotoEmotionComponent = (function () {
    function AddPhotoEmotionComponent(router, session) {
        this.router = router;
        this.session = session;
        this.newImage = {
            name: ''
        };
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
            url: URL
        });
    }
    AddPhotoEmotionComponent.prototype.ngOnInit = function () {
    };
    AddPhotoEmotionComponent.prototype.submit = function () {
        var _this = this;
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('userRef', _this.session.user._id);
        };
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function () {
            console.log('Uploaded finished!');
            _this.router.navigate(['/emotion/user', _this.session.user._id]);
        };
    };
    return AddPhotoEmotionComponent;
}());
AddPhotoEmotionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-photo-emotion',
        template: __webpack_require__("../../../../../src/app/add-photo-emotion/add-photo-emotion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-photo-emotion/add-photo-emotion.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], AddPhotoEmotionComponent);

var _a, _b;
//# sourceMappingURL=add-photo-emotion.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav{\n  border:1px solid blue;\n  width:100%;\n}\nfooter{\n  position: fixed;\n  bottom:0;\n  background-color: red;\n  padding: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Emotion Sound</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <!-- <li><a href=\"#\">Home</a></li> -->\n        <li><a href=\"https://github.com/Emotions-Ironhack\" target=\"_blank\">Github</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a *ngIf=\"!session.user\" [routerLink]=\"['/user/login']\">LogIn</a></li>\n        <li><a *ngIf=\"!session.user\" [routerLink]=\"['/user/signup']\">SignUp</a></li>\n        <li><a *ngIf=\"session.user\" [routerLink]=\"['/user/login']\">User Data</a></li>\n        <li><a *ngIf=\"session.user\" [routerLink]=\"['/new']\">Add photo</a></li>\n        <li><a *ngIf=\"session.user\" [routerLink]=\"['/emotion/user', session.user._id]\">View Emotions List</a></li>\n        <li><a *ngIf=\"session.user\" (click)=\"logout()\">LogOut</a></li>\n      </ul>\n    </div>\n    <!--/.nav-collapse -->\n  </div>\n  <!--/.container-fluid -->\n</nav>\n\n\n<router-outlet></router-outlet>\n<!-- <nav>\n  <div class=\" nav-wrapper brown darken-2 text-lighten-4\">\n    <a  [routerLink]=\"['/']\" class=\"brand-logo\">Logo</a>\n    <ul *ngIf=\"!session.user\" class=\"right hide-on-med-and-down\">\n      <li><a [routerLink]=\"['/user/login']\">Log-In</a></li>\n      <li><a [routerLink]=\"['/user/signup']\">Sign-Up</a></li>\n    </ul>\n\n    <ul *ngIf=\"session.user\" class=\"right hide-on-med-and-down\">\n      <li><a (click)=\"logout()\">Logout</a></li>\n    </ul>\n  </div>\n</nav>\n\n\n<router-outlet></router-outlet>\n\n\n<footer>My footer here</footer> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, session) {
        this.router = router;
        this.session = session;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedIn().subscribe(function (user) {
            return _this.user = user;
        });
    };
    AppComponent.prototype.logout = function () {
        this.session.logout().subscribe();
        this.router.navigate(['/']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_loggedin_service__ = __webpack_require__("../../../../../src/services/loggedin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_emotion_service__ = __webpack_require__("../../../../../src/services/emotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_recommendation_service__ = __webpack_require__("../../../../../src/services/recommendation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__add_photo_emotion_add_photo_emotion_component__ = __webpack_require__("../../../../../src/app/add-photo-emotion/add-photo-emotion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__emotion_list_emotion_list_component__ = __webpack_require__("../../../../../src/app/emotion-list/emotion-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__emotion_single_emotion_single_component__ = __webpack_require__("../../../../../src/app/emotion-single/emotion-single.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__recommedation_list_recommedation_list_component__ = __webpack_require__("../../../../../src/app/recommedation-list/recommedation-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__recommendation_single_recommendation_single_component__ = __webpack_require__("../../../../../src/app/recommendation-single/recommendation-single.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Routes


// services




// components









// animations

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_13__add_photo_emotion_add_photo_emotion_component__["a" /* AddPhotoEmotionComponent */],
            __WEBPACK_IMPORTED_MODULE_14__emotion_list_emotion_list_component__["a" /* EmotionListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_16__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__emotion_single_emotion_single_component__["a" /* EmotionSingleComponent */],
            __WEBPACK_IMPORTED_MODULE_19__recommedation_list_recommedation_list_component__["a" /* RecommedationListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__recommendation_single_recommendation_single_component__["a" /* RecommendationSingleComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__routes__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_9__services_loggedin_service__["a" /* LoggedInService */], __WEBPACK_IMPORTED_MODULE_10__services_emotion_service__["a" /* EmotionService */], __WEBPACK_IMPORTED_MODULE_11__services_recommendation_service__["a" /* RecommendationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/emotion-list/emotion-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".emotion {\n  border: 1px solid #e6e6e6;\n  border-radius: 7px;\n  width: 25%;\n  /*margin:10px auto;*/\n  padding: 10px;\n  text-align: center;\n}\n\n.img-container {\n  width: 135px;\n  height: 289px;\n  margin: 30px 0;\n}\n\n.img-container img {\n  width: 100%;\n  height: auto;\n  margin: 50px auto 0 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/emotion-list/emotion-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <h2> User Emotions List </h2>\n  <a [routerLink]=\"['/new']\">Add photo</a>\n  <a [routerLink]=\"['/user/login']\">User Data</a>\n\n  <div *ngFor=\"let emotion of emotions\" class=\"emotion\">\n    <div class=\"img-container\">\n      <img src=\"{{ emotion.image_path }}\" alt=\"{{ emotion.image_path }}\">\n    </div>\n    <h3> {{ emotion.maxEmotion.name }} :  {{ emotion.maxEmotion.score }} </h3>\n    <a [routerLink]=\"['/emotion', emotion._id]\"> View Detail </a>\n  </div>\n</div>\n\n<!--\n<div>\n\n  <h2> User Emotions List </h2>\n  <a [routerLink]=\"['/new']\">Add photo</a>\n\n\n  <div *ngFor=\"let emotion of emotions\" class=\"emotion\">\n    <div class=\"img-container\">\n      <img src=\"{{ emotion.image_path }}\" alt=\"{{ emotion.image_path }}\">\n    </div>\n    <h3> {{ emotion.maxEmotion.name }} :  {{ emotion.maxEmotion.score }} </h3>\n    <a [routerLink]=\"['/emotion', emotion._id]\"> View Detail </a>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/emotion-list/emotion-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_emotion_service__ = __webpack_require__("../../../../../src/services/emotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmotionListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmotionListComponent = (function () {
    function EmotionListComponent(sessionserv, emotionserv) {
        this.sessionserv = sessionserv;
        this.emotionserv = emotionserv;
    }
    EmotionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emotionserv.getUserEmotions(this.sessionserv.user._id)
            .subscribe(function (emotions) { return _this.emotions = emotions; });
    };
    return EmotionListComponent;
}());
EmotionListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-emotion-list',
        template: __webpack_require__("../../../../../src/app/emotion-list/emotion-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/emotion-list/emotion-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_emotion_service__["a" /* EmotionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_emotion_service__["a" /* EmotionService */]) === "function" && _b || Object])
], EmotionListComponent);

var _a, _b;
//# sourceMappingURL=emotion-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/emotion-single/emotion-single.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".emotion {\n  border: 1px solid #e6e6e6;\n  border-radius: 7px;\n  width: 25%;\n  padding: 10px;\n  text-align: center;\n}\n\n.img-container {\n  width: 40px;\n  height: 40px;\n  margin: 0;\n}\n\n.img-container img {\n  width: 100%;\n  height: auto;\n  margin: 10px auto 0 auto;\n}\n\n.recomm-container {\n  border: 2px solid #e6e6e6;\n  padding: 0 10px;\n  margin: 10px;\n  height: 140px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/emotion-single/emotion-single.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"emotion\">\n  <!-- IMPORTANT ngIF para que no de error hasta que no se resuelva la promesa -->\n  <a [routerLink]=\"['/emotion/user', emotion.userRef._id]\"> Back to list </a>\n  <div class=\"emotion-info\">\n    <p> {{ emotion.maxEmotion.name }} : {{ emotion.maxEmotion.score }}</p>\n    <div class=\"img-container\">\n      <img src=\"{{ emotion.image_path }}\" alt=\"{{ emotion.image_path }}\">\n    </div>\n    <span>USER: {{emotion.userRef.username }} - {{ emotion.userRef.email }} (NOTA: Igual esto no hace falta porque siempre va estar logueado para poder ver tus emotions</span>\n    <span>CREATED AT: {{emotion.created_at}}</span>\n    <button (click)=\"createEmotionRecomm()\">Generate a Recommendation</button>\n    <!-- <p> JSON: {{emotion | json }}</p> -->\n  </div>\n</div>\n\n<div *ngIf=\"recomms\">\n   <div class=\"recomm-container\" *ngFor=\"let track of staggeringrecomms; let i = index\" (@flyInOut.done)=\"doNext()\" [@flyInOut]=\"'in'\">\n       <button [@flyInOut]=\"'in'\" (click)=\"removeMe(i)\">Delete</button>\n       <h6>{{track.trackName}}</h6>\n       <div class=\"img-container\"><img src=\"{{track.artistUrlImg}}\" alt=\"{{track.artistUrlImg}}\"></div>\n       <span><a href=\"{{track.linkUrl}}\" target=\"_blank\">Link to spotify</a></span>\n       <p>{{track.previewUrl}}</p>\n   </div>\n</div>\n\n\n<!-- <app-recommendation-single></app-recommendation-single> -->\n\n\n<!-- <div *ngIf=\"recommendation\">\n  <h1> Recommendation</h1>\n  <h3>Created at: {{recommendation.created_at}}</h3>\n  <div *ngFor=\"let track of recommendation.recommendations\" class=\"recomm-container\">\n    <h3>{{track.trackName}}</h3>\n    <div class=\"img-container\"><img src=\"{{track.artistUrlImg}}\" alt=\"{{track.artistUrlImg}}\"></div>\n    <span><a href=\"{{track.linkUrl}}\" target=\"_blank\">Link to spotify</a></span>\n    <p>{{track.previewUrl}}</p>\n  </div>\n</div> -->\n\n\n<!-- <p> JSON: {{ recommendation | json }}</p> -->\n"

/***/ }),

/***/ "../../../../../src/app/emotion-single/emotion-single.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_emotion_service__ = __webpack_require__("../../../../../src/services/emotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_recommendation_service__ = __webpack_require__("../../../../../src/services/recommendation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmotionSingleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmotionSingleComponent = (function () {
    function EmotionSingleComponent(route, emotionserv, recommserv) {
        this.route = route;
        this.emotionserv = emotionserv;
        this.recommserv = recommserv;
        this.recomms = [];
    }
    EmotionSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getEmotionDetail(params['id']);
        });
    };
    EmotionSingleComponent.prototype.getEmotionDetail = function (id) {
        var _this = this;
        this.emotionserv.getEmotion(id)
            .subscribe(function (emotion) {
            _this.emotion = emotion;
        });
    };
    EmotionSingleComponent.prototype.createEmotionRecomm = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.createRecommendation(params['id']);
            _this.doNext();
        });
    };
    EmotionSingleComponent.prototype.createRecommendation = function (id) {
        var _this = this;
        this.recommserv.createRecommendation(id)
            .subscribe(function (recomm) {
            _this.recomms = recomm.recommendations;
            console.log('new recomendation: ', _this.recomms);
            // clear vars
            _this.staggeringrecomms = [];
            _this.next = 0;
            _this.doNext();
        });
    };
    EmotionSingleComponent.prototype.doNext = function () {
        if (this.next < this.recomms.length) {
            this.staggeringrecomms.push(this.recomms[this.next++]);
            console.log('strangerRecomms', this.staggeringrecomms);
        }
    };
    EmotionSingleComponent.prototype.removeMe = function (i) {
        this.staggeringrecomms.splice(i, 1);
    };
    return EmotionSingleComponent;
}());
EmotionSingleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-emotion-single',
        template: __webpack_require__("../../../../../src/app/emotion-single/emotion-single.component.html"),
        styles: [__webpack_require__("../../../../../src/app/emotion-single/emotion-single.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('flyInOut', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(800, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                    ]))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(400, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                    ]))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_emotion_service__["a" /* EmotionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_emotion_service__["a" /* EmotionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_recommendation_service__["a" /* RecommendationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_recommendation_service__["a" /* RecommendationService */]) === "function" && _c || Object])
], EmotionSingleComponent);

var _a, _b, _c;
//# sourceMappingURL=emotion-single.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>BOOOOM home page content is here</h1>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(session) {
        this.session = session;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.user = null;
    };
    HomeComponent.prototype.successCb = function (user) {
        this.user = user;
        this.error = null;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n\tmargin-top: 80px;\n  margin-bottom: 80px;\n}\n\n.form-signin {\n  max-width: 380px;\n  padding: 15px 35px 45px;\n  margin: 0 auto;\n  .form-signin-heading,\n\t.checkbox {\n\t  margin-bottom: 30px;\n\t}\n\n\t.checkbox {\n\t  font-weight: normal;\n\t}\n\n\t.form-control {\n\t  position: relative;\n\t  font-size: 16px;\n\t  height: auto;\n\t  padding: 10px;\n\t\t@include box-sizing(border-box);\n\n\t\t&:focus {\n\t\t  z-index: 2;\n\t\t}\n\t}\n\n\tinput[type=\"text\"] {\n\t  margin-bottom: -1px;\n\t  border-bottom-left-radius: 0;\n\t  border-bottom-right-radius: 0;\n\t}\n\n\tinput[type=\"password\"] {\n\t  margin-bottom: 20px;\n\t  border-top-left-radius: 0;\n\t  border-top-right-radius: 0;\n\t}\n}\n\n.card {\n    padding-top: 20px;\n    margin: 10px 0 20px 0;\n    background-color: rgba(214, 224, 226, 0.2);\n    border-top-width: 0;\n    border-bottom-width: 2px;\n    border-radius: 3px;\n    box-shadow: none;\n    box-sizing: border-box;\n}\n\n.card .card-heading {\n    padding: 0 20px;\n    margin: 0;\n}\n\n.card .card-heading.simple {\n    font-size: 20px;\n    font-weight: 300;\n    color: #777;\n    border-bottom: 1px solid #e5e5e5;\n}\n\n.card .card-heading.image img {\n    display: inline-block;\n    width: 46px;\n    height: 46px;\n    margin-right: 15px;\n    vertical-align: top;\n    border: 0;\n    border-radius: 50%;\n}\n\n.card .card-heading.image .card-heading-header {\n    display: inline-block;\n    vertical-align: top;\n}\n\n.card .card-heading.image .card-heading-header h3 {\n    margin: 0;\n    font-size: 14px;\n    line-height: 16px;\n    color: #262626;\n}\n\n.card .card-heading.image .card-heading-header span {\n    font-size: 12px;\n    color: #999999;\n}\n\n.card .card-body {\n    padding: 0 20px;\n    margin-top: 20px;\n}\n\n.card .card-media {\n    padding: 0 20px;\n    margin: 0 -14px;\n}\n\n.card .card-media img {\n    max-width: 100%;\n    max-height: 100%;\n}\n\n.card .card-actions {\n    min-height: 30px;\n    padding: 0 20px 20px 20px;\n    margin: 20px 0 0 0;\n}\n\n.card .card-comments {\n    padding: 20px;\n    margin: 0;\n    background-color: #f8f8f8;\n}\n\n.card .card-comments .comments-collapse-toggle {\n    padding: 0;\n    margin: 0 20px 12px 20px;\n}\n\n.card .card-comments .comments-collapse-toggle a,\n.card .card-comments .comments-collapse-toggle span {\n    padding-right: 5px;\n    overflow: hidden;\n    font-size: 12px;\n    color: #999;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.card-comments .media-heading {\n    font-size: 13px;\n    font-weight: bold;\n}\n\n.card.people {\n    position: relative;\n    display: inline-block;\n    width: 170px;\n    height: 300px;\n    padding-top: 0;\n    margin-left: 20px;\n    overflow: hidden;\n    vertical-align: top;\n}\n\n.card.people:first-child {\n    margin-left: 0;\n}\n\n.card.people .card-top {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: inline-block;\n    width: 170px;\n    height: 150px;\n    background-color: #ffffff;\n}\n\n.card.people .card-top.green {\n    background-color: #53a93f;\n}\n\n.card.people .card-top.blue {\n    background-color: #427fed;\n}\n\n.card.people .card-info {\n    position: absolute;\n    top: 150px;\n    display: inline-block;\n    width: 100%;\n    height: 101px;\n    overflow: hidden;\n    background: #ffffff;\n    box-sizing: border-box;\n}\n\n.card.people .card-info .title {\n    display: block;\n    margin: 8px 14px 0 14px;\n    overflow: hidden;\n    font-size: 16px;\n    font-weight: bold;\n    line-height: 18px;\n    color: #404040;\n}\n\n.card.people .card-info .desc {\n    display: block;\n    margin: 8px 14px 0 14px;\n    overflow: hidden;\n    font-size: 18px;\n    line-height: 16px;\n    color: #737373;\n    text-overflow: ellipsis;\n}\n\n.card.people .card-bottom {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: inline-block;\n    width: 100%;\n    padding: 10px 20px;\n    line-height: 29px;\n    text-align: center;\n    box-sizing: border-box;\n}\n\n.card.hovercard {\n    position: relative;\n    padding-top: 0;\n    overflow: hidden;\n    text-align: center;\n    background-color: rgba(214, 224, 226, 0.2);\n}\n\n.card.hovercard .cardheader {\n    background: url(" + __webpack_require__("../../../../../src/assets/imgback.jpg") + ");\n    background-size: cover;\n    height: 135px;\n}\n\n.card.hovercard .avatar {\n    position: relative;\n    top: -50px;\n    margin-bottom: -50px;\n}\n\n.card.hovercard .avatar img {\n    width: 100px;\n    height: 100px;\n    max-width: 100px;\n    max-height: 100px;\n    border-radius: 50%;\n    border: 5px solid rgba(255,255,255,0.5);\n}\n\n.card.hovercard .info {\n    padding: 4px 8px 10px;\n}\n\n.card.hovercard .info .title {\n    margin-bottom: 4px;\n    font-size: 24px;\n    line-height: 1;\n    color: #262626;\n    vertical-align: middle;\n}\n\n.card.hovercard .info .desc {\n    overflow: hidden;\n    font-size: 20px;\n    line-height: 20px;\n    color: #737373;\n    text-overflow: ellipsis;\n}\n\n.card.hovercard .bottom {\n    padding: 0 20px;\n    margin-bottom: 17px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"session.user\" class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-3 col-sm-6\">\n\n            <div class=\"card hovercard\">\n                <div class=\"cardheader\">\n\n                </div>\n                <div class=\"avatar\">\n                    <img alt=\"\" src=\"../../assets/login.jpg\">\n                </div>\n                <div class=\"info\">\n                    <div class=\"title\">\n                        <a target=\"_blank\">{{session.user.username}}</a>\n                    </div>\n                    <div class=\"desc\">Email: {{session.user.email}}</div>\n                    <div class=\"desc\">Register From: {{session.user.created_at}}</div>\n                </div>\n            </div>\n        </div>\n\t</div>\n</div>\n\n<div *ngIf=\"!session.user\">\n  <div class=\"wrapper\">\n    <form class=\"form-signin\">\n      <img class=\"img-responsive\" src=\"../../assets/w4mw.png\" alt=\"\">\n      <br>\n      <input type=\"text\" [(ngModel)]=\"username\" class=\"form-control\" name=\"username\" placeholder=\"Username\" required=\"\" autofocus=\"\" />\n      <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required=\"\"/>\n      <br>\n      <button (click)=\"login()\" class=\"btn btn-lg btn-primary btn-block\">Login</button>\n    </form>\n  </div>\n</div>\n\n\n<!-- <div *ngIf=\"session.user\">\n  <pre>{{ session.user | json }}</pre>\n  <a [routerLink]=\"['/new']\">Add photo</a>\n  <a [routerLink]=\"['/emotion/user', session.user._id]\">View Emotions List </a>\n</div>\n\n<div *ngIf=\"!session.user\">\n  <h1> Authentication </h1>\n  <form>\n    <h2> Login</h2>\n    <label> Username </label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" />\n    <br>\n    <label> Password </label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" />\n    <br>\n    <button (click)=\"login()\"> login </button>\n  </form>\n  <p class=\"error\"> {{ error }} </p>\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = (function () {
    function LoginFormComponent(router, session) {
        this.router = router;
        this.session = session;
    }
    LoginFormComponent.prototype.ngOnInit = function () { };
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        this.session.login(this.username, this.password)
            .subscribe(function (user) {
            console.log(user);
            _this.router.navigate(['/emotion/user', user._id]);
        }, function (err) { return _this.error = err; });
    };
    LoginFormComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.username = null;
    };
    LoginFormComponent.prototype.successCb = function (user) {
        this.username = user;
        this.error = null;
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-form',
        template: __webpack_require__("../../../../../src/app/login-form/login-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-form/login-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], LoginFormComponent);

var _a, _b;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/recommedation-list/recommedation-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recommedation-list/recommedation-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  recommedation-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/recommedation-list/recommedation-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommedationListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecommedationListComponent = (function () {
    function RecommedationListComponent() {
    }
    RecommedationListComponent.prototype.ngOnInit = function () {
    };
    return RecommedationListComponent;
}());
RecommedationListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-recommedation-list',
        template: __webpack_require__("../../../../../src/app/recommedation-list/recommedation-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recommedation-list/recommedation-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RecommedationListComponent);

//# sourceMappingURL=recommedation-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/recommendation-single/recommendation-single.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recommendation-single/recommendation-single.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> Recommendations View is here</h1>\n\n<div *ngIf=\"recommendation\">\n  <h1> Recommendation</h1>\n  <h3>Created at: {{recommendation.created_at}}</h3>\n  <div *ngFor=\"let track of recommendation.recommendations\" class=\"recomm-container\">\n    <h3>{{track.trackName}}</h3>\n    <div class=\"img-container\"><img src=\"{{track.artistUrlImg}}\" alt=\"{{track.artistUrlImg}}\"></div>\n    <span><a href=\"{{track.linkUrl}}\" target=\"_blank\">Link to spotify</a></span>\n    <p>{{track.previewUrl}}</p>\n  </div>\n</div>\n\n<p> JSON: {{ recommendation | json }}</p>\n<div>sadsadsadsad</div>\n"

/***/ }),

/***/ "../../../../../src/app/recommendation-single/recommendation-single.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_recommendation_service__ = __webpack_require__("../../../../../src/services/recommendation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendationSingleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecommendationSingleComponent = (function () {
    function RecommendationSingleComponent(route, recommserv) {
        this.route = route;
        this.recommserv = recommserv;
    }
    RecommendationSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getRecommendationDetail(params['id']);
        });
    };
    RecommendationSingleComponent.prototype.getRecommendationDetail = function (id) {
        var _this = this;
        this.recommserv.getRecommendation(id)
            .subscribe(function (recomm) {
            console.log(recomm);
            _this.recomm = recomm;
        });
    };
    return RecommendationSingleComponent;
}());
RecommendationSingleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-recommendation-single',
        template: __webpack_require__("../../../../../src/app/recommendation-single/recommendation-single.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recommendation-single/recommendation-single.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_recommendation_service__["a" /* RecommendationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_recommendation_service__["a" /* RecommendationService */]) === "function" && _b || Object])
], RecommendationSingleComponent);

var _a, _b;
//# sourceMappingURL=recommendation-single.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loggedin_service__ = __webpack_require__("../../../../../src/services/loggedin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_photo_emotion_add_photo_emotion_component__ = __webpack_require__("../../../../../src/app/add-photo-emotion/add-photo-emotion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__emotion_list_emotion_list_component__ = __webpack_require__("../../../../../src/app/emotion-list/emotion-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__emotion_single_emotion_single_component__ = __webpack_require__("../../../../../src/app/emotion-single/emotion-single.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_1__user_user_component__["a" /* UserComponent */],
        children: [
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_form_login_form_component__["a" /* LoginFormComponent */] },
            { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */] },
        ]
    },
    { path: 'emotion/user/:userId', component: __WEBPACK_IMPORTED_MODULE_6__emotion_list_emotion_list_component__["a" /* EmotionListComponent */] },
    { path: 'emotion/:id', component: __WEBPACK_IMPORTED_MODULE_7__emotion_single_emotion_single_component__["a" /* EmotionSingleComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_5__add_photo_emotion_add_photo_emotion_component__["a" /* AddPhotoEmotionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_loggedin_service__["a" /* LoggedInService */]] },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n\tmargin-top: 80px;\n  margin-bottom: 80px;\n}\n\n.form-signin {\n  max-width: 380px;\n  padding: 15px 35px 45px;\n  margin: 0 auto;\n  .form-signin-heading,\n\t.checkbox {\n\t  margin-bottom: 30px;\n\t}\n\n\t.checkbox {\n\t  font-weight: normal;\n\t}\n\n\t.form-control {\n\t  position: relative;\n\t  font-size: 16px;\n\t  height: auto;\n\t  padding: 10px;\n\t\t@include box-sizing(border-box);\n\n\t\t&:focus {\n\t\t  z-index: 2;\n\t\t}\n\t}\n\n\tinput[type=\"text\"] {\n\t  margin-bottom: -1px;\n\t  border-bottom-left-radius: 0;\n\t  border-bottom-right-radius: 0;\n\t}\n\n\tinput[type=\"password\"] {\n\t  margin-bottom: 20px;\n\t  border-top-left-radius: 0;\n\t  border-top-right-radius: 0;\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"wrapper\">\n    <form class=\"form-signin\">\n      <img class=\"img-responsive\" src=\"../../assets/w4mw.png\" alt=\"\">\n      <br>\n      <input type=\"text\" [(ngModel)]=\"username\" class=\"form-control\" name=\"username\" placeholder=\"Username\" required autofocus=\"\" />\n      <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\" required autofocus=\"\" />\n      <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required/>\n      <br>\n      <button (click)=\"signup()\" class=\"btn btn-lg btn-primary btn-block\">SingUp</button>\n    </form>\n  </div>\n</div>\n<p class=\"error\"> {{ error }} </p>\n\n\n<!--\n<h1> Authentication </h1>\n<form>\n  <h2>Signup</h2>\n  <label> Username </label>\n  <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" />\n  <br>\n  <label> email </label>\n  <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" />\n  <br>\n  <label> Password </label>\n  <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" />\n  <br>\n  <button (click)=\"signup()\"> signup </button>\n</form>\n<p class=\"error\"> {{ error }} </p> -->\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(router, session) {
        this.router = router;
        this.session = session;
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.session.signup(this.username, this.password, this.email)
            .subscribe(function (user) {
            console.log(user);
            _this.router.navigate(['/user/login']);
        }, function (err) { return _this.error = err; });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserComponent);

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/assets/imgback.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgback.1422ec7f32a1fbb45318.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    BASE_URL: "http://localhost:3000",
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/services/emotion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmotionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmotionService = (function () {
    function EmotionService(http) {
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].BASE_URL;
    }
    EmotionService.prototype.getUserEmotions = function (userId) {
        return this.http.get(this.BASE_URL + "/api/emotion/user/" + userId)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    EmotionService.prototype.getEmotion = function (id) {
        return this.http.get(this.BASE_URL + "/api/emotion/" + id)
            .map(function (res) { return res.json(); }); // return Observable<response>
    };
    return EmotionService;
}());
EmotionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EmotionService);

var _a;
//# sourceMappingURL=emotion.service.js.map

/***/ }),

/***/ "../../../../../src/services/loggedin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInService = (function () {
    function LoggedInService(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }
    LoggedInService.prototype.canActivate = function (route, state) {
        if (!this.sessionService.user) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    return LoggedInService;
}());
LoggedInService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoggedInService);

var _a, _b;
//# sourceMappingURL=loggedin.service.js.map

/***/ }),

/***/ "../../../../../src/services/recommendation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecommendationService = (function () {
    function RecommendationService(http) {
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].BASE_URL;
    }
    RecommendationService.prototype.getEmotionRecommendations = function (emotionId) {
        return this.http.get(this.BASE_URL + "/api/emotion/" + emotionId + "/recommendations")
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    RecommendationService.prototype.createRecommendation = function (emotionId) {
        return this.http.get(this.BASE_URL + "/api/emotion/" + emotionId + "/new-recommendation")
            .map(function (res) {
            return res.json();
        });
    };
    RecommendationService.prototype.getRecommendation = function (id) {
        return this.http.get(this.BASE_URL + "/api/recommendation/" + id)
            .map(function (res) { return res.json(); }); // return Observable<response>
    };
    return RecommendationService;
}());
RecommendationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RecommendationService);

var _a;
//# sourceMappingURL=recommendation.service.js.map

/***/ }),

/***/ "../../../../../src/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SessionService = (function () {
    function SessionService(http) {
        var _this = this;
        this.http = http;
        this.startLoginCompleted = false;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASE_URL + "/api/auth";
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe(function (user) {
            console.log("Welcome again user " + user.username);
            _this.user = user;
            _this.startLoginCompleted = true;
        }, function (e) { return _this.startLoginCompleted = true; });
    }
    SessionService.prototype.handleError = function (e) {
        console.error("Error en la llamada a la API");
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    SessionService.prototype.signup = function (username, password, email) {
        console.log("Nuevo usuario");
        return this.http.post(this.BASE_URL + "/signup", { username: username, password: password, email: email }, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.BASE_URL + "/login", { username: username, password: password }, this.options)
            .map(function (res) {
            _this.user = res.json();
            console.log("Hola");
            return _this.user;
        })
            .catch(this.handleError);
    };
    SessionService.prototype.logout = function () {
        var _this = this;
        return this.http.get(this.BASE_URL + "/logout", this.options)
            .map(function (res) {
            res.json();
            _this.user = undefined;
            console.log("Adios");
        })
            .catch(this.handleError);
    };
    SessionService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(this.BASE_URL + "/loggedin", this.options)
            .map(function (res) {
            _this.user = res.json();
            return _this.user;
        })
            .catch(this.handleError);
    };
    SessionService.prototype.getPrivateData = function () {
        return this.http.get(this.BASE_URL + "/private", this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return SessionService;
}());
SessionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SessionService);

var _a;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map