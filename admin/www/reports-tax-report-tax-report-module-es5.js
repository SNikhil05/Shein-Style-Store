(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-tax-report-tax-report-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/reports/tax-report/tax-report.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reports/tax-report/tax-report.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar mode=\"ios\">\r\n      <ion-menu-button slot=\"start\" class=\"menu-btn\">\r\n        <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\r\n      </ion-menu-button>\r\n      <div class=\"header-logo\" slot=\"start\"><img src=\"../../../assets/img/shop-logo.png\"></div>\r\n      <ion-title>Tax Report</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <div class=\"main-container no-padding\">\r\n      <div class=\"verticle-tab-container\">\r\n        <div class=\"tabs-buttons\">\r\n          <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('sales-report')\">Sales</ion-button>\r\n          <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('category-report')\">Category</ion-button>\r\n          <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('products-report')\">Products</ion-button>\r\n          <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('brands-report')\">Brands</ion-button>\r\n          <!-- <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('services-report')\">Services</ion-button> -->\r\n          <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('users-report')\">Users</ion-button>\r\n          <ion-button expand=\"full\"  class=\"btn-1 tab-btn\" (click)=\"goToPage('tax-report')\">Tax</ion-button>\r\n          <!-- <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('area-report')\">Area</ion-button> -->\r\n          <!-- <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('vendor-report')\" *ngIf=\"vendorReport\">Vendors</ion-button> -->\r\n          <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('coupon-report')\">Coupons</ion-button>\r\n          <!-- <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('referral-report')\">Referral</ion-button> -->\r\n          </div>\r\n        <div class=\"tabs-content\" >\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-item>\r\n                  <ion-label>Start Date</ion-label>\r\n                  <ion-datetime displayFormat=\"DD MM YYYY\" [max]=\"endDate\" placeholder=\"Select Date\" [(ngModel)]=\"startDate\" (ionChange)=\"setStartDate()\"></ion-datetime>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-item>\r\n                  <ion-label>End Date</ion-label>\r\n                  <ion-datetime displayFormat=\"DD MM YYYY\" [min]=\"startDate\" placeholder=\"Select Date\" [(ngModel)]=\"endDate\" (ionChange)=\"setEndDate()\"></ion-datetime>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col style=\"text-align: center\">\r\n                <ion-button style=\"margin-right: 10px\" (click)=\"getTaxReport()\">Generate Report</ion-button>\r\n                <ion-button color=\"tertiary\" (click)=\"exportReport()\">Export Generated Report</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n          <ng-container>\r\n            <div class=\"details\">\r\n              <ion-grid fixed>\r\n                <ion-row>\r\n                  <ion-col size=\"12\" class=\"ion-text-center\">\r\n                    <h3>Total Tax</h3>\r\n                    <p>{{totalTax | currency: currencyCode:true}}</p>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n          <div class=\"report-table\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th class=\"name\">Customer</th>\r\n                  <th class=\"sales\">GST no</th>\r\n                  <th class=\"items\">Tax</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of finalTaxReport; let i=index\">\r\n                  <td>{{item.userName}}</td>\r\n                  <td *ngIf=\"item.customerGstNo.length>0\">{{item.customerGstNo}}</td>\r\n                  <td *ngIf=\"item.customerGstNo.length==0\">NA</td>\r\n                  <td>{{item.defaultGst | currency: currencyCode:true}}</td>\r\n                </tr>\r\n                \r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </ng-container>\r\n        <ng-template #noData>\r\n          <p>No Data Avilable</p>\r\n        </ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/reports/tax-report/tax-report.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/reports/tax-report/tax-report.module.ts ***!
  \*********************************************************/
/*! exports provided: TaxReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxReportPageModule", function() { return TaxReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tax_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tax-report.page */ "./src/app/reports/tax-report/tax-report.page.ts");







var routes = [
    {
        path: '',
        component: _tax_report_page__WEBPACK_IMPORTED_MODULE_6__["TaxReportPage"]
    }
];
var TaxReportPageModule = /** @class */ (function () {
    function TaxReportPageModule() {
    }
    TaxReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tax_report_page__WEBPACK_IMPORTED_MODULE_6__["TaxReportPage"]]
        })
    ], TaxReportPageModule);
    return TaxReportPageModule;
}());



/***/ }),

/***/ "./src/app/reports/tax-report/tax-report.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/reports/tax-report/tax-report.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".report-table table thead th {\n  color: #fff;\n}\n.report-table table tbody td {\n  padding: 12px;\n  color: #111;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy90YXgtcmVwb3J0L0M6XFxCV0ktQURNSU5TXFxTaGVpbi1BZG1pbi1Db2RlL3NyY1xcYXBwXFxyZXBvcnRzXFx0YXgtcmVwb3J0XFx0YXgtcmVwb3J0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVwb3J0cy90YXgtcmVwb3J0L3RheC1yZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdZO0VBQ0ksV0FBQTtBQ0ZoQjtBRE1ZO0VBQUcsYUFBQTtFQUFjLFdBQUE7QUNGN0IiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnRzL3RheC1yZXBvcnQvdGF4LXJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwb3J0LXRhYmxle1xyXG4gICAgdGFibGV7XHJcbiAgICAgICAgdGhlYWR7XHJcbiAgICAgICAgICAgIHRoe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGJvZHl7XHJcbiAgICAgICAgICAgIHRke3BhZGRpbmc6IDEycHg7Y29sb3I6ICMxMTE7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5yZXBvcnQtdGFibGUgdGFibGUgdGhlYWQgdGgge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5yZXBvcnQtdGFibGUgdGFibGUgdGJvZHkgdGQge1xuICBwYWRkaW5nOiAxMnB4O1xuICBjb2xvcjogIzExMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/reports/tax-report/tax-report.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/reports/tax-report/tax-report.page.ts ***!
  \*******************************************************/
/*! exports provided: TaxReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxReportPage", function() { return TaxReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var export_to_csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! export-to-csv */ "./node_modules/export-to-csv/build/index.js");
/* harmony import */ var export_to_csv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(export_to_csv__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/config/config.service */ "./src/app/services/config/config.service.ts");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









