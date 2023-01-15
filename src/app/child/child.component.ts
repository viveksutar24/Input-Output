import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

@Input() name:any;



message = "";
@Output() messageChanged = new EventEmitter <string>();





textChanged(){
  this.messageChanged.emit(this.message);
}

}
