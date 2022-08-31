import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Product } from '../models/product';
import { CartserviceService } from '../service/cartservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = new Product();

  constructor(private router: Router, private _snackBar: MatSnackBar, private cartService: CartserviceService, private appCom: AppComponent) {
    // console.log(this.router.getCurrentNavigation()?.extras?.state?.['sentProduct']);

    this.product = this.router.getCurrentNavigation()?.extras?.state?.['sentProduct'];

  }

  ngOnInit(): void {

    this.product = JSON.parse(localStorage.getItem("products")  || '[]');

  }

  


  addToCart(product:any){
    let added = this.cartService.addToCart(product);

    if(added){
      let snackBarRef = this._snackBar.open("added to cart", "view", {duration: 4500})
      snackBarRef.onAction().subscribe(() =>{ this.appCom.onCartClick() , this.appCom.isShowing = true})
    }else{
      this._snackBar.open("already in cart", "", {duration: 2500})
    }
  }


  changeImg1(){
    this.product.image = this.product.image3;
  }

  changeImg2(){
    this.product.image = this.product.image2;
  }


}

