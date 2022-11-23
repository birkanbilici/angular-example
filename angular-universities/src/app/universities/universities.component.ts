import { Component, OnInit } from '@angular/core';
import { University } from '../university'
import { UniversityService } from '../university.service';
import { LogsService } from '../logs.service';
@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss']
})
export class UniversitiesComponent implements OnInit {

  universities: University[] = []

  constructor(private universityService: UniversityService, private logsService: LogsService) { }
  ngOnInit(): void {
    this.getUniversities()
  }
  
  getUniversities(): void {
    this.universityService.getUniversities()
    .subscribe( universities => this.universities = universities )
  }
  
}
