import { Component } from '@angular/core';
import { Student } from '../myprofile';
import { GETSTUDENT } from 'src/assets/mydata';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor() {

  }

  student: Student = GETSTUDENT;

}



