(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-shop-new-product-new-product-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-shop/new-product/new-product.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-shop/new-product/new-product.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button class=\"custom-back-button\"></ion-back-button>\r\n    </ion-buttons>\r\n    <div class=\"header-logo\"\r\n      slot=\"start\"><img src=\"../../../assets/img/shop-logo.png\"></div>\r\n    <ion-title text-center\r\n      *ngIf=\"editproductData === undefined\">New Product</ion-title>\r\n    <ion-title text-center\r\n      *ngIf=\"editproductData !== undefined\">Edit Product</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<super-tabs no-shadow\r\n  no-border>\r\n  <super-tabs-toolbar slot=\"top\">\r\n    <super-tab-button (click)='showFooter = true'>\r\n      <ion-label>Basic</ion-label>\r\n    </super-tab-button>\r\n    <super-tab-button (click)='showFooter = true'>\r\n      <ion-label>Description</ion-label>\r\n    </super-tab-button>\r\n    <super-tab-button (click)='showFooter = true'>\r\n      <ion-label>Categories and Brands</ion-label>\r\n    </super-tab-button>\r\n    <super-tab-button (click)='showFooter = true'>\r\n      <ion-label>Images</ion-label>\r\n    </super-tab-button>\r\n    <super-tab-button (click)='showFooter = false'>\r\n      <ion-label>Advanced (optional)</ion-label>\r\n    </super-tab-button>\r\n  </super-tabs-toolbar>\r\n  <!-- new product -->\r\n  <super-tabs-container *ngIf=\"!editproductId\">\r\n    <super-tab>\r\n      <ion-content>\r\n        <div class=\"main-container fixed-height\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <div class=\"input-wrap\">\r\n                  <div class=\"flex-space-between\">\r\n                    <div>\r\n                      <ion-label>Product Name(please don't use \"/\" in name)\r\n                      </ion-label>\r\n                    </div>\r\n                    <div class=\"flex-label\"\r\n                      *ngIf=\"userRole != 'vendor'\">\r\n                      <ion-label>Show</ion-label>&nbsp;&nbsp;\r\n                      <ion-col size=\"2\"\r\n                        class=\"ion-no-padding\">\r\n                        <div class=\"toggle-btn\">\r\n                          <label class=\"switch\">\r\n                            <input color=\"primary\"\r\n                              type=\"checkbox\"\r\n                              [checked]=\"product.status\"\r\n                              (click)=\"updateNewProductStatus()\">\r\n                            <span class=\"slider round\"></span>\r\n                          </label>\r\n                        </div>\r\n                      </ion-col>\r\n                    </div>\r\n                  </div>\r\n                  <ion-input class=\"form-input\"\r\n                    [(ngModel)]=\"product.prodName\"></ion-input>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row *ngIf=\"!product.isPriceList; else showPriceList\">\r\n              <ion-col class=\"flex\"\r\n                size='2'>\r\n                <ion-label>Price</ion-label>\r\n              </ion-col>\r\n              <ion-col class=\"flex\"\r\n                size='2'>\r\n\r\n                <ion-label>Single Price</ion-label>&nbsp;&nbsp;\r\n                <ion-col size=\"2\"\r\n                  class=\"ion-no-padding\">\r\n                  <div class=\"toggle-btn\">\r\n                    <label class=\"switch\">\r\n                      <input color=\"primary\"\r\n                        type=\"checkbox\"\r\n                        (click)=\"priceToggle()\"\r\n                        [checked]=\"product.isPriceList\">\r\n                      <span class=\"slider round\"></span>\r\n                    </label>\r\n                  </div>\r\n                </ion-col>\r\n\r\n\r\n              </ion-col>\r\n              <ion-col class=\"flex\"\r\n                size='4'>\r\n                <ion-label><strong>Show out of stock for 0 quantity</strong>\r\n                </ion-label>&nbsp;&nbsp;\r\n                <ion-col size=\"2\"\r\n                  class=\"ion-no-padding\">\r\n                  <div class=\"toggle-btn\">\r\n                    <label class=\"switch\">\r\n                      <input color=\"primary\"\r\n                        type=\"checkbox\"\r\n                        (click)=\"stopOrderWhenNoQtyToggle()\"\r\n                        [checked]=\"product.stopWhenNoQty\">\r\n                      <span class=\"slider round\"></span>\r\n                    </label>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-col>\r\n              <ion-col class=\"headings\"\r\n                style=\"display: flex;align-items: center;\"\r\n                size='4'>\r\n                <div>Gst Exclusive</div>&nbsp;&nbsp;\r\n                <div class=\"toggle-btn\">\r\n                  <label class=\"switch\">\r\n                    <input type=\"checkbox\"\r\n                      (click)=\"toggleGstExclusive()\"\r\n                      [checked]=\"product.gstExclusive\">\r\n                    <span class=\"slider round\"></span>\r\n                  </label>\r\n                </div>\r\n              </ion-col>\r\n              <br>\r\n              <ion-col size=\"4\">\r\n                <ion-label *ngIf=\"!product.gstExclusive\">Price ( inclusive of\r\n                  all taxes) </ion-label>\r\n                <ion-label *ngIf=\"product.gstExclusive\">Price ( exclusive of all\r\n                  taxes) </ion-label>\r\n                <ion-input type=\"number\"\r\n                  class=\"form-input\"\r\n                  [(ngModel)]=\"product.prodPrice\"></ion-input>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"4\">\r\n                <div class=\"input-wrap\">\r\n                  <ion-label *ngIf=\"!product.gstExclusive\">Discounted Price (\r\n                    inclusive of all taxes) </ion-label>\r\n                  <ion-label *ngIf=\"product.gstExclusive\">Discounted Price (\r\n                    exclusive of all taxes) </ion-label>\r\n                  <ion-input type=\"number\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"product.discountedPrice\"></ion-input>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"4\">\r\n                <div class=\"input-wrap\">\r\n                  <ion-label>Purchase Price </ion-label>\r\n                  <ion-input type=\"number\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"product.purchasePrice\"></ion-input>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-label>Quantity</ion-label>\r\n                <ion-input type=\"text\"\r\n                  class=\"form-input\"\r\n                  [(ngModel)]=\"product.productQty\"></ion-input>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <div class=\"input-wrap\">\r\n                  <ion-label>Shipping Weight</ion-label>\r\n                  <ion-input type=\"number\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"product.shippingWeight\"></ion-input>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ng-template #showPriceList>\r\n              <ion-row>\r\n                <ion-col size=\"2\"\r\n                  class=\"flex\">\r\n                  <ion-label>Price List</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2\"\r\n                  class=\"flex\">\r\n\r\n                  <ion-label>Variants</ion-label>&nbsp;&nbsp;\r\n                  <ion-col size=\"2\"\r\n                    class=\"ion-no-padding\">\r\n                    <div class=\"toggle-btn\">\r\n                      <label class=\"switch\">\r\n                        <input color=\"primary\"\r\n                          type=\"checkbox\"\r\n                          (click)=\"priceToggle()\"\r\n                          [checked]=\"product.isPriceList\">\r\n                        <span class=\"slider round\"></span>\r\n                      </label>\r\n                    </div>\r\n                  </ion-col>\r\n\r\n\r\n\r\n                </ion-col>\r\n                <ion-col size=\"4\"\r\n                  class=\"flex\">\r\n                  <ion-label><strong>Show out of stock for 0 quantity</strong>\r\n                  </ion-label>&nbsp;&nbsp;\r\n                  <ion-col size=\"2\"\r\n                    class=\"ion-no-padding\">\r\n                    <div class=\"toggle-btn\">\r\n                      <label class=\"switch\">\r\n                        <input color=\"primary\"\r\n                          type=\"checkbox\"\r\n                          (click)=\"stopOrderWhenNoQtyToggle()\"\r\n                          [checked]=\"product.stopWhenNoQty\">\r\n                        <span class=\"slider round\"></span>\r\n                      </label>\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-col>\r\n                <ion-col class=\"headings\"\r\n                  style=\"display: flex;align-items: center;\"\r\n                  size='4'>\r\n                  <div>Gst Exclusive</div>&nbsp;&nbsp;\r\n                  <div class=\"toggle-btn\">\r\n                    <label class=\"switch\">\r\n                      <input type=\"checkbox\"\r\n                        (click)=\"toggleGstExclusive()\"\r\n                        [checked]=\"product.gstExclusive\">\r\n                      <span class=\"slider round\"></span>\r\n                    </label>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"6\"\r\n                  class=\"flex\">\r\n                  <ion-label>Type:</ion-label>\r\n                  <ion-select class=\"variant-select\"\r\n                    [(ngModel)]=\"product.variantType\"\r\n                    *ngIf=\"!variantTypeLoader\"\r\n                    [value]=\"product.variantType\">\r\n                    <ion-select-option [value]=\"att.type\"\r\n                      *ngFor=\"let att of variantsAttributes\"\r\n                      style=\"text-transform: capitalize;\">{{att.type}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-spinner *ngIf=\"variantTypeLoader\"></ion-spinner>\r\n                </ion-col>\r\n                <ion-col size=\"6\"\r\n                  class=\"flex\">\r\n                  <ion-button (click)=\"importTemplate()\"\r\n                    fill=\"outline\"\r\n                    size=\"small\">\r\n                    Import Template\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-text color=\"danger\"\r\n                  style=\"margin-left: 8px;\">\r\n                  <p>Use pieces for wholesale. Specify number of pieces in\r\n                    pieces column and price / piece in price\r\n                    column.</p>\r\n                </ion-text>\r\n              </ion-row>\r\n              <br>\r\n              <!-- <ion-row>\r\n                <ion-col size=\"4\">\r\n                  <ion-label>Weight/Pieces/Size</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"3\">\r\n                  <ion-label>Price (INR)</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"3\" style=\"opacity: .6;\">\r\n                  <ion-label>Discounted Price(INR)</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div>Delete</div>\r\n                </ion-col>\r\n              </ion-row> -->\r\n              <ion-row *ngFor=\"let element of product.priceList; let i = index;\"\r\n                class=\"ion-justify-content-between ion-align-items-center\">\r\n                <ion-col>\r\n                  <ion-label>Sku Code</ion-label>\r\n                  <ion-input type=\"text\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"product.priceList[i].sku\">\r\n                  </ion-input>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label>Barcode No</ion-label>\r\n                  <ion-input type=\"text\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"product.priceList[i].barcodeNo\">\r\n                  </ion-input>\r\n                </ion-col>\r\n                <ion-col *ngIf=\"product.variantType === 'pieces'\">\r\n                  <ion-label>Name</ion-label>\r\n                  <ion-input type=\"text\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"product.priceList[i].name\">\r\n                  </ion-input>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label\r\n                    *ngIf=\"product.variantType !== '' && product.variantType !== 'other'\">\r\n                    <span *ngIf=\"product.variantType === 'pieces'\">Number\r\n                      of&nbsp;</span>{{product.variantType}}\r\n                  </ion-label>\r\n                  <ion-label\r\n                    *ngIf=\"product.variantType === '' || product.variantType === 'other'\">\r\n                    Variant</ion-label>\r\n                  <ion-input type=\"text\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"product.priceList[i].weight\"></ion-input>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label>Price\r\n                    <span *ngIf=\"product.variantType === 'pieces'\">/ pc</span>\r\n                  </ion-label>\r\n                  <ion-input type=\"number\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"product.priceList[i].price\"></ion-input>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label>Discounted Price <span\r\n                      *ngIf=\"product.variantType === 'pieces'\">/ pc</span>\r\n                  </ion-label>\r\n                  <ion-input type=\"number\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"product.priceList[i].discountedPrice\">\r\n                  </ion-input>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label>Purchase Price <span\r\n                      *ngIf=\"product.variantType === 'pieces'\">/ pc</span>\r\n                  </ion-label>\r\n                  <ion-input type=\"number\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"product.priceList[i].purchasePrice\">\r\n                  </ion-input>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label>Quantity</ion-label>\r\n                  <ion-input type=\"text\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"product.priceList[i].totalQuantity\">\r\n                  </ion-input>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label>Shipping Weight (Gms)</ion-label>\r\n                  <ion-input type=\"number\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"product.priceList[i].shippingWeight\">\r\n                  </ion-input>\r\n                </ion-col>\r\n                <ion-col (click)=\"removeElementFromPriceList(i)\"\r\n                  size='1'>\r\n                  <ion-button color=\"danger\"\r\n                    fill=\"outline\"\r\n                    shape=\"round\"\r\n                    class=\"btn-sml m-t-16\">\r\n                    <ion-icon name=\"remove-circle\"\r\n                      slot=\"start\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col style=\"text-align: center;\">\r\n                  <ion-button (click)=\"onClickAddMoreInPriceList()\"\r\n                    fill=\"outline\"\r\n                    shape=\"round\"\r\n                    size=\"small\"\r\n                    class=\"btn-2\">\r\n                    <ion-icon name=\"add-circle\"\r\n                      slot=\"start\"></ion-icon>\r\n                    Add more +\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ng-template>\r\n\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-label> Min Quantity</ion-label>\r\n                <ion-input type=\"number\"\r\n                  class=\"form-input\"\r\n                  [(ngModel)]=\"product.minQty\"></ion-input>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <div class=\"input-wrap\">\r\n                  <ion-label>Max Quantity </ion-label>\r\n                  <ion-input type=\"number\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"product.maxQty\"></ion-input>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n            <br />\r\n            <ion-row>\r\n              <ion-col size=\"10\">\r\n                <div class=\"input-wrap\">\r\n                  <ion-label>Keywords (Search)</ion-label>\r\n                  <ion-input class=\"form-input\"\r\n                    [(ngModel)]=\"keyword\"\r\n                    autocapitalize></ion-input>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <ion-button class=\"btn-2 m-t-36\"\r\n                  fill=\"outline\"\r\n                  shape=\"round\"\r\n                  (click)=\"addSearchKeywords()\">\r\n                  Add </ion-button>\r\n              </ion-col>\r\n              <ion-col size=\"12\"\r\n                *ngIf=\"product.searchKeywords\">\r\n                <ion-chip outline\r\n                  color=\"dark\"\r\n                  *ngFor=\"let x of product.searchKeywords; let i = index;\">\r\n                  <ion-icon name=\"close-circle\"\r\n                    (click)=\"removeKeyword(i)\"></ion-icon>\r\n                  <ion-label>{{x}}</ion-label>\r\n                </ion-chip>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <div class=\"input-wrap\">\r\n                  <ion-label>SKU Code</ion-label>\r\n                  <ion-input class=\"form-input\"\r\n                    [(ngModel)]=\"product.productCode\"></ion-input>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"input-wrap\">\r\n                  <ion-label>HSN Code</ion-label>\r\n                  <ion-input class=\"form-input\"\r\n                    [(ngModel)]=\"product.hsnCode\"></ion-input>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"input-wrap\">\r\n                  <ion-label> GST (%)</ion-label>\r\n                  <ion-input type=\"number\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"product.gst\"></ion-input>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"input-wrap\">\r\n                  <ion-label>Barcode Number</ion-label>\r\n                  <ion-input type=\"text\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"product.barcodeNo\"></ion-input>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-label>Country Of Origin</ion-label>\r\n                <ion-input type=\"text\"\r\n                  class=\"form-input\"\r\n                  [(ngModel)]=\"product.additionalInfo.countryOfOrigin\">\r\n                </ion-input>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <ion-label>Insta Reel Url</ion-label>\r\n                <ion-input type=\"text\"\r\n                  class=\"form-input\"\r\n                  [(ngModel)]=\"product.instaReelUrl\">\r\n                </ion-input>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\">\r\n                <div class=\"flex-space-between\">\r\n                  <div>\r\n                    <ion-label>Insta Reel Cover Image</ion-label>\r\n                    <ion-text color=\"danger\">\r\n                      <!-- <p style=\"margin-top: 5px\">Image size for best view : 600x450 Px\r\n                      </p> -->\r\n                    </ion-text>\r\n                  </div>\r\n                  <div class=\"upload-btn-wrapper\">\r\n                    <button class=\"upload-btn btn-1 i-start\" (click)=\"uploadImage($event.target.files)\"> <i\r\n                        class=\"flaticon-null-16\"></i>upload</button>\r\n                    <!-- <input type=\"file\" name=\"myfile\" (change)=\"uploadImage($event.target.files,'catImg')\" /> -->\r\n                  </div>\r\n                </div>\r\n              </ion-col>  \r\n\r\n              <div class=\"img-container\">\r\n                {{product.instaCoverImage}}\r\n                <div class=\"no-img\" *ngIf=\"!product.instaCoverImage\">\r\n                  <p>No attached image</p>\r\n                </div>\r\n                <div *ngIf=\"product.instaCoverImage\">\r\n                  <div class=\"img-wrap\">\r\n                    <img class=\"category-img\" src=\"{{product.instaCoverImage}}\"\r\n                      (click)=\"imageZoom(product.instaCoverImage)\" />\r\n                    <div class=\"overlay\">\r\n                      <ion-button class=\"btn-2\" shape=\"round\" color=\"danger\" fill=\"clear\" (click)=\"removeReelCoverImage()\">\r\n                        <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\r\n                      </ion-button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div>\r\n      </ion-content>\r\n    </super-tab>\r\n\r\n    <super-tab>\r\n      <ion-content>\r\n        <div class=\"main-container fixed-height\">\r\n          <ion-row>\r\n            <ion-col class=\"headings\"\r\n            style=\"display: flex;align-items: center;\"\r\n            size='4'>\r\n            <div>Show Product Subheading</div>&nbsp;&nbsp;\r\n            <div class=\"toggle-btn\">\r\n              <label class=\"switch\">\r\n                <input type=\"checkbox\"\r\n                  (click)=\"toggleShowSubheading()\"\r\n                  [checked]=\"product.showSubheading\">\r\n                <span class=\"slider round\"></span>\r\n              </label>\r\n            </div>\r\n          </ion-col>\r\n            <ion-col size=\"12\">\r\n              <p style=\"font-weight: bold;\">Product Description</p>\r\n              <br>\r\n              <ckeditor [(ngModel)]=\"product.prodDesc\"\r\n                [config]=\"ckeConfig\"></ckeditor>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\" style=\"margin-top:1rem;\">\r\n              <p style=\"font-weight: bold;\">Product Short Description</p>\r\n              <br>              \r\n              <ckeditor [config]=\"ckeConfig\" [(ngModel)]=\"product.prodShortDesc\"></ckeditor>\r\n            </ion-col>\r\n          </ion-row>\r\n          <br>\r\n          <ion-text color=\"danger\"\r\n            style=\"display: flex;justify-content: center;\">\r\n            <p style=\"font-weight: bold;font-size: large;\">* Once product is\r\n              created, you can create sections for\r\n              product description</p>\r\n          </ion-text>\r\n        </div>\r\n      </ion-content>\r\n    </super-tab>\r\n\r\n    <super-tab>\r\n      <ion-content>\r\n        <div class=\"main-container fixed-height\"\r\n          style=\"display: flex;flex-wrap: nowrap;flex-direction: row;align-content: center;justify-content: space-around;align-items: flex-start;\">\r\n          <div class=\"categories-container\">\r\n            <div class=\"no-data\"\r\n              *ngIf=\"showNoCategories\"\r\n              text-center>\r\n              <img src=\"assets/img/no-category.png\"\r\n                alt=\"\">\r\n              <h6>No categories</h6>\r\n            </div>\r\n            <div class=\"product-search-wrap\"\r\n              *ngIf=\"!showNoCategories\">\r\n              <ion-searchbar [(ngModel)]=\"searchCategory\"\r\n                mode=\"ios\"></ion-searchbar>\r\n            </div>\r\n            <div class=\"categories-wrapper\"\r\n              *ngIf=\"!showNoCategories\">\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label class=\"np-list-header\"\r\n                    style=\"font-size: 16px;font-weight: bold;\">Categories\r\n                  </ion-label>\r\n                </ion-list-header>\r\n                <div\r\n                  *ngFor=\"let category of categories | filter: searchCategory\">\r\n                  <div\r\n                    style=\"display: flex;justify-content: space-between;align-items: center;\">\r\n                    <ion-item (click)=\"onClickCategoryCheckBox(category.id)\"\r\n                      style=\"width: 100%;\">\r\n                      <ion-label>{{category.name}}</ion-label>\r\n                      <ion-checkbox color=\"primary\"\r\n                        slot=\"start\"></ion-checkbox>\r\n                    </ion-item>\r\n                    <div (click)=\"getSubcategories(category.id)\"\r\n                      slot=\"end\"\r\n                      style=\"z-index: 9999;margin-right: 3%;opacity: .8;\"\r\n                      *ngIf=\"category.isSubcategories\">\r\n                      <i class=\"flaticon-null-13\"\r\n                        *ngIf=\"(listOfSubcategoriesInView.hasOwnProperty(category.id) && !listOfSubcategoriesInView[category.id].active) || !listOfSubcategoriesInView.hasOwnProperty(category.id)\"></i>\r\n                      <i class=\"flaticon-null-14\"\r\n                        *ngIf=\"listOfSubcategoriesInView.hasOwnProperty(category.id) && listOfSubcategoriesInView[category.id].active\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div\r\n                    *ngIf=\"(listOfSubcategories[category.id] && listOfSubcategories[category.id].length) && listOfSubcategoriesInView[category.id].active\"\r\n                    style=\"margin-left: 10%;\">\r\n                    <ng-container *ngFor=\"let subCat of listOfSubcategories[category.id]\">\r\n                      <div style=\"display: flex;justify-content: space-between;align-items: center;\">\r\n                        <ion-item (click)=\"onClickCategoryCheckBox(subCat.id)\" style=\"width: 100%;\">\r\n                          <ion-label>{{subCat.name}}</ion-label>\r\n                          <ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                        </ion-item>\r\n                        <!-- Sub-SubCategory Start -->\r\n                        <div (click)=\"getSubOfSubCategories(category.id, subCat.id)\" slot=\"end\"\r\n                          style=\"z-index: 9999;margin-right: 3%;opacity: .8;\" *ngIf=\"subCat.isSubcategories\">\r\n                          <i class=\"flaticon-null-13\" *ngIf=\"!subOfSubCategoryToggle[subCat.id]?.active\"></i>\r\n                          <i class=\"flaticon-null-14\" *ngIf=\"subOfSubCategoryToggle[subCat.id]?.active\"></i>\r\n                        </div>\r\n                      </div>\r\n                      <ng-container *ngIf=\"subOfSubCategoryToggle[subCat.id]?.active && subOfSubCategories[subCat.id].length\">\r\n                        <div style=\"margin-left: 10%;\">\r\n                          <ng-container *ngFor=\"let subSubCat of subOfSubCategories[subCat.id]\">\r\n                            <ion-item (click)=\"onClickCategoryCheckBox(subSubCat.id)\">\r\n                              <ion-label>{{subSubCat.name}}</ion-label>\r\n                              <ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                            </ion-item>\r\n                          </ng-container>\r\n                        </div>\r\n                      </ng-container>\r\n                      <!-- Sub-SubCategory End -->\r\n                    </ng-container>\r\n                    \r\n                  </div>\r\n                </div>\r\n\r\n              </ion-list>\r\n            </div>\r\n\r\n\r\n          </div>\r\n          <div class=\"brands-container\">\r\n            <div class=\"product-search-wrap\"\r\n              *ngIf=\"!showNoBrands\">\r\n              <ion-searchbar [(ngModel)]=\"searchBrand\"\r\n                mode=\"ios\"></ion-searchbar>\r\n            </div>\r\n            <ion-list *ngIf=\"!showNoBrands && brands.length\">\r\n              <ion-list-header>\r\n                <ion-label class=\"np-list-header\"\r\n                  style=\"font-size: 16px;font-weight: bold;\">Brands</ion-label>\r\n              </ion-list-header>\r\n              <div *ngFor=\"let brand of brands | filter: searchBrand\">\r\n                <ion-item (click)=\"onClickBrandCheckBox(brand.id)\"\r\n                  style=\"width: 100%;\">\r\n                  <ion-label>{{brand.name}}</ion-label>\r\n                  <ion-checkbox color=\"primary\"\r\n                    slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n              </div>\r\n            </ion-list>\r\n          </div>\r\n        </div>\r\n      </ion-content>\r\n    </super-tab>\r\n\r\n    <super-tab>\r\n      <ion-content>\r\n        <div class=\"main-container\">\r\n          <!-- new images-->\r\n          <!-- <div class=\"dropzone\" appDropzone (dropped)=\"onDrop($event)\">\r\n            <h3>Drag and Drop a File</h3>\r\n\r\n            <div class=\"file\">\r\n              <input class=\"file-input\" multiple type=\"file\" (change)=\"onDrop($event.target.files)\">\r\n            </div>\r\n          </div> -->\r\n          <button class=\"upload-btn btn-1 i-start\"\r\n            (click)=\"onDrop($event.target.files)\">Upload Product\r\n            Image(s)</button>\r\n          <h3>Uploads</h3>\r\n          <!-- <div class=\"upload-img-wrapper\">\r\n            <div *ngFor=\"let file of files\" class=\"img-preview\">\r\n              <app-upload-task [file]=\"file\"></app-upload-task>\r\n            </div>\r\n          </div> -->\r\n\r\n          <!-- new images-->\r\n\r\n          <!-- old images-->\r\n          <div class=\"no-img\"\r\n            *ngIf=\"listofbase64Image.length == 0\">\r\n            No attached images\r\n          </div>\r\n\r\n          <div class=\"imgs-container\"\r\n            *ngIf=\"listofbase64Image.length !== 0\">\r\n            <div class=\"img-wrap\"\r\n              *ngFor=\"let img of listofbase64Image; let i = index\">\r\n              <img [src]=\"img.base64Img\"\r\n                (click)=\"onClickEditImage(img.url)\" />\r\n              <div class=\"overlay\">\r\n                <ion-button class=\"remove\"\r\n                  shape=\"round\"\r\n                  color=\"danger\"\r\n                  fill=\"clear\"\r\n                  (click)=\"removeImage(i)\">\r\n                  <ion-icon name=\"trash\"\r\n                    slot=\"icon-only\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button *ngIf=\"img.cover == true\"\r\n                  class=\"btn-2 cover\"\r\n                  shape=\"round\">\r\n                  Cover Pic\r\n                </ion-button>\r\n                <ion-button *ngIf=\"img.cover == false\"\r\n                  (click)=\"newProductCoverPic(i)\"\r\n                  class=\"btn-2 cover\"\r\n                  shape=\"round\">\r\n                  Make Cover\r\n                </ion-button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- old images-->\r\n        </div>\r\n      </ion-content>\r\n    </super-tab>\r\n\r\n    <super-tab>\r\n      <ion-content class=\"ion-no-padding\">\r\n        <div class=\"main-container\"\r\n          style=\"width: 100%\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=2\r\n                id=\"scroll1\">\r\n                <div class=\"statusList\">\r\n                  <div [id]=\"item\"\r\n                  *ngFor='let item of sideMenu; let i=index'\r\n                  (click)='changeComponent(item)'>\r\n                  <ng-container *ngIf=\"userRole !== 'vendor'\">\r\n                    <p>{{item}}</p>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"userRole == 'vendor' && item != 'Vendor' && item != 'Specific User Discount'\">\r\n                    <p>{{item}}</p>\r\n                  </ng-container>\r\n\r\n                </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=10\r\n                style=\"margin-top: 8px; border-left: 1px solid lightgray;\">\r\n                <ion-col style=\"height: 5vh;\">\r\n                  <ion-button (click)=\"addProduct()\"\r\n                    color=\"success\">\r\n                    <i class=\"flaticon-null-20 margin-icon\"></i>&nbsp;\r\n                    Save\r\n                  </ion-button>\r\n                </ion-col>\r\n                <ion-col id=\"scroll2\"\r\n                  [ngSwitch]=\"selectedId\">\r\n                  <ion-grid style=\"margin-top: 10px;\">\r\n                    <ion-row *ngSwitchCase=\"'Cash on Delivery'\">\r\n                      <ion-col style=\"display: flex;align-items: center;\">\r\n                        <div>Cash on delivery (COD) for product</div>\r\n                        &nbsp;&nbsp;\r\n                        <div class=\"toggle-btn\">\r\n                          <label class=\"switch\">\r\n                            <input type=\"checkbox\"\r\n                              (click)=\"toggleCod()\"\r\n                              [checked]=\"product.isCod\">\r\n                            <span class=\"slider round\"></span>\r\n                          </label>\r\n                        </div>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <div *ngSwitchCase=\"'Price Slabs'\">\r\n                      <div style=\"display: flex;align-items: center;\">\r\n                        <div>Price slabs for product</div>&nbsp;&nbsp;\r\n                        <div class=\"toggle-btn\">\r\n                          <label class=\"switch\">\r\n                            <input type=\"checkbox\"\r\n                              (click)=\"activePriceSlab()\"\r\n                              [checked]=\"product.priceSlabs.active\">\r\n                            <span class=\"slider round\"></span>\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                      <br>\r\n                      <div *ngIf='product.priceSlabs.active'>\r\n                        <div *ngIf=\"!product.isPriceList\">\r\n                          <div style=\"display: flex;align-items: center;\">\r\n                            <ion-button (click)=\"enterPriceSlabData('new','')\">\r\n                              <p\r\n                                *ngIf=\"product.priceSlabs.singleSlabs && product.priceSlabs.singleSlabs.length == 0\">\r\n                                Create Slab</p>\r\n                              <p\r\n                                *ngIf=\"product.priceSlabs.singleSlabs && product.priceSlabs.singleSlabs.length > 0\">\r\n                                Add Slab</p>\r\n                            </ion-button>&nbsp;&nbsp;\r\n                            <ion-button (click)=\"removePriceSlabs('new','')\">\r\n                              Remove All Slabs\r\n                            </ion-button>\r\n                          </div>\r\n                          <br>\r\n                          <ion-grid\r\n                            *ngIf=\"product.priceSlabs.singleSlabs && product.priceSlabs.singleSlabs.length > 0\"\r\n                            class=\"ion-no-padding data-table ion-text-center\"\r\n                            style=\"margin-top: 12px;width: 400px;margin-left: 0px;\">\r\n                            <ion-row>\r\n                              <ion-col>Quantity</ion-col>\r\n                              <ion-col>Price per product</ion-col>\r\n                              <ion-col>Discount price per product</ion-col>\r\n                            </ion-row>\r\n                            <ion-row\r\n                              *ngFor=\"let slab of product.priceSlabs.singleSlabs; let i=index;\"\r\n                              style=\"border-top: 1px solid lightgray;\">\r\n                              <ion-col>\r\n                                <p>{{slab.qty[0]}} - {{slab.qty[1]}}</p>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                <p>{{slab.mrp}}</p>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                <p>{{slab.price}}</p>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </ion-grid>\r\n                        </div>\r\n                        <div\r\n                          *ngIf=\"product.isPriceList && product.priceList && product.priceList.length > 0\">\r\n                          <div *ngFor='let variant of product.priceList'>\r\n                            <div\r\n                              style=\"display: flex;align-items: center;margin: 12px;\">\r\n                              <p *ngIf=\"product.variantType != 'other' \">\r\n                                {{product.variantType}} :&nbsp;&nbsp;</p>\r\n                              <p *ngIf=\"product.variantType == 'other' \">Variant\r\n                                :&nbsp;&nbsp;</p>\r\n                              <p>{{variant.weight}}</p>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                              <div style=\"display: flex;align-items: center;\">\r\n                                <ion-button\r\n                                  (click)=\"enterPriceSlabData('new',variant.weight)\">\r\n                                  <p\r\n                                    *ngIf=\"(!product.priceSlabs.variantSlabs[variant.weight]) || \r\n                                (product.priceSlabs.variantSlabs[variant.weight] && product.priceSlabs.variantSlabs[variant.weight].length == 0)\">\r\n                                    Create Slab</p>\r\n                                  <p\r\n                                    *ngIf=\"product.priceSlabs.variantSlabs[variant.weight] && product.priceSlabs.variantSlabs[variant.weight].length > 0\">\r\n                                    Add Slab</p>\r\n                                </ion-button>&nbsp;&nbsp;\r\n                                <ion-button\r\n                                  (click)=\"removePriceSlabs('new',variant.weight)\">\r\n                                  Remove All Slabs\r\n                                </ion-button>\r\n                              </div>\r\n                            </div>\r\n                            <ion-grid\r\n                              *ngIf=\"product.priceSlabs.variantSlabs[variant.weight] && product.priceSlabs.variantSlabs[variant.weight].length > 0\"\r\n                              class=\"ion-no-padding data-table ion-text-center\"\r\n                              style=\"margin-top: 12px;width: 400px;margin-left: 0px;\">\r\n                              <ion-row>\r\n                                <ion-col>Quantity</ion-col>\r\n                                <ion-col>Price per product</ion-col>\r\n                                <ion-col>Discount price per product</ion-col>\r\n                              </ion-row>\r\n                              <ion-row\r\n                                *ngFor=\"let slab of product.priceSlabs.variantSlabs[variant.weight]; let i=index;\"\r\n                                style=\"border-top: 1px solid lightgray;\">\r\n                                <ion-col>\r\n                                  <p>{{slab.qty[0]}} - {{slab.qty[1]}}</p>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                  <p>{{slab.mrp}}</p>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                  <p>{{slab.price}}</p>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                            </ion-grid>\r\n                            <br>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngSwitchCase=\"'Extra Charges'\">\r\n                      <ion-row>\r\n                        <ion-col style=\"display: flex;align-items: center;\">\r\n                          <ion-label>Extra Charges</ion-label>&nbsp;&nbsp;\r\n                          <div class=\"toggle-btn\">\r\n                            <label class=\"switch\">\r\n                              <input type=\"checkbox\"\r\n                                (click)=\"toggleExtraCharges()\"\r\n                                [checked]=\"product.extraCharges.active\">\r\n                              <span class=\"slider round\"></span>\r\n                            </label>\r\n                          </div>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <ion-row *ngIf='product.extraCharges.active'>\r\n                        <ion-col size=\"6\"\r\n                          class=\"ion-no-padding\">\r\n                          <ion-label>Charge Name / Label</ion-label>\r\n                          <ion-input type=\"text\"\r\n                            class=\"form-input\"\r\n                            [(ngModel)]=\"product.extraCharges.label\">\r\n                          </ion-input>\r\n                        </ion-col>\r\n                        <br>\r\n                      </ion-row>\r\n                      <br *ngIf='product.extraCharges.active'>\r\n                      <ion-row *ngIf='product.extraCharges.active'>\r\n                        <ion-col size=\"6\"\r\n                          class=\"ion-no-padding\">\r\n                          <ion-label>Cost</ion-label>\r\n                          <ion-input type=\"number\"\r\n                            class=\"form-input\"\r\n                            [(ngModel)]=\"product.extraCharges.charge\">\r\n                          </ion-input>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <br *ngIf='product.extraCharges.active'>\r\n                      <ion-row *ngIf='product.extraCharges.active'>\r\n                        <ion-col style=\"display: flex;align-items: center;\">\r\n                          <ion-label>Apply this charge for each product\r\n                            seperately when multiple purchased together\r\n                          </ion-label>&nbsp;&nbsp;\r\n                          <div class=\"toggle-btn\">\r\n                            <label class=\"switch\">\r\n                              <input type=\"checkbox\"\r\n                                (click)=\"toggleChargeQty()\"\r\n                                [checked]=\"product.extraCharges.chargeAllQty\">\r\n                              <span class=\"slider round\"></span>\r\n                            </label>\r\n                          </div>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <br *ngIf='product.extraCharges.active'>\r\n                    </div>\r\n                    <ion-row *ngSwitchCase=\"'Colors'\">\r\n                      <ion-col class=\"headings\">\r\n                        <ion-label>Color</ion-label>&nbsp;&nbsp;\r\n                        <ion-button (click)=\"selectVariantColor()\"\r\n                          fill=\"outline\"\r\n                          shape=\"round\"\r\n                          *ngIf=\"!product.color?.hasOwnProperty('name')\">\r\n                          Select Color\r\n                        </ion-button>\r\n                        <div *ngIf=\"product.color?.hasOwnProperty('name')\"\r\n                          class=\"color-selected\">\r\n                          <p class=\"product-color-name\">{{product.color.name}}\r\n                          </p>\r\n                          <div\r\n                            [ngStyle]=\"{'background-color': product.color.code}\"\r\n                            class=\"color-code\"\r\n                            *ngIf=\"product.color.code && product.color.code !== ''\">\r\n                          </div>\r\n                          <div\r\n                            *ngIf=\"product.color.image && product.color.image !== '' && product.color.code === ''\">\r\n                            <img src=\"{{product.color.image}}\"\r\n                              class=\"color-code\">\r\n                          </div>\r\n                          <ion-button (click)=\"updateVariantColor()\"\r\n                            expand=\"block\"\r\n                            fill=\"outline\"\r\n                            shape=\"round\"\r\n                            size=\"small\">\r\n                            update\r\n                          </ion-button>&nbsp;&nbsp;&nbsp;\r\n                          <ion-button (click)=\"removeVariantColor()\"\r\n                            expand=\"block\"\r\n                            color=\"dark\"\r\n                            fill=\"outline\"\r\n                            shape=\"round\"\r\n                            size=\"small\">\r\n                            remove\r\n                          </ion-button>\r\n                        </div>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngSwitchCase=\"'Vendor'\">\r\n                      <ion-text color=\"danger\">\r\n                        <p *ngIf=\"!multiVendor\">This option is only available\r\n                          when MultiVendor is on</p>\r\n                      </ion-text>\r\n                      <ion-col size=\"6\">\r\n                        <div *ngIf=\"multiVendor\">\r\n                          <ion-row>\r\n                            <div class=\"headings\">\r\n                              Add Vendor\r\n                            </div>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col size=\"12\">\r\n                              <ion-select [value]=\"product.vendorId\"\r\n                                class=\"border i-s-p-10\"\r\n                                (ionChange)=\"addVendor($event, 'new')\"\r\n                                placeholder=\"Select Vendor\">\r\n                                <ion-select-option [value]=\"vendor.id\"\r\n                                  *ngFor=\"let vendor of vendors\">{{vendor.name}}\r\n                                </ion-select-option>\r\n                              </ion-select>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <br>\r\n                        </div>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngSwitchCase=\"'Filters'\">\r\n                      <ion-col size=\"6\">\r\n                        <div *ngIf=\"isFilterActive\">\r\n                          <ion-row>\r\n                            <div class=\"headings\">\r\n                              Add filter\r\n                            </div>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col size=\"6\"\r\n                              class=\"border content-alignment f-s-14 filters-col\"\r\n                              (click)=\"addFilters('new')\">\r\n                              <ion-text>\r\n                                {{getAddedFiltersLength(product.filters)}}\r\n                                Filters added</ion-text>\r\n                              &nbsp;&nbsp;<i class=\"flaticon-null-5\"></i>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <br>\r\n                        </div>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngSwitchCase=\"'Subscription'\">\r\n                      <ion-text color=\"danger\">\r\n                        <p *ngIf=\"!subscriptionFeature\">This option is only\r\n                          available when Subscription feature is on</p>\r\n                      </ion-text>\r\n                      <ion-col>\r\n                        <div *ngIf=\"subscriptionFeature\">\r\n                          <ion-row\r\n                            class=\"ion-justify-content-between ion-align-items-center\">\r\n                            <ion-col class=\"ion-no-padding\"\r\n                              style=\"display: flex;\">\r\n                              <ion-label>Allow Subscriptions</ion-label>\r\n                              &nbsp;&nbsp;\r\n                              <div class=\"toggle-btn\">\r\n                                <label class=\"switch\">\r\n                                  <input color=\"primary\"\r\n                                    type=\"checkbox\"\r\n                                    (click)=\"subIsAllowedToggle()\"\r\n                                    [checked]=\"product.subscription.isAllowed\">\r\n                                  <span class=\"slider round\"></span>\r\n                                </label>\r\n                              </div>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <br>\r\n                          <div *ngIf=\"product.subscription.isAllowed\">\r\n                            <ion-row>\r\n                              <ion-col size=\"6\"\r\n                                class=\"ion-no-padding\">\r\n                                <ion-label>Daily Discount (%)</ion-label>\r\n                                <ion-input type=\"number\"\r\n                                  class=\"form-input\"\r\n                                  [(ngModel)]=\"product.subscription.dailyDiscount\">\r\n                                </ion-input>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <br>\r\n                            <ion-row>\r\n                              <ion-col size=\"6\"\r\n                                class=\"ion-no-padding\">\r\n                                <ion-label>Weekly Discount (%)</ion-label>\r\n                                <ion-input type=\"number\"\r\n                                  class=\"form-input\"\r\n                                  [(ngModel)]=\"product.subscription.weeklyDiscount\">\r\n                                </ion-input>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <br>\r\n                            <ion-row>\r\n                              <ion-col size=\"6\"\r\n                                class=\"ion-no-padding\">\r\n                                <ion-label>Monthly Discount (%)</ion-label>\r\n                                <ion-input type=\"number\"\r\n                                  class=\"form-input\"\r\n                                  [(ngModel)]=\"product.subscription.monthlyDiscount\">\r\n                                </ion-input>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </div>\r\n                        </div>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngSwitchCase=\"'Wholesale Price'\">\r\n                      <ion-text color=\"danger\">\r\n                        <p *ngIf=\"!priceForRetail\">This option is only available\r\n                          when Retail feature is on</p>\r\n                      </ion-text>\r\n                      <ion-col size=\"6\">\r\n                        <div *ngIf=\"priceForRetail\">\r\n                          <ion-row>\r\n                            <ion-col size=\"4\" class=\"flex-label\">\r\n                              <div class=\"headings\">\r\n                                Retail Price Discount ({{product.retailDiscountType !== 'percentage' ? currencyCode : '%'}})\r\n                              </div>\r\n                            </ion-col>\r\n                            <ion-col size=\"4\" class=\"flex-label\">\r\n                              <span>%</span>\r\n                              <div class=\"toggle-btn m-l-16\">\r\n                                <label class=\"switch\">\r\n                                  <input color=\"primary\"\r\n                                    type=\"checkbox\"\r\n                                    (click)=\"changeRetailDiscountType()\"\r\n                                    [checked]=\"product.retailDiscountType !== 'percentage'\">\r\n                                  <span class=\"slider round\"></span>\r\n                                </label>\r\n                              </div>\r\n                              <span class=\"m-l-16\">FLAT</span>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col size=\"12\">\r\n                              <ion-input type=\"number\"\r\n                                class=\"form-input\"\r\n                                [(ngModel)]=\"product.retailDiscount\">\r\n                              </ion-input>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </div>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngSwitchCase=\"'Limited Time Deal'\">\r\n                      <ion-text color=\"danger\">\r\n                        <p *ngIf=\"!limitedTimeDeal\">This option is only\r\n                          available when Limited Time Deal feature is on</p>\r\n                      </ion-text>\r\n                      <ion-col>\r\n                        <div *ngIf=\"limitedTimeDeal\">\r\n                          <ion-row>\r\n                            <ion-col class=\"ion-no-padding\"\r\n                              style=\"display: flex;\">\r\n                              <ion-label>Limited Time Offer</ion-label>\r\n                              &nbsp;&nbsp;\r\n                              <div class=\"toggle-btn\">\r\n                                <label class=\"switch\">\r\n                                  <input color=\"primary\"\r\n                                    type=\"checkbox\"\r\n                                    (click)=\"dealIsAllowedToggle()\"\r\n                                    [checked]=\"product.deal.isAllowed\">\r\n                                  <span class=\"slider round\"></span>\r\n                                </label>\r\n                              </div>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <br>\r\n                          <div class=\"headings\">\r\n                            Start date time\r\n                          </div>\r\n                          <ion-row class=\"ion-align-items-center\">\r\n                            <ion-col size=\"3\">\r\n                              <ion-datetime class=\"input-border time-picker\"\r\n                                [disabled]=\"!product.deal.isAllowed\"\r\n                                placeholder=\"Date\"\r\n                                displayFormat=\"DD MMM YYYY\"\r\n                                [(ngModel)]=\"product.deal.start.date\"\r\n                                [min]=\"minDate\"></ion-datetime>\r\n                            </ion-col>\r\n                            <ion-col size=\"1\"\r\n                              style=\"text-align: center;\">\r\n                              -\r\n                            </ion-col>\r\n                            <ion-col size=\"3\">\r\n                              <ion-datetime class=\"input-border time-picker\"\r\n                                [disabled]=\"!product.deal.isAllowed\"\r\n                                placeholder=\"Time\"\r\n                                displayFormat=\"hh:mm A\"\r\n                                pickerFormat=\"hh:mm A\"\r\n                                [(ngModel)]=\"product.deal.start.time\">\r\n                              </ion-datetime>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <div class=\"headings\">\r\n                            End date time\r\n                          </div>\r\n                          <ion-row class=\"ion-align-items-center\">\r\n                            <ion-col size=\"3\">\r\n                              <ion-datetime class=\"input-border time-picker\"\r\n                                [disabled]=\"!product.deal.isAllowed\"\r\n                                placeholder=\"Date\"\r\n                                displayFormat=\"DD MMM YYYY\"\r\n                                [(ngModel)]=\"product.deal.end.date\"\r\n                                [min]=\"minDate\"\r\n                                [max]=\"2030\"></ion-datetime>\r\n                            </ion-col>\r\n                            <ion-col size=\"1\"\r\n                              style=\"text-align: center;\">\r\n                              -\r\n                            </ion-col>\r\n                            <ion-col size=\"3\">\r\n                              <ion-datetime class=\"input-border time-picker\"\r\n                                [disabled]=\"!product.deal.isAllowed\"\r\n                                placeholder=\"Time\"\r\n                                displayFormat=\"hh:mm A\"\r\n                                pickerFormat=\"hh:mm A\"\r\n                                [(ngModel)]=\"product.deal.end.time\">\r\n                              </ion-datetime>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row class=\"ion-align-items-center\">\r\n                            <ion-col size=\"6\">\r\n                              <div class=\"headings\">\r\n                                Deal discount\r\n                              </div>\r\n                              <ion-input type=\"number\"\r\n                                class=\"form-input\"\r\n                                [(ngModel)]=\"product.deal.discount\">\r\n                              </ion-input>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </div>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <div *ngSwitchCase=\"'Specific User Discount'\">\r\n                      <ion-text color=\"danger\">\r\n                        <p *ngIf=\"!product.deal.isAllowed\">This option is only\r\n                          available when limited time deal is on</p>\r\n                      </ion-text>\r\n                      <ion-row *ngIf=\"product.deal.isAllowed\">\r\n                        <ion-col size=\"4\">\r\n                          <div class=\"input-wrap\">\r\n                            <div class=\"flex-label\">\r\n                              <ion-label>Give user specific discount on this\r\n                                product</ion-label>\r\n                              <ion-toggle\r\n                                [(ngModel)]=\"product.deal.specificUsers.active\">\r\n                              </ion-toggle>\r\n                            </div>\r\n                          </div>\r\n                        </ion-col>\r\n                        <ion-col size=\"8\">\r\n                          <ion-button class=\"btn-2 i-start\"\r\n                            (click)=\"openUsersModal()\"\r\n                            shape=\"round\"\r\n                            fill=\"outline\"\r\n                            *ngIf=\"product.deal.specificUsers.active\">\r\n                            <i class=\"flaticon-null-5 margin-icon\"></i>\r\n                            Add Users\r\n                          </ion-button>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <ng-container\r\n                        *ngIf=\"product.deal.isAllowed && product.deal.specificUsers.active && product.deal.specificUsers.users.length>0\">\r\n                        <h5 style=\"margin: 0px;\">User List with Discount &nbsp;\r\n                          <i class=\"flaticon-null-27 cursor-p\"\r\n                            *ngIf=\"moreUsers\"\r\n                            (click)=\"moreUsers = !moreUsers\"></i>\r\n                          <i class=\"flaticon-null-28 cursor-p\"\r\n                            *ngIf=\"!moreUsers\"\r\n                            (click)=\"moreUsers = !moreUsers\"></i>\r\n                        </h5>\r\n                        <div class=\"ion-no-padding\"\r\n                          *ngIf=\"moreUsers\">\r\n                          <div class=\"list-header t-a-c\">\r\n                            <ion-grid class=\"ion-no-padding\">\r\n                              <ion-row class=\"headings\">\r\n                                <ion-col size=\"3\">\r\n                                  <p>Name</p>\r\n                                </ion-col>\r\n                                <ion-col size=\"3\">\r\n                                  <p>Phone Number</p>\r\n                                </ion-col>\r\n                                <ion-col size=\"2\">\r\n                                  <p>Discount(%)</p>\r\n                                </ion-col>\r\n                                <ion-col size=\"2\">\r\n                                  <p>Delete</p>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                            </ion-grid>\r\n                          </div>\r\n                          <div class=\"list-container\">\r\n                            <ion-item\r\n                              *ngFor=\"let item of product.deal.specificUsers.users; let i = index\">\r\n                              <ion-grid\r\n                                class=\"row-background ion-no-padding ion-align-items-center\">\r\n                                <ion-row class=\"ion-align-items-center\">\r\n                                  <ion-col size=\"3\">\r\n                                    <p\r\n                                      class=\"ion-text-capitalize ion-text-center\">\r\n                                      {{item.name}}</p>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\">\r\n                                    <p\r\n                                      class=\"ion-text-capitalize ion-text-center\">\r\n                                      {{item.phoneNo}}</p>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"2\">\r\n                                    <ion-input type=\"number\"\r\n                                      class=\"form-input padding-start-16\"\r\n                                      [(ngModel)]=\"item.discount\"></ion-input>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"2\"\r\n                                    class=\"ion-text-center\">\r\n                                    <div class=\"ion-text-center\">\r\n                                      <i class=\"flaticon-null-21 cursor-p\"\r\n                                        (click)=\"removeUser(i)\"></i>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                              </ion-grid>\r\n                            </ion-item>\r\n                          </div>\r\n                        </div>\r\n                      </ng-container>\r\n                    </div>\r\n                    <ion-row>\r\n                      <div *ngSwitchCase=\"'Barcode / Qr Code'\">\r\n                        <ion-col size=\"12\"\r\n                          class=\"flex\"\r\n                          *ngIf=\"!product.isPriceList\">\r\n                          <ion-label>Barcode / QR code</ion-label>\r\n                          <div class=\"upload-btn-wrapper\">\r\n                            <button class=\"upload-btn btn-1 i-start\"> <i\r\n                                class=\"flaticon-null-16\"></i>upload</button>\r\n                            <input type=\"file\"\r\n                              name=\"myfile\"\r\n                              (change)=\"uploadQR($event.target.files, 'new')\" />\r\n                          </div>\r\n                          <div class=\"imgs-container\"\r\n                            *ngIf=\"barcode !== ''\">\r\n                            <div class=\"img-wrap\">\r\n                              <img [src]=\"barcode\"\r\n                                (click)=\"imageZoom(barcode)\" />\r\n                              <div class=\"overlay\">\r\n                                <ion-button class=\"remove\"\r\n                                  shape=\"round\"\r\n                                  color=\"danger\"\r\n                                  fill=\"clear\"\r\n                                  (click)=\"removeBarcodeImage()\">\r\n                                  <ion-icon name=\"trash\"\r\n                                    slot=\"icon-only\"></ion-icon>\r\n                                </ion-button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </ion-col>\r\n                        <ng-container *ngIf=\"product.isPriceList\">\r\n                          <ng-container\r\n                            *ngIf=\"product.priceList.length && product.priceList[0].weight\">\r\n                            <ion-col size=\"12\"\r\n                              class=\"flex\"\r\n                              *ngFor=\"let pl of product.priceList; let i = index;\">\r\n                              <ion-label>Upload For {{pl.weight}}</ion-label>\r\n                              <div class=\"upload-btn-wrapper\">\r\n                                <button class=\"upload-btn btn-1 i-start\"> <i\r\n                                    class=\"flaticon-null-16\"></i>upload</button>\r\n                                <input type=\"file\"\r\n                                  name=\"myfile\"\r\n                                  (change)=\"uploadPriceListQR($event.target.files, i, 'new')\" />\r\n                              </div>\r\n                              <div class=\"imgs-container\"\r\n                                *ngIf=\"pl.barcode\">\r\n                                <div class=\"img-wrap\">\r\n                                  <img [src]=\"pl.barcode\"\r\n                                    (click)=\"imageZoom(pl.barcode)\" />\r\n                                  <div class=\"overlay\">\r\n                                    <ion-button class=\"remove\"\r\n                                      shape=\"round\"\r\n                                      color=\"danger\"\r\n                                      fill=\"clear\"\r\n                                      (click)=\"plRemoveBarcode(i, 'new')\">\r\n                                      <ion-icon name=\"trash\"\r\n                                        slot=\"icon-only\"></ion-icon>\r\n                                    </ion-button>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <!-- <ng-template #noDataForBarcodes>\r\n                                <ion-text color=\"danger\" class=\"ion-text-center barcode-alert\">*Add some data to price list for\r\n                                  uploading barcodes.</ion-text>\r\n                              </ng-template> -->\r\n                            </ion-col>\r\n                          </ng-container>\r\n                        </ng-container>\r\n                      </div>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                  <div *ngSwitchCase=\"'Variant Groups'\">\r\n                    <ion-text color=\"danger\"\r\n                      *ngIf=\"product.isPriceList == false\">\r\n                      <p>This option is only available when variant is on</p>\r\n                    </ion-text>\r\n                    <div *ngIf=\"product.isPriceList == true\">\r\n                      <div\r\n                        style=\"display: flex;align-items: center;margin-left: 12px;\">\r\n                        <div>Variant groups for product</div>&nbsp;&nbsp;\r\n                        <div class=\"toggle-btn\">\r\n                          <label class=\"switch\">\r\n                            <input type=\"checkbox\"\r\n                              (click)=\"activeVariantGroups()\"\r\n                              [checked]=\"product.variantGroups.active\">\r\n                            <span class=\"slider round\"></span>\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                      <br>\r\n                      <div *ngIf='product.variantGroups.active'>\r\n                        <div>\r\n                          <div>\r\n                            <div\r\n                              style=\"display: flex;align-items: center;margin: 12px;\">\r\n                              <input class=\"groupInput\"\r\n                                [(ngModel)]=\"groupName\"\r\n                                placeholder=\"Enter name of group\" />&nbsp;&nbsp;\r\n                              <ion-select class=\"groupSelect\"\r\n                                [(ngModel)]=\"groupOptions\"\r\n                                multiple=\"true\"\r\n                                cancelText=\"Cancel\"\r\n                                okText=\"Done\"\r\n                                placeholder=\"Select Group\"\r\n                                [interfaceOptions]=\"variantGrpSelectOptions\">\r\n                                <ion-select-option\r\n                                  *ngFor=\"let item of product.priceList\"\r\n                                  value=\"{{item.weight}}\"\r\n                                  selected=\"true\">{{item.weight}}\r\n                                </ion-select-option>\r\n                              </ion-select>&nbsp;&nbsp;\r\n                              <div style=\"display: flex;align-items: center;\">\r\n                                <ion-button\r\n                                  (click)=\"enterVariantGroupsData('new')\">\r\n                                  <p\r\n                                    *ngIf=\"(!product.variantGroups.groups) || (product.variantGroups.groups && product.variantGroups.groups.length == 0)\">\r\n                                    Create Group</p>\r\n                                  <p\r\n                                    *ngIf=\"product.variantGroups.groups && product.variantGroups.groups.length > 0\">\r\n                                    Add Group</p>\r\n                                </ion-button>\r\n                              </div>\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"list-header variantGroups\"\r\n                              *ngIf=\"product.variantGroups.groups && product.variantGroups.groups.length > 0\">\r\n                              <ion-grid class=\"ion-no-padding\">\r\n                                <ion-row class=\"headings\">\r\n                                  <ion-col size=\"3\">\r\n                                    <p>Name</p>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\"\r\n                                    style=\"margin-right: 16px;\">\r\n                                    <p>Variants</p>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\"\r\n                                    style=\"margin-right: 16px;\">\r\n                                    <p>Delete</p>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                              </ion-grid>\r\n                            </div>\r\n                            <div class=\"list-container\">\r\n                              <ion-item\r\n                                *ngFor=\"let item of product.variantGroups.groups; let i = index\">\r\n                                <ion-grid\r\n                                  class=\"row-background ion-no-padding ion-align-items-center\">\r\n                                  <ion-row class=\"ion-align-items-center\">\r\n                                    <ion-col size=\"3\">\r\n                                      <p\r\n                                        class=\"ion-text-capitalize ion-text-center\">\r\n                                        {{item.name}}</p>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"3\">\r\n                                      <p\r\n                                        class=\"ion-text-capitalize ion-text-center\">\r\n                                        {{item.variants}}</p>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"3\"\r\n                                      style=\"text-align: center;\">\r\n                                      <i class=\"flaticon-null-19 remove-icon\"\r\n                                        (click)=\"deleteVariantGroup('new',i)\"></i>\r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                </ion-grid>\r\n                              </ion-item>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ion-grid *ngSwitchCase=\"'Seo for Website'\">\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <h3>Website SEO</h3>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <div class=\"input-wrap\">\r\n                          <ion-label>Meta Title</ion-label>\r\n                          <ion-input class=\"form-input\"\r\n                            [(ngModel)]=\"metaData.pageTitle\"></ion-input>\r\n                        </div>\r\n                      </ion-col>\r\n                      <ion-col size=\"12\">\r\n                        <div class=\"input-wrap\">\r\n                          <ion-label>Meta Description</ion-label>\r\n                          <ion-input class=\"form-input\"\r\n                            [(ngModel)]=\"metaData.metaDescription\"></ion-input>\r\n                        </div>\r\n                      </ion-col>\r\n                      <ion-col size=\"12\">\r\n                        <div class=\"input-wrap\">\r\n                          <ion-label>Meta Keywords</ion-label>\r\n                          <ion-input class=\"form-input\"\r\n                            [(ngModel)]=\"metaData.metaKeywords\"></ion-input>\r\n                        </div>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                  \r\n                  <ion-grid *ngSwitchCase=\"'Attributes'\">\r\n                    <ion-row>\r\n                      <ion-col size='12'>\r\n                        <h3>Product Attributes</h3>\r\n                      </ion-col>\r\n\r\n                      <ion-col size='12' *ngFor=\"let item of attributesData | keyvalue; trackBy: customTrackBy; let i = index\">\r\n                        <ng-container *ngIf=\"subValues[item.key]; else noSubValue\">\r\n                          <div class=\"input-wrap\">\r\n                            <ion-label>{{item.key}}</ion-label>\r\n                            <select [(ngModel)]=\"attributesData[item.key]\">\r\n                              <option *ngFor=\"let subValue of subValues[item.key]\">{{subValue}}</option>\r\n                            </select>\r\n                          </div>\r\n                        </ng-container>\r\n                        <ng-template #noSubValue>\r\n                          <div class=\"input-wrap\">\r\n                            <ion-label>{{item.key}}</ion-label>\r\n                            <ion-input class=\"form-input\" [(ngModel)]=\"attributesData[item.key]\" type=\"text\"></ion-input>\r\n                          </div>\r\n                        </ng-template>\r\n                      </ion-col>\r\n\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                  \r\n                  <ion-grid *ngSwitchCase=\"'Variant Chart'\">\r\n                    <ion-row>\r\n                      <ion-col style=\"display: flex;align-items: center;\">\r\n                        <div>Active</div>\r\n                        &nbsp;&nbsp;\r\n                        <div class=\"toggle-btn\">\r\n                          <label class=\"switch\">\r\n                            <input type=\"checkbox\" \r\n                            (click)=\"toggleAdditionalInfo('sizeChart', 'new')\" \r\n                            [checked]=\"product.additionalInfo?.sizeChart.active\">\r\n                            <span class=\"slider round\"></span>\r\n                          </label>\r\n                        </div>\r\n                      </ion-col>\r\n                      <ng-container *ngIf=\"product.additionalInfo?.sizeChart.active\">\r\n                        <!-- <ion-col size='12'>\r\n                          <div class=\"input-wrap\">\r\n                            <ion-label>Enter Name for variant chart</ion-label>\r\n                            <ion-input class=\"form-input\" [(ngModel)]=\"product.additionalInfo?.sizeChart.name\" type=\"text\"></ion-input>\r\n                          </div>\r\n                        </ion-col> -->\r\n                        <ion-col size=\"12\" class=\"flex\">\r\n                          <ion-label>Variant Chart image</ion-label>\r\n                          <div class=\"upload-btn-wrapper\">\r\n                            <button class=\"upload-btn btn-1 i-start\"> <i\r\n                                class=\"flaticon-null-16\"></i>upload</button>\r\n                            <input type=\"file\"\r\n                              name=\"myfile\"\r\n                              (change)=\"uploadChart($event.target.files,'sizeChart', 'new')\" />\r\n                          </div>\r\n                          <div class=\"imgs-container\"\r\n                            *ngIf=\"product.additionalInfo?.sizeChart.img.url !== ''\">\r\n                            <div class=\"img-wrap\">\r\n                              <img [src]=\"product.additionalInfo?.sizeChart.img.url\"\r\n                                (click)=\"imageZoom(product.additionalInfo?.sizeChart.img.url)\" />\r\n                              <div class=\"overlay\">\r\n                                <ion-button class=\"remove\"\r\n                                  shape=\"round\"\r\n                                  color=\"danger\"\r\n                                  fill=\"clear\"\r\n                                  (click)=\"removeAdditionalInfoImg('sizeChart','new')\">\r\n                                  <ion-icon name=\"trash\"\r\n                                    slot=\"icon-only\"></ion-icon>\r\n                                </ion-button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </ion-col>\r\n                      </ng-container>\r\n\r\n                    </ion-row>\r\n                  </ion-grid>\r\n\r\n                  <ion-grid *ngSwitchCase=\"'Clone Product'\">\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-text color=\"danger\">\r\n                          <p>Note: This feature is available when you edit this product. </p>\r\n                        </ion-text>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n\r\n                  <ion-grid *ngSwitchCase=\"'Custom Action'\">\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <div class=\"input-wrap\">\r\n                          <div style=\"display:flex\">\r\n                            <ion-label>Active</ion-label>\r\n                            <ion-toggle [(ngModel)]=\"product.additionalInfo.link.active\"></ion-toggle>\r\n                          </div>\r\n                        </div>\r\n                      </ion-col>\r\n                      <ng-container *ngIf=\"product.additionalInfo?.link?.active\">\r\n                        <!-- <ion-col size='12'>\r\n                          <div class=\"input-wrap\">\r\n                            <ion-label>Show Price</ion-label>\r\n                            <ion-toggle [(ngModel)]=\"product.additionalInfo.showPrice\"></ion-toggle>\r\n                          </div>\r\n                        </ion-col> -->\r\n                        <ion-col size='12'>\r\n                          <div class=\"input-wrap\">\r\n                            <ion-label>Enter Name for Button</ion-label>\r\n                            <ion-input class=\"form-input\" [(ngModel)]=\"product.additionalInfo.link.name\" type=\"text\"></ion-input>\r\n                          </div>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\">\r\n                          <div style=\"display: flex;\">\r\n                            Link:&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            <div>\r\n                              <span style=\"margin-left: 8px;\">\r\n                                <input type=\"radio\" id=\"wa\" value=\"form\" [(ngModel)]=\"product.additionalInfo.link.type\">&nbsp;&nbsp;\r\n                                <label for='wa'>Form</label>\r\n                              </span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                              <span>\r\n                                <input type=\"radio\" id='wb' value=\"link\" [(ngModel)]=\"product.additionalInfo.link.type\">&nbsp;&nbsp;\r\n                                <label for='wb'>External Link</label>\r\n                              </span>\r\n                            </div>\r\n                          </div>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\" *ngIf=\"product.additionalInfo?.link?.type == 'form'\">\r\n                          <ion-select placeholder=\"Select Form Template\" class=\"border\" [(ngModel)]=\"product.additionalInfo.link.value\">\r\n                            <ion-select-option *ngFor=\"let form of forms\" [value]=\"form.id\"> {{form.formTitle}} </ion-select-option>\r\n                            </ion-select>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\" *ngIf=\"product.additionalInfo?.link?.type == 'link'\">\r\n                          <div class=\"input-wrap\">\r\n                            <ion-label>External Link</ion-label>\r\n                            <ion-input class=\"form-input\" [(ngModel)]=\"product.additionalInfo.link.value\" type=\"text\"></ion-input>\r\n                          </div>\r\n                        </ion-col>\r\n                      </ng-container>\r\n                    </ion-row>\r\n                    <!-- <ion-row>\r\n                      <ion-col>\r\n                        <ion-text color=\"danger\">\r\n                          <p>Note: This feature is Coming Soon. </p>\r\n                        </ion-text>\r\n                      </ion-col>\r\n                    </ion-row> -->\r\n                  </ion-grid>\r\n\r\n                  <ion-grid *ngSwitchCase=\"'Stock Attributes'\">\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <h3>Stock Attributes</h3>\r\n                      </ion-col>\r\n                      <ion-col size=\"4\">\r\n                        <div class=\"input-wrap\">\r\n                          <ion-label>Expiry Date</ion-label>\r\n                          <div class=\"flexJustifySpace\">\r\n                          <ion-input type=\"date\" class=\"form-input\" min=\"{{currentDate | date: 'yyyy-MM-dd'}}\"\r\n                           value=\"{{expiryDate | date: 'yyyy-MM-dd'}}\"\r\n                           (ionChange)=\"getTimeStamp($event.target.value,'expiry')\"></ion-input>\r\n                          </div>\r\n                        </div>\r\n                      </ion-col>\r\n                      <ion-col size=\"4\">\r\n                        <div class=\"input-wrap\">\r\n                          <ion-label>Manufacturing Date</ion-label>\r\n                          <div class=\"flexJustifySpace\">\r\n                          <ion-input type=\"date\" class=\"form-input\" max=\"{{currentDate | date: 'yyyy-MM-dd'}}\"\r\n                           value=\"{{manufacturedDate | date: 'yyyy-MM-dd'}}\"\r\n                           (ionChange)=\"getTimeStamp($event.target.value,'manufactured')\"></ion-input>\r\n                          </div>\r\n                        </div>\r\n                      </ion-col>\r\n                      <ion-col size=\"4\">\r\n                        <div class=\"input-wrap\">\r\n                          <ion-label>Shelf Life</ion-label>\r\n                          <div class=\"flexJustifySpace\">\r\n                          <ion-input type=\"text\" class=\"form-input\" [(ngModel)]='product.stockAttributes.shelfLife'></ion-input>\r\n                          </div>\r\n                        </div>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n\r\n                  <ion-grid *ngSwitchCase=\"'Bundle Products'\">\r\n                    <ion-col style=\"display: flex;align-items: center;\">\r\n                      <div>Active</div>\r\n                      &nbsp;&nbsp;\r\n                      <div class=\"toggle-btn\">\r\n                        <label class=\"switch\">\r\n                          <input type=\"checkbox\"\r\n                            (click)=\"toggleBundleProducts('new')\"\r\n                            [checked]=\"product.bundleProducts.active\">\r\n                          <span class=\"slider round\"></span>\r\n                        </label>\r\n                      </div>\r\n                    </ion-col>\r\n                    <ng-container *ngIf=\"product.bundleProducts.active\">\r\n                      <ion-col>\r\n                        <div class=\"input-wrap\">\r\n                        <ion-label>Bundle Title</ion-label>\r\n                        <div style=\"display: flex;align-items: center;justify-content: space-between;\">\r\n                         <ion-input type=\"text\" class=\"form-input\" [(ngModel)]='product.bundleProducts.title' style=\"width: 80%;\"></ion-input>\r\n                        </div>\r\n                      </div>\r\n                      </ion-col>\r\n                      <ion-col>\r\n                        <div class=\"input-wrap\">\r\n                        <ion-label>Max no. of products bundled by user</ion-label>\r\n                        <div style=\"display: flex;align-items: center;justify-content: space-between;\">\r\n                         <ion-input type=\"number\" class=\"form-input\" [(ngModel)]='product.bundleProducts.maxProducts' style=\"width: 80%;\"></ion-input>\r\n                        </div>\r\n                      </div>\r\n                      </ion-col>\r\n                      <ion-col>\r\n                         <ion-button (click)=\"presentProductsModal('new')\">Add Bundled Products</ion-button>\r\n                         <ion-text color=\"danger\">\r\n                           <p>Note: You cannot add variant products in bundle.</p>\r\n                         </ion-text>\r\n                      </ion-col>\r\n                        <ion-row *ngIf=\"product.bundleProducts.products.length\">\r\n                          <ion-col>\r\n                            <div class=\"tableArea\">\r\n                             <table>\r\n                               <thead>\r\n                                 <tr class=\"header\">\r\n                                   <th>S.No</th>\r\n                                   <th>Product Name</th>\r\n                                   <th>Action</th>\r\n                                 </tr>\r\n                               </thead>\r\n                               <tbody>\r\n                                 <tr *ngFor=\"let prod of product.bundleProducts.products; let i = index\">\r\n                                   <td>{{i+1}}</td>\r\n                                   <td>{{prod.name}}</td>\r\n                                   <td>\r\n                                    <ion-button fill=\"outline\" shape=\"round\" (click)=\"removeBundleProduct(i, 'new')\">\r\n                                      Remove\r\n                                    </ion-button>\r\n                                   </td>\r\n                                   <!-- <td>\r\n                                    <i class=\"flaticon-null-21 cursor-p deleteIcon\" (click)=\"deleteForm(form.id, i)\"></i>\r\n                                   </td> -->\r\n                                 </tr>\r\n                               </tbody>\r\n                             </table>\r\n                            </div> \r\n                          </ion-col>\r\n                        </ion-row>\r\n                    </ng-container>\r\n                    \r\n                  </ion-grid>\r\n\r\n                  <!-- Region New Product -->\r\n                  <ion-grid *ngSwitchCase=\"'Regions'\">\r\n                    <ion-col size=\"12\">\r\n                      <h3>Regions</h3>\r\n                    </ion-col>\r\n                    <ion-text *ngIf=\"!multiRegion\" color=\"danger\">\r\n                      <p>This option is only available when Multi Region is on</p>\r\n                    </ion-text>\r\n                    <div *ngIf=\"multiRegion\">\r\n                      <ion-col size=\"12\" style=\"display: flex;align-items: center;\">\r\n                        <ion-label>Active</ion-label>&nbsp;&nbsp;\r\n                        <div class=\"toggle-btn\">\r\n                          <label class=\"switch\">\r\n                            <input type=\"checkbox\" (click)=\"toggleCheckbox('allRegions')\" [checked]=\"allRegions?.active\">\r\n                            <span class=\"slider round\"></span>\r\n                          </label>\r\n                        </div>\r\n                      </ion-col>\r\n                      <br>\r\n                      <ng-container *ngFor=\"let region of allRegions.regions,index as i\">\r\n                        <div class=\"regionWrap\">\r\n                          <div class=\"flex\">\r\n                            <input type='checkbox' (click)=\"toggleRegion(i)\" [checked]='region.active' />&nbsp;&nbsp;\r\n                            <p><strong>{{region.name | uppercase}}</strong></p>\r\n                          </div>\r\n                          <br>\r\n                          <ng-container *ngIf=\"!product.isPriceList\">\r\n                            <ion-row>\r\n                              <ion-col class=\"input-wrap\">\r\n                                <ion-label>Price</ion-label>\r\n                                <ion-input class=\"form-input\" [(ngModel)]=\"region.price\" type=\"number\"></ion-input>\r\n                              </ion-col>\r\n                              <ion-col class=\"input-wrap\">\r\n                                <ion-label>Discounted Price</ion-label>\r\n                                <ion-input class=\"form-input\" [(ngModel)]=\"region.discountedPrice\" type=\"number\">\r\n                                </ion-input>\r\n                              </ion-col>\r\n                              <!-- <ion-col class=\"input-wrap\">\r\n                                <ion-label>Quantity</ion-label>\r\n                                <ion-input class=\"form-input\" [(ngModel)]=\"region.qty\" type=\"number\"></ion-input>\r\n                              </ion-col> -->\r\n                            </ion-row>\r\n                          </ng-container>\r\n\r\n                          <!-- Regions New variants -->\r\n                          <ng-container *ngIf=\"product.isPriceList\">\r\n                            <ng-container *ngFor=\"let regionVariant of region.variants\">\r\n                              <ion-row>\r\n                                <ion-col class=\"input-wrap\">\r\n                                  <ion-label>Variant</ion-label>\r\n                                  <ion-input class=\"form-input\" [(ngModel)]=\"regionVariant.weight\" readonly=\"true\" type=\"text\"></ion-input>\r\n                                </ion-col>\r\n                                <ion-col class=\"input-wrap\">\r\n                                  <ion-label>Price</ion-label>\r\n                                  <ion-input class=\"form-input\" [(ngModel)]=\"regionVariant.price\" type=\"number\"></ion-input>\r\n                                </ion-col>\r\n                                <ion-col class=\"input-wrap\">\r\n                                  <ion-label>Discounted Price</ion-label>\r\n                                  <ion-input class=\"form-input\" [(ngModel)]=\"regionVariant.discountedPrice\" type=\"number\">\r\n                                  </ion-input>\r\n                                </ion-col>\r\n                                <!-- <ion-col class=\"input-wrap\">\r\n                                  <ion-label>Quantity</ion-label>\r\n                                  <ion-input class=\"form-input\" [(ngModel)]=\"regionVariant.qty\" type=\"number\"></ion-input>\r\n                                </ion-col> -->\r\n                              </ion-row>\r\n                            </ng-container>\r\n                          </ng-container>\r\n                        </div>\r\n                      </ng-container>\r\n                    </div>\r\n                  </ion-grid>\r\n\r\n                  <ion-grid *ngSwitchCase=\"'Add on'\">\r\n                    <ion-col size=\"12\">\r\n                      <h3>Add Ons</h3>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\">\r\n                      <label>Select Addon Templates:</label>&nbsp;<br>\r\n                      <select class=\"selectInput\" (change)=\"changeTemplate($event.target.value)\" [(ngModel)]='product.templateId'>\r\n                        <option value=\"\" disabled selected hidden>Please choose</option>\r\n                        <option value=\"{{template.id}}\" *ngFor=\"let template of templatesArray\">\r\n                          {{template.name}}\r\n                        </option>\r\n                      </select>\r\n                    </ion-col>\r\n                  </ion-grid>\r\n                  \r\n                  <ion-grid *ngSwitchCase=\"'video'\">\r\n                    <ion-col size=\"12\">\r\n                      <h3>Video feature available after product is created!</h3>\r\n                    </ion-col>\r\n                  </ion-grid>\r\n                  \r\n                </ion-col>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div>\r\n      </ion-content>\r\n    </super-tab>\r\n\r\n  </super-tabs-container>\r\n  <!-- /new product -->\r\n  <div class=\"spinner\"\r\n    *ngIf=\"editproductId && showEditLoader;\">\r\n    <ion-spinner color=\"primary\"></ion-spinner>\r\n  </div>\r\n  <!-- edit product -->\r\n  <super-tabs-container *ngIf=\"editproductId && editproductData\">\r\n    <super-tab>\r\n      <ion-content>\r\n        <div class=\"main-container fixed-height\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <div class=\"input-wrap\">\r\n                  <div class=\"flex-space-between\">\r\n                    <div>\r\n                      <ion-label>Product Name(please don't use \"/\" in name)\r\n                      </ion-label>\r\n                    </div>\r\n                    <div class=\"flex-label\">\r\n                      <ion-label>Show</ion-label>&nbsp;&nbsp;\r\n                      <ion-col size=\"2\"\r\n                        class=\"ion-no-padding\">\r\n                        <div class=\"toggle-btn\">\r\n                          <label class=\"switch\">\r\n                            <input color=\"primary\"\r\n                              type=\"checkbox\"\r\n                              [disabled]=\"editShowDisable()\"\r\n                              [checked]=\"editproductData.status\"\r\n                              (click)=\"updateEditProductStatus(editproductData.status)\">\r\n                            <span class=\"slider round\"></span>\r\n                          </label>\r\n                        </div>\r\n                      </ion-col>\r\n                    </div>\r\n                  </div>\r\n                  <ion-input class=\"form-input\"\r\n                    [(ngModel)]=\"editproductData.prodName\"></ion-input>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row *ngIf=\"productTypeArr.length\">\r\n              <ion-col size=\"6\">\r\n                <ion-row>\r\n                  <div class=\"headings\">\r\n                    Select Product Type\r\n                  </div>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <ion-select [value]=\"getSelectedValueOfProductType()\"\r\n                      class=\"border i-s-p-10\"\r\n                      (ionChange)=\"addProductType($event, 'edit')\"\r\n                      placeholder=\"Select Product Type\">\r\n                      <!-- <ion-select-option value=\"\">No type</ion-select-option> -->\r\n                      <ion-select-option value=\"{{productType}}\"\r\n                        *ngFor=\"let productType of productTypeArr\">\r\n                        {{productType}}\r\n                      </ion-select-option>\r\n                      <!-- <ion-select-option [value]=\"vendor.id\" *ngFor=\"let vendor of vendors\">{{vendor.name}}\r\n                          </ion-select-option> -->\r\n                    </ion-select>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <br>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row *ngIf=\"!editproductData.isPriceList; else showPriceList\">\r\n              <ion-col size=\"2\"\r\n                class=\"flex\">\r\n                <ion-label>Price</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"2\"\r\n                class=\"flex\">\r\n\r\n                <ion-label>Single Price</ion-label>&nbsp;&nbsp;\r\n                <ion-col size=\"2\"\r\n                  class=\"ion-no-padding\">\r\n                  <div class=\"toggle-btn\">\r\n                    <label class=\"switch\">\r\n                      <input color=\"primary\"\r\n                        type=\"checkbox\"\r\n                        (click)=\"editPriceToggle()\"\r\n                        [checked]=\"editproductData.isPriceList\">\r\n                      <span class=\"slider round\"></span>\r\n                    </label>\r\n                  </div>\r\n                </ion-col>\r\n\r\n\r\n              </ion-col>\r\n              <ion-col size=\"4\"\r\n                class=\"flex\">\r\n                <ion-label><strong>Show out of stock for 0 quantity</strong>\r\n                </ion-label>&nbsp;&nbsp;\r\n                <ion-col size=\"2\"\r\n                  class=\"ion-no-padding\">\r\n                  <div class=\"toggle-btn\">\r\n                    <label class=\"switch\">\r\n                      <input color=\"primary\"\r\n                        type=\"checkbox\"\r\n                        (click)=\"editProductStopOrderWhenNoQtyToggle(editproductData.stopWhenNoQty)\"\r\n                        [checked]=\"editproductData.stopWhenNoQty\">\r\n                      <span class=\"slider round\"></span>\r\n                    </label>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-col>\r\n              <ion-col class=\"headings\"\r\n                style=\"display: flex;align-items: center;\"\r\n                size='4'>\r\n                <div>Gst Exclusive</div>&nbsp;&nbsp;\r\n                <div class=\"toggle-btn\">\r\n                  <label class=\"switch\">\r\n                    <input type=\"checkbox\"\r\n                      (click)=\"toggleGstExclusiveEdit()\"\r\n                      [checked]=\"editproductData.gstExclusive\">\r\n                    <span class=\"slider round\"></span>\r\n                  </label>\r\n                </div>\r\n              </ion-col>\r\n              <br>\r\n              <ion-col size=\"4\">\r\n                <ion-label *ngIf=\"!editproductData.gstExclusive\">Price (\r\n                  inclusive of all taxes) </ion-label>\r\n                <ion-label *ngIf=\"editproductData.gstExclusive\">Price (\r\n                  exclusive of all taxes) </ion-label>\r\n                <ion-input type=\"number\"\r\n                  class=\"form-input\"\r\n                  [(ngModel)]=\"editproductData.prodPrice\"></ion-input>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"4\">\r\n                <div class=\"input-wrap\">\r\n                  <ion-label *ngIf=\"!editproductData.gstExclusive\">Discounted\r\n                    Price ( inclusive of all taxes) </ion-label>\r\n                  <ion-label *ngIf=\"editproductData.gstExclusive\">Discounted\r\n                    Price ( exclusive of all taxes) </ion-label>\r\n                  <ion-input type=\"number\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"editproductData.discountedPrice\"></ion-input>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"4\">\r\n                <div class=\"input-wrap\">\r\n                  <ion-label>Purchase Price </ion-label>\r\n                  <ion-input type=\"number\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"editproductData.purchasePrice\"></ion-input>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-label>Quantity </ion-label>\r\n                <ion-input type=\"text\"\r\n                  class=\"form-input\"\r\n                  [(ngModel)]=\"editproductData.productQty\"></ion-input>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <div class=\"input-wrap\">\r\n                  <ion-label>Shipping Weight</ion-label>\r\n                  <ion-input type=\"number\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"editproductData.shippingWeight\"></ion-input>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ng-template #showPriceList>\r\n              <ion-row>\r\n                <ion-col size=\"2\"\r\n                  class=\"flex\">\r\n                  <ion-label>Price List</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2\"\r\n                  class=\"flex\">\r\n\r\n                  <ion-label>Variants</ion-label>&nbsp;&nbsp;\r\n                  <ion-col size=\"2\"\r\n                    class=\"ion-no-padding\">\r\n                    <div class=\"toggle-btn\">\r\n                      <label class=\"switch\">\r\n                        <input color=\"primary\"\r\n                          type=\"checkbox\"\r\n                          (click)=\"editPriceToggle()\"\r\n                          [checked]=\"editproductData.isPriceList\">\r\n                        <span class=\"slider round\"></span>\r\n                      </label>\r\n                    </div>\r\n                  </ion-col>\r\n\r\n\r\n\r\n                </ion-col>\r\n                <ion-col size=\"4\"\r\n                  class=\"flex\">\r\n                  <ion-label><strong>Show out of stock for 0 quantity</strong>\r\n                  </ion-label>&nbsp;&nbsp;\r\n                  <ion-col size=\"2\"\r\n                    class=\"ion-no-padding\">\r\n                    <div class=\"toggle-btn\">\r\n                      <label class=\"switch\">\r\n                        <input color=\"primary\"\r\n                          type=\"checkbox\"\r\n                          (click)=\"editProductStopOrderWhenNoQtyToggle(editproductData.stopWhenNoQty)\"\r\n                          [checked]=\"editproductData.stopWhenNoQty\">\r\n                        <span class=\"slider round\"></span>\r\n                      </label>\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-col>\r\n                <ion-col class=\"headings\"\r\n                  style=\"display: flex;align-items: center;\"\r\n                  size='4'>\r\n                  <div>Gst Exclusive</div>&nbsp;&nbsp;\r\n                  <div class=\"toggle-btn\">\r\n                    <label class=\"switch\">\r\n                      <input type=\"checkbox\"\r\n                        (click)=\"toggleGstExclusiveEdit()\"\r\n                        [checked]=\"editproductData.gstExclusive\">\r\n                      <span class=\"slider round\"></span>\r\n                    </label>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n              <br>\r\n              <ion-row>\r\n                <ion-col size=\"6\"\r\n                  class=\"flex\">\r\n                  <ion-label>Type:</ion-label>\r\n                  <ion-select class=\"variant-select\"\r\n                    [(ngModel)]=\"editproductData.variantType\"\r\n                    *ngIf=\"!variantTypeLoader\"\r\n                    [value]=\"editproductData.variantType\">\r\n                    <ion-select-option [value]=\"att.type\"\r\n                      *ngFor=\"let att of variantsAttributes\"\r\n                      style=\"text-transform: capitalize;\">{{att.type}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-spinner *ngIf=\"variantTypeLoader\"></ion-spinner>\r\n                </ion-col>\r\n                <ion-col size=\"6\"\r\n                  class=\"flex\">\r\n                  <ion-button (click)=\"importTemplate()\"\r\n                    fill=\"outline\"\r\n                    size=\"small\">\r\n                    Import Template\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-text color=\"danger\"\r\n                  style=\"margin-left: 8px;\">\r\n                  <p>Use pieces for wholesale. Specify number of pieces in\r\n                    pieces column and price / piece in price\r\n                    column.</p>\r\n                </ion-text>\r\n              </ion-row>\r\n              <br>\r\n              <!-- <ion-row>\r\n                <ion-col size=\"4\">\r\n                  <ion-label>Weight/Pieces/Size</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"3\">\r\n                  <ion-label>Price (INR)</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"3\" style=\"opacity: .6;\">\r\n                  <ion-label>Discounted Price(INR)</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2\">\r\n                  <div>Delete</div>\r\n                </ion-col>\r\n              </ion-row> -->\r\n              <ion-row\r\n                *ngFor=\"let element of editproductData.priceList; let i = index;\"\r\n                class=\"ion-justify-content-between ion-align-items-center\">\r\n                <ion-col>\r\n                  <ion-label>Sku Code</ion-label>\r\n                  <ion-input type=\"text\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"editproductData.priceList[i].sku\">\r\n                  </ion-input>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label>Barcode No</ion-label>\r\n                  <ion-input type=\"text\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"editproductData.priceList[i].barcodeNo\">\r\n                  </ion-input>\r\n                </ion-col>\r\n                <ion-col *ngIf=\"editproductData.variantType === 'pieces'\">\r\n                  <ion-label>Name</ion-label>\r\n                  <ion-input type=\"text\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"editproductData.priceList[i].name\">\r\n                  </ion-input>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label\r\n                    *ngIf=\"editproductData.variantType !== '' && editproductData.variantType !== 'other'\">\r\n                    <span\r\n                      *ngIf=\"editproductData.variantType === 'pieces'\">Number\r\n                      of&nbsp;</span>{{editproductData.variantType}}\r\n                  </ion-label>\r\n                  <ion-label\r\n                    *ngIf=\"editproductData.variantType === '' || editproductData.variantType === 'other'\">\r\n                    Variant</ion-label>\r\n                  <ion-input type=\"text\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"editproductData.priceList[i].weight\">\r\n                  </ion-input>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label>Price\r\n                    <span *ngIf=\"editproductData.variantType === 'pieces'\">/\r\n                      pc</span>\r\n                  </ion-label>\r\n                  <ion-input type=\"number\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"editproductData.priceList[i].price\">\r\n                  </ion-input>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label>Discounted Price <span\r\n                      *ngIf=\"editproductData.variantType === 'pieces'\">/\r\n                      pc</span>\r\n                  </ion-label>\r\n                  <ion-input type=\"number\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"editproductData.priceList[i].discountedPrice\">\r\n                  </ion-input>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label>Purchase Price <span\r\n                      *ngIf=\"editproductData.variantType === 'pieces'\">/\r\n                      pc</span>\r\n                  </ion-label>\r\n                  <ion-input type=\"number\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"editproductData.priceList[i].purchasePrice\">\r\n                  </ion-input>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label>Quantity</ion-label>\r\n                  <ion-input type=\"text\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"editproductData.priceList[i].totalQuantity\">\r\n                  </ion-input>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-label>Shipping Weight (Gms)</ion-label>\r\n                  <ion-input type=\"number\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"editproductData.priceList[i].shippingWeight\">\r\n                  </ion-input>\r\n                </ion-col>\r\n                <ion-col (click)=\"removeElementFromEditProductPriceList(i)\">\r\n                  <ion-button color=\"danger\"\r\n                    fill=\"outline\"\r\n                    shape=\"round\"\r\n                    class=\"btn-sml m-t-16\">\r\n                    <ion-icon name=\"remove-circle\"\r\n                      slot=\"start\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col style=\"text-align: center;\">\r\n                  <ion-button (click)=\"onClickAddMoreInEditProductPriceList()\"\r\n                    fill=\"outline\"\r\n                    shape=\"round\"\r\n                    size=\"small\"\r\n                    class=\"btn-2\">\r\n                    <ion-icon name=\"add-circle\"\r\n                      slot=\"start\"></ion-icon>\r\n                    Add more +\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ng-template>\r\n\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-label> Min Quantity</ion-label>\r\n                <ion-input type=\"number\"\r\n                  class=\"form-input\"\r\n                  [(ngModel)]=\"editproductData.minQty\"></ion-input>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <div class=\"input-wrap\">\r\n                  <ion-label>Max Quantity </ion-label>\r\n                  <ion-input type=\"number\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"editproductData.maxQty\"></ion-input>\r\n                </div>\r\n              </ion-col>\r\n\r\n            </ion-row>\r\n            <br />\r\n\r\n            <ion-row>\r\n              <ion-col size=\"10\">\r\n                <div class=\"input-wrap\">\r\n                  <ion-label>Keywords (Search)</ion-label>\r\n                  <ion-input class=\"form-input\"\r\n                    [(ngModel)]=\"keyword\"\r\n                    autocapitalize></ion-input>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <ion-button class=\"btn-2 m-t-36\"\r\n                  fill=\"outline\"\r\n                  shape=\"round\"\r\n                  (click)=\"editProductAddSearchKeywords()\">\r\n                  Add </ion-button>\r\n              </ion-col>\r\n              <ion-col size=\"12\"\r\n                *ngIf=\"editproductData.searchKeywords\">\r\n                <ion-chip outline\r\n                  color=\"dark\"\r\n                  *ngFor=\"let x of editproductData.searchKeywords; let i = index;\">\r\n                  <ion-icon name=\"close-circle\"\r\n                    (click)=\"editProductRemoveKeyword(i)\"></ion-icon>\r\n                  <ion-label>{{x}}</ion-label>\r\n                </ion-chip>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <div class=\"input-wrap\">\r\n                  <ion-label>SKU Code</ion-label>\r\n                  <ion-input class=\"form-input\"\r\n                    [(ngModel)]=\"editproductData.productCode\"></ion-input>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"input-wrap\">\r\n                  <ion-label>HSN Code</ion-label>\r\n                  <ion-input class=\"form-input\"\r\n                    [(ngModel)]=\"editproductData.hsnCode\"></ion-input>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"input-wrap\">\r\n                  <ion-label> GST (%)</ion-label>\r\n                  <ion-input type=\"number\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"editproductData.gst\"></ion-input>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <div class=\"input-wrap\">\r\n                  <ion-label>Barcode Number</ion-label>\r\n                  <ion-input type=\"text\"\r\n                    class=\"form-input\"\r\n                    [(ngModel)]=\"editproductData.barcodeNo\"></ion-input>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-label>Country Of Origin</ion-label>\r\n                <ion-input type=\"text\"\r\n                  class=\"form-input\"\r\n                  [(ngModel)]=\"editproductData.additionalInfo.countryOfOrigin\">\r\n                </ion-input>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <ion-label>Insta Reel Url</ion-label>\r\n                <ion-input type=\"text\"\r\n                  class=\"form-input\"\r\n                  [(ngModel)]=\"editproductData.instaReelUrl\">\r\n                </ion-input>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\">\r\n                <div class=\"flex-space-between\">\r\n                  <div>\r\n                    <ion-label>Insta Reel Cover Image</ion-label>\r\n                    <ion-text color=\"danger\">\r\n                      <p style=\"margin-top: 5px\">Image size for best view : 600x450 Px\r\n                      </p>\r\n                    </ion-text>\r\n                  </div>\r\n                  <div class=\"upload-btn-wrapper\">\r\n                    <button class=\"upload-btn btn-1 i-start\" (click)=\"uploadImage($event.target.files)\"> <i\r\n                        class=\"flaticon-null-16\"></i>upload</button>\r\n                    <!-- <input type=\"file\" name=\"myfile\" (change)=\"uploadImage($event.target.files,'catImg')\" /> -->\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n\r\n              <div class=\"img-container\">\r\n                <div class=\"no-img\" *ngIf=\"!editproductData.instaCoverImage\">\r\n                  <p>No attached image</p>\r\n                </div>\r\n                <div *ngIf=\"editproductData.instaCoverImage\">\r\n                  <div class=\"img-wrap\">\r\n                    <img class=\"category-img\" src=\"{{editproductData.instaCoverImage}}\"\r\n                      (click)=\"imageZoom(editproductData.instaCoverImage)\" />\r\n                    <div class=\"overlay\">\r\n                      <ion-button class=\"btn-2\" shape=\"round\" color=\"danger\" fill=\"clear\" (click)=\"removeReelCoverImage()\">\r\n                        <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\r\n                      </ion-button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div>\r\n      </ion-content>\r\n    </super-tab>\r\n\r\n    <super-tab>\r\n      <ion-content>\r\n        <div class=\"main-container fixed-height\">\r\n          <ion-row>\r\n            <ion-col class=\"headings\"\r\n            style=\"display: flex;align-items: center;\"\r\n            size='4'>\r\n            <div>Show Product Subheading</div>&nbsp;&nbsp;\r\n            <div class=\"toggle-btn\">\r\n              <label class=\"switch\">\r\n                <input type=\"checkbox\"\r\n                  (click)=\"toggleShowSubheadingEdit()\"\r\n                  [checked]=\"editproductData.showSubheading\">\r\n                <span class=\"slider round\"></span>\r\n              </label>\r\n            </div>\r\n          </ion-col>\r\n            <ion-col size=\"12\">\r\n              <p style=\"font-weight: bold;\">Product Description</p>\r\n              <br>\r\n              <ckeditor [(ngModel)]=\"editproductData.prodDesc\"\r\n                [config]=\"ckeConfig\"></ckeditor>\r\n            </ion-col>\r\n            <ion-row>\r\n              <ion-col size=\"12\" style=\"margin-top: 1rem;\">\r\n                <p style=\"font-weight: bold;\">Product Short Description</p>\r\n                <br>\r\n                <ckeditor [config]=\"ckeConfig\" [(ngModel)]=\"editproductData.prodShortDesc\"></ckeditor>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-button shape=\"round\"\r\n              class=\"btn-1 i-start\"\r\n              color=\"primary\"\r\n              (click)=\"addNewSection()\"\r\n              style=\"margin-bottom: 15px; margin-top: 15px;\">\r\n              <ion-icon name=\"add-circle\"\r\n                slot=\"start\"></ion-icon>\r\n              Add New Section\r\n            </ion-button>\r\n            <ion-reorder-group (ionItemReorder)=\"SectionReorder($event)\"\r\n              disabled=\"false\">\r\n              <ion-item *ngFor=\"let item of productSections; let i = index\">\r\n                <div class=\"section\">\r\n                  <div style=\"display: inline-flex\">\r\n                    <ion-reorder slot=\"end\"> <i class=\"flaticon-menu\"></i>\r\n                    </ion-reorder>\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <p style=\"margin-top: -12px;font-size: large\">Section\r\n                      {{i+1}}</p>\r\n                  </div>\r\n                  <br><br>\r\n                  <div class=\"sectionBlock\">\r\n                    <div style=\"display: block\">\r\n                      <p *ngIf=\"item.sectionName\"\r\n                        class=\"crop\">Name: {{item.sectionName}}</p>\r\n                      <br *ngIf=\"item.sectionName\">\r\n                      <p *ngIf=\"item.widgetType\">Type: {{item.widgetType}}</p>\r\n                    </div>\r\n                    <div style=\"display: flex\">\r\n                      <div>\r\n                        <ion-button\r\n                          (click)=\"openWidgetEdit(item.widgetType,item.widgetID,i)\">\r\n                          <i class=\"flaticon-pencil-edit-button\"\r\n                            slot=\"icon-only\"\r\n                            slot=\"icon-only\"></i>\r\n                          &nbsp;Edit\r\n                        </ion-button>\r\n                        &nbsp;&nbsp;\r\n                        <ion-button\r\n                          (click)=\"deleteSectionConfirm(item.widgetID,i, 'web')\">\r\n                          <i class=\"flaticon-null-21\"\r\n                            slot=\"icon-only\"\r\n                            slot=\"icon-only\"></i>\r\n                          &nbsp;Delete\r\n                        </ion-button>\r\n                      </div>\r\n                      <ion-list lines=\"none\"\r\n                        style=\"display: flex;margin-top: -20px;margin-left: 10px\">\r\n                        <ion-item>\r\n                          <ion-label>App</ion-label>\r\n                          <ion-toggle\r\n                            [checked]=\"item.location=='app' || item.location=='all'\"\r\n                            (ionChange)=\"changeLocationStatus(i,'app')\">\r\n                          </ion-toggle>\r\n                        </ion-item>\r\n\r\n                        <ion-item>\r\n                          <ion-label>Website</ion-label>\r\n                          <ion-toggle\r\n                            [checked]=\"item.location=='web' || item.location=='all'\"\r\n                            (ionChange)=\"changeLocationStatus(i,'web')\">\r\n                          </ion-toggle>\r\n                        </ion-item>\r\n                      </ion-list>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ion-item>\r\n            </ion-reorder-group>\r\n          </ion-row>\r\n        </div>\r\n      </ion-content>\r\n    </super-tab>\r\n\r\n    <super-tab>\r\n      <ion-content>\r\n        <div class=\"main-container fixed-height\"\r\n          style=\"display: flex;flex-wrap: nowrap;flex-direction: row;align-content: center;justify-content: space-around;align-items: flex-start;\">\r\n          <div class=\"categories-container\">\r\n            <div class=\"no-data\"\r\n              *ngIf=\"showNoCategories\"\r\n              text-center>\r\n              <img src=\"assets/img/no-category.png\"\r\n                alt=\"\">\r\n              <h6>No categories</h6>\r\n            </div>\r\n            <div class=\"product-search-wrap\"\r\n              *ngIf=\"!showNoCategories\">\r\n              <ion-searchbar [(ngModel)]=\"searchCategory\"\r\n                mode=\"ios\"></ion-searchbar>\r\n            </div>\r\n            <div class=\"categories-wrapper\"\r\n              *ngIf=\"!showNoCategories\">\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-label class=\"np-list-header\"\r\n                    style=\"font-size: 16px;font-weight: bold;\">Categories\r\n                  </ion-label>\r\n                </ion-list-header>\r\n                <div\r\n                  *ngFor=\"let category of categories | filter: searchCategory\">\r\n                  <div\r\n                    style=\"display: flex;justify-content: space-between;align-items: center;\">\r\n                    <ion-item (click)=\"onClickEditCategoryCheckBox(category.id)\"\r\n                      style=\"width: 100%;\">\r\n                      <ion-label>{{category.name}}</ion-label>\r\n                      <ion-checkbox color=\"primary\"\r\n                        slot=\"start\"\r\n                        [checked]=\"editCheckBoxValue(category.id)\">\r\n                      </ion-checkbox>\r\n                    </ion-item>\r\n                    <div (click)=\"getSubcategories(category.id)\"\r\n                      slot=\"end\"\r\n                      style=\"z-index: 9999;margin-right: 3%;opacity: .8;\"\r\n                      *ngIf=\"category.isSubcategories\">\r\n                      <i class=\"flaticon-null-13\"\r\n                        *ngIf=\"(listOfSubcategoriesInView.hasOwnProperty(category.id) && !listOfSubcategoriesInView[category.id].active) || !listOfSubcategoriesInView.hasOwnProperty(category.id)\"></i>\r\n                      <i class=\"flaticon-null-14\"\r\n                        *ngIf=\"listOfSubcategoriesInView.hasOwnProperty(category.id) && listOfSubcategoriesInView[category.id].active\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div\r\n                    *ngIf=\"(listOfSubcategories[category.id] && listOfSubcategories[category.id].length) && listOfSubcategoriesInView[category.id].active\"\r\n                    style=\"margin-left: 10%;\">\r\n                    <ng-container *ngFor=\"let subCat of listOfSubcategories[category.id]\">\r\n                      <div style=\"display: flex;justify-content: space-between;align-items: center;\">\r\n                        <ion-item (click)=\"onClickEditCategoryCheckBox(subCat.id)\" style=\"width: 100%;\">\r\n                          <ion-label>{{subCat.name}}</ion-label>\r\n                          <ion-checkbox color=\"primary\" slot=\"start\"[checked]=\"editCheckBoxValue(subCat.id)\"></ion-checkbox>\r\n                        </ion-item>\r\n                        <!-- Sub-SubCategory Start -->\r\n                        <div (click)=\"getSubOfSubCategories(category.id, subCat.id)\" slot=\"end\"\r\n                          style=\"z-index: 9999;margin-right: 3%;opacity: .8;\" *ngIf=\"subCat.isSubcategories\">\r\n                          <i class=\"flaticon-null-13\" *ngIf=\"!subOfSubCategoryToggle[subCat.id]?.active\"></i>\r\n                          <i class=\"flaticon-null-14\" *ngIf=\"subOfSubCategoryToggle[subCat.id]?.active\"></i>\r\n                        </div>\r\n                      </div>\r\n                      <ng-container *ngIf=\"subOfSubCategoryToggle[subCat.id]?.active && subOfSubCategories[subCat.id].length\">\r\n                        <div style=\"margin-left: 10%;\">\r\n                          <ng-container *ngFor=\"let subSubCat of subOfSubCategories[subCat.id]\">\r\n                            <ion-item (click)=\"onClickEditCategoryCheckBox(subSubCat.id)\">\r\n                              <ion-label>{{subSubCat.name}}</ion-label>\r\n                              <ion-checkbox color=\"primary\" slot=\"start\" [checked]=\"editCheckBoxValue(subSubCat.id)\"></ion-checkbox>\r\n                            </ion-item>\r\n                          </ng-container>\r\n                        </div>\r\n                      </ng-container>\r\n                      <!-- Sub-SubCategory End -->\r\n                    </ng-container>\r\n                  </div>\r\n                </div>\r\n\r\n              </ion-list>\r\n            </div>\r\n          </div>\r\n          <div class=\"brands-container\">\r\n            <div class=\"product-search-wrap\"\r\n              *ngIf=\"!showNoBrands\">\r\n              <ion-searchbar [(ngModel)]=\"searchBrand\"\r\n                mode=\"ios\"></ion-searchbar>\r\n            </div>\r\n            <ion-list *ngIf=\"!showNoBrands && brands.length\">\r\n              <ion-list-header>\r\n                <ion-label class=\"np-list-header\"\r\n                  style=\"font-size: 16px;font-weight: bold;\">Brands</ion-label>\r\n              </ion-list-header>\r\n              <div *ngFor=\"let brand of brands | filter: searchBrand\">\r\n                <ion-item (click)=\"onClickEditBrandCheckBox(brand.id)\"\r\n                  style=\"width: 100%;\">\r\n                  <ion-label>{{brand.name}}</ion-label>\r\n                  <ion-checkbox color=\"primary\"\r\n                    slot=\"start\"\r\n                    [checked]=\"editBrandCheckBoxValue(brand.id)\">\r\n                  </ion-checkbox>\r\n                </ion-item>\r\n              </div>\r\n            </ion-list>\r\n          </div>\r\n        </div>\r\n      </ion-content>\r\n    </super-tab>\r\n\r\n    <super-tab>\r\n      <ion-content>\r\n        <div class=\"main-container\">\r\n          <!-- new images-->\r\n          <!-- <div class=\"dropzone\"\r\n            appDropzone\r\n            (dropped)=\"onDrop($event)\">\r\n            <h3>Drag and Drop a File</h3>\r\n\r\n            <div class=\"file\">\r\n              <input class=\"file-input\"\r\n                multiple\r\n                type=\"file\"\r\n                (change)=\"onDrop($event.target.files)\">\r\n            </div>\r\n          </div> -->\r\n          <button class=\"upload-btn btn-1 i-start\"\r\n            (click)=\"onDrop($event.target.files)\">Upload Product\r\n            Image(s)</button>\r\n          <h3>Uploads</h3>\r\n          <!-- <div class=\"upload-img-wrapper\">\r\n            <div *ngFor=\"let file of files\" class=\"img-preview\">\r\n              <app-upload-task [file]=\"file\"></app-upload-task>\r\n            </div>\r\n          </div> -->\r\n\r\n          <!-- new images-->\r\n\r\n          <!-- old images-->\r\n          <div class=\"imgs-container\">\r\n\r\n            <div class=\"img-wrap\"\r\n              *ngFor=\"let img of listofbase64Image; let i = index\">\r\n              <img [src]=\"img.base64Img\"\r\n                (click)=\"onClickEditImage(img.url)\" />\r\n              <div class=\"overlay\">\r\n                <ion-button class=\"remove\"\r\n                  shape=\"round\"\r\n                  color=\"danger\"\r\n                  fill=\"clear\"\r\n                  (click)=\"removeEditImageInList(i)\">\r\n                  <ion-icon name=\"trash\"\r\n                    slot=\"icon-only\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button *ngIf=\"img.cover == true\"\r\n                  class=\"btn-2 cover\"\r\n                  shape=\"round\">\r\n                  Cover\r\n                </ion-button>\r\n                <ion-button class=\"btn-2 cover\"\r\n                  shape=\"round\"\r\n                  *ngIf=\"img.cover == false\"\r\n                  (click)=\"editProductCoverPicInList(i)\">\r\n                  Make Cover\r\n                </ion-button>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"list-header\">\r\n              <ion-grid class=\"ion-no-padding\">\r\n                <ion-row>\r\n                  <ion-col class=\"reorder\">\r\n                    <p>Reorder</p>\r\n                  </ion-col>\r\n                  <ion-col class=\"img\">\r\n                    <p>Image</p>\r\n                  </ion-col>\r\n                  <ion-col class=\"action\">\r\n                    <p>Action</p>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n            <div class=\"list-container\">\r\n              <ion-reorder-group (ionItemReorder)=\"imagesReorder($event)\"\r\n                disabled=\"false\"\r\n                class=\"ion-no-padding\">\r\n                <ion-item\r\n                  *ngFor=\"let img of editproductData.images; let i = index\"\r\n                  lines=\"none\">\r\n                  <ion-grid\r\n                    class=\"row-background ion-no-padding ion-align-items-center\">\r\n                    <ion-row class=\"ion-align-items-center\">\r\n                      <ion-col class=\"reorder\">\r\n                        <ion-reorder>\r\n                          <div class=\"flat-sort\">\r\n                            <i class=\"flaticon-menu\"></i>\r\n                          </div>\r\n                        </ion-reorder>\r\n                      </ion-col>\r\n                      <ion-col class=\"img\">\r\n                        <img [src]=\"img.url\"\r\n                          (click)=\"onClickEditImage(img.url)\"\r\n                          height=\"200px\" />\r\n                      </ion-col>\r\n                      <ion-col class=\"action\">\r\n                        <div class=\"overlay\">\r\n                          <ion-button class=\"remove\"\r\n                            shape=\"round\"\r\n                            color=\"danger\"\r\n                            fill=\"clear\"\r\n                            large\r\n                            (click)=\"removeEditImageInData(i, img.url)\">\r\n                            <ion-icon name=\"trash\"\r\n                              slot=\"icon-only\"\r\n                              style=\" font-size: 16px;\"></ion-icon>\r\n                          </ion-button>\r\n                          <ion-button\r\n                            *ngIf=\"editproductData.coverPic.imageId == img.imageId\"\r\n                            class=\"btn-2 cover\"\r\n                            shape=\"round\"\r\n                            disabled>\r\n                            Cover\r\n                          </ion-button>\r\n                          <ion-button\r\n                            *ngIf=\"editproductData.coverPic.imageId != img.imageId \"\r\n                            class=\"btn-2 cover\"\r\n                            shape=\"round\"\r\n                            (click)=\"editProductCoverPicInData(i)\">\r\n                            Make Cover\r\n                          </ion-button>\r\n                          <div>\r\n                            <p style=\"margin-top: 5px;text-align: center;\">\r\n                              Variants</p>\r\n                            <ion-select class=\"variantImageSelect\"\r\n                              multiple=\"true\"\r\n                              cancelText=\"Cancel\"\r\n                              okText=\"Done\"\r\n                              placeholder=\"Select Variants\"\r\n                              [value]=\"getVariantImgsValues(i)\"\r\n                              style=\"position: relative;\"\r\n                              *ngIf=\"editproductData.isPriceList\"\r\n                              [interfaceOptions]=\"variantGrpSelectOptions\"\r\n                              (ionChange)=\"onChangeVariantImg($event,i);\">\r\n                              <ion-select-option\r\n                                *ngFor=\"let item of editproductData.priceList; let j=index\"\r\n                                value=\"{{item.weight}}\">\r\n                                {{item.weight}}\r\n                              </ion-select-option>\r\n                            </ion-select>\r\n                          </div>\r\n                        </div>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                  <br>\r\n                </ion-item>\r\n              </ion-reorder-group>\r\n            </div>\r\n          </div>\r\n          <!-- old images-->\r\n        </div>\r\n      </ion-content>\r\n    </super-tab>\r\n    <super-tab>\r\n      <ion-content class=\"ion-no-padding\">\r\n        <div class=\"main-container\"\r\n          style=\"width: 100%\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=2\r\n                id=\"scroll1\">\r\n                <div class=\"statusList\">\r\n                  <div [id]=\"item\"\r\n                  *ngFor='let item of sideMenu; let i=index'\r\n                  (click)='changeComponent(item)'>\r\n                  <ng-container *ngIf=\"userRole !== 'vendor'\">\r\n                    <p>{{item}}</p>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"userRole == 'vendor' && item != 'Vendor' && item != 'Specific User Discount'\">\r\n                    <p>{{item}}</p>\r\n                  </ng-container>\r\n\r\n                </div>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=10\r\n                style=\"margin-top: 8px; border-left: 1px solid lightgray;\">\r\n                <ion-col style=\"height: 5vh;\">\r\n                  <ion-button (click)=\"editProduct()\"\r\n                    color=\"success\">\r\n                    <i class=\"flaticon-null-20 margin-icon\"></i>&nbsp;\r\n                    Save Settings\r\n                  </ion-button>&nbsp;&nbsp;\r\n                  <ion-button (click)=\"deleteAlertConfirm();\"\r\n                    color=\"danger\">\r\n                    <i class=\"flaticon-null-21\"></i>&nbsp;\r\n                    Delete Product\r\n                  </ion-button>\r\n                </ion-col>\r\n                <ion-col id=\"scroll2\"\r\n                  [ngSwitch]=\"selectedId\">\r\n                  <ion-grid style=\"margin-top: 10px;\">\r\n                    <ion-row *ngSwitchCase=\"'Cash on Delivery'\">\r\n                      <ion-col style=\"display: flex;align-items: center;\">\r\n                        <div>Cash on delivery (COD) for product</div>\r\n                        &nbsp;&nbsp;\r\n                        <div class=\"toggle-btn\">\r\n                          <label class=\"switch\">\r\n                            <input type=\"checkbox\"\r\n                              (click)=\"toggleCodEdit()\"\r\n                              [checked]=\"editproductData.isCod\">\r\n                            <span class=\"slider round\"></span>\r\n                          </label>\r\n                        </div>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <div *ngSwitchCase=\"'Price Slabs'\">\r\n                      <div style=\"display: flex;align-items: center;\">\r\n                        <div>Price slabs for product</div>&nbsp;&nbsp;\r\n                        <div class=\"toggle-btn\">\r\n                          <label class=\"switch\">\r\n                            <input type=\"checkbox\"\r\n                              (click)=\"activePriceSlabEdit()\"\r\n                              [checked]=\"editproductData.priceSlabs.active\">\r\n                            <span class=\"slider round\"></span>\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                      <br>\r\n                      <div\r\n                        *ngIf='editproductData.priceSlabs && editproductData.priceSlabs.active'>\r\n                        <div *ngIf=\"!editproductData.isPriceList\">\r\n                          <div style=\"display: flex;align-items: center;\">\r\n                            <ion-button (click)=\"enterPriceSlabData('edit','')\">\r\n                              <p\r\n                                *ngIf=\"editproductData.priceSlabs.singleSlabs && editproductData.priceSlabs.singleSlabs.length == 0\">\r\n                                Create Slab</p>\r\n                              <p\r\n                                *ngIf=\"editproductData.priceSlabs.singleSlabs && editproductData.priceSlabs.singleSlabs.length > 0\">\r\n                                Add Slab</p>\r\n                            </ion-button>&nbsp;&nbsp;\r\n                            <ion-button (click)=\"removePriceSlabs('edit','')\">\r\n                              Remove All Slabs\r\n                            </ion-button>\r\n                          </div>\r\n                          <br>\r\n                          <ion-grid\r\n                            *ngIf=\"editproductData.priceSlabs.singleSlabs && editproductData.priceSlabs.singleSlabs.length > 0\"\r\n                            class=\"ion-no-padding data-table ion-text-center\"\r\n                            style=\"margin-top: 12px;width: 400px;margin-left: 0px;\">\r\n                            <ion-row>\r\n                              <ion-col>Quantity</ion-col>\r\n                              <ion-col>Price per product</ion-col>\r\n                              <ion-col>Discount price per product</ion-col>\r\n                              <ion-col>Edit</ion-col>\r\n                            </ion-row>\r\n                            <ion-row\r\n                              *ngFor=\"let slab of editproductData.priceSlabs.singleSlabs; let i=index;\"\r\n                              style=\"border-top: 1px solid lightgray;\">\r\n                              <ion-col>\r\n                                <p>{{slab.qty[0]}} - {{slab.qty[1]}}</p>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                <p>{{slab.mrp}}</p>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                <p>{{slab.price}}</p>\r\n                              </ion-col>\r\n                              <ion-col>\r\n                                <p class=\"cursor-p\">\r\n                                  <i class=\"flaticon-pencil-edit-button\"\r\n                                    (click)=\"editPriceSlabDataForSingleSlab(i, slab)\"></i>\r\n                                </p>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </ion-grid>\r\n                        </div>\r\n                        <div\r\n                          *ngIf=\"editproductData.isPriceList && editproductData.priceList && editproductData.priceList.length > 0\">\r\n                          <div\r\n                            *ngFor='let variant of editproductData.priceList'>\r\n                            <div\r\n                              style=\"display: flex;align-items: center;margin: 12px;\">\r\n                              <p\r\n                                *ngIf=\"editproductData.variantType != 'other' \">\r\n                                {{editproductData.variantType}} :&nbsp;&nbsp;\r\n                              </p>\r\n                              <p\r\n                                *ngIf=\"editproductData.variantType == 'other' \">\r\n                                Varient :&nbsp;&nbsp;</p>\r\n                              <p>{{variant.weight}}</p>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                              <div style=\"display: flex;align-items: center;\">\r\n                                <ion-button\r\n                                  (click)=\"enterPriceSlabData('edit',variant.weight)\">\r\n                                  <p\r\n                                    *ngIf=\"(!editproductData.priceSlabs.variantSlabs[variant.weight]) || \r\n                                  (editproductData.priceSlabs.variantSlabs[variant.weight] && editproductData.priceSlabs.variantSlabs[variant.weight].length == 0)\">\r\n                                    Create Slab</p>\r\n                                  <p\r\n                                    *ngIf=\"editproductData.priceSlabs.variantSlabs[variant.weight] && editproductData.priceSlabs.variantSlabs[variant.weight].length > 0\">\r\n                                    Add Slab</p>\r\n                                </ion-button>&nbsp;&nbsp;\r\n                                <ion-button\r\n                                  (click)=\"removePriceSlabs('edit',variant.weight)\">\r\n                                  Remove All Slabs\r\n                                </ion-button>\r\n                              </div>\r\n                            </div>\r\n                            <ion-grid\r\n                              *ngIf=\"editproductData.priceSlabs.variantSlabs[variant.weight] && editproductData.priceSlabs.variantSlabs[variant.weight].length > 0\"\r\n                              class=\"ion-no-padding data-table ion-text-center\"\r\n                              style=\"margin-top: 12px;width: 400px;margin-left: 0px;\">\r\n                              <ion-row>\r\n                                <ion-col>Quantity</ion-col>\r\n                                <ion-col>Price per product</ion-col>\r\n                                <ion-col>Discount price per product</ion-col>\r\n                                <ion-col>Edit</ion-col>\r\n                              </ion-row>\r\n                              <ion-row\r\n                                *ngFor=\"let slab of editproductData.priceSlabs.variantSlabs[variant.weight]; let i=index;\"\r\n                                style=\"border-top: 1px solid lightgray;\">\r\n                                <ion-col>\r\n                                  <p>{{slab.qty[0]}} - {{slab.qty[1]}}</p>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                  <p>{{slab.mrp}}</p>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                  <p>{{slab.price}}</p>\r\n                                </ion-col>\r\n                                <ion-col>\r\n                                  <p class=\"cursor-p\">\r\n                                    <i class=\"flaticon-pencil-edit-button\"\r\n                                      (click)=\"editPriceSlabDataForVariantSlab(i, slab, variant.weight)\"></i>\r\n                                  </p>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                            </ion-grid>\r\n                            <br>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngSwitchCase=\"'Extra Charges'\">\r\n                      <ion-row>\r\n                        <ion-col style=\"display: flex;align-items: center;\">\r\n                          <ion-label>Extra Charges</ion-label>&nbsp;&nbsp;\r\n                          <div class=\"toggle-btn\">\r\n                            <label class=\"switch\">\r\n                              <input type=\"checkbox\"\r\n                                (click)=\"toggleExtraChargesEdit()\"\r\n                                [checked]=\"editproductData.extraCharges.active\">\r\n                              <span class=\"slider round\"></span>\r\n                            </label>\r\n                          </div>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <br>\r\n                      <ion-row *ngIf='editproductData.extraCharges.active'>\r\n                        <ion-col size=\"6\"\r\n                          class=\"ion-no-padding\">\r\n                          <ion-label>Charge Name / Label</ion-label>\r\n                          <ion-input type=\"text\"\r\n                            class=\"form-input\"\r\n                            [(ngModel)]=\"editproductData.extraCharges.label\">\r\n                          </ion-input>\r\n                        </ion-col>\r\n                        <br>\r\n                      </ion-row>\r\n                      <br *ngIf='editproductData.extraCharges.active'>\r\n                      <ion-row *ngIf='editproductData.extraCharges.active'>\r\n                        <ion-col size=\"6\"\r\n                          class=\"ion-no-padding\">\r\n                          <ion-label>Cost</ion-label>\r\n                          <ion-input type=\"number\"\r\n                            class=\"form-input\"\r\n                            [(ngModel)]=\"editproductData.extraCharges.charge\">\r\n                          </ion-input>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <br *ngIf='editproductData.extraCharges.active'>\r\n                      <ion-row *ngIf='editproductData.extraCharges.active'>\r\n                        <ion-col style=\"display: flex;align-items: center;\">\r\n                          <ion-label>Apply this charge for each product\r\n                            seperately when multiple purchased together\r\n                          </ion-label>&nbsp;&nbsp;\r\n                          <div class=\"toggle-btn\">\r\n                            <label class=\"switch\">\r\n                              <input type=\"checkbox\"\r\n                                (click)=\"toggleChargeQtyEdit()\"\r\n                                [checked]=\"editproductData.extraCharges.chargeAllQty\">\r\n                              <span class=\"slider round\"></span>\r\n                            </label>\r\n                          </div>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <br *ngIf='product.extraCharges.active'>\r\n                    </div>\r\n                    <ion-row *ngSwitchCase=\"'Colors'\">\r\n                      <ion-col size=\"6\">\r\n                        <ion-label>Color</ion-label>&nbsp;&nbsp;\r\n                        <ion-button (click)=\"selectVariantColor()\"\r\n                          fill=\"outline\"\r\n                          shape=\"round\"\r\n                          *ngIf=\"!editproductData.color?.hasOwnProperty('name')\">\r\n                          Select Color\r\n                        </ion-button>\r\n                        <div\r\n                          *ngIf=\"editproductData.color?.hasOwnProperty('name')\"\r\n                          class=\"color-selected\">\r\n                          <p class=\"product-color-name\">\r\n                            {{editproductData.color.name}}</p>\r\n                          <div\r\n                            [ngStyle]=\"{'background-color': editproductData.color.code}\"\r\n                            class=\"color-code\"\r\n                            *ngIf=\"editproductData.color.code && editproductData.color.code !== ''\">\r\n                          </div>\r\n                          <div\r\n                            *ngIf=\"editproductData.color.image && editproductData.color.image !== '' && editproductData.color.code === ''\">\r\n                            <img src=\"{{editproductData.color.image}}\"\r\n                              class=\"color-code\">\r\n                          </div>\r\n                          <ion-button (click)=\"updateEditVariantColor()\"\r\n                            expand=\"block\"\r\n                            fill=\"outline\"\r\n                            shape=\"round\"\r\n                            size=\"small\">\r\n                            update\r\n                          </ion-button>&nbsp;&nbsp;&nbsp;\r\n                          <ion-button (click)=\"removeEditVariantColor()\"\r\n                            expand=\"block\"\r\n                            color=\"dark\"\r\n                            fill=\"outline\"\r\n                            shape=\"round\"\r\n                            size=\"small\">\r\n                            remove\r\n                          </ion-button>\r\n                        </div>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngSwitchCase=\"'Vendor'\">\r\n                      <ion-text color=\"danger\">\r\n                        <p *ngIf=\"!multiVendor\">This option is only available\r\n                          when MultiVendor is on</p>\r\n                      </ion-text>\r\n                      <ion-col size=\"6\">\r\n                        <div *ngIf=\"multiVendor && vendors.length\">\r\n                          <ion-row>\r\n                            <div class=\"headings\">\r\n                              Add Vendor\r\n                            </div>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col size=\"12\">\r\n                              <ion-select [value]=\"editproductData.vendorId\"\r\n                                class=\"border i-s-p-10\"\r\n                                (ionChange)=\"addVendor($event, 'edit')\"\r\n                                placeholder=\"Select Vendor\">\r\n                                <ion-select-option value=\"\">No Vendor\r\n                                </ion-select-option>\r\n                                <ion-select-option [value]=\"vendor.id\"\r\n                                  *ngFor=\"let vendor of vendors\">{{vendor.name}}\r\n                                </ion-select-option>\r\n                              </ion-select>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <br>\r\n                        </div>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngSwitchCase=\"'Filters'\">\r\n                      <ion-col size=\"6\">\r\n                        <div *ngIf=\"isFilterActive\">\r\n                          <ion-row>\r\n                            <div class=\"headings\">\r\n                              Add filter\r\n                            </div>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col size=\"6\"\r\n                              class=\"border content-alignment f-s-14 filters-col\"\r\n                              (click)=\"addFilters('edit')\">\r\n                              <ion-text>\r\n                                {{getAddedFiltersLength(editproductData.filters)}}\r\n                                Filters added</ion-text>\r\n                              &nbsp;&nbsp;<i class=\"flaticon-null-5\"></i>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <br>\r\n                        </div>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <div *ngSwitchCase=\"'Subscription'\">\r\n                      <ion-text color=\"danger\">\r\n                        <p *ngIf=\"!subscriptionFeature\">This option is only\r\n                          available when Subscription feature is on</p>\r\n                      </ion-text>\r\n                      <div *ngIf=\"subscriptionFeature\">\r\n                        <ion-row>\r\n                          <ion-col class=\"ion-no-padding\"\r\n                            style=\"display: flex;\">\r\n                            <ion-label>Allow Subscriptions</ion-label>\r\n                            &nbsp;&nbsp;\r\n                            <div class=\"toggle-btn\">\r\n                              <label class=\"switch\">\r\n                                <input color=\"primary\"\r\n                                  type=\"checkbox\"\r\n                                  (click)=\"editSubIsAllowedToggle()\"\r\n                                  [checked]=\"editproductData.subscription.isAllowed\">\r\n                                <span class=\"slider round\"></span>\r\n                              </label>\r\n                            </div>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                        <br>\r\n                        <div *ngIf=\"editproductData.subscription.isAllowed\">\r\n                          <ion-row>\r\n                            <ion-col class=\"ion-no-padding\"\r\n                              size=\"6\">\r\n                              <ion-label>Daily Discount (%)</ion-label>\r\n                              <ion-input type=\"number\"\r\n                                class=\"form-input\"\r\n                                [(ngModel)]=\"editproductData.subscription.dailyDiscount\">\r\n                              </ion-input>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <br>\r\n                          <ion-row>\r\n                            <ion-col class=\"ion-no-padding\"\r\n                              size=\"6\">\r\n                              <ion-label>Weekly Discount (%)</ion-label>\r\n                              <ion-input type=\"number\"\r\n                                class=\"form-input\"\r\n                                [(ngModel)]=\"editproductData.subscription.weeklyDiscount\">\r\n                              </ion-input>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <br>\r\n                          <ion-row>\r\n                            <ion-col class=\"ion-no-padding\"\r\n                              size=\"6\">\r\n                              <ion-label>Monthly Discount (%)</ion-label>\r\n                              <ion-input type=\"number\"\r\n                                class=\"form-input\"\r\n                                [(ngModel)]=\"editproductData.subscription.monthlyDiscount\">\r\n                              </ion-input>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <!-- retail price -->\r\n                    <div *ngSwitchCase=\"'Wholesale Price'\">\r\n                      <ion-text color=\"danger\">\r\n                        <p *ngIf=\"!priceForRetail\">This option is only available\r\n                          when Retail feature is on</p>\r\n                      </ion-text>\r\n                      <ion-row *ngIf=\"priceForRetail\">\r\n                        <ion-col class=\"ion-no-padding\"\r\n                          size=\"6\">\r\n                          <ion-row>\r\n                            <ion-col size=\"4\" class=\"flex-label\">\r\n                              <div class=\"headings\">\r\n                                Retail Price Discount ({{editproductData.retailDiscountType !== 'percentage' ? currencyCode : '%'}})\r\n                              </div>\r\n                            </ion-col>\r\n                            <ion-col class=\"flex-label\" size=\"4\">\r\n                              <span>%</span>\r\n                              <div class=\"toggle-btn m-l-16\">\r\n                                <label class=\"switch\">\r\n                                  <input color=\"primary\"\r\n                                    type=\"checkbox\"\r\n                                    (click)=\"changeRetailDiscountType()\"\r\n                                    [checked]=\"editproductData.retailDiscountType !== 'percentage'\">\r\n                                  <span class=\"slider round\"></span>\r\n                                </label>\r\n                              </div>\r\n                              <span class=\"m-l-16\">FLAT</span>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-input type=\"number\"\r\n                            class=\"form-input\"\r\n                            [(ngModel)]=\"editproductData.retailDiscount\">\r\n                          </ion-input>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </div>\r\n                    <!-- retail price -->\r\n                    <!-- limited time deal -->\r\n                    <div *ngSwitchCase=\"'Limited Time Deal'\">\r\n                      <ion-text color=\"danger\">\r\n                        <p *ngIf=\"!limitedTimeDeal\">This option is only\r\n                          available when Limited Time Deal feature is on</p>\r\n                      </ion-text>\r\n                      <div *ngIf=\"limitedTimeDeal\">\r\n                        <ion-row>\r\n                          <ion-col class=\"ion-no-padding\"\r\n                            style=\"display: flex;\">\r\n                            <ion-label>Limited time offer</ion-label>\r\n                            &nbsp;&nbsp;\r\n                            <div class=\"toggle-btn\">\r\n                              <label class=\"switch\">\r\n                                <input type=\"checkbox\"\r\n                                  (click)=\"editDealIsAllowedToggle()\"\r\n                                  [checked]=\"editproductData.deal.isAllowed\">\r\n                                <span class=\"slider round\"></span>\r\n                              </label>\r\n                            </div>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                        <br>\r\n                        <div class=\"headings\">\r\n                          Start date time\r\n                        </div>\r\n                        <ion-row class=\"ion-align-items-center\">\r\n                          <ion-col size=\"3\">\r\n                            <ion-datetime class=\"input-border time-picker\"\r\n                              [disabled]=\"!editproductData.deal.isAllowed\"\r\n                              placeholder=\"Date\"\r\n                              displayFormat=\"DD MMM YYYY\"\r\n                              [(ngModel)]=\"editproductData.deal.start.date\"\r\n                              [min]=\"minDate\"></ion-datetime>\r\n                          </ion-col>\r\n                          <ion-col size=\"1\"\r\n                            style=\"text-align: center;\">\r\n                            -\r\n                          </ion-col>\r\n                          <ion-col size=\"3\">\r\n                            <ion-datetime class=\"input-border time-picker\"\r\n                              [disabled]=\"!editproductData.deal.isAllowed\"\r\n                              placeholder=\"Time\"\r\n                              displayFormat=\"hh:mm A\"\r\n                              pickerFormat=\"hh:mm A\"\r\n                              [(ngModel)]=\"editproductData.deal.start.time\">\r\n                            </ion-datetime>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                        <div class=\"headings\">\r\n                          End date time\r\n                        </div>\r\n                        <ion-row class=\"ion-align-items-center\">\r\n                          <ion-col size=\"3\">\r\n                            <ion-datetime class=\"input-border time-picker\"\r\n                              [disabled]=\"!editproductData.deal.isAllowed\"\r\n                              placeholder=\"Date\"\r\n                              displayFormat=\"DD MMM YYYY\"\r\n                              [(ngModel)]=\"editproductData.deal.end.date\"\r\n                              [min]=\"minDate\"\r\n                              [max]=\"2030\"></ion-datetime>\r\n                          </ion-col>\r\n                          <ion-col size=\"1\"\r\n                            style=\"text-align: center;\">\r\n                            -\r\n                          </ion-col>\r\n                          <ion-col size=\"3\">\r\n                            <ion-datetime class=\"input-border time-picker\"\r\n                              [disabled]=\"!editproductData.deal.isAllowed\"\r\n                              placeholder=\"Time\"\r\n                              displayFormat=\"hh:mm A\"\r\n                              pickerFormat=\"hh:mm A\"\r\n                              [(ngModel)]=\"editproductData.deal.end.time\">\r\n                            </ion-datetime>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                        <ion-row class=\"ion-align-items-center\">\r\n                          <ion-col size=\"6\">\r\n                            <div class=\"headings\">\r\n                              Deal discount\r\n                            </div>\r\n                            <ion-input type=\"number\"\r\n                              class=\"form-input\"\r\n                              [(ngModel)]=\"editproductData.deal.discount\">\r\n                            </ion-input>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngSwitchCase=\"'Specific User Discount'\">\r\n                      <ion-text color=\"danger\">\r\n                        <p *ngIf=\"!editproductData.deal.isAllowed\">This option\r\n                          is only available when limited time deal is on</p>\r\n                      </ion-text>\r\n                      <ion-row *ngIf=\"editproductData.deal.isAllowed\">\r\n                        <ion-col size=\"4\">\r\n                          <div class=\"input-wrap\">\r\n                            <div class=\"flex-label\">\r\n                              <ion-label>Give user specific discount on this\r\n                                product</ion-label>\r\n                              <ion-toggle\r\n                                [(ngModel)]=\"editproductData.deal.specificUsers.active\">\r\n                              </ion-toggle>\r\n                            </div>\r\n                          </div>\r\n                        </ion-col>\r\n                        <ion-col size=\"8\">\r\n                          <ion-button class=\"btn-2 i-start\"\r\n                            (click)=\"openUsersModal()\"\r\n                            shape=\"round\"\r\n                            fill=\"outline\"\r\n                            *ngIf=\"editproductData.deal.specificUsers.active\">\r\n                            <i class=\"flaticon-null-5 margin-icon\"></i>\r\n                            Add Users\r\n                          </ion-button>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <ng-container\r\n                        *ngIf=\"editproductData.deal.isAllowed && editproductData.deal.specificUsers.active && editproductData.deal.specificUsers.users.length>0\">\r\n                        <h5 style=\"margin: 0px;\">User List with Discount &nbsp;\r\n                          <i class=\"flaticon-null-27 cursor-p\"\r\n                            *ngIf=\"moreUsers\"\r\n                            (click)=\"moreUsers = !moreUsers\"></i>\r\n                          <i class=\"flaticon-null-28 cursor-p\"\r\n                            *ngIf=\"!moreUsers\"\r\n                            (click)=\"moreUsers = !moreUsers\"></i>\r\n                        </h5>\r\n                        <div class=\"ion-no-padding\"\r\n                          *ngIf=\"moreUsers\">\r\n                          <div class=\"list-header t-a-c\">\r\n                            <ion-grid class=\"ion-no-padding\">\r\n                              <ion-row class=\"headings\">\r\n                                <ion-col size=\"3\">\r\n                                  <p>Name</p>\r\n                                </ion-col>\r\n                                <ion-col size=\"3\">\r\n                                  <p>Phone Number</p>\r\n                                </ion-col>\r\n                                <ion-col size=\"2\">\r\n                                  <p>Discount(%)</p>\r\n                                </ion-col>\r\n                                <ion-col size=\"2\">\r\n                                  <p>Delete</p>\r\n                                </ion-col>\r\n                              </ion-row>\r\n                            </ion-grid>\r\n                          </div>\r\n                          <div class=\"list-container\">\r\n                            <ion-item\r\n                              *ngFor=\"let item of editproductData.deal.specificUsers.users; let i = index\">\r\n                              <ion-grid\r\n                                class=\"row-background ion-no-padding ion-align-items-center\">\r\n                                <ion-row class=\"ion-align-items-center\">\r\n                                  <ion-col size=\"3\">\r\n                                    <p\r\n                                      class=\"ion-text-capitalize ion-text-center\">\r\n                                      {{item.name}}</p>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\">\r\n                                    <p\r\n                                      class=\"ion-text-capitalize ion-text-center\">\r\n                                      {{item.phoneNo}}</p>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"2\">\r\n                                    <ion-input type=\"number\"\r\n                                      class=\"form-input padding-start-16\"\r\n                                      [(ngModel)]=\"item.discount\"></ion-input>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"2\"\r\n                                    class=\"ion-text-center\">\r\n                                    <div class=\"ion-text-center\">\r\n                                      <i class=\"flaticon-null-21 cursor-p\"\r\n                                        (click)=\"removeUser(i)\"></i>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                              </ion-grid>\r\n                            </ion-item>\r\n                          </div>\r\n                        </div>\r\n                      </ng-container>\r\n                    </div>\r\n                    <ion-row>\r\n                      <div *ngSwitchCase=\"'Barcode / Qr Code'\">\r\n                        <ion-col size=\"12\"\r\n                          class=\"flex\"\r\n                          *ngIf=\"!editproductData.isPriceList\">\r\n                          <ion-label>Barcode / QR code</ion-label>\r\n                          <div class=\"upload-btn-wrapper\">\r\n                            <button class=\"upload-btn btn-1 i-start\"> <i\r\n                                class=\"flaticon-null-16\"></i>upload</button>\r\n                            <input type=\"file\"\r\n                              name=\"myfile\"\r\n                              (change)=\"uploadQR($event.target.files, 'edit')\" />\r\n                          </div>\r\n                          <div class=\"imgs-container\"\r\n                            *ngIf=\"barcode !== ''\">\r\n                            <div class=\"img-wrap\">\r\n                              <img [src]=\"barcode\"\r\n                                (click)=\"imageZoom(barcode)\" />\r\n                              <div class=\"overlay\">\r\n                                <ion-button class=\"remove\"\r\n                                  shape=\"round\"\r\n                                  color=\"danger\"\r\n                                  fill=\"clear\"\r\n                                  (click)=\"removeBarcodeImage()\">\r\n                                  <ion-icon name=\"trash\"\r\n                                    slot=\"icon-only\"></ion-icon>\r\n                                </ion-button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </ion-col>\r\n                        <ng-container *ngIf=\"editproductData.isPriceList\">\r\n                          <ng-container\r\n                            *ngIf=\"editproductData.priceList.length && editproductData.priceList[0].weight\">\r\n                            <ion-col size=\"12\"\r\n                              class=\"flex\"\r\n                              *ngFor=\"let pl of editproductData.priceList; let i = index;\">\r\n                              <ion-label>Upload For {{pl.weight}}</ion-label>\r\n                              <div class=\"upload-btn-wrapper\">\r\n                                <button class=\"upload-btn btn-1 i-start\"> <i\r\n                                    class=\"flaticon-null-16\"></i>upload</button>\r\n                                <input type=\"file\"\r\n                                  name=\"myfile\"\r\n                                  (change)=\"uploadPriceListQR($event.target.files,i, 'edit')\" />\r\n                              </div>\r\n                              <div class=\"imgs-container\"\r\n                                *ngIf=\"pl.barcode\">\r\n                                <div class=\"img-wrap\">\r\n                                  <img [src]=\"pl.barcode\"\r\n                                    (click)=\"imageZoom(pl.barcode)\" />\r\n                                  <div class=\"overlay\">\r\n                                    <ion-button class=\"remove\"\r\n                                      shape=\"round\"\r\n                                      color=\"danger\"\r\n                                      fill=\"clear\"\r\n                                      (click)=\"plRemoveBarcode(i, 'edit')\">\r\n                                      <ion-icon name=\"trash\"\r\n                                        slot=\"icon-only\"></ion-icon>\r\n                                    </ion-button>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <!-- <ng-template #noDataForBarcodes>\r\n                              <ion-text color=\"danger\" class=\"ion-text-center barcode-alert\">*Add some data to price list for\r\n                                uploading barcodes.</ion-text>\r\n                            </ng-template> -->\r\n                            </ion-col>\r\n                          </ng-container>\r\n                        </ng-container>\r\n                      </div>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                  <div *ngSwitchCase=\"'Variant Groups'\">\r\n                    <ion-text color=\"danger\"\r\n                      *ngIf=\"editproductData.isPriceList == false\">\r\n                      <p>This option is only available when variant is on</p>\r\n                    </ion-text>\r\n                    <div *ngIf=\"editproductData.isPriceList == true\">\r\n                      <div\r\n                        style=\"display: flex;align-items: center;margin-left: 12px;\">\r\n                        <div>Variant groups for product</div>&nbsp;&nbsp;\r\n                        <div class=\"toggle-btn\">\r\n                          <label class=\"switch\">\r\n                            <input type=\"checkbox\"\r\n                              (click)=\"activeVariantGroupsEdit()\"\r\n                              [checked]=\"editproductData.variantGroups.active\">\r\n                            <span class=\"slider round\"></span>\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                      <br>\r\n                      <div *ngIf='editproductData.variantGroups.active'>\r\n                        <div>\r\n                          <div>\r\n                            <div\r\n                              style=\"display: flex;align-items: center;margin: 12px;\">\r\n                              <input class=\"groupInput\"\r\n                                [(ngModel)]=\"groupName\"\r\n                                placeholder=\"Enter name of group\" />&nbsp;&nbsp;\r\n                              <ion-select class=\"groupSelect\"\r\n                                [(ngModel)]=\"groupOptions\"\r\n                                multiple=\"true\"\r\n                                cancelText=\"Cancel\"\r\n                                okText=\"Done\"\r\n                                placeholder=\"Select Group\"\r\n                                [interfaceOptions]=\"variantGrpSelectOptions\">\r\n                                <ion-select-option\r\n                                  *ngFor=\"let item of editproductData.priceList\"\r\n                                  value=\"{{item.weight}}\"\r\n                                  selected=\"true\">{{item.weight}}\r\n                                </ion-select-option>\r\n                              </ion-select>&nbsp;&nbsp;\r\n                              <div style=\"display: flex;align-items: center;\">\r\n                                <ion-button\r\n                                  (click)=\"enterVariantGroupsData('edit')\">\r\n                                  <p\r\n                                    *ngIf=\"(!editproductData.variantGroups.groups) || (editproductData.variantGroups.groups && editproductData.variantGroups.groups.length == 0)\">\r\n                                    Create Group</p>\r\n                                  <p\r\n                                    *ngIf=\"editproductData.variantGroups.groups && editproductData.variantGroups.groups.length > 0\">\r\n                                    Add Group</p>\r\n                                </ion-button>\r\n                              </div>\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"list-header variantGroups\"\r\n                              *ngIf=\"editproductData.variantGroups.groups && editproductData.variantGroups.groups.length > 0\">\r\n                              <ion-grid class=\"ion-no-padding\">\r\n                                <ion-row class=\"headings\">\r\n                                  <ion-col size=\"3\">\r\n                                    <p>Name</p>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\"\r\n                                    style=\"margin-right: 16px;\">\r\n                                    <p>Variants</p>\r\n                                  </ion-col>\r\n                                  <ion-col size=\"3\"\r\n                                    style=\"margin-right: 16px;\">\r\n                                    <p>Delete</p>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                              </ion-grid>\r\n                            </div>\r\n                            <div class=\"list-container\">\r\n                              <ion-item\r\n                                *ngFor=\"let item of editproductData.variantGroups.groups; let i = index\">\r\n                                <ion-grid\r\n                                  class=\"row-background ion-no-padding ion-align-items-center\">\r\n                                  <ion-row class=\"ion-align-items-center\">\r\n                                    <ion-col size=\"3\">\r\n                                      <p\r\n                                        class=\"ion-text-capitalize ion-text-center\">\r\n                                        {{item.name}}</p>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"3\">\r\n                                      <p\r\n                                        class=\"ion-text-capitalize ion-text-center\">\r\n                                        {{item.variants}}</p>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"3\"\r\n                                      style=\"text-align: center;\">\r\n                                      <i class=\"flaticon-null-19 remove-icon\"\r\n                                        (click)=\"deleteVariantGroup('edit',i)\"></i>\r\n                                    </ion-col>\r\n                                  </ion-row>\r\n                                </ion-grid>\r\n                              </ion-item>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ion-grid *ngSwitchCase=\"'Seo for Website'\">\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <h3>Website SEO</h3>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <div class=\"input-wrap\">\r\n                          <ion-label>Meta Title</ion-label>\r\n                          <ion-input class=\"form-input\"\r\n                            [(ngModel)]=\"metaData.pageTitle\"></ion-input>\r\n                        </div>\r\n                      </ion-col>\r\n                      <ion-col size=\"12\">\r\n                        <div class=\"input-wrap\">\r\n                          <ion-label>Meta Description</ion-label>\r\n                          <ion-input class=\"form-input\"\r\n                            [(ngModel)]=\"metaData.metaDescription\"></ion-input>\r\n                        </div>\r\n                      </ion-col>\r\n                      <ion-col size=\"12\">\r\n                        <div class=\"input-wrap\">\r\n                          <ion-label>Meta Keywords</ion-label>\r\n                          <ion-input class=\"form-input\"\r\n                            [(ngModel)]=\"metaData.metaKeywords\"></ion-input>\r\n                        </div>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n\r\n                  <ion-grid *ngSwitchCase=\"'Attributes'\">\r\n                    <ion-row>\r\n                      <ion-col size='12'>\r\n                        <h3>Product Attributes</h3>\r\n                      </ion-col>\r\n\r\n                      <ion-col size='12' *ngFor=\"let item of attributesData | keyvalue; trackBy: customTrackBy; let i = index\">\r\n                        <ng-container *ngIf=\"subValues[item.key]; else noSubValue\">\r\n                          <div class=\"input-wrap\">\r\n                            <ion-label>{{item.key}}</ion-label>\r\n                            <select class=\"select-wrap\" [(ngModel)]=\"attributesData[item.key]\">\r\n                              <option *ngFor=\"let subValue of subValues[item.key]\">{{subValue}}</option>\r\n                            </select>\r\n                          </div>\r\n                        </ng-container>\r\n                        <ng-template #noSubValue>\r\n                          <div class=\"input-wrap\">\r\n                            <ion-label>{{item.key}}</ion-label>\r\n                            <ion-input class=\"form-input\" [(ngModel)]=\"attributesData[item.key]\" type=\"text\"></ion-input>\r\n                          </div>\r\n                        </ng-template>\r\n                      </ion-col>\r\n\r\n                    </ion-row>\r\n                  </ion-grid>\r\n\r\n                  <ion-grid *ngSwitchCase=\"'Variant Chart'\">\r\n                    <ion-row>\r\n                      <ion-col style=\"display: flex;align-items: center;\">\r\n                        <div>Active</div>\r\n                        &nbsp;&nbsp;\r\n                        <div class=\"toggle-btn\">\r\n                          <label class=\"switch\">\r\n                            <input type=\"checkbox\" \r\n                            (click)=\"toggleAdditionalInfo('sizeChart', 'edit')\" \r\n                            [checked]=\"editproductData.additionalInfo.sizeChart.active\">\r\n                            <span class=\"slider round\"></span>\r\n                          </label>\r\n                        </div>\r\n                      </ion-col>\r\n                      <ng-container *ngIf=\"editproductData.additionalInfo?.sizeChart.active\">\r\n                        <!-- <ion-col size='12'>\r\n                          <div class=\"input-wrap\">\r\n                            <ion-label>Enter Name for variant chart</ion-label>\r\n                            <ion-input class=\"form-input\" [(ngModel)]=\"editproductData.additionalInfo.sizeChart.name\" type=\"text\"></ion-input>\r\n                          </div>\r\n                        </ion-col> -->\r\n                        <ion-col size=\"12\" class=\"flex\">\r\n                          <ion-label>Variant Chart image</ion-label>\r\n                          <div class=\"upload-btn-wrapper\">\r\n                            <button class=\"upload-btn btn-1 i-start\"> <i\r\n                                class=\"flaticon-null-16\"></i>upload</button>\r\n                            <input type=\"file\"\r\n                              name=\"myfile\"\r\n                              (change)=\"uploadChart($event.target.files,'sizeChart', 'edit')\" />\r\n                          </div>\r\n                          <div class=\"imgs-container\"\r\n                            *ngIf=\"editproductData.additionalInfo?.sizeChart.img.url !== ''\">\r\n                            <div class=\"img-wrap\">\r\n                              <img [src]=\"editproductData.additionalInfo.sizeChart.img.url\"\r\n                                (click)=\"imageZoom(editproductData.additionalInfo.sizeChart.img.url)\" />\r\n                              <div class=\"overlay\">\r\n                                <ion-button class=\"remove\"\r\n                                  shape=\"round\"\r\n                                  color=\"danger\"\r\n                                  fill=\"clear\"\r\n                                  (click)=\"removeAdditionalInfoImg('sizeChart','edit')\">\r\n                                  <ion-icon name=\"trash\"\r\n                                    slot=\"icon-only\"></ion-icon>\r\n                                </ion-button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </ion-col>\r\n                      </ng-container>\r\n\r\n                    </ion-row>\r\n                  </ion-grid>\r\n\r\n                  <ion-grid *ngSwitchCase=\"'Clone Product'\">\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-button color=\"primary\" fill=\"outline\" shape=\"round\" size=\"small\" (click)=\"cloneProduct()\">Clone Product</ion-button>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n\r\n                  <ion-grid *ngSwitchCase=\"'Custom Action'\">\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <div class=\"input-wrap\">\r\n                          <div style=\"display:flex\">\r\n                            <ion-label>Active</ion-label>\r\n                            <ion-toggle [(ngModel)]=\"editproductData.additionalInfo.link.active\"></ion-toggle>\r\n                          </div>\r\n                        </div>\r\n                      </ion-col>\r\n                      <ng-container *ngIf=\"editproductData.additionalInfo?.link?.active\">\r\n                        <!-- <ion-col size='12'>\r\n                          <div class=\"input-wrap\">\r\n                            <ion-label>Show Price</ion-label>\r\n                            <ion-toggle [(ngModel)]=\"editproductData.additionalInfo.showPrice\"></ion-toggle>\r\n                          </div>\r\n                        </ion-col> -->\r\n                        <ion-col size='12'>\r\n                          <div class=\"input-wrap\">\r\n                            <ion-label>Enter Name for Button</ion-label>\r\n                            <ion-input class=\"form-input\" [(ngModel)]=\"editproductData.additionalInfo.link.name\" type=\"text\"></ion-input>\r\n                          </div>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\">\r\n                          <div style=\"display: flex;\">\r\n                            Link:&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            <div>\r\n                              <span style=\"margin-left: 8px;\">\r\n                                <input type=\"radio\" id=\"wa\" value=\"form\" [(ngModel)]=\"editproductData.additionalInfo.link.type\">&nbsp;&nbsp;\r\n                                <label for='wa'>Form</label>\r\n                              </span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                              <span>\r\n                                <input type=\"radio\" id='wb' value=\"link\" [(ngModel)]=\"editproductData.additionalInfo.link.type\">&nbsp;&nbsp;\r\n                                <label for='wb'>External Link</label>\r\n                              </span>\r\n                            </div>\r\n                          </div>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\" *ngIf=\"editproductData.additionalInfo?.link?.type == 'form'\">\r\n                          <ion-select placeholder=\"Select Form Template\" class=\"border\" [(ngModel)]=\"editproductData.additionalInfo.link.value\">\r\n                            <ion-select-option *ngFor=\"let form of forms\" [value]=\"form.id\"> {{form.formTitle}} </ion-select-option>\r\n                            </ion-select>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\" *ngIf=\"editproductData.additionalInfo?.link?.type == 'link'\">\r\n                          <div class=\"input-wrap\">\r\n                            <ion-label>External Link</ion-label>\r\n                            <ion-input class=\"form-input\" [(ngModel)]=\"editproductData.additionalInfo.link.value\" type=\"text\"></ion-input>\r\n                          </div>\r\n                        </ion-col>\r\n                      </ng-container>\r\n                    </ion-row>\r\n                    <!-- <ion-row>\r\n                      <ion-col>\r\n                        <ion-text color=\"danger\">\r\n                          <p>Note: This feature is Coming Soon. </p>\r\n                        </ion-text>\r\n                      </ion-col>\r\n                    </ion-row> -->\r\n                  </ion-grid>\r\n\r\n                  <ion-grid *ngSwitchCase=\"'Stock Attributes'\">\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                        <h3>Stock Attributes</h3>\r\n                      </ion-col>\r\n                      <ion-col size=\"4\">\r\n                        <div class=\"input-wrap\">\r\n                          <ion-label>Expiry Date</ion-label>\r\n                          <div class=\"flexJustifySpace\">\r\n                          <ion-input type=\"date\" class=\"form-input\" min=\"{{currentDate | date: 'yyyy-MM-dd'}}\"\r\n                           value=\"{{expiryDate | date: 'yyyy-MM-dd'}}\"\r\n                           (ionChange)=\"getTimeStamp($event.target.value,'expiry')\"></ion-input>\r\n                          </div>\r\n                        </div>\r\n                      </ion-col>\r\n                      <ion-col size=\"4\">\r\n                        <div class=\"input-wrap\">\r\n                          <ion-label>Manufacturing Date</ion-label>\r\n                          <div class=\"flexJustifySpace\">\r\n                          <ion-input type=\"date\" class=\"form-input\" max=\"{{currentDate | date: 'yyyy-MM-dd'}}\"\r\n                           value=\"{{manufacturedDate | date: 'yyyy-MM-dd'}}\"\r\n                           (ionChange)=\"getTimeStamp($event.target.value,'manufactured')\"></ion-input>\r\n                          </div>\r\n                        </div>\r\n                      </ion-col>\r\n                      <ion-col size=\"4\">\r\n                        <div class=\"input-wrap\">\r\n                          <ion-label>Shelf Life</ion-label>\r\n                          <div class=\"flexJustifySpace\">\r\n                          <ion-input type=\"text\" class=\"form-input\" [(ngModel)]='editproductData.stockAttributes.shelfLife'></ion-input>\r\n                          </div>\r\n                        </div>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n\r\n                  <ion-grid *ngSwitchCase=\"'Bundle Products'\">\r\n                    <ion-col style=\"display: flex;align-items: center;\">\r\n                      <div>Active</div>\r\n                      &nbsp;&nbsp;\r\n                      <div class=\"toggle-btn\">\r\n                        <label class=\"switch\">\r\n                          <input type=\"checkbox\"\r\n                            (click)=\"toggleBundleProducts('edit')\"\r\n                            [checked]=\"editproductData.bundleProducts.active\">\r\n                          <span class=\"slider round\"></span>\r\n                        </label>\r\n                      </div>\r\n                    </ion-col>\r\n                    <ng-container *ngIf=\"editproductData.bundleProducts.active\">\r\n                      <ion-col>\r\n                        <div class=\"input-wrap\">\r\n                        <ion-label>Bundle Title</ion-label>\r\n                        <div style=\"display: flex;align-items: center;justify-content: space-between;\">\r\n                         <ion-input type=\"text\" class=\"form-input\" [(ngModel)]='editproductData.bundleProducts.title' style=\"width: 80%;\"></ion-input>\r\n                        </div>\r\n                      </div>\r\n                      </ion-col>\r\n                      <ion-col>\r\n                        <div class=\"input-wrap\">\r\n                        <ion-label>Max no. of products bundled by user</ion-label>\r\n                        <div style=\"display: flex;align-items: center;justify-content: space-between;\">\r\n                         <ion-input type=\"number\" class=\"form-input\" [(ngModel)]='editproductData.bundleProducts.maxProducts' style=\"width: 80%;\"></ion-input>\r\n                        </div>\r\n                      </div>\r\n                      </ion-col>\r\n                      <ion-col>\r\n                         <ion-button (click)=\"presentProductsModal('edit')\">Add Bundled Products</ion-button>\r\n                         <ion-text color=\"danger\">\r\n                           <p>Note: You cannot add variant products in bundle.</p>\r\n                         </ion-text>\r\n                      </ion-col>\r\n                        <ion-row *ngIf=\"editproductData.bundleProducts.products.length\">\r\n                          <ion-col>\r\n                            <div class=\"tableArea\">\r\n                             <table>\r\n                               <thead>\r\n                                 <tr class=\"header\">\r\n                                   <th>S.No</th>\r\n                                   <th>Product Name</th>\r\n                                   <th>Action</th>\r\n                                 </tr>\r\n                               </thead>\r\n                               <tbody>\r\n                                 <tr *ngFor=\"let prod of editproductData.bundleProducts.products; let i = index\">\r\n                                   <td>{{i+1}}</td>\r\n                                   <td>{{prod.name}}</td>\r\n                                   <td>\r\n                                    <ion-button fill=\"outline\" shape=\"round\" (click)=\"removeBundleProduct(i, 'edit')\">\r\n                                      Remove\r\n                                    </ion-button>\r\n                                   </td>\r\n                                   <!-- <td>\r\n                                    <i class=\"flaticon-null-21 cursor-p deleteIcon\" (click)=\"deleteForm(form.id, i)\"></i>\r\n                                   </td> -->\r\n                                 </tr>\r\n                               </tbody>\r\n                             </table>\r\n                            </div> \r\n                          </ion-col>\r\n                        </ion-row>\r\n                    </ng-container>\r\n                    \r\n                  </ion-grid>\r\n\r\n                  <!-- Edit Product Regions -->\r\n                  <ion-grid *ngSwitchCase=\"'Regions'\">\r\n                    <ion-col size=\"12\">\r\n                      <h3>Regions</h3>\r\n                    </ion-col>\r\n                    <ion-text *ngIf=\"!multiRegion\" color=\"danger\">\r\n                      <p>This option is only available when Multi Region is on</p>\r\n                    </ion-text>\r\n                    <div *ngIf=\"multiRegion\">\r\n                      <ion-col size=\"12\" style=\"display: flex;align-items: center;\">\r\n                        <ion-label>Active</ion-label>&nbsp;&nbsp;\r\n                        <div class=\"toggle-btn\">\r\n                          <label class=\"switch\">\r\n                            <input type=\"checkbox\" (click)=\"toggleCheckbox('allRegions')\" [checked]=\"allRegions?.active\">\r\n                            <span class=\"slider round\"></span>\r\n                          </label>\r\n                        </div>\r\n                      </ion-col>\r\n                      <br>\r\n                      <ng-container *ngFor=\"let region of allRegions.regions,index as i\">\r\n                        <div class=\"regionWrap\">\r\n                          <div class=\"flex\">\r\n                            <input type='checkbox' (click)=\"toggleRegion(i)\" [checked]='region.active' />&nbsp;&nbsp;\r\n                            <p><strong>{{region.name | uppercase}}</strong></p>\r\n                          </div>\r\n                          <br>\r\n                          <ng-container *ngIf=\"!editproductData.isPriceList\">\r\n                            <ion-row>\r\n                              <ion-col class=\"input-wrap\">\r\n                                <ion-label>Price</ion-label>\r\n                                <ion-input class=\"form-input\" [(ngModel)]=\"region.price\" type=\"number\"></ion-input>\r\n                              </ion-col>\r\n                              <ion-col class=\"input-wrap\">\r\n                                <ion-label>Discounted Price</ion-label>\r\n                                <ion-input class=\"form-input\" [(ngModel)]=\"region.discountedPrice\" type=\"number\">\r\n                                </ion-input>\r\n                              </ion-col>\r\n                              <!-- <ion-col class=\"input-wrap\">\r\n                                <ion-label>Quantity</ion-label>\r\n                                <ion-input class=\"form-input\" [(ngModel)]=\"region.qty\" type=\"number\"></ion-input>\r\n                              </ion-col> -->\r\n                            </ion-row>\r\n                          </ng-container>\r\n                          \r\n                          <!-- Regions Edit variants -->\r\n                          <ng-container *ngIf=\"editproductData.isPriceList\">\r\n                            <ng-container *ngFor=\"let regionVariant of region.variants\">\r\n                              <ion-row>\r\n                                <ion-col class=\"input-wrap\">\r\n                                  <ion-label>Variant</ion-label>\r\n                                  <ion-input class=\"form-input\" [(ngModel)]=\"regionVariant.weight\" readonly=\"true\" type=\"text\"></ion-input>\r\n                                </ion-col>\r\n                                <ion-col class=\"input-wrap\">\r\n                                  <ion-label>Price</ion-label>\r\n                                  <ion-input class=\"form-input\" [(ngModel)]=\"regionVariant.price\" type=\"number\"></ion-input>\r\n                                </ion-col>\r\n                                <ion-col class=\"input-wrap\">\r\n                                  <ion-label>Discounted Price</ion-label>\r\n                                  <ion-input class=\"form-input\" [(ngModel)]=\"regionVariant.discountedPrice\" type=\"number\">\r\n                                  </ion-input>\r\n                                </ion-col>\r\n                                <!-- <ion-col class=\"input-wrap\">\r\n                                  <ion-label>Quantity</ion-label>\r\n                                  <ion-input class=\"form-input\" [(ngModel)]=\"regionVariant.qty\" type=\"number\"></ion-input>\r\n                                </ion-col> -->\r\n                              </ion-row>\r\n                            </ng-container>\r\n                          </ng-container>\r\n                        </div>\r\n                      </ng-container>\r\n                    </div>\r\n                  </ion-grid>\r\n\r\n                  <ion-grid *ngSwitchCase=\"'Add on'\">\r\n                    <ion-col size=\"12\">\r\n                      <h3>Add Ons</h3>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\">\r\n                      <label>Select Addon Templates:</label>&nbsp;<br>\r\n                      <select class=\"selectInput\" (change)=\"changeTemplate($event.target.value)\" [(ngModel)]='product.templateId'>\r\n                        <option value=\"\" disabled selected hidden>Please choose</option>\r\n                        <option value=\"\">None</option>\r\n                        <option value=\"{{template.id}}\" *ngFor=\"let template of templatesArray\">\r\n                          {{template.name}}\r\n                        </option>\r\n                      </select>\r\n                    </ion-col>\r\n                  </ion-grid>\r\n\r\n                  <ion-grid *ngSwitchCase=\"'Slug'\">\r\n                    <ng-container *ngIf=\"isUniversal else noUniversal\">\r\n                      <ion-col>\r\n                        <div class=\"input-wrap\">\r\n                        <ion-label>Slug Name <ion-text color=\"danger\">(<b class=\"cursor-p\" \r\n                          (click)=\"sharedService.presentSlugAlert()\">CLICK HERE</b> for Slug Instructions)</ion-text>\r\n                        </ion-label>\r\n                        <div style=\"display: flex;align-items: center;justify-content: space-between;\">\r\n                         <ion-input type=\"text\" class=\"form-input\" [(ngModel)]='editproductData.slug.name' style=\"width: 80%;\"></ion-input>\r\n                        </div>\r\n                      </div>\r\n                      </ion-col>\r\n                    </ng-container>\r\n                    <ng-template #noUniversal>\r\n                      <p>Coming Soon!</p>\r\n                    </ng-template>\r\n                  </ion-grid>\r\n\r\n                  <ion-grid *ngSwitchCase=\"'video'\">\r\n                    <ion-col style=\"display: flex;align-items: center;\">\r\n                      <div>Active</div>\r\n                      &nbsp;&nbsp;\r\n                      <div class=\"toggle-btn\">\r\n                        <label class=\"switch\">\r\n                          <input type=\"checkbox\" (click)=\"toggleVideoFeature()\" [checked]=\"video.active\">\r\n                          <span class=\"slider round\"></span>\r\n                        </label>\r\n                      </div>\r\n                    </ion-col>\r\n                    <ng-container *ngIf=\"video.active\">\r\n                      <ion-row>\r\n                        <ion-col size=\"12\" class=\"flexCenter\">\r\n                          <ion-button (click)=\"addVideo()\">Add video</ion-button>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\">\r\n                          <div class=\"upload-btn-wrapper\" style=\"display: block;margin-top: 12px;\">\r\n                            <button class=\"upload-btn i-start\"> <i class=\"flaticon-null-16\"></i>upload video</button>\r\n                            <input type=\"file\" (change)=\"uploadDocument($event, 'video')\" accept=\"video/*\" />\r\n                          </div>\r\n                          <ng-container *ngIf=\"video.link\">\r\n                            <iframe [src]=\"video.link | safeItem: 'resourceUrl'\"></iframe>\r\n                          </ng-container>\r\n                        </ion-col>\r\n                    \r\n                        <ion-col size=\"12\">\r\n                          <div class=\"upload-btn-wrapper\" style=\"display: block;margin-top: 12px;\">\r\n                            <button class=\"upload-btn i-start\"> <i class=\"flaticon-null-16\"></i>upload Thumb</button>\r\n                            <input type=\"file\" (change)=\"uploadDocument($event, 'image')\" accept=\"image/*\" />\r\n                          </div>\r\n                          <ng-container *ngIf=\"video.thumbnail\">\r\n                            <img [src]=\"video.thumbnail\">\r\n                          </ng-container>\r\n                        </ion-col>\r\n                    \r\n                      </ion-row>\r\n                    </ng-container>\r\n                    <ng-template *ngIf=\"!video.active\">\r\n                      <p>Feature is off!</p>\r\n                    </ng-template>\r\n                  </ion-grid>\r\n\r\n                </ion-col>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div>\r\n      </ion-content>\r\n    </super-tab>\r\n\r\n  </super-tabs-container>\r\n  <!-- /edit product -->\r\n\r\n</super-tabs>\r\n\r\n\r\n\r\n<ion-footer *ngIf=\"!editproductId && showFooter\"\r\n  no-border\r\n  class=\"page-footer\">\r\n  <div class=\"main-container\">\r\n    <ion-button (click)=\"addProduct()\"\r\n      shape=\"round\"\r\n      class=\"btn-1 i-start\"\r\n      color=\"success\">\r\n      <i class=\"flaticon-null-20 margin-icon\"></i>\r\n      Save\r\n    </ion-button>\r\n  </div>\r\n</ion-footer>\r\n\r\n<ion-footer *ngIf=\"editproductData && !showEditLoader && showFooter\"\r\n  no-border\r\n  class=\"page-footer\">\r\n  <div class=\"main-container\">\r\n    <ion-button (click)=\"deleteAlertConfirm();\"\r\n      shape=\"round\"\r\n      class=\"btn-1 i-start\"\r\n      color=\"danger\">\r\n      <i class=\"flaticon-null-21\"></i>\r\n      Delete\r\n    </ion-button>\r\n    <ion-button (click)=\"editProduct()\"\r\n      shape=\"round\"\r\n      class=\"btn-1 i-start\"\r\n      color=\"success\">\r\n      <i class=\"flaticon-null-20 margin-icon\"></i>\r\n      Save\r\n    </ion-button>\r\n  </div>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/admin/admin-shop/new-product/new-product.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-shop/new-product/new-product.module.ts ***!
  \********************************************************************/
/*! exports provided: NewProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductPageModule", function() { return NewProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-product.page */ "./src/app/admin/admin-shop/new-product/new-product.page.ts");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/fesm2015/ionic-super-tabs-angular.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var src_app_directives_application_directives_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/directives/application-directives.module */ "./src/app/directives/application-directives.module.ts");
/* harmony import */ var _variants_templates_modal_templates_modal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../variants/templates-modal/templates-modal.page */ "./src/app/admin/variants/templates-modal/templates-modal.page.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/fesm2015/ng2-ckeditor.js");
/* harmony import */ var src_app_pipes_application_pipes_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pipes/application-pipes.module */ "./src/app/pipes/application-pipes.module.ts");














