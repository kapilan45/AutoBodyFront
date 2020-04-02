import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotAnnonceComponent } from './depot-annonce.component';

describe('DepotAnnonceComponent', () => {
  let component: DepotAnnonceComponent;
  let fixture: ComponentFixture<DepotAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
