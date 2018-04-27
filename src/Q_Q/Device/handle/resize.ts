

import device from 'device-tool'

export default function (config): void {
    let scaleFactor: number;
    const { width, height } = config
    // 手機只針對寬做縮放
    if (device.mobile()) scaleFactor = window.innerHeight / height;
    else scaleFactor = Math.min(window.innerWidth  / width,
                                window.innerHeight / height);

    // 重新賦予 Canvas 長寬
    this.view.style.width  = `${ Math.ceil(width  * scaleFactor) }px`;
    this.view.style.height = `${ Math.ceil(height * scaleFactor) }px`;
}