const routes = [
    {
        path: '',
        component: _new_product_page__WEBPACK_IMPORTED_MODULE_6__["NewProductPage"]
    }
];
let NewProductPageModule = class NewProductPageModule {
};
NewProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ng2_ckeditor__WEBPACK_IMPORTED_MODULE_12__["CKEditorModule"],
            src_app_directives_application_directives_module__WEBPACK_IMPORTED_MODULE_10__["ApplicationDirectivesModule"],
            src_app_pipes_application_pipes_module__WEBPACK_IMPORTED_MODULE_13__["ApplicationPipesModule"]
        ],
        declarations: [_new_product_page__WEBPACK_IMPORTED_MODULE_6__["NewProductPage"], _variants_templates_modal_templates_modal_page__WEBPACK_IMPORTED_MODULE_11__["TemplatesModalPage"]],
        entryComponents: [_variants_templates_modal_templates_modal_page__WEBPACK_IMPORTED_MODULE_11__["TemplatesModalPage"]]
    })
], NewProductPageModule);



/***/ }),

/***/ "./src/app/admin/admin-shop/new-product/new-product.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-shop/new-product/new-product.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.upload-btn {\n  color: #fff;\n  background-color: var(--ion-color-primary);\n  padding: 8px 20px;\n  border-radius: 42px;\n  font-size: 16px;\n  font-weight: 400;\n  cursor: pointer;\n  height: 42px;\n  margin-left: 16px;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  z-index: 99;\n}\n\n.product-color-name {\n  max-width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: capitalize;\n}\n\n.color-selected {\n  display: -webkit-box;\n  display: flex;\n}\n\n.color-code {\n  width: 40px;\n  height: 40px;\n  margin-left: 10px;\n  margin-right: 10px;\n  min-width: 40px;\n}\n\n.input-border {\n  border: 1px solid lightgray;\n  text-align: center;\n}\n\nion-select {\n  border: 1px solid lightgray;\n}\n\n.form-input {\n  border: 1px solid gray;\n  background: var(--ion-color-light);\n  margin-top: 12px;\n  border-radius: 8px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.product-search-wrap {\n  text-align: center;\n}\n\n.product-search-wrap ion-searchbar {\n  width: 300px;\n  max-width: 100%;\n  margin: auto;\n}\n\n/* width */\n\n::-webkit-scrollbar {\n  width: 5px;\n}\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n.filters-col {\n  border: 1px solid lightgray;\n  padding: 8px;\n}\n\n.list-header {\n  position: static;\n  margin: 36px auto;\n}\n\n.list-container {\n  margin: 0;\n}\n\nion-col.img {\n  width: calc(100% - 400px);\n  max-width: calc(100% - 400px);\n  text-align: center;\n}\n\nion-col.action {\n  width: 200px;\n  max-width: 200px;\n}\n\nion-col.reorder {\n  width: 200px;\n  max-width: 200px;\n  text-align: center;\n}\n\n.info-txt {\n  color: red;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.m-l-5-p {\n  text-align: center;\n}\n\n.widget-type {\n  color: #999;\n  margin-left: 12px;\n}\n\n.section {\n  display: block;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 10px;\n}\n\n.sectionBlock {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 1000px;\n}\n\n.crop {\n  overflow: hidden;\n  width: 200px;\n  text-overflow: ellipsis;\n}\n\n.padding-start-16 {\n  --padding-start: 16px!important ;\n}\n\n#scroll1 {\n  overflow: hidden;\n  height: 80vh;\n}\n\n#scroll1:hover {\n  overflow-y: auto;\n}\n\n#scroll2 {\n  overflow: hidden;\n  height: 75vh;\n}\n\n#scroll2:hover {\n  overflow-y: auto;\n}\n\n@media screen and (min-height: 1200px) {\n  #scroll1 {\n    height: 92vh;\n  }\n\n  #scroll2 {\n    height: 87vh;\n  }\n}\n\n.statusList {\n  text-align: center;\n}\n\n.statusList p {\n  font-size: medium;\n  border: 1px solid lightgray;\n  padding: 10px;\n  margin: 8px;\n  cursor: pointer;\n}\n\n.groupInput {\n  border: none;\n  border-bottom: 1px solid;\n  padding: 5px;\n  text-align: center;\n}\n\n.groupSelect {\n  width: 150px;\n}\n\n.variantImageSelect {\n  border: 1px solid;\n  text-align: center;\n  max-width: 100%;\n  margin-top: 12px;\n}\n\n.groupDisplay {\n  display: -webkit-box;\n  display: flex;\n  margin-left: 12px;\n}\n\n.variantGroups {\n  margin-top: 0px !important;\n  text-align: center;\n}\n\n.remove-icon {\n  cursor: pointer;\n  color: var(--ion-color-danger);\n  font-size: 16px;\n}\n\n.select-wrap {\n  padding: 5px;\n  margin-left: 5px;\n  background: var(--ion-color-light);\n  border-radius: 5px;\n}\n\n.tableArea {\n  margin-top: 1rem;\n  border-radius: 6px;\n  overflow: hidden;\n}\n\n.tableArea table {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.tableArea table td,\n.tableArea table th {\n  border: 1px solid #dddddd;\n  text-align: center;\n  padding: 8px;\n}\n\n.tableArea table tr:hover {\n  background-color: #efefef;\n}\n\n.tableArea .header {\n  background: lightgray;\n}\n\n.tableArea .deleteIcon {\n  font-size: 18px;\n}\n\n.flexJustifySpace {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.selectInput {\n  width: 30%;\n  padding: 8px;\n}\n\n.regionWrap {\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tc2hvcC9uZXctcHJvZHVjdC9DOlxcQldJLUFETUlOU1xcU2hlaW4tQWRtaW4tQ29kZS9zcmNcXGFwcFxcYWRtaW5cXGFkbWluLXNob3BcXG5ldy1wcm9kdWN0XFxuZXctcHJvZHVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLXNob3AvbmV3LXByb2R1Y3QvbmV3LXByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0UsMENBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNBRjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUNERjs7QURJQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0RGOztBRElBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsMkJBQUE7QUNERjs7QURJQTtFQUNFLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBRjs7QURHQTtFQUVFLGtCQUFBO0FDREY7O0FERUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNBSjs7QURJQSxVQUFBOztBQUNBO0VBQ0UsVUFBQTtBQ0RGOztBRElBLFVBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQ0RGOztBRElBLFdBQUE7O0FBQ0E7RUFDRSxnQkFBQTtBQ0RGOztBRElBLG9CQUFBOztBQUNBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQWdCLFNBQUE7QUNBaEI7O0FERUE7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEQUE7RUFBYSxXQUFBO0VBQVksaUJBQUE7QUNLekI7O0FESkE7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGFBQUE7QUNPSjs7QURMQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxhQUFBO0FDUUo7O0FETkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ1NKOztBRE5BO0VBQ0UsZ0NBQUE7QUNTRjs7QUROQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ1NGOztBRE5DO0VBQ0MsZ0JBQUE7QUNTRjs7QUROQztFQUNDLGdCQUFBO0VBQ0EsWUFBQTtBQ1NGOztBRE5DO0VBQ0MsZ0JBQUE7QUNTRjs7QUROQztFQUNDO0lBQ0UsWUFBQTtFQ1NGOztFRFBBO0lBQ0UsWUFBQTtFQ1VGO0FBQ0Y7O0FEUEM7RUFDQyxrQkFBQTtBQ1NGOztBRFJFO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ1VKOztBRE5BO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDU0Y7O0FETkE7RUFDRSxZQUFBO0FDU0Y7O0FETkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDU0Y7O0FETkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtBQ1NGOztBRE5BO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtBQ1NGOztBRE5BO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1NGOztBRE5BO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQ1NGOztBREpBO0VBQ0UsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0FDTUY7O0FESkU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNNSjs7QURKSTs7RUFFRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ01OOztBREpJO0VBQ0UseUJBQUE7QUNNTjs7QURIRTtFQUFRLHFCQUFBO0FDTVY7O0FETEU7RUFDRSxlQUFBO0FDT0o7O0FESkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ09GOztBREpBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNPRjs7QURKQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXNob3AvbmV3LXByb2R1Y3QvbmV3LXByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZC1idG4td3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udXBsb2FkLWJ0biB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQycHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcblxyXG59XHJcblxyXG4udXBsb2FkLWJ0bi13cmFwcGVyIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogOTk7XHJcbn1cclxuXHJcblxyXG4ucHJvZHVjdC1jb2xvci1uYW1lIHtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmNvbG9yLXNlbGVjdGVkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29sb3ItY29kZSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtaW4td2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ib3JkZXJ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG5pb24tc2VsZWN0e1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheVxyXG59XHJcblxyXG4uZm9ybS1pbnB1dHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMTJweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG59XHJcbi5mbGV4e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2R1Y3Qtc2VhcmNoLXdyYXBcclxue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBpb24tc2VhcmNoYmFye1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLyogd2lkdGggKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTsgXHJcbn1cclxuIFxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogIzg4ODsgXHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1OyBcclxufVxyXG5cclxuLmZpbHRlcnMtY29se1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBwYWRkaW5nOiA4cHhcclxufVxyXG5cclxuLmxpc3QtaGVhZGVye1xyXG4gIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgbWFyZ2luOjM2cHggYXV0bztcclxufVxyXG5cclxuLmxpc3QtY29udGFpbmVye21hcmdpbjogMDt9XHJcblxyXG5pb24tY29sLmltZ3tcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNDAwcHgpO1xyXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gNDAwcHgpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcbmlvbi1jb2wuYWN0aW9ue1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG59XHJcbmlvbi1jb2wucmVvcmRlcntcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLmluZm8tdHh0IHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcblxyXG4ubS1sLTUtcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi53aWRnZXQtdHlwZXtjb2xvcjogIzk5OTttYXJnaW4tbGVmdDogMTJweDt9XHJcbi5zZWN0aW9ue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHhcclxufVxyXG4uc2VjdGlvbkJsb2Nre1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAwcHhcclxufVxyXG4uY3JvcHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnBhZGRpbmctc3RhcnQtMTZ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4IWltcG9ydGFudFxyXG59XHJcblxyXG4jc2Nyb2xsMXtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogODB2aFxyXG4gfVxyXG5cclxuICNzY3JvbGwxOmhvdmVye1xyXG4gIG92ZXJmbG93LXk6IGF1dG9cclxuIH1cclxuXHJcbiAjc2Nyb2xsMntcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogNzV2aDtcclxuIH1cclxuXHJcbiAjc2Nyb2xsMjpob3ZlcntcclxuICBvdmVyZmxvdy15OiBhdXRvXHJcbiB9XHJcblxyXG4gQG1lZGlhIHNjcmVlbiBhbmQobWluLWhlaWdodDogMTIwMHB4KSB7XHJcbiAgI3Njcm9sbDF7XHJcbiAgICBoZWlnaHQ6IDkydmg7XHJcbiAgIH1cclxuICAjc2Nyb2xsMntcclxuICAgIGhlaWdodDogODd2aDtcclxuICAgfVxyXG4gfVxyXG5cclxuIC5zdGF0dXNMaXN0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwe1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZ3JvdXBJbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JvdXBTZWxlY3QgeyBcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi52YXJpYW50SW1hZ2VTZWxlY3QgeyBcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuXHJcbi5ncm91cERpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbn1cclxuXHJcbi52YXJpYW50R3JvdXBzIHtcclxuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZW1vdmUtaWNvbntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnNlbGVjdC13cmFwe1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxufVxyXG5cclxuXHJcbi50YWJsZUFyZWF7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuIC8vIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgdGQsXHJcbiAgICB0aCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG4gICAgdHI6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaGVhZGVye2JhY2tncm91bmQ6IGxpZ2h0Z3JheTt9XHJcbiAgLmRlbGV0ZUljb257XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxufVxyXG4uZmxleEp1c3RpZnlTcGFjZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc2VsZWN0SW5wdXQge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4ucmVnaW9uV3JhcCB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn0iLCIudXBsb2FkLWJ0bi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi51cGxvYWQtYnRuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDQycHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4udXBsb2FkLWJ0bi13cmFwcGVyIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5wcm9kdWN0LWNvbG9yLW5hbWUge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5jb2xvci1zZWxlY3RlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb2xvci1jb2RlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWluLXdpZHRoOiA0MHB4O1xufVxuXG4uaW5wdXQtYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5mb3JtLWlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2R1Y3Qtc2VhcmNoLXdyYXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZHVjdC1zZWFyY2gtd3JhcCBpb24tc2VhcmNoYmFyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLyogd2lkdGggKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1NTU7XG59XG5cbi5maWx0ZXJzLWNvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4ubGlzdC1oZWFkZXIge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBtYXJnaW46IDM2cHggYXV0bztcbn1cblxuLmxpc3QtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tY29sLmltZyB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MDBweCk7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gNDAwcHgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jb2wuYWN0aW9uIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuXG5pb24tY29sLnJlb3JkZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluZm8tdHh0IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm0tbC01LXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53aWRnZXQtdHlwZSB7XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZWN0aW9uQmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAwcHg7XG59XG5cbi5jcm9wIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDIwMHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnBhZGRpbmctc3RhcnQtMTYge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHghaW1wb3J0YW50IDtcbn1cblxuI3Njcm9sbDEge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDgwdmg7XG59XG5cbiNzY3JvbGwxOmhvdmVyIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuI3Njcm9sbDIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDc1dmg7XG59XG5cbiNzY3JvbGwyOmhvdmVyIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDEyMDBweCkge1xuICAjc2Nyb2xsMSB7XG4gICAgaGVpZ2h0OiA5MnZoO1xuICB9XG5cbiAgI3Njcm9sbDIge1xuICAgIGhlaWdodDogODd2aDtcbiAgfVxufVxuLnN0YXR1c0xpc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3RhdHVzTGlzdCBwIHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmdyb3VwSW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ncm91cFNlbGVjdCB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLnZhcmlhbnRJbWFnZVNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmdyb3VwRGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4udmFyaWFudEdyb3VwcyB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZW1vdmUtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5zZWxlY3Qtd3JhcCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udGFibGVBcmVhIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnRhYmxlQXJlYSB0YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRhYmxlQXJlYSB0YWJsZSB0ZCxcbi50YWJsZUFyZWEgdGFibGUgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi50YWJsZUFyZWEgdGFibGUgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xufVxuLnRhYmxlQXJlYSAuaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xufVxuLnRhYmxlQXJlYSAuZGVsZXRlSWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmZsZXhKdXN0aWZ5U3BhY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zZWxlY3RJbnB1dCB7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnJlZ2lvbldyYXAge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin-shop/new-product/new-product.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-shop/new-product/new-product.page.ts ***!
  \******************************************************************/
