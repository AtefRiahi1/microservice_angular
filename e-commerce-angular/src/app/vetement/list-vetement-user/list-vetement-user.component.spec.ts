import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVetementUserComponent } from './list-vetement-user.component';

describe('ListVetementUserComponent', () => {
  let component: ListVetementUserComponent;
  let fixture: ComponentFixture<ListVetementUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVetementUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVetementUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
