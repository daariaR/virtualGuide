import { Injectable } from '@angular/core';


const cartKey = 'cart-key-listsdderd4ee';
let carts = JSON.parse(localStorage.getItem(cartKey)  || '[]');


@Injectable({
  providedIn: 'root'
})
export class CartserviceService {


  constructor() { }

  addToCart(product:any): any{

    if (carts.find((x: { name: any; }) => x.name === product.name)) {
      return false;
    }
    
    carts.push(product);

    localStorage.setItem(cartKey, JSON.stringify(carts))

    // console.log(localStorage.getItem(cartKey))
    // localStorage.getItem(cartKey);
    return true;
  }


  deleteCartItem(art:any){
    carts = carts.filter((x: { name: any; }) => x.name !== art.name);
    return localStorage.setItem(cartKey, JSON.stringify(carts)); 
  }

}
