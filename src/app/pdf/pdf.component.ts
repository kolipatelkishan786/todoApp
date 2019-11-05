import { Component, OnInit } from '@angular/core';
import {Idata} from "../Idata";
import {TestService} from "../testService";

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  responseData: Idata[] = [];
  constructor(public testService: TestService) { }

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
