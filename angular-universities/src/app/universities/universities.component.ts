import { Component, OnInit } from '@angular/core';
import { University } from '../university'
import { UNIVERSITIES } from '../mock-universities';
@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss']
})
export class UniversitiesComponent implements OnInit {
  selectedUviversity?: University;
  universities = UNIVERSITIES

  constructor() { }

  ngOnInit(): void {
  }

  onHandleSelect(university: University): void {
    this.selectedUviversity = university;
  }

}
