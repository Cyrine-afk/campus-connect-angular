import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFraisInscriptionComponent } from './list-frais-inscription.component';

describe('ListFraisInscriptionComponent', () => {
  let component: ListFraisInscriptionComponent;
  let fixture: ComponentFixture<ListFraisInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFraisInscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFraisInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
