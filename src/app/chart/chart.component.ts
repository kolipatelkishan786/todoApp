import { Component, OnInit } from '@angular/core';
import {Idata} from "../Idata";
import {TestService} from "../testService";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  responseData: Idata[] = [];
  public data: any[] = [{
    kind: 'Hydroelectric', share: 0.175
  }, {
    kind: 'Nuclear', share: 0.238
  }, {
    kind: 'Coal', share: 0.118
  }, {
    kind: 'Solar', share: 0.052
  }, {
    kind: 'Wind', share: 0.225
  }, {
    kind: 'Other', share: 0.192
  }];

  public labelContent(e: any): string {
    return e.category;
  }

  constructor(public testService: TestService) {
  }


  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.testService.getApi().subscribe((data: Idata[]) => {
      console.log(data);
      this.responseData = data;
    });
  }

}
