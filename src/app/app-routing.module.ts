import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { AlbumDetailsComponent } from './components/home/album-details/album-details.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AlbumListComponent } from './components/home/album-list/album-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ArtistListComponent } from './components/artist/artist-list/artist-list.component';
import { PlaylistListComponent } from './components/playlist/playlist-list/playlist-list.component';
import { MusicListComponent } from './components/music/music-list/music-list.component';
import { PlaylistFormComponent } from './components/playlist/playlist-form/playlist-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  {
    path: 'albums',
    component: HomeComponent,
    children: [
      { path: '', component: AlbumListComponent },
      { path: 'album-details/:title', component: AlbumDetailsComponent },
    ],
  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'artist', component: ArtistListComponent },
  { path: 'playlist', component: PlaylistListComponent },
  { path: 'music', component: MusicListComponent },
  { path: 'add-playlist', component: PlaylistFormComponent },
  { path: '', redirectTo: '/playlists', pathMatch: 'full' } // Redirige vers la liste des playlists par défaut
];
//   { path: '**', component: PageNotFoundComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
