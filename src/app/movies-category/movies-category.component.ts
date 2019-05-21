import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies-category',
  templateUrl: './movies-category.component.html',
  styleUrls: ['./movies-category.component.scss']
})
export class MoviesCategoryComponent implements OnInit {

  category: string;
  validCategories= ['top_rated', 'upcoming', 'popular'];

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    // Accede a los parametros de la uri, pero solo cuando el componente se monta
    // this.category = this.route.snapshot.params.category;

    this.route.params.subscribe(params => {
      this.category = params.category.replace('_', ' ');
      if(this.validCategories.includes(params.category)){
        //getmovies
      }else{
        //redirect
        this.router.navigate(['/movies/popular'])
      }
    })
  }
}