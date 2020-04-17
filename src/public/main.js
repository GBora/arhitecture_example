(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm bg-success navbar-light\">\n  <h3>Guarded Eyrie</h3>\n  <div *ngIf=\"user\" class=\"ml-auto user-menu\" (click)=\"promptLogout()\">\n    {{ user.firstName[0] }} {{ user.lastName[0] }}\n  </div>\n</nav>\n\n<div class=\"container p-5\">\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/friend-dialog-page/friend-dialog-page.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/friend-dialog-page/friend-dialog-page.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-12\" *ngIf=\"this.selectedFriend\">\r\n        <app-message-thread [friend]=\"this.selectedFriend\"></app-message-thread>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/friend-dialog-page/message-thread/message-thread.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/friend-dialog-page/message-thread/message-thread.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div>\r\n    <div *ngIf=\"messages.length\" \r\n         class=\"ml-3 pb-3 messages-list\"\r\n         infiniteScroll\r\n         [scrollWindow]=\"false\"\r\n         [infiniteScrollDistance]=\"2\"\r\n         [infiniteScrollUpDistance]=\"1.5\"\r\n         [infiniteScrollThrottle]=\"50\"\r\n         (scrolledUp)=\"onScrollUp()\">\r\n        <div *ngFor=\"let msg of messages\" class=\"row mt-3\">\r\n          <div class=\"col-9\">\r\n            <app-dialog-message [content]=\"msg.content\"\r\n                                [isSelf]=\"msg.sender.email === myself.email\">\r\n            </app-dialog-message>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <app-dialog-user-avatar [user]=\"msg.sender\"\r\n                                    [isSelf]=\"msg.sender.email === myself.email\">\r\n            </app-dialog-user-avatar>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"pl-3\">\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-9\">\r\n          <app-dialog-form (messageAdded)=\"postReply($event)\"></app-dialog-form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/friend-list-page/conversation.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/friend-list-page/conversation.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"p-3 text-center\">\r\n                Want more friends ? Try <a routerLink=\"/friends-search\">searching</a> for people you might know.\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"friend-avatar col-1 m-1\"\r\n            *ngFor=\"let friend of friends\"\r\n            routerLink=\"/friend-dialog/{{ friend.email }}\">\r\n            {{ friend.firstName.slice(0,1)}} {{friend.lastName.slice(0, 1)}}\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/friend-search-page/friend-search-page.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/friend-search-page/friend-search-page.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"p-3 text-center\">\r\n      Enter the email of your friend bellow and find them, you will add them to your friend list.\r\n    </div>\r\n    <div>\r\n      <app-friend-search (newFriend)=\"this.addedFriend($event)\"></app-friend-search>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/friend-search-page/friend-search/friend-search.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/friend-search-page/friend-search/friend-search.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row pl-5 pt-3\">\n    <input id=\"typeahead-basic\"\n           type=\"text\"\n           class=\"form-control\"\n           (selectItem)=\"add($event)\"\n           [(ngModel)]=\"model\"\n           [resultFormatter]=\"resultFormatBandListValue\"\n           [ngbTypeahead]=\"search\"/>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form onsubmit=\"\" class=\"border p-3\">\n    <div class=\"form-group\">\n        <label for=\"email\">Email address:</label>\n        <input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"email\" [(ngModel)]=\"email\">\n    </div>\n    <div class=\"form-group\">\n        <a routerLink=\"/signup\" class=\"text-primary\" >No account ? Signup !</a>\n    </div>\n    <div class=\"form-group text-center\">\n        <a class=\"btn btn-success\" (click)=\"login()\">Login</a>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form onsubmit=\"\" class=\"border p-3\">\n    <div class=\"form-group\">\n        <label for=\"email\">Email address:</label>\n        <input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"first\">First Name:</label>\n        <input class=\"form-control\" type=\"text\" name=\"first\" placeholder=\"First Name\" [(ngModel)]=\"firstName\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"last\">Last Name:</label>\n        <input class=\"form-control\" type=\"text\" name=\"last\" placeholder=\"Last Name\" [(ngModel)]=\"lastName\">\n    </div>\n    <div class=\"form-group\">\n        <a routerLink=\"/login\" class=\"text-primary\">Have an account ? Login !</a>\n    </div>\n    <div class=\"form-group text-center\">\n        <a class=\"btn btn-success\" (click)=\"signup()\">Submit</a>\n    </div>\n</form> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialog/dialog-form/dialog-form.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialog/dialog-form/dialog-form.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"form m-0 p-0 ml-5 mr-2\">\r\n  <div class=\"form-group \">\r\n      <input type=\"text\"\r\n            class=\"form-control reply-input\"\r\n            (keyup)=\"reply($event)\"\r\n            name=\"currentReply\"\r\n            [(ngModel)]=\"currentReply\">\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialog/dialog-message/dialog-message.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialog/dialog-message/dialog-message.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ml-5 p-3 dialog-message\" [class.self]=\"isSelf\">\r\n  {{ content }}\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialog/dialog-user-avatar/dialog-user-avatar.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialog/dialog-user-avatar/dialog-user-avatar.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dialog-user-avatar\" [class.self]=\"isSelf\">\r\n  {{ user.firstName[0].toUpperCase() }} {{ user.lastName[0].toUpperCase() }}\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_friend_list_page_conversation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/friend-list-page/conversation.component */ "./src/app/pages/friend-list-page/conversation.component.ts");
/* harmony import */ var _pages_friend_search_page_friend_search_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/friend-search-page/friend-search-page.component */ "./src/app/pages/friend-search-page/friend-search-page.component.ts");
/* harmony import */ var _pages_friend_dialog_page_friend_dialog_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/friend-dialog-page/friend-dialog-page.component */ "./src/app/pages/friend-dialog-page/friend-dialog-page.component.ts");








