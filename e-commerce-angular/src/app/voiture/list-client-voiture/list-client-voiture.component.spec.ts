import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientVoitureComponent } from './list-client-voiture.component';

describe('ListClientVoitureComponent', () => {
  let component: ListClientVoitureComponent;
  let fixture: ComponentFixture<ListClientVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClientVoitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListClientVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
