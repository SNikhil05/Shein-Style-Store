(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-sales-report-sales-report-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/reports/sales-report/sales-report.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reports/sales-report/sales-report.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-menu-button slot=\"start\" class=\"menu-btn\">\r\n      <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\r\n    </ion-menu-button>\r\n    <div class=\"header-logo\" slot=\"start\"><img src=\"../../../assets/img/shop-logo.png\"></div>\r\n    <ion-title>Sales Report</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content> <div class=\"main-container\">\r\n  <div class=\"verticle-tab-container\">\r\n    <div class=\"tabs-buttons\">\r\n    <ion-button expand=\"full\" class=\"btn-1 tab-btn\" (click)=\"goToPage('sales-report')\">Sales</ion-button>\r\n    <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('category-report')\">Category</ion-button>\r\n    <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('products-report')\">Products</ion-button>\r\n    <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('brands-report')\">Brands</ion-button>\r\n    <!-- <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('services-report')\">Services</ion-button> -->\r\n    <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('users-report')\">Users</ion-button>\r\n    <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('tax-report')\">Tax</ion-button>\r\n    <!-- <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('area-report')\">Area</ion-button> -->\r\n    <!-- <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('vendor-report')\" *ngIf=\"vendorReport\">Vendors</ion-button> -->\r\n    <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('coupon-report')\">Coupons</ion-button>\r\n    <!-- <ion-button expand=\"full\" fill=\"outline\" class=\"btn-1 tab-btn\" (click)=\"goToPage('referral-report')\">Referral</ion-button> -->\r\n    </div>\r\n    <div class=\"tabs-content\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"6\"><ion-item>\r\n            <ion-label>Start Date</ion-label>\r\n            <ion-datetime displayFormat=\"DD MM YYYY\" [max]=\"endDate\" placeholder=\"Select Date\" [(ngModel)]=\"startDate\" (ionChange)=\"setStartDate()\"></ion-datetime>\r\n          </ion-item></ion-col>\r\n          <ion-col size=\"6\"><ion-item> \r\n            <ion-label>End Date</ion-label>\r\n            <ion-datetime displayFormat=\"DD MM YYYY\" [min]=\"startDate\" placeholder=\"Select Date\" [(ngModel)]=\"endDate\" (ionChange)=\"setEndDate()\"></ion-datetime>\r\n          </ion-item></ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col style=\"text-align: center\">\r\n            <ion-button (click)=\"getReport()\">Generate Report</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <div class=\"details\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"4\" class=\"ion-text-center\">\r\n              <h3>Total no of Orders</h3>\r\n              <p>{{orders}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"ion-text-center\">\r\n              <h3>Total Sales</h3>\r\n              <p>{{sales | currency: currencyCode:true}}</p>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"ion-text-center\">\r\n              <h3>Total Profit</h3>\r\n              <p>{{profit | currency: currencyCode:true}}</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n      <div class=\"chart-bx\">\r\n        <canvas #orderChart></canvas>\r\n      </div>\r\n\r\n      <div class=\"chart-bx\">\r\n        <canvas #salesChart></canvas>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/reports/sales-report/sales-report.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/reports/sales-report/sales-report.module.ts ***!
  \*************************************************************/
/*! exports provided: SalesReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesReportPageModule", function() { return SalesReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sales_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sales-report.page */ "./src/app/reports/sales-report/sales-report.page.ts");







var routes = [
    {
        path: '',
        component: _sales_report_page__WEBPACK_IMPORTED_MODULE_6__["SalesReportPage"]
    }
];
var SalesReportPageModule = /** @class */ (function () {
    function SalesReportPageModule() {
    }
    SalesReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sales_report_page__WEBPACK_IMPORTED_MODULE_6__["SalesReportPage"]]
        })
    ], SalesReportPageModule);
    return SalesReportPageModule;
}());



/***/ }),

/***/ "./src/app/reports/sales-report/sales-report.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/reports/sales-report/sales-report.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".report-table table tbody td {\n  color: black;\n}\n\n.main-container {\n  padding: 0;\n}\n\n.chart-bx {\n  margin: 26px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9zYWxlcy1yZXBvcnQvQzpcXEJXSS1BRE1JTlNcXFNoZWluLUFkbWluLUNvZGUvc3JjXFxhcHBcXHJlcG9ydHNcXHNhbGVzLXJlcG9ydFxcc2FsZXMtcmVwb3J0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVwb3J0cy9zYWxlcy1yZXBvcnQvc2FsZXMtcmVwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURDQTtFQUFnQixVQUFBO0FDR2hCOztBRERBO0VBQVUsY0FBQTtBQ0tWIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0cy9zYWxlcy1yZXBvcnQvc2FsZXMtcmVwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXBvcnQtdGFibGUgdGFibGUgdGJvZHkgdGQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5tYWluLWNvbnRhaW5lcntwYWRkaW5nOiAwO31cclxuXHJcbi5jaGFydC1ieHttYXJnaW46IDI2cHggMDt9IiwiLnJlcG9ydC10YWJsZSB0YWJsZSB0Ym9keSB0ZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNoYXJ0LWJ4IHtcbiAgbWFyZ2luOiAyNnB4IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/reports/sales-report/sales-report.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/reports/sales-report/sales-report.page.ts ***!
  \***********************************************************/
/*! exports provided: SalesReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesReportPage", function() { return SalesReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/config/config.service */ "./src/app/services/config/config.service.ts");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









