import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsofertasComponent } from './cardsofertas.component';

describe('CardsofertasComponent', () => {
  let component: CardsofertasComponent;
  let fixture: ComponentFixture<CardsofertasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsofertasComponent]
    });
    fixture = TestBed.createComponent(CardsofertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
