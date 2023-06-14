import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "5109b23dd86824d66afa974319e89e0d";

  //bannerapidata

  bannerApiData(): Observable<any>
  {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
  }

  //trendingmoviesData

  trendingMovieData():Observable<any>
  {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`)
  }

  //movieDetails
  getMovieDetails(data: any):Observable<any>
  {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  //popularMovies
  PopularMoviesData():Observable<any>
  {
    return this.http.get(`${this.baseurl}/movie/popular?api_key=${this.apikey}`)
  }

  //upcomingMovies
  UpcomimngMoviesData():Observable<any>
  {
    return this.http.get(`${this.baseurl}/movie/upcoming?api_key=${this.apikey}`)
  }

  //toprated
  TopMoviesData():Observable<any>
  {
    return this.http.get(`${this.baseurl}/movie/top_rated?api_key=${this.apikey}`)
  }

  // searchmovive
  getSearchMovie(data: any): Observable<any> {
  console.log(data, 'movie#');
   return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
    }
  
    //airingtoday
    AiringTodayMoviesData():Observable<any>
    {
      return this.http.get(`${this.baseurl}/tv/airing_today?api_key=${this.apikey}`)
    }
  
    //login
    login(email: string, password: string) {
      const url = `https://api.themoviedb.org/3/authentication/login?api_key=${this.apikey}`;
      const body = { email, password };
  
      return this.http.post(url, body);
    }

    //allmovies
    getMovies(page: number): Observable<any> {
      const url = `${this.baseurl}/movie/popular?api_key=${this.apikey}&page=${page}`;
      return this.http.get(url);
    }
 
    // Register
register(email: string, password: string) {
  const url = `https://api.themoviedb.org/3/authentication/register?api_key=${this.apikey}`;
  const body = { email, password };

  return this.http.post(url, body);
}

}