// playlist-form.component.ts
import { Component } from '@angular/core';
import { Album } from '../../../album';
import { Playlist } from '../../../playlist';
import { PlaylistService } from '../../../services/playlist/playlist.service';
import { Track } from '../../../track';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrl: './playlist-form.component.css'
})
export class PlaylistFormComponent {
  newPlaylistName: string = '';
  newAlbumTitle: string = '';
  newTrackTitle: string = '';
  newTrackDuration: string = '';

  constructor(public playlistService: PlaylistService) {} // Ensure playlistService is public

  addPlaylist(): void {
    if (this.newPlaylistName) {
      const playlist: Playlist = {
        name: this.newPlaylistName,
        albums: []
      };
      this.playlistService.addPlaylist(playlist);
      this.newPlaylistName = '';
    }
  }

  addAlbum(playlistIndex: number): void {
    if (this.newAlbumTitle) {
      const album: Album = {
        title: this.newAlbumTitle,
        artist: '',
        releaseDate: '',
        genre: '',
        label: '',
        trackCount: 0,
        duration: '',
        tags: [],
        tracks: [],
        description: ''
      };
      this.playlistService.getPlaylists()[playlistIndex].albums.push(album);
      this.newAlbumTitle = '';
    }
  }

  addTrack(playlistIndex: number, albumIndex: number): void {
    if (this.newTrackTitle && this.newTrackDuration) {
      const track: Track = {
        trackNumber: this.playlistService.getPlaylists()[playlistIndex].albums[albumIndex].tracks.length + 1,
        title: this.newTrackTitle,
        duration: this.newTrackDuration
      };
      this.playlistService.getPlaylists()[playlistIndex].albums[albumIndex].tracks.push(track);
      this.newTrackTitle = '';
      this.newTrackDuration = '';
    }
  }

  removePlaylist(index: number) {
    this.playlistService.removePlaylist(index);
  }

  removeAlbum(playlistIndex: number, albumIndex: number) {
    this.playlistService.removeAlbum(playlistIndex, albumIndex);
  }

}
