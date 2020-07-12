import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpprofileComponent } from './empprofile/empprofile.component';
import { GmapComponent } from './gmap/gmap.component';


const routes: Routes = [
 { path: '', component: EmplistComponent },
 { path: 'profile/:id', component: EmpprofileComponent },
 { path: 'maps', component: GmapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
