(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-cart-user-cart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/user-cart/user-cart.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-cart/user-cart.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"product-details\" class=\"custom-back-button\" *ngIf=\"routeFromProductDetailsPage\"></ion-back-button>\r\n      <ion-back-button defaultHref=\"search-items\" class=\"custom-back-button\" *ngIf=\"routeFromSearchItemsPage\"></ion-back-button>\r\n      <ion-menu-button class=\"custom-back-button\" *ngIf=\"!routeFromProductDetailsPage && !routeFromSearchItemsPage\">\r\n        <img src=\"assets/img/menu-icon-white.png\" class=\"menu-img\">\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title text-center>My Cart</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"showLoader\" class=\"spinner\">\r\n    <ion-spinner color=\"primary\"></ion-spinner>\r\n  </div>\r\n  <div class=\"no-data\" *ngIf=\"noCartProducts && !showLoader; else showCartProducts\" text-center>\r\n    <img src=\"assets/img/empty-cart.png\" alt=\"\">\r\n    <h6>No product in cart</h6>\r\n    <ion-button (click)=\"onClickStartShopping()\" expand=\"block\" color=\"primary\">\r\n      Start Shopping\r\n    </ion-button>\r\n  </div>\r\n  <ng-template #showCartProducts>\r\n    <div class=\"products-container\" *ngFor=\"let product of cartProducts; let i=index\">\r\n      <div class=\"delete-icon\" (click)=\"removeAlertConfirm(product.id)\">\r\n        <i class=\"flaticon-null-21\"></i>\r\n      </div>\r\n      <ion-list class=\"ion-no-padding\" lines=\"none\">\r\n        <ion-item class=\"ion-no-padding\">\r\n          <div slot=\"start\" \r\n          [ngStyle]=\"{'background': 'url(' + product.img.mob + ') no-repeat center', 'background-size': 'contain'}\"\r\n           class=\"product-image\" (click)=\"goToPrdouctDetails(product.productId)\"></div>\r\n          <ion-label>\r\n            <h2 class=\"product-price ion-text-wrap\">{{product.price * product.quantity | currency: 'INR':true}}</h2>\r\n            <h3 class=\"product-name ion-text-wrap\">{{product.name}}</h3>\r\n            <h6 class=\"product-description\">{{product.description}}</h6>\r\n            <ion-grid class=\"ion-no-padding\">\r\n              <ion-row class=\"ion-no-padding\">\r\n                <ion-col size-xs=\"6\" class=\"ion-no-padding\">\r\n                  <ion-row class=\"ion-justify-content-start product-counter\">\r\n                    <ion-col size=\"3\" class=\"ion-no-padding\">\r\n                        <ion-icon name=\"remove\" (click)=\"decrementQuantity(product.quantity, i, product.id)\" class=\"product-minus-icon\"></ion-icon>\r\n                    </ion-col>\r\n                    <ion-col class=\"ion-no-padding\">\r\n                        <span class=\"product-counter-value\">{{product.quantity}}</span>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\" class=\"ion-no-padding\">\r\n                        <ion-icon name=\"add\" (click)=\"incrementQuantity(product.quantity, i, product.id)\" class=\"product-add-icon\"></ion-icon>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </ng-template>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"goToChat(true)\">\r\n    <ion-fab-button size=\"small\" color=\"dark\">\r\n      <i class=\"flaticon-chat fab-btn-chat\"></i>\r\n    </ion-fab-button>\r\n    <span class=\"unread-msg-badge\" *ngIf=\"unreadAdminMsgs !== 0\">{{unreadAdminMsgs}}</span>\r\n  </ion-fab>\r\n</ion-content>\r\n<ion-footer (click)=\"onClickCheckout()\" *ngIf=\"!showLoader && !noCartProducts\">\r\n  <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\r\n      <div class=\"app-footer-text\">\r\n        Checkout<span><i class=\"flaticon-null-20 app-footer-icon\"></i></span>\r\n    </div>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/user-cart/user-cart.module.ts":
/*!***********************************************!*\
  !*** ./src/app/user-cart/user-cart.module.ts ***!
  \***********************************************/
/*! exports provided: UserCartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCartPageModule", function() { return UserCartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-cart.page */ "./src/app/user-cart/user-cart.page.ts");







const routes = [
    {
        path: '',
        component: _user_cart_page__WEBPACK_IMPORTED_MODULE_6__["UserCartPage"]
    }
];
let UserCartPageModule = class UserCartPageModule {
};
UserCartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_user_cart_page__WEBPACK_IMPORTED_MODULE_6__["UserCartPage"]]
    })
], UserCartPageModule);



