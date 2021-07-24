import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined
  products : Product [] = []
  constructor(private route : ActivatedRoute,
    private productService : ProductServiceService) { }
  
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    this.productService.getListProducts( )
      .subscribe(data => {     
        const id  = Number(this.route.snapshot.params['productId']);
        this.product = data.find(p => p.id === id)
        console.log(this.product);
    });    
  }
}
