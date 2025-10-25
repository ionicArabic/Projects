import { EMPTY } from 'rxjs';
import { ChildComponent } from './child/child.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  userName: Number = 10;
  getDataFromChild?: string;

  log(e: string){
    console.log(e);
  }

}
