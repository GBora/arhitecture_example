function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-sm bg-success navbar-light\">\n  <h3>Guarded Eyrie</h3>\n</nav>\n\n<div class=\"container p-5\">\n  <router-outlet></router-outlet>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/conversation/conversation.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conversation/conversation.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConversationConversationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-1\">\n        <div class=\"plus-avatar\" (click)=\"search()\">\n            +\n        </div>\n\n        <div class=\"friend-avatar mt-3\" *ngFor=\"let friend of friends\" (click)=\"startConv(friend)\">\n            {{ friend.firstName.slice(0,1)}} {{friend.lastName.slice(0, 1)}}\n        </div>\n    </div>\n    <div class=\"col-11\">\n        <div class=\"p-5\">\n            <app-message-thread *ngIf=\"this.showThread\" [friend]=\"friendConversing\"></app-message-thread>\n            <app-friend-search *ngIf=\"this.showSearch\" (newFriend)=\"this.addedFriend($event)\"></app-friend-search>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-message/dialog-message.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-message/dialog-message.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDialogMessageDialogMessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ml-5 p-3 dialog-message\">\n  {{ content }}\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-user-avatar/dialog-user-avatar.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-user-avatar/dialog-user-avatar.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDialogUserAvatarDialogUserAvatarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dialog-user-avatar\">\n  {{ user.firstName[0].toUpperCase() }} {{ user.lastName[0].toUpperCase() }}\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/friend-search/friend-search.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/friend-search/friend-search.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFriendSearchFriendSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row pl-5 pt-3\">\n    <input id=\"typeahead-basic\"\n           type=\"text\"\n           class=\"form-control\"\n           (selectItem)=\"add($event)\"\n           [(ngModel)]=\"model\"\n           [resultFormatter]=\"resultFormatBandListValue\"\n           [ngbTypeahead]=\"search\"/>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form onsubmit=\"\" class=\"border p-3\">\n    <div class=\"form-group\">\n        <label for=\"email\">Email address:</label>\n        <input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"email\" [(ngModel)]=\"email\">\n    </div>\n    <div class=\"form-group\">\n        <a routerLink=\"/signup\" class=\"text-primary\" >No account ? Signup !</a>\n    </div>\n    <div class=\"form-group text-center\">\n        <a class=\"btn btn-success\" (click)=\"login()\">Login</a>\n    </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/message-thread/message-thread.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message-thread/message-thread.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessageThreadMessageThreadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div>\n    <div *ngIf=\"messages.length\" class=\"pl-3\">\n        <div *ngFor=\"let msg of messages\" class=\"row mt-3\">\n          <div class=\"col-9\">\n            <app-dialog-message [content]=\"msg.content\"></app-dialog-message>\n          </div>\n          <div class=\"col-3\">\n            <app-dialog-user-avatar [user]=\"msg.sender\"></app-dialog-user-avatar>\n          </div>\n        </div>\n    </div>\n    <div class=\"pt-3\">\n        <form class=\"form m-0 p-0\">\n            <div class=\"form-group col-12\">\n                <input type=\"text\"\n                       class=\"form-control reply-input\"\n                       (keyup)=\"reply($event)\"\n                       name=\"currentReply\"\n                       [(ngModel)]=\"currentReply\">\n            </div>\n        </form>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form onsubmit=\"\" class=\"border p-3\">\n    <div class=\"form-group\">\n        <label for=\"email\">Email address:</label>\n        <input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"first\">First Name:</label>\n        <input class=\"form-control\" type=\"text\" name=\"first\" placeholder=\"First Name\" [(ngModel)]=\"firstName\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"last\">Last Name:</label>\n        <input class=\"form-control\" type=\"text\" name=\"last\" placeholder=\"Last Name\" [(ngModel)]=\"lastName\">\n    </div>\n    <div class=\"form-group\">\n        <a routerLink=\"/login\" class=\"text-primary\">Have an account ? Login !</a>\n    </div>\n    <div class=\"form-group text-center\">\n        <a class=\"btn btn-success\" (click)=\"signup()\">Submit</a>\n    </div>\n</form> \n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _conversation_conversation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./conversation/conversation.component */
    "./src/app/conversation/conversation.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/signup',
      pathMatch: 'full'
    }, {
      path: 'signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'conversation',
      component: _conversation_conversation_component__WEBPACK_IMPORTED_MODULE_5__["ConversationComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxnZW9yZ2VcXERvY3VtZW50c1xcR2l0SHViXFxhcmNoaXRlY3R1cmUtZnJvbnQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufSIsIi5uYXZiYXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'architecture-front';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _services_user_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/user/user.service */
    "./src/app/services/user/user.service.ts");
    /* harmony import */


    var _conversation_conversation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./conversation/conversation.component */
    "./src/app/conversation/conversation.component.ts");
    /* harmony import */


    var _friend_search_friend_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./friend-search/friend-search.component */
    "./src/app/friend-search/friend-search.component.ts");
    /* harmony import */


    var _message_thread_message_thread_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./message-thread/message-thread.component */
    "./src/app/message-thread/message-thread.component.ts");
    /* harmony import */


    var _dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./dialog-message/dialog-message.component */
    "./src/app/dialog-message/dialog-message.component.ts");
    /* harmony import */


    var _dialog_user_avatar_dialog_user_avatar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./dialog-user-avatar/dialog-user-avatar.component */
    "./src/app/dialog-user-avatar/dialog-user-avatar.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _conversation_conversation_component__WEBPACK_IMPORTED_MODULE_12__["ConversationComponent"], _friend_search_friend_search_component__WEBPACK_IMPORTED_MODULE_13__["FriendSearchComponent"], _message_thread_message_thread_component__WEBPACK_IMPORTED_MODULE_14__["MessageThreadComponent"], _dialog_message_dialog_message_component__WEBPACK_IMPORTED_MODULE_15__["DialogMessageComponent"], _dialog_user_avatar_dialog_user_avatar_component__WEBPACK_IMPORTED_MODULE_16__["DialogUserAvatarComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeaheadModule"]],
      providers: [_services_user_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/configs/configs.ts":
  /*!************************************!*\
    !*** ./src/app/configs/configs.ts ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfigsConfigsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var configs = {
      // baseURL : 'https://guarded-eyrie-20015.herokuapp.com',
      baseURL: 'http://localhost:8080'
    };
    /* harmony default export */

    __webpack_exports__["default"] = configs;
    /***/
  },

  /***/
  "./src/app/conversation/conversation.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/conversation/conversation.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConversationConversationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".friend-avatar {\n  background: #bbb;\n  color: #fff;\n  width: 4rem;\n  height: 4rem;\n  text-align: center;\n  font-size: 1.5rem;\n  line-height: 4rem;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.plus-avatar {\n  color: #bbb;\n  width: 4rem;\n  height: 4rem;\n  text-align: center;\n  font-size: 4rem;\n  line-height: 4rem;\n  border-radius: 50%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmVyc2F0aW9uL0M6XFxVc2Vyc1xcZ2VvcmdlXFxEb2N1bWVudHNcXEdpdEh1YlxcYXJjaGl0ZWN0dXJlLWZyb250L3NyY1xcYXBwXFxjb252ZXJzYXRpb25cXGNvbnZlcnNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udmVyc2F0aW9uL2NvbnZlcnNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29udmVyc2F0aW9uL2NvbnZlcnNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcmllbmQtYXZhdGFyIHtcclxuICAgIGJhY2tncm91bmQ6ICNiYmI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogNHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBsdXMtYXZhdGFyIHtcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gICAgd2lkdGg6IDRyZW07XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBsaW5lLWhlaWdodDogNHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSIsIi5mcmllbmQtYXZhdGFyIHtcbiAgYmFja2dyb3VuZDogI2JiYjtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiA0cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBsdXMtYXZhdGFyIHtcbiAgY29sb3I6ICNiYmI7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBsaW5lLWhlaWdodDogNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/conversation/conversation.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/conversation/conversation.component.ts ***!
    \********************************************************/

  /*! exports provided: ConversationComponent */

  /***/
  function srcAppConversationConversationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConversationComponent", function () {
      return ConversationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user/user.service */
    "./src/app/services/user/user.service.ts");

    var ConversationComponent =
    /*#__PURE__*/
    function () {
      function ConversationComponent(userService) {
        _classCallCheck(this, ConversationComponent);

        this.showSearch = false;
        this.showThread = false;
        this.friends = [];
        this.userService = userService;
      }

      _createClass(ConversationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.userService.getFriends().subscribe(function (el) {
            _this.friends = el;
          });
        }
      }, {
        key: "search",
        value: function search() {
          this.showSearch = true;
        }
      }, {
        key: "addedFriend",
        value: function addedFriend(friend) {
          var _this2 = this;

          this.showSearch = false;
          this.userService.addFriend(friend.email).then(function (res) {
            _this2.friends.push(friend);
          });
        }
      }, {
        key: "startConv",
        value: function startConv(friend) {
          this.showThread = false;
          this.friendConversing = friend;
          this.showThread = true;
        }
      }]);

      return ConversationComponent;
    }();

    ConversationComponent.ctorParameters = function () {
      return [{
        type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    ConversationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-conversation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./conversation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/conversation/conversation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./conversation.component.scss */
      "./src/app/conversation/conversation.component.scss")).default]
    })], ConversationComponent);
    /***/
  },

  /***/
  "./src/app/dialog-message/dialog-message.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/dialog-message/dialog-message.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDialogMessageDialogMessageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dialog-message {\n  border: 1px solid #ccc;\n  border-radius: 0.4em;\n}\n\n.dialog-message {\n  position: relative;\n  background: #ccc;\n  color: #fff;\n}\n\n.dialog-message:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 0.563em solid transparent;\n  border-left-color: #ccc;\n  border-right: 0;\n  margin-top: -0.562em;\n  margin-right: -0.562em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nLW1lc3NhZ2UvQzpcXFVzZXJzXFxnZW9yZ2VcXERvY3VtZW50c1xcR2l0SHViXFxhcmNoaXRlY3R1cmUtZnJvbnQvc3JjXFxhcHBcXGRpYWxvZy1tZXNzYWdlXFxkaWFsb2ctbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlhbG9nLW1lc3NhZ2UvZGlhbG9nLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDQyxrQkFBQTtFQUNDLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREdBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQ0FEIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9nLW1lc3NhZ2UvZGlhbG9nLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLW1lc3NhZ2Uge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogLjRlbTtcclxufVxyXG5cclxuLmRpYWxvZy1tZXNzYWdlIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxuICBjb2xvcjogI2ZmZjtcclxuXHQvLyBib3JkZXItcmFkaXVzOiAuNGVtO1xyXG59XHJcblxyXG4uZGlhbG9nLW1lc3NhZ2U6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogMDtcclxuXHR0b3A6IDUwJTtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcblx0Ym9yZGVyOiAwLjU2M2VtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlci1sZWZ0LWNvbG9yOiAjY2NjO1xyXG5cdGJvcmRlci1yaWdodDogMDtcclxuXHRtYXJnaW4tdG9wOiAtMC41NjJlbTtcclxuXHRtYXJnaW4tcmlnaHQ6IC0wLjU2MmVtO1xyXG59XHJcbiIsIi5kaWFsb2ctbWVzc2FnZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDAuNGVtO1xufVxuXG4uZGlhbG9nLW1lc3NhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZGlhbG9nLW1lc3NhZ2U6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyOiAwLjU2M2VtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdC1jb2xvcjogI2NjYztcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAtMC41NjJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAtMC41NjJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/dialog-message/dialog-message.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/dialog-message/dialog-message.component.ts ***!
    \************************************************************/

  /*! exports provided: DialogMessageComponent */

  /***/
  function srcAppDialogMessageDialogMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogMessageComponent", function () {
      return DialogMessageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DialogMessageComponent = function DialogMessageComponent() {
      _classCallCheck(this, DialogMessageComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DialogMessageComponent.prototype, "content", void 0);
    DialogMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dialog-message',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog-message.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-message/dialog-message.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dialog-message.component.scss */
      "./src/app/dialog-message/dialog-message.component.scss")).default]
    })], DialogMessageComponent);
    /***/
  },

  /***/
  "./src/app/dialog-user-avatar/dialog-user-avatar.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/dialog-user-avatar/dialog-user-avatar.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDialogUserAvatarDialogUserAvatarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dialog-user-avatar {\n  font-size: 1.5rem;\n  line-height: 3.5rem;\n  font-weight: 900;\n  color: #ccc;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  text-align: center;\n  padding: 0.25rem;\n  margin: 0 auto;\n  width: 4rem;\n  height: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nLXVzZXItYXZhdGFyL0M6XFxVc2Vyc1xcZ2VvcmdlXFxEb2N1bWVudHNcXEdpdEh1YlxcYXJjaGl0ZWN0dXJlLWZyb250L3NyY1xcYXBwXFxkaWFsb2ctdXNlci1hdmF0YXJcXGRpYWxvZy11c2VyLWF2YXRhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGlhbG9nLXVzZXItYXZhdGFyL2RpYWxvZy11c2VyLWF2YXRhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9nLXVzZXItYXZhdGFyL2RpYWxvZy11c2VyLWF2YXRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctdXNlci1hdmF0YXIge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAzLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb2xvcjogI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC4yNXJlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogNHJlbTtcclxuICBoZWlnaHQ6IDRyZW07XHJcbn1cclxuIiwiLmRpYWxvZy11c2VyLWF2YXRhciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMy41cmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dialog-user-avatar/dialog-user-avatar.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/dialog-user-avatar/dialog-user-avatar.component.ts ***!
    \********************************************************************/

  /*! exports provided: DialogUserAvatarComponent */

  /***/
  function srcAppDialogUserAvatarDialogUserAvatarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogUserAvatarComponent", function () {
      return DialogUserAvatarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DialogUserAvatarComponent = function DialogUserAvatarComponent() {
      _classCallCheck(this, DialogUserAvatarComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DialogUserAvatarComponent.prototype, "user", void 0);
    DialogUserAvatarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dialog-user-avatar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog-user-avatar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-user-avatar/dialog-user-avatar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dialog-user-avatar.component.scss */
      "./src/app/dialog-user-avatar/dialog-user-avatar.component.scss")).default]
    })], DialogUserAvatarComponent);
    /***/
  },

  /***/
  "./src/app/friend-search/friend-search.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/friend-search/friend-search.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFriendSearchFriendSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyaWVuZC1zZWFyY2gvZnJpZW5kLXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/friend-search/friend-search.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/friend-search/friend-search.component.ts ***!
    \**********************************************************/

  /*! exports provided: FriendSearchComponent */

  /***/
  function srcAppFriendSearchFriendSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendSearchComponent", function () {
      return FriendSearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user/user.service */
    "./src/app/services/user/user.service.ts");

    var FriendSearchComponent =
    /*#__PURE__*/
    function () {
      function FriendSearchComponent(userService) {
        var _this3 = this;

        _classCallCheck(this, FriendSearchComponent);

        this.newFriend = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.search = function (text$) {
          return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) {
            return _this3.userService.search(term);
          }));
        };

        this.userService = userService;
      }

      _createClass(FriendSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "resultFormatBandListValue",
        value: function resultFormatBandListValue(value) {
          return value.firstName + ' ' + value.lastName + ' (' + value.email + ')';
        }
      }, {
        key: "add",
        value: function add(selected) {
          this.newFriend.emit(selected.item);
        }
      }]);

      return FriendSearchComponent;
    }();

    FriendSearchComponent.ctorParameters = function () {
      return [{
        type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FriendSearchComponent.prototype, "newFriend", void 0);
    FriendSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-friend-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./friend-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/friend-search/friend-search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./friend-search.component.scss */
      "./src/app/friend-search/friend-search.component.scss")).default]
    })], FriendSearchComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user/user.service */
    "./src/app/services/user/user.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, userService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.userService = userService;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.email = '';
        }
      }, {
        key: "login",
        value: function login() {
          this.userService.setCurentUser(this.email);
          this.router.navigate(['/conversation']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/message-thread/message-thread.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/message-thread/message-thread.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessageThreadMessageThreadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".reply-input {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS10aHJlYWQvQzpcXFVzZXJzXFxnZW9yZ2VcXERvY3VtZW50c1xcR2l0SHViXFxhcmNoaXRlY3R1cmUtZnJvbnQvc3JjXFxhcHBcXG1lc3NhZ2UtdGhyZWFkXFxtZXNzYWdlLXRocmVhZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVzc2FnZS10aHJlYWQvbWVzc2FnZS10aHJlYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlLXRocmVhZC9tZXNzYWdlLXRocmVhZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXBseS1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsIi5yZXBseS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/message-thread/message-thread.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/message-thread/message-thread.component.ts ***!
    \************************************************************/

  /*! exports provided: MessageThreadComponent */

  /***/
  function srcAppMessageThreadMessageThreadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageThreadComponent", function () {
      return MessageThreadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_messages_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/messages/message.service */
    "./src/app/services/messages/message.service.ts");
    /* harmony import */


    var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user/user.service */
    "./src/app/services/user/user.service.ts");

    var MessageThreadComponent =
    /*#__PURE__*/
    function () {
      function MessageThreadComponent(messageService, userService) {
        _classCallCheck(this, MessageThreadComponent);

        this.messages = [];
        this.currentReply = '';
        this.messageService = messageService;
        this.userService = userService;
      }

      _createClass(MessageThreadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.messages = [];
          this.messageService.getConversation(this.userService.getCurrentUser(), this.friend.email).then(function (res) {
            _this4.messages = res;
          });
        }
      }, {
        key: "reply",
        value: function reply(event) {
          var _this5 = this;

          if (event.code === 'Enter') {
            var messageCopy = '' + this.currentReply;
            this.currentReply = '';
            this.messageService.addMessage({
              to: this.friend.email,
              content: messageCopy,
              from: this.userService.getCurrentUser()
            }).then(function () {
              _this5.messageService.getConversation(_this5.userService.getCurrentUser(), _this5.friend.email).then(function (res) {
                _this5.messages = res;
              });
            });
          }
        }
      }]);

      return MessageThreadComponent;
    }();

    MessageThreadComponent.ctorParameters = function () {
      return [{
        type: _services_messages_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }, {
        type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MessageThreadComponent.prototype, "friend", void 0);
    MessageThreadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-message-thread',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message-thread.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/message-thread/message-thread.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message-thread.component.scss */
      "./src/app/message-thread/message-thread.component.scss")).default]
    })], MessageThreadComponent);
    /***/
  },

  /***/
  "./src/app/services/messages/message.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/messages/message.service.ts ***!
    \******************************************************/

  /*! exports provided: MessageService */

  /***/
  function srcAppServicesMessagesMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageService", function () {
      return MessageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/configs/configs */
    "./src/app/configs/configs.ts");

    var MessageService =
    /*#__PURE__*/
    function () {
      function MessageService(http) {
        _classCallCheck(this, MessageService);

        this.http = http;
        this.base = src_app_configs_configs__WEBPACK_IMPORTED_MODULE_3__["default"].baseURL;
        this.options = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Response-Type': 'text'
          })
        };
      }

      _createClass(MessageService, [{
        key: "addMessage",
        value: function addMessage(message) {
          var url = this.base + '/messages/add-message';
          return this.http.post(url, message, this.options).toPromise();
        }
      }, {
        key: "getConversation",
        value: function getConversation(user1, user2) {
          var url = this.base + '/messages/get-conversation';
          var request = {
            user1: user1,
            user2: user2
          };
          return this.http.post(url, JSON.stringify(request), this.options).toPromise();
        }
      }]);

      return MessageService;
    }();

    MessageService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MessageService);
    /***/
  },

  /***/
  "./src/app/services/user/user.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/user/user.service.ts ***!
    \***********************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _configs_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../configs/configs */
    "./src/app/configs/configs.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http; // private base = 'http://localhost:8080';
        // private base = 'https://guarded-eyrie-20015.herokuapp.com';

        this.base = _configs_configs__WEBPACK_IMPORTED_MODULE_3__["default"].baseURL;
        this.options = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Response-Type': 'text'
          })
        };
      }

      _createClass(UserService, [{
        key: "signUpUser",
        value: function signUpUser(user) {
          var url = this.base + '/users/new'; // const httpOptions = {
          //   headers: new HttpHeaders({
          //     'Content-Type': 'application/json',
          //     'Response-Type': 'text'
          //   })
          // };

          return this.http.post(url, user, this.options).toPromise();
        }
      }, {
        key: "search",
        value: function search(email) {
          var url = this.base + '/users/search';
          var request = {
            email: email
          };
          return this.http.post(url, request, this.options);
        }
      }, {
        key: "addFriend",
        value: function addFriend(email1) {
          var url = this.base + '/friendship/add-friend';
          var request = {
            email1: email1,
            email2: this.getCurrentUser()
          };
          return this.http.post(url, request, this.options).toPromise();
        }
      }, {
        key: "getFriends",
        value: function getFriends() {
          var url = this.base + '/friendship/get-friends';
          var request = {
            email: this.getCurrentUser()
          };
          return this.http.post(url, request, this.options);
        }
      }, {
        key: "setCurentUser",
        value: function setCurentUser(email) {
          this.currentUser = email;
          localStorage.setItem('user', email);
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          if (this.currentUser) {
            return this.currentUser;
          } else {
            return localStorage.getItem('user');
          }
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/signup/signup.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/signup/signup.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user/user.service */
    "./src/app/services/user/user.service.ts");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(userService, router) {
        _classCallCheck(this, SignupComponent);

        this.userService = userService;
        this.router = router;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.email = '';
          this.lastName = '';
          this.firstName = '';
        }
      }, {
        key: "signup",
        value: function signup() {
          var _this6 = this;

          var user = {
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName
          };
          console.log(this.userService);
          this.userService.signUpUser(user).then(function (res) {
            console.log(res);

            _this6.router.navigate(['/login']);
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/signup/signup.component.scss")).default]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\george\Documents\GitHub\architecture-front\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map