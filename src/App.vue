<template>
  <div>
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">SiemUI</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="clipped" class="sidebar">
        <md-list>
          <md-list-item to="/snmp">
            <md-icon>assessment</md-icon>
            <span class="md-list-item-text">SNMP</span>
          </md-list-item>

          <md-list-item to="/dhcp">
            <md-icon>dns</md-icon>
            <span class="md-list-item-text">DHCP</span>
          </md-list-item>          

          <md-list-item to="/ssh">
            <md-icon>send</md-icon>
            <span class="md-list-item-text">SSH</span>
          </md-list-item>

          <md-list-item to="/syslog">
            <md-icon>list</md-icon>
            <span class="md-list-item-text">System Log</span>
          </md-list-item>

          <md-list-item to="/web">
            <md-icon>language</md-icon>
            <span class="md-list-item-text">Web</span>
          </md-list-item>

          <md-list-item to="/algo">
            <md-icon>dashboard</md-icon>
            <span class="md-list-item-text">Algo</span>
          </md-list-item> 

          <md-list-item to="/backup">
            <md-icon>backup</md-icon>
            <span class="md-list-item-text">Backup</span>
          </md-list-item>              

          <md-list-item to="/logout">
            <md-icon>exit_to_app</md-icon>
            <span class="md-list-item-text">Logout</span>
          </md-list-item> 

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <div id="app">
          <router-view/>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./assets/stylesheets/app.scss" scoped> </style>