/*! exports provided: NewProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductPage", function() { return NewProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/image-modal/image-modal.page */ "./src/app/image-modal/image-modal.page.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/product/product.service */ "./src/app/services/product/product.service.ts");
/* harmony import */ var _variants_colors_modal_colors_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../variants/colors-modal/colors-modal.page */ "./src/app/admin/variants/colors-modal/colors-modal.page.ts");
/* harmony import */ var _variants_templates_modal_templates_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../variants/templates-modal/templates-modal.page */ "./src/app/admin/variants/templates-modal/templates-modal.page.ts");
/* harmony import */ var src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/config/config.service */ "./src/app/services/config/config.service.ts");
/* harmony import */ var src_app_services_label_label_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/label/label.service */ "./src/app/services/label/label.service.ts");
/* harmony import */ var src_app_admin_filter_settings_select_filter_select_filter_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/admin/filter-settings/select-filter/select-filter.page */ "./src/app/admin/filter-settings/select-filter/select-filter.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_vendor_vendor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/vendor/vendor.service */ "./src/app/services/vendor/vendor.service.ts");
/* harmony import */ var src_app_admin_admin_shop_new_product_product_section_product_section_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/admin/admin-shop/new-product/product-section/product-section.page */ "./src/app/admin/admin-shop/new-product/product-section/product-section.page.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _users_modal_users_modal_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../users-modal/users-modal.page */ "./src/app/admin/users-modal/users-modal.page.ts");
/* harmony import */ var src_app_components_image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/components/image-editor/image-editor.component */ "./src/app/components/image-editor/image-editor.component.ts");
/* harmony import */ var src_app_services_attributes_attributes_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/services/attributes/attributes.service */ "./src/app/services/attributes/attributes.service.ts");
/* harmony import */ var src_app_services_widgets_widgets_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/services/widgets/widgets.service */ "./src/app/services/widgets/widgets.service.ts");
/* harmony import */ var _products_modal_products_modal_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../products-modal/products-modal.page */ "./src/app/admin/products-modal/products-modal.page.ts");
/* harmony import */ var src_app_services_multi_region_multi_region_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/services/multi-region/multi-region.service */ "./src/app/services/multi-region/multi-region.service.ts");
/* harmony import */ var src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/services/shared/shared.service */ "./src/app/services/shared/shared.service.ts");
/* harmony import */ var src_app_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/services/categories/categories.service */ "./src/app/services/categories/categories.service.ts");



