const routes = [
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'signup', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'friends-list', component: _pages_friend_list_page_conversation_component__WEBPACK_IMPORTED_MODULE_5__["ConversationComponent"] },
    { path: 'friends-search', component: _pages_friend_search_page_friend_search_page_component__WEBPACK_IMPORTED_MODULE_6__["FriendSearchPageComponent"] },
    { path: 'friend-dialog/:email', component: _pages_friend_dialog_page_friend_dialog_page_component__WEBPACK_IMPORTED_MODULE_7__["FriendDialogPageComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  color: #fff !important;\n}\n\n.user-menu {\n  border: 1px solid #fff;\n  padding: 0.5rem;\n  border-radius: 50%;\n  font-weight: 900;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxnZW9yZ2VcXERvY3VtZW50c1xcR2l0SHViXFxhcmNoaXRlY3R1cmUtZnJvbnQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVzZXItbWVudSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi5uYXZiYXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4udXNlci1tZW51IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pscoped_ngx_pub_sub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pscoped/ngx-pub-sub */ "./node_modules/@pscoped/ngx-pub-sub/__ivy_ngcc__/fesm2015/pscoped-ngx-pub-sub.js");





let AppComponent = class AppComponent {
    constructor(userService, pubsub, router) {
        this.userService = userService;
        this.pubsub = pubsub;
        this.router = router;
        this.title = 'Guarded Eyrie';
    }
    ngOnInit() {
        this.user = this.userService.getCurrentUser();
        this.userSub = this.pubsub.subscribe('user-change', (event) => {
            this.user = event;
        });
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
    promptLogout() {
        if (confirm('Logout ?')) {
            this.userService.deleteCurrentUser();
            this.router.navigate(['/signup']);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _pscoped_ngx_pub_sub__WEBPACK_IMPORTED_MODULE_4__["NgxPubSubService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _pages_friend_list_page_conversation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/friend-list-page/conversation.component */ "./src/app/pages/friend-list-page/conversation.component.ts");
/* harmony import */ var _pages_friend_search_page_friend_search_friend_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/friend-search-page/friend-search/friend-search.component */ "./src/app/pages/friend-search-page/friend-search/friend-search.component.ts");
/* harmony import */ var _pages_friend_dialog_page_message_thread_message_thread_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/friend-dialog-page/message-thread/message-thread.component */ "./src/app/pages/friend-dialog-page/message-thread/message-thread.component.ts");
/* harmony import */ var _shared_dialog_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/dialog/dialog-message/dialog-message.component */ "./src/app/shared/dialog/dialog-message/dialog-message.component.ts");
/* harmony import */ var _shared_dialog_dialog_user_avatar_dialog_user_avatar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/dialog/dialog-user-avatar/dialog-user-avatar.component */ "./src/app/shared/dialog/dialog-user-avatar/dialog-user-avatar.component.ts");
/* harmony import */ var _shared_dialog_dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/dialog/dialog-form/dialog-form.component */ "./src/app/shared/dialog/dialog-form/dialog-form.component.ts");
/* harmony import */ var _pages_friend_search_page_friend_search_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/friend-search-page/friend-search-page.component */ "./src/app/pages/friend-search-page/friend-search-page.component.ts");
/* harmony import */ var _pages_friend_dialog_page_friend_dialog_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/friend-dialog-page/friend-dialog-page.component */ "./src/app/pages/friend-dialog-page/friend-dialog-page.component.ts");
/* harmony import */ var _helpers_httpErrorInterceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./helpers/httpErrorInterceptor */ "./src/app/helpers/httpErrorInterceptor.ts");
/* harmony import */ var _pscoped_ngx_pub_sub__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @pscoped/ngx-pub-sub */ "./node_modules/@pscoped/ngx-pub-sub/__ivy_ngcc__/fesm2015/pscoped-ngx-pub-sub.js");







