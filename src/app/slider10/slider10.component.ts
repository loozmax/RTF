import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider10',
  templateUrl: './slider10.component.html',
  styleUrls: ['./slider10.component.css']
})
export class Slider10Component implements OnInit {
  @Input()
  public textFirst: string = "";

  @Input()
  public textSecond: string = "";

  @Input()
  public textThird: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
