export interface IPicture {
  thumbnail: string;
}

export class Card {
  public isRotated: boolean;
  public value: number;
  public thumbnail: string;

  constructor(picture: IPicture, index: number) {
    this.value = index;
    this.thumbnail = picture.thumbnail;
  }
}

export const PICTURES_ARRAY: IPicture[] = [
  {
    thumbnail: 'assets/icons/bootstrap.png'
  },
  {
    thumbnail: 'assets/icons/css3.png'
  },
  {
    thumbnail: 'assets/icons/git.png'
  },
  {
    thumbnail: 'assets/icons/html5.png'
  },
  {
    thumbnail: 'assets/icons/js.jpg'
  },
  {
    thumbnail: 'assets/icons/net.png'
  },
  {
    thumbnail: 'assets/icons/sass.png'
  },
  {
    thumbnail: 'assets/icons/sql.png'
  },
  {
    thumbnail: 'assets/icons/jquery.png'
  },
  {
    thumbnail: 'assets/icons/nodejs.png'
  }
];
