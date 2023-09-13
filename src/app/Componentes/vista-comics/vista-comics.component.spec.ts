import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaComicsComponent } from './vista-comics.component';

describe('VistaComicsComponent', () => {
  let component: VistaComicsComponent;
  let fixture: ComponentFixture<VistaComicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaComicsComponent]
    });
    fixture = TestBed.createComponent(VistaComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
