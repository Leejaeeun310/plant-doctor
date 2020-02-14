import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { AboutPage, Login, StoredPlant } from "./pages";

Vue.config.productionTip = false

Vue.use(VueRouter); // router 기능 확장 선언

const routes = [
  {
    path: "/",
    component: Login
  },
  {
    path: "/about",
    component: AboutPage
  },
  {
    path: "/storedplant",
    component: StoredPlant
  },
  

 
];


// router 객체생성
const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router // router 추가
}).$mount('#app')


