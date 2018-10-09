import resize from './handle/resize';
import orientation from './handle/orientation'

export default function (config): void {
  const self = this
  resize.call(self, config);
  
  // orientation.call(self, config)
  // window.addEventListener('resize', function() {
  //   orientation.call(self, config)
  // }, false)
}