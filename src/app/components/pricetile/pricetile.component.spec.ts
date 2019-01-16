import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricetileComponent } from './pricetile.component';

describe('PricetileComponent', () => {
  let component: PricetileComponent;
  let fixture: ComponentFixture<PricetileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricetileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricetileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
