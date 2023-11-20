import { Injectable } from '@angular/core';
import { Student } from './myprofile';
import { GETSTUDENT } from 'src/assets/mydata';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  loadStudent() {
    let student: Student = GETSTUDENT;
    return student;
  }
}
