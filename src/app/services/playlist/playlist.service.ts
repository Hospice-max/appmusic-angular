// playlist.service.ts
import { Injectable } from '@angular/core';
import { Playlist } from '../../playlist';



@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private playlists: Playlist[] = [];

  getPlaylists(): Playlist[] {
    return this.playlists;
  }

  addPlaylist(playlist: Playlist): void {
    this.playlists.push(playlist);
  }

  deletePlaylist(index: number): void {
    this.playlists.splice(index, 1);
  }

  deleteAlbum(playlistIndex: number, albumIndex: number): void {
    this.playlists[playlistIndex].albums.splice(albumIndex, 1);
  }

  deleteMusic(playlistIndex: number, albumIndex: number, trackIndex: number): void {
    this.playlists[playlistIndex].albums[albumIndex].tracks.splice(trackIndex, 1);
  }

  deleteAllPlaylists(): void {
    this.playlists = [];
  }

  deleteAllAlbums(playlistIndex: number): void {
    this.playlists[playlistIndex].albums = [];
  }

  deleteAllTracks(playlistIndex: number, albumIndex: number): void {
    this.playlists[playlistIndex].albums[albumIndex].tracks = [];
  }
  
  removePlaylist(index: number) {
    this.playlists.splice(index, 1);
  }

  removeAlbum(playlistIndex: number, albumIndex: number) {
    const playlist = this.playlists[playlistIndex];
    if (playlist) {
      playlist.albums.splice(albumIndex, 1);
    }
  }
}
