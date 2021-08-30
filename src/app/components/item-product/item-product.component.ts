import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { CartService } from 'src/app/services/cart.service';
import { Subject } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';
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
    private messageService: MessageService,
    private productService: ProductServiceService
  ) {}

  ngOnInit(): void {}
  handleAddToCart() {
    this.cartService.addProductToCart(this.product).subscribe(() => {
      this.messageService.sendMes(this.product);
    });
  }
}
