import { Component, OnInit } from '@angular/core';
import { University } from '../model/university'
import { UniversityService } from '../services/university.service';
import { LogsService } from '../services/logs.service';
import { HipoLabUniversitiesRequest, HipoLabUniversityDetail } from '../model/university';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss']
})
export class UniversitiesComponent implements OnInit {
  constructor(private universityService: UniversityService, private logsService: LogsService) { }

  universities: University[] = []
  
  ngOnInit(): void {
    this.getUniversities()
  }

  getUniversities(): void {
    this.universityService.getUniversities()
    .subscribe( universities => this.universities = universities )
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.universityService.addUniversity({ name } as University)
      .subscribe(university => {
        this.universities.push(university);
      });
  }

  delete(university: University): void {
    this.universities = this.universities.filter(u => u !== university);
    this.universityService.deleteUniversity(university.id).subscribe();
  }
  
}
