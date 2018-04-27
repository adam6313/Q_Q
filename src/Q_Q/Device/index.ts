import resize from './handle/resize';
import orientation from './handle/orientation'

export default function (config): void {
  const self = this
  resize.call(self, config);
  orientation.call(self, config)

  // window 監聽 resize
  // window.addEventListener("resize", (): void => {

  // }, false);

  window.addEventListener('resize', function() {
    // resize.call(self, config)
    orientation.call(self, config)
  }, false)

  // /* window 監聽 orientationchange */ {
  //   window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', function() {
  //     orientation.call(self, config)
  //   }, false);
  // }
}