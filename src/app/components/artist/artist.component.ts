import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
  public artist: any;
  public topTracks: any[] =[];
  public loading: boolean;

  constructor(
    private actRoute: ActivatedRoute,
    private _spotify: SpotifyService
  ) {
    this.loading = true;
    this.actRoute.params.subscribe((params) => {
      const id = params['id'];
      this.getArtist(id);
      this.getTopTracks(id);
    });
  }

  ngOnInit(): void {
  }

  public getArtist(id: number) {
    this._spotify.getArtist(id)
      .subscribe((artist) => {
        this.artist = artist;
        this.loading = false;
    });
  }

  public getTopTracks(id: number) {
    this._spotify.getTopTracks(id)
      .subscribe((topTracks) => {
        this.topTracks = topTracks;
    });
  }
}
