import { Component, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  status  = false;
  user = 'Mousa';
  imgUrl = 'assets/images/angular.png';
  searchInput : string = "";
  log(): void {
    console.log("hello")
  }
  showAlert() {
    alert("Welcome")
  }
  showInput(e: Event) {
  const x = (e.target as HTMLInputElement).value;
  console.log(x);
  }
  showAlert2(event: Event) {
  const keyboardEvent = event as KeyboardEvent; // type assertion
  keyboardEvent.preventDefault();
  alert('Control+C detected and copy prevented');
  }

}
