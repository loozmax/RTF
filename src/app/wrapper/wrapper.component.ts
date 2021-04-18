import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  ngOnInit() {

  }

  public id: any = 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.forEach(item => this.id = item.id);
    console.log(this.id);
  }

  public data: any[] = [
    {
      "id": 1,
      "name": "ДЕНЬ КОЛБАСЫ",
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
              "maket": "OGLAVLENIE_PAGE",
              "text": "ochen mnogo texta"
            },
            {
              "number": 1,
              "maket": "THIRD_PAGE",
              "text": "ochen mnogo texta"
            }
          ]
        },
        {
          "name": "salut",
          "pages": [
            {
              "number": 1,
              "maket": "FIFTH_PAGE",
              "text": "ochen mnogo texta"
            },
            ,
            {
              "number": 1,
              "maket": "TEN_PAGE",
              "text": "ochen mnogo texta"
            },
            {
              "number": 2,
              "maket": "SEVEN_PAGE",
              "text": "ochen mnogo texta"
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "ДЕНЬ ДНЯ",
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
              "maket": "THIRD_PAGE",
              "text": "ochen mnogo texta"
            },
            {
              "number": 1,
              "maket": "SEVEN_PAGE",
              "text": "ochen mnogo texta"
            },
            {
              "number": 1,
              "maket": "TEN_PAGE",
              "text": "ochen mnogo texta"
            }
          ]
        },
        {
          "name": "salut",
          "pages": [
            {
              "number": 1,
              "maket": "FIFTH_PAGE",
              "text": "ochen mnogo texta"
            }
          ]
        }
      ]
    }
  ]

}
