import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlAPI, token } from '../../config/apiConfig';
import { ITopAlbuns, ITopArtist } from 'src/app/interfaces/IHome';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiURL: string = urlAPI;
  private tokenAPI: string = token;
  constructor(private readonly http: HttpClient) {}

  public getTopArtists = (): Observable<ITopArtist> => {
    return this.http.get<ITopArtist>(
      `${this.apiURL}/?method=chart.gettopartists&api_key=${this.tokenAPI}&format=json`
    );
  };

  public getTopAlbuns = (): Observable<ITopAlbuns> => {
    return this.http
      .get<ITopAlbuns>(
        `${this.apiURL}?method=chart.gettoptags&api_key=${this.tokenAPI}&format=json`
      );
  };
}
