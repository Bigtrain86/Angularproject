import { Component } from '@angular/core';
import { HomeComponent } from './home/index';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
  directive: [HomeComponent]

})
export class AppComponent {
  title = 'app works! GO!!!!';
  name = 'ninja';
 
 /*innetierar datan här i root gällande ninja*/

  ninja = {
name: "Ryu",
belt: "Black"

  };

  yell(e){
    alert("i am yelling");
    
  }

}
