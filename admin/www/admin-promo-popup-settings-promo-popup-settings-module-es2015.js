(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-promo-popup-settings-promo-popup-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/promo-popup-settings/promo-popup-settings.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/promo-popup-settings/promo-popup-settings.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-menu-button slot=\"start\" class=\"menu-btn\">\r\n      <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\r\n    </ion-menu-button>\r\n    <div class=\"header-logo\" slot=\"start\"><img src=\"../../../assets/img/shop-logo.png\"></div>\r\n    <ion-title text-center>Promo Popup</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <div class=\"main-container info-container fixed-height\">\r\n    <ng-container>\r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <div class=\"input-wrap\">\r\n              <div class=\"flex-space-between\">\r\n\r\n                <div class=\"flex-label\">\r\n                  <ion-label> {{'PROMO_POPUP_SETTINGS.active' | translate}}\r\n                  </ion-label>\r\n                  <ion-toggle [(ngModel)]=\"popup.active\" [checked]=\"popup.active\"></ion-toggle>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\">\r\n            <div class=\"flex-space-between\">\r\n              <div>\r\n                <ion-label>{{'PROMO_POPUP_SETTINGS.banner' | translate}}\r\n                </ion-label>\r\n              </div>\r\n              <div class=\"upload-btn-wrapper\">\r\n                <button [disabled]=\"popup.banner.url\" class=\"upload-btn btn-1 i-start\"\r\n                  (click)=\"uploadImage($event.target.files)\"> <i class=\"flaticon-null-16\"></i>Upload Banner\r\n                  Image</button>\r\n                <!-- <input [disabled]=\"popup.banner.url\" type=\"file\" name=\"myfile\" (change)=\"uploadImage($event.target.files)\" /> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"img-container\">\r\n              <div class=\"no-img\" *ngIf=\"!popup.banner.url\">\r\n                <p>No attached image</p>\r\n              </div>\r\n              <div *ngIf=\"popup.banner.url\">\r\n                <div class=\"img-wrap\">\r\n                  <img class=\"category-img\" [src]=\"popup.banner.url\" (click)=\"imgZoom(popup.banner.url)\" />\r\n                  <div class=\"overlay\">\r\n                    <ion-button class=\"btn-2 remove\" shape=\"round\" fill=\"clear\" color=\"danger\" (click)=\"removeImage()\">\r\n                      <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\r\n                    </ion-button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            {{'PROMO_POPUP_SETTINGS.link_with' | translate}}\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\">\r\n            <ion-list>\r\n              <ion-radio-group [value]=\"popup.link.type\">\r\n                <ion-item class=\"pps-links\" *ngFor=\"let link of linkTypes; let i=index;\" lines=\"none\"\r\n                  (click)=\"selectLinkType(i)\">\r\n                  <ion-radio slot=\"start\" [value]=\"link\"></ion-radio>\r\n                  <ion-label>\r\n                    {{link}} : <ng-container\r\n                      *ngIf=\"(link === popup.link.type) && (!linkLength || linkLength == 1) && checkCurrentType(popup.link.type)\">\r\n                      {{popup.link.name}}\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"(link === popup.link.type) && (linkLength > 1) && checkCurrentType(popup.link.type)\">\r\n                      {{linkLength}} {{link}} selected\r\n                    </ng-container>\r\n                  </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"bs-links\" lines=\"none\" (click)=\"selectStaticLink('external')\">\r\n                  <ion-radio slot=\"start\" value=\"external\"></ion-radio>\r\n                  <ion-label style=\"text-transform: capitalize\">\r\n                    External Link :\r\n                  </ion-label>&nbsp;\r\n                  <ion-input [(ngModel)]='linkUrl' style=\"border: 1px solid;max-width: 250px;\"></ion-input>\r\n                </ion-item>\r\n                <ion-item class=\"bs-links\" lines=\"none\" (click)=\"selectStaticLink('contactUs')\">\r\n                  <ion-radio slot=\"start\" value=\"contactUs\"></ion-radio>\r\n                  <ion-label style=\"text-transform: capitalize\">\r\n                    Contact Us\r\n                  </ion-label>\r\n                </ion-item>\r\n                <!-- <ion-item class=\"bs-links\" lines=\"none\" (click)=\"selectStaticLink('referEarn')\">\r\n                  <ion-radio slot=\"start\" value=\"referEarn\"></ion-radio>\r\n                  <ion-label style=\"text-transform: capitalize\">\r\n                    Refer and Earn\r\n                  </ion-label>\r\n                </ion-item> -->\r\n                <ion-item class=\"bs-links\" lines=\"none\" (click)=\"selectStaticLink('feedback')\">\r\n                  <ion-radio slot=\"start\" value=\"feedback\"></ion-radio>\r\n                  <ion-label style=\"text-transform: capitalize\">\r\n                    Feedback\r\n                  </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"bs-links\" lines=\"none\" (click)=\"selectStaticLink('offers')\">\r\n                  <ion-radio slot=\"start\" value=\"offers\"></ion-radio>\r\n                  <ion-label style=\"text-transform: capitalize\">\r\n                    Offers\r\n                  </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"bs-links\" lines=\"none\" (click)=\"selectStaticLink('membership')\">\r\n                  <ion-radio slot=\"start\" value=\"membership\"></ion-radio>\r\n                  <ion-label style=\"text-transform: capitalize\">\r\n                    Membership\r\n                  </ion-label>\r\n                </ion-item>\r\n                <div style=\"display: flex; align-items: center\">\r\n                  <ion-item class=\"bs-links\" lines=\"none\" (click)=\"selectStaticLink('pdf')\">\r\n                    <ion-radio slot=\"start\" value=\"pdf\"></ion-radio>\r\n                    <p>PDF File</p>\r\n                    <div class=\"upload-btn-wrapper\">\r\n                      <button class=\"upload-btn btn-1 i-start\"> <i class=\"flaticon-null-16\"></i>Upload Pdf File</button>\r\n                      <input type=\"file\" name=\"myFile\" (change)=\"uploadPdf($event.target.files)\" />\r\n                    </div>\r\n                    <br>\r\n                  </ion-item>\r\n                  <a href=\"{{pdfUrl}}\" target=\"_blank\" *ngIf=\"pdfUrl != '' \">Uploaded File</a>&nbsp;&nbsp;\r\n                  <p *ngIf=\"popup.link && popup.link.type == 'pdf' && popup.link.url && newFile == true\">\r\n                    Selected File : {{popup.link.url.name}}\r\n                  </p>\r\n                </div>\r\n              </ion-radio-group>\r\n\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ng-container>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer no-border class=\"page-footer\">\r\n  <div class=\"main-container\">\r\n\r\n    <ion-button (click)=\"savePopup()\" shape=\"round\" class=\"btn-1 i-start\" color=\"success\">\r\n      <i class=\"flaticon-null-20 margin-icon\"></i>\r\n      {{'SHARED.save' | translate}}\r\n    </ion-button>\r\n\r\n  </div>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/admin/promo-popup-settings/promo-popup-settings.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/promo-popup-settings/promo-popup-settings.module.ts ***!
  \***************************************************************************/
/*! exports provided: PromoPopupSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoPopupSettingsPageModule", function() { return PromoPopupSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _promo_popup_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promo-popup-settings.page */ "./src/app/admin/promo-popup-settings/promo-popup-settings.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/shared.module */ "./src/app/components/shared.module.ts");









const routes = [
    {
        path: '',
        component: _promo_popup_settings_page__WEBPACK_IMPORTED_MODULE_6__["PromoPopupSettingsPage"]
    }
];
let PromoPopupSettingsPageModule = class PromoPopupSettingsPageModule {
};
PromoPopupSettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_promo_popup_settings_page__WEBPACK_IMPORTED_MODULE_6__["PromoPopupSettingsPage"]]
    })
], PromoPopupSettingsPageModule);



