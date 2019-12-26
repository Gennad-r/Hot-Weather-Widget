import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageFormComponent } from './manage-form/manage-form.component';
import { HotelsComponent } from './hotels/hotels.component';

const routes: Routes = [
  { path: '', component: HotelsComponent, pathMatch: 'full' },
  { path: 'add', component: ManageFormComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
