<template>
  <div>
      <app-bar></app-bar>
     <v-main>
       <v-btn @click="displayToyForm">New Toy</v-btn>
       <toys-list/> 
       <toy-form></toy-form>
       </v-main> 

      </div>
</template>

<script>
import ToysList from '../components/ToysList'
import AppBar from "../components/AppBar"
import ToyForm from '../components/ToyForm'
import {mapActions, mapState} from 'vuex'


export default {
 components: {
    AppBar,
    ToysList,
    ToyForm
},
computed: {
  ...mapState(['overlay'])
},
methods: { 
  ...mapActions(['displayToyForm'])
}
}
</script>

<style>

</style>