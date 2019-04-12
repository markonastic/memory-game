import { Picture } from './../other/picture';
import { Component, OnInit } from '@angular/core';
import picturesJSON from '../../assets/pictures.json';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pictures: any[];
  cards = [];
  cardsCopy = [];
  cardsArray = [];
  indexes = [];
  gameWon = false;
  match: number;

  constructor() {}

  ngOnInit() {
    this.pictures = picturesJSON;
    this.restartGame();
  }

  restartGame() {
    this.cards = this.pictures.map(p => new Picture(p.value, p.thumbnail));
    this.cardsCopy = this.pictures.map(p => new Picture(p.value, p.thumbnail));
    this.cardsArray = this.cards.concat(this.cardsCopy);
    this.shuffleArray();
    this.match = 0;
    this.gameWon = false;
  }

  flipCard(index: number) {
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

  checkCards() {
      if (this.cardsArray[this.indexes[0]].value === this.cardsArray[this.indexes[1]].value) {
          this.match++;
          this.isGameWon();
      } else {
          this.cardsArray[this.indexes[0]].isRotated = false;
          this.cardsArray[this.indexes[1]].isRotated = false;
      }
      this.indexes = [];
  }

  isGameWon() {
      if (this.match === this.cards.length) {
          this.gameWon = true;
      }
  }

  shuffleArray() {
      let temporaryValue: number;
      let randomIndex: number;
      for (let i = 0; i < this.cardsArray.length; i++) {
        randomIndex = Math.floor(Math.random() * i);
        temporaryValue = this.cardsArray[i];
        this.cardsArray[i] = this.cardsArray[randomIndex];
        this.cardsArray[randomIndex] = temporaryValue;
      }
  }
}
