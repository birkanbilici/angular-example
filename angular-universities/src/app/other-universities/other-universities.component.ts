import { Component, OnInit } from '@angular/core';
import { HipoLabUniversitiesRequest, HipoLabUniversityDetail } from '../model/university';
import { HipoLabsUniversitiesService } from '../services/hipo-labs-universities.service';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
  selector: 'app-other-universities',
  templateUrl: './other-universities.component.html',
  styleUrls: ['./other-universities.component.scss']
})
export class OtherUniversitiesComponent implements OnInit {

  constructor(private hipoLabsUniversitiesService: HipoLabsUniversitiesService) { }

  ngOnInit(): void {
    this.universities$ = this.searchUniversities.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query: HipoLabUniversitiesRequest) => this.hipoLabsUniversitiesService.getUniversitiesHipoLab(query)),
    );

    this.getUniversitiesFromHipoLabInitialLoad()
  }

  uniList: HipoLabUniversityDetail[] = []
  isSearchUsed: boolean = false
  query: HipoLabUniversitiesRequest = {
    name: "",
    country: "Turkey",
  }

  country = this.query.country

  universities$!: Observable<HipoLabUniversityDetail[]>;
  private searchUniversities = new Subject<HipoLabUniversitiesRequest>();

  searchCountry(country: string): void {
    this.query = {
      ...this.query,
          country: country
    }
    this.searchUniversities.next(this.query);
    this.isSearchUsed = true
  }

  searchName(term: string): void {
    this.query = {
      ...this.query,
      name: term
    }
    this.searchUniversities.next(this.query);
    this.isSearchUsed = true
  }

  getUniversitiesFromHipoLabInitialLoad(): void {
    this.hipoLabsUniversitiesService.getUniversitiesHipoLab(this.query)
      .subscribe((list)=>{
        this.uniList = list
      })
  }

}
