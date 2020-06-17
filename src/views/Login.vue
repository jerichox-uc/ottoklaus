<template>
  <v-app>
    <v-card id="container" class="mx-auto my-auto">  
      <v-card-title class="pb-0">
      <h1>Otto Klaus</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="usuario"
          prepend-icon="mdi-account-circle"
          v-model="user"
          />
          <v-text-field label="contraseña" :type="showPassword? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          v-model="password"
          />
         
         </v-form>
      </v-card-text>
      <v-divider>

      </v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="info" @click="login">login</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import Firebase from 'firebase'

export default {
  name: 'App',

  
  data: () => ({
    user: '',
    password: '',
    showPassword: false
  }),
  methods: {
    login () {
      Firebase.auth().signInWithEmailAndPassword(this.user, this.password)
      .then(() => {
        this.$router.push('/toys')
      }).catch(() => {
        alert('nooooooooo')
      })
    }
  }
};
</script>
<style scoped>
#container {
  width: 400px;
}
</style>