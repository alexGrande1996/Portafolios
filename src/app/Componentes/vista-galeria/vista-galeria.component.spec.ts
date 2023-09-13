import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaGaleriaComponent } from './vista-galeria.component';

describe('VistaGaleriaComponent', () => {
  let component: VistaGaleriaComponent;
  let fixture: ComponentFixture<VistaGaleriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaGaleriaComponent]
    });
    fixture = TestBed.createComponent(VistaGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
