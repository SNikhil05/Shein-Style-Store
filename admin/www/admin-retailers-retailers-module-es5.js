(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-retailers-retailers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/retailers/retailers.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/retailers/retailers.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-menu-button slot=\"start\" class=\"menu-btn\">\r\n      <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\r\n    </ion-menu-button>\r\n    <div class=\"header-logo\" slot=\"start\"><img src=\"../../../assets/img/shop-logo.png\"></div>\r\n    <ion-title>Retailers</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"main-container\">\r\n    <div class=\"no-users\" *ngIf=\"showNoUsers\" text-center> <img src=\"assets/img/no-user.png\" alt=\"\">\r\n      <h6>No users</h6>\r\n    </div>\r\n    <!-- header -->\r\n    <div class=\"list-header\" *ngIf=\"!showNoUsers\" style=\"top: unset;\">\r\n      <ion-grid class=\"ion-no-padding\">\r\n        <ion-row>\r\n          <ion-col class=\"image\">\r\n            <p>Image</p>\r\n          </ion-col>\r\n          <ion-col class=\"user\">\r\n            <p>Name | Number</p>\r\n          </ion-col>\r\n          <ion-col class=\"last-active\">\r\n            <p>Date</p>\r\n          </ion-col>\r\n          <ion-col class=\"action\">\r\n            <p>Action</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <!-- header -->\r\n\r\n    <!-- container -->\r\n    <div class=\"list-container\">\r\n\r\n      <!-- Search Bar -->\r\n      <ion-searchbar animated [(ngModel)]='searchUser' placeholder=\"Search product...\" showCancelButton=\"focus\" mode=\"ios\">\r\n      </ion-searchbar>\r\n      \r\n      <ion-list class=\"ion-no-padding row-border\" *ngIf=\"!showLoader && !showNoUsers\">\r\n        <ng-container *ngFor=\"let user of users | filter:searchUser; let i=index\">\r\n          <ion-item *ngIf=\"user.data.subRole==='retailer'\">\r\n            <ion-grid>\r\n              <ion-row class=\"row-background\">\r\n                <ion-col class=\"image\">\r\n                  <ion-avatar class=\"profile-pic\"\r\n                    *ngIf=\"user.data.subRole==='retailer'\"> <img\r\n                      src=\"{{user.data.dP}}\" (click)=\"imageZoom(user.data.dP)\"> </ion-avatar>\r\n                </ion-col>\r\n                <ion-col class=\"user\">\r\n                  <p text-capitalize text-center>{{user.data.name}} ({{user.data.phoneNo}})</p>\r\n                </ion-col>\r\n                <ion-col class=\"last-active\">\r\n                  <p text-capitalize>{{getDateTimeFormat(user.data.lastAccessAt.toDate())}}</p>\r\n                </ion-col>\r\n                <ion-col class=\"action\">\r\n                  <ion-button class=\"btn-sml\" shape=\"round\" fill=\"outline\" (click)=\"editUserRoleAlert(user, i)\">\r\n                    Edit Role </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n        </ng-container>\r\n      </ion-list>\r\n      <ion-grid class=\"row-border ion-no-padding\" *ngIf=\"showLoader && !showNoUsers\">\r\n        <ion-row class=\"row-background\" *ngFor=\"let x of [1,2,3,4,5,6,7,8,9,10]\">\r\n          <ion-col size=\"3\">\r\n            <ion-avatar>\r\n              <ion-skeleton-text></ion-skeleton-text>\r\n            </ion-avatar>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 70%;margin-left: -10px;\"></ion-skeleton-text>\r\n            </h3>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 90%;margin-left: -5px;\"></ion-skeleton-text>\r\n            </h3>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 70%;\"></ion-skeleton-text>\r\n            </h3>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <!-- container -->\r\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreUsers($event)\">\r\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more users...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/admin/retailers/retailers.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/retailers/retailers.module.ts ***!
  \*****************************************************/
/*! exports provided: RetailersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailersPageModule", function() { return RetailersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _retailers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./retailers.page */ "./src/app/admin/retailers/retailers.page.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");








