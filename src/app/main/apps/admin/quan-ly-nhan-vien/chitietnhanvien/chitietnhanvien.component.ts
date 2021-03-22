import { Component, OnInit } from '@angular/core';
import { Nhanvien } from '../../shared/models/nhanvien.model';
import { UserService } from '../../shared/models/user.service';

@Component({
  selector: 'app-chitietnhanvien',
  templateUrl: './chitietnhanvien.component.html',
  styleUrls: ['./chitietnhanvien.component.css']
})
export class ChitietnhanvienComponent implements OnInit {

  constructor(private nhanvienservice :UserService) { }
  userDetails;
  ngOnInit() {
    this.getdsuser();
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
  onDelete(id :number){

  }
}
