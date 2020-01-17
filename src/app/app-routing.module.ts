import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {AddUserComponent} from './add-user/add-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {MainpageComponent}  from './mainpage/mainpage.component';
const routes: Routes = [
  
 {path:'adduser',component: AddUserComponent},
 {path:'userlist',component:UserListComponent},
 {path:'edit',component:EditUserComponent},
 {path:'mainpage',component:MainpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
