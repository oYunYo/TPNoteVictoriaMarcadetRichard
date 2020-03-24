import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddComputerComponent } from './components/add-computer/add-computer.component';
import { ComputerDetailComponent } from './components/computer-detail/computer-detail.component';
import { EditComputerComponent } from './components/edit-computer/edit-computer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: '', redirectTo : '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'computer/add', component: AddComputerComponent},
  {path: 'computer/:id', component: ComputerDetailComponent},
  {path: 'computer/edit/:id', component: EditComputerComponent},
  {path: '**', component: NotFoundComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
