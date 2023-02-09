import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoTestComponent } from './video-test/video-test.component';

const routes: Routes = [
  {
    path: 'video',
    component: VideoTestComponent,
  },
  {
    path: '',
    redirectTo: '/video',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '/video' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
