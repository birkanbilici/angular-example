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

  constructor(private logsService: LogsService) { }
}
