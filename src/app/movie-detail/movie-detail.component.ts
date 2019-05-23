import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMoviesService } from '../api-movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  id: number;
  movie: object;
  movieSimilar:object[];

  constructor(private route: ActivatedRoute,private router: Router,private api: ApiMoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      window.scrollTo({top:0, left: 0, behavior: "smooth"});
      this.api.getDetails(params.id).subscribe((response:any) =>{
        this.movie = response;
      })
      this.api.getSimilar(params.id).subscribe((response:any) =>{
        this.movieSimilar = response.results;
      })
    })
  }

}