/***/ }),

/***/ "./src/app/admin/promo-popup-settings/promo-popup-settings.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/admin/promo-popup-settings/promo-popup-settings.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pps-links-type {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcHJvbW8tcG9wdXAtc2V0dGluZ3MvQzpcXEJXSS1BRE1JTlNcXFNoZWluLUFkbWluLUNvZGUvc3JjXFxhcHBcXGFkbWluXFxwcm9tby1wb3B1cC1zZXR0aW5nc1xccHJvbW8tcG9wdXAtc2V0dGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9hZG1pbi9wcm9tby1wb3B1cC1zZXR0aW5ncy9wcm9tby1wb3B1cC1zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9wcm9tby1wb3B1cC1zZXR0aW5ncy9wcm9tby1wb3B1cC1zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHBzLWxpbmtzLXR5cGUge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbiIsIi5wcHMtbGlua3MtdHlwZSB7XG4gIGNvbG9yOiAjMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/promo-popup-settings/promo-popup-settings.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/promo-popup-settings/promo-popup-settings.page.ts ***!
  \*************************************************************************/
/*! exports provided: PromoPopupSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoPopupSettingsPage", function() { return PromoPopupSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/image-modal/image-modal.page */ "./src/app/image-modal/image-modal.page.ts");
/* harmony import */ var src_app_services_label_label_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/label/label.service */ "./src/app/services/label/label.service.ts");
/* harmony import */ var _admin_banners_banner_linking_modal_banner_linking_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin-banners/banner-linking-modal/banner-linking-modal.page */ "./src/app/admin/admin-banners/banner-linking-modal/banner-linking-modal.page.ts");
/* harmony import */ var src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/config/config.service */ "./src/app/services/config/config.service.ts");
/* harmony import */ var src_app_components_image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/image-editor/image-editor.component */ "./src/app/components/image-editor/image-editor.component.ts");








