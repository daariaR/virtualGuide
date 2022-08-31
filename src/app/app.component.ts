import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CartserviceService } from './service/cartservice.service';

const cartKey = 'cart-key-listsdderd4ee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bgtours';

  isShowing = false;

  hoverShop=false;

  openMenu(){
    this.hoverShop = true;
    // console.log("yes")
  }


  total=0;

  here=true;

  artsCart : any;

  onCartClick(){

    this.here=true;

    this.total=0;

    this.artsCart = JSON.parse(localStorage.getItem(cartKey)  || '[]');

    this.artsCart.forEach(( element: any ) => {
      this.total += element.price
    });

  console.log(this.artsCart)


  if(this.artsCart.length == 0){
    this.here = false;
  }
  }

  constructor(private cartService: CartserviceService, public router:Router, public dialog: MatDialog){}


  deleteCartItem(art:any) {


    let dialogRef = this.dialog.open(ConfirmDialogComponent, {width: '380px'} );
    let decision;
    dialogRef.afterClosed().subscribe((value) => { console.warn("value", decision =value );
  
        if(decision){
          this.cartService.deleteCartItem(art);

          this.artsCart = JSON.parse(localStorage.getItem(cartKey)  || '[]');

          this.here=true;

          this.total = 0;

          this.artsCart.forEach(( element: any ) => {
            this.total += element.price
          });

          if(this.artsCart.length == 0){
            this.here = false;
          }
        }else{
          console.log("not deleted")
        }
  }); 
  }
 


  arts = [
    { image: "assets/img/mrtva1.JPG",image3: "assets/img/mrtva1.JPG", img2:false, image2: "", name: "BASKET", price: 700, type: "dead", author: "Petra"},
    { image: "assets/img/mrtva2.JPG",image3: "assets/img/mrtva2.JPG", img2:true, image2: "assets/img/mrtvaa2.JPG", name: "TABLE", price: 900, type: "dead", author: "Petra"},     
    { image: "assets/img/zena1.JPG",image3: "assets/img/zena1.JPG", img2:true, image2: "assets/img/zenaa1.JPG", name: "SHE", price: 650, type: "woman", author: "Petra"},     
    { image: "assets/img/zena7.JPG",image3: "assets/img/zena7.JPG", img2:false, image2: "", name: "WAR", price: 550, type: "woman", author: "Petra"},     
    { image: "assets/img/nature1.JPG",image3: "assets/img/nature1.JPG", img2:false, image2: "", name: "CREEK", price: 280, type: "nature", author: "Petra"},    
    { image: "assets/img/zena4.JPG",image3: "assets/img/zena4.JPG", img2:true, image2: "assets/img/zenaa4.JPG", name: "COLOSSEUM", price: 600, type: "woman", author: "Petra"},
    { image: "assets/img/zena6.JPG",image3: "assets/img/zena6.JPG", img2:true, image2: "assets/img/zenaa6.JPG", name: "HAT", price: 500, type: "woman", author: "Petra"},
    { image: "assets/img/nature2.JPG",image3: "assets/img/nature2.JPG", img2:false, image2: "", name: "PASTURE", price: 280, type: "nature", author: "Petra"}
  ]




  goToLegals(){
    this.router.navigate(['/about'], {state: { option: "legals" }})
  }

  goToHelp(){
    this.router.navigate(['/about'], {state: { option: "help" }})
  }

}
