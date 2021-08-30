import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor() {}
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
  ngOnInit(): void {}
}
