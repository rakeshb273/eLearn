import { Component, OnInit } from '@angular/core';
import { Course, } from '../models/courses.model'
import { SearchCourse } from '../models/SearchCourse.model'
import { Observable } from 'rxjs';
import {CourseService} from '../Courses/CourseService';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http'; 
import { datepickerAnimation } from 'ngx-bootstrap/datepicker/datepicker-animations';
import{ BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent 


implements OnInit {
  
  allCourses: any ;
  Url:string = 'http://localhost:2588/Api';
  //search_S:SearchCourse;
  datePickerConfig : Partial<BsDatepickerConfig>;
  searchtext:string;
   
  
  
  constructor(private courseServiceNow:CourseService,public http: HttpClient,private route: ActivatedRoute ) { 
     this.datePickerConfig=Object.assign({},{
       containerClass:'theme-dark-blue',
       showWeekNumbers:false,
            dateInputFormat:'DD/MMM/YYYY'});
  }
  ngOnInit() {
    
  //  this.search_S.date_S=null;
  //  this.search_S.date_S=Date.now();
   this.getCourses();
   
  }
  getCourses(){ 
        this.http.get<any[]>(this.Url + '/Courses').subscribe((res)=>{this.allCourses=res;});
        console.log(this.allCourses)
  }
  DeleteCourse(idNow:number){
    this.http.delete(this.Url + '/Courses/'+idNow).subscribe(() => console.log("Course deleted"));
  }
  search(){
    this.http.get<any[]>(this.Url + '/Courses/Search/'+this.searchtext).subscribe((res)=>{this.allCourses=res});
  }
   
}
