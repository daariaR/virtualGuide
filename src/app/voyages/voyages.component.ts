import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.css']
})
export class VoyagesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPagePlace(place: any){
    this.router.navigate(['/places'], {state: { sentPlace: place }})
    localStorage.setItem("place", JSON.stringify(place))

  }

  goToPageBlog1(){
    const blog= {
      name:"The finest restaurants by the river in Belgrade",
      h:"The finest restaurants by the river in Belgrade",
      p:"If you want to enjoy a pleasant atmosphere and excellent food in one of the famous Belgrade restaurants located on the banks of the Sava and Danube, then these are the restaurants that you must visit.",
      h1: "RESTAURANT MOVE", 
      img1: "/assets/img/move.jpg",
      p1:"The Move raft restaurant has found its place in one of the most beautiful parts of Belgrade, on the famous Ušće, where some of the best Belgrade restaurants and clubs are located.",
      img11:"/assets/img/move2.jpg",
      p11: "Whether you want to start your day with your favorite morning coffee on the river or you are looking for a place that can meet the criteria of even the most demanding guests, we are sure of one thing... You will not go wrong with Move restaurant. <br> Its rich international menu offers every guest enjoyment for all the senses, a great music program makes it a favorite when it comes to a great night out.",
      h2:"RESTAURANT USĆE - NATIONAL CLASS",
      p2:"Warm summer evenings have a special charm if you experience them in Belgrade and on the river. The great restaurant Ušće - National Class is one of those restaurants that have the opportunity to welcome their guests right there, on the banks of two rivers, the Sava and the Danube.",
      img2:"/assets/img/klasaa.jpg",
      p22:"Its beautiful garden attracts a large number of true hedonists every evening, who want to enjoy every moment. Modern ambience, friendly staff and a beautiful view of the river make it one of the favorite restaurants for all occasions.",
      h3:"RESTAURANT SAVANOVA",
      p3:"Restaurant Savanova is located on the banks of the Sava River, the famous Sava Promenade. All lovers of nature and what it offers here have the opportunity to enjoy the excellent gastronomic specialties that this restaurant can offer its guests in a relaxed atmosphere and a pleasant breeze that can be felt on the beautifully decorated terrace of the Savanova restaurant.",
      img3:"/assets/img/savanova.jpg",
      p33:"And when the night falls on the city, this beautiful restaurant comes alive with a completely new energy and brightness, so under a clear sky you have the opportunity to observe the city bathed in lanterns. <br>  We believe that this kind of scene will be something that will remain in your memory and something that will make this restaurant your favorite place for both daytime and evening outings in Belgrade.",
      img33:"/assets/img/savanova2.jpg",
      p333:"In addition to enjoying delicious meat, vegetable and other delicacies, here you have the opportunity to enjoy quality local and foreign drinks and desserts that melt under your palate. The youngest members can enjoy the outdoor playroom.",
      date:"Sunday, August 21, 2022",
      preview:"The Move raft restaurant has found its place in one of the most beautiful parts of Belgrade, on the famous Ušće, where some of the best Belgrade restaurants and clubs are .."
    }
    this.router.navigate(['/blog-page'], {state: { sentBlog: blog }})

    localStorage.setItem("blogs", JSON.stringify(blog))

  }

  goToPageBlog2(){
    const blog= {
      name:"Futuristic Belgrade",
      h:"Futuristic Belgrade! At the end of the year, the capital gets its tallest building, and these are the top 7 buildings that 'touch' the metropolitan sky",
      p:"The panorama of Belgrade is changing day by day, skyscrapers are springing up on every corner, and in addition to the old high-rise buildings that make our capital recognizable, modern buildings have begun to adorn the capital, which are becoming new, contemporary symbols of the city.",
      h1: "The Belgrade Tower",
      img1: "/assets/img/kula.jpg",
      p1:"The Belgrade Tower, located in the central part of Belgrade on the water, has certainly already become a new symbol of the city. '<br/>'   More than 70 percent of the works have been completed, and according to the announcements of state leaders, the completion of the entire project is expected at the end of the year.'",
      img11:"/assets/img/.jpg",
      p11: "With a height of 168 meters and 42 floors, the Belgrade Tower is the tallest building in the capital, but also in the whole of Serbia, from which there is a magnificent view of the entire city.  <br/>  <br/>  The highest observation deck in the capital is located on the top floor of the new symbol of the city. <br/>  <br/>  The 'St. Regis' hotel with 119 rooms will be located from the ground floor to the 12th floor of the Belgrade Tower, while from the 14th to the 39th floor there will be 220 branded apartments intended for living. <br/>  <br/>  It is an interesting fact that the building will not have a 13th floor, considering that the 12th floor will have a double level where the rooms for technical support will be located. <br/>  <br/>  The facility also has an underground garage on two levels with 305 parking spaces, the total square footage of the entire Belgrade Tower is 50,000 square meters, and the functioning of the skyscraper will be ensured by a total of 15 elevators. <br/>  <br/> ",
      h2:"West 65 Tower",
      p2:"The West 65 tower is located in Novi Beograd's Block 65, and with its height of 155 meters and 40 floors it is the second largest multi-story building in the capital.",
      img2:"/assets/img/west65.jpg",
      p22:"Construction began in August 2018, and work was completed in mid-2021. <br/>  <br/>  The West 65 tower covers approximately 43,000 square meters, including an underground garage  for tenants with 324 parking spaces.  <br/>  <br/>  Tenants of the building will be able to use a gym, a spa center, and a 20-meter-long pool with thermal water at 30 degrees, while there will also be a shopping center at the foot of the tower. <br/>  <br/> ",
      h3:"Skyline Belgrade Tower",
      p3:"On the site of the former MUP, at the beginning of Kneza Miloša Street, another new, modern symbol of the capital is being built - Skyline Belgrade, which will consist of three towers, 66, 77 and 132 meters high.",
      img3:"/assets/img/skyline.jpg",
      p33:"The tallest of the three high-rise buildings, the Skyline Belgrade Tower, also known as the Skyline Afi Tower, with its 132-meter height and 31 floors, is the third tallest building in the capital.  <br/>  <br/>  It covers 40,000 square meters and is a true example of a modern building, equipped with high technology and sophisticated telecommunications equipment. <br/>  <br/> ",
      img33:"/assets/img/skyline2.jpg",
      p333:" The building has as many as eleven high-speed elevators for employees and visitors, and it also has space for rent on each floor. Within this business tower there will also be an underground garage with 473 parking spaces. <br/>  <br/> ",
      date:"Friday, August 12, 2022",
      preview: "At the end of the year, the capital will get its tallest building, and these are the top 7 buildings that touch the metropolitan sky. Over the past few years, the capital of Serbia has been rapidly keeping pace with other European cities.."
    }
    this.router.navigate(['/blog-page'], {state: { sentBlog: blog }})

    localStorage.setItem("blogs", JSON.stringify(blog))

  }

  goToPageBlog3(){
    const blog= {
      name:"TOP 3 Belgrade bathing spots: See where you can escape from the scorching asphalt",
      h:"TOP 3 Belgrade bathing spots: See where you can escape from the scorching asphalt",
      p:"The temperature in the capital has not dropped for weeks, the mercury in the thermometer 'jumps' up to 40 degrees,and many Belgraders are looking for places where they can 'escape' from the tropical heat and hot concrete.",
      h1: "Belgrade Sea",
      img1: "/assets/img/ada2.jpg",
      p1:"Ada Ciganlija, the popular 'Belgrade sea', with about six kilometers of landscaped beaches, is a favorite place of many citizens during the summer season. <br/> ",
      img11:"/assets/img/.jpg",
      p11: "Ada is the largest and most visited outdoor swimming pool in Serbia, and the landscaped beaches and the park environment in the immediate vicinity of the city center make Sava Lake a unique and unmissable location for both domestic and foreign visitors.",
      h2:"Zemun oasis",
      p2:"The second most famous beach in Belgrade, after Ada Ciganlija, the Zemun oasis Lido on the Great War Island, opened its 'doors' to all visitors on July 2. <br/>  <br/>  The island is located less than five kilometers from the center of Belgrade, and the sandy beach and lush vegetation are ideal for escaping the heat.",
      img2:"/assets/img/lido.jpg",
      p22:"The beach exudes a special tropical spirit, and nature lovers adore it. To make the stay on the Danube bank even more pleasant, the Lido is equipped with drinking water, showers, courts and several catering counters.",
      h3:"The White Rock Island",
      p3:"The Bela Stena weekend settlement is located on the Danube island of Forkontumac. Although it is only 12 kilometers from the capital, Bela stena belongs to Pancevo. <br/>  <br/>  Belgraders cry out for oases that no one knows about, and White Rock is adorned by the famous sandy beach at the tip of the island, facing Belgrade.",
      img3:"/assets/img/stena.jpg",
      p33:"A sandy beach like the sea, shallow water, restaurants and lush vegetation make it ideal for a trip outside the city.  <br/>  <br/>  This beach is wild and although there are no lifeguards and drinking water, it has been attracting a large number of visitors for decades. <br/>  <br/> ",
      img33:"/assets/img/stena2.jpg",
      p333:"It is an ideal place for nature lovers and those who want to escape from noise and asphalt.",
      date:"Sunday, August 7, 2022",
      preview: "The tropical heat in the capital does not stop for days, The temperature in the capital has not dropped for weeks, the mercury in the thermometer 'jumps' up to 40 degrees, and many Belgraders are looking for places where they can 'escape' from .."
    }
    this.router.navigate(['/blog-page'], {state: { sentBlog: blog }})

    localStorage.setItem("blogs", JSON.stringify(blog))

  }

  goToPageBlog4(){
    const blog=  {
      name:"Manifestations during the summer in Belgrade: These are the events you should not miss",
      h:"Manifestations during the summer in Belgrade: These are the events you should not miss",
      p:"Belgrade is a city that has a lot to offer, so it often happens that the citizens of Belgrade themselves do not know what cultural and artistic manifestations are held in their capital city.",
      h1: "Summer on Gardoš", 
      img1: "/assets/img/gardos.jpg",
      p1:"The traditional cultural manifestation 'Summer on Gardoš' began with the performance 'Being Stanoje', which was held on July 2, within which a program was prepared for all generations, in all performing genres. <br> At this year's event, the twenty-first in a row, which lasts until August 29, a total of 36 contents will be shown.",
      img11:"/assets/img/gardos.jpg",
      p11: "On Sundays and Mondays there are activities for the youngest, and on Fridays and Saturdays there are performances and concerts. <br> Tickets for this event can be purchased at all 'Ticketline' sales points and at the Gardoš Summer Stage ticket office one hour before the performance. <br> For children's shows, tickets are paid for only by attendants.",
      h2:"Botanical Garden 'Jevremovac'",
      p2:"The pearl of the capital and the forgotten paradise in the center of the city - the Botanical Garden 'Jevremovac', this summer will offer citizens a lot of content. <br> Namely, on July 15, the group 'THe Wailers' will hold a concert, while from July 23 to 30, concerts will be held as part of CEBEF.",
      img2:"/assets/img/botanicka.jpg",
      p22:"Thus, the citizens of Belgrade, as well as visitors to our capital, will be able to enjoy concerts by Dad Topić, Zvonko Bogdan, Saša Kovačević, Vasil Hadžimanov, Del Arno Band, Zoe Kid, as well as Kolje and Grobovlasnik.",
      h3:"Belgrade Beer Fest",
      p3:"Beer Fest is a long-standing tradition and is one of the most visited festivals in the region. <br> The Belgrade Beer Festival is visited annually by around 500,000 people, and the very idea of ​​the festival was born back in 2003. It is held in Belgrade every year from August 18 to 23.",
      img3:"/assets/img/beer.jpg",
      p33:"Beer Fest 2022 is sure to be as exceptional as every year, with the biggest performers gracing five days in August. Today, Beer Fest is a real symbol of the capital, and the biggest attraction for visitors is the choice of genres, where you can hear rock, pop, metal, hip-hop, reggae and electronic music.",
      img33:"/assets/img/beer2.jpg",
      p333:"Also, what excites many is the increasing offer of beer, especially craft beer, which is the most interesting thing for visitors to try. The Belgrade Beer Fest has been held at Usce since 2008, and until then this event was organized at Kalemegdan.",
      date:"Tuesday, July 26, 2022",
      preview: "Belgrade is a city that has a lot to offer, so it often happens that the citizens of Belgrade themselves do not know what cultural and artistic manifestations are .."
    }
    this.router.navigate(['/blog-page'], {state: { sentBlog: blog }})

    localStorage.setItem("blogs", JSON.stringify(blog))

  }


  goToInfoPage(info:string){
    this.router.navigate(['/about'], {state: { option: info }})
  }

  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    // autoplay:true,
    // autoplayHoverPause: true,
    // autoplaySpeed: 4000,
    // navSpeed: 20,
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
      940: {
        items:3
      }
    },
    nav: true
  }


  places=[
    {
      imgCover:"/assets/img/kalemegdancover.jpg",
      heading:"Belgrade Fortress",
      mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3948250155227!2d179.99780594985205!3d28.647894490051748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab4f7ba19a5%3A0x29bdf885da51d1b2!2zS2FsZW1lZ2Rhbiwg0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1660925154314!5m2!1ssr!2srs",
      text:"The Belgrade fortress, built on a white ridge above the confluence of two big rivers, destroyed and rebuilt over and over for 16 centuries, still stands as the symbol of Serbia's capital.",
      text2:"If you have already visited the capital of Serbia, then you know the city’s symbol, the monumental Belgrade fortress on the white ridge above the confluence of the Sava and the Danube, rising above the city and protecting it. <br><br> If you haven’t seen Belgrade yet, you simply must visit the capital of Serbia and tour Upper and Lower Town of the Belgrade fortress and stroll through the Kalemegdan park. In the shadow of high towers you will feel the spirit of history that is still alive in this place. The “Victor” monument – victor over time, oversees the rivers and guards the river banks.",
      text3:"The Belgrade fortress was built during a long period of time from the 2nd to the 18th century. Destroyed and rebuilt numerous times, the fortress has become the symbol of the city that keeps raising and growing. <br><br> To know the history of the Belgrade fortress means to know the history of our people and to understand the way of life in today modern Belgrade. Armies, people and conquerors have left their mark, hence the historical layers that were left by Romans, Serbs, Turks, Austro-Hungarians lying one beneath another. <br><br> The Romans had built the first fortification in the 2nd century and later it was home to the Roman legion IV Flaviae which protected the area. It suffered devastation by Goths, Huns, Avars and Slavs. Sometime during that tumultuous time, the ancient Singidunum was created. It was erected on the very same white ridge after which it was named “BEO-grad” (WHITE-city). <br><br> Today the Belgrade fortress comprises of Upper and Lower Town and the vast field in front the very fortress that Turks named “Kalemegdan”, joining the words “kale”, which means city, fortress and “megdan”, the Turkish word for field. The most beautiful and most spacious park in nation’s capital once used to be a field where battles were fought with enemies.",
      img1:"/assets/img/kalemegdan2.jpg",
      img2:"/assets/img/kalemegdan.jpg",
      img3:"/assets/img/kalemegdan3.jpg",
      img4:"/assets/img/kalemegdan4.jpg",
      img5:"/assets/img/kalemegdan1.jpg",
      
    },
    
    {
      imgCover:"/assets/img/adacover.jpg",
      heading:"Ada lake",
      mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45309.44130574732!2d20.359530125725573!3d44.78406549376473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6fb141f8cb6f%3A0xb76e977db0ba8356!2z0JDQtNCwINCm0LjQs9Cw0L3Qu9C40ZjQsA!5e0!3m2!1ssr!2srs!4v1661087910622!5m2!1ssr!2srs",
      text:"The Sava Lake is the former right branch of the Sava River near Ada Ciganlija. The formation of the Sava Lake began in 1957, after the People's Committee of the City of Belgrade formed the Directorate for the construction of the Ada Ciganli Recreation Center.",
      text2:"The lake has a slightly curved arc shape, occupies an area of ​​about 0.9 km2, the average depth is about 3 m, and the volume of the micro-reservoir is 4,000,000 m3. The average width of the lake is about 250 m, while the length of the lake is 4.4 km. <br><br> The bottom of the Sava lake is very diverse, the coastal parts of the lake are gravelly, while the rest of the lake has a silty-sandy and silty-clay character. According to the consistency, the bottom of the lake varies from loose to solid",
      text3:"There are 6 km of landscaped pebble beaches around Lake Sava, the swimming season starts in June and lasts until September. The swimming pool is managed by J. P. 'Ada Ciganlija' and the working hours of the swimming pool during the season are from 10:00 a.m. to 7:00 p.m. J. P. Ada Ciganlija received the prestigious 'Blue Flag' certificate for the swimming pool and beach, which confirmed that the swimming pool meets strict criteria in terms of water quality, lifeguard service and accompanying facilities <br><br> The beaches are equipped with all the necessary infrastructural facilities such as: showers, toilets, fountains with drinking water, lifeguard towers, clinics, restaurants, cafes, etc. The water in the lake varies from the first to the second category, which mainly depends on the number of bathers on the lake. In the peak season, especially on weekends, about 150,000 visitors pass by the beaches of Sava Lake per day. <br><br> J. P. Ada Ciganlija received the prestigious 'Blue Flag' certificate for the swimming pool and beach, which confirmed that the swimming pool meets strict criteria regarding water quality, lifeguard service and accompanying facilities.",
      img1:"/assets/img/ada.jpg",
      img2:"/assets/img/ada2.jpg",
      img3:"/assets/img/ada3.jpg",
      img4:"/assets/img/ada4.jpg",
      img5:"/assets/img/ada5.jpg",
      
    },
    
    {
      imgCover:"/assets/img/savamala5.jpg",
      heading:"Savamala",
      mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11321.790764768804!2d20.446659020029553!3d44.81244338645948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6552fc8a9dc7%3A0xdf92f5073d8e966b!2z0KHQsNCy0LDQvNCw0LvQsCwg0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1661088086656!5m2!1ssr!2srs",
      text:"Savamala is located south of the Kalemegdan Fortress and the Kosančićev Venac settlement, and stretches along the right bank of the Sava River. Its northern part belongs to the municipality of Stari Grad.",
      text2:"The name 'Savamala' is, similar to Topcider and Kalemegdan, one of the inherited Turkish names in Belgrade toponymy. It was derived from the name (river) Sava, which according to Turkish rules was placed before the noun mala, a summary of the Turkish word mahala — which means a quarter or part of a city. <br><br> One of the favorite places by the river is Beton Hall, which houses several restaurants and clubs, overlooking the confluence of the Sava and the Danube. Walking along the quay from Beton Hall, the 1.8 km long Sava Promenade continues - a favorite city promenade that brings together all generation",
      text3:" The former industrial district - Savamala, has become a popular area for lovers of urban culture. Among the old facades with Baroque and Art Nouveau features, along the spacious streets near the banks of the Sava, today there are attractive cultural facilities, numerous clubs, restaurants and bars where young people, with the sounds of music, have fun until late at night. <br><br> Here you can explore the diverse gastronomic offer of popular Belgrade restaurants, ride a bicycle, or enjoy the charms of the river from one of the many terraces. This promenade is also a perfect destination for recreation because, in addition to bike paths, it has a volleyball court and an outdoor gym. <br><br> During your walk through Savamala, we suggest that you visit the permanent exhibit in the building of Old Balkan urban architecture - Manak's House. Just a few steps from there, in the candy shop Bosiljčić, you can buy ratluk, candies of various flavors and sugar jams made according to old recipes. <br><br> Due to its relatively low position in relation to the Sava River and the lack of any protection, Savamala is the only part in the center of Belgrade that is flooded due to the extremely high waters of the Sava. It was almost completely flooded in 1984 and during the great floods of 2006.",
      img1:"/assets/img/savamala.jpg",
      img2:"/assets/img/savamala2.jpg",
      img3:"/assets/img/savamala3.jpg",
      img4:"/assets/img/savamala4.jpg",
      img5:"/assets/img/savamalacover.jpg",
      
    },

    {
      imgCover:"/assets/img/skadarlijacover.jpg",
      heading:"Skadarlija street",
      mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.165445140104!2d20.46240355039563!3d44.81819403423414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab14fc4d309%3A0x105039db29e8e91b!2z0KHQutCw0LTQsNGA0LvQuNGY0LAsINCR0LXQvtCz0YDQsNC0!5e0!3m2!1ssr!2srs!4v1661088135660!5m2!1ssr!2srs",
      text:"Skadarska street, in which Skadarlija is located, is about 500 meters long and is located in the center of Belgrade. 'Skadarlija' itself is shorter and stretches from Despota Stefana Boulevard to Strahinića Bana Street.",
      text2:"According to the data from the publication 'Belgrade and its streets' by Danilo Radojević (Touristic Press, 1966), the street was named that way in 1872. Before that, it was called Ciganska mala. Shkadarlija was dimly lit, paved with cobblestones, as was the custom in the Turkish era. That ancient appearance has been preserved even today, only the space between the stones has been filled with concrete. <br><br> During its history, Skadarlija was visited by numerous world-renowned artists such as: Alfred Jensen, Peter Ege, Yaroslav Kvartil, Hermann Wendel, Alojz Shmaus, Alexander Ivanovich Kuprin, Hermann Wendel, Alexander Ivanovich Sumbatov-Yuzhin, Ivan Bunin, Dmitry Sergeevich and others.",
      text3:"Skadarlija has been reconstructed for the needs of tourism to resemble Skadarlija from the beginning of the 20th century. <br><br> Today, Shkadarlija is one of the must-visit places for foreign tourists. There are the famous taverns Three Hats, Two Deers, Ima dana..., Traveling Actor and Hotel Le Petit Piaf, which includes the Skadarlijski Čardak restaurant, which, in addition to a restaurant with national and Italian cuisine, also offers accommodation. The Traveling Actor complex is located within the Putujuji glumac restaurant. <br><br> The former Belgrade beer industry also abuts Skadarlija, there are bakeries, a pastry shop, galleries and cafes, and a school. There is also a pub and a shopping center. At the bottom of Skadarlija (the street is slightly steep) is the second largest Belgrade market, Bajloni.",
      img1:"/assets/img/skadarlija.jpg",
      img2:"/assets/img/skadarlija2.jpg",
      img3:"/assets/img/skadarlija3.jpg",
      img4:"/assets/img/skadarlija4.jpg",
      img5:"/assets/img/skadarlija5.jpg",
      
    }
  ]



}
