import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  setStyles(imgUrl: string) {
    return {
      'background-image': `url('${imgUrl}')`,
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      
    }
  }
  Options: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,  
    autoplay:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  customOpt: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,  
    autoplay:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  slidesStore = [
    {
      id:"1",
      src:"http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/Homeslider1-3.jpg",
      title: "Fresh Farm Product",
      bigTitle:"Vegetable Big Sale"
    },
    {
      id:"2",
      src:"http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/Homeslider1-2.jpg",
      title: "Natural Farm Product",
      bigTitle:"Vegetable Big Sale"
    },
    {
      id:"3",
      src:"http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/Homeslider1-1.jpg",
      title: "Natural Farm Product",
      bigTitle:"Fresh Vegetable"
    }
  ]
  ngOnInit(): void {
  }

}
