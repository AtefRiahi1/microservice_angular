import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPiecesComponent } from './all-pieces.component';

describe('AllPiecesComponent', () => {
  let component: AllPiecesComponent;
  let fixture: ComponentFixture<AllPiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPiecesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
