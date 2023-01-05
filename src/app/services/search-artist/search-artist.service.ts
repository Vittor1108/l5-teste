import { Injectable } from '@angular/core';
import { token, urlAPI } from 'src/app/config/apiConfig';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArtistsSearch } from 'src/app/interfaces/ISearchArtists';
@Injectable({
  providedIn: 'root',
})
export class SearchArtistService {
  private apiURL = urlAPI;
  private apiToken = token;

  constructor(private readonly http: HttpClient) {}

  public findArtist = (nameArtist: string): Observable<IArtistsSearch> => {
    return this.http.get<IArtistsSearch>(
      `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${nameArtist}&api_key=6e30d0a27fadc59260dcbde8d716acc4&format=json`
    );
  };
}
