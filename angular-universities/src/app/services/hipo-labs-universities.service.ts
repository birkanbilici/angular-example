import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HipoLabUniversitiesRequest } from '../model/university';
import { HipoLabUniversityDetail } from '../model/university'; 
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HipoLabsUniversitiesService {

  constructor(public phttp: HttpClient) { }

  public getUniversitiesHipoLab(universitiesRequest: HipoLabUniversitiesRequest): Observable<Array<HipoLabUniversityDetail>>{
      let url
       if(!universitiesRequest.name){
          url = `${environment.api}/search?country=${universitiesRequest.country}` 
       }else{
          url = `${environment.api}/search?name=${universitiesRequest.name}&country=${universitiesRequest.country}` 
       }
       console.log('url',url)
      return this.phttp.get(url)
        .pipe(
          map((response:any)=>{
              console.log('response',response)
              return response
            })
        );
  }

}
