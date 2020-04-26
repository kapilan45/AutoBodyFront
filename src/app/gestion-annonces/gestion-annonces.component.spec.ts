import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAnnoncesComponent } from './gestion-annonces.component';

describe('GestionAnnoncesComponent', () => {
  let component: GestionAnnoncesComponent;
  let fixture: ComponentFixture<GestionAnnoncesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAnnoncesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
