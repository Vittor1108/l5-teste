import { Component, OnInit } from '@angular/core';
import {
  IArrayArtist,
  IArtistsSearch,
} from 'src/app/interfaces/ISearchArtists';
import { SearchArtistService } from 'src/app/services/search-artist/search-artist.service';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.scss'],
})
export class SearchArtistComponent implements OnInit {
  public nameArtist: string;
  public allArtistFind: IArrayArtist[] = [];
  public noArtist: boolean = false;
  constructor(private readonly searchArtistService: SearchArtistService) {}

  ngOnInit(): void {}

  public searchArtist = (): void => {
    if (!this.nameArtist) {
      alert('Por favor insira o nome do artista');
      return;
    }

    this.searchArtistService.findArtist(this.nameArtist).subscribe({
      next: (res) => {
        this.allArtistFind = res.results.artistmatches.artist;
        this.allArtistFind.length === 0
          ? (this.noArtist = true)
          : (this.noArtist = false);
      },

      error: (err) => {
        alert('Não foi possível realizar a pesquisa, tente novamente');
      },
    });
  };
}
