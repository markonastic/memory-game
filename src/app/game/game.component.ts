import { Component, OnInit } from '@angular/core';

import { IPicture, Card, PICTURES_ARRAY } from '../other/data';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public pictures: IPicture[] = PICTURES_ARRAY;
  public cards: Card[] = null;
  public indexes: number[] = [];
  public gameWon: boolean = null;
  public matchCount: number = null;

  constructor() {}

  ngOnInit(): void {
    this.createCardsDeck();
    this.startGame();
  }

  public createCardsDeck(): void {
    const cards: Card[] = this.pictures.map((picture: IPicture, index: number) => new Card(picture, index));
    const cardsCopy: Card[] = this.pictures.map((picture: IPicture, index: number) => new Card(picture, index));
    this.cards = cards.concat(cardsCopy);
  }

  public startGame(): void {
    this.cards.map((card: Card) => card.isRotated = false);
    this.shuffleArray();
    this.matchCount = 0;
    this.gameWon = false;
  }

  public flipCard(index: number): void {
    if (this.indexes.length < 2 && this.indexes[0] !== index) {
      this.indexes.push(index);
      this.cards[index].isRotated = true;

      if (this.indexes.length === 2) {
        const self = this;

        setTimeout(() => {
          self.checkCards();
        }, 1000);
      }
    }
  }

  public checkCards(): void {
    if (this.cards[this.indexes[0]].value === this.cards[this.indexes[1]].value) {
        this.matchCount++;
        this.isGameWon();
    } else {
        this.cards[this.indexes[0]].isRotated = false;
        this.cards[this.indexes[1]].isRotated = false;
    }
    this.indexes = [];
  }

  public isGameWon(): void {
    if (this.matchCount === this.pictures.length) {
        this.gameWon = true;
    }
  }

  public shuffleArray(): void {
    for (let i = 0; i < this.cards.length; i++) {
      const randomIndex = Math.floor(Math.random() * this.cards.length);
      const temporaryValue = this.cards[i];
      this.cards[i] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }
}
