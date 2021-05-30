import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public sendRequest(): void {
    const url = "https://rtfnews.site/rtf/create_magazine/";
    this.httpClient.post(url,
      [{
        "name": "AAA",
        "date": "2021-02-11",
        "id": 49,
        "main": [
          {
            "number": 0,
            "text": [],
            "maket": "FIRST_PAGE",
          }
        ],
        "chapterList": [{
          "number": 1,
          "text": [],
          "maket": "CHAPTER_LIST",
        }],

        "articles": [
          {
            "name": "jjj",
            'author': 'Ann',
            "pages": [
              {
                "number": 1,
                "maket": "FIRST_PAGE",
                "text": "mnogo texta"
              },
              {
                "number": 2,
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
      }]

    );
  }
}
