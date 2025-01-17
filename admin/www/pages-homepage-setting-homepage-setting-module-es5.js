(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-homepage-setting-homepage-setting-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/homepage-setting/homepage-setting.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/homepage-setting/homepage-setting.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"custom-back-button\"></ion-back-button>\r\n    </ion-buttons>\r\n    <div class=\"header-logo\" slot=\"start\"><img src=\"../../../assets/img/shop-logo.png\"></div>\r\n    <ion-title class=\"ion-text-center\">Page Edit</ion-title>\r\n  </ion-toolbar>\r\n  <div class=\"header-cart-btn\">\r\n    <ion-button fill=\"outline\" shape=\"round\" class=\"add-btn\" (click)=\"goToSample()\">\r\n      <strong>View Sample Design</strong>\r\n    </ion-button>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"main-container\">\r\n    <ion-row *ngIf=\"pageId != 'about' && pageId != 'homepage'\">\r\n      <ion-col size=\"6\">\r\n        <div class=\"input-wrap\">\r\n        <ion-label>Name of page</ion-label>\r\n         <ion-input type=\"text\" class=\"form-input\" [(ngModel)]='pageName'></ion-input>\r\n      </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" *ngIf=\"isUniversal\">\r\n        <div class=\"input-wrap\">\r\n        <ion-label>Slug Name <ion-text color=\"danger\">(<b class=\"cursor-p\" \r\n          (click)=\"sharedService.presentSlugAlert()\">CLICK HERE</b> for Slug Instructions)</ion-text>\r\n        </ion-label>\r\n         <ion-input type=\"text\" class=\"form-input\" [(ngModel)]='slug.name'></ion-input>\r\n      </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"t-a-c\">\r\n        <ion-button (click)=\"changeName()\" class=\"btn-sml i-start m-s-btn\" fill=\"outline\" shape=\"round\">\r\n          Save</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <div style=\"text-align: center; display: flex; width: 400px;\" *ngIf=\"pageId != 'about' && pageId != 'homepage'\">\r\n      <input [(ngModel)]='pageName' placeholder=\"Enter name of page\" style=\"padding: 5px; margin-right: 10px\" />\r\n      <ion-row *ngIf=\"isUniversal\">\r\n        <ion-col>\r\n          <div class=\"input-wrap\">\r\n          <ion-label>Slug Name <ion-text color=\"danger\">(<b class=\"cursor-p\" \r\n            (click)=\"sharedService.presentSlugAlert()\">CLICK HERE</b> for Slug Instructions)</ion-text>\r\n          </ion-label>\r\n           <ion-input type=\"text\" class=\"form-input\" [(ngModel)]='slug.name'></ion-input>\r\n        </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-button (click)=\"changeName()\" class=\"btn-sml i-start m-s-btn\" fill=\"outline\" shape=\"round\">\r\n        Save</ion-button>\r\n    </div> -->\r\n    <ion-reorder-group (ionItemReorder)=\"webSectionReorder($event)\" disabled=\"false\">\r\n      <ion-item *ngFor=\"let item of pageData; let i = index\">\r\n        <div class=\"section\">\r\n          <div style=\"display: inline-flex\">\r\n            <ion-reorder slot=\"end\"> <i class=\"flaticon-menu\"></i></ion-reorder>\r\n            &nbsp;&nbsp;&nbsp;&nbsp;\r\n            <p style=\"margin-top: -12px;font-size: large\">Section {{i+1}}</p>\r\n          </div>\r\n          <br><br>\r\n          <div class=\"sectionBlock\">\r\n            <div style=\"display: block\">\r\n              <p *ngIf=\"item.sectionName\" class=\"crop\">Name: {{item.sectionName}}</p>\r\n              <br *ngIf=\"item.sectionName\">\r\n              <p *ngIf=\"item.widgetType\">Type: {{item.widgetType}}</p>\r\n              <br *ngIf=\"multiRegion && regions.length\">\r\n              <div *ngIf=\"multiRegion && regions.length\" style=\"display: flex;align-items: center\">\r\n                <ion-label>Region:</ion-label>&nbsp;&nbsp;\r\n                <ion-select multiple=\"true\" [value]=\"item.regionId\" (ionChange)=\"addRegion($event,i)\"\r\n                  placeholder=\"Select Region\"\r\n                  style=\"border: 1px solid gray; border: 1px solid gray; width: 300px;position: relative;\">\r\n                  <ion-select-option [value]=\"region.id\" *ngFor=\"let region of regions\">{{region.name}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </div>\r\n            </div>\r\n            <div style=\"display: flex\">\r\n              <div>\r\n                <ion-button (click)=\"openWidgetEdit(item.widgetType,item.widgetID,i)\">\r\n                  <i class=\"flaticon-pencil-edit-button\" slot=\"icon-only\" slot=\"icon-only\"></i>\r\n                  &nbsp;Edit\r\n                </ion-button>\r\n                &nbsp;&nbsp;\r\n                <ion-button (click)=\"deleteSectionConfirm(item.widgetID,i, 'web')\">\r\n                  <i class=\"flaticon-null-21\" slot=\"icon-only\" slot=\"icon-only\"></i>\r\n                  &nbsp;Delete\r\n                </ion-button>\r\n              </div>\r\n              <ion-list lines=\"none\">\r\n                <ion-item>\r\n                  <ion-label>App</ion-label>\r\n                  <ion-toggle [checked]=\"item.location=='app' || item.location=='all'\"\r\n                    (ionChange)=\"changeLocationStatus(i,'app')\"></ion-toggle>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <ion-label>Website</ion-label>\r\n                  <ion-toggle [checked]=\"item.location=='web' || item.location=='all'\"\r\n                    (ionChange)=\"changeLocationStatus(i,'web')\"></ion-toggle>\r\n                </ion-item>\r\n              </ion-list>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-item>\r\n    </ion-reorder-group>\r\n    <br>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<ion-footer no-border class=\"page-footer\">\r\n  <div class=\"main-container\">\r\n    <ion-button shape=\"round\" class=\"btn-1 i-start\" color=\"primary\" (click)=\"addNewSection()\">\r\n      <ion-icon name=\"add-circle\" slot=\"start\"></ion-icon>\r\n      Add New Section\r\n    </ion-button>\r\n  </div>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/homepage-setting/homepage-setting.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/homepage-setting/homepage-setting.module.ts ***!
  \*******************************************************************/
/*! exports provided: HomepageSettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageSettingPageModule", function() { return HomepageSettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _homepage_setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage-setting.page */ "./src/app/pages/homepage-setting/homepage-setting.page.ts");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/fesm5/ionic-super-tabs-angular.js");








