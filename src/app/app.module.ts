import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy,RouterModule, Routes } from '@angular/router'; 
import { FilterPipeModule } from 'ngx-filter-pipe';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SortPipe } from './sort.pipe';
import { IonicStorageModule } from '@ionic/storage';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsService } from './services/products.service';
import { CartServiceService } from './services/cart-service.service';
import { FavouriteServiceService } from './services/favourite-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],

  entryComponents: [ ],
 
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    OrderModule,
    FilterPipeModule 
  ],
 
    providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ProductsService,
    CartServiceService,
    FavouriteServiceService

  ],
 
  bootstrap: [AppComponent]
})
export class AppModule {}
