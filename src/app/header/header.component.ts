import { Component } from '@angular/core';
import { Student } from '../myprofile';
import { GETSTUDENT } from 'src/assets/mydata';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  student: Student = GETSTUDENT;
}
