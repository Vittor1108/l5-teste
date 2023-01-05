import { Component, OnInit } from '@angular/core';
import { ITopAlbuns, ITopArtist } from 'src/app/interfaces/IHome';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public topArtist: ITopArtist;
  public topAlbuns: ITopAlbuns;
  constructor(private readonly homeService: HomeService) {}
  ngOnInit(): void {
    this.getTopArtists();
    this.getTopAlbuns();
  }

  public getTopArtists = (): void => {
    this.homeService.getTopArtists().subscribe({
      next: (res) => {
        this.topArtist = res;
      },

      error: (err) => {
        console.log(err);
      },
    });
  };

  public getTopAlbuns = (): void => {
    this.homeService.getTopAlbuns().subscribe({
      next: (res) => {
        this.topAlbuns = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  };
}
