import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLandingPageComponent } from './item-landing-page.component';

describe('ItemLandingPageComponent', () => {
  let component: ItemLandingPageComponent;
  let fixture: ComponentFixture<ItemLandingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemLandingPageComponent]
    });
    fixture = TestBed.createComponent(ItemLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
