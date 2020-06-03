import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/firestore';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const firebaseConfig = {
// firebase config
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
Vue.prototype.$db = db;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
