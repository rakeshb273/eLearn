import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http'; 
import { Course } from '../models/courses.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class CourseService {

  Url = 'http://localhost:2588/Api'; 
    constructor(public http: HttpClient) {}

    
  
    //courses: Course[];
    stuff: Object;

    getCourses(): Observable<Course[]> {
      console.log("called service");

      return this.http.get<Course[]>(this.Url + '/Courses');
      console.log("end service");
         
    }

    CreateCourse(CourseNew:Course):Observable<Course[]>    
  {    
   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };    
    return this.http.post<Course[]>(this.Url + '/Courses', CourseNew, httpOptions)    
  }    
  DeleteStudent(ID:string):Observable<number>    
  {    
    return this.http.delete<number>(this.Url + '/Courses/'+ID);    
  }    
  getCourseById(ID: string): Observable<Course> {    
    return this.http.get<Course>(this.Url + '/Courses/' + ID);    
  }
}