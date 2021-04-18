import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-oglavlenie',
  templateUrl: './oglavlenie.component.html',
  styleUrls: ['./oglavlenie.component.css']
})
export class OglavlenieComponent implements OnInit {

  @Input()
  public nameString: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