let NewProductPage = class NewProductPage {
    constructor(route, events, alertController, camera, actionSheetController, imagePicker, router, loadingController, platform, modalController, storage, productService, configService, angularFirestore, labelService, _location, vendorService, attributeService, widgetService, multiRegionService, sharedService, categoryService) {
        this.route = route;
        this.events = events;
        this.alertController = alertController;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.imagePicker = imagePicker;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
        this.modalController = modalController;
        this.storage = storage;
        this.productService = productService;
        this.configService = configService;
        this.angularFirestore = angularFirestore;
        this.labelService = labelService;
        this._location = _location;
        this.vendorService = vendorService;
        this.attributeService = attributeService;
        this.widgetService = widgetService;
        this.multiRegionService = multiRegionService;
        this.sharedService = sharedService;
        this.categoryService = categoryService;
        this.product = {
            prodName: null,
            nameToSearch: null,
            prodDesc: null,
            prodShortDesc: null,
            prodPrice: null,
            status: true,
            createdAt: null,
            updatedAt: null,
            sortedAt: null,
            productType: '',
            categories: null,
            brands: null,
            images: [],
            isPriceList: false,
            priceList: [],
            gst: null,
            discountedPrice: null,
            searchKeywords: [],
            productCode: '',
            productQty: '',
            stopWhenNoQty: false,
            shippingWeight: null,
            variantType: 'other',
            color: {},
            minQty: null,
            maxQty: null,
            hsnCode: '',
            purchasePrice: null,
            discount: 0,
            subscription: {
                isAllowed: false,
                dailyDiscount: null,
                weeklyDiscount: null,
                monthlyDiscount: null
            },
            retailDiscount: 0,
            retailDiscountType: 'percentage',
            deal: {
                isAllowed: false,
                discount: 0,
                start: {
                    date: null,
                    time: null
                },
                end: {
                    date: null,
                    time: null
                },
                specificUsers: {
                    active: false,
                    users: []
                }
            },
            vendorId: '',
            filters: {},
            metaData: {},
            barcodeNo: null,
            extraCharges: {
                active: false,
                label: '',
                charge: 0,
                chargeAllQty: false
            },
            gstExclusive: false,
            isCod: true,
            priceSlabs: {
                active: false,
                singleSlabs: [],
                variantSlabs: {}
            },
            appointment: {
                schedules: {
                    single: {
                        schedules: [],
                        maxDays: 7
                    },
                    variant: []
                }
            },
            variantGroups: {
                active: false,
                groups: []
            },
            attributes: {},
            additionalInfo: {
                link: {
                    active: false,
                    name: '',
                    type: 'link',
                    value: ''
                },
                showPrice: true,
                sizeChart: {
                    active: false,
                    name: '',
                    img: { url: '' }
                },
                countryOfOrigin: '',
            },
            stockAttributes: {
                expiryDate: '',
                manufacturedDate: '',
                shelfLife: '',
            },
            bundleProducts: {
                active: false,
                title: '',
                maxProducts: 0,
                products: []
            },
            allRegions: {
                active: false,
                regions: []
            },
            templateId: '',
            showSubheading: false,
            instaCoverImage: '',
            instaReelUrl: ''
        };
        this.imageURLs = [];
        this.listofbase64Image = [];
        this.coverValue = false;
        this.editCoverValue = false;
        this.selectedCategories = [];
        this.selectedBrands = [];
        this.firstIteration = false;
        this.searchCategory = '';
        this.searchBrand = '';
        this.showNoCategories = false;
        this.showCategoriesLoader = true;
        this.editproductId = '';
        this.routeFromCategories = false;
        this.keyword = '';
        this.barcode = '';
        this.editProductBarcode = '';
        this.subcategories = [];
        this.selectedSubCategoriesArray = [];
        this.alreadySelectedSubcats = [];
        this.listOfSubcategories = {};
        this.variantsAttributes = [];
        this.variantTypeLoader = true;
        this.isOptionProduct = false;
        this.routeFromOptions = false;
        this.showEditLoader = true;
        this.listOfSubcategoriesInView = {};
        this.tapCount = 0;
        this.showNoBrands = false;
        this.brands = [];
        this.metaData = {
            pageTitle: "",
            metaDescription: "",
            metaKeywords: ""
        };
        this.limitedTimeDeal = false;
        this.minDate = new Date().toISOString();
        this.multiRegion = false;
        this.multiRegionData = [];
        this.regions = [];
        this.multiVendor = false;
        this.vendors = [];
        this.NEW_PRODUCT_LABELS = {};
        this.SHARED_LABELS = {};
        this.subscriptionFeature = false;
        this.priceForRetail = false;
        this.needToUpdateImages = false;
        this.isFilterActive = false;
        this.filters = null;
        this.editProductFiltersKeys = [];
        this.userRole = "";
        this.vendorData = [];
        this.vendorName = 'Select Vendor';
        this.productSections = [];
        // specific users list
        this.moreUsers = true;
        this.RFQFeature = false;
        this.productTypeArr = [];
        this.sideMenu = [];
        // selectedId = '0'
        this.selectedId = 'Barcode / Qr Code';
        this.showFooter = true;
        this.fromAppointment = false;
        this.groupName = '';
        this.groupOptions = '';
        this.variantImageOptions = [];
        this.variantGrpSelectOptions = {
            header: 'Select Variants',
        };
        this.currentImage = '';
        this.currentVariants = {};
        this.attributesKey = [];
        this.attributesData = {};
        this.currentDate = new Date();
        this.manufacturedDate = '';
        this.expiryDate = '';
        this.isUniversal = false;
        this.subOfSubCategories = {};
        this.subOfSubCategoryToggle = {};
        this.allRegions = {
            active: false,
            regions: []
        };
        this.customWidthVal = 4;
        this.customHeightVal = 3;
        this.video = {
            active: true,
            link: '',
            thumbnail: ''
        };
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.editproductId = this.router.getCurrentNavigation().extras.state.productId;
                this.routeFromCategories = this.router.getCurrentNavigation().extras.state.routeFromCategories;
                this.routeFromOptions = this.router.getCurrentNavigation().extras.state.routeFromOptions;
                this.isOptionProduct = this.router.getCurrentNavigation().extras.state.isOptionProduct;
                if (this.isOptionProduct) {
                    this.optionId = this.router.getCurrentNavigation().extras.state.optionId;
                }
                if (this.router.getCurrentNavigation().extras.state.routeFromAppointment) {
                    this.fromAppointment = this.router.getCurrentNavigation().extras.state.routeFromAppointment;
                }
                let type = this.router.getCurrentNavigation().extras.state.type;
                if (type) {
                    if (type == 'variant') {
                        this.priceToggle();
                    }
                    if (type == 'quotation') {
                        this.product.productType = 'quotation';
                    }
                }
            }
        });
    }
    ngOnInit() {
        this.sectionLimit = this.configService.environment.productSectionsLimit;
        this.RFQFeature = this.configService.environment.RFQFeature;
        let appointmentFeature = this.configService.environment.appointmentFeature;
        this.currencyCode = this.configService.environment.currencyCode;
        this.isUniversal = this.sharedService.isUniversal();
        this.productTypeArr.push('single', 'variant');
        if (this.RFQFeature) {
            this.productTypeArr.push('quotation');
        }
        if (appointmentFeature) {
            this.productTypeArr.push('appointment');
        }
        this.SHARED_LABELS = this.labelService.labels['SHARED'];
        this.ckeConfig = {
            allowedContent: true,
            height: 200
        };
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.initializeSubscriptions();
            this.userRole = yield this.storage.get('userRole');
            if (this.userRole == 'vendor') {
                this.roleVendorId = yield this.storage.get('uid');
                this.roleVendorData = yield this.vendorService.getVendorData(this.roleVendorId, 'details');
                if (this.roleVendorData && this.roleVendorData.approveAllProducts) {
                    this.product['approved'] = true;
                    this.product.status = true;
                }
                else {
                    this.product['approved'] = false;
                    this.product.status = false;
                }
                //this.events.publish('vendor:getVendorData', this.roleVendorId);
            }
            this.imagesLimit = this.configService.environment.productImageLimit;
            this.events.publish('product:getAllCategories');
            this.events.publish('brands:getAllBrandsForAdmin');
            this.events.publish('variants:getVariantsTypeData');
            this.devWidth = this.platform.width();
            this.multiRegion = this.configService.environment.multiRegion;
            if (this.multiRegion) {
                this.events.publish('multi-region:getActiveStatus');
                this.events.publish('multi-region:getAllActiveRegions');
                this.multiRegionData = yield this.multiRegionService.getAllActiveRegions('service');
                console.log('multiRegionData:', this.multiRegionData);
                // Creating and Updating Region
                if (!this.editproductId) {
                    if (this.allRegions.regions.length == 0) {
                        this.createDefaultRegion();
                    }
                    else {
                        this.updateRegion();
                    }
                }
            }
            if (this.editproductId && !this.isOptionProduct) {
                this.events.publish('product:getProductWithId', this.editproductId);
                this.events.publish('product:getAllSubCategories');
                this.getSections();
            }
            if (this.editproductId && this.isOptionProduct) {
                //console.log('opt prd...');
                this.events.publish('product-options:getOptionData', this.editproductId, this.optionId);
                this.events.publish('product:getAllSubCategories');
            }
            this.taxType = this.configService.environment.taxType;
            this.subscriptionFeature = this.configService.environment.subscriptionFeature;
            this.priceForRetail = this.configService.environment.priceForRetail;
            this.limitedTimeDeal = this.configService.environment.limitedTimeDeal;
            this.multiVendor = this.configService.environment.multiVendor;
            this.selectRegionPh = this.SHARED_LABELS['select_region'];
            this.selectVendorPh = this.SHARED_LABELS['select_vendor'];
            this.selectFiltersPh = this.SHARED_LABELS['select_filters'];
            if (this.multiVendor) {
                this.vendors = yield this.vendorService.getAllVendors();
                if (this.vendors.length) {
                    this.vendors = this.vendors;
                }
                else {
                    this.multiVendor = false;
                }
                //this.events.publish('vendor:getAllVendors');
            }
            this.events.publish('filters:getActiveStatus');
            // this.sideMenu.push(
            //   'Add on',
            //   'Cash on Delivery',
            //   'Price Slabs',
            //   'Extra Charges',
            //   'Colors',
            //   'Vendor',
            //   'Filters',
            //   'Subscription',
            //   'Wholesale Price',
            //   'Limited Time Deal',
            //   'Specific User Discount',
            //   'Barcode / Qr Code',
            //   'Variant Groups',
            //   'Seo for Website',
            //   'Attributes',
            //   'Variant Chart',
            //   'Clone Product',
            //   'Custom Action',
            //   'Stock Attributes',
            //   'Bundle Products',
            //   'Regions',
            //   'Slug'
            // );
            this.sideMenu.push('Barcode / Qr Code', 'Seo for Website', 'Slug', 'video', 'Filters', 'Variant Chart');
            let res = yield this.attributeService.getProductAttributes();
            //console.log('res:', res);
            if (res) {
                this.attributesKey = res.attributes;
                this.subValues = res.subValues;
                for (const attribute of this.attributesKey) {
                    let value = "";
                    if (this.editproductData && "attributes" in this.editproductData) {
                        value = this.editproductData.attributes[attribute] || "";
                    }
                    this.attributesData[attribute] = value;
                }
                // for(let i = 0; i<this.attributesKey.length; i++){
                //   let value = "";
                //   if(this.editproductData && "attributes" in this.editproductData){
                //     value = this.editproductData.attributes[this.attributesKey[i]] || "";
                //   }
                //   this.attributesData[this.attributesKey[i]] = value;
                // }
                //console.log('attributes:', this.attributesData);
            }
            const forms = yield this.widgetService.getWidgetsList('form', 'service');
            if (forms && forms.length) {
                this.forms = forms;
            }
        });
    }
    createDefaultRegion() {
        console.log("Default Region Created");
        for (let region of this.multiRegionData) {
            this.allRegions.regions.push(this.returnRegionObj(region));
        }
        console.log("allRegions", this.allRegions);
    }
    returnRegionObj(region) {
        // * if variant is true
        const data = this.editproductId ? this.editproductData : this.product;
        // console.log('region', region);
        // console.log('data.priceList', data.priceList);
        if (data.isPriceList) {
            const variants = [];
            if (data.priceList && data.priceList.length) {
                data.priceList.forEach((priceList) => {
                    let variantIndex = -1;
                    if (region && region.variants) {
                        variantIndex = region.variants.findIndex((variant) => variant.weight === priceList.weight);
                    }
                    variants.push({
                        weight: priceList.weight || null,
                        price: variantIndex !== -1 ? region.variants[variantIndex].price : priceList.price,
                        discountedPrice: variantIndex !== -1 ? region.variants[variantIndex].discountedPrice : priceList.discountedPrice,
                    });
                });
            }
            return {
                name: region.name,
                id: region.id,
                active: 'active' in region ? region.active : false,
                variants
            };
        }
        // * if variant is false
        else {
            return {
                name: region.name,
                id: region.id,
                active: 'active' in region ? region.active : false,
                price: region.price || null,
                discountedPrice: region.discountedPrice || null,
            };
        }
    }
    updateRegion() {
        // console.log('this.allRegions', this.allRegions);
        if (this.allRegions) {
            for (let i = 0; i < this.allRegions.regions.length; i++) {
                this.allRegions.regions[i] = this.returnRegionObj(this.allRegions.regions[i]);
            }
        }
        // console.log('this.allRegions.regions', this.allRegions.regions);
        // * Check if new region added
        let newRegions = this.multiRegionData.filter(newRegion => !this.allRegions.regions.find(region => newRegion.id == region.id));
        // * Check if any region deleted
        let removeRegions = this.allRegions.regions.filter(oldRegion => !this.multiRegionData.find(region2 => oldRegion.id == region2.id));
        // * Add new region if any update
        if (newRegions.length > 0) {
            // console.log('new region:', newRegions);
            for (let newRegion of newRegions) {
                this.allRegions.regions.push(this.returnRegionObj(newRegion));
            }
        }
        // * Delete region if any removed
        if (removeRegions.length > 0) {
            // console.log('update region:', removeRegions);
            for (let region of removeRegions) {
                let index = this.allRegions.regions.findIndex(oldRegion => oldRegion.id == region.id);
                console.log('name:', index);
                this.allRegions.regions.splice(index, 1);
            }
        }
    }
    toggleRegion(index) {
        this.allRegions.regions[index].active = !this.allRegions.regions[index].active;
    }
    getTimeStamp(value, type) {
        let timeStamp = '';
        // console.log('valueTime:',typeof value, value);
        if (value !== '') {
            timeStamp = new Date(value);
        }
        if (type == 'expiry') {
            this.expiryDate = timeStamp;
            console.log('ex:', this.expiryDate);
        }
        else {
            this.manufacturedDate = timeStamp;
            console.log('mx:', this.manufacturedDate);
        }
    }
    customTrackBy(index, obj) {
        return index;
    }
    ionViewWillLeave() {
        this.removeSubscriptions();
    }
    setVariantImages() {
        console.log('currentVariants before:', this.currentVariants);
        if (this.editproductData.isPriceList) {
            for (const variant of this.editproductData.priceList) {
                if (variant.hasOwnProperty('images') && variant.images.length > 0) {
                    for (const image of variant.images) {
                        if (!this.currentVariants[this.editproductData.images.findIndex(e => e.mob == image.mob)]) {
                            this.currentVariants[this.editproductData.images.findIndex(e => e.mob == image.mob)] = [];
                        }
                        else {
                            this.currentVariants[this.editproductData.images.findIndex(e => e.mob == image.mob)].push(variant.weight);
                        }
                    }
                    console.log('currentVariants:', this.currentVariants);
                }
                // else {
                //   this.currentVariants = []
                // }
            }
        }
    }
    initializeSubscriptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.events.subscribe('vendor:getVendorDataSuccess', (vendorData)=>{
            //   this.roleVendorData = vendorData;
            //   if(this.userRole == 'vendor'){
            //     if (this.roleVendorData && this.roleVendorData.approveAllProducts) {
            //       this.product['approved'] = true;
            //       this.product.status = true;
            //     } else {
            //       this.product['approved'] = false;
            //       this.product.status = false;
            //     }
            //   }
            // });
            this.events.subscribe('product:publishgetProductWithId', (data) => {
                data = this.getUpdatedFields(data);
                this.editproductData = data;
                if (this.editproductData.productType == "") {
                    if (this.editproductData.isPriceList == true) {
                        this.editproductData.productType = 'variant';
                        // console.log('prodType variant');      
                    }
                    else {
                        this.editproductData.productType = 'single';
                        // console.log('prodType single');      
                    }
                }
                if (this.editproductData.variantType == 'variant') {
                    this.editproductData.variantType = 'other';
                }
                if (!this.editproductData.deal.specificUsers) {
                    this.editproductData.deal.specificUsers = this.product.deal.specificUsers;
                }
                if (!(this.editproductData.additionalInfo && this.editproductData.additionalInfo.sizeChart)) {
                    this.editproductData.additionalInfo = this.product.additionalInfo;
                }
                if (!(this.editproductData.additionalInfo && this.editproductData.additionalInfo.link)) {
                    this.editproductData.additionalInfo.link = this.product.additionalInfo.link;
                }
                this.barcode = this.editproductData.barcode ? this.editproductData.barcode : '';
                this.editproductData.showSubheading = 'showSubheading' in this.editproductData ? this.editproductData.showSubheading : false;
                this.showEditLoader = false;
                if (this.fromAppointment) {
                    // this.editproductData['productType'] = '';
                    if (this.editproductData.productType == 'appointment') {
                        if (this.editproductData.isPriceList == true) {
                            this.editproductData.productType = 'variant';
                        }
                        else {
                            this.editproductData.productType = 'single';
                        }
                    }
                }
                if (this.editproductData.stockAttributes) {
                    this.expiryDate = this.editproductData.stockAttributes.expiryDate ? this.editproductData.stockAttributes.expiryDate.toDate() : '';
                    this.manufacturedDate = this.editproductData.stockAttributes.manufacturedDate ? this.editproductData.stockAttributes.manufacturedDate.toDate() : '';
                    this.editproductData.stockAttributes.shelfLife = this.editproductData.stockAttributes.shelfLife ? this.editproductData.stockAttributes.shelfLife : '';
                    console.log("get:", this.expiryDate, this.manufacturedDate);
                }
                else {
                    this.editproductData.stockAttributes = this.editproductData.stockAttributes ? this.editproductData.stockAttributes : this.product.stockAttributes;
                }
                this.editproductData.bundleProducts = 'bundleProducts' in this.editproductData ? this.editproductData.bundleProducts : this.product.bundleProducts;
                // console.log('get',this.editproductData);
                this.allRegions = 'allRegions' in this.editproductData ? this.editproductData.allRegions : this.allRegions;
                this.product.templateId = this.editproductData.templateId || '';
                this.video = 'video' in this.editproductData ? this.editproductData.video : this.video;
                if (this.allRegions.regions.length == 0) {
                    this.createDefaultRegion();
                }
                this.updateRegion();
                this.setVariantImages();
                console.log('this.currentVariants outside loop', this.currentVariants);
                this.events.publish('vendor:getVendorName', this.editproductData.vendorId);
                console.log("editProduct:", this.editproductData);
            });
            this.events.subscribe('product:addSuccess', (heading, desc) => {
                this.events.publish('product:getProductsForAdminProducts');
                this.loader.dismiss();
                this.presentAlert(heading, desc, true);
                this.product.prodName = null;
                this.product.prodDesc = null;
                this.product.prodPrice = null;
                this.listofbase64Image = [];
                this.selectedCategories = [];
                this.selectedBrands = [];
            });
            this.events.subscribe('product:addFailure', (heading, desc) => {
                if (this.loader) {
                    this.loader.dismiss();
                }
                this.presentAlert(heading, desc);
            });
            this.events.subscribe('product:editSuccess', (heading, desc) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (this.loader) {
                    this.loader.dismiss();
                }
                yield this.presentAlert(heading, desc, true);
            }));
            this.events.subscribe('product:editFailure', (heading, desc) => {
                if (this.loader) {
                    this.loader.dismiss();
                }
                this.presentAlert(heading, desc);
            });
            this.events.subscribe('product-options:editSuccess', (heading, desc) => {
                if (this.loader) {
                    this.loader.dismiss();
                }
                this.presentAlert(heading, desc, true);
            });
            this.events.subscribe('product-options:editFailure', (heading, desc) => {
                if (this.loader) {
                    this.loader.dismiss();
                }
                this.presentAlert(heading, desc);
            });
            this.events.subscribe('product:deleteSuccess', (heading, msg) => {
                if (this.loader) {
                    this.loader.dismiss();
                }
                this._location.back();
            });
            this.events.subscribe('product:deleteFailure', (heading, msg) => {
                if (this.loader) {
                    this.loader.dismiss();
                }
                this.presentAlert(heading, msg);
            });
            this.events.subscribe('product:publishAllCategoriesForAdmin', (categories) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                // console.log('categories:', categories);
                if (this.loader) {
                    this.loader.dismiss();
                }
                if (this.userRole == 'vendor' && this.roleVendorId) {
                    let allCategories = categories;
                    // console.log('this.roleVendorData.categories:', this.roleVendorData.categories);
                    this.categories = allCategories.filter((category) => this.roleVendorData.categories.includes(category.id));
                    // console.log('this.categories', this.categories);
                }
                else {
                    this.categories = categories;
                }
                this.showCategoriesLoader = false;
                this.showNoCategories = false;
            }));
            this.events.subscribe('product:noCategoryAvailable', () => {
                if (this.loader) {
                    this.loader.dismiss();
                }
                this.showNoCategories = true;
                this.showCategoriesLoader = false;
            });
            this.events.subscribe('brands:publishAllBrandsForAdmin', (brands) => {
                if (this.loader) {
                    this.loader.dismiss();
                }
                if (this.userRole == 'vendor' && this.roleVendorId) {
                    let allBrands = brands;
                    console.log('brands', brands);
                    console.log('this.roleVendorData:', this.roleVendorData);
                    this.brands = allBrands.filter((brand) => this.roleVendorData.brands.includes(brand.id));
                }
                else {
                    this.brands = brands;
                }
                this.showNoBrands = false;
                //console.log('brands', brands);
            });
            this.events.subscribe('brands:noBrandAvailableForAdmin', () => {
                if (this.loader) {
                    this.loader.dismiss();
                }
                this.showNoBrands = true;
            });
            this.events.subscribe('variants:publishVariantsTypeData', (attributes) => {
                if (this.loader) {
                    this.loader.dismiss();
                }
                this.variantsAttributes = attributes;
                this.variantTypeLoader = false;
            });
            this.events.subscribe('product-options:publishOptionData', (option, productOptions) => {
                if (this.loader) {
                    this.loader.dismiss();
                }
                option = this.getUpdatedFields(option);
                this.editproductData = option;
                if (!this.editproductData.deal.specificUsers) {
                    this.editproductData.deal.specificUsers = this.product.deal.specificUsers;
                }
                this.barcode = this.editproductData.barcode ? this.editproductData.barcode : '';
                this.showEditLoader = false;
                if (this.fromAppointment) {
                    // this.editproductData['productType'] = '';
                    if (this.editproductData.productType == 'appointment') {
                        if (this.editproductData.isPriceList == true) {
                            this.editproductData.productType = 'variant';
                        }
                        else {
                            this.editproductData.productType = 'single';
                        }
                    }
                }
                if (this.editproductData.stockAttributes) {
                    this.expiryDate = this.editproductData.stockAttributes.expiryDate ? this.editproductData.stockAttributes.expiryDate.toDate() : '';
                    this.manufacturedDate = this.editproductData.stockAttributes.manufacturedDate ? this.editproductData.stockAttributes.manufacturedDate.toDate() : '';
                    this.editproductData.stockAttributes.shelfLife = this.editproductData.stockAttributes.shelfLife ? this.editproductData.stockAttributes.shelfLife : '';
                    console.log("get:", this.expiryDate, this.manufacturedDate);
                }
                else {
                    this.editproductData.stockAttributes = this.editproductData.stockAttributes ? this.editproductData.stockAttributes : this.product.stockAttributes;
                }
                this.events.publish('vendor:getVendorName', this.editproductData.vendorId);
                console.log("editProduct option:", this.editproductData);
            });
            this.events.subscribe('product-options:deleteProductOptionSuccess', () => {
                if (this.loader) {
                    this.loader.dismiss();
                }
                this.presentAlert('', 'Option Deleted Successfully!', true);
            });
            this.events.subscribe('vendor:publishActiveStatus', (data) => {
                if (this.loader) {
                    this.loader.dismiss();
                }
                if (data) {
                    this.multiVendor = data.active;
                    if (this.multiVendor) {
                        this.events.publish('vendor:getAllActiveVendors');
                    }
                }
            });
            // this.events.subscribe('vendor:publishAllVendors', (vendors) => {
            //   if (this.loader){
            //     this.loader.dismiss();
            //   }
            //   if(vendors.length) {
            //     this.vendors = vendors;
            //   } else {
            //     this.multiVendor = false;
            //   }
            // });
            this.events.subscribe('filters:publishActiveStatus', (data) => {
                if (this.loader) {
                    this.loader.dismiss();
                }
                if (data) {
                    this.isFilterActive = data.active;
                }
            });
            this.events.subscribe('vendor:getVendorNameSuccess', (data) => {
                if (this.loader) {
                    this.loader.dismiss();
                }
                if (data) {
                    this.vendorData = data;
                }
                this.vendorName = this.vendorData['name'];
            });
            // console.log('editproductData:',this.editproductData);
            let res = yield this.productService.getTemplates();
            if (res) {
                this.templatesArray = res;
                console.log(this.templatesArray);
            }
        });
    }
    // showDisable(){
    //   console.log('userRole:', this.userRole);
    //   if (this.userRole == 'vendor') {
    //     console.log('this.roleVendorData:'), this.roleVendorData;
    //     if (this.roleVendorData && this.roleVendorData.approveAllProducts) {
    //       console.log('inside');
    //       return false;
    //     } else{ 
    //       return true;
    //     }
    //   } else{ 
    //     return false;
    //   } 
    // }
    changeTemplate(value) {
        console.log(value);
        this.product.templateId = value;
    }
    editShowDisable() {
        if (this.userRole == 'vendor') {
            if (this.editproductData.approved) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    }
    addProductType(e, type) {
        if (e.target.value == 'appointment') {
            if (!this.editproductData['appointment']) {
                this.editproductData['appointment'] = this.product.appointment;
            }
            const navigationExtras = {
                state: {
                    productId: this.editproductId,
                    productData: this.editproductData
                }
            };
            this.router.navigate(['appointment'], navigationExtras);
        }
        if (e.target.value === 'variant') {
            this[type === 'edit' ? 'editproductData' : 'product'].isPriceList = true;
        }
        else if (e.target.value === 'single') {
            this[type === 'edit' ? 'editproductData' : 'product'].isPriceList = false;
        }
        else {
            this[type === 'edit' ? 'editproductData' : 'product'].productType = e.target.value;
        }
    }
    openUsersModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alreadyAdded;
            if (this.editproductData) {
                alreadyAdded = this.editproductData.deal.specificUsers.users ? this.editproductData.deal.specificUsers.users : [];
            }
            else {
                alreadyAdded = this.product.deal.specificUsers.users ? this.product.deal.specificUsers.users : [];
            }
            const modal = yield this.modalController.create({
                component: _users_modal_users_modal_page__WEBPACK_IMPORTED_MODULE_19__["UsersModalPage"],
                componentProps: {
                    alreadyAddedUsers: alreadyAdded
                },
                cssClass: 'coupon-code-modal'
            });
            modal.onDidDismiss().then(res => {
                if (res && res.data) {
                    console.log('res.data', res.data);
                    if (this.editproductData) {
                        this.editproductData.deal.specificUsers.users = res.data;
                    }
                    else {
                        this.product.deal.specificUsers.users = res.data;
                    }
                }
                console.log('this.product.deal.specificUsers:', this.product.deal.specificUsers.users);
            });
            yield modal.present();
        });
    }
    removeUser(i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.editproductData) {
                this.editproductData.deal.specificUsers.users.splice(i, 1);
            }
            else {
                this.product.deal.specificUsers.users.splice(i, 1);
            }
        });
    }
    imageActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Select any option',
                buttons: [{
                        text: 'Camera',
                        icon: 'camera',
                        handler: () => {
                            this.addCameraImage();
                        }
                    }, {
                        text: 'Crop and upload from gallery',
                        icon: 'image',
                        handler: () => {
                            this.addGallerySingleImage();
                        }
                    },
                    {
                        text: 'Multiple images from gallery',
                        icon: 'images',
                        handler: () => {
                            this.addGalleryImages();
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            //console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    addCameraImage() {
        this.optionsforCamera = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            allowEdit: true
        };
        this.firstIteration = false;
        this.camera.getPicture(this.optionsforCamera).then((imageData) => {
            const base64Image = 'data:image/jpeg;base64,' + imageData;
            const base64Str = base64Image.split(',');
            const size = this.calculateImageSize(base64Str[1]);
            //console.log('len of listofbase64Image', this.listofbase64Image.length);
            if (this.editproductData) {
                if (this.firstIteration === false && this.listofbase64Image.length === 0 && this.editproductData.images && this.editproductData.images.length === 0) {
                    this.listofbase64Image.push({ base64Img: base64Image, cover: true, size: size });
                }
                else {
                    this.listofbase64Image.push({ base64Img: base64Image, cover: false, size: size });
                }
            }
            else {
                if (this.firstIteration === false && this.listofbase64Image.length === 0) {
                    this.listofbase64Image.push({ base64Img: base64Image, cover: true, size: size });
                }
                else {
                    this.listofbase64Image.push({ base64Img: base64Image, cover: false, size: size });
                }
            }
            this.firstIteration = true;
            setTimeout(() => {
                this.content.scrollToBottom(500);
            }, 500);
        }, (err) => {
            //console.log(err);
        });
    }
    addGallerySingleImage() {
        this.optionsforCamera = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            allowEdit: true,
            sourceType: 0,
        };
        this.firstIteration = false;
        this.camera.getPicture(this.optionsforCamera).then((imageData) => {
            const base64Image = 'data:image/jpeg;base64,' + imageData;
            const base64Str = base64Image.split(',');
            const size = this.calculateImageSize(base64Str[1]);
            //console.log('len of listofbase64Image', this.listofbase64Image.length);
            if (this.editproductData) {
                if (this.firstIteration === false && this.listofbase64Image.length === 0 && this.editproductData.images && this.editproductData.images.length === 0) {
                    this.listofbase64Image.push({ base64Img: base64Image, cover: true, size: size });
                }
                else {
                    this.listofbase64Image.push({ base64Img: base64Image, cover: false, size: size });
                }
            }
            else {
                if (this.firstIteration === false && this.listofbase64Image.length === 0) {
                    this.listofbase64Image.push({ base64Img: base64Image, cover: true, size: size });
                }
                else {
                    this.listofbase64Image.push({ base64Img: base64Image, cover: false, size: size });
                }
            }
            this.firstIteration = true;
            setTimeout(() => {
                this.content.scrollToBottom(500);
            }, 500);
        }, (err) => {
            //console.log(err);
        });
    }
    addGalleryImages() {
        this.optionsforGallery = {
            quality: 50,
            outputType: 1
        };
        this.firstIteration = false;
        this.imagePicker.getPictures(this.optionsforGallery).then((results) => {
            if (results.length !== 0 && results !== 'OK') {
                for (let i = 0; i < results.length; i++) {
                    const base64Str = 'data:image/jpeg;base64,' + results[i].split(',');
                    const size = this.calculateImageSize(base64Str[1]);
                    //console.log('len of listofbase64Image', this.listofbase64Image.length);
                    if (this.editproductData) {
                        if (this.firstIteration === false && this.listofbase64Image.length === 0 && this.editproductData.images && this.editproductData.images.length === 0) {
                            this.listofbase64Image.push({ base64Img: 'data:image/jpeg;base64,' + results[i], cover: true, size: size });
                        }
                        else {
                            this.listofbase64Image.push({ base64Img: 'data:image/jpeg;base64,' + results[i], cover: false, size: size });
                        }
                    }
                    else {
                        if (this.firstIteration === false && this.listofbase64Image.length === 0) {
                            this.listofbase64Image.push({ base64Img: 'data:image/jpeg;base64,' + results[i], cover: true, size: size });
                        }
                        else {
                            this.listofbase64Image.push({ base64Img: 'data:image/jpeg;base64,' + results[i], cover: false, size: size });
                        }
                    }
                    this.firstIteration = true;
                }
                setTimeout(() => {
                    this.content.scrollToBottom(500);
                }, 500);
            }
        }, (err) => {
            alert(err);
        });
    }
    removeImage(index) {
        this.listofbase64Image.splice(index, 1);
    }
    removeEditImageInData(index, url) {
        //console.log('in removeEditImageInData', index);]
        // if (this.currentVariants[index]) {
        //   this.currentVariants[index].forEach(weight => {
        //     let index = this.editproductData.priceList.findIndex(e => e.weight == weight);
        //     let imageIndex = this.editproductData.priceList[index].images.findIndex(e => e.url == url)
        //     this.editproductData.priceList[index].images.splice(imageIndex, 1)
        //   });
        // }
        for (const [i, variant] of this.editproductData.priceList.entries()) {
            if (variant.images) {
                for (const [j, img] of variant.images.entries()) {
                    if (img.url == url) {
                        console.log('i,j:', i, j);
                        this.editproductData.priceList[i].images.splice(j, 1);
                    }
                }
            }
        }
        this.currentVariants[index] = [];
        this.editproductData.images.splice(index, 1);
        if (url === this.editproductData.coverPic.url) {
            this.editproductData.coverPic = { imageId: null, url: null };
        }
        this.needToUpdateImages = true;
    }
    removeEditImageInList(index) {
        //console.log('in removeEditImageInList', index);
        this.listofbase64Image.splice(index, 1);
    }
    editProduct() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.editproductData.deal.specificUsers && this.editproductData.deal.specificUsers.active) {
                for (const user of this.editproductData.deal.specificUsers.users) {
                    if (user.discount == null) {
                        this.presentAlert('', `Discount field cannot be empty for ${user.name} under UserList in Advance Tab`);
                        return;
                    }
                    else if (user.discount < 0 || user.discount > 100) {
                        this.presentAlert('', `Please provide a valid Discount field for ${user.name} under UserList in Advance Tab`);
                        return;
                    }
                }
            }
            if (this.editproductData.coverPic && this.editproductData.coverPic.url === null) {
                this.editCoverValue = false;
            }
            else {
                this.editCoverValue = true;
            }
            for (let i = 0; i < this.listofbase64Image.length; i++) {
                if (this.listofbase64Image[i].cover === true) {
                    this.coverValue = true;
                    break;
                }
                else {
                    this.coverValue = false;
                }
            }
            // console.log('this.listofbase64Image',this.listofbase64Image);
            let priceListCheck = false;
            if (this.editproductData.isPriceList) {
                let dpList = [];
                let plDiscountList = [];
                for (let index = 0; index < this.editproductData.priceList.length; index++) {
                    if (this.editproductData.priceList[index].discountedPrice === null) {
                        this.editproductData.priceList[index].discountedPrice = this.editproductData.priceList[index].price;
                    }
                    dpList.push(this.editproductData.priceList[index].discountedPrice);
                    const plDiscount = ((this.editproductData.priceList[index].price - this.editproductData.priceList[index].discountedPrice) / this.editproductData.priceList[index].price) * 100;
                    plDiscountList.push(plDiscount);
                    if (this.editproductData.priceList[index].weight === '' || this.editproductData.priceList[index].price === null || this.editproductData.priceList[index].totalQuantity === '') {
                        priceListCheck = true;
                        break;
                    }
                }
                //console.log('priceListCheck', priceListCheck);
                this.editproductData.discountedPrice = Math.min(...dpList);
                this.editproductData.discount = parseFloat((Math.max(...plDiscountList)).toFixed(2));
            }
            else {
                if (this.editproductData.discountedPrice === null) {
                    this.editproductData.discountedPrice = this.editproductData.prodPrice;
                }
                this.editproductData.discount = parseFloat((((this.editproductData.prodPrice - this.editproductData.discountedPrice) / this.editproductData.prodPrice) * 100).toFixed(2));
            }
            if (this.editproductData.productCode != '') {
                let prodCode = yield this.productService.checkProductSKU(this.editproductData.productCode, this.editproductId);
                console.log('ts id : ', prodCode);
                console.log('ts pc : ', this.editproductData.productCode);
                console.log('ts mp : ', prodCode.length);
                let matchingProds = [];
                if (prodCode && prodCode.length) {
                    for (let i = 0; i < prodCode.length; i++) {
                        if (this.editproductId != prodCode[i].id) {
                            matchingProds.push(prodCode[i].data.prodName);
                        }
                    }
                    console.log('matchingProds : ', matchingProds);
                }
                if (matchingProds && matchingProds.length) {
                    this.presentAlert('', `Please enter a unique product SKU Code - Matching Products are :- ${matchingProds}`);
                    return;
                }
            }
            if (this.editproductData.prodName === null || this.editproductData.prodName === '') {
                this.presentAlert('', 'Please enter product name');
            }
            else if (this.editproductData.prodName.length > 200) {
                this.presentAlert('', 'Product name should be less than 200 characters!');
            }
            else if (!this.editproductData.isPriceList && !this.editproductData.prodPrice) {
                this.presentAlert('', 'Please enter product price');
            }
            else if (this.editproductData.productCode === null || this.editproductData.productCode === '') {
                this.presentAlert('', 'Please enter product SKU Code');
            }
            else if ((this.editproductData.isPriceList && priceListCheck) || (this.editproductData.isPriceList && !this.editproductData.priceList.length)) {
                this.presentAlert('', 'Please enter all variants data of product');
            }
            else if (this.editproductData.prodDesc === null || this.editproductData.prodDesc === '') {
                this.presentAlert('', 'Please enter product description');
            }
            else if (!(this.editproductData.categories && this.editproductData.categories.length) && !(this.editproductData.brands && this.editproductData.brands.length)) {
                this.presentAlert('', 'Please select any category or brand');
            }
            else if (this.editproductData.images.length !== 0 && this.listofbase64Image.length !== 0 && this.coverValue === false && this.editCoverValue === false) {
                this.presentAlert('', 'Please make any one image as cover picture');
            }
            else if (this.editproductData.gst && this.editproductData.gst > 100) {
                this.presentAlert('', `${this.taxType} value must be less than 100`);
            }
            else if (this.editproductData.additionalInfo && this.editproductData.additionalInfo.link && this.editproductData.additionalInfo.link.active && (!this.editproductData.additionalInfo.link.name || !this.editproductData.additionalInfo.link.value)) {
                this.presentAlert('', 'Please enter Custom Action Details');
                return;
            }
            else if (this.editproductData.bundleProducts && this.editproductData.bundleProducts.active && !this.editproductData.bundleProducts.title) {
                this.presentAlert('', 'Please enter Bundle Product Title');
                return;
            }
            else {
                if (this.isUniversal) {
                    const slugName = this.sharedService.createSlugName(this.editproductData.slug.name);
                    const sameSlugExists = yield this.sharedService.sameSlugExists('products', this.editproductId, slugName);
                    if (sameSlugExists) {
                        this.presentAlert('', 'Same slug already exists, please try with another slug name');
                        return;
                    }
                    else {
                        this.editproductData.slug = {
                            name: slugName,
                            updatedAt: new Date(),
                            updatedBy: 'admin'
                        };
                    }
                }
                yield this.presentLoading();
                if (this.editproductData.vendorId && this.editproductData.vendorName == '') {
                    this.addVendor({ target: { value: this.editproductData.vendorId } }, 'edit');
                }
                this.editproductData.updatedAt = new Date();
                this.editproductData.prodName = this.editproductData.prodName.trim();
                this.editproductData.prodName = this.editproductData.prodName[0].toUpperCase() + this.editproductData.prodName.slice(1);
                this.editproductData.productCode = this.editproductData.productCode.trim();
                this.editproductData.nameToSearch = this.editproductData.prodName.toLowerCase();
                this.editproductData.discountedPrice = this.editproductData.discountedPrice ? this.editproductData.discountedPrice : null;
                this.editproductData.productCode = this.editproductData.productCode ? this.editproductData.productCode : '';
                this.editproductData.productQty = this.editproductData.productQty ? this.editproductData.productQty : '';
                this.editproductData.stopWhenNoQty = this.editproductData.stopWhenNoQty ? this.editproductData.stopWhenNoQty : false;
                this.editproductData.shippingWeight = this.editproductData.shippingWeight ? this.editproductData.shippingWeight : null;
                this.editproductData.variantType = this.editproductData.variantType ? this.editproductData.variantType : '';
                this.editproductData.color = this.editproductData.color ? this.editproductData.color : {};
                this.editproductData.minQty = this.editproductData.minQty ? this.editproductData.minQty : null;
                this.editproductData.maxQty = this.editproductData.maxQty ? this.editproductData.maxQty : null;
                this.editproductData.gst = this.editproductData.gst ? this.editproductData.gst : null;
                this.editproductData.instaCoverImage = this.editproductData.instaCoverImage ? this.editproductData.instaCoverImage : '';
                this.editproductData.instaReelUrl = this.editproductData.instaReelUrl ? this.editproductData.instaReelUrl : '';
                this.editproductData.hsnCode = this.editproductData.hsnCode ? this.editproductData.hsnCode : '';
                this.editproductData.purchasePrice = this.editproductData.purchasePrice ? this.editproductData.purchasePrice : null;
                this.editproductData.showSubheading = 'showSubheading' in this.editproductData ? this.editproductData.showSubheading : false;
                if (this.editproductData.variantType === 'other') {
                    this.editproductData.variantType = 'variant';
                }
                this.editproductData.metaData = this.metaData;
                this.editproductData.attributes = this.attributesData;
                if (!this.editproductData.prodPrice) {
                    this.editproductData.prodPrice = null;
                }
                if (['single', 'variant'].includes(this.editproductData.productType)) {
                    this.editproductData.productType = '';
                }
                this.editproductData.stockAttributes.expiryDate = this.expiryDate;
                this.editproductData.stockAttributes.manufacturedDate = this.manufacturedDate;
                console.log('this.allRegions on edit product data', this.allRegions);
                this.editproductData.allRegions = this.allRegions;
                this.editproductData.templateId = this.product.templateId;
                // Dont remove, change to date time field
                // let startBlock:any = this.editproductData.deal.start.time.split(":")
                // let endBlock:any = this.editproductData.deal.end.time.split(":")
                // let timeStart = ((startBlock[0]%12+12*Number((startBlock[0]%12==0)))+":"+startBlock[1], startBlock[0] >= 12) ? 'PM' : 'AM'
                // let timeEnd = ((endBlock[0]%12+12*Number((endBlock[0]%12==0)))+":"+endBlock[1], endBlock[0] >= 12) ? 'PM' : 'AM'
                // if (this.editproductData.deal){
                //   this.editproductData.deal.start.date = moment(this.editproductData.deal.start.date).format()
                //   this.editproductData.deal.start.time = this.editproductData.deal.start.time+ ' ' + timeStart
                //   this.editproductData.deal.end.date = moment(this.editproductData.deal.end.date).format()
                //   this.editproductData.deal.end.time = this.editproductData.deal.end.time+ ' ' + timeEnd
                // }
                this.editproductData['video'] = this.video;
                if (!this.isOptionProduct) {
                    this.events.publish('product:editProduct', this.editproductData, this.editproductId, this.listofbase64Image, this.editProductBarcode, this.needToUpdateImages);
                }
                else {
                    this.events.publish('product-options:editProductOption', this.editproductData, this.editproductId, this.optionId, this.listofbase64Image, this.editProductBarcode, this.needToUpdateImages);
                }
            }
            // console.log("attributesData", this.attributesData);    
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
        //console.log(base64StringLength);
        inBytes = (base64StringLength / 4) * 3 - padding;
        //console.log(inBytes);
        const kbytes = inBytes / 1000;
        return kbytes;
    }
    addProduct() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.product.deal.specificUsers.active) {
                for (const user of this.product.deal.specificUsers.users) {
                    if (user.discount == null) {
                        this.presentAlert('', `Discount field cannot be empty for ${user.name} under UserList in Advance Tab`);
                        return;
                    }
                    else if (user.discount < 0 || user.discount > 100) {
                        this.presentAlert('', `Please provide a valid Discount field for ${user.name} under UserList in Advance Tab`);
                        return;
                    }
                }
            }
            for (let i = 0; i < this.listofbase64Image.length; i++) {
                if (this.listofbase64Image[i].cover === true) {
                    this.coverValue = true;
                    break;
                }
                else {
                    this.coverValue = false;
                }
            }
            let priceListCheck = false;
            if (this.product.isPriceList) {
                let dpList = [];
                let plDiscountList = [];
                for (let index = 0; index < this.product.priceList.length; index++) {
                    if (this.product.priceList[index].discountedPrice === null) {
                        this.product.priceList[index].discountedPrice = this.product.priceList[index].price;
                    }
                    dpList.push(this.product.priceList[index].discountedPrice);
                    const plDiscount = ((this.product.priceList[index].price - this.product.priceList[index].discountedPrice) / this.product.priceList[index].price) * 100;
                    plDiscountList.push(plDiscount);
                    if (this.product.priceList[index].weight === '' || this.product.priceList[index].price === null || this.product.priceList[index].totalQuantity === '') {
                        priceListCheck = true;
                        break;
                    }
                }
                this.product.discountedPrice = Math.min(...dpList);
                this.product.discount = parseFloat((Math.max(...plDiscountList)).toFixed(2));
            }
            else {
                if (this.product.discountedPrice === null) {
                    this.product.discountedPrice = this.product.prodPrice;
                }
                this.product.discount = parseFloat((((this.product.prodPrice - this.product.discountedPrice) / this.product.prodPrice) * 100).toFixed(2));
            }
            if (this.product.productCode != '') {
                let prodCode = yield this.productService.checkProductSKU(this.product.productCode, '');
                console.log('ts id : ', prodCode);
                console.log('ts pc : ', this.product.productCode);
                console.log('ts mp : ', prodCode.length);
                if (prodCode && prodCode.length) {
                    let matchingProds = [];
                    for (let i = 0; i < prodCode.length; i++) {
                        matchingProds.push(prodCode[i].data.prodName);
                    }
                    console.log('matchingProds : ', matchingProds);
                    this.presentAlert('', `Please enter a unique product SKU Code - Matching Products are :- ${matchingProds}`);
                    return;
                }
            }
            if (this.product.prodName === null || this.product.prodName === '') {
                this.presentAlert('', 'Please enter product name');
            }
            else if (this.product.prodName.length > 200) {
                this.presentAlert('', 'Product name should be less than 200 characters!');
            }
            else if (!this.product.isPriceList && !this.product.prodPrice) {
                this.presentAlert('', 'Please enter product price');
            }
            else if (this.product.productCode === null || this.product.productCode === '') {
                this.presentAlert('', 'Please enter product SKU Code');
            }
            else if ((this.product.isPriceList && priceListCheck) || (this.product.isPriceList && !this.product.priceList.length)) {
                this.presentAlert('', 'Please enter all variants data of product');
            }
            else if (this.product.prodDesc === null || this.product.prodDesc === '') {
                this.presentAlert('', 'Please enter product description');
            }
            else if (!this.selectedCategories.length && !this.selectedBrands.length) {
                this.presentAlert('', 'Please select any category or brand');
            }
            else if (this.listofbase64Image.length !== 0 && this.coverValue === false) {
                this.presentAlert('', 'Please make any one image as cover picture');
            }
            else if (this.product.gst && this.product.gst > 100) {
                this.presentAlert('', `${this.taxType} value must be less than 100`);
            }
            else if (this.product.additionalInfo && this.product.additionalInfo.link && this.product.additionalInfo.link.active && (!this.product.additionalInfo.link.name || !this.product.additionalInfo.link.value)) {
                this.presentAlert('', 'Please enter Custom Action Details');
                return;
            }
            else if (this.product.bundleProducts.active && !this.product.bundleProducts.title) {
                this.presentAlert('', 'Please enter Bundle Product Title');
                return;
            }
            else {
                yield this.presentLoading();
                this.product.createdAt = new Date();
                this.product.updatedAt = new Date();
                this.product.sortedAt = new Date();
                this.product.categories = this.selectedCategories;
                this.product.brands = this.selectedBrands;
                this.product.prodName = this.product.prodName.trim();
                this.product.prodName = this.product.prodName[0].toUpperCase() + this.product.prodName.slice(1);
                this.product.productCode = this.product.productCode.trim();
                this.product.nameToSearch = this.product.prodName.toLowerCase();
                if (this.product.variantType === 'other') {
                    this.product.variantType = 'variant';
                }
                this.product.metaData = this.metaData;
                this.product.attributes = this.attributesData;
                if (this.userRole === 'vendor') {
                    this.product.vendorId = yield this.storage.get('uid');
                }
                if (!this.product.prodPrice) {
                    this.product.prodPrice = null;
                }
                if (['single', 'variant'].includes(this.product.productType)) {
                    this.product.productType = '';
                }
                this.product.stockAttributes.expiryDate = this.expiryDate;
                this.product.stockAttributes.manufacturedDate = this.manufacturedDate;
                this.product.allRegions = this.allRegions;
                if (this.product.vendorId) {
                    this.addVendor({ target: { value: this.product.vendorId } }, 'new');
                }
                this.events.publish('product:addProduct', this.product, this.listofbase64Image, this.barcode);
            }
        });
    }
    updateNewProductStatus() {
        // if (this.userRole == 'vendor' && !this.roleVendorData.approveAllProducts) {
        //   this.presentAlert('Alert', 'You cannot make this product active as it is not approved by Admin.');
        //   return;
        // }
        if (this.product.status === true || this.product.status === null) {
            this.product.status = false;
        }
        else {
            this.product.status = true;
        }
    }
    updateEditProductStatus(status) {
        console.log('this.editproductData.approved:', this.editproductData.approved);
        if (this.userRole == 'vendor' && !this.editproductData.approved) {
            this.presentAlert('Alert', 'You cannot make this product active as it is not approved by Admin.');
            return;
        }
        if (status === true) {
            console.log('status=false');
            this.editproductData.status = false;
        }
        else {
            console.log('status=true');
            this.editproductData.status = true;
        }
    }
    newProductCoverPic(index) {
        //console.log('index of cover pic', index);
        for (let i = 0; i < this.listofbase64Image.length; i++) {
            if (i === index) {
                this.listofbase64Image[index].cover = true;
            }
            else {
                this.listofbase64Image[i].cover = false;
            }
        }
    }
    editProductCoverPicInData(index) {
        const editImgData = this.editproductData.images[index];
        this.editproductData.coverPic = editImgData;
        for (let i = 0; this.listofbase64Image.length; i++) {
            this.listofbase64Image[i].cover = false;
        }
    }
    editProductCoverPicInList(index) {
        this.editproductData.coverPic = { imageId: null, url: null };
        for (let i = 0; i < this.listofbase64Image.length; i++) {
            if (i === index) {
                this.listofbase64Image[index].cover = true;
            }
            else {
                this.listofbase64Image[i].cover = false;
            }
        }
    }
    cancel() {
        //console.log('in cancel');
        this.router.navigate(['admin-products']);
    }
    onClickImage(img) {
        let imgZoomUrls = [];
        for (const img of this.listofbase64Image) {
            imgZoomUrls.push({ url: img.base64Img });
        }
        let imgIndex = this.listofbase64Image.indexOf(img);
        this.modalController.create({
            component: src_app_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_6__["ImageModalPage"],
            cssClass: 'photo-modal-class',
            componentProps: {
                imgs: imgZoomUrls,
                index: imgIndex
            }
        }).then(modal => modal.present());
    }
    onClickEditImage(img) {
        let imgZoomUrls = [];
        let imgurl = { url: img };
        for (const img of this.listofbase64Image) {
            imgZoomUrls.push({ url: img.base64Img });
        }
        for (const img of this.editproductData.images) {
            imgZoomUrls.push({ url: img.url });
        }
        let imgIndex = imgZoomUrls.indexOf(imgurl);
        this.modalController.create({
            component: src_app_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_6__["ImageModalPage"],
            cssClass: 'photo-modal-class',
            componentProps: {
                imgs: imgZoomUrls,
                index: imgIndex
            }
        }).then(modal => modal.present());
    }
    deleteAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'Are you sure you want to delete this product?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            //console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            //console.log('Confirm Okay');
                            this.deleteProduct();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteProduct() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingController.create({
                message: 'Please Wait...',
            });
            yield this.loader.present();
            if (!this.optionId) {
                this.events.publish('product:deleteProduct', this.editproductId);
            }
            else {
                this.events.publish('product-options:deleteProductOption', this.optionId, this.editproductId);
            }
        });
    }
    presentAlert(heading, desc, action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: heading,
                message: desc,
                buttons: [{
                        text: 'Ok',
                        handler: () => {
                            //console.log('Confirm Okay', this.routeFromCategories, action);
                            if (action === true && !this.routeFromCategories && !this.routeFromOptions && !this.fromAppointment) {
                                this._location.back();
                            }
                            else if (action === true && this.routeFromCategories) {
                                this._location.back();
                            }
                            else if (action === true && this.routeFromOptions) {
                                this._location.back();
                            }
                            else if (action === true && this.fromAppointment) {
                                this.router.navigate(['admin-products']);
                            }
                        }
                    }]
            });
            yield alert.present();
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingController.create({
                message: 'Please Wait...',
            });
            yield this.loader.present();
        });
    }
    onClickCategoryCheckBox(cid) {
        if (this.selectedCategories.indexOf(cid) === -1) {
            this.selectedCategories.push(cid);
        }
        else {
            const cidIndex = this.selectedCategories.indexOf(cid);
            this.selectedCategories.splice(cidIndex, 1);
        }
        //console.log('selectedCategories', this.selectedCategories);
    }
    onClickBrandCheckBox(bid) {
        if (this.selectedBrands.indexOf(bid) === -1) {
            this.selectedBrands.push(bid);
        }
        else {
            const bidIndex = this.selectedBrands.indexOf(bid);
            this.selectedBrands.splice(bidIndex, 1);
        }
        //console.log('selectedBrands', this.selectedBrands);
    }
    onClickEditCategoryCheckBox(cid) {
        if (this.editproductData.categories.indexOf(cid) === -1) {
            this.editproductData.categories.push(cid);
        }
        else {
            const cidIndex = this.editproductData.categories.indexOf(cid);
            this.editproductData.categories.splice(cidIndex, 1);
        }
        //console.log('editproductData.categories', this.editproductData.categories);
    }
    onClickEditBrandCheckBox(bid) {
        if (this.editproductData.brands) {
            if (this.editproductData.brands.indexOf(bid) === -1) {
                this.editproductData.brands.push(bid);
            }
            else {
                const bidIndex = this.editproductData.brands.indexOf(bid);
                this.editproductData.brands.splice(bidIndex, 1);
            }
        }
        else {
            this.editproductData.brands = [];
            this.editproductData.brands.push(bid);
        }
        //console.log('editproductData.brands', this.editproductData.brands);
    }
    editCheckBoxValue(id) {
        if (this.editproductData.categories.indexOf(id) !== -1) {
            return true;
        }
        else {
            return false;
        }
    }
    editBrandCheckBoxValue(id) {
        if (this.editproductData.brands && this.editproductData.brands.length && this.editproductData.brands.indexOf(id) !== -1) {
            return true;
        }
        else {
            return false;
        }
    }
    clearSearchCategory() {
        this.searchCategory = null;
    }
    clearSearchBrand() {
        this.searchBrand = null;
    }
    priceToggle() {
        this.product.isPriceList = !this.product.isPriceList;
        if (this.product.isPriceList) {
            this.product.priceSlabs.singleSlabs = [];
        }
        else {
            this.product.priceSlabs.variantSlabs = [];
        }
        if (this.product.isPriceList && this.product.priceList.length === 0) {
            this.product.priceList.push({
                weight: '',
                price: null,
                discountedPrice: null,
                totalQuantity: '',
                shippingWeight: null,
                purchasePrice: null,
                barcode: ''
            });
            //console.log('priceList', this.product.priceList);
        }
    }
    editPriceToggle() {
        this.editproductData.isPriceList = !this.editproductData.isPriceList;
        if (this.editproductData.isPriceList) {
            this.editproductData.priceSlabs.singleSlabs = [];
            this.setVariantImages();
        }
        else {
            this.editproductData.priceSlabs.variantSlabs = [];
        }
        if (this.editproductData.isPriceList && this.editproductData.priceList.length === 0) {
            this.editproductData.priceList.push({
                weight: '',
                price: null,
                discountedPrice: null,
                totalQuantity: '',
                shippingWeight: null,
                purchasePrice: null,
                barcode: ''
            });
            //console.log('priceList', this.editproductData.priceList);
        }
    }
    onClickAddMoreInPriceList() {
        this.product.priceList.push({
            weight: '',
            price: null,
            discountedPrice: null,
            totalQuantity: '',
            shippingWeight: null,
            purchasePrice: null,
            barcode: ''
        });
    }
    onClickAddMoreInEditProductPriceList() {
        this.editproductData.priceList.push({
            weight: '',
            price: null,
            discountedPrice: null,
            totalQuantity: '',
            shippingWeight: null,
            purchasePrice: null,
            barcode: ''
        });
    }
    removeElementFromPriceList(index) {
        if (this.product.priceList.length === 1) {
            this.product.isPriceList = false;
            // this.product.priceList.splice(index, 1);
        }
        //  else {
        //   this.product.priceList.splice(index, 1);
        // }
        let wValue = this.product.priceList[index].weight;
        this.product.priceList.splice(index, 1);
        this.removeVariantPriceSlab("new", wValue);
    }
    removeElementFromEditProductPriceList(index) {
        if (this.editproductData.priceList.length === 1) {
            this.editproductData.isPriceList = false;
            // this.editproductData.priceList.splice(index, 1);
        }
        // else {
        //   this.editproductData.priceList.splice(index, 1);
        // }
        let wValue = this.editproductData.priceList[index].weight;
        this.editproductData.priceList.splice(index, 1);
        this.removeVariantPriceSlab("edit", wValue);
    }
    removeVariantPriceSlab(type, weight) {
        console.log("weight", weight);
        const dataType = type === "new" ? "product" : "editproductData";
        if (this[dataType].priceSlabs
            && this[dataType].priceSlabs.variantSlabs
            && this[dataType].priceSlabs.variantSlabs.hasOwnProperty(weight)) {
            delete this[dataType].priceSlabs.variantSlabs[weight];
        }
    }
    addSearchKeywords() {
        this.product.searchKeywords.push(this.keyword);
        this.keyword = '';
    }
    removeKeyword(i) {
        this.product.searchKeywords.splice(i, 1);
    }
    editProductAddSearchKeywords() {
        this.editproductData.searchKeywords.push(this.keyword);
        this.keyword = '';
    }
    editProductRemoveKeyword(i) {
        this.editproductData.searchKeywords.splice(i, 1);
    }
    uploadBarCode(status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Select any option',
                buttons: [{
                        text: 'Camera',
                        icon: 'camera',
                        handler: () => {
                            this.barcodeFromCamera(status);
                        }
                    }, {
                        text: 'Gallery',
                        icon: 'image',
                        handler: () => {
                            this.barcodeFromGallery(status);
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            //console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    barcodeFromCamera(status) {
        this.optionsforCamera = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            allowEdit: true
        };
        this.camera.getPicture(this.optionsforCamera).then((imageData) => {
            const base64Image = 'data:image/jpeg;base64,' + imageData;
            this.barcode = base64Image;
            if (status === 'edit') {
                this.editProductBarcode = base64Image;
            }
        }, (err) => {
            //console.log(err);
        });
    }
    barcodeFromGallery(status) {
        this.optionsforCamera = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            allowEdit: true,
            sourceType: 0
        };
        this.camera.getPicture(this.optionsforCamera).then((imageData) => {
            const base64Image = 'data:image/jpeg;base64,' + imageData;
            this.barcode = base64Image;
            if (status === 'edit') {
                this.editProductBarcode = base64Image;
            }
        }, (err) => {
            //console.log(err);
        });
    }
    removeBarcodeImage() {
        this.barcode = '';
    }
    plUploadBarcodeActionSheet(index, status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Select any option',
                buttons: [{
                        text: 'Camera',
                        icon: 'camera',
                        handler: () => {
                            this.plUploadBarcode(index, status, 'camera');
                        }
                    }, {
                        text: 'Gallery',
                        icon: 'image',
                        handler: () => {
                            this.plUploadBarcode(index, status, 'gallery');
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            //console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    plUploadBarcode(index, status, type) {
        const optionsforCamera = {
            quality: 25,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            allowEdit: true
        };
        if (type === 'gallery') {
            optionsforCamera['sourceType'] = 0;
        }
        this.camera.getPicture(optionsforCamera).then((imageData) => {
            const base64Image = 'data:image/jpeg;base64,' + imageData;
            if (status === 'edit') {
                this.editproductData.priceList[index].barcode = base64Image;
            }
            else {
                this.product.priceList[index].barcode = base64Image;
            }
        }, (err) => {
            //console.log(err);
        });
    }
    plRemoveBarcode(index, status) {
        //console.log('plRemoveBarcode')
        if (status === 'new') {
            this.product.priceList[index].barcode = '';
        }
        else {
            this.editproductData.priceList[index].barcode = '';
        }
    }
    stopOrderWhenNoQtyToggle() {
        this.product.stopWhenNoQty = !this.product.stopWhenNoQty;
    }
    editProductStopOrderWhenNoQtyToggle(status) {
        if (status) {
            this.editproductData.stopWhenNoQty = false;
        }
        else {
            this.editproductData.stopWhenNoQty = true;
        }
    }
    imageZoom(img) {
        this.modalController.create({
            component: src_app_image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_6__["ImageModalPage"],
            componentProps: {
                imgs: [{ url: img }],
                index: 0
            }
        }).then(modal => modal.present());
    }
    getSubcategories(cid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.listOfSubcategories.hasOwnProperty(cid)) {
                let subcategories = [];
                subcategories = yield this.productService.getSubcategoriesInNewProduct(cid);
                if (this.userRole == 'vendor' && this.roleVendorId) {
                    this.listOfSubcategories[cid] = subcategories.filter((subCat) => this.roleVendorData.categories.includes(subCat.id));
                }
                else {
                    this.listOfSubcategories[cid] = subcategories;
                }
                this.listOfSubcategoriesInView[cid] = { active: true };
            }
            else {
                if (!this.listOfSubcategoriesInView[cid].active) {
                    this.listOfSubcategoriesInView[cid].active = true;
                }
                else {
                    this.listOfSubcategoriesInView[cid].active = false;
                }
            }
        });
    }
    getSubOfSubCategories(catId, subCatId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log('catId:', catId, 'subCatId:', subCatId);
            if (!this.subOfSubCategories.hasOwnProperty(subCatId)) {
                let subOfSubCategoriesData = [];
                subOfSubCategoriesData = yield this.categoryService.getSubOfSubCategories(catId, subCatId);
                if (this.userRole == 'vendor' && this.roleVendorId) {
                    this.subOfSubCategories[subCatId] = subOfSubCategoriesData.filter((subCat) => this.roleVendorData.categories.includes(subCat.id));
                }
                else {
                    this.subOfSubCategories[subCatId] = subOfSubCategoriesData;
                }
                this.subOfSubCategoryToggle[subCatId] = { active: true };
                // console.log('subOfSubCategories:', this.subOfSubCategories);
            }
            else {
                this.subOfSubCategoryToggle[subCatId].active = !this.subOfSubCategoryToggle[subCatId].active;
                // console.log('subOfSubCategoryToggle:', this.subOfSubCategoryToggle[subCatId]);
            }
        });
    }
    selectVariantColor() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _variants_colors_modal_colors_modal_page__WEBPACK_IMPORTED_MODULE_9__["ColorsModalPage"],
                componentProps: {
                    name: '',
                    image: '',
                    code: ''
                }
            });
            modal.onDidDismiss()
                .then((res) => {
                //console.log('data from modal', res);
                if (res.data) {
                    if (!this.editproductData) {
                        this.product.color = res.data;
                    }
                    else {
                        this.editproductData.color = res.data;
                    }
                }
            });
            yield modal.present();
        });
    }
    updateVariantColor() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _variants_colors_modal_colors_modal_page__WEBPACK_IMPORTED_MODULE_9__["ColorsModalPage"],
                componentProps: {
                    name: this.product.color.name,
                    image: this.product.color.image,
                    code: this.product.color.code
                }
            });
            modal.onDidDismiss()
                .then((res) => {
                //console.log('data from modal', res);
                if (res.data) {
                    this.product.color = res.data;
                }
            });
            yield modal.present();
        });
    }
    updateEditVariantColor() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _variants_colors_modal_colors_modal_page__WEBPACK_IMPORTED_MODULE_9__["ColorsModalPage"],
                componentProps: {
                    name: this.editproductData.color.name,
                    image: this.editproductData.color.image,
                    code: this.editproductData.color.code
                }
            });
            modal.onDidDismiss()
                .then((res) => {
                //console.log('data from modal', res);
                if (res.data) {
                    this.editproductData.color = res.data;
                }
            });
            yield modal.present();
        });
    }
    removeVariantColor() {
        this.product.color = {};
    }
    removeEditVariantColor() {
        this.editproductData.color = {};
    }
    importTemplate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _variants_templates_modal_templates_modal_page__WEBPACK_IMPORTED_MODULE_10__["TemplatesModalPage"]
            });
            modal.onDidDismiss()
                .then((res) => {
                //console.log('data from modal', res);
                if (res.data) {
                    if (!this.editproductData) {
                        this.product.variantType = res.data.type;
                        this.product.priceList = [];
                        for (let index = 0; index < res.data.values.length; index++) {
                            this.product.priceList.push({
                                weight: res.data.values[index],
                                price: null,
                                discountedPrice: null,
                                totalQuantity: '',
                                shippingWeight: null,
                                purchasePrice: null,
                                barcode: ''
                            });
                        }
                    }
                    else {
                        this.editproductData.variantType = res.data.type;
                        this.editproductData.priceList = [];
                        for (let index = 0; index < res.data.values.length; index++) {
                            this.editproductData.priceList.push({
                                weight: res.data.values[index],
                                price: null,
                                discountedPrice: null,
                                totalQuantity: '',
                                shippingWeight: null,
                                purchasePrice: null,
                                barcode: ''
                            });
                        }
                    }
                }
            });
            yield modal.present();
        });
    }
    tripleTap() {
        this.tapCount += 1;
        if (this.tapCount === 3 && this.product.priceList.length > 1) {
            let dprice = this.product.priceList[0].discountedPrice;
            let price = this.product.priceList[0].price;
            let swt = this.product.priceList[0].shippingWeight;
            this.product.priceList.forEach(pl => {
                pl.discountedPrice = dprice;
                pl.price = price;
                pl.shippingWeight = swt;
            });
            this.tapCount = 0;
        }
    }
    editTripleTap() {
        this.tapCount += 1;
        if (this.tapCount === 3 && this.editproductData.priceList.length > 1) {
            let dprice = this.editproductData.priceList[0].discountedPrice;
            let price = this.editproductData.priceList[0].price;
            let swt = this.editproductData.priceList[0].shippingWeight;
            this.editproductData.priceList.forEach(pl => {
                pl.discountedPrice = dprice;
                pl.price = price;
                pl.shippingWeight = swt;
            });
            this.tapCount = 0;
        }
    }
    addVendor(e, type) {
        //console.log('vendorId', e.target.value);
        if (type === 'edit') {
            this.editproductData.vendorId = e.target.value;
            this.editproductData.vendorName = this.vendors.find(o => o.id === e.target.value).name;
            console.log('this.editproductData.vendorName:', this.editproductData.vendorName);
        }
        else {
            this.product.vendorId = e.target.value;
            this.product['vendorName'] = this.vendors.find(o => o.id === e.target.value).name;
        }
    }
    addFilters(type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_admin_filter_settings_select_filter_select_filter_page__WEBPACK_IMPORTED_MODULE_13__["SelectFilterPage"],
                componentProps: { addedFilters: type === 'new' ? this.product.filters : this.editproductData.filters }
            });
            modal.onDidDismiss().then((res) => {
                //console.log('res', res);
                if (res.data) {
                    const addedFilters = res.data.addedFilters;
                    //console.log('addedFilters', addedFilters);
                    if (addedFilters.length) {
                        let filtersObj = {};
                        addedFilters.forEach(filter => {
                            if (filter.active) {
                                let values = [];
                                filter.values.forEach(v => {
                                    if (v.isChecked) {
                                        values.push(v.value);
                                    }
                                });
                                filtersObj[filter.name] = values;
                            }
                        });
                        //console.log('filtersObj', filtersObj);
                        if (type === 'new') {
                            this.product.filters = filtersObj;
                        }
                        else {
                            this.editproductData.filters = filtersObj;
                        }
                    }
                }
            });
            yield modal.present();
        });
    }
    changeInPrice() {
        if (this.editproductData.discountedPrice === this.editproductData.prodPrice) {
            this.editproductData.discountedPrice = null;
        }
    }
    changeInPLPrice(i) {
        if (this.editproductData.priceList[i].discountedPrice === this.editproductData.priceList[i].price) {
            this.editproductData.priceList[i].discountedPrice = null;
        }
    }
    onDrop(files) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log('files:', files, '\n imglimit:', this.imagesLimit);
            //console.log(this.listofbase64Image,this.editproductData)
            let message = 'Sorry, total' + ' ' + this.imagesLimit.toString() + ' ' + 'images allowed';
            if (this.listofbase64Image && !this.editproductData && (this.listofbase64Image.length >= this.imagesLimit)) {
                // console.log('here1', this.listofbase64Image.length)
                this.presentAlert('Upload failed', message);
            }
            else if (this.editproductData && this.editproductData.images && (this.editproductData.images.length >= this.imagesLimit)) {
                // console.log('here2')
                this.presentAlert('Upload failed', message);
            }
            else if (this.listofbase64Image.length && this.editproductData && this.editproductData.images && (this.listofbase64Image.length + this.editproductData.images.length >= this.imagesLimit)) {
                // console.log('here3')
                this.presentAlert('Upload failed', message);
            }
            else {
                console.log('prod data : ', this.editproductData);
                const modal = yield this.modalController.create({
                    component: src_app_components_image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_20__["ImageEditorComponent"],
                    componentProps: {
                        aspectRatioWidthVal: 1,
                        aspectRatioHeightVal: 1,
                        type: 'product',
                        currentLimit: this.editproductData ? (this.editproductData.images ? this.editproductData.images.length : 0) : 0
                    },
                    cssClass: 'custom-img-editor'
                });
                yield modal.present();
                modal.onDidDismiss().then(res => {
                    if (res.data) {
                        for (let i = 0; i < res.data.length; i++) {
                            let size = this.calculateImageSize(res.data[i] || '');
                            this.listofbase64Image.push({ base64Img: res.data[i] || '', cover: false, size: size });
                            if (this.listofbase64Image.length > this.imagesLimit) {
                                this.presentAlert('Upload failed', message);
                                this.listofbase64Image = [];
                            }
                        }
                    }
                    // let size = this.calculateImageSize(res.data || '')
                    // this.listofbase64Image.push({ base64Img: res.data || '', cover: false, size: size });
                });
                //console.log('here4')
                // for (let i = 0; i < files.length; i++) {
                //   let reader = new FileReader();
                //   reader.readAsDataURL(files.item(i))
                //   reader.onload = (event:any) => { // called once readAsDataURL is completed
                //     let base64Image:any = event.target.result;
                //     let base64Str = base64Image.split(',');
                //     let size = this.calculateImageSize(base64Str[1]);
                //     // console.log('size:', size);
                //     this.listofbase64Image.push({base64Img: base64Image, cover: false, size: size});
                //   }
                // }
            }
        });
    }
    uploadQR(files, status) {
        for (let i = 0; i < files.length; i++) {
            let reader = new FileReader();
            reader.readAsDataURL(files.item(i));
            reader.onload = (event) => {
                let base64Image = event.target.result;
                this.barcode = base64Image;
                this.editProductBarcode = base64Image;
            };
        }
    }
    uploadPriceListQR(files, index, status) {
        for (let i = 0; i < files.length; i++) {
            let reader = new FileReader();
            reader.readAsDataURL(files.item(i));
            reader.onload = (event) => {
                let base64Image = event.target.result;
                if (status === 'edit') {
                    this.editproductData.priceList[index].barcode = base64Image;
                }
                else {
                    this.product.priceList[index].barcode = base64Image;
                }
            };
        }
    }
    subIsAllowedToggle() {
        this.product.subscription.isAllowed = !this.product.subscription.isAllowed;
    }
    editSubIsAllowedToggle() {
        this.editproductData.subscription.isAllowed = !this.editproductData.subscription.isAllowed;
    }
    dealIsAllowedToggle() {
        this.product.deal.isAllowed = !this.product.deal.isAllowed;
    }
    editDealIsAllowedToggle() {
        this.editproductData.deal.isAllowed = !this.editproductData.deal.isAllowed;
    }
    getAddedFiltersLength(filters) {
        return Object.keys(filters).length;
    }
    imagesReorder(event) {
        let v = this.currentVariants[event.detail.from];
        this.currentVariants[event.detail.from] = this.currentVariants[event.detail.to];
        this.currentVariants[event.detail.to] = v;
        let b = this.editproductData.images[event.detail.from];
        this.editproductData.images[event.detail.from] = this.editproductData.images[event.detail.to];
        this.editproductData.images[event.detail.to] = b;
        this.needToUpdateImages = true;
        event.detail.complete();
    }
    addNewSection() {
        if (this.productSections.length < this.sectionLimit) {
            this.openProductSectionModal();
        }
        else {
            this.presentAlert('Sections limit reached, Max ' + this.sectionLimit + ' allowed');
        }
    }
    openProductSectionModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_admin_admin_shop_new_product_product_section_product_section_page__WEBPACK_IMPORTED_MODULE_16__["ProductSectionPage"],
                backdropDismiss: false,
                cssClass: 'custom-modal',
                componentProps: { productId: this.editproductId }
            });
            modal.onDidDismiss().then(() => {
                this.getSections();
            });
            yield modal.present();
        });
    }
    openWidgetEdit(type, id, index) {
        if (type == "image-banner") {
            const navigationExtras = {
                queryParams: {
                    ID: id,
                    index: index,
                    productId: this.editproductId
                }
            };
            this.router.navigate(['edit-banner'], navigationExtras);
        }
        if (type == "image-block") {
            const navigationExtras = {
                queryParams: {
                    ID: id,
                    index: index,
                    productId: this.editproductId
                }
            };
            this.router.navigate(['edit-image-block'], navigationExtras);
        }
        else if (type == "video-block") {
            const navigationExtras = {
                queryParams: {
                    ID: id,
                    index: index,
                    productId: this.editproductId
                }
            };
            this.router.navigate(['edit-video-block'], navigationExtras);
        }
        else if (type == "text-block") {
            const navigationExtras = {
                queryParams: {
                    ID: id,
                    index: index,
                    productId: this.editproductId
                }
            };
            this.router.navigate(['edit-text-block'], navigationExtras);
        }
        else if (type == "product-carousel" || type == "product-list") {
            const navigationExtras = {
                queryParams: {
                    ID: id,
                    index: index,
                    productId: this.editproductId
                }
            };
            this.router.navigate(['edit-product-carousel'], navigationExtras);
        }
    }
    getSections() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let sections = yield this.angularFirestore.collection('products').doc(this.editproductId).collection('sections').doc('productWidgets').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["first"])()).toPromise();
                if (sections && sections.sections) {
                    this.productSections = sections.sections;
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    SectionReorder(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let draggedItem = this.productSections.splice(event.detail.from, 1)[0];
            this.productSections.splice(event.detail.to, 0, draggedItem);
            event.detail.complete();
            yield this.angularFirestore.collection('products').doc(this.editproductId).collection('sections').doc('productWidgets').set({ 'sections': this.productSections });
            this.presentAlert('Sections saved successfully!');
        });
    }
    deleteSectionConfirm(widgetID, index, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: 'Are you sure you want to delete this section?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            this.events.publish('widgets:deleteWidget', widgetID);
                            this.deleteSection(index, type);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteSection(index, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.presentLoading();
            this.productSections.splice(index, 1);
            try {
                yield this.angularFirestore.collection('products').doc(this.editproductId).collection('sections').doc('productWidgets').update({ 'sections': this.productSections });
                if (this.loader) {
                    this.loader.dismiss();
                }
                this.presentAlert('Sections saved successfully!');
            }
            catch (error) {
                console.log(error);
                this.presentAlert('Some error occured, please try again');
            }
        });
    }
    changeLocationStatus(index, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.presentLoading();
            if (type == "app") {
                if (this.productSections[index].location == "app") {
                    this.productSections[index].location = "none";
                }
                else if (this.productSections[index].location == "none") {
                    this.productSections[index].location = "app";
                }
                else if (this.productSections[index].location == "all") {
                    this.productSections[index].location = "web";
                }
                else if (this.productSections[index].location == "web") {
                    this.productSections[index].location = "all";
                }
            }
            else if (type == "web") {
                if (this.productSections[index].location == "web") {
                    this.productSections[index].location = "none";
                }
                else if (this.productSections[index].location == "none") {
                    this.productSections[index].location = "web";
                }
                else if (this.productSections[index].location == "all") {
                    this.productSections[index].location = "app";
                }
                else if (this.productSections[index].location == "app") {
                    this.productSections[index].location = "all";
                }
            }
            try {
                yield this.angularFirestore.collection('products').doc(this.editproductId).collection('sections').doc('productWidgets').set({ 'sections': this.productSections });
                if (this.loader) {
                    this.loader.dismiss();
                }
                this.presentAlert('Sections saved successfully!');
            }
            catch (error) {
                console.log(error);
                this.presentAlert('Some error occured, please try again');
            }
        });
    }
    toggleCod() {
        this.product.isCod = !this.product.isCod;
    }
    toggleGstExclusive() {
        this.product.gstExclusive = !this.product.gstExclusive;
    }
    toggleShowSubheading() {
        this.product.showSubheading = !this.product.showSubheading;
    }
    toggleExtraCharges() {
        this.product.extraCharges.active = !this.product.extraCharges.active;
    }
    toggleChargeQty() {
        this.product.extraCharges.chargeAllQty = !this.product.extraCharges.chargeAllQty;
    }
    toggleCodEdit() {
        this.editproductData.isCod = !this.editproductData.isCod;
    }
    toggleGstExclusiveEdit() {
        this.editproductData.gstExclusive = !this.editproductData.gstExclusive;
    }
    toggleExtraChargesEdit() {
        this.editproductData.extraCharges.active = !this.editproductData.extraCharges.active;
    }
    toggleChargeQtyEdit() {
        this.editproductData.extraCharges.chargeAllQty = !this.editproductData.extraCharges.chargeAllQty;
    }
    toggleShowSubheadingEdit() {
        this.editproductData.showSubheading = !this.editproductData.showSubheading;
    }
    activeVariantGroups() {
        this.product.variantGroups.active = !this.product.variantGroups.active;
    }
    activeVariantGroupsEdit() {
        if (this.editproductData.variantGroups) {
            this.editproductData.variantGroups.active = !this.editproductData.variantGroups.active;
        }
    }
    activePriceSlab() {
        this.product.priceSlabs.active = !this.product.priceSlabs.active;
    }
    activePriceSlabEdit() {
        if (this.editproductData.priceSlabs) {
            this.editproductData.priceSlabs.active = !this.editproductData.priceSlabs.active;
        }
    }
    enterPriceSlabData(type, weight) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let weightValue = weight;
            if (type === 'edit') {
                let adminInput;
                adminInput = [
                    {
                        name: 'qty',
                        type: 'number',
                        placeholder: "Add quantity for slab"
                    },
                    {
                        name: 'mrp',
                        type: 'number',
                        placeholder: "Add price"
                    },
                    {
                        name: 'price',
                        type: 'number',
                        placeholder: "Add discount price"
                    }
                ];
                const alert = yield this.alertController.create({
                    subHeader: "Enter Slab Details",
                    inputs: adminInput,
                    buttons: [
                        {
                            text: "cancel",
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                                console.log('Confirm Cancel');
                            }
                        }, {
                            text: "done",
                            handler: (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                if (!data.qty || !data.price || !data.mrp) {
                                    this.presentAlert("Please enter all details!");
                                }
                                else {
                                    if (this.editproductData.isPriceList && this.editproductData.priceList && this.editproductData.priceList.length > 0) {
                                        if (!this.editproductData.priceSlabs.variantSlabs[weightValue]) {
                                            this.editproductData.priceSlabs.variantSlabs[weightValue] = [];
                                        }
                                        if (this.editproductData.priceSlabs.variantSlabs[weightValue].length == 0) {
                                            this.editproductData.priceSlabs.variantSlabs[weightValue].push({
                                                qty: [1, 1 + parseInt(data.qty)],
                                                mrp: parseFloat(data.mrp),
                                                price: parseFloat(data.price)
                                            });
                                        }
                                        else {
                                            let lastIndex = this.editproductData.priceSlabs.variantSlabs[weightValue].length;
                                            this.editproductData.priceSlabs.variantSlabs[weightValue].push({
                                                qty: [this.editproductData.priceSlabs.variantSlabs[weightValue][lastIndex - 1].qty[1],
                                                    this.editproductData.priceSlabs.variantSlabs[weightValue][lastIndex - 1].qty[1] + parseInt(data.qty)],
                                                mrp: parseFloat(data.mrp),
                                                price: parseFloat(data.price)
                                            });
                                        }
                                    }
                                    else {
                                        if (this.editproductData.priceSlabs.singleSlabs.length == 0) {
                                            this.editproductData.priceSlabs.singleSlabs.push({
                                                qty: [1, 1 + parseInt(data.qty)],
                                                mrp: parseFloat(data.mrp),
                                                price: parseFloat(data.price)
                                            });
                                        }
                                        else {
                                            let lastIndex = this.editproductData.priceSlabs.singleSlabs.length;
                                            this.editproductData.priceSlabs.singleSlabs.push({
                                                qty: [this.editproductData.priceSlabs.singleSlabs[lastIndex - 1].qty[1],
                                                    this.editproductData.priceSlabs.singleSlabs[lastIndex - 1].qty[1] + parseInt(data.qty)],
                                                mrp: parseFloat(data.mrp),
                                                price: parseFloat(data.price)
                                            });
                                        }
                                    }
                                }
                            })
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                let adminInput;
                adminInput = [
                    {
                        name: 'qty',
                        type: 'number',
                        placeholder: "Add quantity for slab"
                    },
                    {
                        name: 'mrp',
                        type: 'number',
                        placeholder: "Add price"
                    },
                    {
                        name: 'price',
                        type: 'number',
                        placeholder: "Add discount price"
                    }
                ];
                const alert = yield this.alertController.create({
                    subHeader: "Enter Slab Details",
                    inputs: adminInput,
                    buttons: [
                        {
                            text: "cancel",
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                                console.log('Confirm Cancel');
                            }
                        }, {
                            text: "done",
                            handler: (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                if (!data.qty || !data.price || !data.mrp) {
                                    this.presentAlert("Please enter all details!");
                                }
                                else {
                                    if (this.product.isPriceList && this.product.priceList && this.product.priceList.length > 0) {
                                        if (!this.product.priceSlabs.variantSlabs[weightValue]) {
                                            this.product.priceSlabs.variantSlabs[weightValue] = [];
                                        }
                                        if (this.product.priceSlabs.variantSlabs[weightValue].length == 0) {
                                            this.product.priceSlabs.variantSlabs[weightValue].push({
                                                qty: [1, 1 + parseInt(data.qty)],
                                                mrp: parseFloat(data.mrp),
                                                price: parseFloat(data.price)
                                            });
                                        }
                                        else {
                                            let lastIndex = this.product.priceSlabs.variantSlabs[weightValue].length;
                                            this.product.priceSlabs.variantSlabs[weightValue].push({
                                                qty: [this.product.priceSlabs.variantSlabs[weightValue][lastIndex - 1].qty[1],
                                                    this.product.priceSlabs.variantSlabs[weightValue][lastIndex - 1].qty[1] + parseInt(data.qty)],
                                                mrp: parseFloat(data.mrp),
                                                price: parseFloat(data.price)
                                            });
                                        }
                                    }
                                    else {
                                        if (this.product.priceSlabs.singleSlabs.length == 0) {
                                            this.product.priceSlabs.singleSlabs.push({
                                                qty: [1, 1 + parseInt(data.qty)],
                                                mrp: parseFloat(data.mrp),
                                                price: parseFloat(data.price)
                                            });
                                        }
                                        else {
                                            let lastIndex = this.product.priceSlabs.singleSlabs.length;
                                            this.product.priceSlabs.singleSlabs.push({
                                                qty: [this.product.priceSlabs.singleSlabs[lastIndex - 1].qty[1],
                                                    this.product.priceSlabs.singleSlabs[lastIndex - 1].qty[1] + parseInt(data.qty)],
                                                mrp: parseFloat(data.mrp),
                                                price: parseFloat(data.price)
                                            });
                                        }
                                    }
                                }
                            })
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    getEditSlabInputs(slab) {
        let adminInput;
        adminInput = [
            {
                name: 'mrp',
                type: 'number',
                placeholder: "Edit price",
                value: slab.mrp
            },
            {
                name: 'price',
                type: 'number',
                placeholder: "Edit discount price",
                value: slab.price
            }
        ];
        return adminInput;
    }
    editPriceSlabDataForSingleSlab(index, slab) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                subHeader: "Edit Slab Details",
                inputs: this.getEditSlabInputs(slab),
                buttons: [
                    {
                        text: "cancel",
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: "done",
                        handler: (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            if (!data.price || !data.mrp) {
                                this.presentAlert("Please enter all details!");
                            }
                            else {
                                this.editproductData.priceSlabs.singleSlabs[index]['mrp'] = parseFloat(data.mrp);
                                this.editproductData.priceSlabs.singleSlabs[index]['price'] = parseFloat(data.price);
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    editPriceSlabDataForVariantSlab(index, slab, weight) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                subHeader: "Edit Slab Details",
                inputs: this.getEditSlabInputs(slab),
                buttons: [
                    {
                        text: "cancel",
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: "done",
                        handler: (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            if (!data.price || !data.mrp) {
                                this.presentAlert("Please enter all details!");
                            }
                            else {
                                this.editproductData.priceSlabs.variantSlabs[weight][index]['mrp'] = parseFloat(data.mrp);
                                this.editproductData.priceSlabs.variantSlabs[weight][index]['price'] = parseFloat(data.price);
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    removePriceSlabs(type, weight) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (type === 'edit') {
                const alert = yield this.alertController.create({
                    subHeader: "Are you sure you want to remove all slabs?",
                    buttons: [
                        {
                            text: "No",
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                            }
                        }, {
                            text: "Yes",
                            handler: (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                if (weight != '') {
                                    // this.editproductData.priceSlabs.variantSlabs[weight] = []
                                    delete this.editproductData.priceSlabs.variantSlabs[weight];
                                }
                                else {
                                    this.editproductData.priceSlabs.singleSlabs = [];
                                }
                            })
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                const alert = yield this.alertController.create({
                    subHeader: "Are you sure you want to remove all slabs?",
                    buttons: [
                        {
                            text: "No",
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                            }
                        }, {
                            text: "Yes",
                            handler: (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                if (weight != '') {
                                    // this.product.priceSlabs.variantSlabs[weight] = []
                                    delete this.product.priceSlabs.variantSlabs[weight];
                                }
                                else {
                                    this.product.priceSlabs.singleSlabs = [];
                                }
                            })
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    enterVariantGroupsData(type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let groupData = {
                name: this.groupName,
                variants: this.groupOptions
            };
            if (type == 'new') {
                this.product.variantGroups.groups.push(groupData);
            }
            else {
                this.editproductData.variantGroups.groups.push(groupData);
            }
        });
    }
    deleteVariantGroup(type, index) {
        if (type == 'new') {
            this.product.variantGroups.groups.splice(index, 1);
        }
        else {
            this.editproductData.variantGroups.groups.splice(index, 1);
        }
    }
    // changeComponent(index) {
    changeComponent(name) {
        let prevMsgDiv = document.getElementById(this.selectedId);
        prevMsgDiv.style.background = 'white';
        // let msgDiv = document.getElementById(index.toString());
        let msgDiv = document.getElementById(name.toString());
        msgDiv.style.background = 'var(--ion-color-categories-background)';
        // this.selectedId = index.toString()
        this.selectedId = name.toString();
    }
    saveVariantImage(image) {
        this.currentImage = image;
    }
    onClickVariantOption(variantIndex, imgIndex) {
        console.log('onClickVariantOption...');
        const variant = this.editproductData.priceList[variantIndex];
        if (variant.images) {
            const index = variant.images.findIndex(img => img.url === this.editproductData.images[imgIndex].url);
            if (index !== -1) {
                this.editproductData.priceList[variantIndex].images.splice(index, 1);
            }
            else {
                this.editproductData.priceList[variantIndex].images.push(this.editproductData.images[imgIndex]);
            }
        }
        else {
            this.editproductData.priceList[variantIndex].images = [this.editproductData.images[imgIndex]];
        }
        console.log('this.editproductData.priceList', this.editproductData.priceList);
    }
    onChangeVariantImg(e, imgIndex) {
        const values = e.target.value;
        // console.log('values', values);
        for (let [i, variant] of this.editproductData.priceList.entries()) {
            //variant.images = [];
            if (values.includes(variant.weight)) {
                if (variant.images && variant.images.length) {
                    if (!variant.images.some(img => img.url === this.editproductData.images[imgIndex].url)) {
                        variant.images.push(this.editproductData.images[imgIndex]);
                    }
                }
                else {
                    variant.images = [this.editproductData.images[imgIndex]];
                }
            }
            else {
                if (variant.images && variant.images.length) {
                    const index = variant.images.findIndex(img => img.url == this.editproductData.images[imgIndex].url);
                    if (index > -1) {
                        console.log('i,index:', i, index);
                        console.log('this.editproductData.priceList[i].images[index]:', this.editproductData.priceList[i].images[index]);
                        this.editproductData.priceList[i].images.splice(index, 1);
                    }
                }
            }
        }
        //console.log('this.editproductData.priceList', this.editproductData.priceList);
    }
    getVariantImgsValues(imgIndex) {
        let variants = [];
        for (const variant of this.editproductData.priceList) {
            if (variant.images && variant.images.some(img => img.url === this.editproductData.images[imgIndex].url)) {
                variants.push(variant.weight);
            }
        }
        return variants;
    }
    onChangeVariantImage(event, i) {
        let imageObj = {
            mob: this.currentImage.mob,
            thumb: this.currentImage.thumb,
            url: this.currentImage.url
        };
        if (this.currentVariants[i]) {
            //removing unselected variants
            let removeArray = this.currentVariants[i].filter(x => !event.target.value.includes(x));
            console.log('removeArr:', removeArray);
            for (const weight of removeArray) {
                let index = this.editproductData.priceList.findIndex(e => e.weight == weight);
                let imageIndex = this.editproductData.priceList[index].images.findIndex(e => e.mob == imageObj.mob);
                this.editproductData.priceList[index].images.splice(imageIndex, 1);
            }
            //adding new selected variants
            console.log('currentVariants:', this.currentVariants);
            let addArray = event.target.value.filter(x => !this.currentVariants[i].includes(x));
            console.log('addArr:', addArray);
            for (const weight of addArray) {
                let index = this.editproductData.priceList.findIndex(e => e.weight == weight);
                console.log('index:', index);
                if (!this.editproductData.priceList[index].images) {
                    this.editproductData.priceList[index].images = [];
                }
                else {
                    console.log('inside else with index:', index);
                    this.editproductData.priceList[index].images.push(imageObj);
                }
            }
        }
        else {
            for (const weight of event.target.value) {
                let index = this.editproductData.priceList.findIndex(e => e.weight == weight);
                if (!this.editproductData.priceList[index].images) {
                    this.editproductData.priceList[index].images = [];
                }
                else {
                    this.editproductData.priceList[index].images.push(imageObj);
                }
            }
        }
    }
    toggleAdditionalInfo(infoType, prodType) {
        if (prodType == 'new') {
            this.product.additionalInfo[infoType].active = !this.product.additionalInfo[infoType].active;
        }
        else {
            this.editproductData.additionalInfo[infoType].active = !this.editproductData.additionalInfo[infoType].active;
        }
    }
    removeAdditionalInfoImg(infoType, prodType) {
        if (prodType == 'new') {
            this.product.additionalInfo[infoType].img.url = '';
        }
        else if (prodType == 'edit') {
            this.editproductData.additionalInfo[infoType].img.url = '';
        }
    }
    uploadChart(files, infoType, prodType) {
        for (let i = 0; i < files.length; i++) {
            let reader = new FileReader();
            reader.readAsDataURL(files.item(i));
            reader.onload = (event) => {
                let base64Image = event.target.result;
                if (prodType == 'new') {
                    this.product.additionalInfo[infoType].img.url = base64Image;
                }
                else {
                    this.editproductData.additionalInfo[infoType].img.url = base64Image;
                }
            };
        }
    }
    changeRetailDiscountType() {
        let type = this.editproductId ? this.editproductData.retailDiscountType : this.product.retailDiscountType;
        if (type === 'percentage') {
            type = 'flat';
        }
        else {
            type = 'percentage';
        }
        this[this.editproductId ? 'editproductData' : 'product'].retailDiscountType = type;
    }
    getUpdatedFields(data) {
        if (!data.hasOwnProperty('deal')) {
            data['deal'] = this.product.deal;
        }
        if (data.metaData) {
            this.metaData = data.metaData;
        }
        if (!data.hasOwnProperty('vendorId')) {
            data['vendorId'] = this.product.vendorId;
        }
        if (!data.hasOwnProperty('filters')) {
            data['filters'] = this.product.filters;
        }
        if (!data.hasOwnProperty('extraCharges')) {
            data['extraCharges'] = this.product.extraCharges;
        }
        if (!data.hasOwnProperty('gstExclusive')) {
            data['gstExclusive'] = this.product.gstExclusive;
        }
        if (!data.hasOwnProperty('isCod')) {
            data['isCod'] = this.product.isCod;
        }
        if (!data.hasOwnProperty('priceSlabs')) {
            data['priceSlabs'] = this.product.priceSlabs;
        }
        if (!data.hasOwnProperty('variantGroups')) {
            data['variantGroups'] = this.product.variantGroups;
        }
        if (!data.hasOwnProperty('retailDiscountType')) {
            data['retailDiscountType'] = this.product.retailDiscountType;
        }
        if (!data.hasOwnProperty('images')) {
            data['images'] = this.product.images;
        }
        return data;
    }
    cloneProduct() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const cloneAlert = yield this.alertController.create({
                subHeader: 'Clone Product',
                message: 'Use this to make clone of this product.',
                inputs: [
                    {
                        name: 'clones',
                        type: 'number',
                        placeholder: 'Enter the number of clones you want to make'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Add',
                        handler: (alertData) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            const clones = parseInt(alertData.clones);
                            if (clones) {
                                console.log('editproductId', this.editproductId);
                                yield this.productService.makeProductClones(clones, this.editproductId);
                                this.presentAlert('Clones successful', 'Product Clones will be created in couple of minutes');
                            }
                            else {
                                this.presentAlert('Warning', 'Provide valid input');
                            }
                        })
                    }
                ]
            });
            yield cloneAlert.present();
        });
    }
    getSelectedValueOfProductType() {
        if (['single', 'variant'].includes(this.editproductData.productType) || !this.editproductData.productType) {
            if (this.editproductData.isPriceList) {
                return 'variant';
            }
            else {
                return 'single';
            }
        }
        else {
            return this.editproductData.productType;
        }
    }
    toggleBundleProducts(mode) {
        if (mode == 'new') {
            this.product.bundleProducts.active = !this.product.bundleProducts.active;
        }
        else {
            this.editproductData.bundleProducts.active = !this.editproductData.bundleProducts.active;
        }
    }
    presentProductsModal(mode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _products_modal_products_modal_page__WEBPACK_IMPORTED_MODULE_23__["ProductsModalPage"],
                backdropDismiss: false,
                cssClass: "custom-modal",
                componentProps: {
                    isBundleProducts: true,
                    bundleList: this.editproductData ? this.editproductData.bundleProducts.products : this.product.bundleProducts.products,
                }
            });
            modal.onDidDismiss()
                .then((res) => {
                if (res.data && res.data.length) {
                    for (let resData of res.data) {
                        if (mode == 'new') {
                            // this.product.bundleProducts.products.push({id: res.data.id, name: res.data.name});
                            this.product.bundleProducts.products.push({ id: resData.id, name: resData.name });
                        }
                        else {
                            // this.editproductData.bundleProducts.products.push({id: res.data.id, name: res.data.name});
                            this.editproductData.bundleProducts.products.push({ id: resData.id, name: resData.name });
                        }
                    }
                    // console.log('res.data',res.data);
                    // this.limits[index].product.id = res.data.id;
                    // this.limits[index].product.name = res.data.name;
                    // if (res.data.variant) {
                    //   this.limits[index].product['variant'] = res.data.variant;
                    //   this.limits[index].product.type = 'variant';
                    // } else{
                    //   this.limits[index].product.type = 'single';
                    //   delete this.limits[index].product['variant'];
                    // }
                    // console.log('variant:', this.limits[index].product['variant']);
                }
            });
            yield modal.present();
        });
    }
    removeBundleProduct(index, mode) {
        if (mode === 'new') {
            this.product.bundleProducts.products.splice(index, 1);
        }
        else {
            this.editproductData.bundleProducts.products.splice(index, 1);
        }
    }
    // ? Toggle checkbox function for various input.
    toggleCheckbox(type) {
        if (type == 'allRegions') {
            this.allRegions.active = !this.allRegions.active;
        }
    }
    // ? Toggle checkbox function for various input.
    removeSubscriptions() {
        this.events.unsubscribe('product:addSuccess');
        this.events.unsubscribe('product:addFailure');
        this.events.unsubscribe('product:editSuccess');
        this.events.unsubscribe('product:editFailure');
        this.events.unsubscribe('product-options:editSuccess');
        this.events.unsubscribe('product-options:editFailure');
        this.events.unsubscribe('product:deleteSuccess');
        this.events.unsubscribe('product:deleteFailure');
        this.events.unsubscribe('product:publishAllCategoriesForAdmin');
        this.events.unsubscribe('product:publishgetProductWithId');
        this.events.unsubscribe('variants:publishVariantsTypeData');
        this.events.unsubscribe('product-options:publishOptionData');
        this.events.unsubscribe('product-options:deleteProductOptionSuccess');
        this.events.unsubscribe('brands:publishAllBrandsForAdmin');
        this.events.unsubscribe('brands:noBrandAvailableForAdmin');
        this.events.unsubscribe('vendor:publishActiveStatus');
        //this.events.unsubscribe('vendor:publishAllVendors');
        this.events.unsubscribe('product:noCategoryAvailable');
        this.events.unsubscribe('filters:publishActiveStatus');
        this.events.unsubscribe('vendor:getVendorNameSuccess');
    }
    uploadImage(files) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_20__["ImageEditorComponent"],
                componentProps: {
                    aspectRatioWidthVal: this.customWidthVal,
                    aspectRatioHeightVal: this.customHeightVal,
                },
                cssClass: 'custom-img-editor'
            });
            yield modal.present();
            modal.onDidDismiss().then(res => {
                console.log('res', res);
                if (res && res.data) {
                    let size = this.calculateImageSize(res.data || '');
                    console.log('fileSize :', size);
                    if (this.product) {
                        this.product.instaCoverImage = res.data;
                    }
                    if (this.editproductData) {
                        this.editproductData.instaCoverImage = res.data;
                    }
                    console.log('this.product.instaCoverImage', this.product.instaCoverImage);
                }
            });
        });
    }
    removeReelCoverImage() {
        this.product.instaCoverImage = '';
    }
    toggleVideoFeature() {
        this.video.active = !this.video.active;
    }
    uploadDocument(event, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const file = event.target.files[0];
            console.log('file: ', file);
            const base64 = yield this.productService.getBase64FromFile(file);
            console.log('base64: ', base64);
            if (type === 'video') {
                this.video.link = base64;
            }
            else {
                this.video.thumbnail = base64;
            }
        });
    }
    addVideo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (!this.video.link || !this.video.thumbnail) {
                    this.sharedService.presentAlert('Please enter a video and thumbnail');
                    return;
                }
                yield this.sharedService.presentLoading('Please Wait...', 10000);
                const videoRoute = `products/${this.editproductId}/instagram/video`;
                this.video.link = yield this.productService.getUrlForUploadedFile(this.video.link, videoRoute);
                console.log("this.video.link", this.video.link);
                const thumbRoute = `products/${this.editproductId}/instagram/thumb`;
                this.video.thumbnail = yield this.productService.getUrlForUploadedFile(this.video.thumbnail, thumbRoute);
                console.log("this.video.thumbnail", this.video.thumbnail);
                yield this.sharedService.loading.dismiss();
                yield this.sharedService.presentAlert('image uploaded successfully, now save the product');
            }
            catch (err) {
                console.error('add item err', err);
            }
        });
    }
};
NewProductPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["ImagePicker"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"] },
    { type: src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestore"] },
    { type: src_app_services_label_label_service__WEBPACK_IMPORTED_MODULE_12__["LabelService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"] },
    { type: src_app_services_vendor_vendor_service__WEBPACK_IMPORTED_MODULE_15__["VendorService"] },
    { type: src_app_services_attributes_attributes_service__WEBPACK_IMPORTED_MODULE_21__["AttributesService"] },
    { type: src_app_services_widgets_widgets_service__WEBPACK_IMPORTED_MODULE_22__["WidgetsService"] },
    { type: src_app_services_multi_region_multi_region_service__WEBPACK_IMPORTED_MODULE_24__["MultiRegionService"] },
    { type: src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_25__["SharedService"] },
    { type: src_app_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_26__["CategoriesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], NewProductPage.prototype, "content", void 0);
NewProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-product',
        template: __webpack_require__(/*! raw-loader!./new-product.page.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-shop/new-product/new-product.page.html"),
        styles: [__webpack_require__(/*! ./new-product.page.scss */ "./src/app/admin/admin-shop/new-product/new-product.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["ImagePicker"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"],
        src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestore"],
        src_app_services_label_label_service__WEBPACK_IMPORTED_MODULE_12__["LabelService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"],
        src_app_services_vendor_vendor_service__WEBPACK_IMPORTED_MODULE_15__["VendorService"],
        src_app_services_attributes_attributes_service__WEBPACK_IMPORTED_MODULE_21__["AttributesService"],
        src_app_services_widgets_widgets_service__WEBPACK_IMPORTED_MODULE_22__["WidgetsService"],
        src_app_services_multi_region_multi_region_service__WEBPACK_IMPORTED_MODULE_24__["MultiRegionService"],
        src_app_services_shared_shared_service__WEBPACK_IMPORTED_MODULE_25__["SharedService"],
        src_app_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_26__["CategoriesService"]])
], NewProductPage);



