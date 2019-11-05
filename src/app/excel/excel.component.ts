import {Component, OnInit} from '@angular/core';
import {Idata} from "../Idata";
import {TestService} from "../testService";

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent implements OnInit {
  responseData: Idata[] = [];

  constructor(public testService: TestService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.testService.getApi().subscribe((data: Idata[]) => {
      // console.log(data);
      this.responseData = data;
    });
  }


}
