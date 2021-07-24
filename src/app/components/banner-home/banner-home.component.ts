import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.scss']
})
export class BannerHomeComponent implements OnInit {

  constructor() { }
  setStyles(imgUrl: string) {
    return {
      'background-image': `url('${imgUrl}')`,
      'height' : '150px',
    }
  }
  banners = [
    {
      bannerName: 'banner-left',
      content: 'Fresh Vegetable',
      banner: 'http://demo.roadthemes.com/safira/wp-content/uploads/2020/06/img_banner1-1-new.jpg',
    },
    {
      bannerName: 'banner-right',
      content: 'Natural Fresh Fruit',
      banner: 'http://demo.roadthemes.com/safira/wp-content/uploads/2020/06/img_banner1-2-new.jpg',
    },
  ]
  ngOnInit(): void {
  }

}
