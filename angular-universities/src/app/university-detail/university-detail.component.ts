import { Component, OnInit, Input } from '@angular/core';
import { University } from '../university'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UniversityService } from '../university.service';
@Component({
  selector: 'app-university-detail',
  templateUrl: './university-detail.component.html',
  styleUrls: ['./university-detail.component.scss']
})

export class UniversityDetailComponent implements OnInit {
  @Input() university?:University;

  constructor(
    private route: ActivatedRoute,
    private universityService: UniversityService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUniversity();
  }
  
  getUniversity(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.universityService.getUniversity(id)
      .subscribe(university => this.university = university);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.university) {
      this.universityService.updateUniversity(this.university)
        .subscribe(() => this.goBack());
    }
  }

}
