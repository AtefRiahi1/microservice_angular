import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemotoComponent } from './updatemoto.component';

describe('UpdatemotoComponent', () => {
  let component: UpdatemotoComponent;
  let fixture: ComponentFixture<UpdatemotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatemotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
