import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmotoadminComponent } from './listmotoadmin.component';

describe('ListmotoadminComponent', () => {
  let component: ListmotoadminComponent;
  let fixture: ComponentFixture<ListmotoadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmotoadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListmotoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
