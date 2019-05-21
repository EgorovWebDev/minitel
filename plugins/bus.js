import Vue from 'vue'
import {Bus} from '~/lib/bus.js'


const plugin = {
  install (Vue, options) {
    const bus = new Bus()
    Vue.prototype.$bus = bus
  }
}

// console.info(plugin)
// Without options
Vue.use(plugin)
