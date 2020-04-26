import Hero from '../classes/Hero';
import Moochie from '../classes/Moochie';
import HeroImage from '../assets/newrun.png';
import MoochImage from '../assets/lamb.png';

class Scene1 extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }

  preload() {
    this.load.spritesheet('heroImage', HeroImage, {
      frameWidth: 403,
      frameHeight: 570,
    });
    this.load.image('lambImage', MoochImage);
  }

  buildMoochies(num) {
    this.moochGroup = this.add.group({
      defaultKey: 'moochies',
      name: 'moochies',
    });

    return Array.from(Array(num)).map((elm) => {
      const pos = {
        x: Phaser.Math.Between(0, this.game.config.width),
        y: Phaser.Math.Between(0, this.game.config.height),
      };
      const newMooch = new Moochie({ scene: this, x: pos.x, y: pos.y });
      newMooch.setDataEnabled();
      newMooch.data.set({ name: 'joey' + pos.x });
      this.moochGroup.add(newMooch);
      return newMooch;
    });
  }

  removeAMooch(item) {
    item.disableBody(true, true);
    this.moochGroup.remove(item);
  }

  create() {
    this.logoHero = new Hero({ scene: this, x: 200, y: 200 });
    this.logoHero.setScale(0.3, 0.3);
    this.buildMoochies(8);
    this.cursors = this.input.keyboard.addKeys('W,S,A,D');
    this.physics.add.collider(this.moochGroup, this.logoHero);
    this.physics.add.overlap(this.logoHero, this.moochGroup, this.getMooch, null, this);
    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('heroImage', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: 0,
    });
    this.sys.events.on('wake', this.wake, this);
  }

  wake() {
    this.cursors.W.reset();
    this.cursors.A.reset();
    this.cursors.S.reset();
    this.cursors.D.reset();
  }

  getMooch(hero, mooch) {
    if (this.moochGroup.children.size === 1) {
      return this.scene.start('endGame');
    }

    this.removeAMooch(mooch);
    this.registry.set({ activeMooch: mooch });
    this.scene.switch('battle');
    // this.logoHero.scale += 0.2
    // this.cameras.main.shake()
  }

  update() {
    this.logoHero.update();
  }
}

export default Scene1;
