// import { Container } from 'pixi.js';
import Progressbar from '@/components/Progressbar'
import Sprite from '@/components/Sprite';

declare const PIXI: {
    Sprite: {
        new ()
    }
}
export default class CircleContainer extends PIXI.Sprite {
    constructor() {
        super()
        // console.log(this)
    }
}