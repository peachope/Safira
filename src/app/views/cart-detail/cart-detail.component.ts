import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss'],
})
export class CartDetailComponent implements OnInit {
  carts: Cart[] = [];
  cartTotal = 0;
  @Input() changeData: any;
  constructor(private msg: MessageService, private cartService: CartService) {}

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMes().subscribe((product: any) => {
      this.loadCartItems();
    });
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: Cart[]) => {
      this.carts = items;
      this.calcCartTotal();
    });
  }

  calcCartTotal() {
    this.cartTotal = 0;
    this.carts.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
  }
  delete(cart: Cart): void {
    this.carts = this.carts.filter((h) => h !== cart);
    this.cartService.deleteCart(cart.id).subscribe();
  }
}
