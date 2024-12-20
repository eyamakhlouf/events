import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherParNomComponent } from './rechercher-par-nom.component';

describe('RechercherParNomComponent', () => {
  let component: RechercherParNomComponent;
  let fixture: ComponentFixture<RechercherParNomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechercherParNomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercherParNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
