import { Component, OnInit, Input } from '@angular/core';
import { University } from '../university'

@Component({
  selector: 'app-university-detail',
  templateUrl: './university-detail.component.html',
  styleUrls: ['./university-detail.component.scss']
})

export class UniversityDetailComponent implements OnInit {
  @Input() university?:University;

  constructor() { }

  ngOnInit(): void {
  }

}
