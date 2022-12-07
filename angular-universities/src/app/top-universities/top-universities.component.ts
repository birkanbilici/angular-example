import { Component, OnInit } from '@angular/core';
import { University } from '../university';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-top-universities',
  templateUrl: './top-universities.component.html',
  styleUrls: ['./top-universities.component.scss']
})
export class TopUniversitiesComponent implements OnInit {
  constructor(private universityService: UniversityService) { }

  universities: University[] = [];

  ngOnInit(): void {
    this.getUniversities()
  }

  getUniversities():void {
    this.universityService.getUniversities()
      .subscribe(universities => this.universities = universities.slice(1,5))
  }

}
