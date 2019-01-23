import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { FilterPipe } from 'ngx-filter-pipe';
import { NavController } from '@ionic/angular';

import { Products } from './Products';
import { ProductsService } from '../services/products.service';
import {FavouriteServiceService } from '../services/favourite-service.service';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  userFilter: any = { name: '' };
  productsList: Products[];
  descending: boolean = false;
  order: number;
  column: any = 'price';
  term;
  name:string;
  items:any;
  result: number[];

  constructor( private ProductsService: ProductsService,
               private favouriteService: FavouriteServiceService,
               private cartService: CartServiceService,
               public navCtrl: NavController,) {}

  ngOnInit() {
    var Data = this.ProductsService.getData();
    Data.snapshotChanges().subscribe(item => {
      this.productsList = [];
      item.forEach(element => {
        var SaveData = element.payload.toJSON();
        SaveData["key"] = element.key;
        this.productsList.push(SaveData as Products);
      });
    }); 
  }
 
  initializeItems() {
    this.items=this.productsList;
  }

  getItems(ev: any) {  
    this.initializeItems();
    const val = ev.target.value;
    if  (val && val.trim()  == ''){
      this.ngOnInit();
    } else
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  add(products: Products) {
    this.favouriteService.addFavouriteProduct(products);
  }

  addToCart(products: Products) {
    this.cartService.addToCart(products);
  }
 }