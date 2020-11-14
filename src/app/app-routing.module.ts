import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {PostListComponent} from './component/post-list/post-list.component';
import {AboutComponent} from './component/about/about.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '',
  component: HomeComponent
  },
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