// import { PubSubModule } from 'angular7-pubsub';
















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _pages_friend_list_page_conversation_component__WEBPACK_IMPORTED_MODULE_13__["ConversationComponent"],
            _pages_friend_search_page_friend_search_friend_search_component__WEBPACK_IMPORTED_MODULE_14__["FriendSearchComponent"],
            _pages_friend_dialog_page_message_thread_message_thread_component__WEBPACK_IMPORTED_MODULE_15__["MessageThreadComponent"],
            _shared_dialog_dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_16__["DialogMessageComponent"],
            _shared_dialog_dialog_user_avatar_dialog_user_avatar_component__WEBPACK_IMPORTED_MODULE_17__["DialogUserAvatarComponent"],
            _shared_dialog_dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_18__["DialogFormComponent"],
            _pages_friend_search_page_friend_search_page_component__WEBPACK_IMPORTED_MODULE_19__["FriendSearchPageComponent"],
            _pages_friend_dialog_page_friend_dialog_page_component__WEBPACK_IMPORTED_MODULE_20__["FriendDialogPageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeaheadModule"],
            // PubSubModule.forRoot(),
            _pscoped_ngx_pub_sub__WEBPACK_IMPORTED_MODULE_22__["NgxPubSubModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollModule"]
        ],
        providers: [
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _helpers_httpErrorInterceptor__WEBPACK_IMPORTED_MODULE_21__["HttpErrorInterceptor"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/configs/configs.ts":
/*!************************************!*\
  !*** ./src/app/configs/configs.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const configs = {
    baseURL: 'https://guarded-eyrie-20015.herokuapp.com/api',
};
/* harmony default export */ __webpack_exports__["default"] = (configs);


/***/ }),

/***/ "./src/app/helpers/httpErrorInterceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/helpers/httpErrorInterceptor.ts ***!
  \*************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");





let HttpErrorInterceptor = class HttpErrorInterceptor {
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = `Error: ${error.error.message}`;
            }
            else {
                // server-side error
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            toastr__WEBPACK_IMPORTED_MODULE_3__["error"](errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }));
    }
};
HttpErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()
], HttpErrorInterceptor);



/***/ }),

/***/ "./src/app/helpers/liveMapMessage.ts":
/*!*******************************************!*\
  !*** ./src/app/helpers/liveMapMessage.ts ***!
  \*******************************************/
/*! exports provided: liveMapMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveMapMessage", function() { return liveMapMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const liveMapMessage = (message, me, friend) => {
    return {
        content: message.content,
        sender: friend,
        receipient: me
    };
};


/***/ }),

/***/ "./src/app/pages/friend-dialog-page/friend-dialog-page.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/friend-dialog-page/friend-dialog-page.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZyaWVuZC1kaWFsb2ctcGFnZS9mcmllbmQtZGlhbG9nLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/friend-dialog-page/friend-dialog-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/friend-dialog-page/friend-dialog-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: FriendDialogPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendDialogPageComponent", function() { return FriendDialogPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");




let FriendDialogPageComponent = class FriendDialogPageComponent {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
        this.friends = [];
    }
    ngOnInit() {
        const urlEmail = this.route.snapshot.params.email;
        this.userService.getFriends().subscribe((el) => {
            this.friends = el;
            if (urlEmail) {
                this.friends.forEach((friend) => {
                    if (friend.email === urlEmail) {
                        this.selectedFriend = friend;
                    }
                });
            }
        });
    }
};
FriendDialogPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
FriendDialogPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-friend-dialog-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./friend-dialog-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/friend-dialog-page/friend-dialog-page.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./friend-dialog-page.component.scss */ "./src/app/pages/friend-dialog-page/friend-dialog-page.component.scss")).default]
    })
], FriendDialogPageComponent);



/***/ }),

