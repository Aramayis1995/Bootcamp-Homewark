class Shiritori {
  constructor() {
    this.words = [];
    this.game_over = false;
  }
  play(word) {
    if (this.game_over === true) {
      return "hoop";
    }
    if (this.words.length === 0) {
      this.words.push(word);
      return this.words;
    } else {
      let lastWord = this.words[this.words.length - 1];
      this.words.forEach((el) => {
        if (el === word || lastWord[lastWord.length - 1] !== word[0]) {
          this.game_over = true;
        }
      });
      if (this.game_over === false) {
        this.words.push(word);
        return this.words;
      } else {
        return "game ower";
      }
    }
  }
}

let shiritori1 = new Shiritori();
console.log(shiritori1.play("artur"));
console.log(shiritori1.play("raffi"));
console.log(shiritori1.play("ivan"));
console.log(shiritori1.play("narek"));
console.log(shiritori1.play("karen"));
console.log(shiritori1.play("mayis"));
console.log(shiritori1.play("mayis"));
