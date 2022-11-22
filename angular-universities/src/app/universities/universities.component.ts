import { Component, OnInit } from '@angular/core';
import { University } from '../university'
import { UniversityService } from '../university.service';
@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss']
})
export class UniversitiesComponent implements OnInit {
  selectedUviversity?: University;
  universities: University[] = []

  constructor(private universityService: UniversityService) { }

  getUniversities(): void {
    this.universityService.getUniversities()
    .subscribe( universities => this.universities = universities )
  }
  ngOnInit(): void {
    this.getUniversities()
  }

  onHandleSelect(university: University): void {
    this.selectedUviversity = university;
  }

}
