import 'pixi.js';

declare const PIXI: {
    Application: {
        new (width: number, height: number, {}: Object);
    }
}

export default class App extends PIXI.Application {
    constructor(element, config) {
      const { width, height } = config
      super(width, height, { transparent: true });
      this.renderEle(element)
    }

    renderEle(element) {
        document.querySelector(element).appendChild(this.view);
    }
}