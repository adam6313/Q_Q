import { Container } from 'pixi.js'

export default class _Container extends (Container as { new() }) {
    constructor(...prop) {
        super()
        console.log(prop)
    }
}