
const fullscreen = document.querySelector('#fullscreen')
const landscape  = document.querySelector('#landscape')
let isLandscape = false;

import device from 'device-tool'

export default function() {
    if (device.mobile() || device.tablet()) {
    // 直屏 1
    if (device.IsOrientation() === 'portrait') {
        isLandscape = false
        ScreenTarget(1)
    }

    // 橫屏 2
    if (device.IsOrientation() === 'landscape') {
        isLandscape = true
        fullscreen['style'].height = document.documentElement.clientHeight + 400 + 'px';
        ScreenTarget(2)
    }
  } else {
    // 電腦 3
    ScreenTarget(3);
    this.view.style.visibility = 'visible';
    this.view.style.display    = 'block';
  }
}

/**
 * @argument { Number } num 1:直屏, 2:橫屏, 3:電腦
 */
function ScreenTarget(num: Number): void {
  landscape['style'].display     = num === 1 ? 'block'   : num === 2 ? 'none'   : num === 3 ? 'none'   : 'none';
  fullscreen['style'].display    = num === 1 ? 'none'    : num === 2 ? 'block'  : num === 3 ? 'none'   : 'none';
  landscape['style'].visibility  = num === 1 ? 'visible' : num === 2 ? 'hidden' : num === 3 ? 'hidden' : 'hidden';
  fullscreen['style'].visibility = num === 1 ? 'hidden'  : num === 2 ? 'visible': num === 3 ? 'hidden' : 'hidden';   
}