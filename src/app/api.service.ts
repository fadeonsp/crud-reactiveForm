import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from './list/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  addemployee(data: Model) {
    return this.http.post<Model>("http://localhost:3000/posts", data)
  }
  getemployee() {
    return this.http.get<Model[]>("http://localhost:3000/posts")
  }
  deleteemployee(id: number) {
    return this.http.delete<Model>("http://localhost:3000/posts/"+id)
 }

 fetchdata(id: number) {
  return this.http.get<Model>("http://localhost:3000/posts/"+id)
 }
 updateemployee(data: Model, id: number) {
  return this.http.put<Model>("http://localhost:3000/posts/"+id, data)
 }

}
