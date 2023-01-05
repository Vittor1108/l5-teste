import { Injectable } from '@angular/core';
import { token, urlAPI } from 'src/app/config/apiConfig';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAlbums } from 'src/app/interfaces/ISearchAlbums';

@Injectable({
  providedIn: 'root',
})
export class SearchAlbumsService {
  private apiURL: string = urlAPI;
  private tokenAPI: string = token;

  constructor(private readonly http: HttpClient) {}

  public searchAlbum = (nameAlbum: string): Observable<IAlbums> => {
    return this.http.get<IAlbums>(
      `${this.apiURL}/?method=album.search&album=${nameAlbum}&api_key=${this.tokenAPI}&format=json`
    );
  };
}
