// playlist.ts
import { Album } from './album';

export interface Playlist {
  name: string;
  albums: Album[];
}
