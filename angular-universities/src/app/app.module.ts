import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversitiesComponent } from './universities/universities.component';
import { FormsModule } from '@angular/forms';
import { UniversityDetailComponent } from './university-detail/university-detail.component';
import { LogsComponent } from './logs/logs.component';
import { TopUniversitiesComponent } from './top-universities/top-universities.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { UniversitySearchComponent } from './university-search/university-search.component';
@NgModule({
  declarations: [
    AppComponent,
    UniversitiesComponent,
    UniversityDetailComponent,
    LogsComponent,
    TopUniversitiesComponent,
    UniversitySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
