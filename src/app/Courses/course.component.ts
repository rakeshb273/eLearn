import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{ BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
id:string;
datePickerConfig : Partial<BsDatepickerConfig>;
  constructor(private route: ActivatedRoute) {
    this.datePickerConfig=Object.assign({},{containerClass:'theme-dark-blue',showWeekNumbers:false,
  minDate:new Date(2019,0,1),
maxDate:new Date(2019,6,1),
dateInputFormat:'DD/MMM/YYYY'});
   
   }

  ngOnInit() {
   this.id= this.route.params['value'].ID
    
  }

}
