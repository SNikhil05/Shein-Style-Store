(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-shop-categories-categories-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-shop/categories/categories.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-shop/categories/categories.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"custom-back-button\"></ion-back-button>\r\n    </ion-buttons>\r\n    <div class=\"header-logo\" slot=\"start\">\r\n      <img src=\"../../../assets/img/shop-logo.png\">\r\n    </div>\r\n      <ion-title>{{categoryData?.id ? 'Edit' : 'New'}} Category</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ng-container *ngIf=\"!categoryData.hasOwnProperty('id'); else editCatData\">\r\n  <super-tabs>\r\n    <super-tabs-toolbar slot=\"top\">\r\n      <super-tab-button>\r\n        <ion-label>Details</ion-label>\r\n      </super-tab-button>\r\n      <super-tab-button>\r\n        <ion-label>Advanced (optional)</ion-label>\r\n      </super-tab-button>\r\n    </super-tabs-toolbar>\r\n\r\n    <super-tabs-container>\r\n      <!-- Details -->\r\n      <super-tab>\r\n        <ion-content>\r\n          <div class=\"main-container fixed-height\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <div class=\"input-wrap\">\r\n                    <div class=\"flex-space-between\">\r\n                      <div>\r\n                        <ion-label>Category Name (please don't use \"/\" in name)\r\n                        </ion-label>\r\n                      </div>\r\n                      <div class=\"flex-label\">\r\n                        <ion-label>Show</ion-label>\r\n                        <ion-toggle (ion-change)=\"updateNewCategoryStatus()\" [checked]=\"categoryStatus\"\r\n                          [(ngModel)]=\"categoryStatus\"></ion-toggle>\r\n                      </div>\r\n                    </div>\r\n                    <ion-input class=\"form-input\" [(ngModel)]=\"category.name\"></ion-input>\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"12\">\r\n                  <div class=\"headings\">Description</div>\r\n                </ion-col>\r\n                <ion-col size=\"12\">\r\n                  <ckeditor [(ngModel)]=\"category.description\" [config]=\"ckeConfig\"></ckeditor>\r\n                </ion-col>\r\n                <!-- <ion-col size=\"12\">\r\n                  <div class=\"input-wrap\">\r\n                    <div class=\"flex-label\">\r\n                      <div>Exclusive</div>&nbsp;\r\n                      <div class=\"toggle-btn\">\r\n                        <label class=\"switch\">\r\n                          <input type=\"checkbox\"\r\n                            (click)=\"changeExclusive()\"\r\n                            [checked]=\"category.isExclusive\">\r\n                          <span class=\"slider round\"></span>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <ion-text color=\"danger\">\r\n                      <p>Note: This feature will allow order from only one category</p>\r\n                    </ion-text>\r\n                  </div>\r\n                </ion-col> -->\r\n                <ion-col size=\"12\">\r\n                  <div class=\"flex-space-between\">\r\n                    <div>\r\n                      <ion-label>Category Image</ion-label>\r\n                      <ion-text color=\"danger\">\r\n                        <p style=\"margin-top: 5px\">Image size for best view : 600x450 Px\r\n                        </p>\r\n                      </ion-text>\r\n                    </div>\r\n                    <div class=\"upload-btn-wrapper\">\r\n                      <!-- TODO -->\r\n                      <button class=\"upload-btn btn-1 i-start\" (click)=\"uploadImage($event.target.files,'catImg')\"> <i\r\n                          class=\"flaticon-null-16\"></i>upload</button>\r\n                      <!-- <input type=\"file\" name=\"myfile\" (change)=\"uploadImage($event.target.files,'catImg')\" /> -->\r\n                    </div>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n            <div class=\"img-container\">\r\n              <div class=\"no-img\" *ngIf=\"!imageResponse.length\">\r\n                <p>No attached image</p>\r\n              </div>\r\n              <div *ngIf=\"imageResponse.length !== 0\">\r\n                <div class=\"img-wrap\">\r\n                  <img class=\"category-img\" src=\"{{imageResponse[0].imgData}}\"\r\n                    (click)=\"imgZoom(imageResponse[0].imgData)\" />\r\n                  <div class=\"overlay\">\r\n                    <ion-button class=\"btn-2\" shape=\"round\" color=\"danger\" fill=\"clear\" (click)=\"removeImage('catImg')\">\r\n                      <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\r\n                    </ion-button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-content>\r\n      </super-tab>\r\n\r\n      <!-- Advanced (optional) -->\r\n      <super-tab>\r\n        <ion-content>\r\n          <div class=\"main-container fixed-height\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=2 id=\"scroll1\">\r\n                  <div class=\"statusList\">\r\n                    <div [id]=\"i\" *ngFor=\"let item of sideMenu; index as i\" (click)='changeComponent(i)'>\r\n                        <p [ngClass]=\"selectedId === i ? 'tile-bg-active' : 'tile-bg-inactive'\">{{item}}</p>\r\n                    </div>\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=10 id=\"scroll2\" style=\"border-left: 1px solid lightgray;\">\r\n                  <ng-container [ngSwitch]=\"selectedId\">\r\n\r\n                    <!-- Website SEO -->\r\n                    <ng-container *ngSwitchCase=\"0\">\r\n                      <ion-grid>\r\n                        <ion-row>\r\n                          <ion-col size=\"12\">\r\n                            <h3>Website SEO (optional)</h3>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                        <ion-row>\r\n                          <ion-col size=\"12\">\r\n                            <div class=\"input-wrap\">\r\n                              <ion-label>Meta Title</ion-label>\r\n                              <ion-input class=\"form-input\" [(ngModel)]=\"metaData.pageTitle\"></ion-input>\r\n                            </div>\r\n                          </ion-col>\r\n                          <ion-col size=\"12\">\r\n                            <div class=\"input-wrap\">\r\n                              <ion-label>Meta Description</ion-label>\r\n                              <ion-input class=\"form-input\" [(ngModel)]=\"metaData.metaDescription\"></ion-input>\r\n                            </div>\r\n                          </ion-col>\r\n                          <ion-col size=\"12\">\r\n                            <div class=\"input-wrap\">\r\n                              <ion-label>Meta Keywords</ion-label>\r\n                              <ion-input class=\"form-input\" [(ngModel)]=\"metaData.metaKeywords\"></ion-input>\r\n                            </div>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n                    </ng-container>\r\n\r\n                    <!-- FAQ -->\r\n                    <ng-container *ngSwitchCase=\"1\">\r\n                      <ion-grid>\r\n                        <ion-row *ngFor=\"let x of faq; let i = index;\">\r\n                          <ion-col size=\"6\" class=\"vertical-center\">\r\n                            <div>\r\n                              <p>{{i+1}})</p>\r\n                            </div>\r\n                            <ion-textarea rows=\"3\" type=\"text\" placeholder=\"Question\" class=\"form-input\" [(ngModel)]=\"x.quest\">\r\n                            </ion-textarea>\r\n                          </ion-col>\r\n                          <ion-col size=\"6\" class=\"vertical-center\">\r\n                            <ion-textarea rows=\"3\" type=\"text\" placeholder=\"Answer\" class=\"form-input\" [(ngModel)]=\"x.ans\">\r\n                            </ion-textarea>\r\n                            <i class=\"flaticon-null-19 remove-icon\" (click)=\"removeFaq(i)\"></i>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                        <ion-row class=\"ion-justify-content-center\">\r\n                          <ion-button (click)=\"addMoreFaq()\" fill=\"outline\" shape=\"round\" size=\"small\">\r\n                            Add FAQ\r\n                          </ion-button>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n                    </ng-container>\r\n                    \r\n                    <!-- FAQ -->\r\n                    <ng-container *ngSwitchCase=\"2\">\r\n                      <ion-grid>\r\n                        <ion-row>\r\n                          <ion-col size=\"12\">\r\n                            <!-- region select -->\r\n                            <div *ngIf=\"multiRegion && regions.length\">\r\n                              <ion-row>\r\n                                <div class=\"headings\">\r\n                                  Add Region\r\n                                </div>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"12\">\r\n                                  <ion-select multiple=\"true\" [value]=\"regionId\" class=\"border f-s-14 i-s-p-10\"\r\n                                    (ionChange)=\"addRegion($event, 'new')\" placeholder=\"Select Region\">\r\n                                    <ion-select-option [value]=\"region.id\" *ngFor=\"let region of regions\">{{region.name}}\r\n                                    </ion-select-option>\r\n                                  </ion-select>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                              <br>\r\n                            </div>\r\n                            <ng-container *ngIf=\"!multiRegion\">\r\n                              <ion-text color=\"danger\">Multi Region is disabled</ion-text>\r\n                            </ng-container>\r\n                            <!-- region select -->\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n                      \r\n                    </ng-container>\r\n\r\n                    <!-- Slug -->\r\n                    <ng-container *ngSwitchCase=\"3\">\r\n                      <ion-text *ngIf=\"isUniversal\">\r\n                        Slug Name available when you edit this category.\r\n                      </ion-text>\r\n                      <ion-text *ngIf=\"!isUniversal\" color=\"danger\">\r\n                        Slug Name is disabled\r\n                      </ion-text>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                \r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </div>\r\n        </ion-content>\r\n      </super-tab>\r\n    </super-tabs-container>\r\n  </super-tabs>\r\n</ng-container>\r\n\r\n\r\n<!-- New category footer -->\r\n<ion-footer *ngIf=\"!categoryData.hasOwnProperty('id')\"\r\n  no-border\r\n  class=\"page-footer\">\r\n  <div class=\"main-container\">\r\n    <ion-button (click)=\"addCategory()\"\r\n      shape=\"round\"\r\n      class=\"btn-1 i-start\"\r\n      color=\"success\">\r\n      <i class=\"flaticon-null-20 margin-icon\"></i>\r\n      Save\r\n    </ion-button>\r\n  </div>\r\n</ion-footer>\r\n<!-- New category footer -->\r\n\r\n\r\n<ng-template #editCatData>\r\n  <super-tabs>\r\n    <super-tabs-toolbar slot=\"top\">\r\n      <super-tab-button>\r\n        <ion-label>Details</ion-label>\r\n      </super-tab-button>\r\n      <super-tab-button>\r\n        <ion-label>Advanced (optional)</ion-label>\r\n      </super-tab-button>\r\n    </super-tabs-toolbar>\r\n\r\n    <super-tabs-container>\r\n      <!-- Details -->\r\n      <super-tab>\r\n        <ion-content>\r\n          <div class=\"main-container info-container\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <div class=\"input-wrap\">\r\n                    <div class=\"flex-space-between\">\r\n                      <div>\r\n                        <ion-label>Category Name (please don't use \"/\" in name)\r\n                        </ion-label>\r\n                      </div>\r\n                      <div class=\"flex-label\">\r\n                        <ion-label>Show</ion-label>\r\n                        <ion-toggle (ion-change)=\"updateEditCategoryStatus()\"\r\n                          [checked]=\"categoryStatus\"\r\n                          [(ngModel)]=\"categoryStatus\"></ion-toggle>\r\n                      </div>\r\n                    </div>\r\n                    <ion-input class=\"form-input\"\r\n                      [(ngModel)]=\"categoryData.name\"></ion-input>\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"12\">\r\n                  <div class=\"headings\">Description</div>\r\n                </ion-col>\r\n                <ion-col size=\"12\">\r\n                  <ckeditor [(ngModel)]=\"categoryData.description\"\r\n                    [config]=\"ckeConfig\"></ckeditor>\r\n                </ion-col>\r\n                <!-- <ion-col size=\"12\">\r\n                  <div class=\"input-wrap\">\r\n                    <div class=\"flex-label\">\r\n                      <div>Exclusive</div>&nbsp;\r\n                      <div class=\"toggle-btn\">\r\n                        <label class=\"switch\">\r\n                          <input type=\"checkbox\"\r\n                            (click)=\"changeExclusiveEdit()\"\r\n                            [checked]=\"categoryData.isExclusive\">\r\n                          <span class=\"slider round\"></span>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <ion-text color=\"danger\">\r\n                      <p>Note: This feature will allow order from only one\r\n                        category</p>\r\n                    </ion-text>\r\n                  </div>\r\n                </ion-col> -->\r\n                <ion-col size=\"12\">\r\n                  <div class=\"flex-space-between\">\r\n                    <div>\r\n                      <ion-label>Category Image</ion-label>\r\n                      <br>\r\n                      <ion-text color=\"danger\">\r\n                        <p style=\"margin-top: 5px\">Image size for best view :\r\n                          600x450 Px</p>\r\n                      </ion-text>\r\n                    </div>\r\n                    <div class=\"upload-btn-wrapper\">\r\n                      <button\r\n                        [disabled]=\"imageResponse.length !== 0 || (categoryData && categoryData.image && categoryData.image.url)\"\r\n                        class=\"upload-btn btn-1 i-start\"\r\n                        (click)=\"uploadImage($event.target.files,'catImg')\"> <i\r\n                          class=\"flaticon-null-16\"></i>Upload Category\r\n                        Image</button>\r\n                      <!-- <input\r\n                        [disabled]=\"imageResponse.length !== 0 || (categoryData && categoryData.image && categoryData.image.url)\"\r\n                        type=\"file\"\r\n                        name=\"myfile\"\r\n                        (change)=\"uploadImage($event.target.files,'catImg')\" /> -->\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"img-container\">\r\n                    <div class=\"no-img\"\r\n                      *ngIf=\"(!imageResponse.length && (categoryData.image && !categoryData.image.url))\">\r\n                      <p>No attached image</p>\r\n                    </div>\r\n                    <div *ngIf=\"categoryData && categoryData.image\">\r\n                      <div class=\"img-wrap\"\r\n                        *ngIf=\"categoryData.image.url\">\r\n                        <img class=\"category-img\"\r\n                          [src]=\"categoryData.image.url\"\r\n                          (click)=\"imgZoom(categoryData.image.url)\" />\r\n                        <div class=\"overlay\">\r\n                          <ion-button class=\"btn-2 remove\"\r\n                            shape=\"round\"\r\n                            fill=\"clear\"\r\n                            color=\"danger\"\r\n                            (click)=\"removeEditImage('catImg')\">\r\n                            <ion-icon name=\"trash\"\r\n                              slot=\"icon-only\"></ion-icon>\r\n                          </ion-button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"imageResponse.length !== 0\">\r\n                      <div class=\"img-wrap\">\r\n                        <img class=\"category-img\"\r\n                          [src]=\"imageResponse[0].imgData\"\r\n                          (click)=\"imgZoom(imageResponse[0].imgData)\" />\r\n                        <div class=\"overlay\">\r\n                          <ion-button class=\"btn-2 remove\"\r\n                            shape=\"round\"\r\n                            color=\"danger\"\r\n                            fill=\"clear\"\r\n                            (click)=\"removeImage('catImg')\">\r\n                            <ion-icon name=\"trash\"\r\n                              slot=\"icon-only\"></ion-icon>\r\n                          </ion-button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\">\r\n                  <div class=\"flex-space-between\">\r\n                    <div>\r\n                      <ion-label>Banner Image</ion-label>\r\n                      <ion-text color=\"danger\">\r\n                        <p style=\"margin-top: 5px\">Image size for best view :\r\n                          1366x400 Px</p>\r\n                      </ion-text>\r\n                    </div>\r\n                    <div class=\"upload-btn-wrapper\">\r\n                      <!-- TODO -->\r\n                      <button\r\n                        [disabled]=\"categoryData.banner && (banner.length !== 0 || (categoryData && categoryData.banner && categoryData.banner.url))\"\r\n                        class=\"upload-btn btn-1 i-start\"\r\n                        (click)=\"uploadImage($event.target.files, 'bannerImg')\">\r\n                        <i class=\"flaticon-null-16\"></i>Upload Banner\r\n                        Image</button>\r\n                      <!-- <input\r\n                        [disabled]=\"categoryData.banner && (banner.length !== 0 || (categoryData && categoryData.banner && categoryData.banner.url))\"\r\n                        type=\"file\"\r\n                        name=\"myfile\"\r\n                        (change)=\"uploadImage($event.target.files, 'bannerImg')\" /> -->\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"img-container\">\r\n                    <div class=\"no-img\"\r\n                      *ngIf=\"!categoryData.banner || (!banner.length && (categoryData && categoryData.banner && !categoryData.banner.url))\">\r\n                      <p>No Banner image</p>\r\n                    </div>\r\n                    <div *ngIf=\"categoryData && categoryData.banner\">\r\n                      <div class=\"img-wrap\"\r\n                        *ngIf=\"categoryData.banner.url\">\r\n                        <img class=\"category-img\"\r\n                          [src]=\"categoryData.banner.url\"\r\n                          (click)=\"imgZoom(categoryData.banner.url)\" />\r\n                        <div class=\"overlay\">\r\n                          <ion-button class=\"btn-2 remove\"\r\n                            shape=\"round\"\r\n                            fill=\"clear\"\r\n                            color=\"danger\"\r\n                            (click)=\"removeEditImage('bannerImg')\">\r\n                            <ion-icon name=\"trash\"\r\n                              slot=\"icon-only\"></ion-icon>\r\n                          </ion-button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"banner.length !== 0\">\r\n                      <div class=\"img-wrap\">\r\n                        <img class=\"category-img\"\r\n                          [src]=\"banner[0].imgData\"\r\n                          (click)=\"imgZoom(banner[0].imgData)\" />\r\n                        <div class=\"overlay\">\r\n                          <ion-button class=\"btn-2 remove\"\r\n                            shape=\"round\"\r\n                            color=\"danger\"\r\n                            fill=\"clear\"\r\n                            (click)=\"removeImage('bannerImg')\">\r\n                            <ion-icon name=\"trash\"\r\n                              slot=\"icon-only\"></ion-icon>\r\n                          </ion-button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ion-col>\r\n\r\n              </ion-row>\r\n\r\n            </ion-grid>\r\n\r\n          </div>\r\n        </ion-content>\r\n      </super-tab>\r\n\r\n      <!-- Additional Info Edit -->\r\n      <super-tab>\r\n        <ion-content>\r\n          <div class=\"main-container\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=2 id=\"scroll1\">\r\n                  <div class=\"statusList\">\r\n                    <div [id]=\"i\" *ngFor=\"let item of sideMenu; index as i\" (click)='changeComponent(i)'>\r\n                        <p [ngClass]=\"selectedId === i ? 'tile-bg-active' : 'tile-bg-inactive'\">{{item}}</p>\r\n                    </div>\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=10 id=\"scroll2\" style=\"border-left: 1px solid lightgray;\">\r\n                  <ng-container [ngSwitch]=\"selectedId\">\r\n\r\n                    <!-- Website SEO -->\r\n                    <ng-container *ngSwitchCase=\"0\">\r\n                      <ion-grid>\r\n                        <ion-row>\r\n                          <ion-col size=\"12\">\r\n                            <h3>Website SEO</h3>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                        <ion-row>\r\n                          <ion-col size=\"12\">\r\n                            <div class=\"input-wrap\">\r\n                              <ion-label>Meta Title</ion-label>\r\n                              <ion-input class=\"form-input\"\r\n                                [(ngModel)]=\"metaData.pageTitle\"></ion-input>\r\n                            </div>\r\n                          </ion-col>\r\n                          <ion-col size=\"12\">\r\n                            <div class=\"input-wrap\">\r\n                              <ion-label>Meta Description</ion-label>\r\n                              <ion-input class=\"form-input\"\r\n                                [(ngModel)]=\"metaData.metaDescription\"></ion-input>\r\n                            </div>\r\n                          </ion-col>\r\n                          <ion-col size=\"12\">\r\n                            <div class=\"input-wrap\">\r\n                              <ion-label>Meta Keywords</ion-label>\r\n                              <ion-input class=\"form-input\"\r\n                                [(ngModel)]=\"metaData.metaKeywords\"></ion-input>\r\n                            </div>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n                      \r\n                    </ng-container>\r\n\r\n                    <!-- FAQ -->\r\n                    <ng-container *ngSwitchCase=\"1\">\r\n                      <ion-grid>\r\n                        <ion-row *ngFor=\"let x of faq; let i = index;\">\r\n                          <ion-col size=\"6\" class=\"vertical-center\">\r\n                            <div>\r\n                              <p>{{i+1}})</p>\r\n                            </div>\r\n                            <ion-textarea rows=\"3\" type=\"text\" placeholder=\"Question\" class=\"form-input\" [(ngModel)]=\"x.quest\">\r\n                            </ion-textarea>\r\n                          </ion-col>\r\n                          <ion-col size=\"6\" class=\"vertical-center\">\r\n                            <ion-textarea rows=\"3\" type=\"text\" placeholder=\"Answer\" class=\"form-input\" [(ngModel)]=\"x.ans\">\r\n                            </ion-textarea>\r\n                            <i class=\"flaticon-null-19 remove-icon\" (click)=\"removeFaq(i)\"></i>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                        <ion-row class=\"ion-justify-content-center\">\r\n                          <ion-button (click)=\"addMoreFaq()\" fill=\"outline\" shape=\"round\" size=\"small\">\r\n                            Add FAQ\r\n                          </ion-button>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n                    </ng-container>\r\n\r\n                    <!-- Region -->\r\n                    <ng-container *ngSwitchCase=\"2\">\r\n                      <ion-grid>\r\n                        <ion-row>\r\n                          <div *ngIf=\"multiRegion && regions.length\">\r\n                            <ion-col size=\"12\">\r\n                              <ion-row>\r\n                                <div class=\"headings\">\r\n                                  Add Region\r\n                                </div>\r\n                              </ion-row>\r\n                              <ion-row>\r\n                                <ion-col size=\"12\">\r\n                                  <ion-select multiple=\"true\"\r\n                                    [value]=\"regionId\"\r\n                                    class=\"border f-s-14 i-s-p-10\"\r\n                                    (ionChange)=\"addRegion($event, 'new')\"\r\n                                    placeholder=\"Select Region\">\r\n                                    <ion-select-option [value]=\"region.id\"\r\n                                      *ngFor=\"let region of regions\">{{region.name}}\r\n                                    </ion-select-option>\r\n                                  </ion-select>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                            </ion-col>\r\n                          </div>\r\n                          <ng-container *ngIf=\"!multiRegion\">\r\n                            <ion-text color=\"danger\">Multi Region is disabled</ion-text>\r\n                          </ng-container>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n                    </ng-container>\r\n\r\n                    <!-- Slug Name -->\r\n                    <ng-container *ngSwitchCase=\"3\">\r\n                      <ion-grid>\r\n                        <ion-row *ngIf=\"isUniversal\">\r\n                          <ion-col size=\"12\">\r\n                            <h3>Category Slug</h3>\r\n                          </ion-col>\r\n                          <ion-col>\r\n                            <div class=\"input-wrap\">\r\n                              <ion-label>Slug Name <ion-text color=\"danger\">(<b class=\"cursor-p\"\r\n                                    (click)=\"sharedService.presentSlugAlert()\">CLICK HERE</b> for Slug Instructions)</ion-text>\r\n                              </ion-label>\r\n                              <ion-input type=\"text\" class=\"form-input\" [(ngModel)]='categoryData.slug.name'></ion-input>\r\n                            </div>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                        <ion-text *ngIf=\"!isUniversal\" color=\"danger\">\r\n                          Slug Name is disabled\r\n                        </ion-text>\r\n                      </ion-grid>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                \r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n            \r\n\r\n          </div>\r\n        </ion-content>\r\n      </super-tab>\r\n    </super-tabs-container>\r\n\r\n  </super-tabs>\r\n\r\n  <ion-footer no-border class=\"page-footer\">\r\n    <div class=\"main-container\">\r\n      <ion-button (click)=\"deleteCategoryConfirm(categoryData.id);\" shape=\"round\" class=\"btn-1 i-start\" color=\"danger\">\r\n        <i class=\"flaticon-null-21\"></i>\r\n        Delete\r\n      </ion-button>\r\n      <ion-button (click)=\"editCategory()\" shape=\"round\" class=\"btn-1 i-start\" color=\"success\">\r\n        <i class=\"flaticon-null-20 margin-icon\"></i>\r\n        Save\r\n      </ion-button>\r\n    </div>\r\n  </ion-footer>\r\n\r\n</ng-template>"

/***/ }),

