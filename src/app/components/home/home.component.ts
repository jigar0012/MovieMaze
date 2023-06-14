import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{


  constructor(private service: MovieApiService,private router: Router){}

  bannerResult: any=[];
  trendingMovieResults: any =[];
  popularMovieResults: any =[];
  upcomingMovieResults: any =[];
  topRatedMovieResults: any= [];
  airingTodayResults: any=[];

  ngOnInit(): void{
  this.bannerData();
  this.trendingMovieData();
  this.popularMovieData();
  this.upcomingMovieData();
  this.topMovieData();
  this.airingMovieData();
  }


  //bannerData
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
   
      this.bannerResult = result.results;
    })
  }

  //trendingmovies
  trendingMovieData(){
    this.service.trendingMovieData().subscribe((result)=>{
     
      this.trendingMovieResults = result.results.slice(0,6);
    })
  }

  //popularmovies
  popularMovieData(){
    this.service.PopularMoviesData().subscribe((result)=>{
   
      this.popularMovieResults = result.results.slice(0,6);
    })
  }

  //upcomingmovies
  upcomingMovieData(){
    this.service.UpcomimngMoviesData().subscribe((result)=>{

      this.upcomingMovieResults = result.results.slice(0,6);
    })
  }

  //toprated
  topMovieData(){
    this.service.UpcomimngMoviesData().subscribe((result)=>{
  
      this.topRatedMovieResults = result.results.slice(0, 5);
    })
  }

  //airingToday
  airingMovieData(){
      this.service.AiringTodayMoviesData().subscribe((result)=>{
    console.log(result)
        this.airingTodayResults = result.results.slice(0, 5);
      })
    }

}
