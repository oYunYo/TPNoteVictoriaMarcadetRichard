import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'planets', component: PlanetsComponent},
  // {path: 'planets/add', component: AddPlanetComponent},
  // {path: 'planets/:id', component: PlanetDetailComponent},
  // {path: 'planets/edit/:id', component: EditPlanetComponent},
  // {path: 'vehicles', component: VehiculsComponent},
  // {path: 'vehicles/add', component: AddVehicleComponent},
  // {path: 'vehicles/edit/:id', component: EditVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
