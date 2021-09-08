import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-with-one-block-center',
  templateUrl: './slider-with-one-block-center.component.html',
  styleUrls: ['./slider-with-one-block-center.component.css']
})
export class SliderWithOneBlockCenterComponent implements OnInit {

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