/***/ "./src/app/pages/friend-dialog-page/message-thread/message-thread.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/friend-dialog-page/message-thread/message-thread.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".reply-input {\n  width: 100%;\n}\n\nform {\n  max-width: none !important;\n}\n\n.messages-list {\n  max-height: 50vh;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnJpZW5kLWRpYWxvZy1wYWdlL21lc3NhZ2UtdGhyZWFkL0M6XFxVc2Vyc1xcZ2VvcmdlXFxEb2N1bWVudHNcXEdpdEh1YlxcYXJjaGl0ZWN0dXJlLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcZnJpZW5kLWRpYWxvZy1wYWdlXFxtZXNzYWdlLXRocmVhZFxcbWVzc2FnZS10aHJlYWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZyaWVuZC1kaWFsb2ctcGFnZS9tZXNzYWdlLXRocmVhZC9tZXNzYWdlLXRocmVhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZyaWVuZC1kaWFsb2ctcGFnZS9tZXNzYWdlLXRocmVhZC9tZXNzYWdlLXRocmVhZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXBseS1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlcy1saXN0IHtcclxuICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbiIsIi5yZXBseS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5mb3JtIHtcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tZXNzYWdlcy1saXN0IHtcbiAgbWF4LWhlaWdodDogNTB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/friend-dialog-page/message-thread/message-thread.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/friend-dialog-page/message-thread/message-thread.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MessageThreadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageThreadComponent", function() { return MessageThreadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_messages_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/messages/message.service */ "./src/app/services/messages/message.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _configs_configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configs/configs */ "./src/app/configs/configs.ts");
/* harmony import */ var _helpers_liveMapMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/liveMapMessage */ "./src/app/helpers/liveMapMessage.ts");






let MessageThreadComponent = class MessageThreadComponent {
    constructor(messageService, userService) {
        this.messages = [];
        this.currentReply = '';
        // private socket;
        this.count = 7;
        this.messageService = messageService;
        this.userService = userService;
    }
    onScrollUp() {
        this.count = this.count + 1;
        this.messageService.getConversation(this.userService.getCurrentUser().email, this.friend.email, this.count).then((res) => {
            this.messages = res;
        });
    }
    ngOnInit() {
        this.messages = [];
        this.myself = this.userService.getCurrentUser();
        this.messageService.getConversation(this.userService.getCurrentUser().email, this.friend.email, this.count).then((res) => {
            this.messages = res;
        });
        const source = new EventSource(_configs_configs__WEBPACK_IMPORTED_MODULE_4__["default"].baseURL + '/messages/sse' + '?online=' + this.myself.email);
        source.addEventListener('message', (msg) => {
            const parsedMessage = JSON.parse(msg.data);
            if (parsedMessage.from === this.friend.email) {
                this.messages.push(Object(_helpers_liveMapMessage__WEBPACK_IMPORTED_MODULE_5__["liveMapMessage"])(parsedMessage, this.myself, this.friend));
            }
        });
    }
    postReply(message) {
        this.messageService.addMessage({
            to: this.friend.email,
            content: message,
            from: this.userService.getCurrentUser().email
        }).then(() => {
            this.messageService.getConversation(this.userService.getCurrentUser().email, this.friend.email, this.count).then((res) => {
                this.messages = res;
            });
        });
    }
};
MessageThreadComponent.ctorParameters = () => [
    { type: _services_messages_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MessageThreadComponent.prototype, "friend", void 0);
MessageThreadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message-thread',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./message-thread.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/friend-dialog-page/message-thread/message-thread.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./message-thread.component.scss */ "./src/app/pages/friend-dialog-page/message-thread/message-thread.component.scss")).default]
    })
], MessageThreadComponent);



/***/ }),