var routes = [
    {
        path: '',
        component: _homepage_setting_page__WEBPACK_IMPORTED_MODULE_6__["HomepageSettingPage"]
    }
];
var HomepageSettingPageModule = /** @class */ (function () {
    function HomepageSettingPageModule() {
    }
    HomepageSettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_homepage_setting_page__WEBPACK_IMPORTED_MODULE_6__["HomepageSettingPage"]]
        })
    ], HomepageSettingPageModule);
    return HomepageSettingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/homepage-setting/homepage-setting.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/homepage-setting/homepage-setting.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".widget-type {\n  color: #999;\n  margin-left: 12px;\n}\n\n.section {\n  display: block;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 10px;\n}\n\n.sectionBlock {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 1000px;\n}\n\nion-list {\n  display: -webkit-box;\n  display: flex;\n  margin-top: -20px;\n  margin-left: 10px;\n}\n\n.crop {\n  overflow: hidden;\n  width: 200px;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZXBhZ2Utc2V0dGluZy9DOlxcQldJLUFETUlOU1xcU2hlaW4tQWRtaW4tQ29kZS9zcmNcXGFwcFxccGFnZXNcXGhvbWVwYWdlLXNldHRpbmdcXGhvbWVwYWdlLXNldHRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lcGFnZS1zZXR0aW5nL2hvbWVwYWdlLXNldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWEsV0FBQTtFQUFZLGlCQUFBO0FDR3pCOztBREZBO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxhQUFBO0FDS0o7O0FESEE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsYUFBQTtBQ01KOztBREpBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ09KOztBRExBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWVwYWdlLXNldHRpbmcvaG9tZXBhZ2Utc2V0dGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkZ2V0LXR5cGV7Y29sb3I6ICM5OTk7bWFyZ2luLWxlZnQ6IDEycHg7fVxyXG4uc2VjdGlvbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4XHJcbn1cclxuLnNlY3Rpb25CbG9ja3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwMHB4XHJcbn1cclxuaW9uLWxpc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweFxyXG59XHJcbi5jcm9we1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59IiwiLndpZGdldC10eXBlIHtcbiAgY29sb3I6ICM5OTk7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4uc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnNlY3Rpb25CbG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMDBweDtcbn1cblxuaW9uLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jcm9wIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDIwMHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/homepage-setting/homepage-setting.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/homepage-setting/homepage-setting.page.ts ***!
  \*****************************************************************/
