import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Congviec } from './models/congviec.model';

@Injectable({
  providedIn: 'root'
})
export class CongviecserviceService {

  formdata : Congviec;
  listcongviec :Congviec[]
  constructor(private http : HttpClient) { }
  readonly BaseURI = 'https://localhost:44390/api';

  getall(){
      this.http.get(this.BaseURI+'/jobs')
      .toPromise().then(res =>this.listcongviec = res as Congviec[])
  }
  postcongviec(formdata : Congviec){
      return this.http.post(this.BaseURI+'/jobs',formdata);
  }
  putcongviec(formdata:Congviec){
    return this.http.put(this.BaseURI+'/jobs',formdata);
  }
  deletecongviec(id:number){
    return this.http.delete(this.BaseURI+'/jobs/'+id);
  }

}
