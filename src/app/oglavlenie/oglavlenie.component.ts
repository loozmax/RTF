import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oglavlenie',
  templateUrl: './oglavlenie.component.html',
  styleUrls: ['./styles/oglavlenie.component.css']
})
export class OglavlenieComponent {

  @Input()
  public nameString: string = "";
  
  public datas: any[] = [];
  
  public id: any = 0;
  
  public nameFirst: string = '';

  public nameSecond: string = '';

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {
    this.route.params.forEach(item => this.id = item.id);
  }

  public ngOnInit(): void {
    this.fetchDataFromServer();
    this.nameFirst = this.nameString.split(' ')[0];
    this.nameSecond = this.nameString.split(' ')[2];
  }

  public scrollToTop(): void {
    const top = document.querySelector('.top');
    top?.scrollIntoView(false);
  }

  public onClick(id: number): void {
    const num: string = '#num' + id;
    let x = document.querySelector(num);
    if (x) {
      x.scrollIntoView(true);
    }
  }

  public fetchDataFromServer(): void {
    let url = `https://rtfnews.site/rtf/magazine/${this.id}`;

    fetch(url, { mode: 'cors' })
      .then(res => res.json())
      .then((data: any) => {
        this.datas = data;
        console.log(this.datas);
      })
      .catch(err => { throw err });
  }


}