/***/ "./src/app/admin/admin-shop/categories/categories.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-shop/categories/categories.module.ts ***!
  \******************************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "./src/app/admin/admin-shop/categories/categories.page.ts");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/fesm2015/ionic-super-tabs-angular.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/fesm2015/ng2-ckeditor.js");










const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]
    }
];
let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
            ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"]
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
    })
], CategoriesPageModule);



/***/ }),

/***/ "./src/app/admin/admin-shop/categories/categories.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-shop/categories/categories.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list ion-item ion-col {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n  align-items: center;\n}\n\n.loading {\n  background: transparent url(\"https://s5.gifyu.com/images/377-2.gif\") center no-repeat;\n}\n\n.product-headings {\n  background: var(--ion-color-medium);\n  padding: 8px;\n  margin: 0 -16px;\n}\n\n.product-search-wrap {\n  text-align: center;\n}\n\n.product-search-wrap ion-searchbar {\n  width: 300px;\n  max-width: 100%;\n  margin: auto;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.action-btn {\n  width: 50px;\n  height: 50px;\n  --border-radius: 100px;\n}\n\n.fixed-btn {\n  position: fixed;\n  bottom: 16px;\n  width: 1168px;\n  text-align: right;\n}\n\n.fixed-btn ion-button {\n  margin-left: 16px;\n}\n\n.product-active {\n  background-color: green;\n  width: 8px;\n  height: 8px;\n  min-width: 8px;\n  border-radius: 30px;\n  border: 1px solid green;\n  margin-right: 10%;\n}\n\n.product-inactive {\n  background-color: red;\n  width: 8px;\n  height: 8px;\n  min-width: 8px;\n  border-radius: 30px;\n  border: 1px solid red;\n  margin-right: 10%;\n}\n\nion-col.reorder {\n  -webkit-box-pack: end !important;\n          justify-content: flex-end !important;\n}\n\n#scroll1 {\n  overflow: hidden;\n  height: 80vh;\n}\n\n#scroll1:hover {\n  overflow-y: auto;\n}\n\n#scroll2 {\n  overflow: hidden;\n  height: 75vh;\n}\n\n#scroll2:hover {\n  overflow-y: auto;\n}\n\n.statusList {\n  text-align: center;\n}\n\n.statusList p {\n  font-size: medium;\n  border: 1px solid lightgray;\n  padding: 10px;\n  margin: 8px;\n  cursor: pointer;\n  border-radius: 6px;\n}\n\n@media screen and (min-height: 1200px) {\n  #scroll1 {\n    height: 92vh;\n  }\n\n  #scroll2 {\n    height: 87vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tc2hvcC9jYXRlZ29yaWVzL0M6XFxCV0ktQURNSU5TXFxTaGVpbi1BZG1pbi1Db2RlL3NyY1xcYXBwXFxhZG1pblxcYWRtaW4tc2hvcFxcY2F0ZWdvcmllc1xcY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLXNob3AvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxxRkFBQTtBQ0FGOztBREdFO0VBQ0UsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdFO0VBRUUsa0JBQUE7QUNESjs7QURFSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FOOztBRElFO0VBRUUsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0ZKOztBREtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0ZKOztBRElBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURFSTtFQUNFLGlCQUFBO0FDQU47O0FER0E7RUFDRSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO1VBQUEsb0NBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEREU7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURBQTtFQUNFO0lBQ0UsWUFBQTtFQ0dGOztFRERBO0lBQ0UsWUFBQTtFQ0lGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1zaG9wL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1jb2wge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2FkaW5nIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoJ2h0dHBzOi8vczUuZ2lmeXUuY29tL2ltYWdlcy8zNzctMi5naWYnKSBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtaGVhZGluZ3N7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIG1hcmdpbjogMCAtMTZweDtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LXNlYXJjaC13cmFwXHJcbiAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW9uLXNlYXJjaGJhcntcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mbGV4XHJcbiAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWJ0biB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuLmZpeGVkLWJ0bntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTZweDtcclxuICAgIHdpZHRoOiAxMTY4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG59XHJcbi5wcm9kdWN0LWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBtaW4td2lkdGg6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcbi5wcm9kdWN0LWluYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBtaW4td2lkdGg6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuaW9uLWNvbC5yZW9yZGVye1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jc2Nyb2xsMSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbn1cclxuXHJcbiNzY3JvbGwxOmhvdmVyIHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4jc2Nyb2xsMiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDc1dmg7XHJcbn1cclxuXHJcbiNzY3JvbGwyOmhvdmVyIHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5zdGF0dXNMaXN0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQobWluLWhlaWdodDogMTIwMHB4KSB7XHJcbiAgI3Njcm9sbDEge1xyXG4gICAgaGVpZ2h0OiA5MnZoO1xyXG4gIH1cclxuICAjc2Nyb2xsMiB7XHJcbiAgICBoZWlnaHQ6IDg3dmg7XHJcbiAgfVxyXG59IiwiaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWNvbCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2FkaW5nIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiaHR0cHM6Ly9zNS5naWZ5dS5jb20vaW1hZ2VzLzM3Ny0yLmdpZlwiKSBjZW50ZXIgbm8tcmVwZWF0O1xufVxuXG4ucHJvZHVjdC1oZWFkaW5ncyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMCAtMTZweDtcbn1cblxuLnByb2R1Y3Qtc2VhcmNoLXdyYXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZHVjdC1zZWFyY2gtd3JhcCBpb24tc2VhcmNoYmFyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi5maXhlZC1idG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTZweDtcbiAgd2lkdGg6IDExNjhweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZml4ZWQtYnRuIGlvbi1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLnByb2R1Y3QtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBtaW4td2lkdGg6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4ucHJvZHVjdC1pbmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIG1pbi13aWR0aDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG5pb24tY29sLnJlb3JkZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbiNzY3JvbGwxIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiA4MHZoO1xufVxuXG4jc2Nyb2xsMTpob3ZlciB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbiNzY3JvbGwyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiA3NXZoO1xufVxuXG4jc2Nyb2xsMjpob3ZlciB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5zdGF0dXNMaXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN0YXR1c0xpc3QgcCB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDEyMDBweCkge1xuICAjc2Nyb2xsMSB7XG4gICAgaGVpZ2h0OiA5MnZoO1xuICB9XG5cbiAgI3Njcm9sbDIge1xuICAgIGhlaWdodDogODd2aDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-shop/categories/categories.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-shop/categories/categories.page.ts ***!
  \****************************************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/image-modal/image-modal.page */ "./src/app/image-modal/image-modal.page.ts");
