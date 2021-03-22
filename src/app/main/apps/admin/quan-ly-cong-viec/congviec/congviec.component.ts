import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CongviecserviceService } from '../../shared/congviecservice.service';
import { DuanserviceService } from '../../shared/duanservice.service';
import { Duan } from '../../shared/models/duan.model';

@Component({
  selector: 'app-congviec',
  templateUrl: './congviec.component.html',
  styleUrls: ['./congviec.component.css']
})
export class CongviecComponent implements OnInit {

  constructor(private congviecservice :CongviecserviceService,private duanservice:DuanserviceService,private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.duanservice.listduan()
  }

  listduan : Duan[];

  resetForm(form?:NgForm){
      if(form!=null){
        form.resetForm();
      }

      this.congviecservice.formdata={
        jobId: 0,
        projectId: 0,
        jobName: "",
        status: false,
        jobDate:new Date(),
        user: null,
        project: null,
      }
  }
  onSubmit(formdata:NgForm){
    if(formdata.value.jobId == 0){
      this.insertRecord(formdata);
    }else{
      this.updateRecord(formdata);
    }

  }
  insertRecord(formdata:NgForm){
    formdata.value.status = (/true/i).test(formdata.value.status);
    formdata.value.projectId = Number(formdata.value.projectId);
    console.log(formdata.value)
    this.congviecservice.postcongviec(formdata.value).subscribe(res =>{
      this.toastr.success('Thêm Thành Công');
      this.resetForm();
      this.congviecservice.getall();
    },
    err =>{
      console.log(err)
    }
    )
}
  updateRecord(form:NgForm){
    form.value.status = (/true/i).test(form.value.status);
    this.congviecservice.putcongviec(form.value).subscribe(res =>{
      this.toastr.success('Cập Nhật Thành Công');
      this.congviecservice.getall();
    },
      err =>{
        this.toastr.error(err.message);
        console.log(err)
      }
    )
  }

}
