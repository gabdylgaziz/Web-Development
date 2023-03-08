import { Component, OnInit } from '@angular/core';
import {Album} from "../AlbumTemplate";
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";
import {AlbumsComponent} from "../albums/albums.component";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent {
  newTitle: string;
  album: Album;
  loaded: boolean;

  constructor(private route: ActivatedRoute,
              private albumService: AlbumService) {
    this.newTitle = '';
    this.album = {} as Album;
    this.loaded = true;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    })
  }

  updateAlbumTitle() {
    this.loaded = false;
    this.album.title = this.newTitle;
    this.albumService.updateAlbumTitle(this.album).subscribe((album) => {
      this.album = album;
      this.loaded = true;
      this.newTitle = '';
    })
  }
}
