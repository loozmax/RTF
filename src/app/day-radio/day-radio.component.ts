import { Component, Input, OnInit } from '@angular/core';
import { NewspaperModel } from '../newspaper.model/newspaper.model.component';

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

  public model: NewspaperModel = new NewspaperModel();

  constructor() { }

  public ngOnInit(): void {
    this.splitTitle();
  }

  public splitTitle(): void {
    this.nameFirst = this.nameString.split(' ')[0];
    this.nameSecond = this.nameString.split(' ')[2];
  }

}
