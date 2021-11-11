import { Component, NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { DeleteComponent } from './component/delete/delete.component';
import { GetComponent } from './component/get/get.component';
import { HomeComponent } from './component/home/home.component';
import { PostComponent } from './component/post/post.component';
import { PutComponent } from './component/put/put.component';

const routes: Route[] = [
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'get/:Id', component:GetComponent},
  {path: 'post', component: PostComponent},
  {path: 'put/:Id', component: PutComponent},
  {path: 'delete', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
