import { Component, OnInit } from '@angular/core';
import { ITopAlbuns, ITopArtist } from 'src/app/interfaces/IHome';
import { IHistoricAlbum } from 'src/app/interfaces/ISearchAlbums';
import { IHistoricArtist } from 'src/app/interfaces/ISearchArtists';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public historicArtist: IHistoricArtist | null;
  public historicAlbum: IHistoricAlbum | null;

  constructor() {}

  ngOnInit(): void {
    this.getHisotry();
  }

  public getHisotry = (): void => {
    if (localStorage.getItem('albumHistoric')) {
      this.historicAlbum = JSON.parse(localStorage.getItem('albumHistoric')!);
    }

    if (localStorage.getItem('artistHistoric')) {
      this.historicArtist = JSON.parse(localStorage.getItem('artistHistoric')!);
    }
    console.log(this.historicAlbum);
    // console.log(this.historicAlbum?.result[0].name);
  };

  public clearHistoric = (action: number): void => {
    if (action === 1) {
      localStorage.removeItem('artistHistoric');
      this.historicArtist = null;
    } else {
      localStorage.removeItem('albumHistoric');
      this.historicAlbum = null;
    }
  };
}
