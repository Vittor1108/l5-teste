import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchAlbumsComponent } from './pages/search-albums/search-albums.component';
import { SearchArtistComponent } from './pages/search-artist/search-artist.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search-artist',
    component: SearchArtistComponent,
  },
  {
    path: 'search-album',
    component: SearchAlbumsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
