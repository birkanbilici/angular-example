import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUniversitiesComponent } from './top-universities.component';

describe('TopUniversitiesComponent', () => {
  let component: TopUniversitiesComponent;
  let fixture: ComponentFixture<TopUniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopUniversitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
