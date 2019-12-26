import { Component, OnInit } from '@angular/core';
import { Course } from '../models/courses.model'
import { Observable } from 'rxjs';
import {CourseService} from '../Courses/CourseService';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent 


implements OnInit {
  
  allCourses: any ;
  txt:string="hello";
  Url = 'http://localhost:2588/Api'; 
  //allCourses: Course[]  ;
   getCourses(){
     console.log("called directly");
       this.http.get<any[]>(this.Url + '/Courses').subscribe((res)=>{this.allCourses=res});
      //this.courseServiceNow.getCourses().subscribe(res=>this.allCourses=res);
     console.log("called directly end");
   }
  
  constructor(private courseServiceNow:CourseService,public http: HttpClient) { }
  ngOnInit() {
    console.log(this.txt)
   this.getCourses();
  //  this.allCourses=[ {   
  //   id:1,
  //   CourseName:"New course",
  //   CourseCode:"C1",
  //   Description:"Des fo new course",
  //   StartDate: new Date('10/10/2016'),
  //   EndDate: new Date('11/11/2016')

  // },]
  }

}
