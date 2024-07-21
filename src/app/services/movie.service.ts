import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieApiUrl = environment.movie_url;


  constructor(private httpClient: HttpClient) { }


  getAllMovies() {
    return this.httpClient.get(this.movieApiUrl+'/getall', { responseType: 'json' })
  }

  addMovie(mobj: Movie) {
    let moviePayload = {
      "movie_id": mobj.mid,
      "movie_name": mobj.mname,
      "movie_description": mobj.mdescription,
      "movie_poster": mobj.mposter,
      "movie_actor": mobj.mactor,
      "movie_date": mobj.mdate
    }
    return this.httpClient.post(this.movieApiUrl + '/createmovie', moviePayload);
  }

  deleteMovie(id: number) {
    //  http://192.168.220.178:8089/deletemovie/:id
    return this.httpClient.delete(this.movieApiUrl + '/deletemovie/' + id)
  }

  updateMovie(mobj: Movie) {
    let payload = {
      "movie_id": mobj.mid,
      "movie_name": mobj.mname,
      "movie_description": mobj.mdescription,
      "movie_poster": mobj.mposter,
      "movie_actor": mobj.mactor,
      "movie_date": mobj.mdate
    }
    return this.httpClient.put(this.movieApiUrl + '/updatemovie', payload);
  }

  getMovieById(mid: number) {
    return this.httpClient.get(this.movieApiUrl + '/getmoviebyid/' + mid, { responseType: 'json' })
  }
}