/*! exports provided: HomepageSettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageSettingPage", function() { return HomepageSettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _select_widget_modal_select_widget_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-widget-modal/select-widget-modal.page */ "./src/app/pages/homepage-setting/select-widget-modal/select-widget-modal.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/config/config.service */ "./src/app/services/config/config.service.ts");
/* harmony import */ var _edit_widget_edit_widget_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-widget/edit-widget.page */ "./src/app/pages/homepage-setting/edit-widget/edit-widget.page.ts");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");











var HomepageSettingPage = /** @class */ (function () {
    function HomepageSettingPage(modalController, angularFirestore, alertController, loadingController, router, configService, events, route, sharedService) {
        var _this = this;
        this.modalController = modalController;
        this.angularFirestore = angularFirestore;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
        this.configService = configService;
        this.events = events;
        this.route = route;
        this.sharedService = sharedService;
        this.pageData = [];
        this.appSections = [];
        this.webLoader = true;
        this.appLoader = true;
        this.nopageData = false;
        this.noAppSections = false;
        this.pageId = 'homepage';
        this.pageName = '';
        this.pages = [];
        this.widgets = ['banner-slider', 'image-banner', 'product-carousel', 'product-list', 'image-block-list', 'video-block-list', 'text-block-list'];
        this.regionId = [];
        this.multiRegion = false;
        this.regions = [];
        this.slug = {
            name: '',
            updatedAt: new Date(),
            updatedBy: 'admin'
        };
        this.isUniversal = false;
        this.route.queryParams.subscribe(function (params) {
            if (params && params.pageId) {
                _this.pageId = params.pageId;
            }
            if (params && params.pageName) {
                _this.pageName = params.pageName;
            }
        });
    }
    HomepageSettingPage.prototype.ngOnInit = function () {
        this.sectionLimit = this.configService.environment.sectionsLimit;
        this.isUniversal = this.sharedService.isUniversal();
    };
    HomepageSettingPage.prototype.ionViewWillEnter = function () {
        //  console.log("here")
        this.getSections();
        this.initializeSubscriptions();
        this.multiRegion = this.configService.environment.multiRegion;
        if (this.multiRegion) {
            this.events.publish('multi-region:getActiveStatus');
            this.events.publish('multi-region:getAllActiveRegions');
        }
    };
    HomepageSettingPage.prototype.ionViewWillLeave = function () {
        this.removeSubscriptions();
    };
    HomepageSettingPage.prototype.initializeSubscriptions = function () {
        var _this = this;
        this.events.subscribe('multi-region:publishActiveStatus', function (data) {
            if (data) {
                _this.multiRegion = data.active;
            }
        });
        this.events.subscribe('multi-region:publishAllActiveRegions', function (regions) {
            if (regions.length) {
                _this.regions = regions;
            }
            console.log(regions);
        });
    };
    HomepageSettingPage.prototype.openWidget = function (page) {
        // console.log('goToPage', page);
        this.router.navigate([page]);
    };
    HomepageSettingPage.prototype.openBannerWidget = function (type) {
        var navigationExtras = {
            queryParams: {
                type: type,
            }
        };
        this.router.navigate(['banner-slider-widgets-list'], navigationExtras);
    };
    HomepageSettingPage.prototype.goToSample = function () {
        this.router.navigate(['sample-homepage']);
    };
    HomepageSettingPage.prototype.openProductWidget = function (type) {
        var navigationExtras = {
            queryParams: {
                type: type,
            }
        };
        this.router.navigate(['product-carousel-list'], navigationExtras);
    };
    HomepageSettingPage.prototype.getSections = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sections, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.angularFirestore.collection('pages').doc(this.pageId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).toPromise()];
                    case 1:
                        sections = _a.sent();
                        this.appSections = sections.appData;
                        this.appLoader = false;
                        if (sections && sections.sections) {
                            this.pageData = sections.sections;
                        }
                        this.slug = sections.slug || this.slug;
                        // console.log("sections:",this.pageData)
                        this.webLoader = false;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomepageSettingPage.prototype.appSectionReorder = function (event) {
        console.log("Moving item from " + event.detail.from + " to " + event.detail.to);
        var draggedItem = this.appSections.splice(event.detail.from, 1)[0];
        this.appSections.splice(event.detail.to, 0, draggedItem);
        //this.listItems = reorderArray(this.listItems, event.detail.from, event.detail.to);
        console.table(this.appSections);
        event.detail.complete();
    };
    HomepageSettingPage.prototype.webSectionReorder = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var draggedItem;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Moving item from " + event.detail.from + " to " + event.detail.to);
                        draggedItem = this.pageData.splice(event.detail.from, 1)[0];
                        this.pageData.splice(event.detail.to, 0, draggedItem);
                        //this.listItems = reorderArray(this.listItems, event.detail.from, event.detail.to);
                        console.table(this.pageData);
                        event.detail.complete();
                        return [4 /*yield*/, this.angularFirestore.collection('pages').doc(this.pageId).update({ 'sections': this.pageData })];
                    case 1:
                        _a.sent();
                        if (this.loading) {
                            this.loading.dismiss();
                        }
                        this.presentAlert('Page Save Successfully');
                        return [2 /*return*/];
                }
            });
        });
    };
    HomepageSettingPage.prototype.openWidgetEdit = function (type, id, index) {
        if (type == "image-banner" || type == "banner-slider") {
            var navigationExtras = {
                queryParams: {
                    ID: id,
                    index: index,
                    pageId: this.pageId
                }
            };
            this.router.navigate(['edit-banner'], navigationExtras);
        }
        else if (type == "product-carousel" || type == "product-list") {
            var navigationExtras = {
                queryParams: {
                    ID: id,
                    index: index,
                    pageId: this.pageId,
                    type: type
                }
            };
            this.router.navigate(['edit-product-carousel'], navigationExtras);
        }
        else if (type == "image-block") {
            var navigationExtras = {
                queryParams: {
                    ID: id,
                    index: index,
                    pageId: this.pageId
                }
            };
            this.router.navigate(['edit-image-block'], navigationExtras);
        }
        else if (type == "video-block") {
            var navigationExtras = {
                queryParams: {
                    ID: id,
                    index: index,
                    pageId: this.pageId
                }
            };
            this.router.navigate(['edit-video-block'], navigationExtras);
        }
        else if (type == "text-block") {
            var navigationExtras = {
                queryParams: {
                    ID: id,
                    index: index,
                    pageId: this.pageId
                }
            };
            this.router.navigate(['edit-text-block'], navigationExtras);
        }
        else if (type == "categories") {
            var navigationExtras = {
                queryParams: {
                    ID: id,
                    index: index,
                    pageId: this.pageId
                }
            };
            this.router.navigate(['edit-categories'], navigationExtras);
        }
        else if (type == "brands") {
            var navigationExtras = {
                queryParams: {
                    ID: id,
                    index: index,
                    pageId: this.pageId
                }
            };
            this.router.navigate(['edit-brands'], navigationExtras);
        }
        else if (type == "services") {
            var navigationExtras = {
                queryParams: {
                    ID: id,
                    index: index,
                    pageId: this.pageId
                }
            };
            this.router.navigate(['edit-services'], navigationExtras);
        }
        else if (type == "form") {
            this.presentAlert('Please edit this Form from Forms List in sidemenu');
            // const navigationExtras: NavigationExtras = {
            //   queryParams: {
            //     ID: id,
            //     index: index,
            //     pageId: this.pageId
            //   }
            // };
            // this.router.navigate(['edit-form'], navigationExtras);
        }
        else if (type == "document") {
            var navigationExtras = {
                queryParams: {
                    ID: id,
                    index: index,
                    pageId: this.pageId
                }
            };
            this.router.navigate(['edit-document'], navigationExtras);
        }
        else if (type == "vendors") {
            var navigationExtras = {
                queryParams: {
                    ID: id,
                    index: index,
                    pageId: this.pageId
                }
            };
            this.router.navigate(['edit-vendors'], navigationExtras);
        }
    };
    HomepageSettingPage.prototype.openSelectWidgetModal = function (index, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof index === 'number') {
                            this.selectedSectionIndex = index;
                            console.log('index', index);
                        }
                        if (type) {
                            this.selectedSectionType = type;
                            console.log(type);
                        }
                        return [4 /*yield*/, this.modalController.create({
                                component: _select_widget_modal_select_widget_modal_page__WEBPACK_IMPORTED_MODULE_5__["SelectWidgetModalPage"],
                                backdropDismiss: false,
                                cssClass: 'custom-modal',
                                componentProps: { pageId: this.pageId }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            _this.getSections();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomepageSettingPage.prototype.openEditWidgetModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("openEdit");
                        return [4 /*yield*/, this.modalController.create({
                                component: _edit_widget_edit_widget_page__WEBPACK_IMPORTED_MODULE_8__["EditWidgetPage"],
                                backdropDismiss: false,
                                cssClass: 'custom-modal'
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomepageSettingPage.prototype.changeLocationStatus = function (index, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        if (type == "app") {
                            if (this.pageData[index].location == "app") {
                                this.pageData[index].location = "none";
                            }
                            else if (this.pageData[index].location == "none") {
                                this.pageData[index].location = "app";
                            }
                            else if (this.pageData[index].location == "all") {
                                console.log(3);
                                this.pageData[index].location = "web";
                            }
                            else if (this.pageData[index].location == "web") {
                                this.pageData[index].location = "all";
                            }
                        }
                        else if (type == "web") {
                            if (this.pageData[index].location == "web") {
                                this.pageData[index].location = "none";
                            }
                            else if (this.pageData[index].location == "none") {
                                this.pageData[index].location = "web";
                            }
                            else if (this.pageData[index].location == "all") {
                                this.pageData[index].location = "app";
                            }
                            else if (this.pageData[index].location == "app") {
                                this.pageData[index].location = "all";
                            }
                        }
                        console.log("new", this.pageData[index].location, index, this.pageData);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.angularFirestore.collection('pages').doc(this.pageId).update({ 'sections': this.pageData })];
                    case 3:
                        _a.sent();
                        if (this.loading) {
                            this.loading.dismiss();
                        }
                        this.presentAlert('Page Save Successfully');
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        console.log(error_2);
                        this.presentAlert('Some error occured, please try again');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HomepageSettingPage.prototype.addNewSection = function () {
        if (this.pageData.length < this.sectionLimit) {
            this.openSelectWidgetModal();
            this.selectedSectionType = "web";
            this.selectedSectionIndex = null;
        }
        else {
            this.presentAlert('Sections limit reached, Max ' + this.sectionLimit + ' allowed');
        }
    };
    HomepageSettingPage.prototype.addDatatoSection = function (index) {
        if (this.selectedSectionType == 'web') {
            if (typeof index === 'number') {
                this.pageData[index] = this.selectedWidgetData;
                console.log('web', this.pageData);
            }
            else {
                this.pageData.push(this.selectedWidgetData);
                console.log('web', this.pageData);
            }
        }
        else {
            if (typeof index === 'number') {
                this.appSections[index] = this.selectedWidgetData;
                console.log('app', this.appSections);
            }
            else {
                this.appSections.push(this.selectedWidgetData);
                console.log('app', this.appSections);
            }
        }
    };
    HomepageSettingPage.prototype.selectWidget = function (name) {
        console.log(name.target.value);
        var navigationExtras = {
            queryParams: {
                type: name.target.value,
            }
        };
        this.router.navigate(['banner-slider-widgets-list'], navigationExtras);
    };
    HomepageSettingPage.prototype.save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.presentLoading();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.angularFirestore.collection('pages').doc(this.pageId).set({ 'sections': this.pageData })];
                    case 2:
                        _a.sent();
                        if (this.loading) {
                            this.loading.dismiss();
                        }
                        this.presentAlert('Page Save Successfully');
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        console.log(error_3);
                        this.presentAlert('Some error occured, please try again');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomepageSettingPage.prototype.deleteSectionConfirm = function (widgetID, index, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'Are you sure you want to delete',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        // //console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Delete',
                                    handler: function () {
                                        if (type == 'form') {
                                            _this.deleteSection(index, type);
                                        }
                                        else {
                                            _this.events.publish('widgets:deleteWidget', widgetID);
                                            _this.deleteSection(index, type);
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomepageSettingPage.prototype.deleteSection = function (index, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.presentLoading();
                        console.log('delete', type, index);
                        if (type == 'web') {
                            this.pageData.splice(index, 1);
                        }
                        else {
                            this.appSections.splice(index, 1);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.angularFirestore.collection('pages').doc(this.pageId).update({ 'sections': this.pageData })];
                    case 2:
                        _a.sent();
                        if (this.loading) {
                            this.loading.dismiss();
                        }
                        this.presentAlert('Page Save Successfully');
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        console.log(error_4);
                        this.presentAlert('Some error occured, please try again');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomepageSettingPage.prototype.changeName = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var updatedPageData, slugName, sameSlugExists, error_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        updatedPageData = {
                            name: this.pageName
                        };
                        if (!this.isUniversal) return [3 /*break*/, 2];
                        slugName = this.sharedService.createSlugName(this.slug.name);
                        return [4 /*yield*/, this.sharedService.sameSlugExists('pages', this.pageId, slugName)];
                    case 1:
                        sameSlugExists = _a.sent();
                        console.log('sameSlug:', sameSlugExists);
                        if (sameSlugExists) {
                            this.presentAlert('Same slug already exists, please try with another slug name');
                            return [2 /*return*/];
                        }
                        else {
                            updatedPageData['slug'] = {
                                name: slugName,
                                updatedAt: new Date(),
                                updatedBy: 'admin'
                            };
                        }
                        _a.label = 2;
                    case 2:
                        this.presentLoading();
                        return [4 /*yield*/, this.angularFirestore.collection('pages').doc(this.pageId).update(updatedPageData)];
                    case 3:
                        _a.sent();
                        if (this.loading) {
                            this.loading.dismiss();
                        }
                        this.presentAlert('Name saved successfully');
                        return [3 /*break*/, 5];
                    case 4:
                        error_5 = _a.sent();
                        console.dir(error_5);
                        if (this.loading) {
                            this.loading.dismiss();
                        }
                        this.presentAlert('Some error occured, please try again');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HomepageSettingPage.prototype.addRegion = function (e, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        this.pageData[index].regionId = e.target.value;
                        return [4 /*yield*/, this.angularFirestore.collection('pages').doc(this.pageId).update({ 'sections': this.pageData })];
                    case 2:
                        _a.sent();
                        if (this.loading) {
                            this.loading.dismiss();
                        }
                        this.presentAlert('Region saved successfully!');
                        return [2 /*return*/];
                }
            });
        });
    };
    HomepageSettingPage.prototype.removeSubscriptions = function () {
        this.events.unsubscribe('multi-region:publishActiveStatus');
        this.events.unsubscribe('multi-region:publishAllActiveRegions');
    };
    HomepageSettingPage.prototype.presentAlert = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: msg,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomepageSettingPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Please Wait',
                                duration: 2000,
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomepageSettingPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] }
    ]; };
    HomepageSettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage-setting',
            template: __webpack_require__(/*! raw-loader!./homepage-setting.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/homepage-setting/homepage-setting.page.html"),
            styles: [__webpack_require__(/*! ./homepage-setting.page.scss */ "./src/app/pages/homepage-setting/homepage-setting.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], HomepageSettingPage);
    return HomepageSettingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-homepage-setting-homepage-setting-module-es5.js.map