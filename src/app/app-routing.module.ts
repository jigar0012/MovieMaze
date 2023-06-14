import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { LoginComponent } from './components/login/login.component';
import { AllmovieComponent } from './components/allmovie/allmovie.component';
import { RegisterComponent } from './components/register/register.component';



const routes: Routes = [
  {
    path:'', component: HomeComponent,
  },
{
  path:'movie/:id', component: MoviedetailsComponent
},
{
  path:'search', component: MovieSearchComponent
},
{
  path: 'login', component: LoginComponent
},
{ path: 'all-movies', component: AllmovieComponent },
{ path: 'all-movies/movie/:id', component: MoviedetailsComponent },
{ path:'register' , component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
