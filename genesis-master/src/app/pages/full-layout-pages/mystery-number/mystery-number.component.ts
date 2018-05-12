import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mystery-number',
  templateUrl: './mystery-number.component.html',
  styleUrls: ['./mystery-number.component.scss']
})
export class MysteryNumberComponent {
  lives: number[] = Array(5).fill(1);
  mysteryNumber: number = Math.round(Math.random() * 100);
  userGuessNumber: number;
  message: string = "";
  isLoading = false;

  

  generateNewMysteryNumber() {
    this.mysteryNumber = Math.round(Math.random() * 100);
  }

  decreaseLife() {
    var index = this.lives.indexOf(1);
    this.lives[index] = 0;
  }

  showLives(index) {
    return index == 1 ? ["heart.png", "lives-img-animate"] : ["heart-destroyed.png", ""];
  }

  checkIfGuessed() {
    return this.mysteryNumber == this.userGuessNumber ? true : false
  }

  checkIfNoLivesLeft() {
    var index = this.lives.indexOf(1);
    return index == -1 ? true : false;
  }

  Loading() {
    this.isLoading = true;
  }

  notLoading() {
    this.isLoading = false;
  }

  play() {
    this.Loading();
    setTimeout(() => {
      if (this.checkIfGuessed()) {
        this.gameWon();
      }
      else {
        this.decreaseLife();
        if (this.checkIfNoLivesLeft()) {
          this.gameOver();
        } else {
          this.gameContinue();
        }
      }
      this.notLoading();
      this.userGuessNumber = null;
    }, 1 * 1000);

  }

  gameOver() {
    this.message = "You lose! Msytery number is :" + this.mysteryNumber;
    // this.generateNewMysteryNumber();
    // this.lives.fill(1);
  }

  gameWon() {
    this.lives.fill(0);
    this.message = "You win!";
  }

  gameContinue() {
    this.userGuessNumber > this.mysteryNumber ? this.message = "Your number is greater than the msytery number " : this.message = "Your number is lesser than the msytery number";
    console.log(this.mysteryNumber);
  }

  gameReset() {
    this.generateNewMysteryNumber();
    this.lives.fill(1);
    this.message = "";
  }

}
