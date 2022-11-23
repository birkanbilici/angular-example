import { Injectable } from '@angular/core';
import { University } from './university';
import { UNIVERSITIES } from './mock-universities';
import { Observable, of } from 'rxjs';
import { LogsService } from './logs.service';
@Injectable({
  providedIn: 'root'
})

export class UniversityService {

  getUniversities(): Observable<University[]> {
    const universities = of(UNIVERSITIES)
    this.logsService.add('data fetched - observable')
    return universities
  }

  getUniversity(id: number): Observable<University> {
    const university = UNIVERSITIES.find(univ => univ.id === id)!;
    this.logsService.add(`Universiy Service: fetched University id=${id}`);
    return of(university);
  }

  constructor(private logsService: LogsService) { }
}
