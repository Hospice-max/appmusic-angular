import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { AlbumListComponent } from './components/home/album-list/album-list.component';
import { AlbumComponent } from './components/home/album/album.component';
import { AsideComponent } from './components/home/aside/aside.component';
import { AlbumDetailsComponent } from './components/home/album-details/album-details.component';
import { HeaderComponent } from './components/header/header.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgressBarComponent } from './components/home/progress-bar/progress-bar.component';
import { FormsModule } from '@angular/forms';
import { ArtistFormComponent } from './components/artist/artist-form/artist-form.component';
import { ArtistListComponent } from './components/artist/artist-list/artist-list.component';
import { PlaylistFormComponent } from './components/playlist/playlist-form/playlist-form.component';
import { PlaylistListComponent } from './components/playlist/playlist-list/playlist-list.component';
import { MusicFormComponent } from './components/music/music-form/music-form.component';
import { MusicListComponent } from './components/music/music-list/music-list.component';
import { AlbumFormComponent } from './components/home/album-form/album-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    AlbumListComponent,
    AlbumComponent,
    AsideComponent,
    AlbumDetailsComponent,
    HeaderComponent,
    SignUpComponent,
    PageNotFoundComponent,
    ProgressBarComponent,
    ArtistFormComponent,
    ArtistListComponent,
    PlaylistFormComponent,
    PlaylistListComponent,
    MusicFormComponent,
    MusicListComponent,
    AlbumFormComponent,
    ArtistFormComponent,
    ArtistListComponent,
    PlaylistFormComponent,
    PlaylistListComponent,
    MusicFormComponent,
    MusicListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
