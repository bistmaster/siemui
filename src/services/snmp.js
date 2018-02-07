import Vue from 'vue'
import VueResource from 'vue-resource'

import API from './api'

Vue.use(VueResource);

export default {
  
  resource: Vue.resource(API.SNMP_URL),

  save: function (snmp) {
    return this.resource.save(snmp);
  },

  get: function () {
    return this.resource.get();
  }
 
}