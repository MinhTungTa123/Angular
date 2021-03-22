import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/models/user.service';

@Component({
  selector: 'app-themsuanv',
  templateUrl: './themsuanv.component.html',
  styleUrls: ['./themsuanv.component.css']
})
export class ThemsuanvComponent implements OnInit {

  constructor(private nhanvienservice : UserService) { }
  ngOnInit() {
  }
  onSubmit(form:NgForm){
    console.log(form.value)
  }
}
