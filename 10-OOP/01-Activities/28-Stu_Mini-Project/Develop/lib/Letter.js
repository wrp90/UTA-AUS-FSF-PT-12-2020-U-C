class Letter {
  constructor(letter) {
      this.letter = letter;
      this.visible = true;
      if (this.letter === '?') {
        this.visible = true;
      }
  }
}

module.exports = Letter;
