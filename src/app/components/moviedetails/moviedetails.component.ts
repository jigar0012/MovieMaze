import { Component,OnInit,ElementRef, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  @HostBinding('attr.data-setbg') backgroundImage: string | undefined;
  reviewForm!: FormGroup;
  getMovieetailsResults: any;
  getVideoResults: any
  similarMovies!: any[];
  movieDetails: any;
  videos: any[] = [];
  movieId!: number;
  isLoading: boolean = true;
  constructor(
    private service: MovieApiService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.reviewForm = this.formBuilder.group({
      comment: ['', Validators.required]
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); // Simulating a 2-second delay, replace with your actual loading logic
  
    this.scrollToTop();
    const movieId = this.router.snapshot.paramMap.get('id');
    this.getMovie(movieId);
 

  }

  getMovie(id: any): void {
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result, 'getMovieDetails#');
      this.getMovieetailsResults = result;
    });
  }

  getTrailerUrl(trailerKey: string): string {
      return `https://www.youtube.com/watch?v=${trailerKey}`;
    }
 
    scrollToTop(): void {
      const element = this.elementRef.nativeElement;
      element.scrollTop = 0;
    }

    
  
}
