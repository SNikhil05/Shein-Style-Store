(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-widgets-edit-form-edit-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/widgets/edit-form/edit-form.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/widgets/edit-form/edit-form.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"custom-back-button\"\r\n        defaultHref=\"homepage-setting\"></ion-back-button>\r\n    </ion-buttons>\r\n    <div class=\"header-logo\"\r\n      slot=\"start\"><img src=\"../../../assets/img/shop-logo.png\"></div>\r\n    <ion-title text-center>{{mode=='new'? 'create new' : 'edit'}} Form</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"main-container\">\r\n    <div style=\"text-align: center;\">\r\n      <ion-button (click)=\"saveWidget()\"\r\n        color=\"success\"\r\n        fill=\"outline\"\r\n        shape=\"round\">\r\n        Save Form\r\n      </ion-button>&nbsp;&nbsp;\r\n      <ion-button (click)=\"previewForm()\"\r\n        color=\"secondary\"\r\n        fill=\"outline\"\r\n        shape=\"round\">\r\n        Preview Form\r\n      </ion-button>\r\n    </div>\r\n    <br><br>\r\n    <ion-col style=\"display: flex;align-items: center\">\r\n      <ion-label>Allow multiple submissions for form </ion-label>&nbsp;&nbsp;\r\n      <div class=\"toggle-btn\">\r\n        <label class=\"switch\">\r\n          <input color=\"primary\"\r\n            type=\"checkbox\"\r\n            [checked]=\"multipleSubmissions\"\r\n            (click)=\"changeMultipleStatus()\">\r\n          <span class=\"slider round\"></span>\r\n        </label>\r\n      </div>&nbsp;&nbsp;\r\n    </ion-col>\r\n    <br>\r\n    <ion-col size=\"12\">\r\n      <div class=\"input-wrap\">\r\n        <ion-label>Form Title</ion-label>\r\n        <ion-input class=\"form-input\"\r\n          [(ngModel)]=\"formTitle\"></ion-input>\r\n      </div>\r\n    </ion-col>\r\n\r\n    <!-- Form Type Selection -->\r\n    <ion-col size=\"12\">\r\n      <label for=\"\">Select Form Type</label>&nbsp;&nbsp;\r\n      <select class=\"selectFrom\" [(ngModel)]=\"formType\">\r\n        <option value=\"vendor\">vendor</option>\r\n        <option value=\"others\">Others</option>\r\n      </select>\r\n    </ion-col>\r\n    <!-- Form Type Selection -->\r\n\r\n    <br><br>\r\n    <ion-col size=\"12\">\r\n      <div class=\"flex-space-between\">\r\n        <div>\r\n          <ion-label>Banner Image</ion-label>\r\n          <ion-text color=\"danger\">\r\n            <p style=\"margin-top: 5px\">Image size for best view : 1366x400 Px\r\n            </p>\r\n          </ion-text>\r\n        </div>\r\n        <div class=\"upload-btn-wrapper\">\r\n          <button\r\n            [disabled]=\"widgetData && widgetData.banner && widgetData.banner.url\"\r\n            class=\"upload-btn btn-1 i-start\"\r\n            (click)=\"uploadImage($event.target.files)\"> <i\r\n              class=\"flaticon-null-16\"></i>Upload Banner Image</button>\r\n          <!-- <input  [disabled]=\"widgetData && widgetData.banner && widgetData.banner.url\" type=\"file\" name=\"myfile\" (change)=\"uploadImage($event.target.files)\" /> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"img-container\">\r\n        <div class=\"no-img\"\r\n          *ngIf=\"widgetData && !widgetData.banner\">\r\n          <p>No Banner image</p>\r\n        </div>\r\n        <div *ngIf=\"widgetData && widgetData.banner\">\r\n          <div class=\"img-wrap\"\r\n            *ngIf=\"widgetData.banner.url\">\r\n            <img class=\"category-img\"\r\n              [src]=\"widgetData.banner.url\" />\r\n            <div class=\"overlay\">\r\n              <ion-button class=\"btn-2 remove\"\r\n                shape=\"round\"\r\n                fill=\"clear\"\r\n                color=\"danger\"\r\n                (click)=\"removeImage()\">\r\n                <ion-icon name=\"trash\"\r\n                  slot=\"icon-only\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n    <br><br>\r\n    <ion-button (click)=\"addInput()\">\r\n      Add form input\r\n    </ion-button>\r\n    <br><br>\r\n    <div *ngIf=\"inputs.length > 0\"\r\n      class=\"m-t-10\">\r\n      <ion-grid class=\"ion-no-padding data-table ion-text-center\">\r\n        <ion-row class=\"ion-text-capitalize\"\r\n          style=\"background: lightgray\">\r\n          <ion-col>Reorder</ion-col>\r\n          <ion-col>Name</ion-col>\r\n          <ion-col>Type</ion-col>\r\n          <ion-col>Required</ion-col>\r\n          <ion-col>Remove</ion-col>\r\n        </ion-row>\r\n        <ion-reorder-group (ionItemReorder)=\"onReorderInputs($event)\"\r\n          disabled=\"false\"\r\n          class=\"ion-no-padding\">\r\n          <ion-row *ngFor=\"let input of inputs; let i=index;\">\r\n            <ion-col class=\"reorder\">\r\n              <ion-reorder>\r\n                <div class=\"flat-sort\">\r\n                  <i class=\"flaticon-menu\"></i>\r\n                </div>\r\n              </ion-reorder>\r\n            </ion-col>\r\n            <ion-col>\r\n              {{input.name}}\r\n            </ion-col>\r\n            <ion-col>\r\n              {{input.type}}\r\n            </ion-col>\r\n            <ion-col>\r\n              {{input.required}}\r\n            </ion-col>\r\n            <ion-col (click)=\"removeInput(i)\">\r\n              <i class=\"flaticon-null-17\"></i>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-reorder-group>\r\n      </ion-grid>\r\n    </div>\r\n    <br><br>\r\n    <ion-col size=\"12\">\r\n      <div class=\"input-wrap\">\r\n        <ion-label>Submit button name</ion-label>\r\n        <ion-input class=\"form-input\"\r\n          [(ngModel)]=\"buttonName\"></ion-input>\r\n      </div>\r\n    </ion-col>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/widgets/edit-form/edit-form.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/widgets/edit-form/edit-form.module.ts ***!
  \*************************************************************/
/*! exports provided: EditFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormPageModule", function() { return EditFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-form.page */ "./src/app/pages/widgets/edit-form/edit-form.page.ts");







