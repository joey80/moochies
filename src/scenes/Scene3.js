class Scene3 extends Phaser.Scene {
  constructor() {
    super('battle');
  }

  create() {
    this.sys.events.on('wake', this.battleSetup, this);
    this.startBattle();
  }

  buildUI() {
    this.graphics = this.add.graphics();
    this.graphics.fillStyle(0x031f4c, 1);
    this.graphics.fillRect(0, 0, this.scale.width, 100);
    this.graphics.fillRect(0, 420, this.scale.width, 300);
    return this.graphics;
  }

  exitBattle() {
    this.scene.switch('bootGame');
  }

  battleMessage() {
    const name = this.registry.list.activeMooch.data.list.name;
    this.label = this.add.text(this.scale.width / 2, 50, `You are now in a battle for ${name}`, {
      fontSize: '32px',
      fontFamily: '"Roboto Condensed"',
      fill: '#fff',
    });
    this.label.setOrigin(0.5);
    return this.label;
  }

  startBattle() {
    // this.cameras.main.shake(200, 0.05);
    this.container = this.add.container(0, 0);
    this.text = this.battleMessage();
    this.ui = this.buildUI();
    this.container.add([this.ui, this.text]);

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
