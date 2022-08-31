import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { EshopComponent } from './eshop/eshop.component';
import { BlogComponent } from './blog/blog.component';
import { VoyagesComponent } from './voyages/voyages.component';
import { AboutComponent } from './about/about.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductComponent } from './product/product.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { PlacesComponent } from './places/places.component';

import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { QuickViewDialogComponent } from './quick-view-dialog/quick-view-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EshopComponent,
    BlogComponent,
    VoyagesComponent,
    AboutComponent,
    ProductComponent,
    BlogPageComponent,
    PlacesComponent,
    SafePipe,
    QuickViewDialogComponent,
    CheckoutComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgImageSliderModule,
    CarouselModule,
    CommonModule,
    NgStyle,
    NgClass,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
