import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmotoComponent } from './addmoto.component';

describe('AddmotoComponent', () => {
  let component: AddmotoComponent;
  let fixture: ComponentFixture<AddmotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
