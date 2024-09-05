// playlist.service.ts
import { Injectable } from '@angular/core';
import { Playlist } from '../../playlist';



@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private playlists: Playlist[] = [];
  private storageKey = 'playlists';

  constructor() {
    this.loadPlaylists();
  }

  private savePlaylists(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.getPlaylists()));
  }

  private loadPlaylists(): void {
    const playlists = localStorage.getItem(this.storageKey);
    if (playlists) {
      // Chargez les playlists dans votre variable d'état
      console.log("Playlists chargées :", playlists);
      this.playlists = JSON.parse(playlists);
    } else {
      console.log("Aucune playlist trouvée dans localStorage.");
    }
  }

  getPlaylists(): Playlist[] {
    return this.playlists;
  }

  setPlaylists(playlists: any[]): void {
    // Mettre à jour la variable d'état avec les nouvelles playlists
    this.playlists = playlists;
    this.savePlaylists();
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
