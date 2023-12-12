import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmotoComponent } from './detailmoto.component';

describe('DetailmotoComponent', () => {
  let component: DetailmotoComponent;
  let fixture: ComponentFixture<DetailmotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailmotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailmotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
