import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-radio',
  templateUrl: './day-radio.component.html',
  styleUrls: ['./day-radio.component.css']
})
export class DayRadioComponent implements OnInit {

  @Input()
  public nameString: string = "";

  public nameFirst: string = '';
  public nameSecond: string = '';

  @Input()
  public date: string = "";

  constructor() { }

  ngOnInit(): void {
    this.nameFirst = this.nameString.split(' ')[0];
    this.nameSecond = this.nameString.split(' ')[2];
  }

}