var routes = [
    {
        path: '',
        component: _retailers_page__WEBPACK_IMPORTED_MODULE_6__["RetailersPage"]
    }
];
var RetailersPageModule = /** @class */ (function () {
    function RetailersPageModule() {
    }
    RetailersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_retailers_page__WEBPACK_IMPORTED_MODULE_6__["RetailersPage"]]
        })
    ], RetailersPageModule);
    return RetailersPageModule;
}());



/***/ }),

/***/ "./src/app/admin/retailers/retailers.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/admin/retailers/retailers.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-header {\n  top: 0;\n}\n\n.list-container {\n  margin-top: 95px;\n}\n\n.image {\n  width: 100px;\n  max-width: 100px;\n}\n\n.last-active {\n  width: 100px;\n  max-width: 100px;\n}\n\n.action {\n  width: 124px;\n  max-width: 124px;\n}\n\n.user {\n  width: calc(100% - 324px);\n  max-width: calc(100% - 324px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcmV0YWlsZXJzL0M6XFxCV0ktQURNSU5TXFxTaGVpbi1BZG1pbi1Db2RlL3NyY1xcYXBwXFxhZG1pblxccmV0YWlsZXJzXFxyZXRhaWxlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9hZG1pbi9yZXRhaWxlcnMvcmV0YWlsZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE1BQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLDZCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9yZXRhaWxlcnMvcmV0YWlsZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWhlYWRlcntcclxuICAgIHRvcDogMDtcclxufVxyXG4gIFxyXG4ubGlzdC1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA5NXB4O1xyXG59XHJcbiAgXHJcbi5pbWFnZXtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5sYXN0LWFjdGl2ZXtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuICBcclxuLmFjdGlvbntcclxuICAgIHdpZHRoOiAxMjRweDtcclxuICAgIG1heC13aWR0aDogMTI0cHg7XHJcbn1cclxuICBcclxuLnVzZXJ7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzI0cHgpO1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzMjRweCk7XHJcbn0iLCIubGlzdC1oZWFkZXIge1xuICB0b3A6IDA7XG59XG5cbi5saXN0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDk1cHg7XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLmxhc3QtYWN0aXZlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuXG4uYWN0aW9uIHtcbiAgd2lkdGg6IDEyNHB4O1xuICBtYXgtd2lkdGg6IDEyNHB4O1xufVxuXG4udXNlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMjRweCk7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMzI0cHgpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/retailers/retailers.page.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/retailers/retailers.page.ts ***!
  \***************************************************/
/*! exports provided: RetailersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailersPage", function() { return RetailersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/image-modal/image-modal.page */ "./src/app/image-modal/image-modal.page.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var export_to_csv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! export-to-csv */ "./node_modules/export-to-csv/build/index.js");
/* harmony import */ var export_to_csv__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(export_to_csv__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/config/config.service */ "./src/app/services/config/config.service.ts");









