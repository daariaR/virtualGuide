import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartserviceService } from '../service/cartservice.service';

@Component({
  selector: 'app-quick-view-dialog',
  templateUrl: './quick-view-dialog.component.html',
  styleUrls: ['./quick-view-dialog.component.css']
})
export class QuickViewDialogComponent implements OnInit {

  constructor(private router:Router,public dialogRef: MatDialogRef<QuickViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: MatSnackBar, private cartService: CartserviceService) { }

  art: any;  
    
  ngOnInit(): void {
    this.art = this.data.passedArt;
    // console.log(this.art);
  }

  goToPageProduct(product: any){
    this.router.navigate(['/product'], {state: { sentProduct: product }})
  }

  isShowing = false;
  closed = false;

  addToCart(product:any){
    let added = this.cartService.addToCart(product);

    if(added){
      this._snackBar.open("added to cart", "", {duration: 2500})
    }else{
      this._snackBar.open("already in cart", "", {duration: 2500})
    }
  }

}
