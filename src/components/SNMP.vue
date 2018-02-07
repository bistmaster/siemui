<template>
  <div class="page-container">
    <h2>SNMP Configuration</h2>
    <md-divider></md-divider>

    <div class="card-container">
      <md-card>
        <md-card-content>
          <form action="">
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-size-25">
                <md-field>
                  <label>IP Address</label>
                  <md-input v-model="snmp.ipAddress"></md-input>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-size-25">
                <md-field>
                  <label>SNMP Port</label>
                  <md-input v-model="snmp.port"></md-input>
                </md-field>
              </div>
            </div> 
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-size-25">
                <md-field>
                  <label>SNMP Trap String</label>
                  <md-input v-model="snmp.trapString"></md-input>
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

import SNMPService from '@/services/snmp'

export default {
  name: 'SNMP',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      snmp: {
        ipAddress: '',
        port: '',
        trapString: ''
      }
    }
  },

  methods: {
    save () {
      SNMPService.save(this.snmp)
        .then(data => {
          console.log('Saved snmp');
        })
        .catch(error => {
          console.log('Error saving');
        })
    },

    clear () {
      this.snmp.ipAddress = ''
      this.snmp.port = ''
      this.snmp.trapString = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./../assets/stylesheets/snmp.scss" scoped> </style>
