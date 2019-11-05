import {Component, OnInit} from "@angular/core";
import {Idata} from './Idata';
import {TestService} from './testService';
import 'toastr';

declare let $: any;
declare let toastr: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: Idata = <any>{};
  responseData: Idata[] = [];
  constructor(public testService: TestService) {
  }

  ngOnInit() {
    this.loadData();
  }

  add() {
    this.data = <any>{};
  }

  loadData() {
    this.testService.getApi().subscribe((data: Idata[]) => {
      console.log(data);
      this.responseData = data;
    });
  }

  async SaveData() {
    console.log(this.data);
    if (this.data._id) {
      let res = await this.testService.updateApi(this.data).toPromise();
      console.log(res);
      $('#myModal').modal('hide');
      this.loadData();
      toastr.success('Data Updated Successfully!');
    } else {
      let res = await this.testService.postApi(this.data).toPromise();
      // this.loadData();
      console.log(res);
      $('#myModal').modal('hide');
      this.loadData();
      toastr.success('Data Saved Successfully!');
    }
  }

  async updateData(_id) {
    $('#myModal').modal('show');
    let res = await this.testService.getByid(_id).toPromise();
    console.log(res);
    this.data = <any>res;
  }

  async deleteData(_id) {
    let res = await this.testService.deleteApi(_id).toPromise();
    console.log(res);
    this.loadData();
    toastr.success('Data Deleted Successfully!');
  }

  // async UserLogin() {
  //   let user = {
  //     email: 'k@gmail.com',
  //     password: '12345'
  //   };
  //   // console.log(user);
  //   await this.testService.login(user.email, user.password).subscribe((respose) => {
  //     console.log(respose);
  //     this.loadData();
  //     toastr.success('User Login Successfully!');
  //
  //   });
  // }
}
