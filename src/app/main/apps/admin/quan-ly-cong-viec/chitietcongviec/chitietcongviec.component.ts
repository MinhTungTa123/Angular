import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CongviecserviceService } from '../../shared/congviecservice.service';
import { Congviec } from '../../shared/models/congviec.model';

@Component({
  selector: 'app-chitietcongviec',
  templateUrl: './chitietcongviec.component.html',
  styleUrls: ['./chitietcongviec.component.css']
})
export class ChitietcongviecComponent implements OnInit {

  constructor(private congviecservice : CongviecserviceService,private toastr:ToastrService) { }

  ngOnInit() {
    this.congviecservice.getall();
  }
  populateForm(em:Congviec){
    this.congviecservice.formdata = Object.assign({},em);
  }
  onDelete(id:number){
    if(confirm("Bạn chắc chắn muốn xóa")){
        this.congviecservice.deletecongviec(id).subscribe(res =>{
          this.toastr.warning("Xóa Thành Công")
          this.congviecservice.getall();

        },
        err =>{
          console.log(err)
        }
        )
    }


  }
}
