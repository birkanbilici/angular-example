import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUniversitiesComponent } from './other-universities.component';

describe('OtherUniversitiesComponent', () => {
  let component: OtherUniversitiesComponent;
  let fixture: ComponentFixture<OtherUniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherUniversitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
