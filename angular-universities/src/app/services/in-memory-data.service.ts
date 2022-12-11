import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { University } from '../model/university';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

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

    return {universities};
  }

  genId(universities: University[]): number {
    return universities.length > 0 ? Math.max(...universities.map(uni => uni.id)) + 1 : 101;
  }
}