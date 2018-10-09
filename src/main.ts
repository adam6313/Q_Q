import store from '@/store/store.js';
import Q_Q from './Q_Q';
import App from './App'

new Q_Q({
  el: 'body',
  store,
  container: { App },
  // DidMount() {
  //   this.$app.stage.addChild(this.App)
  // }
})