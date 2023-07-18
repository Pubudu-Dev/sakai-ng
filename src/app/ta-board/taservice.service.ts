
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TandARow } from '../models/tandarow';

@Injectable({
  providedIn: 'root'
})
export class TaserviceService {

  constructor(private http:HttpClient) {
    
   }

   getTandA():Observable<TandARow[]>{
    return this.http.get<TandARow[]>("assets/data/tandarows.json"); 
   }

}
