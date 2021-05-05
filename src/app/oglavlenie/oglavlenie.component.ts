import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oglavlenie',
  templateUrl: './oglavlenie.component.html',
  styleUrls: ['./oglavlenie.component.css']
})
export class OglavlenieComponent {

  public datas: any[] = [];
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
