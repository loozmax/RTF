import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-arrow-to-bottom',
  templateUrl: './with-arrow-to-bottom.component.html',
  styleUrls: ['./with-arrow-to-bottom.component.css']
})
export class WithArrowToBottomComponent implements OnInit {
  @Input()
  public nameString: any;

  @Input()
  public image: any;

  @Input()
  public title: any;

  constructor() { }

  ngOnInit(): void {
  }

  public byteimage() {
    return `https://rtfnews.site/rtf/images/${this.image}`;
  }

}
