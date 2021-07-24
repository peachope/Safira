import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolocyShopComponent } from './polocy-shop.component';

describe('PolocyShopComponent', () => {
  let component: PolocyShopComponent;
  let fixture: ComponentFixture<PolocyShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolocyShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolocyShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
