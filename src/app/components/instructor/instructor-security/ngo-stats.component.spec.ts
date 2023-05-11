import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoStatsComponent } from './ngo-stats.component';

describe('NgoStatsComponent', () => {
  let component: NgoStatsComponent;
  let fixture: ComponentFixture<NgoStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
