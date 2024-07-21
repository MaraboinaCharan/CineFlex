import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movieList: Movie[] = [];

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((resp: any) => {

      resp.data.forEach((element: any) => {
        let movieObj = new Movie();
        movieObj.mid = element.movie_id;
        movieObj.mname = element.movie_name
        movieObj.mdescription = element.movie_description
        movieObj.mactor = element.movie_actor
        movieObj.mposter = element.movie_poster
        movieObj.mdate = element.movie_date
        this.movieList.push(movieObj);
        console.log(this.movieList)
      });
    })
  }
}
