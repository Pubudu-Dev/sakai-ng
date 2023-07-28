import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employees';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { 

  }

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>("assets/data/employees.json"); 
   }




}
