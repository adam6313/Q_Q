import { Graphics } from 'pixi.js';
import store from '@/store/store'

export default () => {
  const { width, height } = store.getState().config
  const _progressbar = new Graphics();
  _progressbar.lineStyle(10, 0xfcd703, 2);
  _progressbar.moveTo(0, height);
  _progressbar.lineTo(width, height);
  _progressbar.endFill();
  _progressbar.width = 0

  window['PIXI'].loader.on("progress", res => {
    _progressbar.width = res.progress * (width / 100)
  });
  return _progressbar;
}
