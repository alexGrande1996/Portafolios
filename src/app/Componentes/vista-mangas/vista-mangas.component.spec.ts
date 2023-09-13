import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMangasComponent } from './vista-mangas.component';

describe('VistaMangasComponent', () => {
  let component: VistaMangasComponent;
  let fixture: ComponentFixture<VistaMangasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaMangasComponent]
    });
    fixture = TestBed.createComponent(VistaMangasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
