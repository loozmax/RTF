import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider6',
  templateUrl: './slider6.component.html',
  styleUrls: ['./slider6.component.css']
})
export class Slider6Component implements OnInit {

  @Input()
  public nameString: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
