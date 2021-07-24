import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackFridayComponent } from './back-friday.component';

describe('BackFridayComponent', () => {
  let component: BackFridayComponent;
  let fixture: ComponentFixture<BackFridayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackFridayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackFridayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
