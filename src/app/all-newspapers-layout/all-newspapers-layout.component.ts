import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-newspapers-layout',
  templateUrl: './all-newspapers-layout.component.html',
  styleUrls: ['./all-newspapers-layout.component.css']
})
export class AllNewspapersLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public data: any[] = [
    {
      "id": 1,
      "name": "AAA",
      "date": "2021-02-11",
      "articles": [
        {
          "name": "jjj",
          "pages": [
            {
              "number": 1,
              "maket": "FIRST_PAGE",
              "text": "mnogo texta"
            },
            {
              "number": 1,
              "maket": "COLUMNS_PAGE",
              "text": "ochen mnogo texta"
            }
          ]
        },
        {
          "name": "salut",
          "pages": []
        }
      ]
    },
    {
      "id":2,
      "name": "AAA",
      "date": "2021-02-11",
      "articles": [
        {
          "name": "jjj",
          "pages": [
            {
              "number": 1,
              "maket": "FIRST_PAGE",
              "text": "mnogo texta"
            },
            {
              "number": 1,
              "maket": "COLUMNS_PAGE",
              "text": "ochen mnogo texta"
            }
          ]
        },
        {
          "name": "salut",
          "pages": []
        }
      ]
    }
  ]


}
