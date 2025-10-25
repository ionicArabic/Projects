import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

@Input({
  required: true,
  alias: "dataFromParent",
  transform: (value: Number)=>value.toString(),

}) getDataFromParent: string = '';

@Output('childEvent') emitData: EventEmitter<string> = new EventEmitter();

onFire() {
  this.emitData.emit('Share data from Child to Parent!');
}
}
