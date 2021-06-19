import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router,
    private domSanitizer: DomSanitizer) { 
  }
  
  public ngOnInit(): void {
    this.tooMuchLengthSize = this.title.split(' ').length >= 4;
    this.numberPage++;
    this.number = 'num' + this.numberPage;
  }

  public toAllMagazines(): void {
    this.router.navigate(['main'])
  }

  public byteimage() {
    return `https://rtfnews.site/rtf/images/${this.image}`;
  }

  public goToOglav(): void {
    let x = document.querySelector(".oglav-search");
    if (x) {
      x.scrollIntoView(false);
    }
  }
}
