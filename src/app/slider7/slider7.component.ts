import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider7',
  templateUrl: './slider7.component.html',
  styleUrls: ['./slider7.component.css']
})
export class Slider7Component implements OnInit {

  @Input()
  public nameString: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
