import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVetementComponent } from './list-vetement.component';

describe('ListVetementComponent', () => {
  let component: ListVetementComponent;
  let fixture: ComponentFixture<ListVetementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVetementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVetementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
