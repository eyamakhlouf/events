import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherParTypeComponent } from './rechercher-par-type.component';

describe('RechercherParTypeComponent', () => {
  let component: RechercherParTypeComponent;
  let fixture: ComponentFixture<RechercherParTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechercherParTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercherParTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
