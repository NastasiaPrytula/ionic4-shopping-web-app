import { Injectable } from '@angular/core';

import { Products } from '../home/Products';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsList: AngularFireList<any>;
  selectedProducts: Products = new Products();
  constructor( private db: AngularFireDatabase) {
  }
  getData(){
    this.productsList = this.db.list('products');
    return this.productsList;
  }

  insertProducts(products: Products)
  {
    this.productsList.push({
      name: products.name,
      price: products.price,
      description: products.description,
      imagePath: products.imagePath
    })
	}

  deleteProducts(key : string){
    this.productsList.remove(key);
	}
}