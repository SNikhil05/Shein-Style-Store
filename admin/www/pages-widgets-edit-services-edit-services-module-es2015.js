(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-widgets-edit-services-edit-services-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/widgets/edit-services/edit-services.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/widgets/edit-services/edit-services.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"custom-back-button\" defaultHref=\"homepage-setting\"></ion-back-button>\r\n    </ion-buttons>\r\n    <div class=\"header-logo\" slot=\"start\"><img src=\"../../../assets/img/shop-logo.png\"></div>\r\n    <ion-title text-center>Edit Services</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"main-container\">\r\n\r\n    <ion-col size=\"12\">\r\n      <div class=\"input-wrap\">\r\n        <ion-label>Section Name</ion-label>\r\n        <ion-input class=\"form-input\" [(ngModel)]=\"sectionName\"></ion-input>\r\n      </div>\r\n    </ion-col>\r\n\r\n    <div *ngIf=\"isLoading; else dataLoaded;\" class=\"spinner\">\r\n      <ion-spinner name=\"dots\"></ion-spinner>\r\n    </div>\r\n  \r\n    <ng-template #dataLoaded>\r\n      <div *ngIf=\"!dataList.length\">\r\n        <p class=\"no-data-txt\">No data</p>\r\n      </div>\r\n  \r\n      <div *ngIf=\"dataList.length > 0\">\r\n        <ion-list class=\"s-c-list\" *ngFor=\"let data of dataList; let i=index\">\r\n          <ion-item lines=\"none\" (click)=\"selectParent(i)\">\r\n            <ion-label>{{data.name}}</ion-label>\r\n            <ion-checkbox slot=\"end\" [checked]=\"data.active\"></ion-checkbox>\r\n          </ion-item>\r\n          <hr class=\"line\">\r\n        </ion-list>\r\n      </div>\r\n      <ion-button (click)=\"onClickSave()\">\r\n        Save\r\n      </ion-button>\r\n    </ng-template>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/widgets/edit-services/edit-services.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/widgets/edit-services/edit-services.module.ts ***!
  \*********************************************************************/
/*! exports provided: EditServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditServicesPageModule", function() { return EditServicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-services.page */ "./src/app/pages/widgets/edit-services/edit-services.page.ts");







const routes = [
    {
        path: '',
        component: _edit_services_page__WEBPACK_IMPORTED_MODULE_6__["EditServicesPage"]
    }
];
let EditServicesPageModule = class EditServicesPageModule {
};
EditServicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_edit_services_page__WEBPACK_IMPORTED_MODULE_6__["EditServicesPage"]]
    })
], EditServicesPageModule);



/***/ }),

/***/ "./src/app/pages/widgets/edit-services/edit-services.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/widgets/edit-services/edit-services.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dpZGdldHMvZWRpdC1zZXJ2aWNlcy9lZGl0LXNlcnZpY2VzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/widgets/edit-services/edit-services.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/widgets/edit-services/edit-services.page.ts ***!
  \*******************************************************************/
