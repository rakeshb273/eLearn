import { CoursesTaken } from './CoursesTaken.model';

export class Course {
  ID:Number;
  CourseName:string;
  CourseCode:string;
  Description:string;
  StartDate:Date;
  EndDate:Date;
  isActive:boolean;
  Image?:string;  
  CoursesTakens?:CoursesTaken[];  
}
 