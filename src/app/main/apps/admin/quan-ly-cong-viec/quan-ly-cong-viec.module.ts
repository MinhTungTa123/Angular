import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CongviecComponent } from './congviec/congviec.component';
import { QuanLyCongViecComponent } from './quan-ly-cong-viec.component';
import { ChitietcongviecComponent } from './chitietcongviec/chitietcongviec.component';
import { QuanLyCongViecRoutingModule } from './quan-ly-cong-viec-routing.module';
import { CongviecserviceService } from '../shared/congviecservice.service';
import { AuthInterceptor } from '../../auth/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DuanserviceService } from '../shared/duanservice.service';

@NgModule({
  declarations: [QuanLyCongViecComponent,CongviecComponent,ChitietcongviecComponent],
  imports: [
    CommonModule,
    QuanLyCongViecRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[CongviecserviceService,
    DuanserviceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class QuanLyCongViecModule { }
