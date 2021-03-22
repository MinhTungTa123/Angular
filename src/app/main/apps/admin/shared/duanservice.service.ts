import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Duan } from './models/duan.model';

@Injectable({
  providedIn: 'root'
})
export class DuanserviceService {

  formData : Duan;
  list :Duan[];
  readonly BaseURI = 'https://localhost:44390/api';
  constructor(private http:HttpClient) { }
  postduan(formdata : Duan){
      return this.http.post(this.BaseURI+'/projects',formdata);
  }
  putduan(formdata:Duan){
      return this.http.put(this.BaseURI+'/projects',formdata);
  }
  listduan(){
      this.http.get(this.BaseURI+'/projects')
      .toPromise().then(res =>this.list = res as Duan[])
  }
  deleteduan(id:number){
     return this.http.delete(this.BaseURI+"/projects/"+id);
  }
}