/***/ "./src/app/pages/friend-list-page/conversation.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/friend-list-page/conversation.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".friend-avatar {\n  background: #bbb;\n  color: #fff;\n  width: 4rem;\n  height: 4rem;\n  text-align: center;\n  font-size: 1.5rem;\n  line-height: 4rem;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.plus-avatar {\n  color: #bbb;\n  width: 4rem;\n  height: 4rem;\n  text-align: center;\n  font-size: 4rem;\n  line-height: 4rem;\n  border-radius: 50%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnJpZW5kLWxpc3QtcGFnZS9DOlxcVXNlcnNcXGdlb3JnZVxcRG9jdW1lbnRzXFxHaXRIdWJcXGFyY2hpdGVjdHVyZS1mcm9udC9zcmNcXGFwcFxccGFnZXNcXGZyaWVuZC1saXN0LXBhZ2VcXGNvbnZlcnNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZnJpZW5kLWxpc3QtcGFnZS9jb252ZXJzYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZyaWVuZC1saXN0LXBhZ2UvY29udmVyc2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyaWVuZC1hdmF0YXIge1xyXG4gICAgYmFja2dyb3VuZDogI2JiYjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDRyZW07XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucGx1cy1hdmF0YXIge1xyXG4gICAgY29sb3I6ICNiYmI7XHJcbiAgICB3aWR0aDogNHJlbTtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLmZyaWVuZC1hdmF0YXIge1xuICBiYWNrZ3JvdW5kOiAjYmJiO1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGx1cy1hdmF0YXIge1xuICBjb2xvcjogI2JiYjtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDRyZW07XG4gIGxpbmUtaGVpZ2h0OiA0cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/friend-list-page/conversation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/friend-list-page/conversation.component.ts ***!
  \******************************************************************/
/*! exports provided: ConversationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationComponent", function() { return ConversationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let ConversationComponent = class ConversationComponent {
    constructor(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.showSearch = false;
        this.showThread = false;
        this.friends = [];
    }
    ngOnInit() {
        const urlEmail = this.route.snapshot.queryParams.email;
        this.userService.getFriends().subscribe((el) => {
            this.friends = el;
            if (urlEmail) {
                this.friends.forEach((friend) => {
                    if (friend.email === urlEmail) {
                        this.startConv(friend);
                    }
                });
            }
        });
    }
    addedFriend(friend) {
        this.showSearch = false;
        this.userService.addFriend(friend.email).then((res) => {
            this.friends.push(friend);
        });
    }
    startConv(friend) {
        this.router.navigate(['/conversation'], { queryParams: { email: friend.email } });
        this.showThread = false;
        this.friendConversing = friend;
        this.showThread = true;
    }
};
ConversationComponent.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ConversationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-conversation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./conversation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/friend-list-page/conversation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./conversation.component.scss */ "./src/app/pages/friend-list-page/conversation.component.scss")).default]
    })
], ConversationComponent);



/***/ }),

/***/ "./src/app/pages/friend-search-page/friend-search-page.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/friend-search-page/friend-search-page.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZyaWVuZC1zZWFyY2gtcGFnZS9mcmllbmQtc2VhcmNoLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/friend-search-page/friend-search-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/friend-search-page/friend-search-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: FriendSearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendSearchPageComponent", function() { return FriendSearchPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");




let FriendSearchPageComponent = class FriendSearchPageComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
    }
    addedFriend(friend) {
        this.userService.addFriend(friend.email).then((res) => {
            this.router.navigate(['/friends-list']);
        });
    }
};
FriendSearchPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
FriendSearchPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-friend-search-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./friend-search-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/friend-search-page/friend-search-page.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./friend-search-page.component.scss */ "./src/app/pages/friend-search-page/friend-search-page.component.scss")).default]
    })
], FriendSearchPageComponent);



/***/ }),

/***/ "./src/app/pages/friend-search-page/friend-search/friend-search.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/friend-search-page/friend-search/friend-search.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZyaWVuZC1zZWFyY2gtcGFnZS9mcmllbmQtc2VhcmNoL2ZyaWVuZC1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/friend-search-page/friend-search/friend-search.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/friend-search-page/friend-search/friend-search.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FriendSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendSearchComponent", function() { return FriendSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user/user.service */ "./src/app/services/user/user.service.ts");




let FriendSearchComponent = class FriendSearchComponent {
    constructor(userService) {
        this.newFriend = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((term) => {
            return this.userService.search(term);
        }));
        this.userService = userService;
    }
    ngOnInit() {
    }
    resultFormatBandListValue(value) {
        return value.firstName + ' ' + value.lastName + ' (' + value.email + ')';
    }
    add(selected) {
        this.newFriend.emit(selected.item);
    }
};
FriendSearchComponent.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FriendSearchComponent.prototype, "newFriend", void 0);
FriendSearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-friend-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./friend-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/friend-search-page/friend-search/friend-search.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./friend-search.component.scss */ "./src/app/pages/friend-search-page/friend-search/friend-search.component.scss")).default]
    })
], FriendSearchComponent);



/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_sse_sse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sse/sse.service */ "./src/app/services/sse/sse.service.ts");
/* harmony import */ var _pscoped_ngx_pub_sub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pscoped/ngx-pub-sub */ "./node_modules/@pscoped/ngx-pub-sub/__ivy_ngcc__/fesm2015/pscoped-ngx-pub-sub.js");






