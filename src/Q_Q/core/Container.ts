import { Container } from 'pixi.js';

export default class _Container extends (Container as { new() }) {
    constructor(...prop) {
        super()
        // const [vm] = prop
        const [vm, { $app, $options }] = prop
        vm['$options'] = $options
        vm['$app'] = $app
        _init($options, vm)
    }
}

async function _init(opts, vm) {
    if (opts.methods) initMethods(vm, opts.methods)
    if (opts.created) await callHook(vm, 'created')
    if (opts.mounted) await callHook(vm, 'mounted')
    if (opts.container) await initContainer(vm, opts.container)
}

async function initContainer(vm, container) {
    for (let key in container) {
      vm[key] = new _Container(container[key], {
         $app: vm.$app,
         $options: container[key] 
      })
      // await _init(container[key], {
      //    $app: vm.$app,
      //    $options: container[key]
      // })
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
  await handlers.call(vm)
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