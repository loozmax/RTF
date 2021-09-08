import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./styles/admin-panel.component.css']
})
export class AdminPanelComponent {

  public showModal: boolean = false;
  public redoRelease: boolean = false;

  constructor() { }

  public ngOnInit(): void {
  }

  public changeActiveModal(): void {
    this.showModal = !this.showModal;
  }

  public closeModal(): void {
    this.showModal = false;
    this.redoRelease = false;
  }

  public startRedo(): void {
    this.redoRelease = !this.redoRelease;
  }



}
