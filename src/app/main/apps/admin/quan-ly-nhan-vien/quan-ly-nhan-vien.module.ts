import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyNhanVienComponent } from './quan-ly-nhan-vien.component';
import { ChitietnhanvienComponent } from './chitietnhanvien/chitietnhanvien.component';
import { QuanLyNhanVienRoutingModule } from './quan-ly-nhan-vien-routing.module';
import { ThemsuanvComponent } from './themsuanv/themsuanv.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from '../shared/models/user.service';
import { AuthInterceptor } from '../../auth/auth.interceptor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuanLyNhanVienComponent,ChitietnhanvienComponent, ThemsuanvComponent],
  imports: [
    CommonModule,
    QuanLyNhanVienRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers :[UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class QuanLyNhanVienModule { }
