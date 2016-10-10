import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "welcome to the ninja directory!";


/*@input dekoratorn avänds för att ta emot data från root, får inte glömma att lägga til den i Import högst upp*/
  @Input() ninja;
  @Output() onYell = new EventEmitter();

  fireYellEvent(e){
    this.onYell.emit(e);
  }

  constructor()
  {

  }
  ngOnInit()
  {

  }
}