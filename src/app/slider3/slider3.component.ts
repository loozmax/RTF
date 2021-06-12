import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-slider3',
  templateUrl: './slider3.component.html',
  styleUrls: ['./slider3.component.css']
})
export class Slider3Component implements OnInit {

  @Input()
  public numberPage: number = 0;

  @Input()
  public title: string = "";

  @Input()
  public nameString: string = "";

  @Input()
  public author: string = "";
  
  @Input()
  public image: any;

  public byteImage: any;

  public number: string = '';

  public tooMuchLengthSize: boolean = false;

  constructor(private domSanitizer: DomSanitizer) { 
  }
  
  public ngOnInit(): void {
    this.tooMuchLengthSize = this.title.split(' ').length >= 4;
    this.numberPage++;
    this.number = 'num' + this.numberPage;
  }

  // public fetchtest(): void {
  //   let url = `https://rtfnews.site/rtf/images?filename=${this.image}`;

  //   fetch(url, { mode: 'cors' })
  //     .then(res => res.text())
  //     .then((data: any) => {
  //       this.byteImage =  data;
  //     })
  //     .catch(err => { throw err });
  // }

  public byteimage() {
    return `https://rtfnews.site/rtf/images/${this.image}`;
  }

  // public get byteimage() {
  //   return this.domSanitizer.bypassSecurityTrustUrl(`data:image/png;base64,${this.byteImage}`);
  // }


}
