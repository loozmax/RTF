import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-slider10',
  templateUrl: './slider10.component.html',
  styleUrls: ['./slider10.component.css']
})
export class Slider10Component implements OnInit {
  @Input()
  public numberPage: number = 0;

  @Input()
  public title: string = "";
  
  @Input()
  public textFirst: string = "";

  @Input()
  public textSecond: string = "";

  @Input()
  public textThird: string = "";
  
  @Input()
  public image: any;

  public tooMuchLengthSize: boolean = false;

  public number: string = '';

  public byteImage: any;

  constructor(private domSanitizer: DomSanitizer) { }
  
  public ngOnInit(): void {
    this.tooMuchLengthSize = this.title.split(' ').length >= 5;
    this.numberPage++;
    this.number = 'num' + this.numberPage;
  }

  // public fetchtest(): void {
  //   let url = `https://rtfnews.site/rtf/images?filename=${this.image}`;

  //   fetch(url, { mode: 'cors' })
  //     .then(res => res.text())
  //     .then((data: any) => {
  //       this.byteImage = data;
  //     })
  //     .catch(err => { throw err });
  // }

  // public get byteimage() {
  //   return this.domSanitizer.bypassSecurityTrustUrl(`data:image/png;base64,${this.byteImage}`);
  // }

  public byteimage(): string {
    return `https://rtfnews.site/rtf/images/${this.image}`;
  }
}
