import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFraisInscriptionComponent } from './add-frais-inscription.component';

describe('AddFraisInscriptionComponent', () => {
  let component: AddFraisInscriptionComponent;
  let fixture: ComponentFixture<AddFraisInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFraisInscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFraisInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