let LoginComponent = class LoginComponent {
    constructor(router, userService, pubsub, sse) {
        this.router = router;
        this.userService = userService;
        this.pubsub = pubsub;
        this.sse = sse;
    }
    ngOnInit() {
        this.email = '';
    }
    login() {
        this.userService.loginUser(this.email).then((user) => {
            this.userService.setCurentUser(user);
            // this.sse.initiateConnection(user.email);
            this.pubsub.publishEvent('user-change', user);
            this.router.navigate(['/friends-list']);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _pscoped_ngx_pub_sub__WEBPACK_IMPORTED_MODULE_5__["NgxPubSubService"] },
    { type: _services_sse_sse_service__WEBPACK_IMPORTED_MODULE_4__["SSEService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/signup/signup.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");




let SignupComponent = class SignupComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.email = '';
        this.lastName = '';
        this.firstName = '';
        try {
            const user = this.userService.getCurrentUser();
            console.log(user);
            if (user) {
                this.router.navigate(['/friends-list']);
            }
        }
        catch (err) {
            console.error(err);
        }
    }
    signup() {
        const user = {
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName
        };
        this.userService.signUpUser(user).then((res) => {
            this.router.navigate(['/login']);
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.component.scss */ "./src/app/pages/signup/signup.component.scss")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/services/messages/message.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/messages/message.service.ts ***!
  \******************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configs/configs */ "./src/app/configs/configs.ts");




let MessageService = class MessageService {
    constructor(http) {
        this.http = http;
        this.base = src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__["default"].baseURL;
        this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Response-Type': 'text'
            })
        };
    }
    addMessage(message) {
        const url = this.base + '/messages/add-message';
        return this.http.post(url, message, this.options).toPromise();
    }
    getConversation(user1, user2, count) {
        const url = this.base + '/messages/get-conversation';
        const request = {
            user1,
            user2,
            count
        };
        return this.http.post(url, JSON.stringify(request), this.options).toPromise();
    }
};
MessageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



/***/ }),

/***/ "./src/app/services/sse/sse.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sse/sse.service.ts ***!
  \*********************************************/
/*! exports provided: SSEService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SSEService", function() { return SSEService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_configs_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/configs/configs */ "./src/app/configs/configs.ts");
/* harmony import */ var _pscoped_ngx_pub_sub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pscoped/ngx-pub-sub */ "./node_modules/@pscoped/ngx-pub-sub/__ivy_ngcc__/fesm2015/pscoped-ngx-pub-sub.js");




let SSEService = class SSEService {
    constructor(pubsub) {
        this.pubsub = pubsub;
    }
    initiateConnection(email) {
        this.connection = new EventSource(src_app_configs_configs__WEBPACK_IMPORTED_MODULE_2__["default"].baseURL + '/messages/sse' + '?online=' + email);
        this.connection.addEventListener('message', (msg) => {
            const parsedMessage = JSON.parse(msg.data);
            this.pubsub.publishEvent('new-msg', parsedMessage);
        });
    }
    closeConnection() {
        this.connection = null;
    }
};
SSEService.ctorParameters = () => [
    { type: _pscoped_ngx_pub_sub__WEBPACK_IMPORTED_MODULE_3__["NgxPubSubService"] }
];
SSEService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SSEService);



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _configs_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configs/configs */ "./src/app/configs/configs.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.base = _configs_configs__WEBPACK_IMPORTED_MODULE_3__["default"].baseURL;
        this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Response-Type': 'text'
            })
        };
    }
    signUpUser(user) {
        const url = this.base + '/users/new';
        return this.http.post(url, user, this.options).toPromise();
    }
    loginUser(email) {
        const url = this.base + '/users/login';
        const content = { email };
        return this.http.post(url, content, this.options).toPromise();
    }
    search(email) {
        const url = this.base + '/users/search';
        const request = {
            email
        };
        return this.http.post(url, request, this.options);
    }
    addFriend(email1) {
        const url = this.base + '/friendship/add-friend';
        const request = {
            email1,
            email2: this.getCurrentUser().email
        };
        return this.http.post(url, request, this.options).toPromise();
    }
    getFriends() {
        const url = this.base + '/friendship/get-friends';
        const request = {
            email: this.getCurrentUser().email
        };
        return this.http.post(url, request, this.options);
    }
    setCurentUser(user) {
        this.currentUser = user;
        localStorage.setItem('user', JSON.stringify(user));
    }
    deleteCurrentUser() {
        this.currentUser = null;
        localStorage.removeItem('user');
    }
    getCurrentUser() {
        if (this.currentUser) {
            return this.currentUser;
        }
        else {
            return JSON.parse(localStorage.getItem('user'));
        }
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/shared/dialog/dialog-form/dialog-form.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/dialog/dialog-form/dialog-form.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  max-width: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZy9kaWFsb2ctZm9ybS9DOlxcVXNlcnNcXGdlb3JnZVxcRG9jdW1lbnRzXFxHaXRIdWJcXGFyY2hpdGVjdHVyZS1mcm9udC9zcmNcXGFwcFxcc2hhcmVkXFxkaWFsb2dcXGRpYWxvZy1mb3JtXFxkaWFsb2ctZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2RpYWxvZy9kaWFsb2ctZm9ybS9kaWFsb2ctZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGlhbG9nL2RpYWxvZy1mb3JtL2RpYWxvZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcclxufSIsImZvcm0ge1xuICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/dialog/dialog-form/dialog-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/dialog/dialog-form/dialog-form.component.ts ***!
  \********************************************************************/
/*! exports provided: DialogFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogFormComponent", function() { return DialogFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DialogFormComponent = class DialogFormComponent {
    constructor() {
        this.currentReply = '';
        this.messageAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    reply(event) {
        if (event.code === 'Enter') {
            const messageCopy = '' + this.currentReply;
            this.currentReply = '';
            this.messageAdded.emit(messageCopy);
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DialogFormComponent.prototype, "messageAdded", void 0);
DialogFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dialog-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialog/dialog-form/dialog-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dialog-form.component.scss */ "./src/app/shared/dialog/dialog-form/dialog-form.component.scss")).default]
    })
], DialogFormComponent);



