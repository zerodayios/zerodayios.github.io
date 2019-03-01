webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_store__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hot_hot__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsControllerPage = /** @class */ (function () {
    function TabsControllerPage(navCtrl) {
        this.navCtrl = navCtrl;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__store_store__["a" /* StorePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__hot_hot__["a" /* HotPage */];
    }
    TabsControllerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-controller',template:/*ion-inline-start:"C:\Users\unc0ver\Desktop\ionic\thApp\src\pages\tabs-controller\tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Store" tabIcon="apps" id="tabsController-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Hot" tabIcon="paper" id="tabsController-tab3"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\unc0ver\Desktop\ionic\thApp\src\pages\tabs-controller\tabs-controller.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], TabsControllerPage);
    return TabsControllerPage;
}());

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\unc0ver\Desktop\ionic\thApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <h2 id="home-heading1" style="color:#4599F5;text-align:center;">\n    T-Store\n  </h2>\n  <img src="assets/img/R2Hjf89nSvyXlNS1Romn_ipx.png" style="display:block;width:50%;height:auto;margin-left:auto;margin-right:auto;" />\n  <h5 id="home-heading2" style="color:#FF1D1D;">\n    About: tôi là thuan.18 tuổi đến từ Tây Ninh.\n  </h5>\n  <div id="home-markdown5" class="show-list-numbers-and-dots">\n    <p style="color:#000000;font-size:16px;">\n      T-Store lưu trữ các app cho thiết bị ios Jailbreak và non-Jailbreak.và T-Store không có bất cứ quyền truy cập vào thiết bị của bạn an toàn 100%. nếu bạn có bất kỳ thắc mắc nào,bạn có thể liên hệ với tôi bất cứ khi nào theo thông tin bên dưới.thank you\n      !.\n    </p>\n  </div>\n  <div class="spacer" style="width:300px;height:15px;" id="home-spacer7"></div>\n  <ion-list id="home-list12">\n    <ion-item color="positive" href="tel:+84981801810" id="home-list-item14">\n      <ion-avatar item-left>\n        <img src="assets/img/lCyZEflsReSrB5ELpAaA_unnamed.png" />\n      </ion-avatar>\n      <h2>\n        Phone:\n      </h2>\n    </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:15px;" id="home-spacer2"></div>\n  <ion-list id="home-list11">\n    <ion-item color="positive" href="mailto:thuanvodka@gmail.com" id="home-list-item12">\n      <ion-avatar item-left>\n        <img src="assets/img/RSvTUcxdSzqHVLIaCpRT_Mail_iOS.svg_.png" />\n      </ion-avatar>\n      <h2>\n        Mail:\n      </h2>\n    </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:15px;" id="home-spacer5"></div>\n  <ion-list id="home-list8">\n    <ion-item color="positive" href="https://twitter.com/thuanvodka" id="home-list-item9">\n      <ion-avatar item-left>\n        <img src="assets/img/djuKNkAZTyqjEHhVtcd0_kisspng-clip-art-tda-global-cycling-internet-email-image-twitter-icon-png-clipart-clipartly-comclipartly-5bac9f67a5dd86.0822942615380396556794.jpg" />\n      </ion-avatar>\n      <h2>\n        Twitter:\n      </h2>\n    </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:15px;" id="home-spacer4"></div>\n  <ion-list id="home-list10">\n    <ion-item color="positive" href-inappbrowser="https://facebook.com/MrthuanJB" id="home-list-item10">\n      <ion-avatar item-left>\n        <img src="assets/img/Be5zsppTSVSneIBkJubW_facebook_circle-512.png" />\n      </ion-avatar>\n      <h2>\n        Facebook:\n      </h2>\n    </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:15px;" id="home-spacer3"></div>\n  <button id="home-button10" ion-button outline color="assertive" block small href-inappbrowser="https://twitter.com/thuanvodka">\n    Design By Mrthuan_vn\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\unc0ver\Desktop\ionic\thApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uncoverb29_uncoverb29__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uncover226_uncover226__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__electra1141_electra1141__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doubleh3lix_doubleh3lix__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__youtube_youtube__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StorePage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function StorePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    StorePage.prototype.goToUncoverb29 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__uncoverb29_uncoverb29__["a" /* Uncoverb29Page */]);
    };
    StorePage.prototype.goToUncover226 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__uncover226_uncover226__["a" /* Uncover226Page */]);
    };
    StorePage.prototype.goToElectra1141 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__electra1141_electra1141__["a" /* Electra1141Page */]);
    };
    StorePage.prototype.goToDoubleh3lix = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__doubleh3lix_doubleh3lix__["a" /* Doubleh3lixPage */]);
    };
    StorePage.prototype.goToYoutube = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__youtube_youtube__["a" /* YoutubePage */]);
    };
    StorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-store',template:/*ion-inline-start:"C:\Users\unc0ver\Desktop\ionic\thApp\src\pages\store\store.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Store\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <h2 id="store-heading3" style="color:#1AB15C;">\n    Jailbreak\n  </h2>\n  <ion-list id="store-list16">\n    <ion-item color="calm" on-click="goToUncoverb29()" id="store-list-item34">\n      <ion-avatar item-left>\n        <img src="assets/img/CkpdNbxxQpClrUVKPMrM_uncover.png" />\n      </ion-avatar>\n      <h2>\n        unc0ver beta:\n      </h2>\n  version: 3.0.0 beta29 </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:15px;" id="store-spacer8"></div>\n  <ion-list id="store-list17">\n    <ion-item color="calm" on-click="goToUncover226()" id="store-list-item39">\n      <ion-avatar item-left>\n        <img src="assets/img/CkpdNbxxQpClrUVKPMrM_uncover.png" />\n      </ion-avatar>\n      <h2>\n        unc0ver:\n      </h2>\n version: 2.2.6   </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:15px;" id="store-spacer9"></div>\n  <ion-list id="store-list18">\n    <ion-item color="calm" on-click="goToElectra1141()" id="store-list-item45">\n      <ion-avatar item-left>\n        <img src="assets/img/etKZrt5WQ8muCXXiIutJ_electra1131.jpg" />\n      </ion-avatar>\n      <h2>\n        Electra1141\n      </h2>\n version: 1.3.2   </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:15px;" id="store-spacer10"></div>\n  <ion-list id="store-list19">\n    <ion-item color="calm" on-click="goToDoubleh3lix()" id="store-list-item50">\n      <ion-avatar item-left>\n        <img src="assets/img/5mzsE9NcSY6PLoAZN0zD_DoubleH3lix.png" />\n      </ion-avatar>\n      <h2>\n        Doubleh3lix\n      </h2>\n version: 1.0   </ion-item>\n  </ion-list>\n  <h2 id="store-heading4" style="color:#C439FA;">\n    App++/free\n  </h2>\n  <ion-list id="store-list22">\n    <ion-item color="calm" on-click="goToYoutube()" id="store-list-item56">\n      <ion-avatar item-left>\n        <img src="assets/img/NGYqP525R9CNkeBYWcEK_youtube.jpg" />\n      </ion-avatar>\n      <h2>\n        Youtube++\n      </h2>\n version: 12.44.16   </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:15px;" id="store-spacer11"></div>\n</ion-content>'/*ion-inline-end:"C:\Users\unc0ver\Desktop\ionic\thApp\src\pages\store\store.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], StorePage);
    return StorePage;
}());

//# sourceMappingURL=store.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Uncoverb29Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Uncoverb29Page = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function Uncoverb29Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Uncoverb29Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-uncoverb29',template:/*ion-inline-start:"C:\Users\unc0ver\Desktop\ionic\thApp\src\pages\uncoverb29\uncoverb29.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      uncoverb29\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9">\n  <ion-list id="uncoverb29-list9">\n    <ion-item color="none" id="uncoverb29-list-item37">\n      <ion-avatar item-left>\n        <img src="assets/img/ZIZJabYNQESy359Cy0zu_uncover.png" />\n      </ion-avatar>\n      <h2>\n        unc0ver beta 29\n      </h2>\n    </ion-item>\n  </ion-list>\n  <h4 id="uncoverb29-heading5" style="color:#000000;">\n    Jailbreak ios 11.0-11.4.1 (all devices) ios 12.0-12.1.2 (chip A8-A11) "iphone 6s đến iphone X". Cydia và Substrate by @saurik.\n  </h4>\n  <button id="uncoverb29-button15" ion-button color="positive" block style="font-size:20px;" href-inappbrowser="itms-services://?action=download-manifest&url=https://CyStorekit.github.io/img/Undecimus_3.0.0~b29.plist">\n    Install\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\unc0ver\Desktop\ionic\thApp\src\pages\uncoverb29\uncoverb29.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], Uncoverb29Page);
    return Uncoverb29Page;
}());

//# sourceMappingURL=uncoverb29.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Uncover226Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Uncover226Page = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function Uncover226Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Uncover226Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-uncover226',template:/*ion-inline-start:"C:\Users\unc0ver\Desktop\ionic\thApp\src\pages\uncover226\uncover226.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      uncover226\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page10">\n  <ion-list id="uncover226-list13">\n    <ion-item color="none" id="uncover226-list-item43">\n      <ion-avatar item-left>\n        <img src="assets/img/UYN04AJQTlmJlJSKThbV_uncover.png" />\n      </ion-avatar>\n      <h2>\n        unc0ver:\n      </h2>\n    </ion-item>\n  </ion-list>\n  <h4 id="uncover226-heading6" style="color:#000000;">\n    Jailbreak ios 11.0-11.4.1 all devices.đây là bản chính thức ở thời điểm hiện tại.\n  </h4>\n  <button id="uncover226-button16" ion-button color="positive" block style="font-size:20px;" href-inappbrowser="itms-services://?action=download-manifest&url=https://CyStorekit.github.io/img/Undecimus_2.2.6.plist">\n    Install\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\unc0ver\Desktop\ionic\thApp\src\pages\uncover226\uncover226.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], Uncover226Page);
    return Uncover226Page;
}());

//# sourceMappingURL=uncover226.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Electra1141Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Electra1141Page = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function Electra1141Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Electra1141Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-electra1141',template:/*ion-inline-start:"C:\Users\unc0ver\Desktop\ionic\thApp\src\pages\electra1141\electra1141.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      electra1141\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page11">\n  <ion-list id="electra1141-list15">\n    <ion-item color="none" id="electra1141-list-item48">\n      <ion-avatar item-left>\n        <img src="assets/img/QnsXOu0EQJidZny68FIV_electra1131.jpg" />\n      </ion-avatar>\n      <h2>\n        Electra1141\n      </h2>\n    </ion-item>\n  </ion-list>\n  <div id="electra1141-markdown20" class="show-list-numbers-and-dots">\n    <p style="margin-top:0px;color:#000000;font-size:18px;">\n      Jailbreak ios 11.0-11.4.1 all devices, tương tự như unc0ver.tuy nhiên nếu bạn dùng Electra thì có thêm kho ứng dụng Sileo.và Electra sử dụng substitute,trong khi unc0ver thì sử dụng substrate.\n    </p>\n  </div>\n  <button id="electra1141-button17" ion-button color="positive" block href-inappbrowser="itms-services://?action=download-manifest&amp;amp;url=https://CyStorekit.github.io/img/electra1141_1.3.2.plist">\n    Install\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\unc0ver\Desktop\ionic\thApp\src\pages\electra1141\electra1141.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], Electra1141Page);
    return Electra1141Page;
}());

//# sourceMappingURL=electra1141.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doubleh3lixPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Doubleh3lixPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function Doubleh3lixPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Doubleh3lixPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doubleh3lix',template:/*ion-inline-start:"C:\Users\unc0ver\Desktop\ionic\thApp\src\pages\doubleh3lix\doubleh3lix.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      doubleh3lix\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page12">\n  <ion-list id="doubleh3lix-list21">\n    <ion-item color="none" id="doubleh3lix-list-item53">\n      <ion-avatar item-left>\n        <img src="assets/img/41QWMfSCe6ikHr3NqcTQ_DoubleH3lix.png" />\n      </ion-avatar>\n      <h2>\n        DoubleH3lix\n      </h2>\n version: 1.0   </ion-item>\n  </ion-list>\n  <div id="doubleh3lix-markdown22" class="show-list-numbers-and-dots">\n    <p style="margin-top:0px;color:#000000;font-size:18px;">\n      Jailbreak all ios 10 (64bit-A7-A9) doubleh3lix là công cụ JB tốt nhất cho ios 10.\n    </p>\n  </div>\n  <button id="doubleh3lix-button18" ion-button color="positive" block href-inappbrowser="itms-services://?action=download-manifest&url=https://CyStorekit.github.io/img/doubleH3lix_1.0.plist">\n    Install\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\unc0ver\Desktop\ionic\thApp\src\pages\doubleh3lix\doubleh3lix.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], Doubleh3lixPage);
    return Doubleh3lixPage;
}());

//# sourceMappingURL=doubleh3lix.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YoutubePage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function YoutubePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    YoutubePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-youtube',template:/*ion-inline-start:"C:\Users\unc0ver\Desktop\ionic\thApp\src\pages\youtube\youtube.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      youtube\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n  <ion-list id="youtube-list24">\n    <ion-item color="none" id="youtube-list-item59">\n      <ion-avatar item-left>\n        <img src="assets/img/M5MipV76Ssmq2I0xaJLw_youtube.jpg" />\n      </ion-avatar>\n      <h2>\n        Youtube++\n      </h2>\n  version: 12.44.16  </ion-item>\n  </ion-list>\n  <div id="youtube-markdown24" class="show-list-numbers-and-dots">\n    <p style="margin-top:0px;color:#000000;font-size:18px;">\n      Xem video youtube không còn quảng cáo chèn ngang video,ngoài ra còn hỗ trợ download video và import vào camera roll.\n    </p>\n  </div>\n  <button id="youtube-button19" ion-button color="positive" block href-inappbrowser="itms-services://?action=download-manifest&amp;amp;url=https://CyStorekit.github.io/img/YouTube++_12.44.16.plist">\n    Install\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\unc0ver\Desktop\ionic\thApp\src\pages\youtube\youtube.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], YoutubePage);
    return YoutubePage;
}());

//# sourceMappingURL=youtube.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function HotPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hot',template:/*ion-inline-start:"C:\Users\unc0ver\Desktop\ionic\thApp\src\pages\hot\hot.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Hot\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="hot-video2">\n    <iframe src="https://www.youtube.com/embed/0sxETRDrYzs?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\unc0ver\Desktop\ionic\thApp\src\pages\hot\hot.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HotPage);
    return HotPage;
}());

//# sourceMappingURL=hot.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_store_store__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_hot_hot__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_uncoverb29_uncoverb29__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_uncover226_uncover226__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_electra1141_electra1141__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_doubleh3lix_doubleh3lix__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_youtube_youtube__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(192);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_store_store__["a" /* StorePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_hot_hot__["a" /* HotPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_uncoverb29_uncoverb29__["a" /* Uncoverb29Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_uncover226_uncover226__["a" /* Uncover226Page */],
                __WEBPACK_IMPORTED_MODULE_10__pages_electra1141_electra1141__["a" /* Electra1141Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_doubleh3lix_doubleh3lix__["a" /* Doubleh3lixPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_youtube_youtube__["a" /* YoutubePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_store_store__["a" /* StorePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_hot_hot__["a" /* HotPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_uncoverb29_uncoverb29__["a" /* Uncoverb29Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_uncover226_uncover226__["a" /* Uncover226Page */],
                __WEBPACK_IMPORTED_MODULE_10__pages_electra1141_electra1141__["a" /* Electra1141Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_doubleh3lix_doubleh3lix__["a" /* Doubleh3lixPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_youtube_youtube__["a" /* YoutubePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__ = __webpack_require__(193);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\unc0ver\Desktop\ionic\thApp\src\app\app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\unc0ver\Desktop\ionic\thApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map