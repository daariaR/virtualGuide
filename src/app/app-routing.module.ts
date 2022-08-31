import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogComponent } from './blog/blog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EshopComponent } from './eshop/eshop.component';
import { HomeComponent } from './home/home.component';
import { PlacesComponent } from './places/places.component';
import { ProductComponent } from './product/product.component';
import { VoyagesComponent } from './voyages/voyages.component';

const routes: Routes = [

  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},

  {path:"voyages", component: VoyagesComponent},
  {path:"places", component: PlacesComponent},

  {path:"eshop", component: EshopComponent},
  {path:"product", component: ProductComponent},
  {path:"check-out", component: CheckoutComponent},

  {path:"about", component: AboutComponent},

  {path:"blog", component: BlogComponent},
  {path:"blog-page", component: BlogPageComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
