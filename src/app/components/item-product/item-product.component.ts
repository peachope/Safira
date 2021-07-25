import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { CartService } from 'src/app/services/cart.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss'],
})
export class ItemProductComponent implements OnInit {
  @Input()
  product!: Product;
  subject = new Subject();
  constructor(
    private cartService: CartService,
    private productService: ProductServiceService
  ) {}

  ngOnInit(): void {}
  handleAddToCart() {
    this.cartService.addProductToCart(this.product).subscribe(() => {
      this.subject.next(this.product);
      console.log(this.cartService.getListCartItems.length);
      
    });
  }
}
