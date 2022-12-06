import { Injectable } from '@angular/core';
import { University } from './university';
import { UNIVERSITIES } from './mock-universities';
import { Observable, of } from 'rxjs';
import { LogsService } from './logs.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class UniversityService {

  private universitiesUrl = 'api/universities';  // URL to web api
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  getUniversities(): Observable<University[]> {
    const universities = this.http.get<University[]>(this.universitiesUrl)
                        .pipe(
                          tap(_ => this.log('data fetched from db')),
                          catchError(this.handleError<University[]>('getUniversities', []))
                        );
    return universities
  }

  getUniversity(id: number): Observable<University> {
    const url = `${this.universitiesUrl}/${id}`
    const university = this.http.get<University>(url)
                        .pipe(
                          tap(_ => this.log(`Universiy Service: fetched University id=${id}`)),
                          catchError(this.handleError<University>(`getUniversity id=${id}`))
                        )
    return university;
  }

  updateUniversity(university: University): Observable<any> {
    return this.http.put(this.universitiesUrl, university, this.httpOptions).pipe(
      tap(_ => this.log(`updated university id=${university.id}`)),
      catchError(this.handleError<any>('updateUniversity'))
    );
  }

  addUniversity(university: University): Observable<University> {
    return this.http.post<University>(this.universitiesUrl, university, this.httpOptions)
            .pipe(
              tap((newUniversity: University) => this.log(`added university: id=${newUniversity.id}`)),
              catchError(this.handleError<University>('addUniversity'))
            );
  }

  deleteUniversity(id: number): Observable<University> {
    const url = `${this.universitiesUrl}/${id}`;

    return this.http.delete<University>(url, this.httpOptions)
            .pipe(
              tap(_ => this.log(`deleted university id=${id}`)),
              catchError(this.handleError<University>('deleteUniversity'))
            );
  }

  constructor(private logsService: LogsService,  private http: HttpClient,) { }

  private handleError<T>(operation = 'operation', result?: T) {
    const errorHandler = (error: any): Observable<T> => {
      console.log(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };

    return errorHandler
  }

  private log(message: string) {
    this.logsService.add(`UniversityService: ${message}`);
  }
}
