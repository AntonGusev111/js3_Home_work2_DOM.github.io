class Game {
  constructor() {
    this.previosCord = 0;
    this.counter = 0;
    this.field = document.querySelectorAll('.main_field');
  }

  uploadImg() {
    const img = document.createElement('IMG');
    img.src = 'img/goblin.png';
    return img;
  }

  randomNumber(maximum) {

    return Math.floor(Math.random() * maximum);
  }

  randomInsert() {
    const cordField = this.randomNumber(this.field[0].children.length);
    if(cordField == this.previosCord){
      this.randomInsert();
    } else{
      this.previosCord = cordField;
      this.field[0].children[cordField].appendChild(this.uploadImg());
    }
  }

  dellImg() {
    const img = document.querySelector('img');
    if (img) {
      img.remove();
    };
  }

  main() {
    this.dellImg();
    this.randomInsert();
    this.counter += 1;
  }
}

const newGame = new Game();

setInterval(() => newGame.main(), 1000);
