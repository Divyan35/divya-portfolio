(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n<footer class=\"page-footer font-small blue\">\n\n        <!-- Copyright -->\n        <div class=\"footer-copyright text-left py-3\">© 2019 Copyright:\n           Divya Nagargade\n        </div>\n        <!-- Copyright -->\n      \n      </footer>\n      <!-- Footer -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/contact/contact.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/contact/contact.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n    <div class=\"jumbotron\">\n            <div class=\"container\">\n<h3 class=\"pb-1 pt-2\">Get in touch</h3>\n\n<p>I am currently open to opportunities within the software engineering discipline and if you feel like we would be a great match,\nI'd like to hear from you!</p>\n<hr>\n<div>\n<h5>Email:</h5>\n<p>divya.nagargade@yahoo.com</p>\n\n<h5>Phone:</h5>\n<p>9766133705</p>\n</div>\n<h5>Github Link:</h5>\n<a href=\"https://github.com/Divyan35\">https://github.com/Divyan35</a>\n<hr>\n<!--<div class=\"contact\">\n<form id=\"contactForm\">\n        <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n            <label for=\"inputName\">Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" id=\"Name\" placeholder=\"Name\">\n            </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputEmail\">Email</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" id=\"Email\" placeholder=\"Email\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputAddress\">Message</label>\n          <textarea class=\"form-control\" name=\"message\" rows=\"4\" class=\"form-control\" id=\"Message\" placeholder=\"Enter your message here\">\n          </textarea>\n        </div>\n        <button type=\"submit\" class=\"btn btn-info\">Send Message</button>\n      </form>\n      </div>\n    </div>-->\n <!-- name -->\n <!--<div class=\"field\">\n    <input type=\"text\" name=\"name\" class=\"input\" placeholder=\"Your Name\">\n  </div>\n\n  \n  <div class=\"field\">\n    <input type=\"email\" name=\"email\" class=\"input\" placeholder=\"Your Email\">\n  </div>\n\n  \n  <div class=\"field\">\n    <textarea class=\"textarea\" name=\"message\" placeholder=\"Enter your message here\"></textarea>\n  </div>\n\n  <button type=\"submit\" rows=\"4\" class=\"button is-danger is-large\">Submit</button>\n\n</form>-->\n\n<div class=\"col-6 offset-1\">\n  <h5>Contact</h5>\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"row\">\n            <div class=\"col-12 col-sm-6 form-group required\">\n                <label for=\"name\">Name</label>\n                <input type=\"text\" [disabled]=\"loading\" [(ngModel)]=\"contact.Name\" name=\"contact.Name\" required=\"\" class=\"form-control text-input\"\n                    id=\"name\" placeholder=\"Name\" />\n            </div>\n            <div class=\"col-12 col-sm-6 form-group required\">\n                <label for=\"email\">E-mail</label>\n                <input type=\"email\" [disabled]=\"loading\" [(ngModel)]=\"contact.Email\" name=\"contact.Email\" required=\"\"\n                    class=\"form-control text-input\" id=\"email\" placeholder=\"E-mail\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12 form-group required\">\n                <label for=\"subject\">Subject</label>\n                <input type=\"text\" [disabled]=\"loading\" [(ngModel)]=\"contact.Subject\" name=\"contact.Subject\" required=\"\"\n                    class=\"form-control text-input\" id=\"subject\" placeholder=\"Subject\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12 form-group required\">\n                <label for=\"message\">Message</label>\n                <textarea type=\"text\" [disabled]=\"loading\" [(ngModel)]=\"contact.Message\" name=\"contact.Message\" required=\"\"\n                    class=\"form-control\" id=\"message\" placeholder=\"Any kind of inappropriate contents are strictly prohibited\"></textarea>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <button type=\"submit\" [disabled]=\"loading\" class=\"btn btn-success\">Send</button>\n            </div>\n        </div>\n    </form>\n</div>\n</div>\n</div>\n<div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/demoproject/demoproject.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/demoproject/demoproject.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n<div class=\"jumbotron\">\n        <div class=\"container\">\n          <h4 class=\"display-5\">YourJourney.com</h4>\n          <p>A MEAN stack application which helps a traveller to show Schedule of Vehicle. \n            It is built using Angular 7, NodeJS, Express and MongoDB.\n          </p>\n            <h5>Work done:</h5>\n            <p>Designing Front end with responsive interface.</p>\n            <p>Building REST API in NodeJS,Express.<p>\n            <p>Storing data in MongoDB.</p>\n            <p> Using REST API in Angular.</p>\n            <p>Authentication and authorization by using JWT passport.</p>\n            <p>Deployment on heroku.</p>\n\n            <h5>Project Link:</h5>\n            <a href=\"https://yourjourney-app.herokuapp.com\">https://yourjourney-app.herokuapp.com</a>\n            <br>\n\n        </div>\n      </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n<div class=\"jumbotron\">\n        <div class=\"container\">\n          <h1 class=\"display-5\">Welcome to my portfolio</h1>\n          <p>Hi, I am Divya Nagargade. I am passionate about creating Web application on both Front end and Back end side by using MEAN stack Technology. If it seems interesting to you then get in touch.</p>\n        </div>\n      </div>\n\n      <div class=\"bg\">\n        <span>\n          &nbsp;\n          &nbsp;\n          </span>\n        <!-- Example row of columns -->\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <h5>Web Application development</h5>\n            <p>Fast, responsive and engaging apps that keeps your idea alive.</p>\n            <!--<p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>-->\n          </div>\n          <div class=\"col-md-4\">\n            <h5>API development and integration</h5>\n            <p>REST API integration and development with NodeJS.</p>\n          </div>\n          <div class=\"col-md-4\">\n            <h5>Database Design</h5>\n            <p>Schema design and data modelling in MongoDB which aims for performance,scale and stability.</p>\n          </div>\n        </div>\n\n        <hr>\n\n      </div> <!-- /container -->\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/navbar/navbar.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/navbar/navbar.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"container\">\n    <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">\n    <br />\n    <nav class=\"navbar navbar-expand-md bg-dark d-flex flex-row\" id=\"collapsenavbar\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".collapsenavbar\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      \n            <a class=\"navbar-brand pr-5\" href=\"#\">DIVYA NAGARGADE</a>\n              <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item active\">\n                    <a class=\"nav-link pr-3 navbar-light\" routerLink=\"home\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\">Home</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link pr-3\" routerLink=\"skills\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\">Skills</a>\n                </li>\n                <li class=\"nav-item\">\n                        <a class=\"nav-link pr-3\" routerLink=\"demoproject\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\">Demo Project</a>\n                </li>\n              </ul>\n              <ul class=\"navbar-nav navbar-right\">\n                  <li class=\"nav-item\">\n                        <a class=\"nav-link pr-3\" [routerLink]=\"['/contact']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\">Get in touch</a>\n                </li>\n                </ul>\n            \n    </nav>\n    </div>\n    </div>\n    </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/skills/skills.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/skills/skills.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n    <br>\n<h4><u>Front End</u>:</h4>\n<div class=\"row\">\n        <div class=\"col-lg-4 col-md-4 col-xs-4 mt-2 mb-3 thumb\">\n            <a class=\"thumbnail\" href=\"#\">\n                <img class=\"img-responsive\" src=\"/assets/html.png\">\n            </a>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-xs-4 mt-2 mb-3 thumb\">\n            <a class=\"thumbnail\" href=\"#\">\n                <img class=\"img-responsive\" src=\"/assets/css3.png\">\n            </a>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-xs-4 mt-2 mb-3 thumb\">\n            <a class=\"thumbnail\" href=\"#\">\n                <img class=\"img-responsive\" src=\"/assets/bootstrap1.png\" alt=\"\">\n            </a>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-xs-4 mt-2 mb-0 thumb\">\n                <a class=\"thumbnail\" href=\"#\">\n                    <img class=\"img-responsive\" src=\"/assets/javascript111.png\" alt=\"\">\n                </a>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-xs-4 mt-2 mb-0 thumb\">\n                <a class=\"thumbnail\" href=\"#\">\n                    <img class=\"img-responsive\" src=\"/assets/angular111.png\" alt=\"\">\n                </a>\n        </div>\n</div>\n<hr>\n<h4><u>Server</u>:</h4>\n<div class=\"row\">\n        <div class=\"col-lg-4 col-md-4 col-xs-4 mt-1 mb-0 thumb\">\n            <a class=\"thumbnail\" href=\"#\">\n                <img class=\"img-responsive\" src=\"/assets/npm1.png\">\n            </a>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-xs-4 mt-1 mb-0 thumb\">\n                <a class=\"thumbnail\" href=\"#\">\n                    <img class=\"img-responsive\" src=\"/assets/express.png\">\n                </a>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-xs-4 mt-1 mb-0 thumb\">\n                <a class=\"thumbnail\" href=\"#\">\n                    <img class=\"img-responsive\" src=\"/assets/node1.png\">\n                </a>\n        </div>\n</div>\n<hr>\n<h4><u>Database</u>:</h4>\n<div class=\"row\">\n        <div class=\"col-lg-4 col-md-4 col-xs-4 mt-2 mb-3 thumb\">\n            <a class=\"thumbnail\" href=\"#\">\n                <img class=\"img-responsive\" src=\"/assets/mongodb2.png\">\n            </a>\n        </div>\n</div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
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
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'mean-stack';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "./src/app/component/navbar/navbar.component.ts");
            /* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
            /* harmony import */ var _component_demoproject_demoproject_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/demoproject/demoproject.component */ "./src/app/component/demoproject/demoproject.component.ts");
            /* harmony import */ var _component_skills_skills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/skills/skills.component */ "./src/app/component/skills/skills.component.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/contact/contact.component */ "./src/app/component/contact/contact.component.ts");
            /* harmony import */ var _component_contact_contact_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/contact/contact.service */ "./src/app/component/contact/contact.service.ts");
            var appRoutes = [
                { path: '', redirectTo: "/home", pathMatch: 'full' },
                { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
                { path: 'contact', component: _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactFormComponent"] },
                { path: 'demoproject', component: _component_demoproject_demoproject_component__WEBPACK_IMPORTED_MODULE_11__["DemoprojectComponent"] },
                { path: 'skills', component: _component_skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"] }
            ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                        _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                        _component_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                        _component_demoproject_demoproject_component__WEBPACK_IMPORTED_MODULE_11__["DemoprojectComponent"],
                        _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactFormComponent"],
                        _component_skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot({
                            positionClass: 'toast-bottom-right',
                            preventDuplicates: true,
                        })
                    ],
                    providers: [
                        _component_contact_contact_service__WEBPACK_IMPORTED_MODULE_15__["ContactService"]
                    ],
                    exports: [_component_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactFormComponent"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/component/contact/contact.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/component/contact/contact.component.ts ***!
          \********************************************************/
        /*! exports provided: ContactFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function () { return ContactFormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.service */ "./src/app/component/contact/contact.service.ts");
            /* harmony import */ var _models_contact_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/contact.model */ "./src/app/component/contact/models/contact.model.ts");
            var ContactFormComponent = /** @class */ (function () {
                function ContactFormComponent(contactService, toastr) {
                    this.contactService = contactService;
                    this.toastr = toastr;
                    this.contact = new _models_contact_model__WEBPACK_IMPORTED_MODULE_4__["Contact"]();
                    this.loading = true;
                }
                ContactFormComponent.prototype.ngOnInit = function () {
                    this.loading = false;
                };
                ContactFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.loading = true;
                    //Don't forget to subscribe on an observable, or it will never be called.
                    this.contactService.sendMail(this.contact).subscribe(function () {
                        //Success
                        _this.contact = new _models_contact_model__WEBPACK_IMPORTED_MODULE_4__["Contact"]();
                        _this.loading = false;
                        _this.toastr.success('Message send.');
                    }, function () {
                        //Failed
                        _this.loading = false;
                        _this.toastr.error('Woops, something went wrong.');
                    });
                };
                return ContactFormComponent;
            }());
            ContactFormComponent.ctorParameters = function () { return [
                { type: _contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
            ]; };
            ContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/contact/contact.component.html")).default,
                    //This is just for styling and will add the class "row" to the parent-tag
                    host: { 'class': 'row' }
                })
            ], ContactFormComponent);
            /***/ 
        }),
        /***/ "./src/app/component/contact/contact.service.ts": 
        /*!******************************************************!*\
          !*** ./src/app/component/contact/contact.service.ts ***!
          \******************************************************/
        /*! exports provided: ContactService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function () { return ContactService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/app/component/contact/environments/environment.ts");
            var ContactService = /** @class */ (function () {
                function ContactService(http) {
                    this.http = http;
                }
                ContactService.prototype.sendMail = function (contact) {
                    //Setting json header so other applications can parse our message.
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, JSON.stringify(contact), { headers: headers })
                        .pipe(
                    //When it fails, we're going to retry 3 times.
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
                };
                return ContactService;
            }());
            ContactService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ContactService);
            /***/ 
        }),
        /***/ "./src/app/component/contact/environments/environment.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/component/contact/environments/environment.ts ***!
          \***************************************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var environment = {
                production: false,
                target: 'http://localhost:4000',
                apiUrl: 'http://localhost:8080',
                secure: false
            };
            /***/ 
        }),
        /***/ "./src/app/component/contact/models/contact.model.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/component/contact/models/contact.model.ts ***!
          \***********************************************************/
        /*! exports provided: Contact */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function () { return Contact; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Contact = /** @class */ (function () {
                function Contact() {
                }
                return Contact;
            }());
            /***/ 
        }),
        /***/ "./src/app/component/demoproject/demoproject.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/component/demoproject/demoproject.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9kZW1vcHJvamVjdC9kZW1vcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/component/demoproject/demoproject.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/component/demoproject/demoproject.component.ts ***!
          \****************************************************************/
        /*! exports provided: DemoprojectComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoprojectComponent", function () { return DemoprojectComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DemoprojectComponent = /** @class */ (function () {
                function DemoprojectComponent() {
                }
                DemoprojectComponent.prototype.ngOnInit = function () {
                };
                return DemoprojectComponent;
            }());
            DemoprojectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-demoproject',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./demoproject.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/demoproject/demoproject.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./demoproject.component.css */ "./src/app/component/demoproject/demoproject.component.css")).default]
                })
            ], DemoprojectComponent);
            /***/ 
        }),
        /***/ "./src/app/component/home/home.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/component/home/home.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h1{\r\n   color:#99004d; \r\n}\r\np{\r\n    color:#00004d;\r\n}\r\nh5{\r\n    color: #8f246b;\r\n}\r\n.bg\r\n{\r\n    background-color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csYUFBYTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBOztJQUVJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICBjb2xvcjojOTkwMDRkOyBcclxufVxyXG5we1xyXG4gICAgY29sb3I6IzAwMDA0ZDtcclxufVxyXG5oNXtcclxuICAgIGNvbG9yOiAjOGYyNDZiO1xyXG59XHJcbi5iZ1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/component/home/home.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/component/home/home.component.ts ***!
          \**************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/component/navbar/navbar.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/component/navbar/navbar.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a {\r\n    color: white;\r\n  }\r\n\r\n  a.active\r\n  {\r\n    background-color:#9ba7b0;\r\n  }\r\n\r\n  nav{\r\n    color:#8f246b;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7RUFDZDs7RUFFQTs7SUFFRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBhLmFjdGl2ZVxyXG4gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzliYTdiMDtcclxuICB9XHJcblxyXG4gIG5hdntcclxuICAgIGNvbG9yOiM4ZjI0NmI7XHJcbiAgfVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/component/navbar/navbar.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/component/navbar/navbar.component.ts ***!
          \******************************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent() {
                }
                NavbarComponent.prototype.ngOnInit = function () {
                };
                return NavbarComponent;
            }());
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/navbar/navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/component/navbar/navbar.component.css")).default]
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/app/component/skills/skills.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/component/skills/skills.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h4\r\n{\r\n    color:#001f33;\r\n}\r\n\r\n.container\r\n{\r\n  background-color:#d3ebf2 ;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNFxyXG57XHJcbiAgICBjb2xvcjojMDAxZjMzO1xyXG59XHJcblxyXG4uY29udGFpbmVyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNkM2ViZjIgO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/component/skills/skills.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/component/skills/skills.component.ts ***!
          \******************************************************/
        /*! exports provided: SkillsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () { return SkillsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SkillsComponent = /** @class */ (function () {
                function SkillsComponent() {
                }
                SkillsComponent.prototype.ngOnInit = function () {
                };
                return SkillsComponent;
            }());
            SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-skills',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/skills/skills.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.css */ "./src/app/component/skills/skills.component.css")).default]
                })
            ], SkillsComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                apiUrl: ""
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
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! f:\msproject\aportfolio\portfolio-divya\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map