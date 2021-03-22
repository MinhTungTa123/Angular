import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DuanserviceService } from '../../shared/duanservice.service';
import { Duan } from '../../shared/models/duan.model';

@Component({
  selector: 'app-chitietduan',
  templateUrl: './chitietduan.component.html',
  styleUrls: ['./chitietduan.component.css']
})
export class ChitietduanComponent implements OnInit {

  constructor(private duanservice :DuanserviceService,private toastr:ToastrService) { }

  ngOnInit() {
    this.duanservice.listduan();
  }
  populateForm(emp: Duan) {
    this.duanservice.formData = Object.assign({}, emp);
  }
  onDelete(id:number){
    if(confirm('Bạn có chắc muốn xóa')){
      this.duanservice.deleteduan(id).subscribe(res =>{
            this.duanservice.listduan();
            this.toastr.warning("Xóa Thành Công")

      })

    }
  }

}
