'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">litotable documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/LitotableModule.html\" data-type=\"entity-link\" >LitotableModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-LitotableModule-ac27c6677d4fd89075c495c7d5c77fea1ffdbffb0b446145dac1e595576b1af3471be2cec55fef97f00705b5342997fe1b435ac6b4cc6bbda34516d36ccab833"' : 'data-target="#xs-components-links-module-LitotableModule-ac27c6677d4fd89075c495c7d5c77fea1ffdbffb0b446145dac1e595576b1af3471be2cec55fef97f00705b5342997fe1b435ac6b4cc6bbda34516d36ccab833"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-LitotableModule-ac27c6677d4fd89075c495c7d5c77fea1ffdbffb0b446145dac1e595576b1af3471be2cec55fef97f00705b5342997fe1b435ac6b4cc6bbda34516d36ccab833"' : 'id="xs-components-links-module-LitotableModule-ac27c6677d4fd89075c495c7d5c77fea1ffdbffb0b446145dac1e595576b1af3471be2cec55fef97f00705b5342997fe1b435ac6b4cc6bbda34516d36ccab833"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ConstrainCreationForm.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ConstrainCreationForm</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ConstrainCreatorComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ConstrainCreatorComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DialogColorPicker.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DialogColorPicker</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LitoColorPickerComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LitoColorPickerComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LitotableComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LitotableComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#pipes-links-module-LitotableModule-ac27c6677d4fd89075c495c7d5c77fea1ffdbffb0b446145dac1e595576b1af3471be2cec55fef97f00705b5342997fe1b435ac6b4cc6bbda34516d36ccab833"' : 'data-target="#xs-pipes-links-module-LitotableModule-ac27c6677d4fd89075c495c7d5c77fea1ffdbffb0b446145dac1e595576b1af3471be2cec55fef97f00705b5342997fe1b435ac6b4cc6bbda34516d36ccab833"', ">\n                                            <span class=\"icon ion-md-add\"></span>\n                                            <span>Pipes</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="pipes-links-module-LitotableModule-ac27c6677d4fd89075c495c7d5c77fea1ffdbffb0b446145dac1e595576b1af3471be2cec55fef97f00705b5342997fe1b435ac6b4cc6bbda34516d36ccab833"' : 'id="xs-pipes-links-module-LitotableModule-ac27c6677d4fd89075c495c7d5c77fea1ffdbffb0b446145dac1e595576b1af3471be2cec55fef97f00705b5342997fe1b435ac6b4cc6bbda34516d36ccab833"', ">\n                                            <li class=\"link\">\n                                                <a href=\"pipes/CuitPipe.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CuitPipe</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"pipes/PhonePipe.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PhonePipe</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/Column.html\" data-type=\"entity-link\" >Column</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ColumnGroups.html\" data-type=\"entity-link\" >ColumnGroups</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ConstrainCreationFormData.html\" data-type=\"entity-link\" >ConstrainCreationFormData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateOperationConfig.html\" data-type=\"entity-link\" >CreateOperationConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DateConstrain.html\" data-type=\"entity-link\" >DateConstrain</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DeleteOperationConfig.html\" data-type=\"entity-link\" >DeleteOperationConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DisplayedColumns.html\" data-type=\"entity-link\" >DisplayedColumns</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/GroupColumn.html\" data-type=\"entity-link\" >GroupColumn</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/LitotableColor.html\" data-type=\"entity-link\" >LitotableColor</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/NumberConstrain.html\" data-type=\"entity-link\" >NumberConstrain</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Operation.html\" data-type=\"entity-link\" >Operation</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/RowConstrain.html\" data-type=\"entity-link\" >RowConstrain</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/StringConstrain.html\" data-type=\"entity-link\" >StringConstrain</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TableOperationConfig.html\" data-type=\"entity-link\" >TableOperationConfig</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/ColumnGroup.html\" data-type=\"entity-link\" >ColumnGroup</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Constrain.html\" data-type=\"entity-link\" >Constrain</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DialogColorData.html\" data-type=\"entity-link\" >DialogColorData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/FieldConstrianStyle.html\" data-type=\"entity-link\" >FieldConstrianStyle</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/OperationField.html\" data-type=\"entity-link\" >OperationField</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/StringConstrainObject.html\" data-type=\"entity-link\" >StringConstrainObject</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/TableColumnMetadata.html\" data-type=\"entity-link\" >TableColumnMetadata</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/TableConfigurations.html\" data-type=\"entity-link\" >TableConfigurations</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));