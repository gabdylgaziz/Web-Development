import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Album, Photo } from "./AlbumTemplate";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  JSON_URL = `https://jsonplaceholder.typicode.com/albums/`
  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(this.JSON_URL);
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.JSON_URL}${id}`);
  }

  updateAlbumTitle(album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.JSON_URL}${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<Album> {
    return this.client.delete<Album>(`${this.JSON_URL}${id}`);
  }

  createAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.JSON_URL}`, album)
  }

  getPhotos(id: number): Observable<Photo[]> {
    return this.client.get<Photo[]>(`${this.JSON_URL}${id}/photos`)
  }

}