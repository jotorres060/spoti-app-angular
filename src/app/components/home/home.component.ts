import { Component, OnInit } from '@angular/core';

import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public releases: any[] = [];
  public loading: boolean;
  public error: boolean;
  public errorMessage: string = '';

  constructor(private _spotify: SpotifyService) {
    this.loading = true;
    this._spotify.getNewReleases()
      .subscribe((releases) => {
        this.releases = releases;
        this.loading = false;
      }, (err) => {
        this.loading = false;
        this.error = true;
        this.errorMessage = `${err.error.error.status} ${err.error.error.message}`;
      });
  }

  ngOnInit(): void {
  }
}
