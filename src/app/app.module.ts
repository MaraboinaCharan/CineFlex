import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovielistComponent } from './movielist/movielist.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { EditmovieComponent } from './editmovie/editmovie.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { MovieCardComponent } from './movie-card/movie-card.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovielistComponent,
    AddmovieComponent,
    EditmovieComponent,
    AboutComponent,
    ContactComponent,
    ErrorpageComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
