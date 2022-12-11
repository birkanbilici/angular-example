import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { University } from '../model/university';
import { HipoLabUniversitiesRequest, HipoLabUniversityDetail } from '../model/university';
import { HipoLabsUniversitiesService } from '../services/hipo-labs-universities.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  constructor(){}
  
  uniList: HipoLabUniversityDetail[] = []
  defaultQuery: HipoLabUniversitiesRequest = {
    name: "",
    country: "Turkey",
  }

  /* getUniversitiesFromHipoLab(): void {
    this.ddd.getUniversitiesHipoLab(this.defaultQuery)
      .subscribe((list)=>{
        console.log('list',list)
        this.uniList = list.slice(0,10)
        console.log('abc',this.uniList)
      })
  } */

  createDb() {
    const universities:Array<University> = [
      { id: 2, name: 'Marywood University'},
      { id: 3, name: 'Lindenwood University'},
      { id: 4, name: 'Sullivan University'},
      { id: 5, name: 'Xavier University'},
      { id: 6, name: 'Tusculum College'},
      { id: 7, name: 'Claremont School of Theology'},
      { id: 8, name: 'Columbia College (SC)'},
      { id: 9, name: 'Chabot-Las Positas Community College District'},
    ];

    /* this.hipoLabsUniversitiesService.getUniversitiesHipoLab(this.defaultQuery)
    .subscribe((list)=>{
      this.uniList = list.slice(0,10)
      console.log('abc',this.uniList)
      
      console.log('universities',universities)

      //return {universities}
    }) */
    return {universities};
  }

  genId(universities: University[]): number {
    return universities.length > 0 ? Math.max(...universities.map(uni => uni.id)) + 1 : 101;
  }
}