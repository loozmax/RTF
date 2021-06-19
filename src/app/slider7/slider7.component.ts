import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider7',
  templateUrl: './slider7.component.html',
  styleUrls: ['./slider7.component.css']
})
export class Slider7Component implements OnInit {

  @Input()
  public numberPage: number = 0;

  @Input()
  public title: string = "";

  @Input()
  public nameString: string = "";

  @Input()
  public image: any;

  public byteImage: any;

  public number: string = '';

  public flip: boolean = false;

  public tooMuchLengthSize: boolean = false;

  constructor(
    private router: Router,
    private domSanitizer: DomSanitizer) { }

  public ngOnInit(): void {
    this.tooMuchLengthSize = this.title.split(' ').length >= 4;
    this.numberPage++;
    this.number = 'num' + this.numberPage;
  }

  public cardFlip(): void {
    this.flip = !this.flip;
  }

  public byteimage(): string {
    return `https://rtfnews.site/rtf/images/${this.image}`;
  }

  public toAllMagazines(): void {
    this.router.navigate(['main'])
  }

  public goToOglav(): void {
    let x = document.querySelector(".oglav-search");
    if (x) {
      x.scrollIntoView(false);
    }
  }

}
