// export class Picture {
//   cover = 'assets/icons/angular.png';
//   isRotated = false;

//   constructor(private value: number, private thumbnail: string) {}
// }

export interface IPicture {
  cover: string;
  isRotated: boolean;
}

export interface ICard {
  value: number;
  thumbnail: string;
}

