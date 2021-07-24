import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss']
})
export class BestSellerComponent implements OnInit {
  products :Product [] = []
  constructor(private productService : ProductServiceService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.productService.getListProducts().subscribe((res:any)=>{
        this.products = res.slice(4,10);
    })
  }
}
