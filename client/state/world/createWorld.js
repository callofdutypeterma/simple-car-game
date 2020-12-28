import { WORLD_SIZE } from './../../config'

const { width, height } = WORLD_SIZE

var static1, static2, static3, static4, static5, static6, static7, static8, static9, static10, static12, static13, static14, corner, corner2, center, bottom, rightside, obstacle
var longz

const worldCreator = game => {
  // Start P2 physics engine
  game.physics.startSystem(Phaser.Physics.P2JS)
  // We set this to true so our game won't pause if we focus
  // something else other than the browser
  game.stage.disableVisibilityChange = true
  // Here we set the bounds of our game world
  game.world.setBounds(0, 0, width, height)
  //createMap(game)
  longz = game.add.image(0, 0, 'map')
  longz.height = height
  longz.width = width
  
  //  Create two static objects
  static1 = game.add.sprite(1600, 300, 'wall')
  static1.scale.setTo(1500, 5)
  static2 = game.add.sprite(850, 390, 'wall')
  static2.scale.setTo(5, 620)
  static3 = game.add.sprite(500, 1000, 'wall')
  static3.scale.setTo(1100, 5)
  static4 = game.add.sprite(1050, 700, 'wall')
  static4.scale.setTo(400, 5)
  static5 = game.add.sprite(1250, 1550, 'wall')
  static5.scale.setTo(5, 1700)
  static6 = game.add.sprite(1050, 1550, 'wall')
  static6.scale.setTo(5, 1100)
  static7 = game.add.sprite(800, 2100, 'wall')
  static7.scale.setTo(500, 5)
  static8 = game.add.sprite(550, 2500, 'wall')
  static8.scale.setTo(5, 800)
  static9 = game.add.sprite(1000, 2400, 'wall')
  static9.scale.setTo(500, 5)
  static10 = game.add.sprite(750, 2750, 'wall')
  static10.scale.setTo(5, 700)
  static12 = game.add.sprite(650, 3100, 'wall')
  static12.scale.setTo(200, 5)
  static13 = game.add.sprite(830, 3750, 'wall')
  static13.scale.setTo(5, 500)
  static14 = game.add.sprite(880, 4000, 'wall')
  static14.scale.setTo(100, 5)
  
  corner = game.add.sprite(500, 3400, 'corner')
  corner2 = game.add.sprite(350, 3650, 'corner2')
  center = game.add.sprite(2800, 2100, 'center')
  bottom = game.add.sprite(3300, 3600, 'bottom')
  rightside = game.add.sprite(3700, 1100, 'rightside')
  obstacle = game.add.sprite(4770, 3283, 'obstacle')

  //  Enable if for physics. This creates a default rectangular body.
  game.physics.p2.enable([static1, static2, static3, static4, static5, static6, static7, static8, static9, static10, static12, static13, static14, corner, corner2, center, bottom, rightside, obstacle]);

  corner.body.clearShapes();
  corner.body.loadPolygon('physicsData', 'corner')
  corner2.body.clearShapes();
  corner2.body.loadPolygon('physicsData', 'corner2')
  center.body.clearShapes();
  center.body.loadPolygon('physicsData', 'center')
  bottom.body.clearShapes();
  bottom.body.loadPolygon('physicsData', 'bottom')
  rightside.body.clearShapes();
  rightside.body.loadPolygon('physicsData', 'rightside')
  obstacle.body.clearShapes();
  obstacle.body.loadPolygon('physicsData', 'obstacle')

  //  Make static
  static1.body.static = true
  static2.body.static = true
  static3.body.static = true
  static4.body.static = true
  static5.body.static = true
  static6.body.static = true
  static7.body.static = true
  static8.body.static = true
  static9.body.static = true
  static10.body.static = true
  static12.body.static = true
  static13.body.static = true
  static14.body.static = true
  corner.body.static = true
  corner2.body.static = true
  center.body.static = true
  bottom.body.static = true
  rightside.body.static = true
  obstacle.body.static = true
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
