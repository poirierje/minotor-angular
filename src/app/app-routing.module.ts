import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitesComponent } from './sites/sites.component';
import { PingResultsComponent } from './ping-results/ping-results.component';

const routes: Routes = [
  { path: 'sites', component: SitesComponent },
  { path: 'pingResults', component: PingResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
