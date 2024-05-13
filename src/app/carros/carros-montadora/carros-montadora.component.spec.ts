import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosMontadoraComponent } from './carros-montadora.component';

describe('CarrosMontadoraComponent', () => {
  let component: CarrosMontadoraComponent;
  let fixture: ComponentFixture<CarrosMontadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosMontadoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrosMontadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
