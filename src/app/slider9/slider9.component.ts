import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider9',
  templateUrl: './slider9.component.html',
  styleUrls: ['./slider9.component.css']
})
export class Slider9Component implements OnInit {

  @Input()
  public nameString: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
