import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule} from '@ionic/angular';
import { TabsRoutingModule } from './tabs-routing.module';
import { HomePageModule } from '../home/home.module';
import { TabsComponent } from './tabs.component';
import { CartPageModule } from '../cart/cart.module';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    TabsRoutingModule,
    IonicModule,
    HomePageModule,
    CartPageModule
  ]
})
export class TabsModule { }
