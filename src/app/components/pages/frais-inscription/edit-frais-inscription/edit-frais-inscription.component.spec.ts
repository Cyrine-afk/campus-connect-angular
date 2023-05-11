import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFraisInscriptionComponent } from './edit-frais-inscription.component';

describe('EditFraisInscriptionComponent', () => {
  let component: EditFraisInscriptionComponent;
  let fixture: ComponentFixture<EditFraisInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFraisInscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFraisInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
