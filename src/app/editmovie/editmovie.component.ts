import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent implements OnInit {

  movieObj: Movie;
  movieForm: FormGroup;
  fb = new FormBuilder();

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private router:Router
  ) {

  }

  ngOnInit(): void {
    this.initializeMovieForm();

    let mid = this.activatedRoute.snapshot.params['id']
    this.movieService.getMovieById(mid).subscribe((resp: any) => {
      this.movieObj = new Movie();
      this.movieObj.mid = resp.data[0].movie_id
      this.movieObj.mname = resp.data[0].movie_name
      this.movieObj.mdescription = resp.data[0].movie_description
      this.movieObj.mposter = resp.data[0].movie_poster
      this.movieObj.mactor = resp.data[0].movie_actor
      this.movieObj.mdate = resp.data[0].movie_date

      this.movieForm.controls['mid'].setValue(this.movieObj.mid)
      this.movieForm.controls['mname'].setValue(this.movieObj.mname);
      this.movieForm.controls['mdescription'].setValue(this.movieObj.mdescription);
      this.movieForm.controls['mactor'].setValue(this.movieObj.mactor);
      this.movieForm.controls['mposter'].setValue(this.movieObj.mposter);
      this.movieForm.controls['mdate'].setValue(this.movieObj.mdate);

    })
  }

  initializeMovieForm() {
    this.movieForm = this.fb.group({
      mid: [''],
      mname: [''],
      mdescription: [''],
      mposter: [''],
      mactor: [''],
      mdate: ['']
    })
  }

  updateMovie() {
    this.movieService.updateMovie(this.movieForm.value).subscribe((resp:any)=>{
      alert('movie edit done')
      this.router.navigate(['/movielist'])
    })
  }
}