/***/ }),

/***/ "./src/app/shared/dialog/dialog-message/dialog-message.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/dialog/dialog-message/dialog-message.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dialog-message {\n  border: 1px solid #ccc;\n  border-radius: 0.4em;\n}\n\n.dialog-message {\n  position: relative;\n  background: #ccc;\n  color: #fff;\n}\n\n.dialog-message.self {\n  position: relative;\n  background: #fff;\n  color: #ccc;\n}\n\n.dialog-message:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 0.563em solid transparent;\n  border-left-color: #ccc;\n  border-right: 0;\n  margin-top: -0.562em;\n  margin-right: -0.562em;\n}\n\n.dialog-message.self:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 0.563em solid transparent;\n  border-left-color: #ccc;\n  border-right: 0;\n  margin-top: -0.562em;\n  margin-right: -0.562em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZy9kaWFsb2ctbWVzc2FnZS9DOlxcVXNlcnNcXGdlb3JnZVxcRG9jdW1lbnRzXFxHaXRIdWJcXGFyY2hpdGVjdHVyZS1mcm9udC9zcmNcXGFwcFxcc2hhcmVkXFxkaWFsb2dcXGRpYWxvZy1tZXNzYWdlXFxkaWFsb2ctbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2RpYWxvZy9kaWFsb2ctbWVzc2FnZS9kaWFsb2ctbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNDLGtCQUFBO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FER0E7RUFDQyxrQkFBQTtFQUNDLGdCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBRElBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQ0REOztBRElBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQ0REIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2RpYWxvZy9kaWFsb2ctbWVzc2FnZS9kaWFsb2ctbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctbWVzc2FnZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAuNGVtO1xyXG59XHJcblxyXG4uZGlhbG9nLW1lc3NhZ2Uge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cdC8vIGJvcmRlci1yYWRpdXM6IC40ZW07XHJcbn1cclxuXHJcbi5kaWFsb2ctbWVzc2FnZS5zZWxmIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogI2NjYztcclxuXHQvLyBib3JkZXItcmFkaXVzOiAuNGVtO1xyXG59XHJcblxyXG4uZGlhbG9nLW1lc3NhZ2U6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogMDtcclxuXHR0b3A6IDUwJTtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcblx0Ym9yZGVyOiAwLjU2M2VtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlci1sZWZ0LWNvbG9yOiAjY2NjO1xyXG5cdGJvcmRlci1yaWdodDogMDtcclxuXHRtYXJnaW4tdG9wOiAtMC41NjJlbTtcclxuXHRtYXJnaW4tcmlnaHQ6IC0wLjU2MmVtO1xyXG59XHJcblxyXG4uZGlhbG9nLW1lc3NhZ2Uuc2VsZjphZnRlciB7XHJcblx0Y29udGVudDogJyc7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHRvcDogNTAlO1xyXG5cdHdpZHRoOiAwO1xyXG5cdGhlaWdodDogMDtcclxuXHRib3JkZXI6IDAuNTYzZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLWxlZnQtY29sb3I6ICNjY2M7XHJcblx0Ym9yZGVyLXJpZ2h0OiAwO1xyXG5cdG1hcmdpbi10b3A6IC0wLjU2MmVtO1xyXG5cdG1hcmdpbi1yaWdodDogLTAuNTYyZW07XHJcbn1cclxuIiwiLmRpYWxvZy1tZXNzYWdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMC40ZW07XG59XG5cbi5kaWFsb2ctbWVzc2FnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5kaWFsb2ctbWVzc2FnZS5zZWxmIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogI2NjYztcbn1cblxuLmRpYWxvZy1tZXNzYWdlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogMC41NjNlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNjY2M7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogLTAuNTYyZW07XG4gIG1hcmdpbi1yaWdodDogLTAuNTYyZW07XG59XG5cbi5kaWFsb2ctbWVzc2FnZS5zZWxmOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogMC41NjNlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNjY2M7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogLTAuNTYyZW07XG4gIG1hcmdpbi1yaWdodDogLTAuNTYyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/dialog/dialog-message/dialog-message.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/dialog/dialog-message/dialog-message.component.ts ***!
  \**************************************************************************/
