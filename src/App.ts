import { resources_load, resources_main } from '@/resources/index';
import { Sprite } from 'pixi.js';
import app2 from './App2';

export default {
  container: {
    app2,
  },
  async created() {
    await resources_load()
    await resources_main()
  },
  mounted() {
    // this = scope
    // this.$app = PIXI.Application
    this.Hello()
    // console.log(this)
    let sprite = new Sprite.fromImage('https://i.imgur.com/IaUrttj.png');
  },
  methods: {
    Hello() {
      console.log('Hello PIXI')
    },
  }
}