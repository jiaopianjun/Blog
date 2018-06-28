import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

import menustore from './menustore.js'

export default new vuex.Store({
    modules:{
    	menu:menustore
    }
})
