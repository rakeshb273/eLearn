import { CoursesTaken } from './CoursesTaken.model';

export class Course {
  id:Number;
  CourseName:string;
  CourseCode:string;
  Description:string;
  StartDate:Date;
  EndDate:Date;
  isActive:boolean;
  image?:string;  
  CoursesTakens?:CoursesTaken[];  
}