import { Component,OnInit } from '@angular/core';
import { Title,Meta } from '@angular/platform-browser';
import {FormControl,FormGroup} from '@angular/forms';
import { MovieApiService } from 'src/app/services/movie-api.service';
@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  constructor(private service:MovieApiService,private title:Title,private meta:Meta) {
    this.title.setTitle('Search movies - showtime');
    this.meta.updateTag({name:'description',content:'search here movies like avatar,war etc'});
   }

  ngOnInit(): void {
  }
  searchResult:any;
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

  submitForm() {
    console.log(this.searchForm.value, 'searchform#');
    this.service.getSearchMovie(this.searchForm.value).subscribe((result) => {
      console.log(result, 'searchmovie##');
      this.searchResult = result.results;
    });
}
}
