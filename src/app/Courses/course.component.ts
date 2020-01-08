import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{ BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { NgForm } from '@angular/forms';

import { flushModuleScopingQueueAsMuchAsPossible } from '@angular/core/src/render3/jit/module';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Course } from "../models/courses.model";
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http'; 
import * as moment from "moment";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course:any;// Course= new Course();
  coursetoSend:any;
  learners:any;
  Url:string = 'http://localhost:2588/Api';
datePickerConfig : Partial<BsDatepickerConfig>;
  constructor(private route: ActivatedRoute,public http: HttpClient) {
    this.datePickerConfig=Object.assign({},{containerClass:'theme-dark-blue',showWeekNumbers:false,   
dateInputFormat:'DD/MMM/YYYY'});
   
   }

  ngOnInit() {
   
   this.http.get<Course>(this.Url + '/Courses/'+this.route.params['value'].ID).subscribe((res)=>{this.course=res;

    
    
     this.course.StartDate=moment(res.StartDate).format('DD/MM/YYYY'); 
    this.course.EndDate=moment(res.EndDate).format('DD/MM/YYYY');  
  });

  this.learners={
    ID:100,
    LearnerName:'Learner New  '

  }
    console.log(this.course)
   //(res)=>{this.course=res}
  }
  
  SaveCourse(courseNow:Course){

    console.log(courseNow);
    this.coursetoSend={
      CourseName:courseNow.CourseName,
      Description:courseNow.Description,
      CourseCode:courseNow.CourseCode,
      StartDate:courseNow.StartDate,
      EndDate:courseNow.EndDate,
      isActive:1


    }
console.log(this.coursetoSend);
    this.http.post<Course>(this.Url + '/Courses',this.coursetoSend).subscribe(() => alert("Course Details Added"));
    console.log('-------------');
    console.log(this.coursetoSend);
    // if(this.course.StartDate>this.course.EndDate){

    // }

// console.log(courseNow);
//     this.http.post<Course>(this.Url + '/Courses',courseNow).subscribe(() => alert("Course Details Added"));

// ----------
//     this.http.get<Course[]>(this.Url + '/Courses/isCoursesExists?width=' + this.course.CourseCode + '&depth=' + this.course.CourseName).subscribe(
//       (res) =>{
//         if(!res){
//           this.http.put(this.Url + '/Courses',this.course).subscribe(() => alert("Course Details saved"));
//         }
//         else{
//           this.http.post<Course>(this.Url + '/Courses',this.course).subscribe(() => alert("Course Details Added"));
//         }
//       } 
      
//       );
   
  }

  DeleteCourse(){
    this.http.delete(this.Url + '/Courses/'+this.course.ID).subscribe(() => console.log("Course deleted"));
  }
  removeLearner(cl_index:number){
    console.log(cl_index);
    console.log(this.Url + '/CoursesTakens/'+cl_index)     
    this.http.delete(this.Url + '/CoursesTakens/'+cl_index).subscribe(() => console.log("user deleted"));

  }
  AddLearner(){

  }
}
