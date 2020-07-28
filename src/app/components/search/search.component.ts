import { Component, OnInit } from '@angular/core';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  public artists: any[] = [];
  public loading: boolean;

  constructor(private _spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  public search(text: string) {
    if (text.trim().length > 0) {
      this.loading = true;
      this._spotify.getArtists(text)
        .subscribe((artists) => {
          this.artists = artists;
          this.loading = false;
        });
    }
  }
}
