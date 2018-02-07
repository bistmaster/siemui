<template>
  <div class="page-container">
    <h2>DHCP</h2>
    <md-divider></md-divider>
    <div class="card-container">
      <md-card>
        <md-card-content>
          <form action="">
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-size-25">
                <md-field>
                  <label>IP Address</label>
                  <md-input v-model="dhcp.ipAddress" placeholder="192.168.10/24"></md-input>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-size-25">
                <md-field>
                  <label>Gateway</label>
                  <md-input v-model="dhcp.gateway"></md-input>
                </md-field>
              </div>
            </div> 
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-size-25">
                <md-field>
                  <label>DNS 1</label>
                  <md-input v-model="dhcp.dns1"></md-input>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-size-25">
                <md-field>
                  <label>DNS 2</label>
                  <md-input v-model="dhcp.dns2"></md-input>
                </md-field>
              </div>
            </div>                                     
          </form>
        </md-card-content>

        <md-card-actions>
          <md-button class="md-primary md-raised" @click="save()">Save</md-button>
          <md-button class="md-default md-raised" @click="clear()">Clear</md-button>
        </md-card-actions>
      </md-card>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'DHCP',
  data () {
    return {
      dhcp: {
        ipAddress: '',
        gateway: '',
        dns1: '',
        dns2: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./../assets/stylesheets/snmp.scss" scoped> </style>

