import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Events } from '@ionic/angular';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { map, first, take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { firestore } from 'firebase';
import { AngularFireStorage } from '@angular/fire/storage/';
import { ProductImage } from 'src/app/models/image';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase';
import { LogglyLoggerService } from '../loggly-logger/loggly-logger.service';
import { Storage } from '@ionic/storage';
import { convertSnaps } from '../db-utilis';
import { ConfigService } from 'src/app/services/config/config.service';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})

export class FoodItemService {

  products: Observable<Product[]>;
  uproducts: Observable<Product[]>;
  itemDoc: AngularFirestoreDocument<Product>;
  productsRef: AngularFirestoreCollection<Product>;
  docRef: AngularFirestoreCollection<unknown>;
  mediaRef: AngularFirestoreCollection<unknown>;
  doc: any;
  productsLength: number;
  lopRef: AngularFirestoreDocument<unknown>;
  doc$: Observable<unknown>;
  udocRef: AngularFirestoreCollection<unknown>;
  uDoc: any;
  getproductsRef: AngularFirestoreCollection<Product>;
  getproductsDoc: Observable<Product[]>;
  productRef: AngularFirestoreCollection<unknown>;
  updateStatusRef: AngularFirestoreCollection<unknown>;
  updateStatusDoc: any;
  imageId: any;
  image: ProductImage = {
    url: null,
    size: null,
    uploadedAt: null,
    productId: null
  };
  userRef: AngularFirestoreCollection<unknown>;
  lastInResponse: any;
  productsData: any[] = [];
  categoryData: any;
  // countOfProducts: number;
  productSub: Subscription;
  lastResponseForAdminProducts: any;
  productsDataForAdminProducts: any[] = [];
  allProductsDataForAdminProducts: any[] = [];
  firstResponseForAdminProducts: any;
  adminProductsSubs: any;
  adminAllProductsSubs: any;
  adminProductsLoadMoreSubs: any;
  outOfStockSubs: Subscription;
  // lastResponseOfProducts: any;
  // productsWithoutCategoryData: any[] = [];
  lastResponseForCategoryProducts;
  productsForCategory = [];

  constructor(
    private afs: AngularFirestore,
    private events: Events,
    private fbStorage: AngularFireStorage,
    private logglyService: LogglyLoggerService,
    private storage: Storage,
    private configService: ConfigService,
    private sharedService: SharedService
  ) { }
  initializeSubscriptions() {
    this.events.subscribe('food-item:addProduct', (product, listofImages) => {
      this.addProduct(product, listofImages);
    });
    this.events.subscribe('food-item:getProducts', (id, type) => {
      this.getProducts(id, type);
    });
    this.events.subscribe('food-item:getProductWithId', (id) => {
      this.getProductWithId(id);
    });
    this.events.subscribe('food-item:updateStatus', (id) => {
      this.updateStatus(id);
    });
    this.events.subscribe('food-item:editProduct', (editdata, pid, listOfImages, needToUpdateImages) => {
      this.editProduct(editdata, pid, listOfImages, needToUpdateImages);
    });
    this.events.subscribe('food-item:deleteProduct', (id) => {
      this.deleteProduct(id);
    });
    this.events.subscribe('food-item:loadMoreProducts', (id, type) => {
      this.loadMoreProducts(id, type);
    });
    this.events.subscribe('food-item:addCategory', (catgeoryData, categoryImage, status, banner, regionId) => {
      this.addCategory(catgeoryData, categoryImage, status, banner, regionId);
    });
    this.events.subscribe('food-item:getAllCategories', () => {
      this.getAllCategories();
    });
    this.events.subscribe('food-item:getAllCategoriesForShop', () => {
      this.getAllCategoriesForShop();
    });
    this.events.subscribe('food-item:deleteCategory', (catgeoryId) => {
      this.deleteCategory(catgeoryId);
    });
    this.events.subscribe('food-item:editCategory', (categoryData, categoryImage, status, banner, regionId) => {
      this.editCategory(categoryData, categoryImage, status, banner, regionId);
    });
    this.events.subscribe('food-item:getProductsForCategory', (cid) => {
      this.getProductsForCategory(cid);
    });
    this.events.subscribe('food-item:getProductsForAdminProducts', () => {
      this.getProductsForAdminProducts();
    });
    this.events.subscribe('food-item:getAllProductsForAdminProducts', () => {
      this.getAllProductsForAdminProducts();
    });
    this.events.subscribe('food-item:loadMoreProductsForAdminProducts', () => {
      this.loadMoreProductsForAdminProducts();
    });
    this.events.subscribe('food-item:loadPreviousProductsForAdminProducts', () => {
      this.loadPreviousProductsForAdminProducts();
    });
    this.events.subscribe('food-item:getSubcategories', (id) => {
      this.getSubcategories(id);
    });
    this.events.subscribe('food-item:getSubcategoriesForUser', (id) => {
      this.getSubcategoriesForUser(id);
    });
    this.events.subscribe('food-item:addSubcategory', (data, image, categoryId, banner) => {
      this.addSubcategory(data, image, categoryId, banner);
    });
    this.events.subscribe('food-item:editSubcategory', (data, image, subcatId, categoryId, banner) => {
      this.editSubcategory(data, image, subcatId, categoryId, banner);
    });
    this.events.subscribe('food-item:deleteSubcategory', (subcatId, categoryId) => {
      this.deleteSubcategory(subcatId, categoryId);
    });
    this.events.subscribe('food-item:getProductsForSubcategory', (subcatId) => {
      this.getProductsForSubcategory(subcatId);
    });
    this.events.subscribe('food-item:changeSubcategoriesStatus', (status, catId) => {
      this.changeSubcategoriesStatus(status, catId);
    });
    // this.events.subscribe('food-item:getAnalyticsProductsCount', () => {
    //   this.getAnalyticsProductsCount();
    // });
    this.events.subscribe('food-item:makeProductCopies', (copies, product) => {
      this.makeProductCopies(copies, product);
    });
    this.events.subscribe('food-item:getCategoriesBanner', (cid) => {
      this.getCategoriesBanner(cid);
    });
    this.events.subscribe('food-item:getSubCategoriesBanner', (cid, scid) => {
      this.getSubCategoriesBanner(cid, scid);
    });
    this.events.subscribe('food-item:changeCategoryStatus', (id, status) => {
      this.changeCategoryStatus(id, status);
    });
    this.events.subscribe('food-item:changeProductStatus', (id, status) => {
      this.changeProductStatus(id, status);
    });
    this.events.subscribe('food-item:changeSubcategoryStatus', (catId, subId, status) => {
      this.changeSubcategoryStatus(catId, subId, status);
    });




    this.events.subscribe('food-item:removeSusbcriptions', () => {
      if (this.productSub) {
        //console.log('in removeSusbcriptions unsubscribe');
        this.productSub.unsubscribe();
      }
    });

    this.events.subscribe('food-item:getOutOfStockProducts', () => {
      this.getOutOfStockProducts();
    });

    this.events.subscribe('food-item:removeOutOfStockSub', () => {
      if (this.outOfStockSubs) {
        console.log('in removeSusbcriptions unsubscribe');
        this.outOfStockSubs.unsubscribe();
      }
    });


    this.lopRef = this.afs.doc(`listofProducts/list`);
    this.mediaRef = this.afs.collection('media');
    this.productRef = this.afs.collection('products', ref => ref.orderBy('sortedAt', 'desc'));
    this.userRef = this.afs.collection('users');
  }



