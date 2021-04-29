import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider5',
  templateUrl: './slider5.component.html',
  styleUrls: ['./slider5.component.css']
})
export class Slider5Component implements OnInit {

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
