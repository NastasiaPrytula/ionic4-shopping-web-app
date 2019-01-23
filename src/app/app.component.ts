import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';

import { AuthService } from './services/auth.service';
import { CartServiceService } from './services/cart-service.service';
import { FavouriteServiceService } from './services/favourite-service.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  email:string;
  password: string;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menu: MenuController,
    public authService: AuthService,
          public ProductsService: ProductsService,
          public favouriteService: FavouriteServiceService,
          public cartService: CartServiceService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
 
  open() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  signupUser() {
    this.authService.signupUser(this.email, this.password);
    this.email = this.password = '';
  }

  signinUser() {
    this.authService.signinUser(this.email, this.password);
    this.email = this.password = '';
  }

  onLogout() {
    this.authService.logout();
  }
}

