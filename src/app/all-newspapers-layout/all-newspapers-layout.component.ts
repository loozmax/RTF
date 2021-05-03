import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-all-newspapers-layout',
  templateUrl: './all-newspapers-layout.component.html',
  styleUrls: ['./all-newspapers-layout.component.css']
})
export class AllNewspapersLayoutComponent implements OnInit {

  public datas: any[] = [];
  public byteImage: any;

  constructor(private domSanitizer: DomSanitizer) { }

  public ngOnInit(): void {
    this.fetchDataFromServer();
  }

  public fetchDataFromServer(): void {
    let url = 'https://rtfnews.site/rtf/magazine';

    fetch(url, { mode: 'cors' })
      .then(res => res.json())
      .then((data: any) => {
        this.datas = data;
        console.log(data);
      })
      .catch(err => { throw err });
  }





}
