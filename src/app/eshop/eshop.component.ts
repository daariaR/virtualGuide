import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { QuickViewDialogComponent } from '../quick-view-dialog/quick-view-dialog.component';

@Component({
  selector: 'app-eshop',
  templateUrl: './eshop.component.html',
  styleUrls: ['./eshop.component.css']
})
export class EshopComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  arts = [
    { image: "assets/img/mrtva1.JPG",image3: "assets/img/mrtva1.JPG", img2:false, image2: "", name: "BASKET", price: 700, type: "dead", author: "Xyohe"},
    { image: "assets/img/mrtva2.JPG",image3: "assets/img/mrtva2.JPG", img2:true, image2: "assets/img/mrtvaa2.JPG", name: "TABLE", price: 900, type: "dead", author: "Annaisha"},     
    { image: "assets/img/zena1.JPG",image3: "assets/img/zena1.JPG", img2:true, image2: "assets/img/zenaa1.JPG", name: "SHE", price: 650, type: "woman", author: "Chiasa"},     
    { image: "assets/img/zena7.JPG",image3: "assets/img/zena7.JPG", img2:false, image2: "", name: "WAR", price: 550, type: "woman", author: "Emiyo"},     
    { image: "assets/img/nature1.JPG",image3: "assets/img/nature1.JPG", img2:false, image2: "", name: "CREEK", price: 280, type: "nature", author: "Xyohe"},    
    { image: "assets/img/zena4.JPG",image3: "assets/img/zena4.JPG", img2:true, image2: "assets/img/zenaa4.JPG", name: "COLOSSEUM", price: 600, type: "woman", author: "Xyohe"},
    { image: "assets/img/zena6.JPG",image3: "assets/img/zena6.JPG", img2:true, image2: "assets/img/zenaa6.JPG", name: "HAT", price: 500, type: "woman", author: "Annaisha"},
    { image: "assets/img/nature2.JPG",image3: "assets/img/nature2.JPG", img2:false, image2: "", name: "PASTURE", price: 280, type: "nature", author: "Emiyo"}
  ]

  imgCollection: Array<object> = [
    {
      image: '/assets/img/ce1.JPG',
      thumbImage: '/assets/img/ce1.JPG',
      title: 'red',
      alt: 'red'
    },
    {
      image: '/assets/img/ce2.JPG',
      thumbImage: '/assets/img/ce2.JPG',
      title: 'nature',
      alt: 'nature'
    },

    {
      image: '/assets/img/ce3.JPG',
      thumbImage: '/assets/img/ce3.JPG',
      alt: 'vase',
      title: 'vase'
    },
    {
      image: '/assets/img/ce4.JPG',
      thumbImage: '/assets/img/ce4.JPG',
      title: 'rose',
      alt: 'rose'
    },
    {
      image: '/assets/img/ce5.JPG',
      thumbImage: '/assets/img/ce5.JPG',
      title: 'city',
      alt: 'city'
    },
    {
      image: '/assets/img/ce6.JPG',
      thumbImage: '/assets/img/ce6.JPG',
      title: 'horse',
      alt: 'horse'
    },
    {
      image: '/assets/img/ce7.JPG',
      thumbImage: '/assets/img/ce7.JPG',
      title: 'sight',
      alt: 'sight'
    },
    {
      image: '/assets/img/ce.JPG',
      thumbImage: '/assets/img/ce.JPG',
      title: 'winner',
      alt: 'winner'
    }

  ];

  // SORT ////////////////////////////////////////////////////////////////////////////


  sortF(val:any){
    if(val === 'lowest'){
      this.arts = this.arts.sort((a, b) => (a.price < b.price) ? -1 : 1);
      return this.arts;
    }else if(val === 'highest'){
      this.arts = this.arts.sort((a, b) => (a.price > b.price) ? -1 : 1);
      return this.arts;
    }
    else if(val === 'name'){
      this.arts = this.arts.sort((a, b) => (a.name < b.name) ? -1 : 1);
      return this.arts;
    }

    return this.arts;
    
  }

  // FILTER FOR TYPE ////////////////////////////////////////////////////////////////////////////

  showType = false;

  showTypeFunc() {
    if (this.showType == false) {
      this.showType = true;
    } else { this.showType = false; }
  }

  typeCollection = [{name: 'All', value:''}, {name: 'Still life', value:'dead'}, {name: 'Woman', value:'woman'}, {name: 'Nature', value:'nature'}]

  selectedOptions :any;
  
  filterCollection(type: any) {


    console.log(this.selectedOptions)

    var artsFilter = [
      { image: "assets/img/mrtva1.JPG",image3: "assets/img/mrtva1.JPG", img2:false, image2: "", name: "BASKET", price: 700, type: "dead", author: "Petra"},
      { image: "assets/img/mrtva2.JPG",image3: "assets/img/mrtva2.JPG", img2:true, image2: "assets/img/mrtvaa2.JPG", name: "TABLE", price: 900, type: "dead", author: "Petra"},     
      { image: "assets/img/zena1.JPG",image3: "assets/img/zena1.JPG", img2:true, image2: "assets/img/zenaa1.JPG", name: "SHE", price: 650, type: "woman", author: "Petra"},     
      { image: "assets/img/zena7.JPG",image3: "assets/img/zena7.JPG", img2:false, image2: "", name: "WAR", price: 550, type: "woman", author: "Petra"},     
      { image: "assets/img/nature1.JPG",image3: "assets/img/nature1.JPG", img2:false, image2: "", name: "CREEK", price: 280, type: "nature", author: "Petra"},    
      { image: "assets/img/zena4.JPG",image3: "assets/img/zena4.JPG", img2:true, image2: "assets/img/zenaa4.JPG", name: "COLOSSEUM", price: 600, type: "woman", author: "Petra"},
      { image: "assets/img/zena6.JPG",image3: "assets/img/zena6.JPG", img2:true, image2: "assets/img/zenaa6.JPG", name: "HAT", price: 500, type: "woman", author: "Petra"},
      { image: "assets/img/nature2.JPG",image3: "assets/img/nature2.JPG", img2:false, image2: "", name: "PASTURE", price: 280, type: "nature", author: "Petra"}
    ];

    // this.arts = artsFilter.filter(s => s.type == type && s.type == type);

    // this.arts = artsFilter.filter(s => s.type == this.selectedOptions.includes(s.type))

    this.arts = artsFilter.filter(s => this.selectedOptions.includes(s.type));

    if(this.selectedOptions === undefined || this.selectedOptions.length == 0 || this.selectedOptions.includes('')){
      this.arts= [
        { image: "assets/img/mrtva1.JPG",image3: "assets/img/mrtva1.JPG", img2:false, image2: "", name: "BASKET", price: 700, type: "dead", author: "Petra"},
        { image: "assets/img/mrtva2.JPG",image3: "assets/img/mrtva2.JPG", img2:true, image2: "assets/img/mrtvaa2.JPG", name: "TABLE", price: 900, type: "dead", author: "Petra"},     
        { image: "assets/img/zena1.JPG",image3: "assets/img/zena1.JPG", img2:true, image2: "assets/img/zenaa1.JPG", name: "SHE", price: 650, type: "woman", author: "Petra"},     
        { image: "assets/img/zena7.JPG",image3: "assets/img/zena7.JPG", img2:false, image2: "", name: "WAR", price: 550, type: "woman", author: "Petra"},     
        { image: "assets/img/nature1.JPG",image3: "assets/img/nature1.JPG", img2:false, image2: "", name: "CREEK", price: 280, type: "nature", author: "Petra"},    
        { image: "assets/img/zena4.JPG",image3: "assets/img/zena4.JPG", img2:true, image2: "assets/img/zenaa4.JPG", name: "COLOSSEUM", price: 600, type: "woman", author: "Petra"},
        { image: "assets/img/zena6.JPG",image3: "assets/img/zena6.JPG", img2:true, image2: "assets/img/zenaa6.JPG", name: "HAT", price: 500, type: "woman", author: "Petra"},
        { image: "assets/img/nature2.JPG",image3: "assets/img/nature2.JPG", img2:false, image2: "", name: "PASTURE", price: 280, type: "nature", author: "Petra"}
      ]
    
    }

  }


  ///////////////////////////////////////////////////////////////////////////////////////////////
  // FILTER FOR PRICE ///////////////////////////////////////////////////////////////////////////

  showPrice = false;

  showPriceFunc() {
    if (this.showPrice == false) {
      this.showPrice = true;
    } else { this.showPrice = false; }
  }


  minSelectedPrice:any;
  maxSelectedPrice:any;


  selectPrice(){
    var artsFilter = [
      { image: "assets/img/mrtva1.JPG",image3: "assets/img/mrtva1.JPG", img2:false, image2: "", name: "BASKET", price: 700, type: "dead", author: "Petra"},
      { image: "assets/img/mrtva2.JPG",image3: "assets/img/mrtva2.JPG", img2:true, image2: "assets/img/mrtvaa2.JPG", name: "TABLE", price: 900, type: "dead", author: "Petra"},     
      { image: "assets/img/zena1.JPG",image3: "assets/img/zena1.JPG", img2:true, image2: "assets/img/zenaa1.JPG", name: "SHE", price: 650, type: "woman", author: "Petra"},     
      { image: "assets/img/zena7.JPG",image3: "assets/img/zena7.JPG", img2:false, image2: "", name: "WAR", price: 550, type: "woman", author: "Petra"},     
      { image: "assets/img/nature1.JPG",image3: "assets/img/nature1.JPG", img2:false, image2: "", name: "CREEK", price: 280, type: "nature", author: "Petra"},    
      { image: "assets/img/zena4.JPG",image3: "assets/img/zena4.JPG", img2:true, image2: "assets/img/zenaa4.JPG", name: "COLOSSEUM", price: 600, type: "woman", author: "Petra"},
      { image: "assets/img/zena6.JPG",image3: "assets/img/zena6.JPG", img2:true, image2: "assets/img/zenaa6.JPG", name: "HAT", price: 500, type: "woman", author: "Petra"},
      { image: "assets/img/nature2.JPG",image3: "assets/img/nature2.JPG", img2:false, image2: "", name: "PASTURE", price: 280, type: "nature", author: "Petra"}
    ];
    this.arts = this.arts.filter(s =>  Number(s.price) >= this.minSelectedPrice && Number(s.price) <= this.maxSelectedPrice);

    this.minSelectedPrice ='' ;
    this.maxSelectedPrice = '';
  }

  resetPrice(){
    this.arts = [
      { image: "assets/img/mrtva1.JPG",image3: "assets/img/mrtva1.JPG", img2:false, image2: "", name: "BASKET", price: 700, type: "dead", author: "Xyohe"},
      { image: "assets/img/mrtva2.JPG",image3: "assets/img/mrtva2.JPG", img2:true, image2: "assets/img/mrtvaa2.JPG", name: "TABLE", price: 900, type: "dead", author: "Annaisha"},     
      { image: "assets/img/zena1.JPG",image3: "assets/img/zena1.JPG", img2:true, image2: "assets/img/zenaa1.JPG", name: "SHE", price: 650, type: "woman", author: "Chiasa"},     
      { image: "assets/img/zena7.JPG",image3: "assets/img/zena7.JPG", img2:false, image2: "", name: "WAR", price: 550, type: "woman", author: "Emiyo"},     
      { image: "assets/img/nature1.JPG",image3: "assets/img/nature1.JPG", img2:false, image2: "", name: "CREEK", price: 280, type: "nature", author: "Xyohe"},    
      { image: "assets/img/zena4.JPG",image3: "assets/img/zena4.JPG", img2:true, image2: "assets/img/zenaa4.JPG", name: "COLOSSEUM", price: 600, type: "woman", author: "Xyohe"},
      { image: "assets/img/zena6.JPG",image3: "assets/img/zena6.JPG", img2:true, image2: "assets/img/zenaa6.JPG", name: "HAT", price: 500, type: "woman", author: "Annaisha"},
      { image: "assets/img/nature2.JPG",image3: "assets/img/nature2.JPG", img2:false, image2: "", name: "PASTURE", price: 280, type: "nature", author: "Emiyo"}
    ];

    this.minSelectedPrice ='' ;
    this.maxSelectedPrice = '';
  }


  ///////////////////////////////////////////////////////////////////////////////////////////////
  // NAVIGATE TO PRODUCT PAGE ///////////////////////////////////////////////////////////////////


  goToPageProduct(product: any){
    this.router.navigate(['/product'], {state: { sentProduct: product }});
    localStorage.setItem("products", JSON.stringify(product))

  }

  openQuickViewDialog(art: any){
    this.dialog.open(QuickViewDialogComponent,
      {data: { passedArt: art }} );
  }

}


