import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { University } from '../model/university';
import { UniversityService } from '../services/university.service';

@Component({
  selector: 'app-university-search',
  templateUrl: './university-search.component.html',
  styleUrls: [ './university-search.component.scss' ]
})

export class UniversitySearchComponent implements OnInit {
  constructor(private universityService: UniversityService) {}

  universities$!: Observable<University[]>;
  private searchTerms = new Subject<string>();

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.universities$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.universityService.searchUniversities(term)),
    );
  }
}