var TaxReportPage = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function TaxReportPage(router, configService, events, loadingController, alertCtrl, storage, sharedService) {
        this.router = router;
        this.configService = configService;
        this.events = events;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.sharedService = sharedService;
        this.totalTax = 0;
        this.finalTaxReport = [];
        this.vendorReport = false;
    }
    TaxReportPage.prototype.goToPage = function (page) {
        this.router.navigate([page]);
    };
    TaxReportPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.sharedService.getMultiVendorStatus()];
                    case 1:
                        _a.vendorReport = _b.sent();
                        this.currencyCode = this.configService.environment.currencyCode;
                        return [2 /*return*/];
                }
            });
        });
    };
    TaxReportPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dateObj;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sharedService.getReportDate()];
                    case 1:
                        dateObj = _a.sent();
                        this.startDate = dateObj.startDate;
                        this.endDate = dateObj.endDate;
                        this.initializeSubscriptions();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaxReportPage.prototype.ionViewWillLeave = function () {
        this.removeSubscriptions();
    };
    TaxReportPage.prototype.initializeSubscriptions = function () {
        var _this = this;
        this.events.subscribe('reports:getTaxReportSuccess', function (taxReports) {
            _this.totalTax = 0;
            _this.finalTaxReport = [];
            taxReports.forEach(function (report) {
                if (!_this.addIndividualUserTax(report) && report.hasOwnProperty('defaultGst')) {
                    _this.finalTaxReport.push(report);
                }
                if (!Number.isNaN(report.defaultGst) && report.hasOwnProperty('defaultGst')) {
                    _this.totalTax += report.defaultGst;
                }
            });
            _this.loading.dismiss();
        });
        this.events.subscribe('reports:getTaxReportFailure', function (errMessage) {
            console.log('deatils Failure', errMessage);
        });
        this.getTaxReport();
    };
    TaxReportPage.prototype.removeSubscriptions = function () {
        this.events.unsubscribe('reports:getTaxReportSuccess');
        this.events.unsubscribe('reports:getTaxReportFailure');
    };
    TaxReportPage.prototype.setStartDate = function () {
        this.storage.set('reportStartDate', this.startDate);
    };
    TaxReportPage.prototype.setEndDate = function () {
        this.storage.set('reportEndDate', this.endDate);
    };
    TaxReportPage.prototype.getTaxReport = function () {
        var startingDate = new Date(this.startDate);
        var endingDate = new Date(this.endDate);
        var diffInMs = Math.abs(endingDate.getTime() - startingDate.getTime());
        var differenceInDays = diffInMs / (1000 * 60 * 60 * 24);
        var startYrMonth = moment__WEBPACK_IMPORTED_MODULE_8__(startingDate).format('YYYY-MM');
        var endYrMonth = moment__WEBPACK_IMPORTED_MODULE_8__(endingDate).format('YYYY-MM');
        if (startYrMonth === endYrMonth) {
            this.events.publish('reports:getTaxReport', startingDate, endingDate);
        }
        else {
            if (differenceInDays <= 30) {
                this.events.publish('reports:getTaxReport', startingDate, endingDate);
            }
            else {
                this.showAlert('End date cannot be more than 1 month of start Date');
            }
        }
    };
    TaxReportPage.prototype.exportReport = function () {
        var data = [];
        this.finalTaxReport.forEach(function (element) {
            var obj = {
                customer: element.userName,
                gstNo: element.customerGstNo ? element.customerGstNo : 'NA',
                tax: element.defaultGst.toFixed(2),
            };
            data.push(obj);
        });
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalSeparator: '.',
            showLabels: true,
            showTitle: true,
            title: 'Tax Report',
            useTextFile: false,
            useBom: true,
            useKeysAsHeaders: false,
            headers: ['Customer', 'GST Number', 'Tax']
        };
        var csvExporter = new export_to_csv__WEBPACK_IMPORTED_MODULE_4__["ExportToCsv"](options);
        csvExporter.generateCsv(data);
    };
    TaxReportPage.prototype.addIndividualUserTax = function (report) {
        if (this.finalTaxReport.length > 0) {
            for (var _i = 0, _a = this.finalTaxReport; _i < _a.length; _i++) {
                var obj = _a[_i];
                if (obj.userId === report.userId) {
                    // if(!Number.isNaN(report.defaultGst) && report.hasOwnProperty('defaultGst') && obj.hasOwnProperty('defaultGst')){
                    obj.defaultGst += report.defaultGst;
                    return true;
                    // }
                }
            }
        }
        return false;
    };
    TaxReportPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Please wait...',
                                duration: 4000
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
    TaxReportPage.prototype.showAlert = function (message) {
        this.alertCtrl.create({ header: 'Alert', message: message, buttons: ['Okay'] })
            .then(function (alertEl) { return alertEl.present(); });
    };
    TaxReportPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] }
    ]; };
    TaxReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tax-report',
            template: __webpack_require__(/*! raw-loader!./tax-report.page.html */ "./node_modules/raw-loader/index.js!./src/app/reports/tax-report/tax-report.page.html"),
            styles: [__webpack_require__(/*! ./tax-report.page.scss */ "./src/app/reports/tax-report/tax-report.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
    ], TaxReportPage);
    return TaxReportPage;
}());



/***/ })

}]);
//# sourceMappingURL=reports-tax-report-tax-report-module-es5.js.map