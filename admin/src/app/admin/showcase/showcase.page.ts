import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, Events, LoadingController, AlertController, IonContent, Platform, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { BrandsService } from 'src/app/services/brands/brands.service';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { ExportToCsv } from 'export-to-csv';
import { VendorService } from 'src/app/services/vendor/vendor.service';
import { ProductTypeComponent } from '../admin-shop/new-product/product-type/product-type.component';
import { FiltersService } from 'src/app/services/filters/filters.service';
import { ShowcaseService } from 'src/app/services/showcase/showcase.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.page.html',
  styleUrls: ['./showcase.page.scss'],
})
export class ShowcasePage implements OnInit {

  productsData: any[] = [];
  allProductsData: any[] = [];
  prod: any = [];
  loading: any;
  loader: any;
  devHeight: any;
  showNoProducts: boolean = false;
  searchProduct: string = '';
  noMoreProducts: boolean = false;
  typingTimer;
  doneTypingInterval = 1000;
  showSearch: boolean = false;
  @ViewChild(IonContent, { static: false }) content: IonContent;
  showSearchLoader: boolean = false;
  noPreviousProducts: boolean = true;
  // totalProducts: number;
  totalProductsLoader: boolean = true;
  copiesAlert: any;
  page: number = 0;
  noMoreSearchProducts: boolean = false;
  subcateogries: any;
  options = {
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
  editLoader: HTMLIonLoadingElement;
  categories: any
  brands: any
  allSubcategories: any;
  // Vendor Login
  userRole;
  userId;
  vendorInfo;
  productsInactive;
  previousId: string = 'status1';
  dataList: any = [];
  dataType: string = '';
  previousBrand = 'brand0'
  previousCategory = 'category0'
  previousListItem = 'status1'
  selectedSubcatId: any;
  noMoreCategoryProducts: boolean = false;

  constructor(
    public modalController: ModalController,
    private events: Events,
    private router: Router,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private filtersService: FiltersService,
    // private bookingService: BookingService,
    private showcaseService: ShowcaseService,
    private platform: Platform,
    private storage: Storage,
    private toastController: ToastController,
    private brandService: BrandsService,
    private vendorService: VendorService
  ) { }

  ngOnInit() {
    this.initializeSubscriptions()
    this.events.publish('showcase:getProductsForAdminProducts');
  }

  async saveProduct(itemData, itemID) {
    this.events.subscribe('showcase:editSuccess', (heading, desc) => {
      //console.log('in edit success sub');
      if (this.editLoader) {
        this.editLoader.dismiss();
      }
      this.events.unsubscribe('showcase:editSuccess');
      this.presentAlert(heading, desc);
    });
    this.events.subscribe('showcase:editFailure', (heading, desc) => {
      if (this.editLoader) {
        this.editLoader.dismiss();
      }
      this.events.unsubscribe('showcase:editFailure');
      this.presentAlert(heading, desc);
    });

    if (itemData.discountedPrice === null) {
      itemData.discountedPrice = itemData.prodPrice;
    }
    itemData.discount = parseFloat((((itemData.prodPrice - itemData.discountedPrice) / itemData.prodPrice) * 100).toFixed(2));

    if (!itemData.prodPrice) {
      console.log(itemData, itemData.prodPrice);
      this.presentAlert('', 'Please enter product price');
    }
    else {
      this.editLoader = await this.loadingController.create({
        message: 'Please Wait...',
      });
      await this.editLoader.present();
      itemData.updatedAt = new Date();
      itemData.discountedPrice = itemData.discountedPrice ? itemData.discountedPrice : null;
      itemData.productQty = itemData.productQty ? itemData.productQty : '';
      itemData.purchasePrice = itemData.purchasePrice ? itemData.purchasePrice : null;

      let productData = {
        discount: itemData.discount,
        discountedPrice: itemData.discountedPrice,
        // isPriceList: itemData.isPriceList,
        // priceList: itemData.priceList ? itemData.priceList : [],
        // prodPrice: itemData.prodPrice,
        price: itemData.prodPrice,
        // productQty: itemData.productQty,
        qty: itemData.productQty,
        purchasePrice: itemData.purchasePrice
      }

      this.events.publish('showcase:editProduct', productData, itemID, [], '');
    }
  }


  getDateTimeFormat(date) {
    return moment(date).format('MMM D, YYYY hh:mm a');
  }
  ionViewWillEnter() {
    this.devHeight = this.platform.height();
    // this.events.publish('showcase:getAnalyticsProductsCount');
    if (this.searchProduct && this.searchProduct != '') {
      this.fireSearchQuery()
    }
    //console.log('height of device...', this.devHeight);
  }
  ionViewWillLeave() {
    //console.log('ionViewWillLeave');
    this.showSearch = false;

  }
  ngOnDestroy() {
    this.removeSubscriptions();
  }
  async initializeSubscriptions() {
    this.userRole = await this.storage.get('userRole');
    this.userId = await this.storage.get('uid');
    if (this.userRole == 'vendor') {
      this.vendorInfo = await this.vendorService.getVendorData(this.userId, 'details');
      if (this.vendorInfo) {
        this.productsInactive = this.vendorInfo.productsInactive ? this.vendorInfo.productsInactive : false;
      }
    }

    this.events.subscribe('showcase:publishProductsForAdminProducts', (products) => {
      //console.log('in all products SUBSCRIPTION');
      this.productsData = products;
      this.showNoProducts = false;
      this.showSearchLoader = false;
      if (this.loading) {
        this.loading.dismiss();
      }
      // console.log('all products', this.productsData);
    });
    this.events.subscribe('showcase:publishAllProductsForAdminProducts', async (products) => {
      this.allProductsData = products;
      this.showNoProducts = false;
      this.showSearchLoader = false;
      if (!this.categories) {
        this.categories = await this.showcaseService.getAllCategoriesForSideMenu()
      }
      if (!this.brands) {
        this.brands = await this.brandService.getAllBrandsForSideMenu()
      }
      if (!this.allSubcategories) {
        this.allSubcategories = await this.showcaseService.getAllSubcategoriesForSideMenu()
      }
      this.exportProducts()
    });
    this.events.subscribe('showcase:noProductsAvailable', () => {
      if (this.loading) {
        this.loading.dismiss();
      }
      this.showNoProducts = true;
      this.showSearchLoader = false;
    });
    this.events.subscribe('showcase:productsForAdminProductsLimitReached', () => {
      if (this.loading) {
        this.loading.dismiss();
      }
      this.noMoreProducts = true;
      this.loading.dismiss();
    });
    this.events.subscribe('showcase:previousProductsForAdminProductsLimitReached', () => {
      if (this.loading) {
        this.loading.dismiss();
      }
      this.noPreviousProducts = true;
      this.loading.dismiss();
    });
    this.events.subscribe('showcase:deleteSuccess', (heading, msg) => {
      if (this.loading) {
        this.loading.dismiss();
      }
      this.presentAlert(heading, msg);
      // this.events.publish('showcase:getProductsForAdminProducts');
      //this.events.publish('showcase:getProductsForAdminProducts');
    });
    this.events.subscribe('showcase:deleteFailure', (heading, msg) => {
      if (this.loading) {
        this.loading.dismiss();
      }
      this.presentAlert(heading, msg);
    });
    // this.events.subscribe('showcase:publishAnalyticsProductsCount', (count) => {
    //   if (this.loading) {
    //     this.loading.dismiss();
    //   }
    //   this.totalProducts = count;
    //   this.totalProductsLoader = false;
    // });
    this.events.subscribe('showcase:makeProductCopiesSuccess', () => {
      if (this.loading) {
        this.loading.dismiss();
      }
      this.presentAlert('', 'Options of the product has been added successfully.');
    });
    this.events.subscribe('showcase:makeProductCopiesFailure', () => {
      if (this.loading) {
        this.loading.dismiss();
      }
      this.presentAlert('', 'There is some problem in adding options of the product.');
    });
    this.events.subscribe('search-engine:noAdminSearchProductsAvailable', () => {
      if (this.loading) {
        this.loading.dismiss();
      }
      this.showNoProducts = true;
      this.showSearchLoader = false;
    });
    this.events.subscribe('search-engine:noMoreAdminSearchProducts', () => {
      if (this.loading) {
        this.loading.dismiss();
      }
      this.noMoreSearchProducts = true;
      this.showSearchLoader = false;
    });
    this.events.subscribe('showcase:publishSubcategories', (data) => {
      if (this.loading) {
        this.loading.dismiss();
      }
      this.subcateogries = data;
    });
  }
  async loadMoreProducts() {
    //console.log('loading more data...');
    this.noPreviousProducts = false;
    await this.presentLoading();
    this.events.publish('showcase:loadMoreProductsForAdminProducts');
    // this.content.scrollToTop(0);
  }

  async loadMoreCategoryProducts() {
    await this.presentLoading();
    const products: any = await this.showcaseService.loadMoreCategoryProducts(this.selectedSubcatId);
    console.log('products:', products);
    if (products && products.length) {
      this.productsData = products;
      this.showNoProducts = false;
      this.showSearchLoader = false;
    } else {
      this.noMoreCategoryProducts = true;
    }
    if (this.loading) {
      this.loading.dismiss();
    }
  }

  async loadPreviousProducts() {
    this.noMoreProducts = false;
    await this.presentLoading();
    this.events.publish('showcase:loadPreviousProductsForAdminProducts');
    // this.content.scrollToTop(0);
  }
  editProduct(item: any) {
    if (item.data.productType && item.data.productType == 'appointment') {
      const navigationExtras: NavigationExtras = {
        state: {
          productId: item.id,
          productData: item.data
        }
      };
      this.router.navigate(['appointment'], navigationExtras);
    }
    else {
      const navigationExtras: NavigationExtras = {
        state: {
          productId: item.id
        }
      };
      this.router.navigate(['create-showcase'], navigationExtras);
    }
  }
  fireSearchQuery() {
    clearTimeout(this.typingTimer);
    if (this.searchProduct.length > 2) {
      this.typingTimer = setTimeout(() => {
        // console.log('in fireSearchQuery...');
        this.showSearchLoader = true;
        this.events.publish('search-engine:alogoliaSearchProductsForAdmin', this.searchProduct, 0, 'new_search');
      }, this.doneTypingInterval);

    } else {
      if (!this.searchProduct.length) {
        this.events.publish('showcase:getProductsForAdminProducts');
      }
    }

  }
  async searchMoreProducts(event) {
    // console.log('loading more data...');
    this.page = this.page + 1;
    this.events.publish('search-engine:alogoliaSearchProductsForAdmin', this.searchProduct, this.page, 'existing_search');
    setTimeout(() => {
      event.target.complete();
    }, 1000);
    if (this.noMoreSearchProducts === true) {
      event.target.disabled = true;
    }
  }
  async deleteProduct(itemId: string, index: number) {
    this.loading = await this.loadingController.create({
      message: 'Please Wait...',
      duration: 3000
    });
    await this.loading.present();
    this.events.publish('showcase:deleteProduct', itemId);
    this.productsData.splice(index, 1);
  }
  async deleteAlertConfirm(itemId: string, index: number) {
    const alert = await this.alertController.create({
      message: 'Are you sure you want to delete this product',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            //console.log('Confirm Okay');
            this.deleteProduct(itemId, index);
          }
        }
      ]
    });

    await alert.present();
  }

  async checkForProdLimit() {
    const allProds: any = await this.showcaseService.getAllProductsForVendor();
    console.log('this.vendorInfo.productLimit:', this.vendorInfo.productLimit, 'allProd:', allProds.length)
    if ('productLimit' in this.vendorInfo && this.vendorInfo.productLimit != null) {
      if (this.vendorInfo.productLimit > allProds.length) {
        const modal = await this.modalController.create({
          component: ProductTypeComponent,
          cssClass: 'custom-modal small-modal',
        });
        await modal.present();
      } else {
        this.presentAlert('Limit Reached', 'Products Adding Limit Reached, contact admin for more information');
      }
    } else {
      const modal = await this.modalController.create({
        component: ProductTypeComponent,
        cssClass: 'custom-modal small-modal',
      });
      await modal.present();
    }
  }

  async goToAddNew() {
    if (this.userRole == 'vendor' && this.vendorInfo) {
      this.checkForProdLimit()
    } else {
      const navigationExtras: NavigationExtras = {
        // state: {
        //   type: type
        // }
      };
      this.router.navigate(['create-showcase'], navigationExtras);
    }
  }
  clearSearchProduct() {
    this.searchProduct = '';
    this.events.publish('showcase:getProductsForAdminProducts');
  }

  async addOptions(copies: number, item: any) {
    this.copiesAlert.dismiss();
    await this.presentLoading();
    this.events.publish('showcase:makeProductCopies', copies, item)
  }

  checkPdtOutOfDelivery(pdt: any) {
    //console.log('in checkPdtOutOfDelivery...');
    let isOutOfStock = false;
    if (pdt.data.stopWhenNoQty) {
      // if (!pdt.data.isPriceList) {
      if (pdt.data.productQty === '0') {
        isOutOfStock = true;
      }
      // } else {
      //   for (let pl of pdt.data.priceList) {
      //     if (pl.totalQuantity === '0') {
      //       isOutOfStock = true;
      //       break;
      //     }
      //   }
      // }
    }
    //console.log('isOutOfStock', isOutOfStock);
    return isOutOfStock;
  }

  removeSubscriptions() {
    this.events.unsubscribe('showcase:publishProductsForAdminProducts');
    this.events.unsubscribe('showcase:deleteSuccess');
    this.events.unsubscribe('showcase:deleteFailure');
    this.events.unsubscribe('showcase:noProductsAvailable');
    this.events.unsubscribe('showcase:productsForAdminProductsLimitReached');
    this.events.unsubscribe('showcase:previousProductsForAdminProductsLimitReached');
    // this.events.unsubscribe('showcase:publishAnalyticsProductsCount');
    this.events.unsubscribe('showcase:makeProductCopiesSuccess');
    this.events.unsubscribe('showcase:makeProductCopiesFailure');
    this.events.unsubscribe('search-engine:noAdminSearchProductsAvailable');
    this.events.unsubscribe('search-engine:noMoreAdminSearchProducts');
    this.events.unsubscribe('showcase:editSuccess');
    this.events.unsubscribe('showcase:editFailure');
    this.events.unsubscribe('showcase:publishAllProductsForAdminProducts');
  }

  // getPriceListFields(priceList) {
  //   let fields = {
  //     type: [],
  //     price: [],
  //     discountedPrice: [],
  //     purchasePrice: [],
  //     totalQuantity: [],
  //     shippingWeight: []
  //   }
  //   priceList.forEach((item, index) => {
  //     fields.type[index] = item.weight ? item.weight : '';
  //     fields.price[index] = item.price ? item.price : 0,
  //       fields.discountedPrice[index] = item.discountedPrice ? item.discountedPrice : 0,
  //       fields.purchasePrice[index] = item.purchasePrice ? item.purchasePrice : 0,
  //       fields.totalQuantity[index] = item.totalQuantity ? item.totalQuantity : '0'
  //     fields.shippingWeight[index] = item.shippingWeight ? item.shippingWeight : 0
  //   });

  //   return fields;
  // }

  async exportConfirm() {
    await this.presentLoading()
    this.events.publish('showcase:getAllProductsForAdminProducts');
  }

  async exportProducts() {
    this.options.filename = this.options.filename + ' ' + this.getDateTimeFormat(new Date);
    let products = [];
    console.log('prod---:', this.allProductsData);
    this.allProductsData.forEach(item => {
      let product = item;
      let productCategories = product.categories
      let categoryList = []
      let productBrands = product.brands
      let brandList = []
      if (this.categories) {
        if (product.categories) {
          productCategories.forEach(categoryId => {
            let result = this.categories.find(obj => {
              return obj.id === categoryId
            })
            if (result) {
              categoryList.push(result.name)
            }
            if (this.allSubcategories) {
              let resultSub = this.allSubcategories.find(obj => {
                return obj.id === categoryId
              })
              if (resultSub) {
                let catResult = this.categories.find(obj => {
                  return obj.id === resultSub.categoryId
                })
                if (catResult) {
                  categoryList.push(catResult.name + '-' + resultSub.name)
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
              return obj.id === brandId
            })
            if (result) {
              brandList.push(result.name)
            }
          });
        }
      }
      // let fields = {};
      // if (product.isPriceList) {
      //   fields = this.getPriceListFields(product.priceList)
      // }
      else {
        product.prodPrice = product.prodPrice ? product.prodPrice : 0;
        product.discountedPrice = product.discountedPrice ? product.discountedPrice : 0;
        product.purchasePrice = product.purchasePrice ? product.purchasePrice : 0;
        product.quanity = product.quanity ? product.quanity : '';
        product.shippingWeight = product.shippingWeight ? product.shippingWeight : 0;
      }

      products.push({
        sku: product.productCode ? product.productCode : '',
        name: product.prodName ? product.prodName : '',
        barcodeNo: product.barcodeNo ? product.barcodeNo : '',
        active: product.status ? 'YES' : 'NO',
        // variants: product.isPriceList ? 'YES' : 'NO',
        // variantType: product.variantType ? product.variantType : 'other',
        // variantName: product.isPriceList ? fields['type'].join() : '',
        // price: product.isPriceList ? fields['price'].join(', ') : product.prodPrice,
        price: product.prodPrice,
        // discountedPrice: product.isPriceList ? fields['discountedPrice'].join(', ') : product.discountedPrice,
        discountedPrice: product.discountedPrice,
        // purchasePrice: product.isPriceList ? fields['purchasePrice'].join(', ') : product.purchasePrice,
        purchasePrice: product.purchasePrice,
        // quantity: product.isPriceList ? fields['totalQuantity'].join(', ') : product.productQty,
        quantity: product.productQty,
        // shippingWt: product.isPriceList ? fields['shippingWeight'].join(', ') : product.shippingWeight,
        shippingWt: product.shippingWeight,
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
    const csvExporter = new ExportToCsv(this.options);
    csvExporter.generateCsv(products);
  }

  importProducts() {
    this.router.navigate(['import-products']);
  }

  async setAllProductsInactive() {
    console.log('productsInactive:', this.productsInactive);
    const success = await this.vendorService.updateVendorInfo(this.userId, { productsInactive: this.productsInactive });
    if (success) {
      this.presentAlert('', `Products will be ${this.productsInactive ? 'Inactive' : 'Active'} in couple of minutes.`)
    }
  }

  async getCategories() {
    await this.presentLoading()
    let prevMsgDiv = document.getElementById(this.previousListItem);
    if (prevMsgDiv) {
      prevMsgDiv.style.background = 'white';
    }
    let msgDiv = document.getElementById('status2');
    if (msgDiv) {
      msgDiv.style.background = 'var(--ion-color-categories-background)';
    }
    this.previousListItem = 'status2'
    this.dataList = await this.filtersService.getCategoriesWithSubcategories();
    this.dataType = 'categories'
    if (this.dataList && this.dataList.length != 0) {
      this.selectListItem[0]
    }
    if (this.loading) {
      await this.loading.dismiss()
    }
  }

  async getBrands() {
    await this.presentLoading()
    let prevMsgDiv = document.getElementById(this.previousListItem);
    if (prevMsgDiv) {
      prevMsgDiv.style.background = 'white';
    }
    let msgDiv = document.getElementById('status3');
    if (msgDiv) {
      msgDiv.style.background = 'var(--ion-color-categories-background)';
    }
    this.previousListItem = 'status3'
    this.dataList = await this.filtersService.getBrands();
    this.dataType = 'brands'
    if (this.dataList && this.dataList.length != 0) {
      this.selectListItem[0]
    }
    if (this.loading) {
      await this.loading.dismiss()
    }
  }

  showSubList(i) {
    this.dataList[i].active = !this.dataList[i].active
    this.selectListItem(i)
  }

  async showAllProducts() {
    await this.presentLoading()
    let prevMsgDiv = document.getElementById(this.previousListItem);
    if (prevMsgDiv) {
      prevMsgDiv.style.background = 'white';
    }
    let msgDiv = document.getElementById('status1');
    if (msgDiv) {
      msgDiv.style.background = 'var(--ion-color-categories-background)';
    }
    this.previousListItem = 'status1'
    this.dataType = ''
    this.events.publish('showcase:getProductsForAdminProducts');
  }

  async selectListItem(i) {
    await this.presentLoading()
    if (this.dataType == 'categories') {
      this.selectedSubcatId = this.dataList[i].id;
      this.noMoreCategoryProducts = false;
      let data: any = await this.showcaseService.getCategoryProducts(this.dataList[i].id)
      if (data) {
        this.productsData = data
        console.log('productsData:', this.productsData);
      }
      let prevMsgDiv = document.getElementById(this.previousCategory);
      if (prevMsgDiv) {
        prevMsgDiv.style.background = 'white';
      }
      let msgDiv = document.getElementById('category' + i);
      if (msgDiv) {
        msgDiv.style.background = 'var(--ion-color-categories-background)';
      }
      this.previousCategory = 'category' + i
    }

    if (this.dataType == 'brands') {
      let data: any = await this.showcaseService.getBrandProducts(this.dataList[i].id)
      if (data) {
        this.productsData = data
      }
      let prevMsgDiv = document.getElementById(this.previousBrand);
      if (prevMsgDiv) {
        prevMsgDiv.style.background = 'white';
      }
      let msgDiv = document.getElementById('brand' + i);
      if (msgDiv) {
        msgDiv.style.background = 'var(--ion-color-categories-background)';
      }
      this.previousBrand = 'brand' + i
    }
    if (this.loading) {
      await this.loading.dismiss()
    }
  }

  async selectSubCat(i, j) {
    // ? change active Color
    let prevMsgDiv = document.getElementById(this.previousCategory);
    if (prevMsgDiv) {
      prevMsgDiv.style.background = 'white';
    }
    let msgDiv = document.getElementById('subCategory' + j);
    if (msgDiv) {
      msgDiv.style.background = 'var(--ion-color-categories-background)';
    }
    this.previousCategory = 'subCategory' + j;
    // ? change active Color

    // console.log(this.dataList[i].sublist[j]);
    this.selectedSubcatId = this.dataList[i].sublist[j].id;
    this.noMoreCategoryProducts = false;
    let data: any = await this.showcaseService.getCategoryProducts(this.dataList[i].sublist[j].id)
    if (data) {
      this.productsData = data
    }
  }

  showSubOfSubList(i: number, j: number) {
    // console.log('sublist', this.dataList[i].sublist[j]);
    this.dataList[i].sublist[j].active = !this.dataList[i].sublist[j].active;
    this.selectSubCat(i, j);
  }

  async selectSubOfSubCat(i: number, j: number, k: number) {
    // ? change active Color
    let prevMsgDiv = document.getElementById(this.previousCategory);
    if (prevMsgDiv) {
      prevMsgDiv.style.background = 'white';
    }
    let msgDiv = document.getElementById('subOfSubCategory' + k);
    if (msgDiv) {
      msgDiv.style.background = 'var(--ion-color-categories-background)';
    }
    this.previousCategory = 'subOfSubCategory' + k;
    // ? change active Color

    // console.log('subOfSubCatList:', this.dataList[i].sublist[j].subOfSubCatList[k]);
    this.selectedSubcatId = this.dataList[i].sublist[j].subOfSubCatList[k].id;
    this.noMoreCategoryProducts = false;
    let data: any = await this.showcaseService.getCategoryProducts(this.dataList[i].sublist[j].subOfSubCatList[k].id);
    if (data) {
      this.productsData = data;
    }
  }


  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  async presentAlert(heading: any, desc: any) {
    const alert = await this.alertController.create({
      header: heading,
      message: desc,
      buttons: ['Ok']
    });
    await alert.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: "Please Wait...",
    });
    await this.loading.present();
  }


}
