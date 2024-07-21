import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  movieList: any[] = []
  constructor(
    private movieService: MovieService,
    private router: Router
    ) {

  }

  ngOnInit(): void {
    this.getAllmovies();
  }

  deletMovie(mid: number) {
    this.movieService.deleteMovie(mid).subscribe((resp) => {
      if (resp) {
        alert('Deleted Successfully.')
        this.getAllmovies();
      }
    })
  }

  getAllmovies() {
    this.movieService.getAllMovies().subscribe((resp: any) => {
      
      this.movieList = resp.data;
      console.log(resp.data);
    })
  }

 editMovie(id: number){
this.router.navigate(['/editmovie/'+id])
 } 
}
