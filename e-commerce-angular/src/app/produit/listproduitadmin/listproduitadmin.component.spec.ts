import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproduitadminComponent } from './listproduitadmin.component';

describe('ListproduitadminComponent', () => {
  let component: ListproduitadminComponent;
  let fixture: ComponentFixture<ListproduitadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListproduitadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListproduitadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
