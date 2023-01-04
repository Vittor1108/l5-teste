export interface ITopArtist {
  artists: {
    '@attr': {
      page: string;
      perPage: string;
      total: string;
    };
    artist: IArtist[];
  };
}

interface IArtist {
  listeners: string;
  mbid: string;
  name: string;
  playcount: string;
  stremable: string;
  url: string;
  image: IImage[];
}

interface IImage {
  size: string;
  '#text': string;
}


export interface ITopAlbuns {
  tags:{
    '@attr': {
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    },
    tag: ITag[];
  }
}

interface ITag{
  name: string;
  url: string;
  reach: string;
  taggings: string;
  streamable: string;
}
