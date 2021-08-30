import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cart: Cart | undefined;
  carts: Cart[] = [];
  cartTotal = 0;
  countCart: number = 0;
  isOpen: boolean = false;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCountCart();
  }
  getCountCart() {
    this.cartService.getCartItems().subscribe((items: Cart[]) => {
      this.countCart = items.length;
    });
  }
  handleOpenForm() {
    this.isOpen = !this.isOpen;
    return this.isOpen;
  }
}