var RetailersPage = /** @class */ (function () {
    function RetailersPage(events, router, sharedService, loadingController, alertController, configService, modalController) {
        this.events = events;
        this.router = router;
        this.sharedService = sharedService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.configService = configService;
        this.modalController = modalController;
        this.searchUser = '';
        this.showNoUsers = false;
        this.showLoader = true;
        this.imgUrls = [];
        this.showSearch = false;
        this.noMoreUsers = false;
        this.usrOptions = [];
        this.options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            filename: 'Users',
            decimalSeparator: '.',
            showLabels: true,
            showTitle: true,
            title: 'Exported Users',
            useTextFile: false,
            useBom: true,
            useKeysAsHeaders: true,
        };
        this.sortValue = 'lastAccessAt';
        this.createUserOrderEnabled = false;
        ////console.log('in constructor of admin-users...');
    }
    RetailersPage.prototype.editUserRoleAlert = function (user, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(user);
                        this.usrOptions = [];
                        if (user.data.role != 'manager') {
                            if (user.data.active == true) {
                                this.usrOptions.push({
                                    name: 'block-user',
                                    type: 'radio',
                                    label: 'Block User',
                                    value: 'block-user'
                                });
                            }
                            else {
                                this.usrOptions.push({
                                    name: 'unblock',
                                    type: 'radio',
                                    label: 'Unblock User',
                                    value: 'unblock'
                                });
                            }
                            if (user.data.subRole && user.data.subRole == 'retailer') {
                                this.usrOptions.push({
                                    name: 'notRetailer',
                                    type: 'radio',
                                    label: 'Remove Retailer',
                                    value: 'notRetailer'
                                });
                            }
                            else {
                                this.usrOptions.push({
                                    name: 'make-retail',
                                    type: 'radio',
                                    label: 'Make Retailer',
                                    value: 'retailer'
                                });
                            }
                        }
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'my-custom-class',
                                header: 'User Roles',
                                inputs: this.usrOptions,
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            // //console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: 'Ok',
                                        handler: function (data) {
                                            if (data) {
                                                if (data == 'block-user') {
                                                    _this.blockUserConfirm(user.id, user.data.name, i);
                                                }
                                                else if (data == 'unblock') {
                                                    _this.unblockUserConfirm(user.id, user.data.name);
                                                }
                                                else {
                                                    _this.changeRoleAlert(data, user.id, user.data.name);
                                                }
                                            }
                                            else {
                                                _this.presentAlert('Please select a role');
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
    RetailersPage.prototype.ngOnInit = function () {
    };
    RetailersPage.prototype.ionViewDidEnter = function () {
        this.createUserOrderEnabled = this.configService.environment.createUserOrder;
    };
    RetailersPage.prototype.ionViewWillEnter = function () {
        this.sortValue = 'lastAccessAt';
        this.initializeSubscriptions();
        console.log("publishing for get admin users", this.sortValue);
        this.events.publish('user:getUsersForAdminUsers', this.sortValue);
    };
    RetailersPage.prototype.getDateTimeFormat = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_5__(date).format('MMM D, YYYY hh:mm a');
    };
    RetailersPage.prototype.ngOnDestroy = function () {
    };
    RetailersPage.prototype.ionViewWillLeave = function () {
        this.showSearch = false;
        this.removeSubscriptions();
    };
    RetailersPage.prototype.initializeSubscriptions = function () {
        var _this = this;
        this.events.subscribe('user:publishUsersForAdminUsers', function (users) {
            _this.users = users;
            console.log('all users', _this.users);
            _this.showLoader = false;
            if (users && users.length) {
                _this.showNoUsers = false;
            }
            _this.sharedService.loading.dismiss();
        });
        this.events.subscribe('user:publishAllUsersForAdminUsers', function (users) {
            _this.allUsers = users;
            if (_this.loading) {
                _this.loading.dismiss();
            }
            _this.downloadUsers();
        });
        this.events.subscribe('user:noUsers', function () {
            _this.showNoUsers = true;
            _this.showLoader = false;
        });
        this.events.subscribe('user:usersForAdminProductsLimitReached', function () {
            _this.noMoreUsers = true;
        });
        this.events.subscribe('user:changeRoleSuccess', function (role) {
            _this.loading.dismiss();
            _this.presentAlert("Sucessfully made as " + role + "!");
            _this.events.publish('user:getAllUsers');
        });
        this.events.subscribe('user:userBlockedSuccessfully', function () {
            _this.loading.dismiss();
            _this.presentAlert('Sucessfully blocked the user!');
        });
        this.events.subscribe('user:userUnblockedSuccessfully', function () {
            _this.loading.dismiss();
            _this.presentAlert('Sucessfully unblocked the user!');
        });
        this.events.subscribe('user:userBlockedAndDeleteDataSuccessfully', function () {
            _this.loading.dismiss();
            _this.presentAlert('Sucessfully blocked and deleted the user!');
        });
        this.events.subscribe('user:changeSubRoleSuccess', function (msg) {
            if (_this.loading) {
                _this.loading.dismiss();
            }
            ;
            _this.presentAlert(msg);
        });
        this.events.subscribe('user:addUserByAdminSuccess', function () {
            _this.events.publish('user:getAllUsers');
            _this.addUserAlert.dismiss();
            _this.sharedService.presentToast('User added successfully');
        });
        this.events.subscribe('user:addUserByAdminFailure', function () {
            _this.sharedService.loading.dismiss();
            _this.sharedService.presentToast('Either the number is already registered or Something went wrong!');
        });
    };
    RetailersPage.prototype.addUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1, alert_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.createUserOrderEnabled == false)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                message: "Sorry, this feature is not available. Please upgrade your plan for access",
                                buttons: ['ok']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.alertController.create({
                            subHeader: 'User Details',
                            inputs: [{
                                    name: 'userName',
                                    type: 'text',
                                    placeholder: 'User Name'
                                },
                                {
                                    name: 'phoneNumber',
                                    type: 'number',
                                    placeholder: 'User Phone Number'
                                }
                            ],
                            buttons: [{
                                    text: 'cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Add',
                                    handler: function (plan) {
                                        if (!parseInt(plan.phoneNumber) || !plan.userName) {
                                            _this.sharedService.presentToast('Please fill all the details');
                                            return false;
                                        }
                                        else if (plan.phoneNumber.toString().length != 10) {
                                            _this.sharedService.presentToast('Please enter ten digit phone number');
                                            return false;
                                        }
                                        else {
                                            var userDetails = {
                                                phoneNumber: _this.configService.environment.defaultCountryCode + plan.phoneNumber,
                                                name: plan.userName
                                            };
                                            console.log('userDetails:', userDetails);
                                            _this.sharedService.presentLoading('Adding User...');
                                            _this.events.publish('user:addUserByAdmin', userDetails);
                                        }
                                    }
                                }]
                        })];
                    case 4:
                        alert_2 = _a.sent();
                        return [4 /*yield*/, alert_2.present()];
                    case 5:
                        _a.sent();
                        this.addUserAlert = alert_2;
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    RetailersPage.prototype.changeRole = function (role, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Please Wait...',
                                duration: 3000
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        if (role != "retailer" && role !== "notRetailer" && role != "reseller" && role !== "notReseller") {
                            this.events.publish('user:changeRole', role, id);
                        }
                        else {
                            this.events.publish('user:changeSubRole', role, id, this.sortValue);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RetailersPage.prototype.messageUser = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var navigationExtras;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                navigationExtras = {
                    state: {
                        userId: id
                    }
                };
                this.router.navigate(['admin-chat'], navigationExtras);
                return [2 /*return*/];
            });
        });
    };
    RetailersPage.prototype.clearSearchUser = function () {
        this.searchUser = '';
    };
    RetailersPage.prototype.loadMoreUsers = function (event) {
        ////console.log('loading more users...');
        this.events.publish('user:loadMoreUsersForAdminUsers', this.sortValue);
        setTimeout(function () {
            event.target.complete();
        }, 1000);
        if (this.noMoreUsers === true) {
            event.target.disabled = true;
        }
    };
    RetailersPage.prototype.sortUsers = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('sortValue', e.target.value);
                this.sortValue = e.target.value;
                this.events.publish('user:getUsersForAdminUsers', this.sortValue);
                return [2 /*return*/];
            });
        });
    };
    RetailersPage.prototype.presentAlert = function (desc) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: desc,
                            buttons: ['Ok']
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
    RetailersPage.prototype.blockUserConfirm = function (uid, uname, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: "Are you sure you want to block " + uname + " or block and delete data of " + uname + "?",
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        // //console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Block',
                                    handler: function () {
                                        _this.blockUser(uid);
                                    }
                                },
                                ,
                                {
                                    text: 'Block and Delete Data',
                                    handler: function () {
                                        _this.blockAndDeleteData(uid, i);
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
    RetailersPage.prototype.unblockUserConfirm = function (uid, uname) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: "Are you sure you want to unblock " + uname + "?",
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        // // //console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Unblock',
                                    handler: function () {
                                        _this.unblockUser(uid);
                                    }
                                },
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
    RetailersPage.prototype.blockUser = function (uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        this.events.publish('user:blockUser', uid);
                        return [2 /*return*/];
                }
            });
        });
    };
    RetailersPage.prototype.blockAndDeleteData = function (uid, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        this.events.publish('user:blockAndDeleteData', uid);
                        this.users.splice(i, 1);
                        return [2 /*return*/];
                }
            });
        });
    };
    RetailersPage.prototype.unblockUser = function (uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        this.events.publish('user:unblockUser', uid);
                        return [2 /*return*/];
                }
            });
        });
    };
    RetailersPage.prototype.changeRoleAlert = function (role, id, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: "Are you sure you want to make " + name + " as " + role + " ?",
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        // //console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.changeRole(role, id);
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
    RetailersPage.prototype.imageZoom = function (img) {
        this.modalController.create({
            component: src_app_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_4__["ImageModalPage"],
            componentProps: {
                imgs: [{ url: img }],
                index: 0
            }
        }).then(function (modal) { return modal.present(); });
    };
    RetailersPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Please Wait...',
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
    RetailersPage.prototype.onClickUser = function (uid, udata) {
        var navigationExtras = {
            state: {
                uid: uid,
                udata: udata
            }
        };
        this.router.navigate(['admin-allusers-details'], navigationExtras);
    };
    RetailersPage.prototype.removeSubscriptions = function () {
        this.events.unsubscribe('user:publishUsersForAdminUsers');
        this.events.unsubscribe('user:publishAllUsersForAdminUsers');
        this.events.unsubscribe('user:noUsers');
        this.events.unsubscribe('user:changeRoleSuccess');
        this.events.unsubscribe('user:usersForAdminProductsLimitReached');
        this.events.unsubscribe('user:userUnblockedSuccessfully');
        this.events.unsubscribe('user:userBlockedSuccessfully');
        this.events.unsubscribe('user:userBlockedAndDeleteDataSuccessfully');
    };
    RetailersPage.prototype.exportUsers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        this.events.publish('user:getAllUsersForAdminUsers', this.sortValue);
                        return [2 /*return*/];
                }
            });
        });
    };
    RetailersPage.prototype.downloadUsers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, csvExporter;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.options.filename = this.options.filename + ' ' + this.getDateTimeFormat(new Date);
                this.options.title = this.options.title + ' ' + this.getDateTimeFormat(new Date);
                data = [];
                this.allUsers.forEach(function (item) {
                    var user = item;
                    data.push({
                        name: user.name ? user.name : '',
                        birthday: user.birthday ? _this.getDateTimeFormat(user.birthday) : '',
                        email: user.email ? user.email : '',
                        address: user.defaultAddress && user.defaultAddress.address ? user.defaultAddress.address : '',
                        city: user.defaultAddress && user.defaultAddress.city ? user.defaultAddress.city : '',
                        state: user.defaultAddress && user.defaultAddress.state ? user.defaultAddress.state : '',
                        pincode: user.defaultAddress && user.defaultAddress.pincode ? user.defaultAddress.pincode : '',
                        phone: user.phoneNo ? user.phoneNo : '',
                        reg_date: user.createdAt && user.createdAt.toDate() ? _this.getDateTimeFormat(user.createdAt.toDate()) : '',
                        active: user.active ? 'YES' : 'NO',
                        last_Access: user.lastAccessAt && user.lastAccessAt.toDate() ? _this.getDateTimeFormat(user.lastAccessAt.toDate()) : '',
                        wallet_balance: user.wallet && user.wallet.balance ? user.wallet.balance : ''
                    });
                });
                csvExporter = new export_to_csv__WEBPACK_IMPORTED_MODULE_6__["ExportToCsv"](this.options);
                csvExporter.generateCsv(data);
                return [2 /*return*/];
            });
        });
    };
    RetailersPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    RetailersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-retailers',
            template: __webpack_require__(/*! raw-loader!./retailers.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/retailers/retailers.page.html"),
            styles: [__webpack_require__(/*! ./retailers.page.scss */ "./src/app/admin/retailers/retailers.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], RetailersPage);
    return RetailersPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-retailers-retailers-module-es5.js.map