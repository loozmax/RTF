import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-slider5',
  templateUrl: './slider5.component.html',
  styleUrls: ['./slider5.component.css']
})
export class Slider5Component implements OnInit {

  @Input()
  public title: string = "";

  @Input()
  public textFirst: string = "";

  @Input()
  public textSecond: string = "";

  @Input()
  public textThird: string = "";

  @Input()
  public image: any[] = [];

  public byteImage: any[] = [];

  constructor(private domSanitizer: DomSanitizer) { }

  public ngOnInit(): void {
    // this.fetchtest();
  }

  // public fetchtest(): void {
  //   this.image.forEach((item, index) => {
  //     let url = `https://rtfnews.site/rtf/images?filename=${this.image[index]}`;

  //     fetch(url, { mode: 'cors' })
  //       .then(res => res.text())
  //       .then((data: any) => {
  //         this.byteImage[index] = data;
  //       })
  //       .catch(err => { throw err });
  //   })
  // }

  public byteimage1() {
    return `https://rtfnews.site/rtf/images/${this.image[0]}`;
  }

  public byteimage2() {
    return `https://rtfnews.site/rtf/images/${this.image[1]}`;
  }

  public byteimage3() {
    return `https://rtfnews.site/rtf/images/${this.image[2]}`;
  }

  // public get byteimage1() {
  //   return this.domSanitizer.bypassSecurityTrustUrl(`data:image/png;base64,${this.byteImage[0]}`);
  // }

  // public get byteimage2() {
  //   return this.domSanitizer.bypassSecurityTrustUrl(`data:image/png;base64,${this.byteImage[1]}`);
  // }

  // public get byteimage3() {
  //   return this.domSanitizer.bypassSecurityTrustUrl(`data:image/png;base64,${this.byteImage[2]}`);
  // }


}
