import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { HomePage } from '../home/home.page';
import { CartPage} from '../cart/cart.page';

const routes: Routes = [
    {
      path: '',
      component: TabsComponent,
     
       children: [
          {
            path: 'home',
            loadChildren: '../home/home.module#HomePageModule'  
          },
      {
        path: 'cart',
        loadChildren: '../cart/cart.module#CartPageModule'
      },

  {
    path: 'favourite',
    loadChildren: '../favourite/favourite.module#FavouritePageModule'
},   
  ]
},
    {
      path: '',
      redirectTo: '/tabs/home',
      pathMatch: 'full',
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule {}
