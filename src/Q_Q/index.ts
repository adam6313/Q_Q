import App from './core/App'
import device from './Device'
import _container from './core/Container'

export default class {
    $options: Object
    $app:     Object
    $config:  Object
    $container_count: Number
    constructor(option: Object) {
        this.$options = option
        this.$config  = option['store'].getState().config
        this.$app     = new App(option['el'], this.$config)
        this.$container_count = 0
        device.call(this.$app, this.$config)
        _init(option, this)
    }
}

async function _init(opts, vm) {
    if (opts.methods) initMethods(vm, opts.methods)
    await callHook(vm, 'created')
    await callHook(vm, 'mounted')
    if (opts.container) await initContainer(vm, opts.container)
}

async function initContainer(vm, container) {
    for (let key in container) {
       await _init(container[key], {
          $app: vm.$app,
          $options: container[key] 
       })
    }
}

function initMethods(vm, methods) {
  for (let key in methods) {
    if (Object.prototype.toString.call(methods[key]) === '[object Function]') {
      vm[key] = bind(methods[key], vm) 
    } 
  }
}

async function callHook(vm, hook) {
  const handlers = vm.$options[hook];
  if (handlers) await handlers.call(vm)
}

function bind (fn, vm) {
    function boundFn (a) {
      var l = arguments.length;
      return l
        ? l > 1
          ? fn.apply(vm, arguments)
          : fn.call(vm, a)
        : fn.call(vm)
    }
    return boundFn
}