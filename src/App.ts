import { resources_load, resources_main } from '@/resources/index'
import { Sprite } from 'pixi.js'

export default {
  async created() {
    await resources_load()
    await resources_main()
  },
  mounted() {
    // this = scope
    // this.$app = PIXI.Application

    this.Hello()
    let sprite = new Sprite.fromImage('https://i.imgur.com/IaUrttj.png');
    this.$app.stage.addChild(sprite)
  },
  methods: {
    Hello() {
      console.log('Hello PIXI')
    },
  }
}