/***/ }),

/***/ "./src/app/user-cart/user-cart.page.scss":
/*!***********************************************!*\
  !*** ./src/app/user-cart/user-cart.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f9f9fe;\n}\n\nion-list {\n  border-radius: 5px;\n}\n\n.products-container {\n  margin: 15px 10px 10px 10px;\n  background: white;\n  border-radius: 5px;\n  padding: 15px 5px 10px 2px;\n  position: relative;\n  box-shadow: 0px 2px 2px #ccc;\n}\n\n.product-image {\n  background: transparent url(\"https://s5.gifyu.com/images/loaderbb19efcc2749e115.gif\") center no-repeat;\n  width: 110px;\n  height: 110px;\n  margin-left: 3%;\n}\n\n.product-name {\n  font-size: 14px;\n  margin-top: 7px;\n}\n\n.product-price {\n  color: var(--ion-color-primary);\n  font-size: 18px;\n}\n\n.product-description {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 7px;\n  opacity: 0.5;\n  margin-bottom: -3px;\n  font-size: 12px;\n}\n\n.item-divider {\n  border: 0;\n  clear: both;\n  display: block;\n  width: 100%;\n  background-color: #ccc;\n  height: 1px;\n  opacity: 0.4;\n}\n\n.product-minus-icon {\n  font-size: 15px;\n  margin-top: 5px;\n  border-radius: 3px;\n  padding: 1px;\n  color: var(--ion-color-primary);\n  background: #f9f9fe;\n}\n\n.product-add-icon {\n  font-size: 15px;\n  margin-top: 5px;\n  border-radius: 3px;\n  padding: 1px;\n  color: var(--ion-color-primary);\n  margin-left: -20px;\n  background: #f9f9fe;\n}\n\n.product-counter {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n  margin-top: 10px;\n}\n\n.product-counter-value {\n  font-size: 16px;\n  padding-right: 10px;\n}\n\n.no-data {\n  margin: 0;\n  position: absolute;\n  top: 40%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  left: 50%;\n  margin-left: -65px;\n}\n\n.no-data img {\n  width: 150px;\n}\n\n.spinner {\n  margin-top: 50%;\n  text-align: center;\n}\n\n.delete-icon {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  z-index: 1;\n  padding: 13px;\n  border-bottom-left-radius: 50px;\n  background: #ED1B24;\n}\n\n.flaticon-null-21::before {\n  color: white;\n  position: relative;\n  top: -3px;\n  left: 3px;\n}\n\n@media screen and (min-width: 768px) {\n  .product-counter-value {\n    padding: 8px;\n    font-size: 30px;\n  }\n\n  .product-minus-icon {\n    font-size: 25px;\n  }\n\n  .product-add-icon {\n    font-size: 25px;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .product-counter-value {\n    padding: 12px;\n    font-size: 35px;\n  }\n\n  .product-minus-icon {\n    font-size: 30px;\n  }\n\n  .product-add-icon {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1jYXJ0L0M6XFxCV0ktQURNSU5TXFxTaGVpbi1BZG1pbi1Db2RlL3NyY1xcYXBwXFx1c2VyLWNhcnRcXHVzZXItY2FydC5wYWdlLnNjc3MiLCJzcmMvYXBwL3VzZXItY2FydC91c2VyLWNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUNHSjs7QUREQTtFQUNJLHNHQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0tKOztBREhBO0VBQ0ksK0JBQUE7RUFDQSxlQUFBO0FDTUo7O0FESkE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ09KOztBRExBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNRSjs7QUROQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQ1NKOztBRFBBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNVSjs7QURSQTtFQUNJLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1dKOztBRFRBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDWUo7O0FEVEE7RUFDSSxTQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBRUEsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ1lOOztBRFZFO0VBQ0UsWUFBQTtBQ2FKOztBRFhFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDY0o7O0FEWkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FDZUo7O0FEWkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ2VKOztBRFZBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsZUFBQTtFQ2FOOztFRFhFO0lBQ0ksZUFBQTtFQ2NOOztFRFpFO0lBQ0ksZUFBQTtFQ2VOO0FBQ0Y7O0FEYkE7RUFDSTtJQUNJLGFBQUE7SUFDQSxlQUFBO0VDZU47O0VEYkU7SUFDSSxlQUFBO0VDZ0JOOztFRGRFO0lBQ0ksZUFBQTtFQ2lCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlci1jYXJ0L3VzZXItY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y5ZjlmZTs7XHJcbn1cclxuaW9uLWxpc3R7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnByb2R1Y3RzLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogMTVweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTVweCA1cHggMTBweCAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAjY2NjO1xyXG59XHJcbi5wcm9kdWN0LWltYWdle1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKCdodHRwczovL3M1LmdpZnl1LmNvbS9pbWFnZXMvbG9hZGVyYmIxOWVmY2MyNzQ5ZTExNS5naWYnKSBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxufVxyXG4ucHJvZHVjdC1uYW1le1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG59XHJcbi5wcm9kdWN0LXByaWNle1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ucHJvZHVjdC1kZXNjcmlwdGlvbntcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLml0ZW0tZGl2aWRlcntcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIG9wYWNpdHk6IC40O1xyXG59XHJcbi5wcm9kdWN0LW1pbnVzLWljb257XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmZTtcclxufVxyXG4ucHJvZHVjdC1hZGQtaWNvbntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWZlO1xyXG59XHJcbi5wcm9kdWN0LWNvdW50ZXJ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5wcm9kdWN0LWNvdW50ZXItdmFsdWV7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5uby1kYXRhe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNDAlO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC02NXB4O1xyXG4gIH1cclxuICAubm8tZGF0YSBpbWd7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG4gIC5zcGlubmVye1xyXG4gICAgbWFyZ2luLXRvcDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kZWxldGUtaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNFRDFCMjQ7XHJcbn1cclxuXHJcbi5mbGF0aWNvbi1udWxsLTIxOjpiZWZvcmV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0zcHg7XHJcbiAgICBsZWZ0OiAzcHg7XHJcbn1cclxuXHJcbi8vbWVkaWEgcXVlcmllc1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5wcm9kdWN0LWNvdW50ZXItdmFsdWV7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0LW1pbnVzLWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLnByb2R1Y3QtYWRkLWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDoxMDI0cHgpe1xyXG4gICAgLnByb2R1Y3QtY291bnRlci12YWx1ZXtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0LW1pbnVzLWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnByb2R1Y3QtYWRkLWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmOWY5ZmU7XG59XG5cbmlvbi1saXN0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvZHVjdHMtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxNXB4IDEwcHggMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4IDVweCAxMHB4IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAjY2NjO1xufVxuXG4ucHJvZHVjdC1pbWFnZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcImh0dHBzOi8vczUuZ2lmeXUuY29tL2ltYWdlcy9sb2FkZXJiYjE5ZWZjYzI3NDllMTE1LmdpZlwiKSBjZW50ZXIgbm8tcmVwZWF0O1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbn1cblxuLnByb2R1Y3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4ucHJvZHVjdC1wcmljZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBvcGFjaXR5OiAwLjU7XG4gIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLml0ZW0tZGl2aWRlciB7XG4gIGJvcmRlcjogMDtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgaGVpZ2h0OiAxcHg7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLnByb2R1Y3QtbWludXMtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmZTtcbn1cblxuLnByb2R1Y3QtYWRkLWljb24ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmZTtcbn1cblxuLnByb2R1Y3QtY291bnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5wcm9kdWN0LWNvdW50ZXItdmFsdWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5uby1kYXRhIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC02NXB4O1xufVxuXG4ubm8tZGF0YSBpbWcge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5zcGlubmVyIHtcbiAgbWFyZ2luLXRvcDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZWxldGUtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNFRDFCMjQ7XG59XG5cbi5mbGF0aWNvbi1udWxsLTIxOjpiZWZvcmUge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xuICBsZWZ0OiAzcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LWNvdW50ZXItdmFsdWUge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cblxuICAucHJvZHVjdC1taW51cy1pY29uIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cblxuICAucHJvZHVjdC1hZGQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLnByb2R1Y3QtY291bnRlci12YWx1ZSB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gIH1cblxuICAucHJvZHVjdC1taW51cy1pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cblxuICAucHJvZHVjdC1hZGQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/user-cart/user-cart.page.ts":
/*!*********************************************!*\
  !*** ./src/app/user-cart/user-cart.page.ts ***!
  \*********************************************/
