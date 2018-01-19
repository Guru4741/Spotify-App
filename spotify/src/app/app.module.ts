import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouter } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { AboutComponent } from './Component/about/about.component';
import { SearchComponent } from './Component/search/search.component';

import { SpotifyService } from './services/spotify.service';
import { ArtistComponent } from './Component/artist/artist.component';
import { AlbumComponent } from './Component/album/album.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    appRouter,
    FormsModule,
    HttpModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
