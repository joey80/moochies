class Scene3 extends Phaser.Scene {
  constructor() {
    super('battle');
  }

  create() {
    this.sys.events.on('wake', this.battleSetup, this);
    this.startBattle();
  }

  exitBattle() {
    this.scene.switch('bootGame');
  }

  battleMessage() {
    const name = this.registry.list.activeMooch.data.list.name;
    return this.add.text(16, 16, `You are now in a battle for ${name}`, {
      fontSize: '32px',
      fontFamily: '"Roboto Condensed"',
      fill: '#fff',
    });
  }

  startBattle() {
    this.text = this.battleMessage();
    this.container = this.add.container(16, 16, [this.text]);

    setTimeout(() => {
      this.exitBattle();
    }, 2000);
  }

  battleSetup() {
    this.container.destroy();
    this.startBattle();
  }
}

export default Scene3;
