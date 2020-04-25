class Scene2 extends Phaser.Scene {
  constructor() {
    super('endGame');
  }

  create() {
    this.add.text(
      16,
      16,
      'You have captured all of the moochies. You should be ashamed. I AM YOUR MOTHERRRRR',
      {
        fontSize: '32px',
        fontFamily: '"Roboto Condensed"',
        fill: '#fff',
      }
    );

    setTimeout(() => {
      this.scene.start('bootGame');
    }, 5000);
  }

  update() {}
}

export default Scene2;