  async addProduct(product: Product, listofImages) {
    console.log(product)
    try {
      // let colorObj: any = {};
      // let priceList = [];
      // if (barcode === '') {
      //   product['barcode'] = '';
      // }
      // if (product.color.hasOwnProperty('image')
      //   && product.color.image !== ''
      //   && (product.color.image.includes('data:image/jpeg;base64,')
      //     || product.color.image.includes('data:image/jpg;base64,')
      //     || product.color.image.includes('data:image/png;base64,'))) {
      //   colorObj = { ...product.color };
      //   delete product.color.image;
      // }
      // if (product.isPriceList) {
      //   priceList = JSON.parse(JSON.stringify(product.priceList));
      //   for (const pl of product.priceList) {
      //     if (pl.hasOwnProperty('barcode')) {
      //       delete pl.barcode;
      //     }
      //   }
      // }


      const doc_ref = await this.afs.collection('products').add(product);
      if (listofImages.length !== 0) {
        await this.addimgtoFirebase(doc_ref.id, listofImages);
      } else {
        await this.afs.collection('products').doc(doc_ref.id).update({
          coverPic: {
            url: 'assets/img/placeholder-img.jpg',
            mob: 'assets/img/placeholder-img.jpg',
            thumb: 'assets/img/placeholder-img.jpg'
          }
        });
      }
      // if (barcode !== '') {
      //   const imgRef: any = this.fbStorage.ref(`products/${doc_ref.id}/barcode/` + new Date().getTime().toString() + '.png');
      //   await imgRef.putString(barcode, 'data_url');
      //   const downloadURL = await imgRef.getDownloadURL().pipe(first()).toPromise();
      //   await this.afs.collection('products').doc(doc_ref.id).update({
      //     barcode: downloadURL
      //   });
      // }
      if (product.additionalInfo && product.additionalInfo['sizeChart'].active) {
        const imgRef: any = this.fbStorage.ref(`products/${doc_ref.id}/sizeChart/` + new Date().getTime().toString() + '.png');
        await imgRef.putString(product.additionalInfo['sizeChart'].img.url, 'data_url');
        const downloadURL = await imgRef.getDownloadURL().pipe(first()).toPromise();
        let obj = product.additionalInfo;
        obj['sizeChart'].img.url = downloadURL;
        await this.afs.collection('products').doc(doc_ref.id).update({
          additionalInfo: obj
        });
      }
      // if (colorObj.hasOwnProperty('image')) {
      //   let imgType = this.sharedService.getImageType(colorObj.image);
      //   const imgRef: any = this.fbStorage.ref(`products/${doc_ref.id}/color/` + new Date().getTime().toString() + imgType);
      //   await imgRef.putString(colorObj.image, 'data_url');
      //   const downloadURL = await imgRef.getDownloadURL().pipe(first()).toPromise();
      //   await this.afs.collection('products').doc(doc_ref.id).update({
      //     color: {
      //       image: downloadURL,
      //       name: colorObj.name,
      //       code: colorObj.code
      //     }
      //   });
      // }
      // if (priceList.length) {
      //   for (const pl of priceList) {
      //     if (pl.hasOwnProperty('barcode') && pl.barcode !== '') {
      //       const imgRef: any = this.fbStorage.ref(`products/${doc_ref.id}/barcode/` + new Date().getTime().toString() + '.png');
      //       await imgRef.putString(pl.barcode, 'data_url');
      //       const downloadURL = await imgRef.getDownloadURL().pipe(first()).toPromise();
      //       pl.barcode = downloadURL;
      //     }
      //   }
      //   await this.afs.collection('products').doc(doc_ref.id).update({
      //     priceList: priceList
      //   });
      // }
      this.events.publish('food-item:addSuccess', 'Success', 'Food product added successfully. The images will be uploaded in just couple of minutes.');
    } catch (error) {
      console.log(error);
      this.events.publish('food-item:addFailure', 'Failure', 'Add Food product Failed!');
    }
  }

