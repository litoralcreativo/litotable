'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">litotable documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/LitotableModule.html" data-type="entity-link" >LitotableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LitotableModule-ac27c6677d4fd89075c495c7d5c77fea1ffdbffb0b446145dac1e595576b1af3471be2cec55fef97f00705b5342997fe1b435ac6b4cc6bbda34516d36ccab833"' : 'data-target="#xs-components-links-module-LitotableModule-ac27c6677d4fd89075c495c7d5c77fea1ffdbffb0b446145dac1e595576b1af3471be2cec55fef97f00705b5342997fe1b435ac6b4cc6bbda34516d36ccab833"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LitotableModule-ac27c6677d4fd89075c495c7d5c77fea1ffdbffb0b446145dac1e595576b1af3471be2cec55fef97f00705b5342997fe1b435ac6b4cc6bbda34516d36ccab833"' :
                                            'id="xs-components-links-module-LitotableModule-ac27c6677d4fd89075c495c7d5c77fea1ffdbffb0b446145dac1e595576b1af3471be2cec55fef97f00705b5342997fe1b435ac6b4cc6bbda34516d36ccab833"' }>
                                            <li class="link">
                                                <a href="components/ConstrainCreationForm.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConstrainCreationForm</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConstrainCreatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConstrainCreatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogColorPicker.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogColorPicker</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LitoColorPickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LitoColorPickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LitotableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LitotableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-LitotableModule-ac27c6677d4fd89075c495c7d5c77fea1ffdbffb0b446145dac1e595576b1af3471be2cec55fef97f00705b5342997fe1b435ac6b4cc6bbda34516d36ccab833"' : 'data-target="#xs-pipes-links-module-LitotableModule-ac27c6677d4fd89075c495c7d5c77fea1ffdbffb0b446145dac1e595576b1af3471be2cec55fef97f00705b5342997fe1b435ac6b4cc6bbda34516d36ccab833"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-LitotableModule-ac27c6677d4fd89075c495c7d5c77fea1ffdbffb0b446145dac1e595576b1af3471be2cec55fef97f00705b5342997fe1b435ac6b4cc6bbda34516d36ccab833"' :
                                            'id="xs-pipes-links-module-LitotableModule-ac27c6677d4fd89075c495c7d5c77fea1ffdbffb0b446145dac1e595576b1af3471be2cec55fef97f00705b5342997fe1b435ac6b4cc6bbda34516d36ccab833"' }>
                                            <li class="link">
                                                <a href="pipes/CuitPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CuitPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PhonePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhonePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Column.html" data-type="entity-link" >Column</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConstrainCreationFormData.html" data-type="entity-link" >ConstrainCreationFormData</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOperationConfig.html" data-type="entity-link" >CreateOperationConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateConstrain.html" data-type="entity-link" >DateConstrain</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteOperationConfig.html" data-type="entity-link" >DeleteOperationConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DisplayedColumns.html" data-type="entity-link" >DisplayedColumns</a>
                            </li>
                            <li class="link">
                                <a href="classes/LitotableColor.html" data-type="entity-link" >LitotableColor</a>
                            </li>
                            <li class="link">
                                <a href="classes/NumberConstrain.html" data-type="entity-link" >NumberConstrain</a>
                            </li>
                            <li class="link">
                                <a href="classes/Operation.html" data-type="entity-link" >Operation</a>
                            </li>
                            <li class="link">
                                <a href="classes/RowConstrain.html" data-type="entity-link" >RowConstrain</a>
                            </li>
                            <li class="link">
                                <a href="classes/StringConstrain.html" data-type="entity-link" >StringConstrain</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableOperationConfig.html" data-type="entity-link" >TableOperationConfig</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Constrain.html" data-type="entity-link" >Constrain</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogColorData.html" data-type="entity-link" >DialogColorData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FieldConstrianStyle.html" data-type="entity-link" >FieldConstrianStyle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OperationField.html" data-type="entity-link" >OperationField</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StringConstrainObject.html" data-type="entity-link" >StringConstrainObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableColumnMetadata.html" data-type="entity-link" >TableColumnMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableConfigurations.html" data-type="entity-link" >TableConfigurations</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});