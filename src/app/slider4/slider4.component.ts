import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider4',
  templateUrl: './slider4.component.html',
  styleUrls: ['./slider4.component.css']
})
export class Slider4Component implements OnInit {

  @Input()
  public nameString: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
