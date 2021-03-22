import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyDuAnComponent } from './quan-ly-du-an.component';
import { DuanComponent } from './duan/duan.component';
import { ChitietduanComponent } from './chitietduan/chitietduan.component';
import { QuanLyDuAnRoutingModule } from './quan-ly-du-an-routing.module';
import { FormsModule, NgForm } from '@angular/forms';
import { DuanserviceService } from '../shared/duanservice.service';
import { AuthInterceptor } from '../../auth/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from '../shared/models/user.service';

@NgModule({
  declarations: [QuanLyDuAnComponent,DuanComponent,ChitietduanComponent],
  imports: [
    CommonModule,
    QuanLyDuAnRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[DuanserviceService,UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ]

})
export class QuanLyDuAnModule { }
