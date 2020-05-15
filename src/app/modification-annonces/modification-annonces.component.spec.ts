import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationAnnoncesComponent } from './modification-annonces.component';

describe('ModificationAnnoncesComponent', () => {
  let component: ModificationAnnoncesComponent;
  let fixture: ComponentFixture<ModificationAnnoncesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationAnnoncesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
