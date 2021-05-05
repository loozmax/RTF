import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider8',
  templateUrl: './slider8.component.html',
  styleUrls: ['./slider8.component.css']
})
export class Slider8Component implements OnInit {
  @Input()
  public title: string = "";
  
  @Input()
  public nameString: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
