import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from '../service/cartservice.service';
import { first } from 'rxjs/operators';
import { Product } from '../models/product';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  information ={name:"health", h1:"Health Tips", p1:"Public health services in Brazil are free for foreign tourists. Therefore, if you are in an accident, need medical attention, or have any health issues, just call the Mobile Emergency Medical Service (SAMU) on the toll-free number below.", h2:"Vaccines", p2:"In order to enter Brazil, it is not mandatory to be vaccinated against any specific type of disease. However, there are some regions in the country where there is a Recommendation for Vaccination (ACRV) before the visit. For example, in the regions where cases of yellow fever have been documented."}  ;

  sentInfo :any;
  tabIndex:any;

  constructor(private cartService: CartserviceService, private router:Router) {
      this.sentInfo = this.router.getCurrentNavigation()?.extras?.state?.['option'];

      if(this.sentInfo !== undefined){
        this.tabIndex = 1;
        if(this.sentInfo == 'health'){ this.change('health') }
        else if(this.sentInfo == 'safety'){ this.change('safety') }
        else if(this.sentInfo == 'numbers'){ this.change('numbers') }
        else if(this.sentInfo == 'weather'){ this.change('weather') }
        else if(this.sentInfo == 'language'){ this.change('language') }
        else if(this.sentInfo == 'currency'){ this.change('currency') }

        else if(this.sentInfo == 'help'){ this.tabIndex = 2; }
        else if(this.sentInfo == 'legals'){ this.tabIndex = 3; }
      }
  }

   change(val: any){
      if(val == 'health'){
    this.information =     
    {name:"health", h1:"Health Tips", p1:"Public health services in Brazil are free for foreign tourists. Therefore, if you are in an accident, need medical attention, or have any health issues, just call the Mobile Emergency Medical Service (SAMU) on the toll-free number below.", h2:"Vaccines", p2:"In order to enter Brazil, it is not mandatory to be vaccinated against any specific type of disease. However, there are some regions in the country where there is a Recommendation for Vaccination (ACRV) before the visit. For example, in the regions where cases of yellow fever have been documented."}
  }else if(val == 'safety'){
    this.information =  
    {name:"safety",h1:"Is Belgrade safe?",p1:"Belgrade can be considered a safe city, on par with other European metropolises. Without restrictions and fear, you can walk freely both day and night and move wherever you want.",h2:"Watch out",p2:"We do not recommend driving in crowded vehicles of the city transport company, as you may end up without your wallet, mobile phone or other valuables. Quite simply - pickpockets are 'additional equipment' in such situations and have existed as long as public transport has existed. Pay attention to personal belongings in any situation when moving through crowds. It's always better to wait for another bus, or if you still have to be in a crowd - extra attention will not go amiss."}
  }else if(val == 'numbers'){
    this.information =  
    {name:"numbers",h1:"Emergency numbers - police, fire and ambulance",p1:"police number – 192, fire brigade number - 193, emergency number - 194",h2:"When to call 194?",p2:"The emergency services are contacted when you suspect that your life or the life of the person you are calling the emergency services for is in immediate danger, i.e. when you think that without their intervention the worst outcome may occur"}
  }else if(val == 'weather'){
    this.information =  
    {name:"weather",h1:"Local weather",p1:"The climate of Serbia is between a continental climate in the north, with cold dry winters, and warm, humid summers with well distributed rainfall patterns, and a more Mediterranean climate in the south with hot, dry summers and autumns and average relatively cool and more rainy winters with heavy mountain snowfall.",h2:"Current weather",p2:"Wheather in Belgrade is available online on https://www.accuweather.com/"}
  }else if(val == 'language'){
    this.information =  
    {name:"language",h1:"Local language",p1:"Serbian is the standardised variety of the Serbo-Croatian language, which belongs in the family of Slavic languages. It has two official scripts, Latin and Cyrilic, and both are widely used. Most places will have English menus or English speakers to help, but when visiting older venues be warned that you might not have such luck. ",h2:"",p2:""}
  }else if(val == 'currency'){
    this.information =  
    {name:"currency",h1:"Currency",p1:"The official currency of Serbia is the Dinar. Credit cards are accepted in most hotels and shops, and nearly all ATMs accept international bank cards. Currency exchange in Belgrade (including at Belgrade Airport) accept Sterling, US Dollars and Euros.",h2:"",p2:""}

  }
   }
 
  ngOnInit(): void { }

  info=[
    {name:"health", h1:"Health Tips", p1:"Public health services in Brazil are free for foreign tourists. Therefore, if you are in an accident, need medical attention, or have any health issues, just call the Mobile Emergency Medical Service (SAMU) on the toll-free number below.", h2:"Vaccines", p2:"In order to enter Brazil, it is not mandatory to be vaccinated against any specific type of disease. However, there are some regions in the country where there is a Recommendation for Vaccination (ACRV) before the visit. For example, in the regions where cases of yellow fever have been documented."},
    {name:"safety",h1:"Is Belgrade safe?",p1:"Belgrade can be considered a safe city, on par with other European metropolises. Without restrictions and fear, you can walk freely both day and night and move wherever you want.",h2:"Watch out",p2:"We do not recommend driving in crowded vehicles of the city transport company, as you may end up without your wallet, mobile phone or other valuables. Quite simply - pickpockets are 'additional equipment' in such situations and have existed as long as public transport has existed. Pay attention to personal belongings in any situation when moving through crowds. It's always better to wait for another bus, or if you still have to be in a crowd - extra attention will not go amiss."},
    {name:"numbers",h1:"Emergency numbers - police, fire and ambulance",p1:"police number – 192, fire brigade number - 193, emergency number - 194",h2:"When to call 194?",p2:"The emergency services are contacted when you suspect that your life or the life of the person you are calling the emergency services for is in immediate danger, i.e. when you think that without their intervention the worst outcome may occur"},
    {name:"weather",h1:"Local wheather",p1:"Wheather in Belgrade is available online on https://www.accuweather.com/",h2:"",p2:"The climate of Serbia is between a continental climate in the north, with cold dry winters, and warm, humid summers with well distributed rainfall patterns, and a more Mediterranean climate in the south with hot, dry summers and autumns and average relatively cool and more rainy winters with heavy mountain snowfall."},
    {name:"language",h1:"Local language",p1:"Serbian is the standardised variety of the Serbo-Croatian language, which belongs in the family of Slavic languages. It has two official scripts, Latin and Cyrilic, and both are widely used. Most places will have English menus or English speakers to help, but when visiting older venues be warned that you might not have such luck. ",h2:"",p2:""},
    {name:"currency",h1:"Currency",p1:"The official currency of Serbia is the Dinar. Credit cards are accepted in most hotels and shops, and nearly all ATMs accept international bank cards. Currency exchange in Belgrade (including at Belgrade Airport) accept Sterling, US Dollars and Euros.",h2:"",p2:""}
  ]

   
  currentIndex: any = -1;
  showFlag: any = false;

  galleryCollection = [
    {
      image: "/assets/img/bg.jpg",
        thumbImage: "/assets/img/bg.jpg",
      title: "Experience city",
      cols: 3,
      rows: 1
    },
    {
      image: "/assets/img/mapabg.jpg",
        thumbImage: "/assets/img/mapabg.jpg",
      title: "City map",
      cols: 2,
      rows: 2
    },
    {
      image: "/assets/img/mp.jpg",
        thumbImage: "/assets/img/mp.jpg",
      title: "Let us guide you",
      cols: 1,
      rows: 1
    },
    {
      image: "/assets/img/office.jpg",
        thumbImage: "/assets/img/office.jpg",
      title: "Welcome to our company",
      cols: 2,
      rows: 1
    },
    {
      image: "/assets/img/gallery.jpg",
        thumbImage: "/assets/img/gallery.jpg",
      title: "Art gallery",
      cols: 2,
      rows: 1
    },
    {
      image: "/assets/img/office2.png",
        thumbImage: "/assets/img/office2.png",
      title: "Workplace",
      cols: 3,
      rows: 1
    }
  ];


  showLightbox(index: any) {
    this.currentIndex = index;
    this.showFlag = true;
  }
  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }


}
