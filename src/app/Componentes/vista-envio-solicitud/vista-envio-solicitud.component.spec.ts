import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEnvioSolicitudComponent } from './vista-envio-solicitud.component';

describe('VistaEnvioSolicitudComponent', () => {
  let component: VistaEnvioSolicitudComponent;
  let fixture: ComponentFixture<VistaEnvioSolicitudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaEnvioSolicitudComponent]
    });
    fixture = TestBed.createComponent(VistaEnvioSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
