import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercategorieComponent } from './ajoutercategorie.component';

describe('AjoutercategorieComponent', () => {
  let component: AjoutercategorieComponent;
  let fixture: ComponentFixture<AjoutercategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutercategorieComponent]
    });
    fixture = TestBed.createComponent(AjoutercategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
