class Scene3 extends Phaser.Scene {
  constructor() {
    super('battle');
  }

  create() {
    this.sys.events.on('wake', this.wake, this);
    this.battleSetup();
  }

  exitBattle() {
    this.scene.switch('bootGame');
  }

  startBattle() {
    this.text = this.add.text(16, 16, `You are now in a battle for ${this.name}`, {
      fontSize: '32px',
      fontFamily: '"Roboto Condensed"',
      fill: '#fff',
    });

    setTimeout(() => {
      this.scene.switch('bootGame');
    }, 2000);
  }

  battleSetup() {
    this.name = this.registry.list.activeMooch.data.list.name;
    if (this.text) {
      this.text.destroy();
    }
    this.startBattle();
  }

  wake() {
    this.battleSetup();
  }
}

export default Scene3;
