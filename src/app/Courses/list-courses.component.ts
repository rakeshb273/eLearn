import { Component, OnInit } from '@angular/core';
import { Course } from '../models/courses.model'
import { Observable } from 'rxjs';
import {CourseService} from '../Courses/CourseService';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent 


implements OnInit {
  
  allCourses: Observable < Course[] > ;
  txt:string="hello";
  //allCourses: Course[]  ;
   getCourses(){
     console.log("called directly");
     this.allCourses= this.courseServiceNow.getCourses();
     console.log("called directly end");
   }
  
  constructor(private courseServiceNow:CourseService) { }
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
