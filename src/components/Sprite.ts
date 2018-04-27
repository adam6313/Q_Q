import * as PIXI from 'pixi.js';

export default option => {
  const { name } = option;

  let _sprite

  if (name) {
    _sprite = new PIXI.Sprite(PIXI.loader.resources[name].texture)
    _sprite['$name'] = name
  } else throw 'Required name'
  return _sprite
}