/*! exports provided: EditServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditServicesPage", function() { return EditServicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_label_label_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/label/label.service */ "./src/app/services/label/label.service.ts");
/* harmony import */ var src_app_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/filters/filters.service */ "./src/app/services/filters/filters.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let EditServicesPage = class EditServicesPage {
    constructor(alertController, events, modalController, labelService, loadingController, filtersService, router, activatedRoute, angularFirestore) {
        this.alertController = alertController;
        this.events = events;
        this.modalController = modalController;
        this.labelService = labelService;
        this.loadingController = loadingController;
        this.filtersService = filtersService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.angularFirestore = angularFirestore;
        this.addedFilters = {};
        this.dataList = [];
        this.isLoading = true;
        this.type = 'services';
        this.linkedList = [];
        this.selectList = [];
        this.pageId = '';
    }
    ionViewWillEnter() {
        this.activatedRoute.queryParams.subscribe((params) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (params && params.ID && params.index) {
                this.serviceId = params.ID;
                this.sectionIndex = params.index;
            }
            if (params && params.pageId) {
                this.pageId = params.pageId;
            }
        }));
        this.initializeSubscriptions();
    }
    ionViewWillLeave() {
        this.removeSubscriptions();
    }
    removeSubscriptions() {
        this.events.unsubscribe('widgets:addServicesSuccess');
        this.events.unsubscribe('widgets:publishWidgetDataSuccess');
        this.events.unsubscribe('widgets:serviceUpdateSuccess');
    }
    initializeSubscriptions() {
        this.events.subscribe('widgets:addServicesSuccess', () => {
            this.presentAlert('Section created successfully');
            this.router.navigate(['homepage-setting']);
        });
        this.events.subscribe('widgets:serviceUpdateSuccess', () => {
            this.presentAlert('Section updated successfully');
            this.router.navigate(['homepage-setting']);
        });
        this.events.subscribe('widgets:publishWidgetDataSuccess', (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let sections = yield this.angularFirestore.collection('pages').doc(this.pageId).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).toPromise();
            if (sections && sections.sections) {
                this.sections = sections.sections;
                this.sectionName = sections.sections[this.sectionIndex].sectionName;
            }
            this.dataList.forEach(element => {
                if (data.serviceList.indexOf(element.id) > -1) {
                    element.active = true;
                    this.selectList.push(element.id);
                }
            });
            if (this.loading) {
                this.loading.dismiss();
            }
        }));
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.SELECT_CATEGORIES_LABELS = this.labelService.labels['SELECT_CATEGORIES'];
            this.SHARED_LABELS = this.labelService.labels['SHARED'];
            let dbList = [];
            if (this.type === 'services') {
                dbList = yield this.filtersService.getServices();
            }
            if (this.linkedList.length) {
                dbList.map(parent => {
                    if (this.linkedList.includes(parent.id)) {
                        parent.active = true;
                    }
                    if (parent.sublist.length) {
                        parent.sublist.map(child => {
                            if (this.linkedList.includes(child.id)) {
                                child.active = true;
                            }
                        });
                    }
                });
            }
            this.dataList = dbList;
            console.log('this.dataList', this.dataList);
            this.isLoading = false;
            if (this.serviceId) {
                this.presentLoading();
                this.events.publish('widgets:getWidgetData', this.serviceId);
            }
        });
    }
    closeModal() {
        this.modalController.dismiss();
    }
    toggleParentCheck(i) {
        this.dataList[i].active = !this.dataList[i].active;
    }
    selectParent(i) {
        this.dataList[i].active = !this.dataList[i].active;
        if ((this.selectList.indexOf(this.dataList[i].id) > -1) == false) {
            this.selectList.push(this.dataList[i].id);
        }
        else if (this.selectList.indexOf(this.dataList[i].id) > -1) {
            this.selectList.splice(this.selectList.indexOf(this.dataList[i].id), 1);
        }
    }
    onClickSave() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.sectionName) {
                this.presentAlert('Please Fill the name Properly');
            }
            else if (this.sectionName.length < 5) {
                this.presentAlert('Name should be atleast 5 characters');
            }
            else {
                let indexArray = [];
                for (let i = 0; i < this.selectList.length; i++) {
                    indexArray.push(this.dataList.findIndex(ele => ele.id == this.selectList[i]));
                }
                this.bubbleSort(indexArray);
                if (this.serviceId) {
                    this.sections[this.sectionIndex].sectionName = this.sectionName;
                    yield this.angularFirestore.collection('pages').doc(this.pageId).update({ 'sections': this.sections });
                    this.events.publish('widgets:updateServices', this.serviceId, this.selectList);
                }
                else {
                    this.events.publish('widgets:addServices', this.selectList, this.sectionName, this.pageId);
                }
            }
        });
    }
    bubbleSort(arr) {
        var len = arr.length;
        for (var i = len - 1; i >= 0; i--) {
            for (var j = 1; j <= i; j++) {
                if (arr[j - 1] > arr[j]) {
                    var temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                    var temp2 = this.selectList[j - 1];
                    this.selectList[j - 1] = this.selectList[j];
                    this.selectList[j] = temp2;
                }
            }
        }
        return arr;
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
                message: 'Please Wait...',
                duration: 10000
            });
            yield this.loading.present();
        });
    }
};
EditServicesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_label_label_service__WEBPACK_IMPORTED_MODULE_3__["LabelService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_4__["FiltersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }
];
EditServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-services',
        template: __webpack_require__(/*! raw-loader!./edit-services.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/widgets/edit-services/edit-services.page.html"),
        styles: [__webpack_require__(/*! ./edit-services.page.scss */ "./src/app/pages/widgets/edit-services/edit-services.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_label_label_service__WEBPACK_IMPORTED_MODULE_3__["LabelService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_4__["FiltersService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]])
], EditServicesPage);



/***/ })

}]);
//# sourceMappingURL=pages-widgets-edit-services-edit-services-module-es2015.js.map