var SalesReportPage = /** @class */ (function () {
    function SalesReportPage(router, configService, events, alertCtrl, storage, sharedService) {
        this.router = router;
        this.configService = configService;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.sharedService = sharedService;
        this.chartOptions = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        this.sales = 0;
        this.profit = 0;
        this.orders = 0;
        this.chartSalesLabel = [];
        this.chartSalesData = [];
        this.chartOrderLabel = [];
        this.chartOrderData = [];
        this.vendorReport = false;
    }
    SalesReportPage.prototype.ngOnInit = function () {
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
    SalesReportPage.prototype.goToPage = function (page) {
        this.router.navigate([page]);
    };
    SalesReportPage.prototype.getDaysArray = function (start, end) {
        for (var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
            arr.push(new Date(dt));
        }
        return arr;
    };
    SalesReportPage.prototype.ionViewDidEnter = function () {
    };
    SalesReportPage.prototype.ionViewWillEnter = function () {
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
    SalesReportPage.prototype.ionViewWillLeave = function () {
        this.removeSubscriptions();
    };
    SalesReportPage.prototype.initializeSubscriptions = function () {
        var _this = this;
        this.events.subscribe('reports:getReportSuccess', function (reports) {
            console.log('sales reports', reports);
            _this.sales = 0;
            _this.profit = 0;
            _this.orders = 0;
            _this.chartSalesLabel = [];
            _this.chartSalesData = [];
            _this.chartOrderLabel = [];
            _this.chartOrderData = [];
            var startDate = new Date(_this.startDate);
            var endDate = new Date(_this.endDate);
            var dateArr = _this.getDaysArray(startDate, endDate);
            for (var _i = 0, reports_1 = reports; _i < reports_1.length; _i++) {
                var report = reports_1[_i];
                _this.sales += report.sales;
                _this.orders += report.orders;
                _this.profit += report.profit;
                for (var i = 0; i < dateArr.length; i++) {
                    var dateNumber = dateArr[i].getDate();
                    _this.chartSalesLabel.push(dateNumber.toString());
                    _this.chartOrderLabel.push(dateNumber.toString());
                    if (report.date.toDate().getDate() == dateNumber) {
                        _this.chartOrderData.push(report.orders);
                        _this.chartSalesData.push(report.sales);
                    }
                    else {
                        _this.chartOrderData.push(0);
                        _this.chartSalesData.push(0);
                    }
                }
            }
            _this.createOrdersChart();
            _this.createSalesChart();
        });
        this.events.subscribe('reports:getReportFailure', function (errMessage) {
            console.log('deatils Failure', errMessage);
        });
        this.getReport();
    };
    SalesReportPage.prototype.removeSubscriptions = function () {
        this.events.unsubscribe('reports:getReportSuccess');
        this.events.unsubscribe('reports:getReportFailure');
    };
    SalesReportPage.prototype.setStartDate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set('reportStartDate', this.startDate)];
                    case 1:
                        _a.sent();
                        console.log('set done');
                        return [2 /*return*/];
                }
            });
        });
    };
    SalesReportPage.prototype.setEndDate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set('reportEndDate', this.endDate)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SalesReportPage.prototype.getReport = function () {
        var startingDate = new Date(this.startDate);
        var endingDate = new Date(this.endDate);
        var diffInMs = Math.abs(endingDate.getTime() - startingDate.getTime());
        var differenceInDays = diffInMs / (1000 * 60 * 60 * 24);
        var startYrMonth = moment__WEBPACK_IMPORTED_MODULE_8__(startingDate).format('YYYY-MM');
        var endYrMonth = moment__WEBPACK_IMPORTED_MODULE_8__(endingDate).format('YYYY-MM');
        if (startYrMonth === endYrMonth) {
            this.events.publish('reports:getReport', startingDate, endingDate, 'sales');
        }
        else {
            if (differenceInDays <= 30) {
                this.events.publish('reports:getReport', startingDate, endingDate, 'sales');
            }
            else {
                this.showAlert('End date cannot be more than 1 month of start Date');
            }
        }
    };
    SalesReportPage.prototype.createOrdersChart = function () {
        if (this.orderChartInstance) {
            this.orderChartInstance.destroy();
        }
        this.orderChartInstance = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.barChart.nativeElement, {
            type: 'line',
            data: {
                labels: this.chartOrderLabel,
                datasets: [{
                        label: 'Orders',
                        data: this.chartOrderData,
                        backgroundColor: 'rgb(38, 194, 129)',
                        borderColor: 'rgb(38, 194, 129)',
                        borderWidth: 1
                    }]
            },
            options: this.chartOptions
        });
    };
    SalesReportPage.prototype.createSalesChart = function () {
        if (this.salesChartInstance) {
            this.salesChartInstance.destroy();
        }
        this.salesChartInstance = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.salesChart.nativeElement, {
            type: 'line',
            data: {
                labels: this.chartSalesLabel,
                datasets: [{
                        label: 'Sales',
                        data: this.chartSalesData,
                        backgroundColor: '#4b526d',
                        borderColor: '#373f5d',
                        borderWidth: 1
                    }]
            },
            options: this.chartOptions
        });
    };
    SalesReportPage.prototype.showAlert = function (message) {
        this.alertCtrl.create({ header: 'Alert', message: message, buttons: ['Okay'] })
            .then(function (alertEl) { return alertEl.present(); });
    };
    SalesReportPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('orderChart', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SalesReportPage.prototype, "barChart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('salesChart', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SalesReportPage.prototype, "salesChart", void 0);
    SalesReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sales-report',
            template: __webpack_require__(/*! raw-loader!./sales-report.page.html */ "./node_modules/raw-loader/index.js!./src/app/reports/sales-report/sales-report.page.html"),
            styles: [__webpack_require__(/*! ./sales-report.page.scss */ "./src/app/reports/sales-report/sales-report.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
    ], SalesReportPage);
    return SalesReportPage;
}());



/***/ })

}]);
//# sourceMappingURL=reports-sales-report-sales-report-module-es5.js.map