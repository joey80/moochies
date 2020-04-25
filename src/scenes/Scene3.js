class Scene3 extends Phaser.Scene {
  constructor() {
    super('battle');
  }

  create() {
    this.add.text(16, 16, 'You are now in a battle', {
      fontSize: '32px',
      fontFamily: '"Roboto Condensed"',
      fill: '#fff',
    });

    this.sys.events.on('wake', this.wake, this);

    setTimeout(() => {
      this.scene.switch('bootGame');
    }, 2000);
  }

  update() {}

  exitBattle() {
    this.scene.switch('bootGame');
  }

  wake() {
    this.time.addEvent({ delay: 2000, callback: this.exitBattle, callbackScope: this });
  }
}

export default Scene3;