/*! exports provided: UserCartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCartPage", function() { return UserCartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");






let UserCartPage = class UserCartPage {
    constructor(events, router, alertController, loadingController, storage, navCtrl, route, userService) {
        this.events = events;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.route = route;
        this.userService = userService;
        this.quantity = 1;
        this.cartProducts = [];
        this.noCartProducts = false;
        this.showLoader = true;
        this.routeFromProductDetailsPage = false;
        this.unreadAdminMsgs = 0;
        this.routeFromSearchItemsPage = false;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.routeFromProductDetailsPage = this.router.getCurrentNavigation().extras.state.routeFromProductDetailsPage;
                this.routeFromSearchItemsPage = this.router.getCurrentNavigation().extras.state.routeFromSearchItemsPage;
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.initializeSubscription();
        this.events.publish('user:getUserCartProducts');
        this.storage.get('uid').then((val) => {
            this.events.publish('chat:getUnreadMsgOfAdmin', val);
        });
    }
    ionViewWillLeave() {
        this.removeSubscription();
    }
    initializeSubscription() {
        this.events.subscribe('user:publishUserCartProducts', (cartProducts) => {
            this.cartProducts = cartProducts;
            this.noCartProducts = false;
            this.showLoader = false;
            //console.log('cartProducts', this.cartProducts);
        });
        this.events.subscribe('user:noProductsInCart', () => {
            this.noCartProducts = true;
            this.showLoader = false;
        });
        this.events.subscribe('user:updateQuantityOfCartProductSuccess', () => {
            this.loading.dismiss();
        });
        this.events.subscribe('user:productRemovedFromCart', () => {
            this.loading.dismiss();
        });
        this.events.subscribe('chat:publishUnreadMsgOfAdmin', (unreadMsgs) => {
            this.unreadAdminMsgs = unreadMsgs;
        });
    }
    decrementQuantity(quantity, index, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (quantity > 1) {
                this.loading = yield this.loadingController.create({
                    message: 'Please Wait...',
                    duration: 5000
                });
                yield this.loading.present();
                this.events.publish('user:updateQuantityOfCartProduct', this.cartProducts[index].quantity - 1, id, true);
            }
            else {
                this.removeAlertConfirm(id);
            }
        });
    }
    incrementQuantity(quantity, index, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please Wait...',
                duration: 5000
            });
            yield this.loading.present();
            this.events.publish('user:updateQuantityOfCartProduct', this.cartProducts[index].quantity + 1, id, true);
        });
    }
    onClickStartShopping() {
        this.navCtrl.navigateRoot(['shop-categories']);
    }
    presentAlert(msg, action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: msg,
                buttons: ['Ok']
            });
            yield alert.present();
        });
    }
    removeAlertConfirm(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'Are you sure you want to remove this product?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Remove',
                        handler: () => {
                            //console.log('Confirm Okay');
                            this.removeProduct(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    removeProduct(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please Wait...',
                duration: 5000
            });
            yield this.loading.present();
            this.events.publish('user:removeProductFromCart', id, true);
        });
    }
    onClickCheckout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.storage.set('productsInCart', this.cartProducts);
            this.storage.set('buyNowOrder', false);
            this.storage.get('userDefaultAddress').then((address) => {
                //console.log(address);
                if (!address) {
                    const navigationExtras = {
                        state: {
                            routeFromCheckoutPage: true,
                        }
                    };
                    this.router.navigate(['new-address'], navigationExtras);
                }
                else {
                    this.router.navigate(['order-summary']);
                }
            });
        });
    }
    goToPrdouctDetails(id) {
        //console.log('id in goToPrdouctDetails', id);
        const navigationExtras = {
            state: {
                productId: id,
            }
        };
        this.router.navigate(['product-details'], navigationExtras);
    }
    goToChat(fromfab) {
        let userId = this.userService.getUserId();
        //console.log('uid in sc', userId);
        if (userId === '') {
            //console.log('in if of uid');
            this.router.navigate(['home']);
        }
        else {
            //console.log('in else of uid');
            this.storage.get('userRole').then((role) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (role === 'admin') {
                    this.router.navigate(['admin-home']);
                }
                else {
                    this.router.navigate(['chat-bot']);
                }
            }));
        }
    }
    removeSubscription() {
        this.events.unsubscribe('user:publishUserCartProducts');
        this.events.unsubscribe('user:noProductsInCart');
        this.events.unsubscribe('user:updateQuantityOfCartProductSuccess');
        this.events.unsubscribe('user:productRemovedFromCart');
        this.events.unsubscribe('chat:publishUnreadMsgOfAdmin');
    }
};
UserCartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
UserCartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-cart',
        template: __webpack_require__(/*! raw-loader!./user-cart.page.html */ "./node_modules/raw-loader/index.js!./src/app/user-cart/user-cart.page.html"),
        styles: [__webpack_require__(/*! ./user-cart.page.scss */ "./src/app/user-cart/user-cart.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], UserCartPage);



/***/ })

}]);
//# sourceMappingURL=user-cart-user-cart-module-es2015.js.map