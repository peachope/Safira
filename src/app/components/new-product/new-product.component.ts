import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Product } from 'src/app/models/product';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
  products: Product[] = [];
  partOne: Product[] = [];
  partTwo: Product[] = [];

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.getListProduct();
    this.setPart();
  }

  getListProduct() {
    this.productService.getListProducts().subscribe((res: any) => {
      this.products = res;
    });
  }
  setPart() {
    this.productService.getListProducts().subscribe((res: any) => {
      this.partOne = res.slice(0, res.length / 2);
      this.partTwo = res.slice(res.length / 2, res.length);
      console.log('1', this.partTwo, this.partOne);
    });
  }
  Options: OwlOptions = {
    loop: true,
    mouseDrag: true,
    margin: 10,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 5,
      },
      1024: {
        items: 5,
      },
    },
  };
}
