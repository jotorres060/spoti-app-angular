import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { routes } from './components/app.routes';

import { NoImagePipe } from './pipes/no-image.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardComponent } from './components/shared/card/card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { ErrorComponent } from './components/shared/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoImagePipe,
    CardComponent,
    LoadingComponent,
    DomSeguroPipe,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
