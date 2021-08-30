import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  @Input() isOpen!: boolean;
  @Output() closeForm = new EventEmitter();
  isModalSignUp: boolean = false;
  ngOnInit(): void {}

  toggleModalSignUp() {
    this.isModalSignUp = !this.isModalSignUp;
    console.log('test modal, hello');

    return this.isModalSignUp;
  }
}
