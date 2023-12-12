import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmotoComponent } from './listmoto.component';

describe('ListmotoComponent', () => {
  let component: ListmotoComponent;
  let fixture: ComponentFixture<ListmotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListmotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
