import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-allmovie',
  templateUrl: './allmovie.component.html',
  styleUrls: ['./allmovie.component.scss']
})
export class AllmovieComponent implements OnInit {
  movies!: any[];
  currentPage = 1;
  totalPages = 0;
  totalPagesArray: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: MovieApiService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentPage = params['page'] || 1;
      this.fetchMovies(this.currentPage);
    });
  }
  fetchMovies(page: number): void {
    this.service.getMovies(page).subscribe((response) => {
      this.movies = response.results.slice(0,18);
      this.currentPage = response.page;
      this.totalPages = response.total_pages;
      this.totalPagesArray = Array.from({ length: this.totalPages }, (_, index) => index + 1);
    });
  }
  
}
