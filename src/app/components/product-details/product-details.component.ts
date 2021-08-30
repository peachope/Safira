import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { CartService } from 'src/app/services/cart.service';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  products: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private messageService: MessageService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.productService.getProduct(id).subscribe((data) => {
      this.product = data;
    });
  }
  handleAddToCart() {
    this.cartService.addProductToCart(this.product).subscribe(() => {
      this.messageService.sendMes(this.product);
    });
  }
}
