import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  public getQuery(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBeG9gkSwAzeiariQdjqb8TAa6e-49gTqQpp6g79kg8arS2kwvbca4zwM-f8RY1F1XfIxmoVdjp1z4ZCGk'
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, {headers});
  }

  public getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(
        map((data) => data['albums'].items)
      );
  }

  public getArtists(text: string) {
    return this.getQuery(`search?query=${text}&type=artist&offset=0&limit=15`)
      .pipe(
        map((data) => data['artists'].items)
      );
  }

  public getArtist(id: number) {
    return this.getQuery(`artists/${id}`);
  }

  public getTopTracks(id: number) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(
        map((data) => data['tracks'])
      );
  }
}
