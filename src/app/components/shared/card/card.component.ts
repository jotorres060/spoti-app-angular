import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input() public items: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public viewArtist(item: any) {
    let artistId: number;

    if (item.type == 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }

    this.router.navigate(['/artist', artistId]);
  }
}
