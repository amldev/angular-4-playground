import { Component, HostListener } from '@angular/core';
window.focus(); // make sure we are on this page before we start typing
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
   keyChange(event) {
    console.log("Receive event" +  event[0] + " / " + event[1]);
  }
}
