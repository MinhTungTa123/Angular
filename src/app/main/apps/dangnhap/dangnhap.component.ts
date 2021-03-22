import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../admin/shared/models/user.service';
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {

  formModel  = {
    UserName:'',
    Password:''
  }
  message = ""
  constructor(private service :UserService,private router:Router,private toastr : ToastrService) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
    this.router.navigateByUrl('/admin');
  }
  onSubmit(form : NgForm){
    console.log(form.value);
    this.service.login(form.value).subscribe(
        (res:any)=>{
          localStorage.setItem('token',res.token);
          this.toastr.success("Đăng Nhập Thành Công")
          this.router.navigateByUrl('/admin')
        },
        err =>{
          if(err.status ==400){
            this.toastr.error("Tên Đăng Nhập Hoặc Mật Khẩu Không Chính Xác!!");
          }else{
            console.log(err)
          }
        }

    )
  }

}
