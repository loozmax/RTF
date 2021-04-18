import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-radio',
  templateUrl: './day-radio.component.html',
  styleUrls: ['./day-radio.component.css']
})
export class DayRadioComponent implements OnInit {

  @Input()
  public name: string | undefined;

  @Input()
  public date: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
