export interface IArtistsSearch {
  results: {
    '@attr': {
      for: string;
    };
    artistmatches: {
      artist: Array<IArrayArtist>;
    };
  };
}

export interface IArrayArtist {
  name: string;
  streamable: string;
  mbid: string;
  listeners: string;
  image: Array<Image>;
  url: string;
}

interface Image {
  size: string;
  '#text': string;
}

export interface IHistoricArtist {
  search: string;
  result: IArrayArtist[];
}
