import { AfterViewChecked, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  movieFormGroup: FormGroup;
  fb = new FormBuilder();
  pictureUrl: any;
  constructor(private movieService: MovieService) {

  }
  ngOnInit(): void {
    this.movieFormGroup = this.fb.group({
      mid: [''],
      mname: ['', Validators.required],
      mdescription: [''],
      mposter: [''],
      mactor: [''],
      mdate: ['']
    })
  }

  saveMovie() {
    
    if (this.movieFormGroup.valid) {
      let movieObj = new Movie()
      // movieObj = this.movieFormGroup.value;
      movieObj.mname = this.movieFormGroup.controls['mname'].value;
      movieObj.mdescription = this.movieFormGroup.controls['mdescription'].value;
      movieObj.mposter = this.movieFormGroup.controls['mposter'].value;
      movieObj.mdate = this.movieFormGroup.controls['mdate'].value;
      movieObj.mactor = this.movieFormGroup.controls['mactor'].value;

      this.movieService.addMovie(movieObj).subscribe((resp:any) => {
        if (resp) {
          alert('Saved')
          console.log("saved")
        }
      })
      // API to save 
      
        this.fileUpload;

    }
    else {
      alert('Please fill valid data ...')
    }
  }

  resetForm() {
    this.movieFormGroup.reset()
  }

  fileUpload(event: any) {
    if (event.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = ((loadEvent: any) => {
        this.pictureUrl = loadEvent.target.result
        this.movieFormGroup.controls['mposter'].setValue(reader.result?.toString().replace('data:image/jpg;base64,', ''))
      })
    }
  }
}
