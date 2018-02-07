import Vue from 'vue'
import Router from 'vue-router'
import SNMP from '@/components/SNMP'
import DHCP from '@/components/DHCP'
import SSH from '@/components/SSH'
import SysLog from '@/components/SysLog'
import Web from '@/components/Web'
import Algo from '@/components/Algo'
import BackUp from '@/components/BackUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/snmp',
      name: 'SNMP',
      component: SNMP
    },
    {
      path: '/dhcp',
      name: 'DHCP',
      component: DHCP
    },
    {
      path: '/ssh',
      name: 'SSH',
      component: SSH
    },
    {
      path: '/syslog',
      name: 'SysLog',
      component: SysLog
    },
    {
      path: '/web',
      name: 'Web',
      component: Web
    },
    {
      path: '/algo',
      name: 'Algo',
      component: Algo
    },
    {
      path: '/backup',
      name: 'BackUp',
      component: BackUp
    }
  ]
})
