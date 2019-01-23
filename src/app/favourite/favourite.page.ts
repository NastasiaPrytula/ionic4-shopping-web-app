import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Products } from '../home/Products';
import { ProductsService } from '../services/products.service';
import { FavouriteServiceService } from '../services/favourite-service.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  productsList: Products[];
  favoruiteProducts: Products[];
  showDataNotFound = true;
  descending: boolean = false;
  order: number;
  column: any = 'price';
  name:string;
  result: number[];
  term;

  constructor( 
               public ProductsService: ProductsService,
               public navCtrl: NavController,
               public favouriteService: FavouriteServiceService) {}
ngOnInit() {
   this.getFavouriteProduct();
 }
 
removeFavourite(products: Products) {
  this.favouriteService.removeLocalFavourite(products);
  this.getFavouriteProduct();
  }
            
getFavouriteProduct() {
  this.favoruiteProducts = this.favouriteService.getLocalFavouriteProducts();
  }          
}