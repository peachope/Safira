import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtopComponent } from './viewtop.component';

describe('ViewtopComponent', () => {
  let component: ViewtopComponent;
  let fixture: ComponentFixture<ViewtopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
