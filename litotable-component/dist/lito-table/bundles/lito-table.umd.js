(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/paginator'), require('@angular/material/sort'), require('@angular/material/table'), require('reflect-metadata'), require('@angular/cdk/drag-drop'), require('@angular/material/sidenav'), require('@angular/cdk/a11y'), require('@angular/material/expansion'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/checkbox'), require('@angular/material/progress-bar'), require('@angular/material/menu'), require('@angular/material/divider'), require('@angular/material/slide-toggle'), require('@angular/material/dialog'), require('@angular/forms'), require('@angular/material/stepper'), require('@angular/material/form-field'), require('@angular/material/select'), require('@angular/material/core'), require('@angular/common'), require('@angular/material/button-toggle'), require('@angular/material/datepicker'), require('@angular/material/tooltip'), require('@angular/material/input'), require('@angular/material/card'), require('@angular/material/radio'), require('@angular/material/tabs'), require('@angular/material/slider')) :
    typeof define === 'function' && define.amd ? define('lito-table', ['exports', '@angular/core', '@angular/material/paginator', '@angular/material/sort', '@angular/material/table', 'reflect-metadata', '@angular/cdk/drag-drop', '@angular/material/sidenav', '@angular/cdk/a11y', '@angular/material/expansion', '@angular/material/button', '@angular/material/icon', '@angular/material/checkbox', '@angular/material/progress-bar', '@angular/material/menu', '@angular/material/divider', '@angular/material/slide-toggle', '@angular/material/dialog', '@angular/forms', '@angular/material/stepper', '@angular/material/form-field', '@angular/material/select', '@angular/material/core', '@angular/common', '@angular/material/button-toggle', '@angular/material/datepicker', '@angular/material/tooltip', '@angular/material/input', '@angular/material/card', '@angular/material/radio', '@angular/material/tabs', '@angular/material/slider'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["lito-table"] = {}, global.ng.core, global.ng.material.paginator, global.ng.material.sort, global.ng.material.table, null, global.ng.cdk.dragDrop, global.ng.material.sidenav, global.ng.cdk.a11y, global.ng.material.expansion, global.ng.material.button, global.ng.material.icon, global.ng.material.checkbox, global.ng.material.progressBar, global.ng.material.menu, global.ng.material.divider, global.ng.material.slideToggle, global.ng.material.dialog, global.ng.forms, global.ng.material.stepper, global.ng.material.formField, global.ng.material.select, global.ng.material.core, global.ng.common, global.ng.material.buttonToggle, global.ng.material.datepicker, global.ng.material.tooltip, global.ng.material.input, global.ng.material.card, global.ng.material.radio, global.ng.material.tabs, global.ng.material.slider));
})(this, (function (exports, i0, i9, i8$1, i6$1, reflectMetadata, dragDrop, i5$1, i1$1, i8, i2, i3, i7$1, i10$1, i11, i12$1, i13, i1, i2$1, i3$1, i5, i6, i7, i19, i10, i12, i15, i16, i15$1, radio, tabs, slider) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var i8__namespace$1 = /*#__PURE__*/_interopNamespace(i8$1);
    var i6__namespace$1 = /*#__PURE__*/_interopNamespace(i6$1);
    var i5__namespace$1 = /*#__PURE__*/_interopNamespace(i5$1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i7__namespace$1 = /*#__PURE__*/_interopNamespace(i7$1);
    var i10__namespace$1 = /*#__PURE__*/_interopNamespace(i10$1);
    var i11__namespace = /*#__PURE__*/_interopNamespace(i11);
    var i12__namespace$1 = /*#__PURE__*/_interopNamespace(i12$1);
    var i13__namespace = /*#__PURE__*/_interopNamespace(i13);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i19__namespace = /*#__PURE__*/_interopNamespace(i19);
    var i10__namespace = /*#__PURE__*/_interopNamespace(i10);
    var i12__namespace = /*#__PURE__*/_interopNamespace(i12);
    var i15__namespace = /*#__PURE__*/_interopNamespace(i15);
    var i16__namespace = /*#__PURE__*/_interopNamespace(i16);
    var i15__namespace$1 = /*#__PURE__*/_interopNamespace(i15$1);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function step(result) { }
            step((generator.apply(thisArg, _arguments || [])).next());
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
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(); }); }; }
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
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { o[n](v), settle(); }); }; }
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
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var Column = /** @class */ (function () {
        function Column(propertyKey, name, type, order) {
            this.propertyKey = propertyKey;
            this.name = name;
            this.type = type;
            this.order = order;
        }
        return Column;
    }());

    /**
     * This class is for date constrains
     */
    var DateConstrain = /** @class */ (function () {
        function DateConstrain(type, values, style, enable) {
            var _this = this;
            if (style === void 0) { style = {}; }
            if (enable === void 0) { enable = true; }
            this.trigger = function (e) {
                switch (_this.type) {
                    case exports.MesurableConstrainType.LESSTHAN: {
                        if (e < _this.values[0])
                            return true;
                        else
                            return false;
                        break;
                    }
                    case exports.MesurableConstrainType.MORETHAN: {
                        if (e > _this.values[0])
                            return true;
                        else
                            return false;
                        break;
                    }
                    case exports.MesurableConstrainType.EQUALS: {
                        if (e == _this.values[0])
                            return true;
                        else
                            return false;
                        break;
                    }
                    case exports.MesurableConstrainType.BETWEEN: {
                        if (_this.values.length == 2)
                            if (e > _this.values[0] && e < _this.values[1])
                                return true;
                            else
                                return false;
                        break;
                    }
                    case exports.MesurableConstrainType.NOTBETWEEN: {
                        if (_this.values.length == 2)
                            if (!(e > _this.values[0] && e < _this.values[1]))
                                return true;
                            else
                                return false;
                        break;
                    }
                }
                return false;
            };
            this.type = type;
            this.values = values;
            this.style = style;
            this.enable = enable;
        }
        return DateConstrain;
    }());
    /**
     * This class is for numbers constrains (integer, float, decimal, etc..)
     */
    var NumberConstrain = /** @class */ (function () {
        function NumberConstrain(type, values, style, enable) {
            var _this = this;
            if (style === void 0) { style = {}; }
            if (enable === void 0) { enable = true; }
            this.trigger = function (e) {
                switch (_this.type) {
                    case exports.MesurableConstrainType.LESSTHAN: {
                        if (e < _this.values[0])
                            return true;
                        else
                            return false;
                        break;
                    }
                    case exports.MesurableConstrainType.MORETHAN: {
                        if (e > _this.values[0])
                            return true;
                        else
                            return false;
                        break;
                    }
                    case exports.MesurableConstrainType.EQUALS: {
                        if (e == _this.values[0])
                            return true;
                        else
                            return false;
                        break;
                    }
                    case exports.MesurableConstrainType.BETWEEN: {
                        if (_this.values.length == 2)
                            if (e > _this.values[0] && e < _this.values[1])
                                return true;
                            else
                                return false;
                        break;
                    }
                    case exports.MesurableConstrainType.NOTBETWEEN: {
                        if (_this.values.length == 2)
                            if (!(e > _this.values[0] && e < _this.values[1]))
                                return true;
                            else
                                return false;
                        break;
                    }
                }
                return false;
            };
            this.type = type;
            this.values = values;
            this.style = style;
            this.enable = enable;
        }
        return NumberConstrain;
    }());
    /**
     * This class is for string constrains
     */
    var StringConstrain = /** @class */ (function () {
        function StringConstrain(style, enable, caseSense) {
            var _this = this;
            if (style === void 0) { style = {}; }
            if (enable === void 0) { enable = true; }
            if (caseSense === void 0) { caseSense = true; }
            this.constrainArray = [];
            this.trigger = function (e) {
                e = e.toString();
                var result = true;
                for (var i = 0; i < _this.constrainArray.length; i++) {
                    var con = _this.constrainArray[i];
                    switch (con.type) {
                        case exports.StringConstrainType.STARTSWITH: {
                            if (!(_this.caseSensitive
                                ? e.startsWith(con.value)
                                : e.toLocaleLowerCase().startsWith(con.value.toLocaleLowerCase())))
                                result = false;
                            break;
                        }
                        case exports.StringConstrainType.ENDWITH: {
                            if (!(_this.caseSensitive
                                ? e.endsWith(con.value)
                                : e.toLocaleLowerCase().endsWith(con.value.toLocaleLowerCase())))
                                result = false;
                            break;
                        }
                        case exports.StringConstrainType.CONTAINS: {
                            if (!(_this.caseSensitive
                                ? e.includes(con.value)
                                : e.toLocaleLowerCase().includes(con.value.toLocaleLowerCase())))
                                result = false;
                            break;
                        }
                    }
                    if (!result)
                        break;
                }
                return result;
            };
            this.style = style;
            this.enable = enable;
            this.caseSensitive = caseSense;
        }
        StringConstrain.prototype.addConstrain = function (stringConstrain) {
            this.constrainArray.push(stringConstrain);
        };
        StringConstrain.prototype.clearConstrains = function () {
            this.constrainArray = [];
        };
        return StringConstrain;
    }());
    exports.MesurableConstrainType = void 0;
    (function (MesurableConstrainType) {
        MesurableConstrainType[MesurableConstrainType["EQUALS"] = 1] = "EQUALS";
        MesurableConstrainType[MesurableConstrainType["MORETHAN"] = 2] = "MORETHAN";
        MesurableConstrainType[MesurableConstrainType["LESSTHAN"] = 3] = "LESSTHAN";
        MesurableConstrainType[MesurableConstrainType["BETWEEN"] = 4] = "BETWEEN";
        MesurableConstrainType[MesurableConstrainType["NOTBETWEEN"] = 5] = "NOTBETWEEN";
    })(exports.MesurableConstrainType || (exports.MesurableConstrainType = {}));
    exports.StringConstrainType = void 0;
    (function (StringConstrainType) {
        StringConstrainType[StringConstrainType["STARTSWITH"] = 1] = "STARTSWITH";
        StringConstrainType[StringConstrainType["ENDWITH"] = 2] = "ENDWITH";
        StringConstrainType[StringConstrainType["CONTAINS"] = 3] = "CONTAINS";
    })(exports.StringConstrainType || (exports.StringConstrainType = {}));

    var LitotableColor = /** @class */ (function () {
        function LitotableColor(value) {
            this.value = '';
            if (typeof value == 'string') {
                this.value = value;
            }
            else {
                if (value.length == 3) {
                    this.value = "rgb(" + value[0] + ", " + value[1] + ", " + value[2] + ")";
                }
                else if (value.length == 4) {
                    this.value = "rgb(" + value[0] + ", " + value[1] + ", " + value[2] + ", " + value[3] + ")";
                }
            }
        }
        return LitotableColor;
    }());
    exports.RowStyle = void 0;
    (function (RowStyle) {
        RowStyle[RowStyle["BORDER"] = 1] = "BORDER";
        RowStyle[RowStyle["SHADOW"] = 2] = "SHADOW";
    })(exports.RowStyle || (exports.RowStyle = {}));
    var TableActionsConfig = /** @class */ (function () {
        function TableActionsConfig(actions) {
            this.actions = actions;
        }
        TableActionsConfig.prototype.updatePermormableState = function (set) {
            this.actions.forEach(function (a) {
                a.performable = a.updatePerformable(set);
            });
        };
        return TableActionsConfig;
    }());
    exports.GeneralActionScope = void 0;
    (function (GeneralActionScope) {
        GeneralActionScope[GeneralActionScope["SINGLE"] = 1] = "SINGLE";
        GeneralActionScope[GeneralActionScope["MULTIPLE"] = 2] = "MULTIPLE";
    })(exports.GeneralActionScope || (exports.GeneralActionScope = {}));
    exports.TableOperation = void 0;
    (function (TableOperation) {
        TableOperation[TableOperation["CREATE"] = 1] = "CREATE";
        TableOperation[TableOperation["UPDATE"] = 2] = "UPDATE";
        TableOperation[TableOperation["DELETE"] = 3] = "DELETE";
        TableOperation[TableOperation["RESTORE"] = 4] = "RESTORE";
    })(exports.TableOperation || (exports.TableOperation = {}));

    function TableColumn(columnMetadata) {
        return function (target, propertyKey) {
            var prevData = Reflect.getMetadata('columnsMetadata', target);
            var newData = {
                propertyKey: propertyKey,
                metadata: columnMetadata,
            };
            var data = [];
            if (prevData != undefined) {
                data.push.apply(data, __spreadArray([], __read(prevData)));
            }
            data.push(newData);
            Reflect.defineMetadata('columnsMetadata', data, target);
        };
    }
    exports.ColumnType = void 0;
    (function (ColumnType) {
        ColumnType[ColumnType["STRING"] = 0] = "STRING";
        ColumnType[ColumnType["INTEGER"] = 1] = "INTEGER";
        ColumnType[ColumnType["FLOAT"] = 2] = "FLOAT";
        ColumnType[ColumnType["DATE"] = 3] = "DATE";
        ColumnType[ColumnType["CURRENCY"] = 4] = "CURRENCY";
        ColumnType[ColumnType["CUIT"] = 5] = "CUIT";
        ColumnType[ColumnType["PHONE"] = 6] = "PHONE";
    })(exports.ColumnType || (exports.ColumnType = {}));
    exports.ColumnContentAlignment = void 0;
    (function (ColumnContentAlignment) {
        ColumnContentAlignment[ColumnContentAlignment["LEFT"] = 1] = "LEFT";
        ColumnContentAlignment[ColumnContentAlignment["CENTER"] = 2] = "CENTER";
        ColumnContentAlignment[ColumnContentAlignment["RIGHT"] = 3] = "RIGHT";
    })(exports.ColumnContentAlignment || (exports.ColumnContentAlignment = {}));

    var LitoColorPickerComponent = /** @class */ (function () {
        function LitoColorPickerComponent(dialog) {
            this.dialog = dialog;
            this.content = 'color';
            this.result = new i0.EventEmitter();
            this.arr = new i0.EventEmitter();
        }
        LitoColorPickerComponent.prototype.ngOnInit = function () { };
        LitoColorPickerComponent.prototype.openDialog = function () {
            var _this = this;
            var dialogRef = this.dialog.open(DialogColorPicker, {
                width: '380px',
                data: { colors: this.colors, value: this.value, title: this.content },
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result)
                    _this.result.emit(result);
            });
        };
        return LitoColorPickerComponent;
    }());
    LitoColorPickerComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LitoColorPickerComponent, deps: [{ token: i1__namespace.MatDialog }], target: i0__namespace.ɵɵFactoryTarget.Component });
    LitoColorPickerComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LitoColorPickerComponent, selector: "app-lito-color-picker", inputs: { colors: "colors", content: "content" }, outputs: { result: "result", arr: "newColorArray" }, ngImport: i0__namespace, template: "<button mat-raised-button (click)=\"openDialog()\">{{ content }}</button>\n", styles: [".colors-container{margin:1.5rem auto 0!important;width:76%;display:grid;grid-template-columns:repeat(10,1fr)}.colors-container>*{justify-self:center;cursor:pointer}\n"], components: [{ type: i2__namespace.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LitoColorPickerComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-lito-color-picker',
                        templateUrl: './lito-color-picker.component.html',
                        styleUrls: ['./lito-color-picker.component.css'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.MatDialog }]; }, propDecorators: { colors: [{
                    type: i0.Input,
                    args: ['colors']
                }], content: [{
                    type: i0.Input,
                    args: ['content']
                }], result: [{
                    type: i0.Output,
                    args: ['result']
                }], arr: [{
                    type: i0.Output,
                    args: ['newColorArray']
                }] } });
    var DialogColorPicker = /** @class */ (function () {
        function DialogColorPicker(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.value = '';
            this.nc = [0, 0, 0];
            this.newColorString = 'rgb(255, 255, 255)';
            this.fgc = '#222';
            this.mainColors = MAIN_COLORS;
        }
        DialogColorPicker.prototype.onNoClick = function () {
            this.dialogRef.close();
        };
        DialogColorPicker.prototype.changeNewColorValue = function (color, value) {
            switch (color) {
                case 'r':
                    this.nc[0] = value;
                    break;
                case 'g':
                    this.nc[1] = value;
                    break;
                case 'b':
                    this.nc[2] = value;
                    break;
            }
            this.newColorString = "rgb(" + this.nc[0] + ", " + this.nc[1] + "," + this.nc[2] + ")";
            if (this.nc.reduce(function (a, c) { return a + c; }) / 3 < 180)
                this.fgc = '#fff';
            else
                this.fgc = '#222';
        };
        return DialogColorPicker;
    }());
    DialogColorPicker.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DialogColorPicker, deps: [{ token: i1__namespace.MatDialogRef }, { token: i1.MAT_DIALOG_DATA }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DialogColorPicker.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DialogColorPicker, selector: "dialog-overview-example-dialog", ngImport: i0__namespace, template: "<div mat-dialog-title>\r\n  <span>{{data.title?data.title:'Colors'}}</span>\r\n</div>\r\n<div mat-dialog-content>\r\n  <div class=\"colors-container\" style=\"margin-top: 1rem\">\r\n    <mat-icon\r\n      *ngFor=\"let c of mainColors\"\r\n      [mat-dialog-close]=\"c.value\"\r\n      [style]=\"{\r\n            color: c.value\r\n          }\"\r\n      >circle</mat-icon\r\n    >\r\n    <mat-icon\r\n      *ngFor=\"let c of data.colors\"\r\n      [mat-dialog-close]=\"c.value\"\r\n      matSuffix\r\n      [style]=\"{\r\n                color: c.value\r\n              }\"\r\n      >circle</mat-icon\r\n    >\r\n  </div>\r\n</div>\r\n", styles: [".colors-container{margin:1.5rem auto 0!important;width:76%;display:grid;grid-template-columns:repeat(10,1fr)}.colors-container>*{justify-self:center;cursor:pointer}\n"], components: [{ type: i3__namespace.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1__namespace.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1__namespace.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i19__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1__namespace.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i5__namespace.MatSuffix, selector: "[matSuffix]" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: DialogColorPicker, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-overview-example-dialog',
                        templateUrl: 'dialog-color-picker.html',
                        styleUrls: ['./lito-color-picker.component.css'],
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.MAT_DIALOG_DATA]
                        }] }];
        } });
    var MAIN_COLORS = [
        new LitotableColor('#000000'),
        new LitotableColor('#434343'),
        new LitotableColor('#666666'),
        new LitotableColor('#999999'),
        new LitotableColor('#b7b7b7'),
        new LitotableColor('#cccccc'),
        new LitotableColor('#d9d9d9'),
        new LitotableColor('#efefef'),
        new LitotableColor('#f3f3f3'),
        new LitotableColor('#ffffff'),
        new LitotableColor('#980000'),
        new LitotableColor('#ff0000'),
        new LitotableColor('#ff9900'),
        new LitotableColor('#ffff00'),
        new LitotableColor('#00ff00'),
        new LitotableColor('#00ffff'),
        new LitotableColor('#4a86e8'),
        new LitotableColor('#0000ff'),
        new LitotableColor('#9900ff'),
        new LitotableColor('#ff00ff'),
        new LitotableColor('#e6b8af'),
        new LitotableColor('#f4cccc'),
        new LitotableColor('#fce5cd'),
        new LitotableColor('#fff2cc'),
        new LitotableColor('#d9ead3'),
        new LitotableColor('#d0e0e3'),
        new LitotableColor('#c9daf8'),
        new LitotableColor('#cfe2f3'),
        new LitotableColor('#d9d2e9'),
        new LitotableColor('#ead1dc'),
        new LitotableColor('#dd7e6b'),
        new LitotableColor('#ea9999'),
        new LitotableColor('#f9cb9c'),
        new LitotableColor('#ffe599'),
        new LitotableColor('#b6d7a8'),
        new LitotableColor('#a2c4c9'),
        new LitotableColor('#a4c2f4'),
        new LitotableColor('#9fc5e8'),
        new LitotableColor('#b4a7d6'),
        new LitotableColor('#d5a6bd'),
        new LitotableColor('#cc4125'),
        new LitotableColor('#e06666'),
        new LitotableColor('#f6b26b'),
        new LitotableColor('#ffd966'),
        new LitotableColor('#93c47d'),
        new LitotableColor('#76a5af'),
        new LitotableColor('#6d9eeb'),
        new LitotableColor('#6fa8dc'),
        new LitotableColor('#8e7cc3'),
        new LitotableColor('#c27ba0'),
        new LitotableColor('#a61c00'),
        new LitotableColor('#cc0000'),
        new LitotableColor('#e69138'),
        new LitotableColor('#f1c232'),
        new LitotableColor('#6aa84f'),
        new LitotableColor('#45818e'),
        new LitotableColor('#3c78d8'),
        new LitotableColor('#3d85c6'),
        new LitotableColor('#674ea7'),
        new LitotableColor('#a64d79'),
        new LitotableColor('#85200c'),
        new LitotableColor('#990000'),
        new LitotableColor('#b45f06'),
        new LitotableColor('#bf9000'),
        new LitotableColor('#38761d'),
        new LitotableColor('#134f5c'),
        new LitotableColor('#1155cc'),
        new LitotableColor('#0b5394'),
        new LitotableColor('#351c75'),
        new LitotableColor('#741b47'),
        new LitotableColor('#5b0f00'),
        new LitotableColor('#660000'),
        new LitotableColor('#783f04'),
        new LitotableColor('#7f6000'),
        new LitotableColor('#274e13'),
        new LitotableColor('#0c343d'),
        new LitotableColor('#1c4587'),
        new LitotableColor('#073763'),
        new LitotableColor('#20124d'),
        new LitotableColor('#4c1130'),
    ];

    var ConstrainCreationFormData = /** @class */ (function () {
        function ConstrainCreationFormData() {
            this.columns = [];
        }
        return ConstrainCreationFormData;
    }());
    var ConstrainCreatorComponent = /** @class */ (function () {
        function ConstrainCreatorComponent(dialog) {
            this.dialog = dialog;
            this.columns = [];
            this.result = new i0.EventEmitter();
        }
        ConstrainCreatorComponent.prototype.ngOnInit = function () { };
        ConstrainCreatorComponent.prototype.openDialog = function () {
            var _this = this;
            var dialogRef = this.dialog.open(ConstrainCreationForm, {
                data: { columns: this.columns },
                maxHeight: '80vh',
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result)
                    _this.result.emit(result);
            });
        };
        return ConstrainCreatorComponent;
    }());
    ConstrainCreatorComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ConstrainCreatorComponent, deps: [{ token: i1__namespace.MatDialog }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ConstrainCreatorComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ConstrainCreatorComponent, selector: "litotable-constrain-creator", inputs: { columns: "columns" }, outputs: { result: "result-constrain" }, ngImport: i0__namespace, template: "<div (click)=\"openDialog()\">\n  <ng-content></ng-content>\n</div>\n", styles: [".constrain-mat-content-dual{display:flex;width:100%;justify-content:space-between;margin-bottom:1rem}.number-constrain-selector{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-bottom:1rem}.number-constrain-selector>*{flex-grow:1}.flex-center{display:flex;justify-content:center;align-items:center}.mat-dialog-content{max-height:initial}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ConstrainCreatorComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'litotable-constrain-creator',
                        templateUrl: './constrain-creator.component.html',
                        styleUrls: ['./constrain-creator.component.css'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.MatDialog }]; }, propDecorators: { columns: [{
                    type: i0.Input,
                    args: ['columns']
                }], result: [{
                    type: i0.Output,
                    args: ['result-constrain']
                }] } });
    var ConstrainCreationForm = /** @class */ (function () {
        function ConstrainCreationForm(dialogRef, data, _formBuilder) {
            this.dialogRef = dialogRef;
            this.data = data;
            this._formBuilder = _formBuilder;
            this.numberConstrainType = exports.MesurableConstrainType;
            this.stringConstrainType = exports.StringConstrainType;
            this.finalString = '';
            this.valueType = '';
            this.dateRange = new i2$1.FormGroup({
                start: new i2$1.FormControl(),
                end: new i2$1.FormControl(),
            });
        }
        ConstrainCreationForm.prototype.ngOnInit = function () {
            this.fieldFormGroup = this._formBuilder.group({
                field: ['', i2$1.Validators.required],
            });
            this.stringFormGroup = this._formBuilder.group({
                startWith: [''],
                startWithToogle: [''],
                includes: [''],
                includesToogle: [''],
                endsWith: [''],
                endsWithToogle: [''],
            });
            this.resetValues();
            this.getFinalText();
        };
        ConstrainCreationForm.prototype.onNoClick = function () {
            this.dialogRef.close();
        };
        ConstrainCreationForm.prototype.onFieldSelectorChange = function (selected) {
            this.resetValues();
            if (selected) {
                this.fieldConstrain.propertyKey = selected.propertyKey;
                this.fieldConstrain.constrainName = selected.name;
                this.fieldConstrain.type = selected.type;
                switch (selected.type) {
                    case exports.ColumnType.DATE:
                        this.fieldConstrain.constrain = new DateConstrain(this.numberConstrainType.MORETHAN, [new Date(), new Date()], {
                            color: '#eee',
                            'background-color': '#888',
                        });
                        break;
                    case exports.ColumnType.STRING:
                    case exports.ColumnType.PHONE:
                    case exports.ColumnType.CUIT:
                        this.fieldConstrain.constrain = new StringConstrain({
                            color: '#eee',
                            'background-color': '#888',
                        });
                        break;
                }
            }
            this.getFinalText();
        };
        ConstrainCreationForm.prototype.changeConstrainStyle = function (value, field) {
            if (field && field != '') {
                this.fieldConstrain.constrain.style[field] = value;
            }
        };
        ConstrainCreationForm.prototype.changeConstrainState = function (value, field) {
            switch (field) {
                case 'date-type':
                case 'number-type':
                    this.fieldConstrain.constrain.type = parseFloat(value.value);
                    break;
                case 'number-value':
                case 'number-value1':
                    this.fieldConstrain.constrain.values[0] = parseFloat(value.target.value);
                    break;
                case 'number-value2':
                    this.fieldConstrain.constrain.values[1] = parseFloat(value.target.value);
                    break;
                case 'date-value':
                case 'date-value1':
                    this.fieldConstrain.constrain.values[0] = new Date(value.value);
                    break;
                case 'date-value2':
                    this.fieldConstrain.constrain.values[1] = new Date(value.value);
                    break;
            }
            this.getFinalText();
        };
        ConstrainCreationForm.prototype.getFinalText = function () {
            this.finalString = '';
            switch (this.fieldConstrain.type) {
                case exports.ColumnType.INTEGER:
                case exports.ColumnType.FLOAT:
                case exports.ColumnType.FLOAT:
                    this.valueType = 'value';
                    this.finalString = "that is ";
                    break;
                case exports.ColumnType.DATE:
                    this.valueType = 'date';
                    break;
                case exports.ColumnType.STRING:
                case exports.ColumnType.PHONE:
                case exports.ColumnType.CUIT:
                    this.valueType = 'string';
                    this.finalString = "that ";
                    break;
                default:
                    this.valueType = 'value';
                    break;
            }
            switch (this.fieldConstrain.type) {
                case exports.ColumnType.INTEGER:
                case exports.ColumnType.FLOAT:
                case exports.ColumnType.CURRENCY:
                    switch (this.fieldConstrain.constrain.type) {
                        case exports.MesurableConstrainType.EQUALS:
                            this.finalString += "equal to " + this.fieldConstrain.constrain.values[0];
                            break;
                        case exports.MesurableConstrainType.MORETHAN:
                            this.finalString += "more than " + this.fieldConstrain.constrain.values[0];
                            break;
                        case exports.MesurableConstrainType.LESSTHAN:
                            this.finalString += "less than " + this.fieldConstrain.constrain.values[0];
                            break;
                        case exports.MesurableConstrainType.BETWEEN:
                            this.finalString += "between " + this.fieldConstrain.constrain.values[0] + " and " + this.fieldConstrain.constrain.values[1];
                            break;
                        case exports.MesurableConstrainType.NOTBETWEEN:
                            this.finalString += "not between " + this.fieldConstrain.constrain.values[0] + " and " + this.fieldConstrain.constrain.values[1];
                            break;
                    }
                    break;
                case exports.ColumnType.DATE:
                    switch (this.fieldConstrain.constrain.type) {
                        case exports.MesurableConstrainType.EQUALS:
                            this.finalString += "equal to " + this.shortDate(this.fieldConstrain.constrain.values[0]);
                            break;
                        case exports.MesurableConstrainType.MORETHAN:
                            this.finalString += "after " + this.shortDate(this.fieldConstrain.constrain.values[0]);
                            break;
                        case exports.MesurableConstrainType.LESSTHAN:
                            this.finalString += "before " + this.shortDate(this.fieldConstrain.constrain.values[0]);
                            break;
                        case exports.MesurableConstrainType.BETWEEN:
                            this.finalString += "between " + this.shortDate(this.fieldConstrain.constrain.values[0]) + " and " + this.shortDate(this.fieldConstrain.constrain.values[1]);
                            break;
                        case exports.MesurableConstrainType.NOTBETWEEN:
                            this.finalString += "not between " + this.shortDate(this.fieldConstrain.constrain.values[0]) + " and " + this.shortDate(this.fieldConstrain.constrain.values[1]);
                            break;
                    }
                    break;
                case exports.ColumnType.STRING:
                case exports.ColumnType.CUIT:
                case exports.ColumnType.PHONE:
                    for (var i = 0; i < this.fieldConstrain.constrain.constrainArray.length; i++) {
                        var strConstr = this.fieldConstrain.constrain.constrainArray[i];
                        switch (strConstr.type) {
                            case exports.StringConstrainType.STARTSWITH:
                                this.finalString += "starts width " + strConstr.value;
                                break;
                            case exports.StringConstrainType.CONTAINS:
                                this.finalString += "contains " + strConstr.value;
                                break;
                            case exports.StringConstrainType.ENDWITH:
                                this.finalString += "ends width " + strConstr.value;
                                break;
                        }
                        if (this.fieldConstrain.constrain.constrainArray.length > 1) {
                            if (i < this.fieldConstrain.constrain.constrainArray.length - 2)
                                this.finalString += ', ';
                            if (i == this.fieldConstrain.constrain.constrainArray.length - 2)
                                this.finalString += ' and ';
                        }
                    }
                    break;
            }
        };
        ConstrainCreationForm.prototype.shortDate = function (str) {
            return new Date(str).toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            });
        };
        ConstrainCreationForm.prototype.resetValues = function () {
            this.stringFormGroup.reset();
            this.fieldConstrain = {
                propertyKey: this.data.columns[0].propertyKey,
                constrainName: 'New Constrain',
                type: exports.ColumnType.INTEGER,
                constrain: new NumberConstrain(this.numberConstrainType.MORETHAN, [0, 0], {
                    color: '#eee',
                    'background-color': '#888',
                }),
                metadata: {
                    enable: true,
                    trigger: function (e) { return false; },
                    style: {},
                },
            };
            if (this.strAccordion)
                this.strAccordion.closeAll();
        };
        ConstrainCreationForm.prototype.updateStringConstrain = function () {
            var values = this.stringFormGroup.value;
            this.fieldConstrain.constrain.clearConstrains();
            if (values.startWithToogle && values.startWith)
                this.fieldConstrain.constrain.addConstrain({
                    type: exports.StringConstrainType.STARTSWITH,
                    value: values.startWith,
                });
            if (values.includesToogle && values.includes)
                this.fieldConstrain.constrain.addConstrain({
                    type: exports.StringConstrainType.CONTAINS,
                    value: values.includes,
                });
            if (values.endsWithToogle && values.endsWith)
                this.fieldConstrain.constrain.addConstrain({
                    type: exports.StringConstrainType.ENDWITH,
                    value: values.endsWith,
                });
            this.getFinalText();
        };
        ConstrainCreationForm.prototype.closeDialog = function () {
            this.dialogRef.close(this.fieldConstrain);
            console.log(this.fieldConstrain.constrain);
        };
        return ConstrainCreationForm;
    }());
    ConstrainCreationForm.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ConstrainCreationForm, deps: [{ token: i1__namespace.MatDialogRef }, { token: i1.MAT_DIALOG_DATA }, { token: i2__namespace$1.FormBuilder }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ConstrainCreationForm.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ConstrainCreationForm, selector: "constrain-creation-form-dialog", viewQueries: [{ propertyName: "strAccordion", first: true, predicate: i8.MatAccordion, descendants: true }], ngImport: i0__namespace, template: "<div mat-dialog-content>\r\n  <mat-stepper [linear]=\"true\" #stepper orientation=\"vertical\">\r\n    <!-- Field step -->\r\n    <mat-step [stepControl]=\"fieldFormGroup\">\r\n      <div style=\"margin-top: 1rem\"></div>\r\n      <ng-template matStepLabel>Select a field</ng-template>\r\n      <ng-container *ngTemplateOutlet=\"constrainNameSelector\"></ng-container>\r\n      <div>\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </mat-step>\r\n    <!-- Style step -->\r\n    <mat-step>\r\n      <div style=\"margin-top: 1rem\"></div>\r\n      <ng-template matStepLabel>Aply style</ng-template>\r\n      <ng-container *ngTemplateOutlet=\"constrainCreationStyle\"></ng-container>\r\n      <div>\r\n        <button mat-button matStepperPrevious>Back</button>\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </mat-step>\r\n    <!-- Constrain step -->\r\n    <mat-step>\r\n      <div style=\"margin-top: 1rem\"></div>\r\n      <ng-template matStepLabel>Set constrain</ng-template>\r\n      <ng-container [ngSwitch]=\"fieldConstrain.type\">\r\n        <!-- Numericos -->\r\n        <ng-container\r\n          *ngSwitchCase=\"1\"\r\n          [ngTemplateOutlet]=\"numberConstrainSelector\"\r\n        ></ng-container>\r\n        <ng-container\r\n          *ngSwitchCase=\"2\"\r\n          [ngTemplateOutlet]=\"numberConstrainSelector\"\r\n        ></ng-container>\r\n        <ng-container\r\n          *ngSwitchCase=\"4\"\r\n          [ngTemplateOutlet]=\"numberConstrainSelector\"\r\n        ></ng-container>\r\n\r\n        <!-- Date -->\r\n        <ng-container\r\n          *ngSwitchCase=\"3\"\r\n          [ngTemplateOutlet]=\"dateConstrainSelector\"\r\n        ></ng-container>\r\n        <!-- String -->\r\n        <ng-container\r\n          *ngSwitchCase=\"0\"\r\n          [ngTemplateOutlet]=\"stringConstrainSelector\"\r\n        ></ng-container>\r\n        <ng-container\r\n          *ngSwitchCase=\"5\"\r\n          [ngTemplateOutlet]=\"stringConstrainSelector\"\r\n        ></ng-container>\r\n        <ng-container\r\n          *ngSwitchCase=\"6\"\r\n          [ngTemplateOutlet]=\"stringConstrainSelector\"\r\n        ></ng-container>\r\n      </ng-container>\r\n\r\n      <div>\r\n        <button mat-button matStepperPrevious>Back</button>\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </mat-step>\r\n    <!-- Final step -->\r\n    <mat-step>\r\n      <ng-template matStepLabel>Done</ng-template>\r\n      <div style=\"width: 350px\">\r\n        <p\r\n          class=\"mat-elevation-z4\"\r\n          [style]=\"{\r\n            color: fieldConstrain.constrain.style['color'],\r\n            'background-color':\r\n              fieldConstrain.constrain.style['background-color'],\r\n            padding: '1rem',\r\n            'border-radius': '4px'\r\n          }\"\r\n        >\r\n          Every {{ valueType }} from column\r\n          <strong>{{ fieldConstrain.constrainName }}</strong>\r\n          {{ finalString }}\r\n        </p>\r\n      </div>\r\n      <div>\r\n        <button mat-button matStepperPrevious>Back</button>\r\n        <button mat-button (click)=\"stepper.reset(); resetValues()\">\r\n          Reset\r\n        </button>\r\n        <button mat-button (click)=\"closeDialog()\">Create</button>\r\n      </div>\r\n    </mat-step>\r\n  </mat-stepper>\r\n</div>\r\n\r\n<ng-template #constrainNameSelector>\r\n  <form [formGroup]=\"fieldFormGroup\">\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>Field</mat-label>\r\n      <mat-select\r\n        formControlName=\"field\"\r\n        required\r\n        (ngModelChange)=\"onFieldSelectorChange($event)\"\r\n      >\r\n        <mat-option>None</mat-option>\r\n        <mat-option *ngFor=\"let column of data.columns\" [value]=\"column\">{{\r\n          column.name\r\n        }}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-template #constrainCreationStyle>\r\n  <mat-expansion-panel\r\n    hideToggle\r\n    [style]=\"{\r\n      'background-color': fieldConstrain.constrain.style['background-color'],\r\n      'margin-bottom': '1rem'\r\n    }\"\r\n  >\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title\r\n        [style]=\"{\r\n          color: fieldConstrain.constrain.style['color'],\r\n          'justify-content': 'center'\r\n        }\"\r\n        >{{ fieldConstrain.constrainName }}</mat-panel-title\r\n      >\r\n    </mat-expansion-panel-header>\r\n    <div class=\"flex-center\">\r\n      <app-lito-color-picker\r\n        (result)=\"changeConstrainStyle($event, 'background-color')\"\r\n        content=\"Background\"\r\n      ></app-lito-color-picker>\r\n      <app-lito-color-picker\r\n        style=\"margin-left: 1rem\"\r\n        (result)=\"changeConstrainStyle($event, 'color')\"\r\n        content=\"Foreground\"\r\n      ></app-lito-color-picker>\r\n    </div>\r\n  </mat-expansion-panel>\r\n</ng-template>\r\n\r\n<ng-template #numberConstrainSelector>\r\n  <mat-button-toggle-group\r\n    class=\"number-constrain-selector\"\r\n    name=\"constrainSelect\"\r\n    aria-label=\"Constrain select\"\r\n    value=\"{{ fieldConstrain.constrain.type }}\"\r\n    (change)=\"changeConstrainState($event, 'number-type')\"\r\n  >\r\n    <mat-button-toggle value=\"1\" matTooltip=\"EQUALS\">\r\n      <mat-icon>drag_handle</mat-icon>\r\n    </mat-button-toggle>\r\n    <mat-button-toggle value=\"2\" matTooltip=\"MORE THAN\">\r\n      <mat-icon style=\"transform: rotate(90deg)\">expand_less</mat-icon>\r\n    </mat-button-toggle>\r\n    <mat-button-toggle value=\"3\" matTooltip=\"LESS THAN\">\r\n      <mat-icon style=\"transform: rotate(90deg)\">expand_more</mat-icon>\r\n    </mat-button-toggle>\r\n    <mat-button-toggle value=\"4\" matTooltip=\"BETWEEN\">\r\n      <mat-icon style=\"transform: rotate(90deg)\">unfold_less</mat-icon>\r\n    </mat-button-toggle>\r\n    <mat-button-toggle value=\"5\" matTooltip=\"NOT BETWEEN\">\r\n      <mat-icon style=\"transform: rotate(90deg)\">unfold_more</mat-icon>\r\n    </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n  <div\r\n    *ngIf=\"\r\n      fieldConstrain.constrain.type != numberConstrainType.BETWEEN &&\r\n      fieldConstrain.constrain.type != numberConstrainType.NOTBETWEEN\r\n    \"\r\n    style=\"display: flex; justify-content: space-between\"\r\n  >\r\n    <mat-form-field style=\"width: 100%\" appearance=\"fill\">\r\n      <mat-label\r\n        (click)=\"$event.stopPropagation()\"\r\n        [ngSwitch]=\"fieldConstrain.constrain.type\"\r\n      >\r\n        <span *ngSwitchCase=\"numberConstrainType.EQUALS\">EQUALS</span>\r\n        <span *ngSwitchCase=\"numberConstrainType.LESSTHAN\">LESS THAN</span>\r\n        <span *ngSwitchCase=\"numberConstrainType.MORETHAN\">MORE THAN</span>\r\n      </mat-label>\r\n      <input\r\n        type=\"number\"\r\n        step=\"0.1\"\r\n        (change)=\"\r\n          $event.stopPropagation(); changeConstrainState($event, 'number-value')\r\n        \"\r\n        (keyup)=\"\r\n          $event.stopPropagation(); changeConstrainState($event, 'number-value')\r\n        \"\r\n        matInput\r\n        placeholder=\"\"\r\n        value=\"{{ fieldConstrain.constrain.values[0] }}\"\r\n      />\r\n    </mat-form-field>\r\n  </div>\r\n  <!-- BETWEEN -->\r\n  <div\r\n    *ngIf=\"\r\n      fieldConstrain.constrain.type == numberConstrainType.BETWEEN ||\r\n      fieldConstrain.constrain.type == numberConstrainType.NOTBETWEEN\r\n    \"\r\n    style=\"max-width: fit-content; display: flow-root\"\r\n  >\r\n    <mat-form-field style=\"max-width: 45%; float: left\" appearance=\"fill\">\r\n      <mat-label (click)=\"$event.stopPropagation()\">{{\r\n        fieldConstrain.constrain.type == numberConstrainType.BETWEEN\r\n          ? \"MORE THAN\"\r\n          : \"LESS THAN\"\r\n      }}</mat-label>\r\n      <input\r\n        type=\"number\"\r\n        step=\"100\"\r\n        (change)=\"changeConstrainState($event, 'number-value1')\"\r\n        (keyup)=\"changeConstrainState($event, 'number-value1')\"\r\n        matInput\r\n        placeholder=\"\"\r\n        [max]=\"fieldConstrain.constrain.values[1]\"\r\n        value=\"{{ fieldConstrain.constrain.values[0] }}\"\r\n      />\r\n    </mat-form-field>\r\n    <mat-form-field\r\n      style=\"max-width: 45%; float: right\"\r\n      appearance=\"fill\"\r\n      (click)=\"$event.stopPropagation()\"\r\n      (keypress)=\"$event.stopPropagation()\"\r\n      (keydown)=\"$event.stopPropagation()\"\r\n    >\r\n      <mat-label\r\n        (click)=\"$event.stopPropagation()\"\r\n        (keypress)=\"$event.stopPropagation()\"\r\n      >\r\n        {{\r\n          fieldConstrain.constrain.type == numberConstrainType.BETWEEN\r\n            ? \"LESS THAN\"\r\n            : \"MORE THAN\"\r\n        }}\r\n      </mat-label>\r\n      <input\r\n        type=\"number\"\r\n        step=\"100\"\r\n        (change)=\"changeConstrainState($event, 'number-value2')\"\r\n        (click)=\"$event.stopPropagation()\"\r\n        (keydown)=\"$event.stopPropagation()\"\r\n        (keypress)=\"$event.stopPropagation()\"\r\n        (keyup)=\"changeConstrainState($event, 'number-value2')\"\r\n        matInput\r\n        placeholder=\"\"\r\n        [min]=\"fieldConstrain.constrain.values[0]\"\r\n        value=\"{{ fieldConstrain.constrain.values[1] }}\"\r\n      />\r\n    </mat-form-field>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #dateConstrainSelector>\r\n  <mat-button-toggle-group\r\n    class=\"number-constrain-selector\"\r\n    name=\"constrainSelect\"\r\n    aria-label=\"Constrain select\"\r\n    value=\"{{ fieldConstrain.constrain.type }}\"\r\n    (change)=\"changeConstrainState($event, 'date-type')\"\r\n  >\r\n    <!-- <mat-button-toggle value=\"1\" matTooltip=\"EQUALS\">\r\n      <mat-icon>drag_handle</mat-icon>\r\n    </mat-button-toggle> -->\r\n    <mat-button-toggle value=\"2\" matTooltip=\"AFTER\">\r\n      <mat-icon style=\"transform: rotate(90deg)\">expand_less</mat-icon>\r\n    </mat-button-toggle>\r\n    <mat-button-toggle value=\"3\" matTooltip=\"BEFORE\">\r\n      <mat-icon style=\"transform: rotate(90deg)\">expand_more</mat-icon>\r\n    </mat-button-toggle>\r\n    <mat-button-toggle value=\"4\" matTooltip=\"BETWEEN\">\r\n      <mat-icon style=\"transform: rotate(90deg)\">unfold_less</mat-icon>\r\n    </mat-button-toggle>\r\n    <mat-button-toggle value=\"5\" matTooltip=\"NOT BETWEEN\">\r\n      <mat-icon style=\"transform: rotate(90deg)\">unfold_more</mat-icon>\r\n    </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n  <div style=\"display: flex; justify-content: space-between\">\r\n    <!-- EQUALS, LESSTHAN, MORETHAN -->\r\n    <mat-form-field\r\n      style=\"width: 100%\"\r\n      appearance=\"fill\"\r\n      *ngIf=\"\r\n        fieldConstrain.constrain.type == numberConstrainType.EQUALS ||\r\n        fieldConstrain.constrain.type == numberConstrainType.LESSTHAN ||\r\n        fieldConstrain.constrain.type == numberConstrainType.MORETHAN\r\n      \"\r\n    >\r\n      <mat-label [ngSwitch]=\"fieldConstrain.constrain.type\">\r\n        <span *ngSwitchCase=\"numberConstrainType.EQUALS\">EQUALS</span>\r\n        <span *ngSwitchCase=\"numberConstrainType.LESSTHAN\">Choose a date</span>\r\n        <span *ngSwitchCase=\"numberConstrainType.MORETHAN\">Choose a date</span>\r\n        <span *ngSwitchCase=\"numberConstrainType.BETWEEN\"\r\n          >Choose a date range</span\r\n        >\r\n        <span *ngSwitchCase=\"numberConstrainType.NOTBETWEEN\"\r\n          >Choose a date range</span\r\n        >\r\n      </mat-label>\r\n\r\n      <input\r\n        matInput\r\n        [matDatepicker]=\"picker\"\r\n        (dateChange)=\"changeConstrainState($event, 'date-value')\"\r\n      />\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n\r\n    <!-- BETWEEN, NOTBETWEEN -->\r\n    <mat-form-field\r\n      style=\"width: 100%\"\r\n      appearance=\"fill\"\r\n      *ngIf=\"\r\n        fieldConstrain.constrain.type == numberConstrainType.BETWEEN ||\r\n        fieldConstrain.constrain.type == numberConstrainType.NOTBETWEEN\r\n      \"\r\n    >\r\n      <mat-date-range-input [formGroup]=\"dateRange\" [rangePicker]=\"rangePicker\">\r\n        <input\r\n          matStartDate\r\n          formControlName=\"start\"\r\n          placeholder=\"{{ numberConstrainType.BETWEEN ? 'After' : 'Bafore' }}\"\r\n          (dateChange)=\"changeConstrainState($event, 'date-value1')\"\r\n        />\r\n        <input\r\n          matEndDate\r\n          formControlName=\"end\"\r\n          placeholder=\"{{ numberConstrainType.BETWEEN ? 'Before' : 'After' }}\"\r\n          (dateChange)=\"changeConstrainState($event, 'date-value2')\"\r\n        />\r\n      </mat-date-range-input>\r\n      <mat-datepicker-toggle\r\n        matSuffix\r\n        [for]=\"rangePicker\"\r\n      ></mat-datepicker-toggle>\r\n      <mat-date-range-picker #rangePicker></mat-date-range-picker>\r\n    </mat-form-field>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #stringConstrainSelector>\r\n  <mat-accordion>\r\n    <mat-expansion-panel hideToggle>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          <mat-icon *ngIf=\"swEnable.checked\" color=\"accent\">\r\n            radio_button_checked\r\n          </mat-icon>\r\n          <mat-icon *ngIf=\"!swEnable.checked\" style=\"color: gray\"\r\n            >radio_button_checked</mat-icon\r\n          >\r\n          <span class=\"flex-center\">&nbsp;Starts with</span>\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          <span class=\"flex-center\">{{ swInput.value }}</span>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <form [formGroup]=\"stringFormGroup\" (change)=\"updateStringConstrain()\">\r\n        <mat-form-field appearance=\"fill\">\r\n          <mat-label>Value</mat-label>\r\n          <input\r\n            matInput\r\n            autocomplete=\"off\"\r\n            #swInput\r\n            formControlName=\"startWith\"\r\n          />\r\n        </mat-form-field>\r\n        <mat-slide-toggle\r\n          (change)=\"updateStringConstrain()\"\r\n          #swEnable\r\n          style=\"margin-left: 1rem\"\r\n          formControlName=\"startWithToogle\"\r\n        ></mat-slide-toggle>\r\n      </form>\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel hideToggle>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          <mat-icon *ngIf=\"siEnable.checked\" color=\"accent\"\r\n            >radio_button_checked</mat-icon\r\n          >\r\n          <mat-icon *ngIf=\"!siEnable.checked\" style=\"color: gray\"\r\n            >radio_button_checked</mat-icon\r\n          >\r\n          <span class=\"flex-center\">&nbsp;Includes</span>\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          <span class=\"flex-center\">{{ siInput.value }}</span>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <form [formGroup]=\"stringFormGroup\" (change)=\"updateStringConstrain()\">\r\n        <mat-form-field appearance=\"fill\">\r\n          <mat-label>Value</mat-label>\r\n          <input\r\n            matInput\r\n            autocomplete=\"off\"\r\n            #siInput\r\n            formControlName=\"includes\"\r\n          />\r\n        </mat-form-field>\r\n        <mat-slide-toggle\r\n          (change)=\"updateStringConstrain()\"\r\n          #siEnable\r\n          style=\"margin-left: 1rem\"\r\n          formControlName=\"includesToogle\"\r\n        ></mat-slide-toggle>\r\n      </form>\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel hideToggle style=\"margin-bottom: 1rem\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          <mat-icon *ngIf=\"ewEnable.checked\" color=\"accent\"\r\n            >radio_button_checked</mat-icon\r\n          >\r\n          <mat-icon *ngIf=\"!ewEnable.checked\" style=\"color: gray\"\r\n            >radio_button_checked</mat-icon\r\n          >\r\n          <span class=\"flex-center\">&nbsp;Ends with</span>\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          <span class=\"flex-center\">{{ ewInput.value }}</span>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <form [formGroup]=\"stringFormGroup\" (change)=\"updateStringConstrain()\">\r\n        <mat-form-field appearance=\"fill\">\r\n          <mat-label>Value</mat-label>\r\n          <input\r\n            matInput\r\n            autocomplete=\"off\"\r\n            #ewInput\r\n            formControlName=\"endsWith\"\r\n          />\r\n        </mat-form-field>\r\n        <mat-slide-toggle\r\n          (change)=\"updateStringConstrain()\"\r\n          #ewEnable\r\n          style=\"margin-left: 1rem\"\r\n          formControlName=\"endsWithToogle\"\r\n        ></mat-slide-toggle>\r\n      </form>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</ng-template>\r\n", styles: [".constrain-mat-content-dual{display:flex;width:100%;justify-content:space-between;margin-bottom:1rem}.number-constrain-selector{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-bottom:1rem}.number-constrain-selector>*{flex-grow:1}.flex-center{display:flex;justify-content:center;align-items:center}.mat-dialog-content{max-height:initial}\n"], components: [{ type: i3__namespace$1.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["selectedIndex", "labelPosition", "disableRipple", "color"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { type: i3__namespace$1.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { type: i2__namespace.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i5__namespace.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i6__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i7__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i8__namespace.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { type: i8__namespace.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { type: LitoColorPickerComponent, selector: "app-lito-color-picker", inputs: ["colors", "content"], outputs: ["result", "newColorArray"] }, { type: i10__namespace.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: i3__namespace.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i12__namespace.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["tabIndex", "disabled", "for", "aria-label", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i12__namespace.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { type: i12__namespace.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["separator", "comparisonStart", "comparisonEnd", "rangePicker", "required", "dateFilter", "min", "max", "disabled"], exportAs: ["matDateRangeInput"] }, { type: i12__namespace.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { type: i13__namespace.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "required", "checked", "aria-describedby"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }], directives: [{ type: i1__namespace.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i3__namespace$1.MatStepLabel, selector: "[matStepLabel]" }, { type: i19__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i3__namespace$1.MatStepperNext, selector: "button[matStepperNext]", inputs: ["type"] }, { type: i3__namespace$1.MatStepperPrevious, selector: "button[matStepperPrevious]", inputs: ["type"] }, { type: i19__namespace.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i19__namespace.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i2__namespace$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2__namespace$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2__namespace$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i5__namespace.MatLabel, selector: "mat-label" }, { type: i2__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2__namespace$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i19__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i8__namespace.MatExpansionPanelTitle, selector: "mat-panel-title" }, { type: i10__namespace.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i15__namespace.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i19__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i16__namespace.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i12__namespace.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i5__namespace.MatSuffix, selector: "[matSuffix]" }, { type: i12__namespace.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { type: i2__namespace$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i12__namespace.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { type: i8__namespace.MatAccordion, selector: "mat-accordion", inputs: ["multi", "displayMode", "togglePosition", "hideToggle"], exportAs: ["matAccordion"] }, { type: i8__namespace.MatExpansionPanelDescription, selector: "mat-panel-description" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ConstrainCreationForm, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'constrain-creation-form-dialog',
                        templateUrl: 'constrain-form.component.html',
                        styleUrls: ['./constrain-creator.component.css'],
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.MatDialogRef }, { type: ConstrainCreationFormData, decorators: [{
                            type: i0.Inject,
                            args: [i1.MAT_DIALOG_DATA]
                        }] }, { type: i2__namespace$1.FormBuilder }];
        }, propDecorators: { strAccordion: [{
                    type: i0.ViewChild,
                    args: [i8.MatAccordion]
                }] } });

    var CuitPipe = /** @class */ (function () {
        function CuitPipe() {
        }
        CuitPipe.prototype.transform = function (value, separador) {
            if (separador === void 0) { separador = '.'; }
            var result = value.toString().split('');
            result = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], __read(result.slice(0, 2))), [
                separador
            ]), __read(result.slice(2, 10))), [
                separador
            ]), __read(result.slice(10)));
            return result.join('');
        };
        return CuitPipe;
    }());
    CuitPipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CuitPipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    CuitPipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CuitPipe, name: "cuit" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: CuitPipe, decorators: [{
                type: i0.Pipe,
                args: [{ name: 'cuit' }]
            }] });

    var PhonePipe = /** @class */ (function () {
        function PhonePipe() {
        }
        PhonePipe.prototype.transform = function (value, format) {
            // format style: "(###) ####-####"
            if (format) {
                var result = value.toString().split('');
                var _format = Array.from(format);
                for (var i = _format.length - 1; i >= 0; i--) {
                    if (_format[i] == '#') {
                        var temp = result.pop();
                        if (temp) {
                            _format[i] = temp;
                        }
                        else {
                            _format[i] = '0';
                        }
                    }
                }
                result = _format;
                return result.join('');
            }
            return value.toString();
        };
        return PhonePipe;
    }());
    PhonePipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PhonePipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    PhonePipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PhonePipe, name: "phone" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PhonePipe, decorators: [{
                type: i0.Pipe,
                args: [{ name: 'phone' }]
            }] });

    var LitotableComponent = /** @class */ (function () {
        function LitotableComponent(_liveAnnouncer) {
            this._liveAnnouncer = _liveAnnouncer;
            /* Enums */
            this.columnTypes = exports.ColumnType;
            this.operationTypes = exports.TableOperation;
            this.columns = [];
            this.numberConstrainType = exports.MesurableConstrainType;
            this.displayedColumns = new DisplayedColumns();
            this.rowConstrains = [];
            this.dataSource = new i6$1.MatTableDataSource();
            this.fetching = false;
            this.selectedRows = new Set();
            this.constrainedRows = new Set();
            this.showSelectedOnly = false;
            this.creationFormOpen = false;
            this._confirmation = 'multiple';
            this.fieldConstrians = [];
            this.multipleActionOutput = new i0.EventEmitter();
            this.singleActionOutput = new i0.EventEmitter();
        }
        LitotableComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.setColumns();
            if (this.inputSource != undefined) {
                this.fetching = true;
                this.inputSource.subscribe(function (datos) {
                    var _a;
                    _this.fetching = false;
                    _this.dataSource = new i6$1.MatTableDataSource(datos);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                    _this.setRowsConstrains(datos);
                    (_a = _this.tableActionsConfig) === null || _a === void 0 ? void 0 : _a.updatePermormableState(_this.selectedRows);
                });
            }
            else {
                var c = [];
                this.dataSource = new i6$1.MatTableDataSource(c);
            }
            this.dataSource.paginator = this.paginator;
        };
        LitotableComponent.prototype.parseDate = function (input) {
            return input.toJSON();
        };
        LitotableComponent.prototype.ngAfterViewInit = function () {
            this.dataSource.paginator = this.paginator;
        };
        LitotableComponent.prototype.announceSortChange = function (sortState) {
            if (sortState.direction) {
                this._liveAnnouncer.announce("Sorted " + sortState.direction + "ending");
            }
            else {
                this._liveAnnouncer.announce('Sorting cleared');
            }
        };
        LitotableComponent.prototype.updateFieldsToRowsConstrains = function () {
            if (this.fieldConstrians) {
                this.rowConstrains = this.fieldConstrians.map(function (x) {
                    return new RowConstrain(x.propertyKey, x.constrain);
                });
            }
        };
        LitotableComponent.prototype.setRowsConstrains = function (source) {
            var _this = this;
            this.updateFieldsToRowsConstrains();
            source.forEach(function (element) {
                _this.rowConstrains.forEach(function (rc) {
                    var value = element[rc.name];
                    if (rc._constrain.trigger(value)) {
                        if (rc._constrain.enable) {
                            if (!element['rowStyle']) {
                                Object.defineProperty(element, 'rowStyle', {
                                    configurable: true,
                                    enumerable: false,
                                    value: { style: rc._constrain.style },
                                    writable: true,
                                });
                            }
                            else if (element['rowStyle']) {
                                element['rowStyle'].style = Object.assign(Object.assign({}, element['rowStyle'].style), rc._constrain.style);
                            }
                            _this.constrainedRows.add(element);
                        }
                    }
                });
            });
        };
        LitotableComponent.prototype.updateRowConstrains = function () {
            var _this = this;
            this.constrainedRows = new Set();
            var source = this.dataSource.data;
            source.forEach(function (element) {
                _this.rowConstrains.forEach(function (rc) {
                    var value = element[rc.name];
                    if (rc._constrain.trigger(value)) {
                        if (rc._constrain.enable) {
                            if (!element['rowStyle']) {
                                Object.defineProperty(element, 'rowStyle', {
                                    configurable: true,
                                    enumerable: false,
                                    value: { style: rc._constrain.style },
                                    writable: true,
                                });
                            }
                            else if (element['rowStyle']) {
                                element['rowStyle'].style = Object.assign(Object.assign({}, element['rowStyle'].style), rc._constrain.style);
                            }
                            _this.constrainedRows.add(element);
                        }
                    }
                });
            });
        };
        LitotableComponent.prototype.hasConstrain = function (propertyKey, value) {
            var result = false;
            if (this.rowConstrains.length != 0) {
            }
            return result;
        };
        LitotableComponent.prototype.setColumns = function () {
            var _a;
            var columnsMetadata = Reflect.getMetadata('columnsMetadata', this.dataType);
            var columnGroups = new ColumnGroups(0);
            if (columnsMetadata != undefined) {
                this.columns = columnsMetadata.map(function (c, i) {
                    var _a;
                    var column = new Column(c.propertyKey, c.propertyKey, exports.ColumnType.STRING, c.metadata.order);
                    column.visible =
                        c.metadata.visible == undefined ? true : c.metadata.visible;
                    column.name = c.metadata.columnName || c.propertyKey;
                    column.type = c.metadata.type || exports.ColumnType.STRING;
                    column.format = c.metadata.format || undefined;
                    column.contentAlign = c.metadata.contentAlign || undefined;
                    var str = (_a = c.metadata.columnGroup) === null || _a === void 0 ? void 0 : _a.name;
                    if (str) {
                        if (columnGroups.groupColumns.filter(function (x) { return x.name == str; }).length == 0) {
                            var newColGroup = new GroupColumn(str);
                            newColGroup.addColumn(column);
                            columnGroups.groupColumns.push(newColGroup);
                        }
                        else {
                            columnGroups.groupColumns
                                .filter(function (x) { return x.name == str; })[0]
                                .addColumn(column);
                        }
                    }
                    return column;
                });
                this.columns.sort(function (a, b) {
                    return a.order - b.order;
                });
            }
            this.displayedColumns = new DisplayedColumns(this.columns, this.selection, ((_a = this.tableConfigurations) === null || _a === void 0 ? void 0 : _a.actionsColumn) != undefined);
            this.displayedColumns.columnGroups = columnGroups;
            this.displayedColumns.updateGroups();
        };
        LitotableComponent.prototype.isAllSelected = function () {
            var numSelected = this.selectedRows.size;
            var numRows = this.dataSource.data.length;
            return numSelected == numRows && numRows != 0;
        };
        LitotableComponent.prototype.masterToggle = function () {
            var _this = this;
            this.isAllSelected()
                ? this.selectedRows.clear()
                : this.dataSource.data.forEach(function (row) { return _this.selectedRows.add(row); });
        };
        LitotableComponent.prototype.selectionToogle = function (state, row) {
            var _a;
            if (state) {
                this.selectedRows.add(row);
            }
            else {
                if (this.selectedRows.has(row))
                    this.selectedRows.delete(row);
            }
            if ((_a = this.tableActionsConfig) === null || _a === void 0 ? void 0 : _a.actions) {
                this.tableActionsConfig.updatePermormableState(this.selectedRows);
            }
        };
        LitotableComponent.prototype.changeConstrainState = function (value, data, field, isStyle) {
            if (isStyle === void 0) { isStyle = true; }
            if (isStyle && field && field != '') {
                data.style[field] = value;
            }
            if (!isStyle) {
                switch (field) {
                    case 'number-type':
                        data.type = parseInt(value.value);
                        break;
                    case 'number-value':
                    case 'number-value1':
                        data.values[0] = parseInt(value.target.value);
                        break;
                    case 'number-value2':
                        data.values[1] = parseInt(value.target.value);
                        break;
                }
            }
            this.updateRowConstrains();
        };
        LitotableComponent.prototype.addConstrain = function ($event) {
            this.fieldConstrians.push($event);
            this.updateFieldsToRowsConstrains();
            this.updateRowConstrains();
        };
        LitotableComponent.prototype.updateVisibility = function () {
            this.updateFieldsToRowsConstrains();
            this.updateRowConstrains();
        };
        LitotableComponent.prototype.removeConstrain = function (constrain) {
            this.fieldConstrians = this.fieldConstrians.filter(function (x) { return x != constrain; });
            this.updateVisibility();
        };
        LitotableComponent.prototype.tableDrop = function (event) {
            dragDrop.moveItemInArray(this.displayedColumns.columnNames, event.previousIndex + 1, event.currentIndex + 1);
        };
        LitotableComponent.prototype.onRowActionClick = function (row, action) {
            if (action.actionResult.willUpdateRow ||
                action.actionResult.willDeleteRow) {
                row.processing = true;
                this.singleActionOutput.emit({
                    operation: action,
                    data: row,
                });
            }
        };
        LitotableComponent.prototype.updateRow = function (row, newRow) {
            var indx = this.dataSource.data.indexOf(row);
            if (newRow) {
                this.dataSource.data[indx] = newRow;
                this.dataSource.data[indx].processing = false;
                this.selectedRows.delete(this.dataSource.data[indx]);
            }
            else {
                this.dataSource.data.splice(indx, 1);
                row.processing = false;
            }
            this.selectedRows.delete(row);
            this.dataSource._updateChangeSubscription();
            this.updateVisibility();
        };
        LitotableComponent.prototype.performFooterAction = function () {
            var _a, _b, _c, _d;
            if ((_b = (_a = this.tableConfigurations) === null || _a === void 0 ? void 0 : _a.footerAction) === null || _b === void 0 ? void 0 : _b.actionResult.nonObservableAction) {
                (_d = (_c = this.tableConfigurations) === null || _c === void 0 ? void 0 : _c.footerAction) === null || _d === void 0 ? void 0 : _d.actionResult.nonObservableAction();
            }
        };
        LitotableComponent.prototype.performRowActionConfirmation = function (action, row, confirmation) {
            this._confirmation = 'single';
            this.rowConfirmation = {
                confirmationData: confirmation,
                row: row,
                action: action,
            };
            if (this.drawer) {
                this.drawer.open();
            }
        };
        LitotableComponent.prototype.onGeneralActionClick = function (operation) {
            this.performGeneralAction(operation);
        };
        LitotableComponent.prototype.performGeneralAction = function (operation) {
            this.multipleActionOutput.emit({
                operation: operation,
                data: this.selectedRows,
            });
            if (operation.mustLockRows) {
                this.lockSelectedRows(this.selectedRows);
            }
        };
        LitotableComponent.prototype.unLockRow = function (row) {
            row.processing = false;
        };
        LitotableComponent.prototype.lockSelectedRows = function (rows) {
            rows.forEach(function (row) {
                row.processing = true;
            });
        };
        LitotableComponent.prototype.unLockSelectedRows = function (rows) {
            rows.forEach(function (row) {
                row.processing = false;
            });
        };
        LitotableComponent.prototype.performGeneralActionConfirmation = function (operation) {
            this._confirmation = 'multiple';
            this.generalConfirmation = {
                confirmationData: operation.confirmation,
                action: operation,
            };
            if (this.drawer) {
                this.drawer.open();
            }
        };
        return LitotableComponent;
    }());
    LitotableComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LitotableComponent, deps: [{ token: i1__namespace$1.LiveAnnouncer }], target: i0__namespace.ɵɵFactoryTarget.Component });
    LitotableComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LitotableComponent, selector: "lito-table", inputs: { inputSource: ["source", "inputSource"], dataType: ["type", "dataType"], tableActionsConfig: "tableActionsConfig", selection: "selection", tableConfigurations: ["configurations", "tableConfigurations"], fieldConstrians: "fieldConstrians" }, outputs: { multipleActionOutput: "multipleActionOutput", singleActionOutput: "singleActionOutput" }, viewQueries: [{ propertyName: "paginator", first: true, predicate: i9.MatPaginator, descendants: true }, { propertyName: "sort", first: true, predicate: i8$1.MatSort, descendants: true }, { propertyName: "drawer", first: true, predicate: i5$1.MatDrawer, descendants: true }], ngImport: i0__namespace, template: "<!-- Operations -->\n<mat-accordion class=\"table-operations\">\n  <mat-expansion-panel hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title style=\"align-items: center\">\n        Operaciones\n      </mat-panel-title>\n      <div class=\"table-top-container\">\n        <button\n          mat-icon-button\n          [matMenuTriggerFor]=\"export\"\n          aria-label=\"Exportar\"\n          (click)=\"$event.stopPropagation()\"\n        >\n          <mat-icon>download</mat-icon>\n        </button>\n\n        <button\n          mat-icon-button\n          [matMenuTriggerFor]=\"columns\"\n          aria-label=\"Columnas\"\n          (click)=\"$event.stopPropagation()\"\n        >\n          <mat-icon>view_column</mat-icon>\n        </button>\n\n        <button\n          mat-icon-button\n          [matMenuTriggerFor]=\"constrains\"\n          aria-label=\"Constrains\"\n          (click)=\"$event.stopPropagation()\"\n        >\n          <mat-icon>brush</mat-icon>\n        </button>\n      </div>\n    </mat-expansion-panel-header>\n    <div class=\"operation-buttons-container\" *ngIf=\"tableActionsConfig\">\n      <div *ngFor=\"let operation of tableActionsConfig.actions\">\n        <div class=\"table-bottom-container\">\n          <!-- (selectedRows.size == 0 && operation.mustHaveOneSelected) ||\n              (selectedRows.size != 1 && operation.scope == 1) -->\n          <div\n            [matTooltipDisabled]=\"operation.performable.state\"\n            matTooltip=\"{{ operation.performable.tooltip }}\"\n          >\n            <button\n              [disabled]=\"!operation.performable.state\"\n              mat-stroked-button\n              class=\"general-action\"\n              (click)=\"\n                operation.confirmation\n                  ? performGeneralActionConfirmation(operation)\n                  : performGeneralAction(operation)\n              \"\n            >\n              <mat-icon\n                *ngIf=\"operation?.icon\"\n                [ngStyle]=\"{\n                  color:\n                    (!operation.performable.state\n                      ? 'gray'\n                      : operation?.color) || 'currentColor'\n                }\"\n                >{{ operation.icon }}</mat-icon\n              >\n              {{ operation.content }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </mat-expansion-panel>\n</mat-accordion>\n\n<!-- Table -->\n<div class=\"litotable-main-container\">\n  <div class=\"litotable-container mat-elevation-z4\">\n    <div class=\"table-container\">\n      <mat-drawer-container class=\"example-container\" [hasBackdrop]=\"true\">\n        <mat-drawer #drawer mode=\"over\" position=\"end\">\n          <ng-container *ngTemplateOutlet=\"sidenavMenu\"></ng-container>\n        </mat-drawer>\n        <mat-drawer-content>\n          <div *ngIf=\"dataSource\" class=\"table-responsive\">\n            <table\n              mat-table\n              [dataSource]=\"dataSource\"\n              matSort\n              (matSortChange)=\"announceSortChange($event)\"\n            >\n              <!-- Columna de seleccion -->\n              <ng-container matColumnDef=\"selection\">\n                <th mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox\n                    (change)=\"masterToggle()\"\n                    [indeterminate]=\"\n                      this.selectedRows.size != 0 && !isAllSelected()\n                    \"\n                    [checked]=\"isAllSelected()\"\n                  >\n                  </mat-checkbox>\n                </th>\n                <td\n                  mat-cell\n                  *matCellDef=\"let row\"\n                  style=\"background-color: rgba(255, 255, 255, 1)\"\n                >\n                  <mat-checkbox\n                    (click)=\"$event.stopPropagation()\"\n                    (change)=\"selectionToogle($event.checked, row)\"\n                    [checked]=\"selectedRows.has(row)\"\n                    [disabled]=\"row.processing\"\n                  >\n                  </mat-checkbox>\n                </td>\n              </ng-container>\n\n              <!-- Resto de columnas -->\n              <ng-container\n                *ngFor=\"let column of displayedColumns.columns\"\n                matColumnDef=\"{{ column.name }}\"\n              >\n                <!-- Column Header -->\n                <th\n                  mat-header-cell\n                  *matHeaderCellDef\n                  mat-sort-header=\"{{ column.propertyKey }}\"\n                  sortActionDescription=\"Sort by {{ column.propertyKey }}\"\n                  [class.header-borders]=\"tableConfigurations?.headerBorders\"\n                >\n                  {{ column.name }}\n                </th>\n                <!-- Column Data -->\n                <td\n                  mat-cell\n                  *matCellDef=\"let element\"\n                  #litotableTd\n                  [class.cell-borders]=\"tableConfigurations?.headerBorders\"\n                >\n                  <div\n                    #content\n                    style=\"transition: 0.3s all\"\n                    [ngStyle]=\"\n                      litotableTd.parentElement?.style?.color\n                        ? { color: litotableTd.parentElement?.style?.color }\n                        : {}\n                    \"\n                  >\n                    <div *ngIf=\"column.type == columnTypes.STRING\">\n                      {{ element[column.propertyKey] }}\n                    </div>\n                    <div *ngIf=\"column.type == columnTypes.INTEGER\">\n                      {{ element[column.propertyKey] | number: \"1.0-0\" }}\n                    </div>\n                    <div *ngIf=\"column.type == columnTypes.FLOAT\">\n                      {{ element[column.propertyKey] | number: \"1.2-4\" }}\n                    </div>\n                    <div *ngIf=\"column.type == columnTypes.DATE\">\n                      {{\n                        element[column.propertyKey]\n                          | date: (column.format ? column.format : \"short\")\n                      }}\n                    </div>\n                    <div *ngIf=\"column.type == columnTypes.CURRENCY\">\n                      {{ element[column.propertyKey] | currency }}\n                    </div>\n                    <div *ngIf=\"column.type == columnTypes.CUIT\">\n                      {{ element[column.propertyKey] | cuit: \"-\" }}\n                    </div>\n                    <div *ngIf=\"column.type == columnTypes.PHONE\">\n                      {{\n                        element[column.propertyKey]\n                          | phone: (column.format ? column.format : undefined)\n                      }}\n                    </div>\n                  </div>\n                </td>\n              </ng-container>\n\n              <!-- Columna de Acciones -->\n              <ng-container\n                *ngIf=\"tableConfigurations?.actionsColumn\"\n                matColumnDef=\"actions\"\n              >\n                <th\n                  mat-header-cell\n                  *matHeaderCellDef\n                  [class.header-borders]=\"tableConfigurations?.headerBorders\"\n                  class=\"actions-th\"\n                >\n                  Acciones\n                </th>\n                <td\n                  mat-cell\n                  *matCellDef=\"let row\"\n                  [class.cell-borders]=\"tableConfigurations?.headerBorders\"\n                  style=\"padding: 0\"\n                  class=\"actions-td\"\n                >\n                  <div>\n                    <div\n                      *ngFor=\"let action of tableConfigurations?.actionsColumn\"\n                    >\n                      <button\n                        [disabled]=\"row.processing\"\n                        *ngIf=\"action.confirmation\"\n                        mat-icon-button\n                        matTooltip=\"{{ action.tooltip }}\"\n                        (click)=\"\n                          performRowActionConfirmation(\n                            action,\n                            row,\n                            action.confirmation\n                          )\n                        \"\n                      >\n                        <mat-icon\n                          [style]=\"{\n                            color: row.processing ? 'lightgray' : action.color\n                          }\"\n                          >{{ action.icon }}</mat-icon\n                        >\n                      </button>\n                      <button\n                        [disabled]=\"row.processing\"\n                        *ngIf=\"!action.confirmation\"\n                        mat-icon-button\n                        matTooltip=\"{{ action.tooltip }}\"\n                        (click)=\"onRowActionClick(row, action)\"\n                      >\n                        <mat-icon\n                          [style]=\"{\n                            color: row.processing ? 'lightgray' : action.color\n                          }\"\n                          >{{ action.icon }}</mat-icon\n                        >\n                      </button>\n                    </div>\n                  </div>\n                </td>\n              </ng-container>\n\n              <!-- Columnas de agrupacion -->\n              <ng-container matColumnDef=\"empty-group\">\n                <th *matHeaderCellDef class=\"group-header-empty\"></th>\n              </ng-container>\n              <ng-container\n                *ngFor=\"let col of displayedColumns.columnGroups.groupColumns\"\n                matColumnDef=\"{{ col.name }}\"\n              >\n                <th\n                  mat-header-cell\n                  *matHeaderCellDef\n                  [attr.colspan]=\"col.colspan\"\n                >\n                  {{ col.name }}\n                </th>\n              </ng-container>\n              <tr\n                class=\"group-header\"\n                mat-header-row\n                *matHeaderRowDef=\"displayedColumns.columnGroups.displayNames\"\n              ></tr>\n\n              <!-- Encabezados de columnas -->\n              <tr\n                mat-header-row\n                *matHeaderRowDef=\"displayedColumns.columnNames\"\n              ></tr>\n\n              <!-- Formato condicional de filas -->\n              <tr\n                mat-row\n                [class.mat-row-selected]=\"selectedRows.has(row)\"\n                [class.mat-row-selected-borders]=\"\n                  selectedRows.has(row) &&\n                  tableConfigurations?.selectionStyle == 1\n                \"\n                [class.mat-row-selected-shadow]=\"\n                  selectedRows.has(row) &&\n                  tableConfigurations?.selectionStyle == 2\n                \"\n                [class.mat-row-borders]=\"tableConfigurations?.hoverStyle == 1\"\n                [class.mat-row-shadow]=\"tableConfigurations?.hoverStyle == 2\"\n                style=\"transition: 0.3s all\"\n                [ngStyle]=\"constrainedRows.has(row) ? row.rowStyle.style : ''\"\n                *matRowDef=\"let row; columns: displayedColumns.columnNames\"\n                [class.mat-row-processing]=\"row.processing\"\n              ></tr>\n\n              <!-- Mensaje por defecto en caso de no haber datos o se este fetcheando -->\n              <tr class=\"mat-row\" *matNoDataRow>\n                <td class=\"mat-cell\" colspan=\"4\">\n                  {{ fetching ? \"fetching data\" : \"No data found\" }}\n                </td>\n              </tr>\n            </table>\n          </div>\n        </mat-drawer-content>\n      </mat-drawer-container>\n\n      <!-- Footer action button -->\n      <div class=\"table-bottom-container\">\n        <button\n          mat-stroked-button\n          class=\"footercell\"\n          (click)=\"performFooterAction()\"\n        >\n          <mat-icon\n            *ngIf=\"tableConfigurations?.footerAction?.icon\"\n            [ngStyle]=\"{\n              color: tableConfigurations?.footerAction?.color || 'currentColor'\n            }\"\n            >{{ tableConfigurations?.footerAction?.icon }}</mat-icon\n          >\n          {{ tableConfigurations?.footerAction?.content }}\n        </button>\n      </div>\n    </div>\n\n    <!-- Paginator -->\n    <div class=\"table-bottom-container\">\n      <mat-paginator\n        [pageSizeOptions]=\"tableConfigurations?.paginationSizes || [5, 10, 20]\"\n        showFirstLastButtons\n        aria-label=\"Select page\"\n      >\n      </mat-paginator>\n    </div>\n\n    <!-- Progressbar -->\n    <mat-progress-bar\n      [mode]=\"fetching ? 'indeterminate' : 'determinate'\"\n    ></mat-progress-bar>\n  </div>\n</div>\n\n<!-- Export Menu -->\n<mat-menu #export=\"matMenu\" xPosition=\"before\">\n  <div\n    mat-menu-item\n    style=\"text-align: center\"\n    (click)=\"$event.stopPropagation()\"\n    disabled=\"true\"\n  >\n    Exportar\n  </div>\n</mat-menu>\n\n<!-- Columns Selector Menu -->\n<mat-menu #columns=\"matMenu\" xPosition=\"before\">\n  <div\n    mat-menu-item\n    style=\"text-align: center\"\n    (click)=\"$event.stopPropagation()\"\n    disabled=\"true\"\n  >\n    Columnas\n  </div>\n  <mat-divider></mat-divider>\n\n  <div\n    *ngFor=\"let column of displayedColumns.columns\"\n    mat-menu-item\n    (click)=\"$event.stopPropagation()\"\n  >\n    <mat-slide-toggle\n      color=\"primary\"\n      (click)=\"$event.stopPropagation()\"\n      (change)=\"displayedColumns.changeColumnVisivility(column)\"\n      [checked]=\"column.visible\"\n    >\n      {{ column.name }}\n    </mat-slide-toggle>\n  </div>\n  <mat-divider></mat-divider>\n  <div\n    *ngFor=\"let group of displayedColumns.columnGroups.groupColumns\"\n    mat-menu-item\n    (click)=\"$event.stopPropagation()\"\n  >\n    <mat-slide-toggle\n      color=\"accent\"\n      (click)=\"$event.stopPropagation()\"\n      (change)=\"\n        group.toogleVisibbility($event.checked);\n        displayedColumns.updateVisivility()\n      \"\n      [checked]=\"group.checked\"\n    >\n      {{ group.name }}\n    </mat-slide-toggle>\n  </div>\n  <button\n    mat-menu-item\n    style=\"text-align: center\"\n    (click)=\"displayedColumns.allVisible(); $event.stopPropagation()\"\n  >\n    Todas\n  </button>\n</mat-menu>\n\n<!-- Constrains Menu -->\n<mat-menu\n  #constrains=\"matMenu\"\n  xPosition=\"before\"\n  style=\"padding: 0.5rem !important\"\n>\n  <div\n    mat-menu-item\n    style=\"text-align: center\"\n    (click)=\"$event.stopPropagation()\"\n    disabled=\"true\"\n  >\n    Estilos\n  </div>\n  <div\n    mat-menu-item\n    disableRipple=\"true\"\n    *ngFor=\"let constr of fieldConstrians\"\n    (click)=\"$event.stopPropagation()\"\n    [style]=\"{\n      display: 'flex',\n      'align-items': 'center',\n      'justify-items': 'center',\n      color: constr.constrain.style['color'],\n      'background-color': constr.constrain.style['background-color'],\n      'text-align': 'center'\n    }\"\n  >\n    <span style=\"flex-grow: 1; text-align: center\">{{\n      constr.constrainName\n    }}</span>\n    <button\n      mat-icon-button\n      matTooltip=\"remove\"\n      style=\"justify-self: flex-end; margin-left: 1rem\"\n      [matMenuTriggerFor]=\"constrainDeletionConfirm\"\n      [matMenuTriggerData]=\"{ data: constr }\"\n    >\n      <mat-icon style=\"margin: auto\">delete</mat-icon>\n    </button>\n    <button mat-icon-button style=\"justify-self: flex-end\">\n      <mat-icon style=\"margin: auto\" matTooltip=\"hide\">edit</mat-icon>\n    </button>\n    <button\n      mat-icon-button\n      style=\"justify-self: flex-end\"\n      (click)=\"\n        constr.constrain.enable = !constr.constrain.enable; updateVisibility()\n      \"\n    >\n      <mat-icon style=\"margin: auto\" matTooltip=\"hide\">{{\n        constr.constrain.enable ? \"visibility\" : \"visibility_off\"\n      }}</mat-icon>\n    </button>\n  </div>\n\n  <!-- Constrain Creator -->\n  <div\n    mat-menu-item\n    style=\"text-align: center\"\n    (click)=\"$event.stopPropagation()\"\n  >\n    <litotable-constrain-creator\n      [columns]=\"displayedColumns.columns\"\n      (result-constrain)=\"addConstrain($event)\"\n      ><mat-icon style=\"margin: auto\"\n        >add_circle</mat-icon\n      ></litotable-constrain-creator\n    >\n  </div>\n</mat-menu>\n\n<mat-menu #constrainDeletionConfirm=\"matMenu\" xPosition=\"before\">\n  <ng-template matMenuContent let-constrain=\"data\">\n    <button\n      mat-menu-item\n      (click)=\"removeConstrain(constrain)\"\n      style=\"color: red; font-weight: 500\"\n    >\n      confirm remove\n    </button>\n  </ng-template>\n</mat-menu>\n\n<mat-menu #constrain=\"matMenu\" xPosition=\"before\">\n  <ng-template matMenuContent let-data=\"data\">\n    <mat-card\n      (click)=\"$event.stopPropagation()\"\n      (keypress)=\"$event.stopPropagation()\"\n    >\n      <mat-card-content\n        (click)=\"$event.stopPropagation()\"\n        (keypress)=\"$event.stopPropagation()\"\n        class=\"constrain-mat-content\"\n      >\n        <div\n          class=\"constrain-mat-content-dual\"\n          (click)=\"$event.stopPropagation()\"\n          (keypress)=\"$event.stopPropagation()\"\n        >\n          <app-lito-color-picker\n            [colors]=\"tableConfigurations?.rowStyleColors\"\n            (result)=\"\n              changeConstrainState($event, data.constrain, 'background-color')\n            \"\n            content=\"Background\"\n          ></app-lito-color-picker>\n          <app-lito-color-picker\n            [colors]=\"tableConfigurations?.rowStyleColors\"\n            (result)=\"changeConstrainState($event, data.constrain, 'color')\"\n            content=\"Foreground\"\n          ></app-lito-color-picker>\n        </div>\n        <div\n          [style]=\"{\n            color: data.constrain.style['color'],\n            'background-color': data.constrain.style['background-color'],\n            'margin-bottom': '1rem',\n            'text-align': 'center',\n            padding: '0.5rem 0',\n            width: '100%'\n          }\"\n        >\n          {{ data.constrain.values[0] }}\n        </div>\n        <mat-button-toggle-group\n          name=\"fontStyle\"\n          aria-label=\"Font Style\"\n          (click)=\"$event.stopPropagation()\"\n          value=\"{{ data.constrain.type }}\"\n          (change)=\"\n            changeConstrainState($event, data.constrain, 'number-type', false)\n          \"\n        >\n          <mat-button-toggle value=\"1\">=</mat-button-toggle>\n          <mat-button-toggle value=\"2\">{{ \"\\>\" }}</mat-button-toggle>\n          <mat-button-toggle value=\"3\">{{ \"\\<\" }}</mat-button-toggle>\n          <mat-button-toggle value=\"4\">{{ \"\\<\\>\" }}</mat-button-toggle>\n        </mat-button-toggle-group>\n        <div\n          *ngIf=\"data.constrain.type != numberConstrainType.BETWEEN\"\n          (click)=\"$event.stopPropagation()\"\n          (keydown)=\"$event.stopPropagation()\"\n          (keypress)=\"$event.stopPropagation()\"\n          style=\"display: flex; justify-content: space-between\"\n        >\n          <mat-form-field\n            style=\"width: 100%\"\n            appearance=\"fill\"\n            (click)=\"$event.stopPropagation()\"\n            (keypress)=\"$event.stopPropagation()\"\n            (keydown)=\"$event.stopPropagation()\"\n          >\n            <mat-label (click)=\"$event.stopPropagation()\">VALOR</mat-label>\n            <input\n              type=\"number\"\n              step=\"100\"\n              (keydown)=\"$event.stopPropagation()\"\n              (keypress)=\"$event.stopPropagation()\"\n              (click)=\"$event.stopPropagation()\"\n              (change)=\"\n                $event.stopPropagation();\n                changeConstrainState(\n                  $event,\n                  data.constrain,\n                  'number-value',\n                  false\n                )\n              \"\n              (keyup)=\"\n                $event.stopPropagation();\n                changeConstrainState(\n                  $event,\n                  data.constrain,\n                  'number-value',\n                  false\n                )\n              \"\n              matInput\n              placeholder=\"\"\n              value=\"{{ data.constrain.values[0] }}\"\n            />\n          </mat-form-field>\n        </div>\n        <!-- BETWEEN -->\n        <div\n          *ngIf=\"data.constrain.type == numberConstrainType.BETWEEN\"\n          (click)=\"$event.stopPropagation()\"\n          (keypress)=\"$event.stopPropagation()\"\n          (keydown)=\"$event.stopPropagation()\"\n          style=\"max-width: fit-content; display: flow-root\"\n        >\n          <mat-form-field\n            style=\"max-width: 45%; float: left\"\n            appearance=\"fill\"\n            (click)=\"$event.stopPropagation()\"\n            (keypress)=\"$event.stopPropagation()\"\n            (keydown)=\"$event.stopPropagation()\"\n          >\n            <mat-label (click)=\"$event.stopPropagation()\">DESDE</mat-label>\n            <input\n              type=\"number\"\n              (click)=\"$event.stopPropagation()\"\n              (keydown)=\"$event.stopPropagation()\"\n              (keypress)=\"$event.stopPropagation()\"\n              (change)=\"\n                changeConstrainState(\n                  $event,\n                  data.constrain,\n                  'number-value1',\n                  false\n                )\n              \"\n              (keyup)=\"\n                changeConstrainState(\n                  $event,\n                  data.constrain,\n                  'number-value1',\n                  false\n                )\n              \"\n              matInput\n              placeholder=\"\"\n              value=\"{{ data.constrain.values[0] }}\"\n            />\n          </mat-form-field>\n          <mat-form-field\n            style=\"max-width: 45%; float: right\"\n            appearance=\"fill\"\n            (click)=\"$event.stopPropagation()\"\n            (keypress)=\"$event.stopPropagation()\"\n            (keydown)=\"$event.stopPropagation()\"\n          >\n            <mat-label\n              (click)=\"$event.stopPropagation()\"\n              (keypress)=\"$event.stopPropagation()\"\n              >HASTA</mat-label\n            >\n            <input\n              type=\"number\"\n              step=\"100\"\n              (change)=\"\n                changeConstrainState(\n                  $event,\n                  data.constrain,\n                  'number-value2',\n                  false\n                )\n              \"\n              (click)=\"$event.stopPropagation()\"\n              (keydown)=\"$event.stopPropagation()\"\n              (keypress)=\"$event.stopPropagation()\"\n              (keyup)=\"\n                changeConstrainState(\n                  $event,\n                  data.constrain,\n                  'number-value2',\n                  false\n                )\n              \"\n              matInput\n              placeholder=\"\"\n              value=\"{{ data.constrain.values[1] }}\"\n            />\n          </mat-form-field>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </ng-template>\n</mat-menu>\n\n<!-- sidenav-menu -->\n<ng-template #sidenavMenu>\n  <div style=\"padding: 1rem\">\n    <h2>\n      <span *ngIf=\"_confirmation == 'single'\">\n        {{\n          rowConfirmation\n            ? rowConfirmation?.confirmationData?.title\n            : \"Confirmacion\"\n        }}\n      </span>\n      <span *ngIf=\"_confirmation == 'multiple'\">\n        {{\n          generalConfirmation\n            ? generalConfirmation?.confirmationData?.title\n            : \"Confirmacion\"\n        }}\n      </span>\n    </h2>\n    <p>\n      <span *ngIf=\"_confirmation == 'single'\">\n        {{ rowConfirmation?.confirmationData?.content }}\n      </span>\n      <span *ngIf=\"_confirmation == 'multiple'\">\n        {{ generalConfirmation?.confirmationData?.content }}\n      </span>\n    </p>\n\n    <button\n      mat-raised-button\n      color=\"primary\"\n      style=\"margin-right: 0.5rem\"\n      (click)=\"\n        drawer.toggle();\n        _confirmation == 'single'\n          ? onRowActionClick(rowConfirmation?.row, rowConfirmation!.action)\n          : onGeneralActionClick(generalConfirmation!.action)\n      \"\n    >\n      accept\n    </button>\n    <button mat-raised-button color=\"warn\" (click)=\"drawer.toggle()\">\n      cancel\n    </button>\n  </div>\n</ng-template>\n", styles: [".litotable-main-container{width:100%;display:flex;flex-direction:row}.litotable-container{width:100%}.litotable-operations{width:0%;transition:.5s all}.litotable-operations.growed{width:50%;margin-left:1rem}table{width:100%;max-width:100%;max-height:100%}.table-responsive{overflow:auto;min-height:.01%}.table-container{padding:1rem 1rem 0}.mat-cell>div{padding:0 10px!important;width:max-content!important}.mat-header-row .mat-header-cell{padding:0 .5rem}.mat-row{transition:.3s all}.mat-header-row .mat-header-cell.header-borders{border-right:1px solid rgba(0,0,0,.12)}.mat-header-row .mat-header-cell.header-borders:nth-child(2){border-left:1px solid rgba(0,0,0,.12)}.mat-row .mat-cell.cell-borders{border-right:1px solid rgba(0,0,0,.12)}.mat-row .mat-cell.cell-borders:nth-child(2){border-left:1px solid rgba(0,0,0,.12)}.mat-row .mat-cell{border-bottom:1px solid transparent;border-top:1px solid transparent}.mat-row.mat-row-borders:hover .mat-cell,.mat-row.mat-row-selected-borders .mat-cell{border-bottom:1px dashed currentColor;border-top:1px dashed currentColor}.mat-row.mat-row-shadow:hover .mat-cell,.mat-row.mat-row-selected-shadow .mat-cell{background-color:#0000000d}.row-is-selected{filter:brightness(1.2) contrast(.8)}.mat-column-selection{overflow:initial}.mat-header-cell{border-top-width:1px;border-top-color:#0000001f;background-color:#00000005;border-top-style:solid}th.mat-column-selection.mat-header-cell:first-of-type,td.mat-column-selection.mat-cell:first-of-type,td.mat-column-selection.mat-footer-cell:first-of-type{padding-left:10px;padding-right:10px;width:20px}.table-top-container,.table-bottom-container{display:flex}.table-top-container{justify-content:flex-end}.table-bottom-container mat-paginator{flex-grow:1}.table-operations mat-expansion-panel{margin:1rem 0}::ng-deep .column-content-alignment-1>div{text-align:left}::ng-deep .column-content-alignment-2>div{text-align:center}::ng-deep .column-content-alignment-3>div{text-align:right}.operation-buttons-container{display:flex;flex-direction:row;justify-content:flex-start}.operation-buttons-container>div{margin:0 .5rem}.constrain-mat-content>*{width:100%}.constrain-mat-content>mat-button-toggle-group{margin-bottom:1rem}.constrain-mat-content>mat-button-toggle-group>*{width:25%}.constrain-mat-content .constrain-mat-content-dual{display:flex;width:100%;justify-content:space-between;margin-bottom:1rem}.constrain-mat-content .constrain-mat-content-dual>*{width:45%}.group-header{height:2rem}.group-header>*{border-bottom:none;border-right:1px solid rgba(0,0,0,.12);border-left:1px solid rgba(0,0,0,.12);text-align:center}.group-header-empty{border-right:none!important;border-left:none!important}.cdk-drag-preview{box-sizing:border-box;padding:1rem;position:relative}.cdk-drag-preview:after{content:\"\";position:absolute;top:0;bottom:0;left:5px;right:5px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{color:transparent;position:relative;transition:transform .25s cubic-bezier(0,0,.2,1)}.actions-td,.actions-th{position:sticky;right:0;border-left:1px solid rgba(0,0,0,.12);background:white!important}.actions-td>div{display:flex;flex-direction:row;height:100%}.mat-row-processing:after{background:linear-gradient(110deg,rgba(225,225,225,.5) 8%,rgba(255,255,255,.8) 18%,rgba(225,225,225,.5) 33%);opacity:.5;background-size:200% 100%;animation:1.5s shine linear infinite;cursor:not-allowed;position:absolute;left:0;content:\"\";width:100%;height:inherit}.mat-row-processing>*:not(:last-child){color:#d3d3d3!important;border-right:0px solid!important;border-left:0px solid!important}@keyframes shine{to{background-position-x:-200%}}.footercell{width:100%;border-radius:0 0 3px 3px}.mat-row.deletion-row{transition:all 1s ease!important;height:0px}\n"], components: [{ type: i8__namespace.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { type: i8__namespace.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { type: i2__namespace.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3__namespace.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i5__namespace$1.MatDrawerContainer, selector: "mat-drawer-container", inputs: ["autosize", "hasBackdrop"], outputs: ["backdropClick"], exportAs: ["matDrawerContainer"] }, { type: i5__namespace$1.MatDrawer, selector: "mat-drawer", inputs: ["position", "mode", "disableClose", "autoFocus", "opened"], outputs: ["openedChange", "opened", "openedStart", "closed", "closedStart", "positionChanged"], exportAs: ["matDrawer"] }, { type: i5__namespace$1.MatDrawerContent, selector: "mat-drawer-content" }, { type: i6__namespace$1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i7__namespace$1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "id", "labelPosition", "name", "required", "checked", "disabled", "indeterminate", "aria-describedby", "value"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: i8__namespace$1.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "arrowPosition", "sortActionDescription", "disableClear", "mat-sort-header", "start"], exportAs: ["matSortHeader"] }, { type: i6__namespace$1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i6__namespace$1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i9__namespace.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }, { type: i10__namespace$1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "mode", "value", "bufferValue"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }, { type: i11__namespace.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { type: i11__namespace.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { type: i12__namespace$1.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { type: i13__namespace.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "required", "checked", "aria-describedby"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { type: ConstrainCreatorComponent, selector: "litotable-constrain-creator", inputs: ["columns"], outputs: ["result-constrain"] }, { type: i15__namespace$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: LitoColorPickerComponent, selector: "app-lito-color-picker", inputs: ["colors", "content"], outputs: ["result", "newColorArray"] }, { type: i10__namespace.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: i5__namespace.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }], directives: [{ type: i8__namespace.MatAccordion, selector: "mat-accordion", inputs: ["multi", "displayMode", "togglePosition", "hideToggle"], exportAs: ["matAccordion"] }, { type: i8__namespace.MatExpansionPanelTitle, selector: "mat-panel-title" }, { type: i11__namespace.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { type: i19__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i19__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i15__namespace.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i19__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i19__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i8__namespace$1.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortActive"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i6__namespace$1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i6__namespace$1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i6__namespace$1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i6__namespace$1.MatCellDef, selector: "[matCellDef]" }, { type: i6__namespace$1.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i6__namespace$1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i6__namespace$1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i6__namespace$1.MatNoDataRow, selector: "ng-template[matNoDataRow]" }, { type: i11__namespace.MatMenuContent, selector: "ng-template[matMenuContent]" }, { type: i15__namespace$1.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { type: i10__namespace.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i5__namespace.MatLabel, selector: "mat-label" }, { type: i16__namespace.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }], pipes: { "number": i19__namespace.DecimalPipe, "date": i19__namespace.DatePipe, "currency": i19__namespace.CurrencyPipe, "cuit": CuitPipe, "phone": PhonePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LitotableComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lito-table',
                        templateUrl: './lito-table.component.html',
                        styleUrls: ['./lito-table.component.css'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.LiveAnnouncer }]; }, propDecorators: { paginator: [{
                    type: i0.ViewChild,
                    args: [i9.MatPaginator]
                }], inputSource: [{
                    type: i0.Input,
                    args: ['source']
                }], dataType: [{
                    type: i0.Input,
                    args: ['type']
                }], tableActionsConfig: [{
                    type: i0.Input,
                    args: ['tableActionsConfig']
                }], selection: [{
                    type: i0.Input,
                    args: ['selection']
                }], tableConfigurations: [{
                    type: i0.Input,
                    args: ['configurations']
                }], fieldConstrians: [{
                    type: i0.Input,
                    args: ['fieldConstrians']
                }], sort: [{
                    type: i0.ViewChild,
                    args: [i8$1.MatSort]
                }], drawer: [{
                    type: i0.ViewChild,
                    args: [i5$1.MatDrawer]
                }], multipleActionOutput: [{
                    type: i0.Output,
                    args: ['multipleActionOutput']
                }], singleActionOutput: [{
                    type: i0.Output,
                    args: ['singleActionOutput']
                }] } });
    var DisplayedColumns = /** @class */ (function () {
        function DisplayedColumns(columns, selectable, actionsColumn) {
            if (columns === void 0) { columns = []; }
            if (selectable === void 0) { selectable = false; }
            if (actionsColumn === void 0) { actionsColumn = false; }
            this.columns = columns;
            this.columnNames = columns
                .filter(function (c) { return c.visible == true; })
                .map(function (x) { return x.name; });
            this.columnTypes = columns.map(function (x) { return x.type; });
            this.selectable = selectable;
            this.actionColumn = actionsColumn;
            if (selectable)
                this.columnNames.unshift('selection');
            if (actionsColumn)
                this.columnNames.push('actions');
            this.columnGroups = new ColumnGroups(columns.length);
        }
        DisplayedColumns.prototype.changeColumnVisivility = function (column) {
            this.columns.filter(function (c) { return c == column; })[0].visible = !column.visible;
            this.columnNames = this.columns
                .filter(function (c) { return c.visible == true; })
                .map(function (x) { return x.name; });
            if (this.selectable)
                this.columnNames.unshift('selection');
            if (this.actionColumn)
                this.columnNames.push('actions');
            this.updateGroups();
        };
        DisplayedColumns.prototype.updateVisivility = function () {
            this.columnNames = this.columns
                .filter(function (c) { return c.visible == true; })
                .map(function (x) { return x.name; });
            if (this.selectable)
                this.columnNames.unshift('selection');
            if (this.actionColumn)
                this.columnNames.push('actions');
            this.updateGroups();
        };
        DisplayedColumns.prototype.updateGroups = function () {
            this.columnGroups.updateColumns(this.columns.filter(function (c) { return c.visible == true; }));
        };
        DisplayedColumns.prototype.allVisible = function () {
            this.columns.forEach(function (c) { return (c.visible = true); });
            this.columnNames = this.columns
                .filter(function (c) { return c.visible == true; })
                .map(function (x) { return x.name; });
            if (this.selectable)
                this.columnNames.unshift('selection');
            if (this.actionColumn)
                this.columnNames.push('actions');
        };
        return DisplayedColumns;
    }());
    var GroupColumn = /** @class */ (function () {
        function GroupColumn(name) {
            this.columns = [];
            this.count = 0;
            this.start = 0;
            this.colspan = 1;
            this.name = name;
            this.checked = this.checkState();
        }
        GroupColumn.prototype.updateColspan = function () {
            var groupData = this.columns
                .filter(function (x) { return x.visible; })
                .sort(function (a, b) { return a.order - b.order; });
            this.colspan = groupData.length;
            if (groupData.length != 0)
                this.start = groupData[0].order;
            this.checked = this.checkState();
        };
        GroupColumn.prototype.addColumn = function (c) {
            this.columns.push(c);
            this.updateColspan();
        };
        GroupColumn.prototype.toogleVisibbility = function (state) {
            var e_1, _e;
            try {
                for (var _f = __values(this.columns), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var c = _g.value;
                    c.visible = state;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_e = _f.return)) _e.call(_f);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        GroupColumn.prototype.checkState = function () {
            return this.columns.some(function (x) { return x.visible; });
        };
        return GroupColumn;
    }());
    var ColumnGroups = /** @class */ (function () {
        function ColumnGroups(length) {
            this.active = false;
            this.groupColumns = [];
            this.displayNames = [];
            this.size = 0;
            this.displayNames = new Array(length).fill('empty-group');
        }
        ColumnGroups.prototype.updateColumns = function (visibleColumns) {
            this.displayNames = new Array(visibleColumns.length).fill('empty-group');
            this.groupColumns.forEach(function (e) { return e.updateColspan(); });
            var deletion = 0;
            var _loop_1 = function (i) {
                var element = this_1.groupColumns[i];
                var firstVisible = element.columns.filter(function (y) { return y.visible; })[0];
                if (element.colspan != 0) {
                    var index = visibleColumns.findIndex(function (x) { return x.propertyKey == firstVisible.propertyKey; });
                    this_1.displayNames.splice(1 + index - deletion, element.colspan, element.name);
                    deletion += element.colspan - 1;
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.groupColumns.length; i++) {
                _loop_1(i);
            }
            /*
            this.displayNames = visibleColumns
              .reduce(
                (a, c) => {
                  const includes = this.groupColumns.some((x) => x.columns.includes(c));
                  let str = '';
                  this.groupColumns.forEach((gc) => {
                    if (gc.columns.includes(c)) {
                      str = gc.name;
                    }
                  });
                  a.push(includes ? str : 'empty-group');
                  return a;
                },
                ['empty-group']
              )
              .reduce(
                (a, c) => {
                  if (c == 'empty-group' || !a.includes(c)) {
                    a.push(c);
                  }
                  return a;
                },
                ['empty-group']
              );
            */
            this.displayNames.unshift();
        };
        return ColumnGroups;
    }());
    var RowConstrain = /** @class */ (function () {
        function RowConstrain(name, _constrain) {
            this.name = name;
            this._constrain = _constrain;
        }
        return RowConstrain;
    }());

    var LitotableModule = /** @class */ (function () {
        function LitotableModule() {
        }
        return LitotableModule;
    }());
    LitotableModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LitotableModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    LitotableModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LitotableModule, declarations: [CuitPipe,
            PhonePipe,
            LitotableComponent,
            LitoColorPickerComponent,
            DialogColorPicker,
            ConstrainCreatorComponent,
            ConstrainCreationForm], imports: [i19.CommonModule,
            i6$1.MatTableModule,
            i9.MatPaginatorModule,
            i10$1.MatProgressBarModule,
            i8$1.MatSortModule,
            i7$1.MatCheckboxModule,
            i13.MatSlideToggleModule,
            i11.MatMenuModule,
            i2.MatButtonModule,
            i3.MatIconModule,
            i15$1.MatCardModule,
            i16.MatInputModule,
            radio.MatRadioModule,
            i8.MatExpansionModule,
            i10.MatButtonToggleModule,
            i1.MatDialogModule,
            tabs.MatTabsModule,
            i2$1.FormsModule,
            slider.MatSliderModule,
            i6.MatSelectModule,
            i3$1.MatStepperModule,
            i2$1.ReactiveFormsModule,
            i15.MatTooltipModule,
            i12.MatDatepickerModule,
            i7.MatNativeDateModule,
            i12$1.MatDividerModule,
            dragDrop.DragDropModule,
            i5$1.MatSidenavModule], exports: [LitotableComponent] });
    LitotableModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LitotableModule, imports: [[
                i19.CommonModule,
                i6$1.MatTableModule,
                i9.MatPaginatorModule,
                i10$1.MatProgressBarModule,
                i8$1.MatSortModule,
                i7$1.MatCheckboxModule,
                i13.MatSlideToggleModule,
                i11.MatMenuModule,
                i2.MatButtonModule,
                i3.MatIconModule,
                i15$1.MatCardModule,
                i16.MatInputModule,
                radio.MatRadioModule,
                i8.MatExpansionModule,
                i10.MatButtonToggleModule,
                i1.MatDialogModule,
                tabs.MatTabsModule,
                i2$1.FormsModule,
                slider.MatSliderModule,
                i6.MatSelectModule,
                i3$1.MatStepperModule,
                i2$1.ReactiveFormsModule,
                i15.MatTooltipModule,
                i12.MatDatepickerModule,
                i7.MatNativeDateModule,
                i12$1.MatDividerModule,
                dragDrop.DragDropModule,
                i5$1.MatSidenavModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LitotableModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            CuitPipe,
                            PhonePipe,
                            LitotableComponent,
                            LitoColorPickerComponent,
                            DialogColorPicker,
                            ConstrainCreatorComponent,
                            ConstrainCreationForm,
                        ],
                        imports: [
                            i19.CommonModule,
                            i6$1.MatTableModule,
                            i9.MatPaginatorModule,
                            i10$1.MatProgressBarModule,
                            i8$1.MatSortModule,
                            i7$1.MatCheckboxModule,
                            i13.MatSlideToggleModule,
                            i11.MatMenuModule,
                            i2.MatButtonModule,
                            i3.MatIconModule,
                            i15$1.MatCardModule,
                            i16.MatInputModule,
                            radio.MatRadioModule,
                            i8.MatExpansionModule,
                            i10.MatButtonToggleModule,
                            i1.MatDialogModule,
                            tabs.MatTabsModule,
                            i2$1.FormsModule,
                            slider.MatSliderModule,
                            i6.MatSelectModule,
                            i3$1.MatStepperModule,
                            i2$1.ReactiveFormsModule,
                            i15.MatTooltipModule,
                            i12.MatDatepickerModule,
                            i7.MatNativeDateModule,
                            i12$1.MatDividerModule,
                            dragDrop.DragDropModule,
                            i5$1.MatSidenavModule,
                        ],
                        exports: [LitotableComponent],
                    }]
            }] });

    /*
     * Public API Surface of lito-table
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Column = Column;
    exports.ColumnGroups = ColumnGroups;
    exports.ConstrainCreationForm = ConstrainCreationForm;
    exports.ConstrainCreationFormData = ConstrainCreationFormData;
    exports.ConstrainCreatorComponent = ConstrainCreatorComponent;
    exports.CuitPipe = CuitPipe;
    exports.DateConstrain = DateConstrain;
    exports.DialogColorPicker = DialogColorPicker;
    exports.DisplayedColumns = DisplayedColumns;
    exports.GroupColumn = GroupColumn;
    exports.LitoColorPickerComponent = LitoColorPickerComponent;
    exports.LitotableColor = LitotableColor;
    exports.LitotableComponent = LitotableComponent;
    exports.LitotableModule = LitotableModule;
    exports.MAIN_COLORS = MAIN_COLORS;
    exports.NumberConstrain = NumberConstrain;
    exports.PhonePipe = PhonePipe;
    exports.RowConstrain = RowConstrain;
    exports.StringConstrain = StringConstrain;
    exports.TableActionsConfig = TableActionsConfig;
    exports.TableColumn = TableColumn;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=lito-table.umd.js.map
