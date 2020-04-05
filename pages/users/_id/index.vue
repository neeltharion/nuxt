<template>
      <!-- baraye route haie dynamic  file ya folder ra ba _ shoromikonim -->
      <div class="">
        {{id}} - {{username}}
      </div>
</template>

<script>
export default {
      validate (data) { console.log(data); return true
      } ,
      data() {
        return{
          id: this.$route.params.id ,
          username: this.$route.query.name
        }
      }
}
</script>

<style>

</style>
