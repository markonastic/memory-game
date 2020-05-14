import { Component, OnInit } from '@angular/core';

import { IPicture } from './../other/picture';
import { PictureService } from '../services/picture.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public pictures: IPicture[] = null;
  public cards: IPicture[] = null;
  public cardsCopy: IPicture[] = null;
  public cardsArray: IPicture[] = null;
  public indexes: number[] = null;
  public gameWon: boolean = null;
  public match: number = null;

  constructor(private pictureService: PictureService) {}

  ngOnInit(): void {
    this.pictureService.getJSON().subscribe((pictures: IPicture[]) => {
      this.pictures = pictures;
    });
    this.startGame();
  }

  public startGame(): void {
    this.cards = this.pictures.map(p => new Picture(p.value, p.thumbnail));
    this.cardsCopy = this.pictures.map(p => new Picture(p.value, p.thumbnail));
    this.cardsArray = this.cards.concat(this.cardsCopy);
    this.shuffleArray();
    this.match = 0;
    this.gameWon = false;
  }

  public flipCard(index: number): void {
      if (this.indexes.length < 2 && this.indexes[0] !== index) {
        this.indexes.push(index);
        this.cardsArray[index].isRotated = true;
        if (this.indexes.length === 2) {
          const this1 = this;
          setTimeout(() => {
            this1.checkCards();
          }, 1000);
        }
      }
  }

  public checkCards(): void {
      if (this.cardsArray[this.indexes[0]].value === this.cardsArray[this.indexes[1]].value) {
          this.match++;
          this.isGameWon();
      } else {
          this.cardsArray[this.indexes[0]].isRotated = false;
          this.cardsArray[this.indexes[1]].isRotated = false;
      }
      this.indexes = [];
  }

  public isGameWon(): void {
      if (this.match === this.cards.length) {
          this.gameWon = true;
      }
  }

  public shuffleArray(): void {
      for (let i = 0; i < this.cardsArray.length; i++) {
        const randomIndex = Math.floor(Math.random() * this.cardsArray.length);
        const temporaryValue = this.cardsArray[i];
        this.cardsArray[i] = this.cardsArray[randomIndex];
        this.cardsArray[randomIndex] = temporaryValue;
      }
  }
}

const pictures: ICard[] = [
  {
    value: 1,
    thumbnail: 'assets/icons/bootstrap.png'
  },
  {
    value: 2,
    thumbnail: 'assets/icons/css3.png'
  },
  {
    value: 3,
    thumbnail: 'assets/icons/git.png'
  },
  {
    value: 4,
    thumbnail: 'assets/icons/html5.png'
  },
  {
    value: 5,
    thumbnail: 'assets/icons/js.jpg'
  },
  {
    value: 6,
    thumbnail: 'assets/icons/net.png'
  },
  {
    value: 7,
    thumbnail: 'assets/icons/sass.png'
  },
  {
    value: 8,
    thumbnail: 'assets/icons/sql.png'
  },
  {
    value: 9,
    thumbnail: 'assets/icons/jquery.png'
  },
  {
    value: 10,
    thumbnail: 'assets/icons/nodejs.png'
  }
]
