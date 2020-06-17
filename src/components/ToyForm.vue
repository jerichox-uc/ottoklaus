<template>
  <div class="text-center">
<v-dialog :value="showForm" width="500">
    <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
privacidad
<v-btn depressed small color="warning" class="ml-15 font-weight-black" @click="hideToyForm">cerrar</v-btn>
        </v-card-title>
       <v-text-field label="nombre" type="text" :value="currentToy.data.name" @input="updateName"/>
       <v-text-field label="precio" prefix="$" :value="currentToy.data.price" @input="updatePrice"/>
                  <v-text-field label="codigo" type="text" :value="currentToy.data.code" @input="updateCode"/>
                             <v-text-field label="stock" suffix="unidades" :value="currentToy.data.stock" @input="updatestock"/>
       
        <v-divider></v-divider>
        <v-btn></v-btn>
    </v-card>
      
      <v-card-actions>
<v-spacer></v-spacer>
<v-btn
color="primary"
text
@click="submitForm"
>
{{ !!currentToy.id ? 'actualizar' : 'Crear'}}
</v-btn>



      </v-card-actions>
</v-dialog>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
methods:{
    ...mapActions(['hideToyForm', 'updateName', 'updatePrice', 'updateCode', 'updateStock', 'postToy']),
    submitForm(){
      if(this.currentToy.id){
        //si tiene id se llama a la funcion que actuaiza los datos
        this.updateToy(this.currentToy.id)
      }else{ 
        this.postToy()
        }
this.hideToyForm()
    }
},
computed: {
    ...mapState(['showForm', 'currentToy'])
}
}
</script>

<style>

</style>