import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewonComponent } from './viewon.component';

describe('ViewonComponent', () => {
  let component: ViewonComponent;
  let fixture: ComponentFixture<ViewonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
