import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface IData {
  articles: Array<any>,
  chapterList: Array<any>,
  date: string,
  id: number,
  main: Array<any>,
  name: string
}

@Component({
  selector: 'app-oglavlenie',
  templateUrl: './oglavlenie.component.html',
  styleUrls: ['./oglavlenie.component.css']
})
export class OglavlenieComponent {

  public datas: IData[] = [];
  public id: any = 0;

  @Input()
  public nameString: string = "";

  constructor(private route: ActivatedRoute) {
    this.route.params.forEach(item => this.id = item.id);
  }
  public ngOnInit(): void {
    this.fetchDataFromServer();
  }

  public fetchDataFromServer(): void {
    let url = `https://rtfnews.site/rtf/magazine/${this.id}`;

    fetch(url, { mode: 'cors' })
      .then(res => res.json())
      .then((data: any) => {
        this.datas = data;
        console.log(data);
      })
      .catch(err => { throw err });
  }


}
