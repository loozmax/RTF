import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-radio',
  templateUrl: './day-radio.component.html',
  styleUrls: ['./day-radio.component.css']
})
export class DayRadioComponent implements OnInit {

  @Input()
  public nameString: string = "";

  @Input()
  public date: string = "";

  public nameFirst: string = '';
  public nameSecond: string = '';

  constructor() { }

  public ngOnInit(): void {
    this.splitTitle();
  }

  public splitTitle(): void {
    this.nameFirst = this.nameString.split(' ')[0];
    this.nameSecond = this.nameString.split(' ')[2];
  }

}