/***/ }),

/***/ "./src/app/pipes/application-pipes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pipes/application-pipes.module.ts ***!
  \***************************************************/
/*! exports provided: ApplicationPipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationPipesModule", function() { return ApplicationPipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-ago.pipe */ "./src/app/pipes/date-ago.pipe.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _safe_item_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./safe-item.pipe */ "./src/app/pipes/safe-item.pipe.ts");




let ApplicationPipesModule = class ApplicationPipesModule {
};
ApplicationPipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [],
        declarations: [
            _date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__["DateAgoPipe"],
            _safe_item_pipe__WEBPACK_IMPORTED_MODULE_3__["SafeItemPipe"]
        ],
        exports: [
            _date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__["DateAgoPipe"],
            _safe_item_pipe__WEBPACK_IMPORTED_MODULE_3__["SafeItemPipe"]
        ]
    })
], ApplicationPipesModule);



/***/ }),

/***/ "./src/app/pipes/date-ago.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/date-ago.pipe.ts ***!
  \****************************************/
/*! exports provided: DateAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function() { return DateAgoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DateAgoPipe = class DateAgoPipe {
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago'; // singular (1 day ago)
                    }
                    else {
                        return counter + ' ' + i + 's ago'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }
};
DateAgoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dateAgo',
        pure: true
    })
], DateAgoPipe);



/***/ }),

/***/ "./src/app/pipes/safe-item.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/safe-item.pipe.ts ***!
  \*****************************************/
/*! exports provided: SafeItemPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeItemPipe", function() { return SafeItemPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafeItemPipe = class SafeItemPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        if (!value)
            return value;
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
};
SafeItemPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafeItemPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safeItem'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], SafeItemPipe);



/***/ })

}]);
//# sourceMappingURL=admin-admin-shop-new-product-new-product-module-es2015.js.map