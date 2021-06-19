import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider5',
  templateUrl: './slider5.component.html',
  styleUrls: ['./slider5.component.css']
})
export class Slider5Component implements OnInit {

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
  public image: any[] = [];

  public flip1: boolean = false;
  public flip2: boolean = false;
  public flip3: boolean = false;

  public number: string = '';

  public byteImage: any[] = [];

  public slideIndex: number = 1;

  public tooMuchLengthSize: boolean = false;

  constructor(
    private router: Router,
    private domSanitizer: DomSanitizer) { }

  public ngOnInit(): void {
    this.tooMuchLengthSize = this.title.split(' ').length >= 4;
    this.numberPage++;
    this.number = 'num' + this.numberPage;
    // this.showSlides(this.slideIndex);
  }

  public plusSlide() {
    this.showSlides(this.slideIndex += 1);
  }

  public minusSlide() {
    this.showSlides(this.slideIndex -= 1);
  }

  public currentSlide(n: number, e?: any) {
    this.showSlides(this.slideIndex = n, e);
  }

  public showSlides(n: number, e?: any) {
    var i;
    // let name = `uniq${this.number}`;

    var slides = document.getElementsByClassName(e) as HTMLCollectionOf<HTMLElement>;
    var dots = document.getElementsByClassName(`slider-dots_item_${this.number}`) as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) {
      this.slideIndex = 1
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    if (n) {
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
    }
    if (n) {
      for (i = 0; i < dots.length; i++) {
        dots[i].style.background = "#ddd"
      }
    }
    slides[this.slideIndex - 1].style.display = "block";
    // // dots
    dots[this.slideIndex - 1].style.background = "#000";
  }


  public cardFlip1(): void {
    this.flip1 = !this.flip1;
  }

  public cardFlip2(): void {
    this.flip2 = !this.flip2;
  }
  
  public cardFlip3(): void {
    this.flip3 = !this.flip3;
  }

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
