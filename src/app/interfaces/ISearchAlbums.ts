export interface IAlbums {
  results: {
    '@attr': {
      for: string;
    };
    albummatches: {
      album: IAlbum[];
    };
  };
}

export interface IAlbum {
  name: string;
  artist: string;
  url: string;
  image: IImage[];
  mbid: string;
}

interface IImage {
  size: string;
  '#text': string;
}

export interface IHistoricAlbum {
  search: string;
  results: IAlbum[];
}
