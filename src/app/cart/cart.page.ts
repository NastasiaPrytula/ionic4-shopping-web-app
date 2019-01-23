import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { CartServiceService } from '../services/cart-service.service';
import { Product } from '../home/Product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})

export class CartPage implements OnInit {

  cartProducts: Product[];
  descending: boolean = false;
  order: number;
  column: any = 'price';
  name:string;
  result: number[];
  term;

  constructor( 
               public ProductsService: ProductsService,
               public cartService: CartServiceService,
               public navCtrl: NavController) {}

  ngOnInit() {
    this.getCartProduct();
  }

  removeCartProduct(product: Product) {
    this.cartService.removeLocalCartProduct(product);
    this.getCartProduct();
  }

  getCartProduct() {
    this.cartProducts = this.cartService.getLocalCartProducts();
  }
}

