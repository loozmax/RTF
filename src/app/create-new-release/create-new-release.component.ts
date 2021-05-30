import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ServerRequestService } from 'src/data/services/server-request.service';

@Component({
  selector: 'create-new-release',
  templateUrl: './create-new-release.component.html',
  styleUrls: ['./styles/create-new-release.component.css']
})
export class CreateNewReleaseComponent {

  public articleNumbers: any[] = [
    {
      countPages: [0]
    }
  ];
  public increasePage: number[] = [1];
  
  @Output()
  public closeModal: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private serverRequestService: ServerRequestService
  ) { }

  myForm: FormGroup = new FormGroup({
    // "nameChapter": new FormControl(), //название, о чем газета в целом FIRST_PAGE
    "author": new FormControl(),
    "nameArticle": new FormControl(),
    "maket": new FormControl(),
    "textPage": new FormControl()
  })

  public increaseArticles(): void {
    this.articleNumbers.push({ countPages: [0] });
  }

  public increasePages(num: number): void {
    this.articleNumbers[num].countPages.push(0);
  }

  public closeModalView(): void {
    this.closeModal.emit();
  }

  public sumbit(myForm: any): void {
    console.log(myForm.value);
    this.serverRequestService.sendRequest();
  }
}