/* harmony import */ var src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product/product.service */ "./src/app/services/product/product.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var export_to_csv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! export-to-csv */ "./node_modules/export-to-csv/build/index.js");
/* harmony import */ var export_to_csv__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(export_to_csv__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_label_label_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/label/label.service */ "./src/app/services/label/label.service.ts");
/* harmony import */ var src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/config/config.service */ "./src/app/services/config/config.service.ts");
/* harmony import */ var src_app_services_brands_brands_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/brands/brands.service */ "./src/app/services/brands/brands.service.ts");
/* harmony import */ var src_app_components_image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/image-editor/image-editor.component */ "./src/app/components/image-editor/image-editor.component.ts");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");













let CategoriesPage = class CategoriesPage {
    constructor(router, events, loadingController, alertController, 
    // private camera: Camera,
    // private imagePicker: ImagePicker,
    // private actionSheetController: ActionSheetController,
    route, modalController, productService, toastController, labelService, 
    // private logglyService: LogglyLoggerService,
    configService, brandService, sharedService) {
        this.router = router;
        this.events = events;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.route = route;
        this.modalController = modalController;
        this.productService = productService;
        this.toastController = toastController;
        this.labelService = labelService;
        this.configService = configService;
        this.brandService = brandService;
        this.sharedService = sharedService;
        this.category = {
            name: '',
            isExclusive: false,
        };
        this.metaData = {
            pageTitle: '',
            metaDescription: '',
            metaKeywords: ''
        };
        this.listofbase64Image = [];
        this.imageResponse = [];
        this.categoryData = {};
        this.prod = [];
        this.showNoProducts = false;
        this.searchProduct = '';
        this.categoryStatus = true;
        this.showLoader = true;
        this.subcategories = [];
        this.noSubcategories = false;
        this.subcategoriesLoader = true;
        this.customWidthVal = 4;
        this.customHeightVal = 3;
        this.banner = [];
        this.options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            filename: 'Products',
            decimalSeparator: '.',
            showLabels: true,
            showTitle: false,
            useTextFile: false,
            useBom: true,
            useKeysAsHeaders: true,
        };
        this.CATEGORIES_LABELS = {};
        this.SHARED_LABELS = {};
        this.multiRegion = false;
        this.regions = [];
        this.regionId = [];
        this.description = '';
        this.slug = {
            name: '',
            updatedAt: new Date(),
            updatedBy: 'admin'
        };
        this.isUniversal = false;
        this.sideMenu = ["Web Seo", "FAQ", "Region", "Slug Name"];
        this.selectedId = 0;
        this.faq = [];
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.categoryData = this.router.getCurrentNavigation().extras.state.categoryData;
                // console.log(this.categoryData);
                if (this.categoryData.metaData) {
                    this.metaData = this.categoryData.metaData;
                }
                this.isSubcategories = this.categoryData.isSubcategories;
                this.isSubcategoriesStatus = this.categoryData.isSubcategories;
                if (this.categoryData) {
                    this.categoryStatus = this.categoryData.status ? true : false;
                    if (!this.categoryData.hasOwnProperty('banner')) {
                        this.categoryData.banner = [{ size: null, url: '' }];
                    }
                }
                // console.log('categoryData', this.categoryData);
                // console.log('categoryData isSubcategories', this.isSubcategories);
                if (this.categoryData.regionId) {
                    this.regionId = this.categoryData.regionId;
                }
            }
        });
    }
    changeComponent(i) {
        this.selectedId = i;
    }
    onRenderItems(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingController.create({
                message: 'Please Wait...',
                duration: 3000
            });
            yield this.loader.present();
            // console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
            const start = event.detail.from;
            // tslint:disable-next-line: variable-name
            const id = this.prod[start].id;
            // console.log('pLength', this.prod.length);
            // console.log('start', start);
            const end = event.detail.to;
            // console.log('end', end);
            if (start < end && end !== this.prod.length - 1) {
                // console.log('from top to mid');
                const firstDate = this.prod[end].sortedAt.toDate().getTime();
                const secondDate = this.prod[end + 1].sortedAt.toDate().getTime();
                // console.log('fistdate', firstDate);
                // console.log('seconddate', secondDate);
                const changedDate = (firstDate + secondDate) / 2;
                // console.log('finalDate', new Date(changedDate));
                this.productService.updateproductsPosition(id, new Date(changedDate));
            }
            // tslint:disable-next-line: one-line
            else if (start < end && end === this.prod.length - 1) {
                // console.log('from top to bottom');
                const changedDate = this.prod[end].sortedAt.toDate().getTime() - 5 * 60000;
                this.productService.updateproductsPosition(id, new Date(changedDate));
            }
            // tslint:disable-next-line: one-line
            else if (start > end && end !== 0) {
                // console.log('from bottom to mid');
                const firstDate = this.prod[end].sortedAt.toDate().getTime();
                const secondDate = this.prod[end - 1].sortedAt.toDate().getTime();
                // console.log('fistdate', firstDate);
                // console.log('seconddate', secondDate);
                const changedDate = (firstDate + secondDate) / 2;
                // console.log('finalDate', new Date(changedDate));
                this.productService.updateproductsPosition(id, new Date(changedDate));
            }
            // tslint:disable-next-line: one-line
            else {
                // console.log('from bottom to top');
                const changedDate = this.prod[end].sortedAt.toDate().getTime() + 5 * 60000;
                this.productService.updateproductsPosition(id, new Date(changedDate));
            }
            const draggedItem = this.prod.splice(event.detail.from, 1)[0];
            this.prod.splice(event.detail.to, 0, draggedItem);
            event.detail.complete();
            setTimeout(() => {
                if (this.loader) {
                    this.loader.dismiss();
                }
            }, 3000);
        });
    }
    onReorderSubcategoires(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingController.create({
                message: 'Please Wait...',
                duration: 3000
            });
            yield this.loader.present();
            // console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
            const start = event.detail.from;
            // tslint:disable-next-line: variable-name
            const id = this.subcategories[start].id;
            // console.log('pLength', this.subcategories.length);
            // console.log('start', start);
            const end = event.detail.to;
            // console.log('end', end);
            if (start < end && end !== this.subcategories.length - 1) {
                // console.log('from top to mid');
                const firstDate = this.subcategories[end].sortedAt.toDate().getTime();
                const secondDate = this.subcategories[end + 1].sortedAt.toDate().getTime();
                // console.log('fistdate', firstDate);
                // console.log('seconddate', secondDate);
                const changedDate = (firstDate + secondDate) / 2;
                // console.log('finalDate', new Date(changedDate));
                this.productService.updateSubcategoriesPosition(id, new Date(changedDate), this.categoryData.id);
            }
            // tslint:disable-next-line: one-line
            else if (start < end && end === this.subcategories.length - 1) {
                // console.log('from top to bottom');
                const changedDate = this.subcategories[end].sortedAt.toDate().getTime() - 5 * 60000;
                this.productService.updateSubcategoriesPosition(id, new Date(changedDate), this.categoryData.id);
            }
            // tslint:disable-next-line: one-line
            else if (start > end && end !== 0) {
                // console.log('from bottom to mid');
                const firstDate = this.subcategories[end].sortedAt.toDate().getTime();
                const secondDate = this.subcategories[end - 1].sortedAt.toDate().getTime();
                // console.log('fistdate', firstDate);
                // console.log('seconddate', secondDate);
                const changedDate = (firstDate + secondDate) / 2;
                // console.log('finalDate', new Date(changedDate));
                this.productService.updateSubcategoriesPosition(id, new Date(changedDate), this.categoryData.id);
            }
            // tslint:disable-next-line: one-line
            else {
                // console.log('from bottom to top');
                const changedDate = this.subcategories[end].sortedAt.toDate().getTime() + 5 * 60000;
                this.productService.updateSubcategoriesPosition(id, new Date(changedDate), this.categoryData.id);
            }
            const draggedItem = this.subcategories.splice(event.detail.from, 1)[0];
            this.subcategories.splice(event.detail.to, 0, draggedItem);
            event.detail.complete();
            setTimeout(() => {
                if (this.loader) {
                    this.loader.dismiss();
                }
            }, 3000);
        });
    }
    ngOnInit() {
        this.ckeConfig = {
            allowedContent: true,
            toolbar: [
                ['Bold', 'Italic', 'Underline', '-', 'NumberedList', 'BulletedList',
                    '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'Format', 'FontSize', 'Link']
            ],
            height: 150
        };
    }
    getDateTimeFormat(date) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(date).format('MMM D, YYYY hh:mm a');
    }
    ionViewWillEnter() {
        if (this.categoryData) {
            this.categoryData.description = 'description' in this.categoryData ? this.categoryData.description : '';
            this.categoryData.isExclusive = 'isExclusive' in this.categoryData ? this.categoryData.isExclusive : this.category.isExclusive;
            this.events.publish('product:getProductsForCategory', this.categoryData.id);
            this.events.publish('product:getSubcategories', this.categoryData.id);
            if (!this.categoryData.hasOwnProperty('banner')) {
                this.categoryData.banner = [{ size: null, url: null }];
            }
            this.faq = "faq" in this.categoryData ? this.categoryData.faq : this.faq;
        }
        this.initializeSubscriptions();
        this.description = '';
        this.SHARED_LABELS = this.labelService.labels['SHARED'];
        this.CATEGORIES_LABELS = this.labelService.labels['CATEGORIES'];
        this.multiRegion = this.configService.environment.multiRegion;
        this.isUniversal = this.sharedService.isUniversal();
        if (this.multiRegion) {
            this.events.publish('multi-region:getActiveStatus');
            this.events.publish('multi-region:getAllActiveRegions');
        }
    }
    ionViewWillLeave() {
        this.removeSubscriptions();
    }
    initializeSubscriptions() {
        this.events.subscribe('product:addCategorySuccess', () => {
            this.loading.dismiss();
            this.category.name = '';
            this.category.isExclusive = false;
            this.imageResponse = [];
            this.banner = [];
            this.presentAlert('Category Added Successfully', true);
        });
        this.events.subscribe('product:deleteCategorySuccess', () => {
            // console.log('in deleteCategorySuccess subscription');
            this.loading.dismiss();
            this.presentAlert('Category deleted successfully!', true);
        });
        this.events.subscribe('product:editCategorySuccess', () => {
            // console.log('in editCategorySuccess subscribe');
            this.loading.dismiss();
            this.presentAlert('Category edited successfully!', true);
        });
        this.events.subscribe('product:deleteCategoryFailure', () => {
            this.loading.dismiss();
            this.presentAlert('Category deleted failed');
        });
        this.events.subscribe('product:editCategoryFailure', () => {
            this.presentAlert('Category edit failed');
        });
        this.events.subscribe('product:publishProductsForCategory', (products) => {
            this.prod = products;
            this.showNoProducts = false;
            this.showLoader = false;
        });
        this.events.subscribe('product:noProducts', () => {
            this.showLoader = false;
            this.showNoProducts = true;
        });
        this.events.subscribe('product:updateProductPostionSucess', () => {
            this.loader.dismiss();
        });
        this.events.subscribe('product:publishSubcategories', (data) => {
            // console.log('in publishSubcategories sub');
            this.subcategories = data;
            this.noSubcategories = false;
            this.subcategoriesLoader = false;
        });
        this.events.subscribe('product:noSubcategories', () => {
            // console.log('in noSubcategories sub');
            this.noSubcategories = true;
            this.subcategoriesLoader = false;
        });
        this.events.subscribe('product:updateSubcategoriesPostionSucess', () => {
            this.loader.dismiss();
        });
        this.events.subscribe('multi-region:publishActiveStatus', (data) => {
            if (data) {
                this.multiRegion = data.active;
            }
        });
        this.events.subscribe('multi-region:publishAllActiveRegions', (regions) => {
            if (regions.length) {
                this.regions = regions;
            }
        });
    }
    addCategory() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(this.category)
            if (this.category.name === '') {
                this.presentAlert('Please enter category name');
            }
            else if (!this.validateFaq()) {
                this.sharedService.presentAlert('FAQ cant be empty, either remove the field or fill them');
            }
            else {
                yield this.presentLoading();
                this.category.metaData = this.metaData;
                this.category.faq = this.faq;
                this.events.publish('product:addCategory', this.category, this.imageResponse, this.categoryStatus, this.banner, this.regionId);
            }
        });
    }
    addRegion(e, type) {
        // console.log('regionId', e.target.value);
        if (type === 'edit') {
            this.regionId = e.target.value;
            this.categoryData['regionId'] = e.target.value;
        }
        else {
            this.regionId = e.target.value;
        }
    }
    updateNewCategoryStatus() {
        if (this.categoryStatus === true) {
            this.categoryStatus = true;
        }
        else {
            this.categoryStatus = false;
        }
    }
    updateEditCategoryStatus() {
        if (this.categoryStatus === true) {
            this.categoryStatus = true;
        }
        else {
            this.categoryStatus = false;
        }
        // console.log(this.categoryStatus);
    }
    removeImage(type) {
        if (type === 'catImg') {
            this.imageResponse.splice(0, 1);
        }
        else {
            this.banner.splice(0, 1);
        }
    }
    removeEditImage(type) {
        if (type === 'catImg') {
            this.categoryData.image = { size: null, url: '', thumb: '', mob: '' };
        }
        else {
            this.categoryData.banner = { size: null, url: '', thumb: '', mob: '' };
        }
    }
    editCategory() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("this.validateFaq()", this.validateFaq());
            if (this.categoryData.name === '' || this.categoryData.name === null) {
                this.presentAlert('Please enter category name');
            }
            else if (!this.validateFaq()) {
                this.sharedService.presentAlert('FAQ cant be empty, either remove the field or fill them');
            }
            else {
                if (this.isUniversal) {
                    const slugName = this.sharedService.createSlugName(this.categoryData.slug.name);
                    const sameSlugExists = yield this.sharedService.sameSlugExists('categories', this.categoryData.id, slugName);
                    if (sameSlugExists) {
                        this.presentAlert('Same slug already exists, please try with another slug name');
                        return;
                    }
                    else {
                        this.categoryData['slug'] = {
                            name: slugName,
                            updatedAt: new Date(),
                            updatedBy: 'admin'
                        };
                    }
                }
                // console.log('edit category logic...');
                this.loading = yield this.loadingController.create({
                    message: 'Please Wait...',
                    duration: 10000
                });
                this.categoryData.metaData = this.metaData;
                this.categoryData.faq = this.faq;
                console.log('edit', this.categoryData);
                yield this.loading.present();
                this.events.publish('product:editCategory', this.categoryData, this.imageResponse, this.categoryStatus, this.banner, this.regionId);
            }
        });
    }
    deleteCategoryConfirm(categoryId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'Are you sure you want to delete this category',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            // console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            // console.log('Confirm Okay');
                            this.deleteCategory(categoryId);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteCategory(categoryId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please Wait...',
                duration: 10000
            });
            yield this.loading.present();
            this.events.publish('product:deleteCategory', categoryId);
        });
    }
    uploadImage(files, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (type == 'bannerImg') {
                this.customWidthVal = 3.42;
                this.customHeightVal = 1;
            }
            const modal = yield this.modalController.create({
                component: src_app_components_image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_11__["ImageEditorComponent"],
                componentProps: {
                    aspectRatioWidthVal: this.customWidthVal,
                    aspectRatioHeightVal: this.customHeightVal,
                },
                cssClass: 'custom-img-editor'
            });
            yield modal.present();
            modal.onDidDismiss().then(res => {
                if (res && res.data) {
                    let size = this.calculateImageSize(res.data || '');
                    // console.log('fileSize :', size);
                    if (type == 'bannerImg') {
                        // console.log('do banner image')
                        this.banner = [];
                        this.banner.push({ imgData: res.data || '', imgSize: size });
                        // console.log("banner",this.banner,"categoryData",this.categoryData.banner)
                    }
                    else {
                        this.imageResponse = [];
                        this.imageResponse.push({ imgData: res.data || '', imgSize: size });
                        // console.log("image",this.imageResponse,"categoryData",this.categoryData.image)
                    }
                }
            });
        });
    }
    calculateImageSize(base64String) {
        let padding, inBytes, base64StringLength;
        if (base64String.endsWith('==')) {
            padding = 2;
        }
        else if (base64String.endsWith('=')) {
            padding = 1;
        }
        else {
            padding = 0;
        }
        base64StringLength = base64String.length;
        // console.log(base64StringLength);
        inBytes = (base64StringLength / 4) * 3 - padding;
        // console.log(inBytes);
        const kbytes = inBytes / 1000;
        return kbytes;
    }
    cancel() {
        this.router.navigate(['admin-categories']);
    }
    imgZoom(img) {
        this.modalController.create({
            component: src_app_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_4__["ImageModalPage"],
            cssClass: 'photo-modal-class',
            componentProps: {
                imgs: [{ url: img }],
                index: 0
            }
        }).then(modal => modal.present());
    }
    goToShop() {
        this.router.navigate(['admin-categories']);
    }
    presentAlert(desc, action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.alert = yield this.alertController.create({
                message: desc,
                buttons: [{
                        text: 'Ok',
                        handler: () => {
                            // console.log('Confirm Okay');
                            if (action === true) {
                                this.router.navigate(['admin-categories']);
                            }
                        }
                    }]
            });
            yield this.alert.present();
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
    clearSearchProduct() {
        this.searchProduct = null;
    }
    editProduct(item) {
        // console.log(item);
        const navigationExtras = {
            state: {
                product: item,
                productId: item.id,
                routeFromCategories: true
            }
        };
        this.router.navigate(['new-product'], navigationExtras);
    }
    // addSubcategory() {
    //   const navigationExtras: NavigationExtras = {
    //     state: {
    //       categoryId: this.categoryData.id
    //     }
    //   };
    //   this.router.navigate(['add-subcategories'], navigationExtras);
    // }
    // async openAddSubCategoryModal() {
    //   const modal = await this.modalController.create({
    //   component: AddSubcategoriesPage,
    //   cssClass: 'custom-modal',
    //   componentProps: { categoryId: this.categoryData.id }
    //   });
    //   await modal.present();
    // }
    // async openEditSubCategoryModal(item) {
    //   console.log('item before:', item);
    //   if (!item.hasOwnProperty('isExclusive')) {
    //     item['isExclusive'] = false;
    //   };
    //   console.log('item after:', item);
    //   const modal = await this.modalController.create({
    //   component: AddSubcategoriesPage,
    //   cssClass: 'custom-modal big-modal',
    //   componentProps: { 
    //     categoryId: this.categoryData.id,
    //     subcategoryData: item
    //   }
    //   });
    //   await modal.present();
    // }
    editSubcategory(item) {
        const navigationExtras = {
            state: {
                categoryId: this.categoryData.id,
                subcategoryData: item
            }
        };
        this.router.navigate(['add-subcategories'], navigationExtras);
    }
    changeSubcategoriesStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.isSubcategoriesStatus) {
                this.isSubcategoriesStatus = false;
            }
            else {
                this.isSubcategoriesStatus = true;
            }
            yield this.presentLoading();
            this.events.publish('product:changeSubcategoriesStatus', this.isSubcategoriesStatus, this.categoryData.id);
        });
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
    getPriceListFields(priceList) {
        let fields = {
            type: [],
            price: [],
            discountedPrice: [],
            totalQuantity: [],
            shippingWeight: []
        };
        priceList.forEach((item, index) => {
            fields.type[index] = item.weight ? item.weight : '';
            fields.price[index] = item.price ? item.price : 0,
                fields.discountedPrice[index] = item.discountedPrice ? item.discountedPrice : 0,
                fields.totalQuantity[index] = item.totalQuantity ? item.totalQuantity : '0';
            fields.shippingWeight[index] = item.shippingWeight ? item.shippingWeight : 0;
        });
        return fields;
    }
    exportProducts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.prod && this.prod.length > 0) {
                yield this.presentLoading();
                if (!this.categories) {
                    this.categories = yield this.productService.getAllCategoriesForSideMenu();
                }
                if (!this.brands) {
                    this.brands = yield this.brandService.getAllBrandsForSideMenu();
                }
                if (!this.allSubcategories) {
                    this.allSubcategories = yield this.productService.getAllSubcategoriesForSideMenu();
                }
                this.downloadProducts();
            }
            else {
                this.presentAlert('No products for exporting');
            }
        });
    }
    downloadProducts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.options.filename = this.categoryData.name + ' ' + this.getDateTimeFormat(new Date);
            let products = [];
            this.prod.forEach(item => {
                let product = item;
                let productCategories = product.categories;
                let categoryList = [];
                let productBrands = product.brands;
                let brandList = [];
                if (this.categories) {
                    if (product.categories) {
                        productCategories.forEach(categoryId => {
                            let result = this.categories.find(obj => {
                                return obj.id === categoryId;
                            });
                            if (result) {
                                categoryList.push(result.name);
                            }
                            if (this.allSubcategories) {
                                let resultSub = this.allSubcategories.find(obj => {
                                    return obj.id === categoryId;
                                });
                                if (resultSub) {
                                    let catResult = this.categories.find(obj => {
                                        return obj.id === resultSub.categoryId;
                                    });
                                    if (catResult) {
                                        categoryList.push(catResult.name + '-' + resultSub.name);
                                    }
                                }
                            }
                        });
                    }
                }
                if (this.brands) {
                    if (product.brands) {
                        productBrands.forEach(brandId => {
                            let result = this.brands.find(obj => {
                                return obj.id === brandId;
                            });
                            if (result) {
                                brandList.push(result.name);
                            }
                        });
                    }
                }
                let fields = {};
                if (product.isPriceList) {
                    fields = this.getPriceListFields(product.priceList);
                }
                else {
                    product.price = product.price ? product.price : 0;
                    product.discountedPrice = product.discountedPrice ? product.discountedPrice : 0;
                    product.purchasePrice = product.purchasePrice ? product.purchasePrice : 0;
                    product.quanity = product.quanity ? product.quanity : '';
                    product.shippingWt = product.shippingWt ? product.shippingWt : 0;
                }
                products.push({
                    sku: product.productCode ? product.productCode : '',
                    name: product.prodName ? product.prodName : '',
                    active: product.status ? 'YES' : 'NO',
                    variants: product.isPriceList ? 'YES' : 'NO',
                    variantType: product.variantType ? product.variantType : 'other',
                    variantName: fields['type'] ? fields['type'].join() : '',
                    price: fields['price'] ? fields['price'].join() : product.prodPrice,
                    discountedPrice: fields['discountedPrice'] ? fields['discountedPrice'].join() : product.discountedPrice,
                    purchasePrice: fields['purchasePrice'] ? fields['purchasePrice'].join() : product.purchasePrice,
                    quantity: fields['totalQuantity'] ? fields['totalQuantity'].join() : product.productQty,
                    shippingWt: fields['shippingWeight'] ? fields['shippingWeight'].join() : product.shippingWt,
                    minQuanity: product.minQty ? product.minQty : '',
                    maxQuantity: product.maxQty ? product.maxQty : '',
                    productDescription: product.prodDesc ? product.prodDesc : '',
                    hsnCode: product.hsnCode ? product.hsnCode : '',
                    gst: product.gst ? product.gst : '',
                    color: product.color && product.color.name && product.color.code ? product.color.name + ',' + product.color.code : '',
                    keywords: product.searchKeywords ? product.searchKeywords.join() : '',
                    out_of_stock: product.stopWhenNoQty ? 'YES' : 'NO',
                    catSubcat: product.categories ? categoryList.join(';') : '',
                    brands: product.brands ? brandList.join(';') : '',
                });
            });
            if (this.loading) {
                this.loading.dismiss();
            }
            const csvExporter = new export_to_csv__WEBPACK_IMPORTED_MODULE_7__["ExportToCsv"](this.options);
            csvExporter.generateCsv(products);
        });
    }
    changeExclusive() {
        if (this.category.hasOwnProperty('isExclusive')) {
            this.category.isExclusive = !this.category.isExclusive;
        }
        else {
            this.category['isExclusive'] = true;
        }
    }
    changeExclusiveEdit() {
        if (this.categoryData.hasOwnProperty('isExclusive')) {
            this.categoryData.isExclusive = !this.categoryData.isExclusive;
        }
        else {
            this.categoryData['isExclusive'] = true;
        }
    }
    // ? FAQ Functions Start
    removeFaq(i) {
        this.faq.splice(i, 1);
    }
    addMoreFaq() {
        this.faq.push({ quest: '', ans: '' });
    }
    validateFaq() {
        let valid = true;
        for (const faq of this.faq) {
            if (!(faq.quest.length && faq.ans.length)) {
                console.log('address:, ', faq.ans.length);
                valid = false;
            }
        }
        return valid;
    }
    // ? FAQ Functions End
    removeSubscriptions() {
        this.events.unsubscribe('product:addCategorySuccess');
        this.events.unsubscribe('product:deleteCategorySuccess');
        this.events.unsubscribe('product:editCategorySuccess');
        this.events.unsubscribe('product:deleteCategoryFailure');
        this.events.unsubscribe('product:editCategoryFailure');
        this.events.unsubscribe('product:publishProductsForCategory');
        this.events.unsubscribe('product:noProducts');
        this.events.unsubscribe('product:updateProductPostionSucess');
        this.events.unsubscribe('product:publishSubcategories');
        this.events.unsubscribe('product:noSubcategories');
        this.events.unsubscribe('product:updateSubcategoriesPostionSucess');
        this.events.unsubscribe('multi-region:publishActiveStatus');
        this.events.unsubscribe('multi-region:publishAllActiveRegions');
    }
};
CategoriesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: src_app_services_label_label_service__WEBPACK_IMPORTED_MODULE_8__["LabelService"] },
    { type: src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"] },
    { type: src_app_services_brands_brands_service__WEBPACK_IMPORTED_MODULE_10__["BrandsService"] },
    { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"] }
];
CategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: __webpack_require__(/*! raw-loader!./categories.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-shop/categories/categories.page.html"),
        styles: [__webpack_require__(/*! ./categories.page.scss */ "./src/app/admin/admin-shop/categories/categories.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        src_app_services_label_label_service__WEBPACK_IMPORTED_MODULE_8__["LabelService"],
        src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"],
        src_app_services_brands_brands_service__WEBPACK_IMPORTED_MODULE_10__["BrandsService"],
        src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"]])
], CategoriesPage);



/***/ })

}]);
//# sourceMappingURL=admin-admin-shop-categories-categories-module-es2015.js.map