import { Injectable } from '@angular/core';
import { token, urlAPI } from 'src/app/config/apiConfig';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchAlbumsService {
  private apiURL: string = urlAPI;
  private tokenAPI: string = token;

  constructor(private readonly http: HttpClient) {}

  public searchAlbum = (nameAlbum: string) => {
    this.http
      .get(
        `${this.apiURL}/?method=album.search&album=belive&api_key=${this.tokenAPI}&format=json`
      )
      .subscribe({
        next: (res) => {
          console.log(res);
        },

        error: (err) => {
          console.log(err);
        },
      });
  };
}
