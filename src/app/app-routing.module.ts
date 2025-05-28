import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { TeammembersComponent } from './teammembers/teammembers.component';
import { EnergyChartComponent } from './energy-chart-component/energy-chart-component.component';
import { EngviewComponent } from './engview/engview.component';
import { GasviewComponent } from './gasview/gasview.component';
import { WatterviewComponent } from './watterview/watterview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path:'team',component:TeammembersComponent},
  {path: 'graph', component:EnergyChartComponent},
  {path: 'enrgy-graph', component:EngviewComponent},
  {path: 'gas-graph', component:GasviewComponent},
  {path: 'water-graph', component:WatterviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
