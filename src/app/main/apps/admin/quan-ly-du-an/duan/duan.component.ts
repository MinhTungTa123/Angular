import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DuanserviceService } from '../../shared/duanservice.service';
import { Duan } from '../../shared/models/duan.model';
import { Nhanvien } from '../../shared/models/nhanvien.model';
import { UserService } from '../../shared/models/user.service';

@Component({
  selector: 'app-duan',
  templateUrl: './duan.component.html',
  styleUrls: ['./duan.component.css']
})
export class DuanComponent implements OnInit {


  constructor(private duanservice:DuanserviceService,private nhanvienservice : UserService,private toastr : ToastrService) { }

  userDetails;
  ngOnInit() {
    this.resetForm();
    this.getdsuser();

  }
  onSubmit(form:NgForm){
       if(form.value.ProjectId == 0){
        this.insertRecord(form);
      }else{
        this.updateRecord(form);
      }
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.duanservice.formData = {
      projectId: 0,
      projectName: '',
      userId: '',
      projectStatus:false,
      user:null,
      job:null
    }
  }
  getdsuser(){
    this.nhanvienservice.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  insertRecord(formdata:NgForm){
      formdata.value.projectStatus= (/true/i).test(formdata.value.projectStatus);
      this.duanservice.postduan(formdata.value).subscribe(res =>{
        this.toastr.success('Thêm Thành Công');
        this.resetForm();
        this.duanservice.listduan();
      },
      err =>{
        this.toastr.error(err.message);
        console.log(err)
      }
      )
  }
  updateRecord(form:NgForm){
    form.value.projectStatus= (/true/i).test(form.value.projectStatus);
    this.duanservice.putduan(form.value).subscribe(res =>{
      this.toastr.success('Cập Nhật Thành Công');

      this.duanservice.listduan();
    },
      err =>{
        this.toastr.error(err.message);
        console.log(err)
      }
    )
  }
}
