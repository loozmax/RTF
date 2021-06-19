import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ServerRequestService } from 'src/data/services/server-request.service';

@Component({
  selector: 'create-new-release',
  templateUrl: './create-new-release.component.html',
  styleUrls: ['./styles/create-new-release.component.css']
})
export class CreateNewReleaseComponent {

  public dataArray: any = [];

  public nameNewspaper: string = "";

  @Output()
  public closeModal: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  public ngOnInit(): void {
    this.dataArray.push(
      {
        author: '',
        title: '',
        pages: [
          {
            maket: '',
            text: ''
          }
        ]
      }
    );
  }

  public closeModalView(): void {
    this.closeModal.emit();
  }

  public addForm(): void {
    this.dataArray.push(
      {
        author: '',
        title: '',
        pages: [
          {
            maket: '',
            text: ''
          }
        ]
      }
    );
  }

  public addPage(index: number): void {
    this.dataArray[index].pages.push({maket: '', text: ''})
  }

  public sumbit(): void {
    let json: any = {
      "name": this.nameNewspaper,
      "date": new Date(),
      "main": [
        {
          "number": 0,
          "text": [],
          "maket": "FIRST_PAGE",
          "images": []
        }
      ],
      "chapterList": [
        {
          "number": 1,
          "text": [],
          "maket": "CHAPTER_LIST",
          "images": []
        }
      ],
      "articles": [
        // {
        //   "name": ``,
        //   "author": ``,
        //   "pages": [
        //     {
        //       "number": 1,
        //       "maket": ``,
        //       "text": [
        //         ``
        //       ]
        //     }
        //   ]
        // }
      ]
    }
    for (let i = 0; i < this.dataArray.length; i++) {
      json.articles.push({name: this.dataArray[i].title, author: this.dataArray[i].author, pages: []})
      for (let k = 0; k < this.dataArray[i].pages.length; k++) {
        let obj = {
          number: k + 2,
          maket: this.dataArray[i].pages[k].maket,
          text: [this.dataArray[i].pages[k].text]
        }
        json.articles[i].pages.push(obj)
      }
    }
    let json2 = JSON.stringify(json)

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://rtfnews.site/rtf/create_magazine/");
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json2);
  }
}


