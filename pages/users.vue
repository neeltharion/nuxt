<template>
  <div class="container">

            <div class="form-group">
              <label for="">Enter Id </label>
              <input type="text"
                class="form-control" name="" id="id" v-model="id">

                  <label for="">Enter Name </label>
                  <input type="text"
                    class="form-control" name="" id="name" v-model="name" >

                    <button class="btn btn-primary mt-3" @click="goToUser">Go to User </button>
            </div>
            <nuxt-child />
  </div>
</template>

<script>
export default {


      data() {
            return{
              id: '' , name :''
            }
      } ,
      methods: {
        goToUser() {
          this.$router.push({path: '/users/'+ this.id , query: {name: this.name} , hash:'test'})
        }
      }
}
</script>

<style>

</style>
