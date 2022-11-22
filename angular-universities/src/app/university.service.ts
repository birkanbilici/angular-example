import { Injectable } from '@angular/core';
import { University } from './university';
import { UNIVERSITIES } from './mock-universities';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  getUniversities(): Observable<University[]> {
    const universities = of(UNIVERSITIES)
    return universities
  }

  constructor() { }
}
