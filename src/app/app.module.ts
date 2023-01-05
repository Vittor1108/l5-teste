import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchAlbumsComponent } from './pages/search-albums/search-albums.component';
import { SearchArtistComponent } from './pages/search-artist/search-artist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchAlbumsComponent,
    SearchArtistComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
