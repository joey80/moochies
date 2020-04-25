class Hero extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, 'heroImage');
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.setCollideWorldBounds(true);
    this.scene = config.scene;
  }

  update() {
    const velocity = 6;
    const upButton = this.scene.cursors.W;
    const downButton = this.scene.cursors.S;
    const leftButton = this.scene.cursors.A;
    const rightButton = this.scene.cursors.D;

    if (leftButton.isDown) {
      this.x += -velocity;
      this.anims.play('walk', true);
      if (!this.flipX) {
        this.flipX = true;
      }
    }
    if (rightButton.isDown) {
      this.x += velocity;
      this.anims.play('walk', true);
      if (this.flipX) {
        this.flipX = false;
      }
    }
    if (upButton.isDown) {
      this.anims.play('walk', true);
      this.y += -velocity;
    }
    if (downButton.isDown) {
      this.anims.play('walk', true);
      this.y += velocity;
    }
  }
}

export default Hero;
