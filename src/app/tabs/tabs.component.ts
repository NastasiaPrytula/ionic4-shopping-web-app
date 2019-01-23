import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import {FavouriteServiceService } from '../services/favourite-service.service';
import { CartServiceService } from '../services/cart-service.service';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor(public cartService: CartServiceService,
    public favouriteService: FavouriteServiceService) { }

  ngOnInit() {
  }

}