/*! exports provided: DialogMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogMessageComponent", function() { return DialogMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DialogMessageComponent = class DialogMessageComponent {
    constructor() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DialogMessageComponent.prototype, "content", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DialogMessageComponent.prototype, "isSelf", void 0);
DialogMessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-message',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dialog-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialog/dialog-message/dialog-message.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dialog-message.component.scss */ "./src/app/shared/dialog/dialog-message/dialog-message.component.scss")).default]
    })
], DialogMessageComponent);



/***/ }),

/***/ "./src/app/shared/dialog/dialog-user-avatar/dialog-user-avatar.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/shared/dialog/dialog-user-avatar/dialog-user-avatar.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dialog-user-avatar {\n  font-size: 1.5rem;\n  line-height: 3.5rem;\n  font-weight: 900;\n  color: #fff;\n  background-color: #ccc;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  text-align: center;\n  padding: 0.25rem;\n  margin: 0 auto;\n  width: 4rem;\n  height: 4rem;\n}\n\n.dialog-user-avatar.self {\n  font-size: 1.5rem;\n  line-height: 3.5rem;\n  font-weight: 900;\n  background-color: transparent;\n  color: #ccc;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  text-align: center;\n  padding: 0.25rem;\n  margin: 0 auto;\n  width: 4rem;\n  height: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZy9kaWFsb2ctdXNlci1hdmF0YXIvQzpcXFVzZXJzXFxnZW9yZ2VcXERvY3VtZW50c1xcR2l0SHViXFxhcmNoaXRlY3R1cmUtZnJvbnQvc3JjXFxhcHBcXHNoYXJlZFxcZGlhbG9nXFxkaWFsb2ctdXNlci1hdmF0YXJcXGRpYWxvZy11c2VyLWF2YXRhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2RpYWxvZy9kaWFsb2ctdXNlci1hdmF0YXIvZGlhbG9nLXVzZXItYXZhdGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGlhbG9nL2RpYWxvZy11c2VyLWF2YXRhci9kaWFsb2ctdXNlci1hdmF0YXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLXVzZXItYXZhdGFyIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBsaW5lLWhlaWdodDogMy41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC4yNXJlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogNHJlbTtcclxuICBoZWlnaHQ6IDRyZW07XHJcbn1cclxuXHJcbi5kaWFsb2ctdXNlci1hdmF0YXIuc2VsZiB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA0cmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxufVxyXG4iLCIuZGlhbG9nLXVzZXItYXZhdGFyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAzLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG59XG5cbi5kaWFsb2ctdXNlci1hdmF0YXIuc2VsZiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMy41cmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/dialog/dialog-user-avatar/dialog-user-avatar.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/dialog/dialog-user-avatar/dialog-user-avatar.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DialogUserAvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogUserAvatarComponent", function() { return DialogUserAvatarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DialogUserAvatarComponent = class DialogUserAvatarComponent {
    constructor() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DialogUserAvatarComponent.prototype, "user", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DialogUserAvatarComponent.prototype, "isSelf", void 0);
DialogUserAvatarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-user-avatar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dialog-user-avatar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialog/dialog-user-avatar/dialog-user-avatar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dialog-user-avatar.component.scss */ "./src/app/shared/dialog/dialog-user-avatar/dialog-user-avatar.component.scss")).default]
    })
], DialogUserAvatarComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\george\Documents\GitHub\architecture-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map