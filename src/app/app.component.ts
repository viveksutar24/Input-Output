import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input_output';

  name = "Vivek";

  country = "INDIA";

  company = "iGAP";

  message = "";

  recievedMessage(msg:string){
    this.message=msg;

  }
}
