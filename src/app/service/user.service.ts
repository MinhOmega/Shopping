import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverUrl } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserInfo = (id: string) => {
    const url = `${serverUrl}clients/user/get-user-info`;
    let body = {username: id}
    return this.http.post(url, body);
  }

  insertOrUpdateAddress = (body: any) => {
    const url = `${serverUrl}clients/user/address`;
    return this.http.post(url, body);
  }

  deleteAddress = (id: number) => {
    const url = `${serverUrl}clients/user/address/${id}`;
    return this.http.post(url, null);
  }

  updateInfo = (body: any) => {
    const url = `${serverUrl}clients/user/info`;
    return this.http.post(url, body);
  }
}
