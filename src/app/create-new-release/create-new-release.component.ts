import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'create-new-release',
    templateUrl: './create-new-release.component.html',
    styleUrls: ['./styles/create-new-release.component.css']
})
export class CreateNewReleaseComponent {

    public dataArray: any = [];
    public imageNames: string[] = [];
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
                        text: '',
                        file: ''
                    }
                ]
            }
        );
    }

    public test(value: any): void {
        const file = value.target.files[0];

        let formdata = new FormData();
        formdata.append("image", file, this.generateName());

        let requestOptions = {
            method: 'POST',
            body: formdata,
        };

        fetch("https://rtfnews.site/rtf/upload_image/", requestOptions)
            .then(response => response.text())
            .then(res => this.imageNames.push(res))

    }

    public generateName(): string {
        let random = Math.random().toString(36).substring(2);

        return random;
    }

    public closeModalView(): void {
        this.closeModal.emit();
    }

    public addForm(): void {
        console.log(this.dataArray);
        this.dataArray.push(
            {
                author: '',
                title: '',
                pages: [
                    {
                        maket: '',
                        text: '',
                        file: ''
                    }
                ]
            }
        );
        console.log(this.dataArray);
    }


    public addPage(index: number): void {
        this.dataArray[index].pages.push({ maket: '', text: '', file: '' })
    }

    public sumbit(): void {
        this.closeModal.emit()
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

            ]
        }
        for (let i = 0; i < this.dataArray.length; i++) {
            json.articles.push({ name: this.dataArray[i].title, author: this.dataArray[i].author, pages: [] })
            for (let k = 0; k < this.dataArray[i].pages.length; k++) {
                let obj = {
                    number: k + 2,
                    maket: this.dataArray[i].pages[k].maket,
                    text: [this.dataArray[i].pages[k].text],
                    images: [this.imageNames[k]]
                }
                // this.imageNames.shift();
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