  async checkProductSKU(SKU_Id: any, prodId: any) {
    // console.log('here2serv');
    const prodRef = this.afs.collection("products", ref => ref.where("productCode", "==", SKU_Id));
    // console.log('prodRef : ', prodRef);

    const productsSnap = prodRef.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data: any = a.payload.doc.data();
        const id = a.payload.doc.id;
        // console.log('data : ', data);
        // console.log('id : ', id);
        return { id, data }
      }))
    );
    let prodArr: any = []
    if (prodId == '') {
      return productsSnap.pipe(first()).toPromise();
    } else {
      prodArr = await productsSnap.pipe(first()).toPromise();
      // console.log('prodArr : ', prodArr);
      let data = prodArr.filter(item => item != prodId)
      // console.log('data : ', data);
      return data;
    }
  }

  async editProduct(editdata, pid, listOfImages, needToUpdateImages) {
    // console.log('editProduct data...', editdata, listOfImages);
    // let colorObj: any = {};
    // if (editdata.color && editdata.color.hasOwnProperty('image')
    //   && (editdata.color.image.includes('data:image/jpeg;base64,')
    //     || editdata.color.image.includes('data:image/jpg;base64,')
    //     || editdata.color.image.includes('data:image/png;base64,')
    //     || editdata.color.image.includes('data:image/gif;base64,'))) {
    //   colorObj = { ...editdata.color };
    //   delete editdata.color.image;
    // }

    // if (barcode !== '') {
    //   const imgRef: any = this.fbStorage.ref(`products/${pid}/barcode/` + new Date().getTime().toString() + '.png');
    //   await imgRef.putString(barcode, 'data_url');
    //   const downloadURL = await imgRef.getDownloadURL().pipe(first()).toPromise();
    //   editdata["barcode"] = downloadURL;
    // }

    if (editdata.additionalInfo && editdata.additionalInfo['sizeChart'].active) {
      if (
        editdata.additionalInfo['sizeChart'].img.url.includes('data:image/jpeg;base64,') ||
        editdata.additionalInfo['sizeChart'].img.url.includes('data:image/jpg;base64,') ||
        editdata.additionalInfo['sizeChart'].img.url.includes('data:image/png;base64,') ||
        editdata.additionalInfo['sizeChart'].img.url.includes('data:image/gif;base64,')) {
        const imgRef: any = this.fbStorage.ref(`products/${pid}/sizeChart/` + new Date().getTime().toString() + '.png');
        await imgRef.putString(editdata.additionalInfo['sizeChart'].img.url, 'data_url');
        const downloadURL = await imgRef.getDownloadURL().pipe(first()).toPromise();
        editdata.additionalInfo['sizeChart'].img.url = downloadURL;

      }
    }

    // console.log('colorObj', colorObj);
    // if (colorObj && colorObj.hasOwnProperty('image')) {
    //   console.log('colorObj', colorObj);
    //   let imgType = this.sharedService.getImageType(colorObj.image);
    //   const imgRef: any = this.fbStorage.ref(`products/${pid}/color/` + new Date().getTime().toString() + imgType);
    //   await imgRef.putString(colorObj.image, 'data_url');
    //   const downloadURL = await imgRef.getDownloadURL().pipe(first()).toPromise();
    //   editdata['color'] = {
    //     image: downloadURL,
    //     name: colorObj.name,
    //     code: colorObj.code
    //   }
    // }

    // if (editdata.isPriceList && editdata.priceList.length) {
    //   for (const pl of editdata.priceList) {
    //     if (pl.hasOwnProperty('barcode') && (pl.barcode.includes('data:image/jpeg;base64,') || pl.barcode.includes('data:image/jpg;base64,') || pl.barcode.includes('data:image/png;base64,') || pl.barcode.includes('data:image/gif;base64,'))) {
    //       const imgRef: any = this.fbStorage.ref(`products/${pid}/barcode/` + new Date().getTime().toString() + '.png');
    //       await imgRef.putString(pl.barcode, 'data_url');
    //       const downloadURL = await imgRef.getDownloadURL().pipe(first()).toPromise();
    //       pl.barcode = downloadURL;
    //       console.log('downloadURL:', downloadURL);
    //     }
    //   }
    // }

    if (editdata.images && listOfImages && !editdata.images.length && !listOfImages.length) {
      editdata['coverPic'] = {
        url: 'assets/img/placeholder-img.jpg',
        mob: 'assets/img/placeholder-img.jpg',
        thumb: 'assets/img/placeholder-img.jpg'
      }
    }

    const { images, ...data } = editdata;
    console.log('productData edit', data);
    await this.afs.collection('products').doc(pid).update(data);

    if (needToUpdateImages) {
      console.log('need to update images....');
      await this.afs.collection('products').doc(pid).update({ images: images });
    }

    if (listOfImages.length !== 0) {
      try {
        await this.addimgtoFirebase(pid, listOfImages);
        this.events.publish('food-item:editSuccess', 'Success', 'Food product edited successfully!');
      } catch (error) {
        console.log('err:', error);
        this.events.publish('food-item:editFailure', 'Failure', 'Food product not edited successfully!');
      }
    }
    else {
      // console.log('in else part');
      this.events.publish('food-item:editSuccess', 'Success', 'Food product edited successfully!');
    }
  }

  async addimgtoFirebase(pid, imgdataAndSize) {
    console.log('imgData::', imgdataAndSize);
    for (let i = 0; i < imgdataAndSize.length; i++) {
      let imgType = this.sharedService.getImageType(imgdataAndSize[i].base64Img);
      this.image.url = '';
      this.image.size = imgdataAndSize[i].size;
      this.image.uploadedAt = new Date();
      this.image.productId = pid;
      const mediaDocRef = await this.mediaRef.doc('images').collection('products').add(this.image);
      const imgRef: any = this.fbStorage.ref(`products/${pid}/images/` + mediaDocRef.id + imgType);
      await imgRef.putString(imgdataAndSize[i].base64Img, 'data_url');
      if (imgdataAndSize[i].cover === true) {
        const downloadURL = await imgRef.getDownloadURL().pipe(first()).toPromise();
        this.afs.collection('products').doc(pid).update({ coverPic: { imageId: mediaDocRef.id, url: downloadURL } });
      }
    }
  }

  async getProducts(id: string, type: string) {
    //console.log('in getProducts', id, type);
    this.productsData = [];
    this.productSub = this.afs.collection('products', ref => ref
      .where(`${type}`, 'array-contains', id)
      .where('status', '==', true)
      .orderBy('sortedAt', 'desc')
      .limit(this.configService.environment.shopProductsLimit)
    ).snapshotChanges()
      .subscribe((response: any) => {
        if (!response.length) {
          // console.log('No Data Available');
          this.events.publish('food-item:noProductAvailable');
          return false;
        }
        this.productsData = [];
        this.lastInResponse = response[response.length - 1].payload.doc;
        for (const product of response) {
          this.productsData.push({ id: product.payload.doc.id, data: product.payload.doc.data() });
        }
        // console.log('productsData in product service', this.productsData);
        if (this.productsData.length !== 0) {
          //  console.log('publishProducts');
          this.events.publish('food-item:publishProducts', this.productsData);
        } else {
          //  console.log('noDataAvailable');
          this.events.publish('food-item:noProductAvailable');
        }
        this.productSub.unsubscribe();
      }, error => {
        this.productSub.unsubscribe();
        //  console.dir(error);
      });
  }
  loadMoreProducts(id: string, type: string) {
    // console.log('in loadMoreProducts service...', this.lastInResponse.id);
    const loadMoreSubs = this.afs.collection('products', ref => ref
      .where(`${type}`, 'array-contains', id)
      .where('status', '==', true)
      .orderBy('sortedAt', 'desc')
      .limit(this.configService.environment.shopProductsLimit)
      .startAfter(this.lastInResponse)
    ).snapshotChanges()
      .subscribe((response: any) => {
        if (!response.length) {
          // console.log('No Data Available');
          this.events.publish('food-item:productsLimitReached');
          return false;
        }
        this.lastInResponse = response[response.length - 1].payload.doc;
        // console.log('response in loadmore', response);
        for (const product of response) {
          this.productsData.push({ id: product.payload.doc.id, data: product.payload.doc.data() });
        }
        // console.log('load more products', this.productsData);
        this.events.publish('food-item:publishProducts', this.productsData);
        loadMoreSubs.unsubscribe();
      }, error => {
        loadMoreSubs.unsubscribe();
      });
  }
  async getProductsForAdminProducts() {
    // console.log(this.adminProductsSubs);
    // console.log(this.adminProductsLoadMoreSubs);
    if (this.adminProductsSubs && typeof this.adminProductsSubs !== 'undefined') {
      this.adminProductsSubs.unsubscribe();
    }
    if (this.adminProductsLoadMoreSubs && typeof this.adminProductsLoadMoreSubs !== 'undefined') {
      this.adminProductsLoadMoreSubs.unsubscribe();
    }
    this.productsDataForAdminProducts = [];
    let userId = await this.storage.get('uid')
    let userRole = await this.storage.get('userRole')
    if (userRole == 'vendor') {
      this.adminProductsSubs = await this.afs.collection('products', ref => ref
        .orderBy('sortedAt', 'desc').where('vendorId', '==', userId)
        .where('productType', '==', 'food')
        .limit(this.configService.environment.shopProductsLimit)
      ).snapshotChanges().subscribe((response: any) => {
        if (!response.length) {
          // console.log('No Data Available');
          this.events.publish('food-item:noProductsAvailable');
          return false;
        }
        this.productsDataForAdminProducts = [];
        this.lastResponseForAdminProducts = response[response.length - 1].payload.doc;
        for (const product of response) {
          this.productsDataForAdminProducts.push({ id: product.payload.doc.id, data: product.payload.doc.data() });
        }
        // console.log('products in getProductsForAdminProducts', this.productsDataForAdminProducts);
        this.events.publish('food-item:publishProductsForAdminProducts', this.productsDataForAdminProducts);

      }, error => {
        this.adminProductsSubs.unsubscribe();
      });
    }
    else {
      this.adminProductsSubs = await this.afs.collection('products', ref => ref
        .orderBy('sortedAt', 'desc')
        .where('productType', '==', 'food')
        .limit(this.configService.environment.shopProductsLimit)
      ).snapshotChanges().subscribe((response: any) => {
        if (!response.length) {
          // console.log('No Data Available');
          this.events.publish('food-item:noProductsAvailable');
          return false;
        }
        this.productsDataForAdminProducts = [];
        this.lastResponseForAdminProducts = response[response.length - 1].payload.doc;
        for (const product of response) {
          this.productsDataForAdminProducts.push({ id: product.payload.doc.id, data: product.payload.doc.data() });
        }
        // console.log('products in getProductsForAdminProducts', this.productsDataForAdminProducts);
        this.events.publish('food-item:publishProductsForAdminProducts', this.productsDataForAdminProducts);

      }, error => {
        console.log('err', error);

        this.adminProductsSubs.unsubscribe();
      });
    }
  }

  async getAllProductsForVendor() {
    return new Promise(async (resolve) => {
      try {
        let allProducts = []
        let userId = await this.storage.get('uid')
        let productsData = await this.afs.collection('products', ref => ref.orderBy('sortedAt', 'desc').where('vendorId', '==', userId))
        let allProductsref: Subscription = productsData.get().subscribe((querySnapshot: any) => {
          querySnapshot.forEach((doc) => {
            allProducts.push(doc.data())
          });
          resolve(allProducts)
          allProductsref.unsubscribe()
        })
      } catch (error) {
        console.log('err from getAllProductsForVendor ')
      }
    })
  }

  async getAllProductsForAdminProducts() {
    try {
      let allProducts = []
      let userId = await this.storage.get('uid')
      let userRole = await this.storage.get('userRole')
      if (userRole == 'vendor') {
        let productsData = await this.afs.collection('products', ref => ref.orderBy('sortedAt', 'desc').where('vendorId', '==', userId))
        let allProductsref: Subscription = productsData.get().subscribe((querySnapshot: any) => {
          querySnapshot.forEach((doc) => {
            allProducts.push(doc.data())
          });
          this.events.publish('food-item:publishAllProductsForAdminProducts', allProducts);
          allProductsref.unsubscribe()
        })
      }
      else {
        let productsData = await this.afs.collection('products', ref => ref.orderBy('sortedAt', 'desc'))
        let allProductsref: Subscription = productsData.get().subscribe((querySnapshot: any) => {
          querySnapshot.forEach((doc) => {
            allProducts.push(doc.data())
          });
          this.events.publish('food-item:publishAllProductsForAdminProducts', allProducts);
          allProductsref.unsubscribe()
        })
      }

    }
    catch (error) {
      console.log(error);
    };
  }

  async loadMoreProductsForAdminProducts() {
    if (this.adminProductsSubs && typeof this.adminProductsSubs !== 'undefined') {
      this.adminProductsSubs.unsubscribe();
    }
    if (this.adminProductsLoadMoreSubs && typeof this.adminProductsLoadMoreSubs !== 'undefined') {
      this.adminProductsLoadMoreSubs.unsubscribe();
    }
    let userId = await this.storage.get('uid')
    let userRole = await this.storage.get('userRole')
    if (userRole == 'vendor') {
      this.adminProductsLoadMoreSubs = this.afs.collection('products', ref => ref
        .orderBy('sortedAt', 'desc').where('vendorId', '==', userId)
        .where('productType', '==', 'food')
        .limit(this.configService.environment.shopProductsLimit)
        .startAfter(this.lastResponseForAdminProducts)
      ).snapshotChanges()
        .subscribe((response: any) => {
          if (!response.length) {
            //  console.log('No Data Available');
            this.events.publish('food-item:productsForAdminProductsLimitReached');
            return false;
          }
          this.productsDataForAdminProducts = [];
          this.firstResponseForAdminProducts = response[0].payload.doc
          this.lastResponseForAdminProducts = response[response.length - 1].payload.doc;
          // console.log('response in loadmore', response);
          for (const product of response) {
            this.productsDataForAdminProducts.push({ id: product.payload.doc.id, data: product.payload.doc.data() });
          }
          // console.log('load more products in loadMoreProductsForAdminProducts', this.productsDataForAdminProducts);
          this.events.publish('food-item:publishProductsForAdminProducts', this.productsDataForAdminProducts);

        }, error => {
          this.adminProductsLoadMoreSubs.unsubscribe();
        });
    }
    else {
      // console.log('in loadMoreProducts service...', this.lastResponseForAdminProducts.id);
      this.adminProductsLoadMoreSubs = this.afs.collection('products', ref => ref
        .orderBy('sortedAt', 'desc')
        .where('productType', '==', 'food')
        .limit(this.configService.environment.shopProductsLimit)
        .startAfter(this.lastResponseForAdminProducts)
      ).snapshotChanges()
        .subscribe((response: any) => {
          if (!response.length) {
            //  console.log('No Data Available');
            this.events.publish('food-item:productsForAdminProductsLimitReached');
            return false;
          }
          this.productsDataForAdminProducts = [];
          this.firstResponseForAdminProducts = response[0].payload.doc
          this.lastResponseForAdminProducts = response[response.length - 1].payload.doc;
          // console.log('response in loadmore', response);
          for (const product of response) {
            this.productsDataForAdminProducts.push({ id: product.payload.doc.id, data: product.payload.doc.data() });
          }
          // console.log('load more products in loadMoreProductsForAdminProducts', this.productsDataForAdminProducts);
          this.events.publish('food-item:publishProductsForAdminProducts', this.productsDataForAdminProducts);

        }, error => {
          this.adminProductsLoadMoreSubs.unsubscribe();
        });
    }
  }
  async loadPreviousProductsForAdminProducts() {
    // console.log('in loadMoreProducts service...', this.lastResponseForAdminProducts.id);
    let userId = await this.storage.get('uid')
    let userRole = await this.storage.get('userRole')
    if (userRole == 'vendor') {
      const subs = this.afs.collection('products', ref => ref
        .orderBy('sortedAt', 'desc').where('vendorId', '==', userId)
        .where('productType', '==', 'food')
        .endBefore(this.firstResponseForAdminProducts)
        .limitToLast(this.configService.environment.shopProductsLimit)
      ).snapshotChanges()
        .subscribe((response: any) => {
          if (!response.length) {
            // console.log('No Data Available');
            this.events.publish('food-item:previousProductsForAdminProductsLimitReached');
            return false;
          }
          this.productsDataForAdminProducts = [];
          this.firstResponseForAdminProducts = response[0].payload.doc;
          this.lastResponseForAdminProducts = response[response.length - 1].payload.doc;
          // console.log('response in loadmore', response);
          for (const product of response) {
            this.productsDataForAdminProducts.push({ id: product.payload.doc.id, data: product.payload.doc.data() });
          }
          // console.log('load more products in loadMoreProductsForAdminProducts', this.productsDataForAdminProducts);
          this.events.publish('food-item:publishProductsForAdminProducts', this.productsDataForAdminProducts);
          subs.unsubscribe();
        }, error => {
          subs.unsubscribe();
        });
    }
    else {
      const subs = this.afs.collection('products', ref => ref
        .orderBy('sortedAt', 'desc')
        .where('productType', '==', 'food')
        .endBefore(this.firstResponseForAdminProducts)
        .limitToLast(this.configService.environment.shopProductsLimit)
      ).snapshotChanges()
        .subscribe((response: any) => {
          if (!response.length) {
            // console.log('No Data Available');
            this.events.publish('food-item:previousProductsForAdminProductsLimitReached');
            return false;
          }
          this.productsDataForAdminProducts = [];
          this.firstResponseForAdminProducts = response[0].payload.doc;
          this.lastResponseForAdminProducts = response[response.length - 1].payload.doc;
          // console.log('response in loadmore', response);
          for (const product of response) {
            this.productsDataForAdminProducts.push({ id: product.payload.doc.id, data: product.payload.doc.data() });
          }
          // console.log('load more products in loadMoreProductsForAdminProducts', this.productsDataForAdminProducts);
          this.events.publish('food-item:publishProductsForAdminProducts', this.productsDataForAdminProducts);
          subs.unsubscribe();
        }, error => {
          subs.unsubscribe();
        });
    }
  }
  async getProductsForCategory(cid) {
    let productsData = [];
    //console.log('in getProductsForCategory...');

    let allProducts = [];
    const productRef = this.afs.collection('products', ref => ref.orderBy('sortedAt', 'desc').where("categories", "array-contains", cid));
    let allProductsref: Subscription = productRef.get().subscribe((querySnapshot: any) => {
      querySnapshot.forEach((doc) => {
        allProducts.push({ id: doc.id, ...doc.data() })
      });
      if (allProducts.length !== 0) {
        this.events.publish('food-item:publishProductsForCategory', allProducts);
      } else {
        this.events.publish('food-item:noProducts');
      }
      allProductsref.unsubscribe()
    })
    // 
    // const productRef = this.afs.collection('products', ref => ref.orderBy('sortedAt', 'desc').where("categories", "array-contains", cid));
    // const productSnap = productRef.snapshotChanges().pipe(
    //     map(actions => actions.map(a => {
    //         const data: any = a.payload.doc.data();
    //         const id = a.payload.doc.id;
    //         return { id, ...data };
    //     }))
    // );
    // const subs = productSnap.subscribe((productsData) => {
    //     // console.log('productData in getProductsForCategory', productsData);
    //     if (productsData.length !== 0) {
    //         this.events.publish('food-item:publishProductsForCategory', productsData);
    //     } else {
    //         this.events.publish('food-item:noProducts');
    //     }
    //     subs.unsubscribe();
    // })
  }

  async getProductWithId(id: string) {
    const productData = await this.afs.collection('products').doc(id).valueChanges().pipe(first()).toPromise();
    this.events.publish('food-item:publishgetProductWithId', productData);
  }
  async updateproductsPosition(id: string, changedDate: any) {
    // console.log('id & cdate', id, changedDate);
    await this.afs.doc(`products/${id}`).update({ sortedAt: changedDate });
    this.events.publish('food-item:updateProductPostionSucess');
  }
  async updateCategoriesPosition(id: string, changedDate: any) {
    // console.log('id & cdate', id, changedDate);
    await this.afs.doc(`categories/${id}`).update({ sortedAt: changedDate });
    this.events.publish('food-item:getAllCategories');
    this.events.publish('food-item:getAllCategoriesForShop');
    this.events.publish('food-item:updateCategoriesPostionSucess');
  }

  async updateStatus(id: string) {
    // console.log('id', id);
    const uData: any = await this.afs.collection('products').doc(id).valueChanges().pipe(first()).toPromise();
    if (uData.status === true) {
      this.afs.doc(`products/${id}`).update({ status: false });
    } else {
      this.afs.doc(`products/${id}`).update({ status: true });
    }
  }
  async deleteProduct(id: string) {
    //console.log('delete id', id);
    try {
      await this.afs.collection('products').doc(id).delete();
      this.events.publish('food-item:deleteSuccess', 'Success', 'Food product deleted successfully!');
    } catch (error) {
      // console.log(error);
      this.events.publish('food-item:deleteFailure', 'Failure', 'Food product not deleted successfully!');
    }
  }
  async deleteCategory(id: string) {
    // console.log('delete id', id);
    try {
      await this.afs.collection('categories').doc(id).delete();
      this.events.publish('food-item:deleteCategorySuccess');
      // this.events.publish('food-item:getAllCategories');
      // this.events.publish('food-item:getAllCategoriesForShop');
    } catch (error) {
      // console.log(error);
      this.events.publish('food-item:deletecategoryFailure');
    }
  }
  async addCategory(catgeoryData: any, categoryImage: any, categoryStatus: boolean, banner: any, regionId) {
    const categoryMediaImage = {
      url: null,
      size: null,
      uploadedAt: null,
      categoryId: null
    };
    try {
      const categoryDoc = await this.afs.collection('categories').add({ name: catgeoryData.name, description: catgeoryData.description, isExclusive: catgeoryData.isExclusive, metaData: catgeoryData.metaData, totalProducts: 0, sortedAt: new Date(), image: {}, status: categoryStatus, regionId: regionId });
      console.log('categoryImage', categoryImage);
      if (categoryImage.length !== 0) {
        let imgType = this.sharedService.getImageType(categoryImage[0].imgData);
        categoryMediaImage.url = '';
        categoryMediaImage.size = categoryImage[0].imgSize;
        categoryMediaImage.uploadedAt = new Date();
        categoryMediaImage.categoryId = categoryDoc.id;
        const mediaDocRef = await this.afs.collection('media').doc('images').collection('categories').add(categoryMediaImage);
        const imgRef = this.fbStorage.ref(`categories/${categoryDoc.id}/image/` + mediaDocRef.id + imgType);
        await imgRef.putString(categoryImage[0].imgData, 'data_url');
        const downloadURL = await imgRef.getDownloadURL().pipe(first()).toPromise();
        // console.log('category image download url');
        // console.log(downloadURL);
        this.afs.collection('media').doc('images').collection('categories').doc(mediaDocRef.id).update({ url: downloadURL });
        await this.afs.doc(`categories/${categoryDoc.id}`).update({ image: { url: downloadURL, size: categoryImage[0].imgSize } });
      }
      if (banner.length) {
        let imgType = this.sharedService.getImageType(banner[0].imgData);
        const imgRef = this.fbStorage.ref(`categoriesBanner/${categoryDoc.id}/image/` + new Date().getTime().toString() + imgType);
        await imgRef.putString(banner[0].imgData, 'data_url');
      }
      this.events.publish('food-item:addCategorySuccess');
      this.events.publish('food-item:getAllCategories');
      this.events.publish('food-item:getAllCategoriesForShop');
    } catch (err) {
      // console.dir(err);
    }
  }
  async editCategory(catgeoryData: any, categoryImage: any, categoryStatus: boolean, banner: any, regionId) {
    console.log(catgeoryData)
    const categoryMediaImage = {
      url: null,
      size: null,
      uploadedAt: null,
      categoryId: null
    };
    try {
      await this.afs.collection('categories').doc(catgeoryData.id).update({ name: catgeoryData.name, description: catgeoryData.description, metaData: catgeoryData.metaData, status: categoryStatus, regionId: regionId, isExclusive: catgeoryData.isExclusive });
      //console.log('categoryImage',categoryImage);
      if (categoryImage.length === 0) {
        await this.afs.collection('categories').doc(catgeoryData.id).update({ image: catgeoryData.image });
      }
      //console.log('banner',banner);
      if (banner.length === 0) {
        await this.afs.collection('categories').doc(catgeoryData.id).update({ banner: catgeoryData.banner });
      }
      //console.log('categoryImage',categoryImage);
      if (categoryImage.length > 0) {
        categoryMediaImage.url = '';
        categoryMediaImage.size = categoryImage[0].imgSize;
        categoryMediaImage.uploadedAt = new Date();
        categoryMediaImage.categoryId = catgeoryData.id;
        const mediaDocRef = await this.afs.collection('media').doc('images').collection('categories').add(categoryMediaImage);
        let imgType = this.sharedService.getImageType(categoryImage[0].imgData);
        const imgRef = this.fbStorage.ref(`categories/${catgeoryData.id}/image/` + mediaDocRef.id + imgType);
        await imgRef.putString(categoryImage[0].imgData, 'data_url');
        const downloadURL = await imgRef.getDownloadURL().pipe(first()).toPromise();
        // console.log('category image download url');
        // console.log(downloadURL);
        this.afs.collection('media').doc('images').collection('categories').doc(mediaDocRef.id).update({ url: downloadURL });
        await this.afs.doc(`categories/${catgeoryData.id}`).update({ image: { url: downloadURL, size: categoryImage[0].imgSize } });
      }
      //console.log('banner',banner);
      if (banner.length > 0) {
        let imgType = this.sharedService.getImageType(banner[0].imgData);
        const imgRef = this.fbStorage.ref(`categoriesBanner/${catgeoryData.id}/image/` + new Date().getTime().toString() + imgType);
        await imgRef.putString(banner[0].imgData, 'data_url');
      }
      //console.log('done');
      this.events.publish('food-item:editCategorySuccess');
      this.events.publish('food-item:getAllCategories');
      this.events.publish('food-item:getAllCategoriesForShop');
    } catch (err) {
      // console.dir(err);
      this.events.publish('food-item:editCategoryFailure');
    }
  }

  async getAllCategories() {
    const catgeoryRef = this.afs.collection('categories', ref => ref.orderBy('sortedAt', 'desc'));
    const catgeorySnap = catgeoryRef.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data: any = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    const catgeoryData = await catgeorySnap.pipe(first()).toPromise();
    // console.log(catgeoryData)
    if (!catgeoryData.length) {
      this.events.publish('food-item:noCategoryAvailable');
    } else {
      this.events.publish('food-item:publishAllCategoriesForAdmin', catgeoryData);
    }
  }
  async getAllCategoriesForShop() {
    const catgeoryRef = this.afs.collection('categories', ref => ref
      .orderBy('sortedAt', 'desc')
      .where('status', '==', true));
    const catgeorySnap = catgeoryRef.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data: any = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    const categoryData = await catgeorySnap.pipe(first()).toPromise();
    if (!categoryData.length) {
      this.events.publish('food-item:noCategoryAvailable');
    } else {
      this.events.publish('food-item:publishAllCategoriesForShop', categoryData);
    }
  }
  async getAllCategoriesForSideMenu() {
    const catgeoryRef = this.afs.collection('categories', ref => ref.orderBy('sortedAt', 'desc').where('status', '==', true));
    const catgeorySnap = catgeoryRef.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data: any = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    const catgeoryData = await catgeorySnap.pipe(first()).toPromise();
    return catgeoryData;
  }

  async getAllSubcategoriesForSideMenu() {
    let sublist = [];
    const categories = await this.afs.collection('categories', ref => ref
      .orderBy('sortedAt', 'desc')
      .where('status', '==', true)).snapshotChanges().pipe(
        map(snaps => convertSnaps(snaps))).pipe(first()).toPromise();
    for (const c of categories) {
      if (c.isSubcategories) {
        const subcategories: any = await this.getSubcategoriesSidemenu(c.id);
        if (subcategories.length) {
          for (const sc of subcategories) {
            sublist.push({ id: sc.id, categoryId: c.id, name: sc.name, active: false });
          }
        }
      }
    }
    return sublist
  }

  async getSubcategoriesSidemenu(cid) {
    return new Promise(async (resolve, reject) => {
      const subcategories = await this.afs.collection('categories').doc(cid).collection('subcategories', ref =>
        ref.orderBy('sortedAt', 'desc').where('status', '==', true)).snapshotChanges().pipe(
          map(snaps => convertSnaps(snaps))).pipe(first()).toPromise();
      resolve(subcategories);
    });
  }

  async getSubcategories(id) {
    try {
      // console.log('sub cat', id);
      const subcategoriesRef = this.afs.collection('categories').doc(id).collection('subcategories', ref => ref.orderBy('sortedAt', 'desc'));
      const subcategoriesSnap = subcategoriesRef.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
      subcategoriesSnap.subscribe((data) => {
        console.log(data)
        if (!data.length) {
          //  console.log('sub cat data...', data);
          this.events.publish('food-item:noSubcategories');
        } else {
          //  console.log('sub cat data...', data);
          this.events.publish('food-item:publishSubcategories', data);
        }
      });
    } catch (error) {
      // console.dir(error);
    }
  }
  async updateSubcategoriesPosition(id: string, changedDate: any, catId) {
    // console.log('id & cdate', id, changedDate);
    await this.afs.collection('categories').doc(catId).collection('subcategories').doc(id).update({ sortedAt: changedDate });
    this.events.publish('food-item:updateSubcategoriesPostionSucess');
  }

  async addSubcategory(data, categoryImage: any, catId, banner) {
    try {
      data['sortedAt'] = firebase.firestore.FieldValue.serverTimestamp();
      if (categoryImage.length === 0) {
        data['image'] = { url: 'assets/img/placeholder-img.jpg' };
      }
      const subcategoryDoc = await this.afs.collection('categories').doc(catId).collection('subcategories').add(data);
      if (categoryImage.length !== 0) {
        let imgType = this.sharedService.getImageType(categoryImage[0].imgData);
        const imgRef = this.fbStorage.ref(`subcategories/${catId}/image/${subcategoryDoc.id}/` + new Date().getTime().toString() + imgType);
        await imgRef.putString(categoryImage[0].imgData, 'data_url');
      }
      if (banner.length !== 0) {
        let imgType = this.sharedService.getImageType(banner[0].imgData);
        const imgRef = this.fbStorage.ref(`subCategoriesBanner/${catId}/banner/${subcategoryDoc.id}/` + new Date().getTime().toString() + imgType);
        await imgRef.putString(banner[0].imgData, 'data_url');
      }
      this.events.publish('food-item:addSubcategorySuccess');
    } catch (err) {
      //  console.dir(err);
    }
  }

  async editSubcategory(data, image, subcatId, catId, banner) {
    try {
      if (!data.name) {
        data.name = null
      }
      if (!data.status) {
        data.status = null
      }
      if (!data.image) {
        data.image = { url: null }
      }
      if (!data.banner) {
        data.banner = null
      }
      if (!data.description) {
        data.description = null
      }
      console.log('banner', banner);
      const subcategoryDoc = await this.afs.collection('categories').doc(catId).collection('subcategories').doc(subcatId).update({
        name: data.name,
        status: data.status,
        image: data.image,
        banner: data.banner,
        isExclusive: data.isExclusive,
        description: data.description
      });
      if (image.length !== 0) {
        let imgType = this.sharedService.getImageType(image[0].imgData);
        const imgRef = this.fbStorage.ref(`subcategories/${catId}/image/${subcatId}/` + new Date().getTime().toString() + imgType);
        await imgRef.putString(image[0].imgData, 'data_url');
      }
      if (banner.length !== 0) {
        console.log('here')
        let imgType = this.sharedService.getImageType(banner[0].imgData);
        const imgRef = this.fbStorage.ref(`subCategoriesBanner/${catId}/banner/${subcatId}/` + new Date().getTime().toString() + imgType);
        await imgRef.putString(banner[0].imgData, 'data_url');
      }
      this.events.publish('food-item:editSubcategorySuccess');
    } catch (err) {
      // console.dir(err);
    }
  }

  async deleteSubcategory(subcatId: string, catId: string) {
    try {
      await this.afs.collection('categories').doc(catId).collection('subcategories').doc(subcatId).delete();
      this.events.publish('food-item:deleteSubcategorySuccess');
    } catch (error) {
      // console.log(error);
    }
  }

  async getProductsForSubcategory(subcatId) {
    let productsData = [];

    let allProducts = [];
    const productRef = this.afs.collection('products', ref => ref.orderBy('sortedAt', 'desc').where("categories", "array-contains", subcatId));
    let allProductsref: Subscription = productRef.get().subscribe((querySnapshot: any) => {
      querySnapshot.forEach((doc) => {
        allProducts.push({ id: doc.id, ...doc.data() })
      });
      if (allProducts.length !== 0) {
        this.events.publish('food-item:publishProductsForSubcategory', allProducts);
      } else {
        this.events.publish('food-item:noProductsForSubcategory');
      }
      allProductsref.unsubscribe()
    })
    // 
    // const productRef = this.afs.collection('products', ref => ref.orderBy('sortedAt', 'desc').where("categories", "array-contains", subcatId));
    // const productSnap = productRef.snapshotChanges().pipe(
    //     map(actions => actions.map(a => {
    //         const data: any = a.payload.doc.data();
    //         const id = a.payload.doc.id;
    //         return { id, ...data };
    //     }))
    // );
    // productSnap.subscribe((productsData) => {
    //     // console.log('productData in getProductsForCategory', productsData);
    //     if (productsData.length !== 0) {
    //         this.events.publish('food-item:publishProductsForSubcategory', productsData);
    //     } else {
    //         this.events.publish('food-item:noProductsForSubcategory');
    //     }
    // })
  }

  async changeSubcategoriesStatus(status, catId) {
    try {
      await this.afs.collection('categories').doc(catId).update({
        isSubcategories: status
      });
      this.events.publish('food-item:changeSubcategoriesStatusSuccess');
    } catch (error) {
      console.dir(error);
    }
  }

  async changeCategoryStatus(catId, status) {
    try {
      await this.afs.collection('categories').doc(catId).update({
        status: status
      });
      this.events.publish('food-item:changeCategoryStatusSuccess');
    } catch (error) {
      console.dir(error);
    }
  }

  async changeSubcategoryStatus(catId, subcatId, status) {
    try {
      await this.afs.collection('categories').doc(catId).collection('subcategories').doc(subcatId).update({
        status: status
      });
      this.events.publish('food-item:changeSubcategoryStatusSuccess');
    } catch (error) {
      console.dir(error);
    }
  }

  async changeProductStatus(productId, status) {
    try {
      await this.afs.collection('products').doc(productId).update({
        status: status
      });
      this.events.publish('food-item:changeProductStatusSuccess');
    } catch (error) {
      console.dir(error);
    }
  }

  async getSubcategoriesInNewProduct(cid) {
    try {
      const subcategoriesRef = this.afs.collection('categories').doc(cid).collection('subcategories', ref => ref.orderBy('sortedAt', 'desc'));
      const subcategoriesSnap = subcategoriesRef.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
      const subcategoriesData = await subcategoriesSnap.pipe(first()).toPromise();
      return subcategoriesData;
    } catch (error) {
      // console.dir(error);
    }
  }

  async getSubcategoriesForUser(id) {
    try {
      // console.log('sub cat', id);
      const subcategoriesRef = this.afs.collection('categories').doc(id).collection('subcategories', ref => ref
        .orderBy('sortedAt', 'desc')
        .where('status', '==', true));
      const subcategoriesSnap = subcategoriesRef.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
      subcategoriesSnap.subscribe((data) => {
        if (!data.length) {
          //  console.log('sub cat data...', data);
          this.events.publish('food-item:noSubcategoriesForUser');
        } else {
          //  console.log('sub cat data...', data);
          this.events.publish('food-item:publishSubcategoriesForUser', data);
        }
      });
    } catch (error) {
      // console.dir(error);
    }
  }

  // async getAnalyticsProductsCount() {
  //   try {
  //     this.afs.collection('analytics').doc('products').valueChanges().subscribe((data: any) => {
  //       this.events.publish('food-item:publishAnalyticsProductsCount', data.count);
  //     });
  //   } catch (error) {
  //     console.dir(error);
  //   }

  // }

  async makeProductCopies(copies, product) {
    try {
      let makeCopies = firebase.functions().httpsCallable('products-makeCopies');
      makeCopies({ copies: copies, product: product }).then((response) => {
        //console.log(response);
        if (response.data.success) {
          this.events.publish('food-item:makeProductCopiesSuccess');
        } else {
          this.events.publish('food-item:makeProductCopiesFailure');
        }
      })
    } catch (error) {
      // console.dir(error);
      this.events.publish('food-item:makeProductCopiesFailure');
    }
  }
  async getCategoriesBanner(cid: string) {
    try {
      const catBanner: any = await this.afs.collection('categories').doc(cid).valueChanges().pipe(first()).toPromise();
      this.events.publish('food-item:publishCategoriesBanner', catBanner.banner);
    } catch (error) {
      // console.dir(error);
    }
  }
  async getSubCategoriesBanner(cid: string, scid: string) {
    try {
      // console.log('scid', scid);
      const scatBanner: any = await this.afs.collection('categories').doc(cid)
        .collection('subcategories').doc(scid).valueChanges().pipe(first()).toPromise();
      // console.log('scatBanner', scatBanner);
      this.events.publish('food-item:publishSubCategoriesBanner', scatBanner.banner);
    } catch (error) {
      // console.dir(error);
    }
  }

  async getOutOfStockProducts() {
    try {
      console.log('in getOutOfStockProducts...');
      const productRef = this.afs.collection('products', ref => ref
        .where('productQty', '==', '0')
        .orderBy('sortedAt', 'desc')
      );
      const productsSnap = productRef.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data: any = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
      this.outOfStockSubs = productsSnap.subscribe(outOfStocks => {
        console.log('productsData os', outOfStocks);
        this.events.publish('food-item:publishOutOfStockProducts', outOfStocks);
      });
    } catch (error) {
      console.dir(error);
      error['location'] = 'product-service:getOutOfStockProducts';
      this.logglyService.log(error);
    }
  }

  async getProductsWithRating() {
    return new Promise(async (resolve) => {
      try {
        let allProducts = [];
        const productsData = await this.afs.collection('products', ref => ref.orderBy('rating')).snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data: any = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        );
        allProducts = await productsData.pipe(first()).toPromise();
        resolve(allProducts);

      } catch (error) {
        resolve([]);
      }
    });
  }
  async getRatings(productId) {
    let allRatings = [];
    const productsData = await this.afs.collection('products').doc(productId).collection('ratings').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    allRatings = await productsData.pipe(first()).toPromise();
    return allRatings;
  }

  async updateRating(prodId, ratingId, updatedField) {
    try {
      await this.afs.collection('products').doc(prodId).collection('ratings').doc(ratingId).update(updatedField);
      return true;
    } catch (error) {
      console.log('rating err:', error);
      return false;
    }
  }

  async getVendorProducts(vendorId) {
    try {
      const products = await this.afs.collection('products', ref => ref.where('vendorId', '==', vendorId)).snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data: any = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
      let allProducts = await products.pipe(first()).toPromise();
      return allProducts;
    } catch (error) {

    }
  }

  async setGstExclusiveForProduct(productId, gtsValue) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.afs.collection('products').doc(productId).update({ gstExclusive: gtsValue });
        resolve(true);
      } catch (error) {
        console.dir(error);
        error['location'] = 'vendor-service:setGstExclusiveForProduct';
        this.logglyService.log(error);
        resolve(false);
      }
    });
  }

  // async getCategoryProducts(cid) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       let allProducts = [];
  //       const productsData = this.afs.collection('products', ref => ref
  //         .orderBy('sortedAt', 'desc')
  //         .where("categories", "array-contains", cid)
  //         .where('productType', '==', 'food')
  //       ).snapshotChanges().pipe(
  //         map(actions => actions.map(a => {
  //           const data: any = a.payload.doc.data();
  //           const id = a.payload.doc.id;
  //           return { id, data };
  //         }))
  //       );
  //       allProducts = await productsData.pipe(first()).toPromise();
  //       resolve(allProducts)
  //       // let allProductsref: Subscription = productsData.get().subscribe((querySnapshot: any) => {
  //       //     querySnapshot.forEach((doc) => {
  //       //         allProducts.push({id: doc.id, data: doc.data()})
  //       //     });
  //       //     resolve(allProducts)
  //       //     allProductsref.unsubscribe()
  //       // })
  //     } catch (error) {
  //       console.dir(error);
  //       resolve([]);
  //     }
  //   });
  // }

  async getCategoryProducts(cid) {
    return new Promise(async (resolve, reject) => {
      try {
        let allProducts = [];
        const productsData = this.afs.collection('products', ref => ref
          .orderBy('sortedAt', 'desc')
          .limit(this.configService.environment.shopProductsLimit)
          .where("categories", "array-contains", cid)
          .where('productType', '==', 'food')
        )
        const adminProductsSub = productsData.snapshotChanges()
          .subscribe((response: any) => {
            if (!response.length) {
              console.log('No Data Available');
              resolve([]);
            }
            this.productsForCategory = [];
            this.lastResponseForCategoryProducts = response[response.length - 1].payload.doc;
            for (const product of response) {
              this.productsForCategory.push({ id: product.payload.doc.id, data: product.payload.doc.data() });
            }
            console.log('products in getProductsForAdminProducts', this.productsForCategory);
            this.events.publish('food-item:publishProductsForAdminProducts', this.productsForCategory);
            resolve(this.productsForCategory);
          }, error => {
            adminProductsSub.unsubscribe();
          });
      } catch (error) {
        console.dir(error);
        resolve([]);
      }
    });
  }

  async loadMoreCategoryProducts(cid) {
    return new Promise(async (resolve) => {
      let productRef = this.afs.collection('products', ref => ref.orderBy('sortedAt', 'desc')
        .limit(this.configService.environment.shopProductsLimit)
        .where("categories", "array-contains", cid)
        .where('productType', '==', 'food')
        .startAfter(this.lastResponseForCategoryProducts))

      const loadMoreAdminProductsSub = productRef.snapshotChanges()
        .subscribe((response: any) => {
          if (!response.length) {
            console.log('No Data Available');
            resolve([]);
            return false;
          }
          this.productsForCategory = [];
          //this.firstResponseForAdminProducts = response[0].payload.doc
          this.lastResponseForCategoryProducts = response[response.length - 1].payload.doc;
          console.log('response in loadmore', response);
          for (const product of response) {
            this.productsDataForAdminProducts.push({ id: product.payload.doc.id, data: product.payload.doc.data() });
          }
          console.log('load more products in loadMoreProductsForAdminProducts', this.productsDataForAdminProducts);
          resolve(this.productsDataForAdminProducts);
        }, error => {
          loadMoreAdminProductsSub.unsubscribe();
        });
    })
  }

  async getBrandProducts(bid) {
    return new Promise(async (resolve, reject) => {
      try {
        let allProducts = [];
        const productsData = this.afs.collection('products', ref => ref
          .orderBy('sortedAt', 'desc')
          .where("brands", "array-contains", bid)
          .where('productType', '==', 'food')
        );
        let allProductsref: Subscription = productsData.get().subscribe((querySnapshot: any) => {
          querySnapshot.forEach((doc) => {
            allProducts.push({ id: doc.id, data: doc.data() })
          });
          resolve(allProducts)
          allProductsref.unsubscribe()
        })
      } catch (error) {
        console.dir(error);
        resolve([]);
      }
    });
  }


  async makeProductClones(clones, productId) {
    try {
      let makeClones = firebase.functions().httpsCallable('products-makeProductClones');
      makeClones({ clones, productId }).then((response) => {
        if (response.data.success) {
          return true;
        } else {
          return false;
        }
      })
    } catch (error) {
      console.log("err:", error);
      return false;
    }
  }

  async getTemplates() {
    return new Promise(async (resolve) => {
      try {
        const docRef = this.afs.collection('templates', ref => ref.where('type', '==', 'product-addOn'));
        const docSnap = docRef.snapshotChanges().pipe(
          map(action => action.map(a => {
            const data: any = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        )
        docSnap.subscribe((data) => {
          resolve(data);
          // console.log(data);
        })
      }
      catch (err) {
        console.log('err:', err);
      }
    })
  }

  // async getAppointmentSettings() {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       let data = await this.afs.collection('features').doc('appointment')
  //       data.get().toPromise().then((doc) => {
  //         if (doc.exists){
  //           resolve(doc.data())
  //         }
  //         else{
  //           resolve(false)
  //         }
  //       })
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });
  // }

  removeSubscriptions() {
    this.events.unsubscribe('food-item:addProduct');
    this.events.unsubscribe('food-item:getProducts');
    this.events.unsubscribe('food-item:getProductWithId');
    this.events.unsubscribe('food-item:updateStatus');
    this.events.unsubscribe('food-item:editProduct');
    this.events.unsubscribe('food-item:deleteProduct');
    this.events.unsubscribe('food-item:loadMoreProducts');
    this.events.unsubscribe('food-item:addCategory');
    this.events.unsubscribe('food-item:getAllCategories');
    this.events.unsubscribe('food-item:deleteCategory');
    this.events.unsubscribe('food-item:editCategory');
    this.events.unsubscribe('food-item:getAllCategoriesForShop');
    this.events.unsubscribe('food-item:getProductsForCategory');
    this.events.unsubscribe('food-item:getProductsForAdminProducts');
    this.events.unsubscribe('food-item:getAllProductsForAdminProducts');
    this.events.unsubscribe('food-item:loadMoreProductsForAdminProducts');
  }

}
