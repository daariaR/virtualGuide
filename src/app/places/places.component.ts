import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Place } from '../models/place';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  place = new Place();

  constructor(private router:Router) { 
    this.place = this.router.getCurrentNavigation()?.extras?.state?.['sentPlace'];
  
  }

    photoURL(mapUrl:any) :any {
    if(mapUrl=="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3948250155227!2d179.99780594985205!3d28.647894490051748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab4f7ba19a5%3A0x29bdf885da51d1b2!2zS2FsZW1lZ2Rhbiwg0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1660925154314!5m2!1ssr!2srs"){
      return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3948250155227!2d179.99780594985205!3d28.647894490051748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab4f7ba19a5%3A0x29bdf885da51d1b2!2zS2FsZW1lZ2Rhbiwg0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1660925154314!5m2!1ssr!2srs";
    }else if(mapUrl=="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45309.44130574732!2d20.359530125725573!3d44.78406549376473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6fb141f8cb6f%3A0xb76e977db0ba8356!2z0JDQtNCwINCm0LjQs9Cw0L3Qu9C40ZjQsA!5e0!3m2!1ssr!2srs!4v1661087910622!5m2!1ssr!2srs"){
      return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45309.44130574732!2d20.359530125725573!3d44.78406549376473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6fb141f8cb6f%3A0xb76e977db0ba8356!2z0JDQtNCwINCm0LjQs9Cw0L3Qu9C40ZjQsA!5e0!3m2!1ssr!2srs!4v1661087910622!5m2!1ssr!2srs"
    }else if(mapUrl=="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11321.790764768804!2d20.446659020029553!3d44.81244338645948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6552fc8a9dc7%3A0xdf92f5073d8e966b!2z0KHQsNCy0LDQvNCw0LvQsCwg0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1661088086656!5m2!1ssr!2srs"){
      return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11321.790764768804!2d20.446659020029553!3d44.81244338645948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6552fc8a9dc7%3A0xdf92f5073d8e966b!2z0KHQsNCy0LDQvNCw0LvQsCwg0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1661088086656!5m2!1ssr!2srs"
    }else if(mapUrl=="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.165445140104!2d20.46240355039563!3d44.81819403423414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab14fc4d309%3A0x105039db29e8e91b!2z0KHQutCw0LTQsNGA0LvQuNGY0LAsINCR0LXQvtCz0YDQsNC0!5e0!3m2!1ssr!2srs!4v1661088135660!5m2!1ssr!2srs"){
      return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.165445140104!2d20.46240355039563!3d44.81819403423414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab14fc4d309%3A0x105039db29e8e91b!2z0KHQutCw0LTQsNGA0LvQuNGY0LAsINCR0LXQvtCz0YDQsNC0!5e0!3m2!1ssr!2srs!4v1661088135660!5m2!1ssr!2srs"
    }else if(mapUrl==""){
      return null;
    }

  }

  ngOnInit(): void {

    this.place = JSON.parse(localStorage.getItem("place")  || '[]');

  }

  placesOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    navSpeed: 20,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      600: {
        items: 2
      },
      740: {
        items: 2
      },
      980: {
        items: 2
      },
      1040: {
        items: 2
      },
      1100: {
        items: 3
      }
    },
    nav: true
  }


}
