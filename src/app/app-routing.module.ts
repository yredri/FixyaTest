import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrackListComponent } from './track-list/track-list.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'list', component: TrackListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
