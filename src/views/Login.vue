<template>
  <div>
<h3>Please login with your google account to continue</h3>

<button @click="login">Login with google</button>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Login',

  methods: {
    async login() {
      const provider = new firebase.auth.GoogleAuthProvider();

      try {
        const result = await firebase.auth().signInWithPopup(provider);
        const token = result.credential.accessToken;
        const { user } = result;

        this.$router.push('/');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