const routes = [
    {
        path: '',
        component: _edit_form_page__WEBPACK_IMPORTED_MODULE_6__["EditFormPage"]
    }
];
let EditFormPageModule = class EditFormPageModule {
};
EditFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_edit_form_page__WEBPACK_IMPORTED_MODULE_6__["EditFormPage"]]
    })
], EditFormPageModule);



/***/ }),

/***/ "./src/app/pages/widgets/edit-form/edit-form.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/widgets/edit-form/edit-form.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-input {\n  border: 1px solid gray;\n  background: var(--ion-color-light);\n  margin-top: 12px;\n  border-radius: 8px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n\nion-grid ion-col {\n  border: 1px solid gray;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.selectFrom {\n  padding: 8px;\n  margin-top: 1rem;\n  border-radius: 8px;\n  border: 1px solid gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2lkZ2V0cy9lZGl0LWZvcm0vQzpcXEJXSS1BRE1JTlNcXFNoZWluLUFkbWluLUNvZGUvc3JjXFxhcHBcXHBhZ2VzXFx3aWRnZXRzXFxlZGl0LWZvcm1cXGVkaXQtZm9ybS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dpZGdldHMvZWRpdC1mb3JtL2VkaXQtZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FESUk7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNETjs7QURLRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dpZGdldHMvZWRpdC1mb3JtL2VkaXQtZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1pbnB1dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICB9XHJcblxyXG5cclxuICBpb24tZ3JpZCB7XHJcbiAgICBpb24tY29se1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHhcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuICAuc2VsZWN0RnJvbXtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIH0iLCIuZm9ybS1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xufVxuXG5pb24tZ3JpZCBpb24tY29sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uc2VsZWN0RnJvbSB7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/widgets/edit-form/edit-form.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/widgets/edit-form/edit-form.page.ts ***!
  \***********************************************************/
