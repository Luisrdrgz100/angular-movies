import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMoviesService } from '../api-movies.service';

@Component({
  selector: 'app-movies-category',
  templateUrl: './movies-category.component.html',
  styleUrls: ['./movies-category.component.scss']
})
export class MoviesCategoryComponent implements OnInit {

  category: string;
  rawCategory: string;
  validCategories= ['top_rated', 'upcoming', 'popular'];
  movies: object[];
  page : 1;

  constructor(private route: ActivatedRoute,private router: Router, private api: ApiMoviesService) { }

  ngOnInit() {
    // Accede a los parametros de la uri, pero solo cuando el componente se monta
    // this.category = this.route.snapshot.params.category;

    this.route.params.subscribe(params => {
      this.category = params.category.replace('_', ' ');
      this.rawCategory = params.category;
      if(this.validCategories.includes(params.category)){
        this.api.getCategory(params.category).subscribe((response:any) => {
          this.movies = response.results;
        })
      }else{
        //redirect
        this.router.navigate(['/movies/popular'])
      }
    })
  }
  moreMovies(){
    this.api.getCategory(this.rawCategory, this.page + 1).subscribe((response:any) => {
      this.page++;
      this.movies = [...this.movies, ...response.results];
  });
}

}