import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Idata} from './Idata';

@Injectable({
  providedIn: 'root'
})

export class TestService {
  api = 'http://localhost:8080/post';

  constructor(public http: HttpClient) {
  }

  getApi() {
    return this.http.get(this.api);
  }

  getByid(_id) {
    return this.http.get(`${this.api}/${_id}`);
  }

  postApi(data: Idata) {
    return this.http.post(this.api, data);
  }

  deleteApi(_id) {
    return this.http.delete(`${this.api}/${_id}`);
  }

  updateApi(data: Idata) {
    return this.http.put(`${this.api}/${data._id}`, data);
  }

  // loginApi(condition: Idata) {
  //   return this.http.get(`${this.api}/${condition.email}&${condition.password}`);
  // }
  login(email: string, password: string) {
    return this.http.post(this.api, {email: email, password: password});
  }
}
