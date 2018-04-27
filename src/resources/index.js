import swipe   from '@/assets/CellPhoneGif/zh-tw/swipe.gif'
import mac     from '@/assets/macOSSierrawallpaper_03Mac.jpg'
import big     from '@/assets/Retina-backgrounds-free.jpg'
import Load_BG from '../../static/loading/img_loading_ads.jpg'

export function resources_load() {
    window['PIXI'].loader
                  .add('Load_BG', Load_BG)
    return new Promise(resolve => {
      window['PIXI'].loader.load(() => resolve(true));
    })   
}

export function resources_main() {
    window['PIXI'].loader
                  .add('mac', mac)
                  .add('big', big)
                  .add('bunny', 'https://i.imgur.com/IaUrttj.png')
    return new Promise(resolve => {
      window['PIXI'].loader.load((loader, resources) => resolve(true));
    })   
}