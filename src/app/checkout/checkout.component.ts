import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CartserviceService } from '../service/cartservice.service';

const cartKey = 'cart-key-listsdderd4ee';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private cartService: CartserviceService, public dialog: MatDialog) { }

  subtotal: any;
  delivery: any;
  total: any;
  artsCart: any;

  formName: any;
  formLName: any;
  formPhone: any;

  formAddress: any;
  formCity: any;
  formState: any;
  formPostal: any;

  ngOnInit(): void {
    this.subtotal = 0;

    this.artsCart = JSON.parse(localStorage.getItem(cartKey) || '[]');

    this.artsCart.forEach((element: any) => {
      this.subtotal += element.price
    });

    if (this.subtotal > 3000) {
      this.delivery = 0;
      this.total = this.subtotal + this.delivery;
    } else {
      this.delivery = 50;
      this.total = this.subtotal + this.delivery;
    }
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });


  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isLinear = true;

  // deleteCartItem(art:any) {



  //   this.cartService.deleteCartItem(art);

  //   this.artsCart = JSON.parse(localStorage.getItem(cartKey)  || '[]');


  //   this.subtotal = 0;

  //   this.artsCart.forEach(( element: any ) => {
  //     this.subtotal += element.price
  //   });

  //   if(this.subtotal > 3000){
  //     this.delivery = 0;
  //     this.total = this.subtotal + this.delivery;
  //   }else{
  //     this.delivery = 50;
  //     this.total = this.subtotal + this.delivery;
  //   }


  // }


  deleteCartItem(art: any) {

    let dialogRef = this.dialog.open(ConfirmDialogComponent,{width: '380px'});
    let decision;
    dialogRef.afterClosed().subscribe((value) => {
      console.warn("value", decision = value);

      if (decision) {
        this.cartService.deleteCartItem(art);
        this.artsCart = JSON.parse(localStorage.getItem(cartKey) || '[]');

        this.subtotal = 0;

        this.artsCart.forEach((element: any) => {
          this.subtotal += element.price
        });

        if (this.subtotal > 3000) {
          this.delivery = 0;
          this.total = this.subtotal + this.delivery;
        } else {
          this.delivery = 50;
          this.total = this.subtotal + this.delivery;
        }

      } else {
        console.log("not deleted")
      }
    });
  }



  disableSelect = new FormControl(false);

  selected = 'del';




  sendOrder() {
    localStorage.removeItem(cartKey);
  }

}
