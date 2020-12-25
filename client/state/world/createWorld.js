import { WORLD_SIZE } from './../../config'

const { width, height } = WORLD_SIZE

var static1
var static2

const worldCreator = game => {
  // Start P2 physics engine
  game.physics.startSystem(Phaser.Physics.P2JS)
  // We set this to true so our game won't pause if we focus
  // something else other than the browser
  game.stage.disableVisibilityChange = true
  // Here we set the bounds of our game world
  game.world.setBounds(0, 0, width, height)
  createMap(game)
  //  Create two static objects
  static1 = game.add.sprite(200, 200, 'wall')
  static2 = game.add.sprite(500, 500, 'wall')

  //  Enable if for physics. This creates a default rectangular body.
  game.physics.p2.enable([static1, static2]);

  //  Make static
  static1.body.static = true;
  static2.body.static = true;
}

const createMap = game => {
  let groundTiles = []
  for (let i = 0; i <= width / 64 + 1; i++) {
    for (let j = 0; j <= height / 64 + 1; j++) {
      const groundSprite = game.add.sprite(i * 64, j * 64, 'asphalt')
      groundTiles.push(groundSprite)
    }
  }
}

export default worldCreator
