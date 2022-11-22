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

  selectedUviversity?: University;
  universities: University[] = []

  constructor(private universityService: UniversityService, private logsService: LogsService) { }

  getUniversities(): void {
    this.universityService.getUniversities()
    .subscribe( universities => this.universities = universities )
  }
  ngOnInit(): void {
    this.getUniversities()
  }

  onHandleSelect(university: University): void {
    this.selectedUviversity = university;
    this.logsService.add(`Universities Component: Selected University ID id: ${university.id}`)
  }

}
