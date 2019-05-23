import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMoviesService } from '../api-movies.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  query: string;
  filmsArray: object[];
  constructor(private route: ActivatedRoute,private router: Router, private api: ApiMoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.query = params.query;
    })
  }
  searchMovies(){
    this.api.searchMovies(this.query).subscribe((response:any) => {
      this.filmsArray = response.results;
    });
}
}
