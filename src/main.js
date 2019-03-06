console.log('ok');
import Vue from 'vue';
import app from './App.vue'

import {Header} from 'mint-ui';
Vue.component(Header.name,Header);

import './lib/mui/css/mui.css';

const vm = new Vue({
  el:"#app",
  render:c=>c(app)
});