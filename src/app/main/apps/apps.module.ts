import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './admin/shared/models/user.service';
import { AuthGuard } from './auth/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const routes : Routes =[
    {
      path:'',
      children :[
          {
            path:'',
            redirectTo :'dangnhap',pathMatch:'full'
          },
          {
            path:'dangnhap',
            component:DangnhapComponent
          },
            {
              path:'admin',
              canActivate: [ AuthGuard ],
              loadChildren:'./admin/admin.module#AdminModule',

            }
          ,
          {path: '**', redirectTo: '/dangnhap'}

      ]
    }
]

@NgModule({
  declarations: [DangnhapComponent, NotFoundComponent],
  imports: [
    CommonModule,
    FormsModule,


    RouterModule.forChild(routes),

  ],
  providers:[UserService]
})
export class AppsModule { }
