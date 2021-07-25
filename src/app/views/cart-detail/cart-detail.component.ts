import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input,
} from '@angular/core';
import { Product } from 'src/app/models/product';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

  cart: Cart | undefined;
  carts: Cart[] = [];
  cartTotal = 0;
  @Input() changeData: any;
  constructor(
    private cartService: CartService,
    private productService: ProductServiceService
  ) {}

  ngOnInit(): void {
    this.getListCart();
  }
  ngOnchange() {
    
    this.loadCart();
  }
  getListCart() {
    this.cartService.getListCartItems().subscribe((items: Cart[]) => {
      this.carts = items;
      console.log(this.carts);
      this.calcCartTotal();
    });
  }
  loadCart() {
    if (this.changeData) {
      this.getListCart();
      this.changeData = false;
    }
  }
  calcCartTotal() {
    this.cartTotal = 0;
    this.carts.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
  }

}
