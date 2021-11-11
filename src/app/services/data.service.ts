import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private ENDPOINTS = {
  employeeById: 'http://localhost:50188/api/employee/'
}
 
  constructor(private http:HttpClient) { }

  getEmployee(): Observable<any[]>{
    return this.http.get<any>('http://localhost:50188/api/employee')
  }

  getEmployeeById(empId:number): Observable<any>{
    return this.http.get<any>(`${this.ENDPOINTS.employeeById + empId}`)
  }

  deleteUser(id:number){
    return this.http.delete<any>(`${this.ENDPOINTS.employeeById + id}`)
  }

  addUser(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:50188/api/employee',data,)
  }

  updateUser(id:number, data:any):Observable<any>{
    return this.http.put<any>('http://localhost:50188/api/employee/'+id, data)
  }
}
