<template>
      <div class="container">
        ROOT NESTED <br>
        <input type="text" @input="goToId" v-model="theId" >
              <nuxt-child />
              </div>

</template>

<script>
export default {

methods: {
    goToId() {
        this.$router.push({path:'/nested/' + this.theId})
    }
} ,
data() {
  return {
    theId: ''
  }
}
}

</script>

<style>

</style>
