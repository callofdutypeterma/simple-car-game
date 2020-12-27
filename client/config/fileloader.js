import { ASSETS_URL } from '.'

const fileLoader = game => {
  game.load.crossOrigin = 'Anonymous'
  game.stage.backgroundColor = '#1E1E1E'
  game.load.image('asphalt', `${ASSETS_URL}/sprites/asphalt/asphalt.png`)
  game.load.image('car', `${ASSETS_URL}/sprites/car/car.png`)
  game.load.image('wall', `${ASSETS_URL}/sprites/wall/wall.png`)
  game.load.image('corner', `${ASSETS_URL}/sprites/wall/corner.png`)
  game.load.image('corner2', `${ASSETS_URL}/sprites/wall/corner2.png`)
  game.load.image('center', `${ASSETS_URL}/sprites/wall/center.png`)
  game.load.image('bottom', `${ASSETS_URL}/sprites/wall/bottom.png`)
  game.load.image('rightside', `${ASSETS_URL}/sprites/wall/rightside.png`)
  game.load.image('map', `${ASSETS_URL}/sprites/map/map.png`)
  game.load.physics('physicsData', `${ASSETS_URL}/physics/corner.json`)
}

export default fileLoader
