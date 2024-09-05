// playlist-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistService } from '../../../services/playlist/playlist.service';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls:[ './playlist-list.component.css']
})
export class PlaylistListComponent implements OnInit{
  playlists: any[] = []; // Propriété pour stocker les playlists

  constructor(public playlistService: PlaylistService, private router: Router) {} // Ensure playlistService is public

  ngOnInit(): void {
    this.playlists = this.playlistService.getPlaylists();
  }

  navigateToCreatePlaylist(): void {
    this.router.navigate(['/add-playlist']);
  }

  deletePlaylist(index: number): void {
    this.playlistService.deletePlaylist(index);
  }

  deleteAlbum(playlistIndex: number, albumIndex: number): void {
    this.playlistService.deleteAlbum(playlistIndex, albumIndex);
  }

  deleteTrack(playlistIndex: number, albumIndex: number, trackIndex: number): void {
    this.playlistService.deleteMusic(playlistIndex, albumIndex, trackIndex);
  }

  deleteAllPlaylists(): void {
    this.playlistService.deleteAllPlaylists();
  }

  deleteAllAlbums(playlistIndex: number): void {
    this.playlistService.deleteAllAlbums(playlistIndex);
  }

  deleteAllTracks(playlistIndex: number, albumIndex: number): void {
    this.playlistService.deleteAllTracks(playlistIndex, albumIndex);
  }
  addPlaylist(newPlaylist: any): void {
    this.playlists.push(newPlaylist);
    this.playlistService.setPlaylists(this.playlists); // Mettez à jour le stockage
  }
}