let PromoPopupSettingsPage = class PromoPopupSettingsPage {
    constructor(labelService, events, loadingController, alertController, modalController, toastController, configService) {
        this.labelService = labelService;
        this.events = events;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.modalController = modalController;
        this.toastController = toastController;
        this.configService = configService;
        this.headerText = '';
        this.popup = {
            active: false,
            banner: {
                url: ''
            },
            link: {
                type: '',
                name: '',
                id: ''
            }
        };
        this.linkTypes = [];
        this.referralFeature = false;
        this.linkUrl = '';
        this.newFile = false;
        this.pdfUrl = '';
        this.statusType = '';
        this.currentType = '';
    }
    ngOnInit() {
        this.SHARED_LABELS = this.labelService.labels['SHARED'];
        this.PROMO_POPUP_SETTINGS_LABELS = this.labelService.labels['PROMO_POPUP_SETTINGS'];
        this.headerText = this.PROMO_POPUP_SETTINGS_LABELS['header_text'];
        this.referralFeature = this.configService.environment.referralFeature;
        this.initializeSubscriptions();
        this.linkTypes = [
            this.PROMO_POPUP_SETTINGS_LABELS['none'],
            this.PROMO_POPUP_SETTINGS_LABELS['product'],
            this.PROMO_POPUP_SETTINGS_LABELS['category'],
            this.PROMO_POPUP_SETTINGS_LABELS['brand'],
            this.PROMO_POPUP_SETTINGS_LABELS['search'],
            this.PROMO_POPUP_SETTINGS_LABELS['service'],
            'page'
        ];
        if (this.referralFeature) {
            this.linkTypes.push(this.PROMO_POPUP_SETTINGS_LABELS['refer_and_earn']);
        }
        this.popup.link.type = this.PROMO_POPUP_SETTINGS_LABELS['none'];
    }
    ngOnDestroy() {
        this.removeSubscriptions();
    }
    initializeSubscriptions() {
        console.log('initializeSubscriptions pro');
        this.events.subscribe('promo-popup:savePopupSuccess', () => {
            if (this.loading) {
                this.loading.dismiss();
            }
            this.presentAlert(this.PROMO_POPUP_SETTINGS_LABELS['data_saved_msg']);
        });
        this.events.subscribe('promo-popup:publishPopupData', (data) => {
            // console.log('Popup Data', data)
            if (data) {
                this.popup = data;
                this.linkUrl = data.link.type == 'external' ? data.link.url : "";
                this.pdfUrl = data.link.type == 'pdf' ? data.link.url : "";
                this.currentType = "type" in data.link ? data.link.type : "";
                this.linkLength = "ids" in data.link ? data.link.ids.length : this.linkLength;
            }
        });
        this.events.publish('promo-popup:getPopupData');
    }
    toggleActive() {
        this.popup.active = !this.popup.active;
    }
    removeImage() {
        this.popup.banner.url = '';
    }
    imgZoom(img) {
        this.modalController.create({
            component: src_app_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_3__["ImageModalPage"],
            cssClass: 'photo-modal-class',
            componentProps: {
                imgs: [{ url: img }],
                index: 0
            }
        }).then(modal => modal.present());
    }
    selectLinkType(i) {
        const type = this.linkTypes[i];
        this.popup.link.type = type;
        if (type === this.PROMO_POPUP_SETTINGS_LABELS['product']) {
            this.presentModal(this.popup.link.type);
        }
        else if (type === this.PROMO_POPUP_SETTINGS_LABELS['category']) {
            this.presentModal(this.popup.link.type);
        }
        else if (type === 'subcategory') {
            this.presentModal(this.popup.link.type);
        }
        else if (type === this.PROMO_POPUP_SETTINGS_LABELS['brand']) {
            this.presentModal(this.popup.link.type);
        }
        else if (type === this.PROMO_POPUP_SETTINGS_LABELS['service']) {
            this.presentModal(this.popup.link.type);
        }
        else if (type === this.PROMO_POPUP_SETTINGS_LABELS['search']) {
            this.searchTextAlert();
        }
        else if (type === 'page') {
            this.presentModal(this.popup.link.type);
        }
        else if (type === this.PROMO_POPUP_SETTINGS_LABELS['refer_and_earn']) {
            return null;
        }
        else {
            return null;
        }
        this.popup.link.ids = [];
        this.popup.link.name = '';
    }
    presentModal(type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log('modal linkType : ', type);
            // console.log('modal linkId : ', this.popup.link.ids);
            // console.log('modal currentType : ', this.popup.type);
            // console.log('modal status : ', this.statusType);
            if (type !== this.currentType) {
                this.popup.link.ids = [];
            }
            const modal = yield this.modalController.create({
                component: _admin_banners_banner_linking_modal_banner_linking_modal_page__WEBPACK_IMPORTED_MODULE_5__["BannerLinkingModalPage"],
                cssClass: 'custom-modal',
                showBackdrop: true,
                backdropDismiss: false,
                componentProps: {
                    linkType: type,
                    linkId: this.popup.link.ids,
                    currentType: this.popup.type,
                    status: this.statusType
                }
            });
            modal.onDidDismiss()
                .then((res) => {
                if (res && res.data) {
                    console.log('data from modal', res.data);
                    this.popup.link.ids = res.data.id || [];
                    if (res.data.id && res.data.id.length > 0) {
                        this.popup.link.id = res.data.id[0];
                    }
                    else {
                        this.popup.link.id = '';
                    }
                    this.popup.link.name = res.data.name;
                    this.linkLength = this.popup.link.ids.length;
                    this.statusType = res.data.status || '';
                    this.currentType = res.data.type || '';
                    if (res.data.hasOwnProperty('isSubcategories')) {
                        this.popup.link['isSubcategories'] = res.data.isSubcategories;
                    }
                    if (type == 'subcategory') {
                        this.popup.link['categoryId'] = res.data.categoryId;
                    }
                    if (res.data.hasOwnProperty('serviceData')) {
                        this.popup.link['serviceData'] = res.data.serviceData;
                    }
                }
                else {
                    this.defaultLinkType();
                }
            });
            yield modal.present();
        });
    }
    searchTextAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                subHeader: this.PROMO_POPUP_SETTINGS_LABELS['search_text'],
                inputs: [
                    {
                        name: 'searchTxt',
                        type: 'text',
                        placeholder: this.PROMO_POPUP_SETTINGS_LABELS['enter_search_text']
                    },
                ],
                buttons: [
                    {
                        text: this.SHARED_LABELS['cancel'],
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.defaultLinkType();
                        }
                    }, {
                        text: this.SHARED_LABELS['add'],
                        handler: (data) => {
                            if (!data.searchTxt) {
                                this.defaultLinkType();
                                this.presentToast(this.PROMO_POPUP_SETTINGS_LABELS['please_enter_valid_data']);
                            }
                            else {
                                this.popup.link.name = data.searchTxt;
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    defaultLinkType() {
        this.popup.link.ids = [];
        this.popup.link.name = '';
        this.popup.link.type = this.PROMO_POPUP_SETTINGS_LABELS['none'];
        delete this.popup.link.url;
        this.linkUrl = '';
        this.linkLength = '';
    }
    savePopup() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log("this.popup",this.popup);
            if (!this.popup.banner) {
                this.popup.banner = { url: '' };
            }
            else if (this.popup.active && (this.popup.banner && !this.popup.banner.url)) {
                this.presentAlert(this.PROMO_POPUP_SETTINGS_LABELS['upload_banner_msg']);
            }
            else if (this.popup.link && this.popup.link.type == 'pdf' && !this.popup.link.url) {
                this.presentAlert('Please select a file to upload');
            }
            else if (this.popup.link && this.popup.link.type == 'external') {
                if (this.linkUrl != '' && this.isValidHttpUrl(this.linkUrl)) {
                    this.popup.link.url = this.linkUrl;
                    this.filterData();
                    yield this.presentLoading();
                    console.log("promo-popup:savePopup");
                    this.events.publish('promo-popup:savePopup', this.popup);
                }
                else {
                    this.presentAlert('Please enter a valid link');
                }
            }
            else {
                this.filterData();
                yield this.presentLoading();
                console.log("promo-popup:savePopup");
                this.events.publish('promo-popup:savePopup', this.popup);
            }
        });
    }
    isValidHttpUrl(string) {
        let url;
        try {
            url = new URL(string);
        }
        catch (_) {
            return false;
        }
        return url.protocol === "http:" || url.protocol === "https:";
    }
    filterData() {
        if (this.popup.link.type !== this.PROMO_POPUP_SETTINGS_LABELS['category'] && this.popup.link.hasOwnProperty('isSubcategories')) {
            delete this.popup.link.isSubcategories;
        }
        if (this.popup.link.type !== this.PROMO_POPUP_SETTINGS_LABELS['service'] && this.popup.link.hasOwnProperty('serviceData')) {
            delete this.popup.link.serviceData;
        }
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    presentAlert(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: this.SHARED_LABELS['please_wait'],
                duration: 10000,
            });
            yield this.loading.present();
        });
    }
    uploadImage(files) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_7__["ImageEditorComponent"],
                componentProps: {
                    aspectRatioWidthVal: 1,
                    aspectRatioHeightVal: 1,
                },
                cssClass: 'custom-img-editor'
            });
            yield modal.present();
            modal.onDidDismiss().then(res => {
                if (!this.popup.banner) {
                    this.popup.banner = { url: '' };
                }
                this.popup.banner.url = res.data || '';
            });
            //console.log(type);
            // for (let i = 0; i < files.length; i++) {
            //   let reader = new FileReader();
            //   reader.readAsDataURL(files.item(i))
            //   reader.onload = (event:any) => { // called once readAsDataURL is completed
            //     let base64Image:any = event.target.result;
            // if (!this.popup.banner){
            //   this.popup.banner = {url: ''}
            // }
            // this.popup.banner.url = base64Image;
            // }
            // }
        });
    }
    checkCurrentType(type) {
        return type === this.currentType;
    }
    selectStaticLink(type) {
        this.popup.link.ids = [];
        this.popup.link.name = '';
        if (type == 'contactUs') {
            this.popup.link.type = 'contactUs';
        }
        // else if (type == 'referEarn') {
        //   this.popup.link.type = 'referEarn';
        // }
        else if (type == 'feedback') {
            this.popup.link.type = 'feedback';
        }
        else if (type == 'offers') {
            this.popup.link.type = 'offers';
        }
        else if (type == 'membership') {
            this.popup.link.type = 'membership';
        }
        else if (type == 'external') {
            this.popup.link.type = 'external';
            this.popup.link.url = this.linkUrl;
        }
        else if (type == 'pdf') {
            this.popup.link.type = 'pdf';
        }
    }
    uploadPdf(file) {
        if (file[0]) {
            console.log(file[0]);
            this.popup.link.url = file[0];
            this.newFile = true;
        }
    }
    removeSubscriptions() {
        this.events.unsubscribe('promo-popup:publishPopupData');
        this.events.unsubscribe('promo-popup:savePopupSuccess');
    }
};
PromoPopupSettingsPage.ctorParameters = () => [
    { type: src_app_services_label_label_service__WEBPACK_IMPORTED_MODULE_4__["LabelService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }
];
PromoPopupSettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-promo-popup-settings',
        template: __webpack_require__(/*! raw-loader!./promo-popup-settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/promo-popup-settings/promo-popup-settings.page.html"),
        styles: [__webpack_require__(/*! ./promo-popup-settings.page.scss */ "./src/app/admin/promo-popup-settings/promo-popup-settings.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_label_label_service__WEBPACK_IMPORTED_MODULE_4__["LabelService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]])
], PromoPopupSettingsPage);



/***/ })

}]);
//# sourceMappingURL=admin-promo-popup-settings-promo-popup-settings-module-es2015.js.map