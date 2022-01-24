import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpencvideosComponent } from './exs/opencvideos/opencvideos.component'


const routes: Routes = [
  { path: 'video', component: OpencvideosComponent },
  { path: '**', redirectTo: 'video' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
