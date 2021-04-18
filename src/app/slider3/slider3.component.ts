import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider3',
  templateUrl: './slider3.component.html',
  styleUrls: ['./slider3.component.css']
})
export class Slider3Component implements OnInit {

  @Input()
  public nameString: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
