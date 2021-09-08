import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-redo-release',
    templateUrl: './redo-release.component.html',
    styleUrls: ['./redo-release.component.css']
})
export class RedoReleaseComponent implements OnInit {

    public id: number = 0;
    public magazine: any[] = [];

    @Output()
    public closeModal: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private _http: HttpClient
    ) { }

    ngOnInit(): void {
        this._http.get('https://rtfnews.site/rtf/magazine')
            .subscribe((magazine: any) => {
                this.magazine = magazine;
            })
    }

    public delete(number: number) {
        fetch('https://rtfnews.site/rtf/magazine/' + number, {
            method: 'DELETE',
        })
            .then(res => res.text()) // or res.json()
    }

    public closeModalView(): void {
        this.closeModal.emit();
    }

}

export interface IItemMagazine {
    name: string,
    id: number
}
