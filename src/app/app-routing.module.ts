import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinesNewsComponent } from './busines-news/busines-news.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  { path: '', component: TopheadingComponent },
  { path: 'tech', component: TechnewsComponent },
  { path: 'business', component: BusinesNewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
