import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-component-for-shadrin',
  templateUrl: './test-component-for-shadrin.component.html',
  styleUrls: ['./test-component-for-shadrin.component.css']
})
export class TestComponentForShadrinComponent implements OnInit {

  public datas: any[] = [];
  public id: any = 0;
  public name: string = "Lorem /n Ipsum";
  public date: string = "20-03-2020"
  
  constructor(private route: ActivatedRoute) {
    this.route.params.forEach(item => this.id = item.id);
  }

  public ngOnInit(): void {
  }

}
