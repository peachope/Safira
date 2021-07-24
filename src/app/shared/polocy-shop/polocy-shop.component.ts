import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polocy-shop',
  templateUrl: './polocy-shop.component.html',
  styleUrls: ['./polocy-shop.component.scss']
})
export class PolocyShopComponent implements OnInit {

  constructor() { }
  listPolocy = [
    {
      id:"1",
      name: "FREE SHIPPING",
      icon: 'fas fa-truck',
      description: "Free Shipping on all us order order above $200",
    },
    {
      id:"2",
      name: "SUPPORT 24/7",
      icon: 'fas fa-life-ring',
      description: "Free Shipping on all us order order above $200",
    },
    {
      id:"3",
      name: "30 DAY RETURN ",
      icon: 'fas fa-undo', 
      description: "Free Shipping on all us order order above $200",
    },
    {
      id:"4",
      name: "100% PAYMENT SECURE",
      icon: 'fas fa-money-check', 
      description: "Free Shipping on all us order order above $200",
    }
  ]
  ngOnInit(): void {
  }

}
