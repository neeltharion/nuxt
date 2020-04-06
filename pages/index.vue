<template>
  <div class="container">
        <h1 class="h3 text-primary text-center mt-3">{{welcome}}</h1>
        <nuxt-link to="/" > Home </nuxt-link>
        <nuxt-link to="/users" prefetch > Users </nuxt-link>
        <nuxt-link to="/nested" prefetch> Nested </nuxt-link>
        <br>
        <BlackButton @clicked="log"> TEST </BlackButton>
        <h1 class="h3 text-center"> {{hellow}}</h1>
        <hr>
<small>This site is protected by reCAPTCHA and the Google
    <a href="https://policies.google.com/privacy">Privacy Policy</a> and
    <a href="https://policies.google.com/terms">Terms of Service</a> apply.
</small>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
   layout: 'default' ,
  components: {
  } ,
  data() {
    return{
      welcome: 'Welcome to NuxtJS',
      posts: []
    }
  } ,
  computed: {
        ...mapGetters('store' , ['hellow'])

  } ,


  methods: {
    log(){
      console.log('EMITTED')
    }
  },

  created() {

          this.$axios.get('http://localhost:3000/test').then(d=> console.log(d))

  }


}
</script>

<style>

      .big {
        font-size: 1.2rem;
      }
      a.nuxt-link-active {
        font-size: 2rem;
      }
      a:hover{
        text-decoration: none;

        transition: color 1s;

      }
      a{
                background: linear-gradient(to right bottom , red, rgb(255, 115, 0) , rgb(204, 11, 194));
                  background-clip: text;
                  color: transparent;


      }

</style>
