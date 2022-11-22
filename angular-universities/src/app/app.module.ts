import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversitiesComponent } from './universities/universities.component';
import { FormsModule } from '@angular/forms';
import { UniversityDetailComponent } from './university-detail/university-detail.component'; // <-- NgModel lives here
@NgModule({
  declarations: [
    AppComponent,
    UniversitiesComponent,
    UniversityDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
