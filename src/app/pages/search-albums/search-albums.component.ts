import { Component, OnInit } from '@angular/core';
import { IAlbum } from 'src/app/interfaces/ISearchAlbums';
import { SearchAlbumsService } from 'src/app/services/search-albums/search-albums.service';

@Component({
  selector: 'app-search-albums',
  templateUrl: './search-albums.component.html',
  styleUrls: ['../search-artist/search-artist.component.scss'],
})
export class SearchAlbumsComponent implements OnInit {
  public nameAlbum: string;
  public allAlbums: IAlbum[] = [];
  constructor(private readonly albumService: SearchAlbumsService) {}

  ngOnInit(): void {}

  public searchAlbum = (): void => {
    if (!this.nameAlbum) {
      alert('Por favor insira o nome de um Álbum');
      return;
    }

    this.albumService.searchAlbum(this.nameAlbum).subscribe({
      next: (res) => {
        this.allAlbums = res.results.albummatches.album;
      },

      error: (err) => {
        alert('Não foi possível concluir a pesquisa. Tente novamente');
      },
    });
  };
}
