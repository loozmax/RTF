import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-newspapers-layout',
  templateUrl: './all-newspapers-layout.component.html',
  styleUrls: ['./all-newspapers-layout.component.css']
})
export class AllNewspapersLayoutComponent implements OnInit {

  public datas: any[] = [];
  
  constructor() { }

  public ngOnInit(): void {
    this.fetchDataFromServer();
  }

  public fetchDataFromServer(): void {
    let url = 'http://80.87.111.224:80/rtf/magazine';

    fetch(url, { mode: 'cors' })
      .then(res => res.json())
      .then((data: any) => {
        this.datas = data;
        console.log(this.datas);
      })
      .catch(err => { throw err });
  }
}


