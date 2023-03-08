import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Album, Photo } from "./AlbumTemplate";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`https://jsonplaceholder.typicode.com/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  updateAlbumTitle(album: Album): Observable<Album> {
    return this.client.put<Album>(`https://jsonplaceholder.typicode.com/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<Album> {
    return this.client.delete<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  createAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>(`https://jsonplaceholder.typicode.com/albums`, album)
  }

  getPhotos(id: number): Observable<Photo[]> {
    return this.client.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }

}