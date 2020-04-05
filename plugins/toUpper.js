import Vue from 'vue'

const toUpper = val => val.toUpperCase()

Vue.filter('toUpper', toUpper)
