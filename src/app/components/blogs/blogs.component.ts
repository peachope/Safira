import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  blogs = [

    {
      id:"1",
      image: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/blog-1-1110x743.jpg",
      title: "Creamy shrimp pasta with corn and tomatoes",
      tag: "Citus, Fresh,Stone,Fruit",
    },
    {
      id:"2",
      image: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/blog-3-1110x743.jpg",
      title: "Angel hair pasta with fresh tomatoes and herbs ",
      tag: "Citus, Fresh,Stone,Fruit",
    },
    {
      id:"3",
      image: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/blog-4-1110x743.jpg",
      title: "Pasta with shrimp and sun dried tomato sauce",
      tag: "Citus, Fresh,Stone,Fruit",
    },
    {
      id:"4",
      image: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/blog-1-1110x743.jpg",
      title: "Creamy shrimp pasta with corn and tomatoes",
      tag: "Citus, Fresh,Stone,Fruit",
    }

  ]

  Options: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,  
    autoplay:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      567:{
        items:1
      },
      768: {
        items: 2
      },
      940: {
        items: 3
      },
      1024: {
        items: 3
      }
    },
    nav: false
  }
}
