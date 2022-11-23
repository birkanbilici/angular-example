import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversitiesComponent } from './universities/universities.component';
import { TopUniversitiesComponent } from './top-universities/top-universities.component';
import { UniversityDetailComponent } from './university-detail/university-detail.component';

const routes: Routes = [
  { path: 'universities', component: UniversitiesComponent},
  { path: 'top-universities', component: TopUniversitiesComponent},
  { path: '', redirectTo: '/top-universities', pathMatch: 'full' },
  { path: 'detail/:id', component: UniversityDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
