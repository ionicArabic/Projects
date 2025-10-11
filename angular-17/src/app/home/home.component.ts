import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  userName = 'Mousa';
  userEmail = 'ionicArabic@gmail.com';
  userType = 'Admin';
  userTitle = 'Mr.';
 }
