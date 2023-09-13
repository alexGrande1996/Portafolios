import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCargaComponent } from './vista-carga.component';

describe('VistaCargaComponent', () => {
  let component: VistaCargaComponent;
  let fixture: ComponentFixture<VistaCargaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaCargaComponent]
    });
    fixture = TestBed.createComponent(VistaCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
