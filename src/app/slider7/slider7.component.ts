import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-slider7',
  templateUrl: './slider7.component.html',
  styleUrls: ['./slider7.component.css']
})
export class Slider7Component implements OnInit {

  @Input()
  public nameString: string = "";
  
  @Input()
  public image: any;

  public byteImage: any;

  constructor(private domSanitizer: DomSanitizer) { }
  
  public ngOnInit(): void {
    this.fetchtest();
  }

  public fetchtest(): void {
    let url = `https://rtfnews.site/rtf/images?filename=${this.image}`;

    fetch(url, { mode: 'cors' })
      .then(res => res.text())
      .then((data: any) => {
        this.byteImage =  data;
        console.log(data);
      })
      .catch(err => { throw err });
  }

  public get byteimage() {
    return this.domSanitizer.bypassSecurityTrustUrl(`data:image/png;base64,${this.byteImage}`);
  }

}