/*! exports provided: EditFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormPage", function() { return EditFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var src_app_pages_widgets_edit_form_add_input_add_input_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/widgets/edit-form/add-input/add-input.page */ "./src/app/pages/widgets/edit-form/add-input/add-input.page.ts");
/* harmony import */ var src_app_pages_widgets_edit_form_preview_form_preview_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/widgets/edit-form/preview-form/preview-form.page */ "./src/app/pages/widgets/edit-form/preview-form/preview-form.page.ts");
/* harmony import */ var src_app_components_image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/image-editor/image-editor.component */ "./src/app/components/image-editor/image-editor.component.ts");









let EditFormPage = class EditFormPage {
    constructor(events, router, alertController, loadingController, activatedRoute, modalController, angularFirestore) {
        this.events = events;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.activatedRoute = activatedRoute;
        this.modalController = modalController;
        this.angularFirestore = angularFirestore;
        this.mode = 'new';
        this.widgetData = {
            banner: { url: '' }
        };
        this.pageId = '';
        this.inputs = [];
        this.multipleSubmissions = false;
        this.formType = 'others';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.activatedRoute.queryParams.subscribe((params) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (params && params.ID) {
                console.log('here', params.ID);
                this.widgetId = params.ID;
                this.events.publish('widgets:getWidgetData', this.widgetId);
            }
            if (params && params.pageId) {
                this.pageId = params.pageId;
            }
            if (params && params.type) {
                this.type = params.type;
            }
        }));
        this.initializeSubscriptions();
    }
    initializeSubscriptions() {
        this.events.subscribe('widgets:publishWidgetDataSuccess', (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.widgetData = data;
            this.mode = 'edit';
            if (this.widgetData && this.widgetData.formTitle) {
                this.formTitle = this.widgetData.formTitle;
            }
            if (this.widgetData && this.widgetData.buttonName) {
                this.buttonName = this.widgetData.buttonName;
            }
            if (this.widgetData && this.widgetData.inputs) {
                this.inputs = this.widgetData.inputs;
            }
            if (this.widgetData && this.widgetData.multipleSubmissions) {
                this.multipleSubmissions = this.widgetData.multipleSubmissions;
            }
            this.formType = "formType" in this.widgetData ? this.widgetData.formType : this.formType;
            if (this.loading) {
                this.loading.dismiss();
            }
        }));
        this.events.subscribe('widgets:addFormSuccess', (Id) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loading) {
                this.loading.dismiss();
            }
            this.presentAlert('Form saved successfully');
            this.mode = 'edit';
            this.router.navigate(['forms']);
            // this.widgetId = Id;
            // let widget = {
            //   widgetID: this.widgetId,
            //   widgetType: this.type,
            //   location: "all"
            // }
            // await this.angularFirestore.collection('pages').doc(this.pageId).update({ sections: firebase.firestore.FieldValue.arrayUnion(widget) });
            // this.presentAlert('Form saved successfully')
            // this.mode = 'edit';
            // if (this.loading) {
            //   this.loading.dismiss();
            // }
        }));
        this.events.subscribe('widgets:addFormError', () => {
            if (this.loading) {
                this.loading.dismiss();
            }
            this.presentAlert('Save form failed, please try again');
        });
    }
    saveWidget() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.formTitle) {
                this.presentAlert('Please fill the form title');
            }
            else if (!this.buttonName) {
                this.presentAlert('Please fill the button name');
            }
            else {
                if (this.mode == 'new') {
                    this.type = 'form';
                    this.presentLoading();
                    let widgetData = {
                        formTitle: this.formTitle,
                        buttonName: this.buttonName,
                        inputs: this.inputs,
                        banner: this.widgetData.banner,
                        type: this.type,
                        multipleSubmissions: this.multipleSubmissions,
                        formType: this.formType,
                    };
                    this.events.publish('widgets:saveForm', widgetData);
                }
                else {
                    this.presentLoading();
                    let widgetData = {
                        formTitle: this.formTitle,
                        buttonName: this.buttonName,
                        inputs: this.inputs,
                        banner: this.widgetData.banner,
                        type: 'form',
                        multipleSubmissions: this.multipleSubmissions,
                        formType: this.formType,
                    };
                    try {
                        yield this.angularFirestore.collection('widgets').doc(this.widgetId).update(widgetData);
                        if (this.loading) {
                            this.loading.dismiss();
                        }
                        this.presentAlert('Form updated successfully');
                    }
                    catch (error) {
                        console.log(error);
                        if (this.loading) {
                            this.loading.dismiss();
                        }
                        this.presentAlert('Form update failed');
                    }
                }
            }
        });
    }
    uploadImage(files) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_7__["ImageEditorComponent"],
                cssClass: 'custom-img-editor',
                componentProps: {
                    aspectRatioWidthVal: 3.42,
                    aspectRatioHeightVal: 1,
                },
            });
            yield modal.present();
            modal.onDidDismiss().then(res => {
                this.widgetData.banner.url = res.data || '';
            });
            //console.log(type);
            // for (let i = 0; i < files.length; i++) {
            //   let reader = new FileReader();
            //   reader.readAsDataURL(files.item(i))
            //   reader.onload = (event:any) => { // called once readAsDataURL is completed
            //     let base64Image:any = event.target.result;
            //     this.widgetData.banner.url = base64Image;
            //     console.log(this.widgetData.banner.url)
            //   }
            // }
        });
    }
    removeImage() {
        this.widgetData.banner.url = '';
    }
    addInput() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_pages_widgets_edit_form_add_input_add_input_page__WEBPACK_IMPORTED_MODULE_5__["AddInputPage"],
                cssClass: 'custom-modal'
            });
            modal.onDidDismiss()
                .then((res) => {
                if (res.data) {
                    this.inputs.push(res.data);
                    console.log(this.inputs);
                }
            });
            yield modal.present();
        });
    }
    previewForm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_pages_widgets_edit_form_preview_form_preview_form_page__WEBPACK_IMPORTED_MODULE_6__["PreviewFormPage"],
                cssClass: 'custom-modal',
                componentProps: {
                    'formData': {
                        formTitle: this.formTitle,
                        buttonName: this.buttonName,
                        inputs: this.inputs,
                        banner: this.widgetData.banner
                    }
                }
            });
            yield modal.present();
        });
    }
    removeInput(i) {
        this.inputs.splice(i, 1);
    }
    onReorderInputs(event) {
        const draggedItem = this.inputs.splice(event.detail.from, 1)[0];
        this.inputs.splice(event.detail.to, 0, draggedItem);
        event.detail.complete();
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please Wait...'
            });
            yield this.loading.present();
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
    changeMultipleStatus() {
        this.multipleSubmissions = !this.multipleSubmissions;
    }
    ionViewWillLeave() {
        this.removeSubscriptions();
    }
    removeSubscriptions() {
        this.events.unsubscribe('widgets:publishWidgetDataSuccess');
        this.events.unsubscribe('widgets:widgetAddedSuccess');
        this.events.unsubscribe('widgets:addFormSuccess');
        this.events.unsubscribe('widgets:addFormError');
    }
};
EditFormPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
EditFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-form',
        template: __webpack_require__(/*! raw-loader!./edit-form.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/widgets/edit-form/edit-form.page.html"),
        styles: [__webpack_require__(/*! ./edit-form.page.scss */ "./src/app/pages/widgets/edit-form/edit-form.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
], EditFormPage);



/***/ })

}]);
//# sourceMappingURL=pages-widgets-edit-form-edit-form-module-es2015.js.map